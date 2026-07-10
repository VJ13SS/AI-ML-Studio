"""
Generic preprocessing pipeline for tabular (regression/classification)
and NLP problems.
"""
import pandas as pd
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder, LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer

# Detect column types

def is_date_like(series, sample_size=20):
    sample = series.dropna().astype(str).head(sample_size)
    if len(sample) == 0:
        return False
    try:
        pd.to_datetime(sample, errors="raise",format="fixed")
        return True
    except Exception:
        return False


def profile_columns(df: pd.DataFrame, target_col: str):
    """Classify every non-target column into a type category."""
    profile = {}
    for col in df.columns:
        if col == target_col:
            continue

        s = df[col]
        n = len(s)
        n_unique = s.nunique(dropna=True)
        pct_missing = s.isna().mean()

        if pct_missing > 0.6:
            profile[col] = "drop_high_missing"
        elif n_unique <= 1:
            profile[col] = "drop_constant"
        elif pd.api.types.is_numeric_dtype(s):
            profile[col] = "numeric"
        elif is_date_like(s):
            profile[col] = "datetime"
        elif n_unique / n > 0.9:
            profile[col] = "drop_id_like"
        elif n_unique <= 100:
            profile[col] = "categorical"          # one-hot encode
        else:
            profile[col] = "text_or_high_card"     # too many uniques, drop for now

    return profile


# Expand datetime columns into numeric features

def expand_datetime_cols(df: pd.DataFrame, date_cols: list):
    df = df.copy()
    for col in date_cols:
        dt = pd.to_datetime(df[col], errors="coerce")
        df[f"{col}_year"] = dt.dt.year
        df[f"{col}_month"] = dt.dt.month
        df[f"{col}_day"] = dt.dt.day
        df[f"{col}_weekday"] = dt.dt.weekday
        df.drop(columns=[col], inplace=True)
    return df

# STEP 3: Build the ColumnTransformer based on the profile

def build_preprocessor(profile: dict):
    numeric_cols = [c for c, t in profile.items() if t == "numeric"]
    categorical_cols = [c for c, t in profile.items() if t == "categorical"]

    transformers = []

    if numeric_cols:
        num_pipe = Pipeline([
            ("impute", SimpleImputer(strategy="median")),
            ("scale", StandardScaler())
        ])
        transformers.append(("num", num_pipe, numeric_cols))

    if categorical_cols:
        cat_pipe = Pipeline([
            ("impute", SimpleImputer(strategy="most_frequent")),
            ("encode", OneHotEncoder(handle_unknown="ignore"))
        ])
        transformers.append(("cat", cat_pipe, categorical_cols))

    if not transformers:
        raise ValueError("No usable feature columns found after preprocessing.")

    preprocessor = ColumnTransformer(transformers, remainder="drop")
    return preprocessor


# STEP 4: Handle the target column

def process_target(y: pd.Series, problem_type: str):
    if problem_type == "classification" and y.dtype == object:
        le = LabelEncoder()
        y_encoded = le.fit_transform(y)
        return y_encoded, le
    return y.values, None


# STEP 5: NLP-specific preprocessing

def detect_text_column(X: pd.DataFrame):
    text_candidates = X.select_dtypes(include="object")
    if text_candidates.shape[1] == 0:
        raise ValueError("No text column found for NLP problem.")
    avg_lengths = text_candidates.apply(
        lambda col: col.astype(str).str.len().mean()
    )
    return avg_lengths.idxmax()


def build_nlp_preprocessor(max_features=5000):
    return TfidfVectorizer(
        max_features=max_features,
        stop_words="english",
        ngram_range=(1, 2)
    )


# Main 

def run_preprocessing(df: pd.DataFrame, target_col: str, problem_type: str, test_size: float):
    """
    df           : raw uploaded dataframe
    target_col   : name of the target column
    problem_type : "regression" | "classification" | "nlp"
    test_size    : e.g. 0.2

    Returns: X_train, X_test, y_train, y_test
    """
    if target_col not in df.columns:
        raise ValueError(f"Target column '{target_col}' not found in dataset.")

    df = df.dropna(subset=[target_col])  # can't train on missing target
    if len(df) < 5:
        raise ValueError("Not enough rows remaining after removing missing targets.")

    y = df[target_col]
    X = df.drop(columns=[target_col])

    # ---------------- NLP branch ----------------
    if problem_type == "nlp":
        text_col = detect_text_column(X)
        X_train, X_test, y_train, y_test = train_test_split(
            X[text_col], y, test_size=test_size, random_state=42
        )
        vectorizer = build_nlp_preprocessor()
        X_train_vec = vectorizer.fit_transform(X_train)
        X_test_vec = vectorizer.transform(X_test)
        return X_train_vec, X_test_vec, y_train, y_test

    # ---------------- Regression / Classification branch ----------------
    profile = profile_columns(X, target_col)

    # expand dates first, then re-profile (since new numeric cols get created)
    date_cols = [c for c, t in profile.items() if t == "datetime"]
    if date_cols:
        X = expand_datetime_cols(X, date_cols)
        profile = profile_columns(X, target_col)

    y_processed, label_encoder = process_target(y, problem_type)

    X_train, X_test, y_train, y_test = train_test_split(
        X, y_processed, test_size=test_size, random_state=42
    )

    preprocessor = build_preprocessor(profile)
    X_train_proc = preprocessor.fit_transform(X_train)
    X_test_proc = preprocessor.transform(X_test)

    return X_train_proc, X_test_proc, y_train, y_test
