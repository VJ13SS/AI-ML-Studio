# preprocessing.py — Pipeline Overview

## Purpose

Prepares an uploaded dataset for model training. Automatically handles missing
values, categorical encoding, date columns, and column-type detection, then
returns train/test splits ready to feed into model training.

Supports three problem types: `regression`, `classification`, `nlp`.

## Where to find it

- Implementation: `backend/laboratory/preprocessing.py`

## High-level pipeline

1. **Validate input** — check target column exists in the dataset.
2. **Drop rows with missing target** values.
3. **Separate features (X) and target (y)**.
4. **Branch by problem type:**
   - **NLP** → detect text column → TF-IDF vectorize → split → return.
   - **Regression / Classification** →

     a. Profile every column (numeric / categorical / datetime / drop).

     b. Expand date columns into year/month/day/weekday.

     c. Re-profile after date expansion.

     d. Encode target if needed (classification only).

     e. Split into train/test.

     f. Build and apply `ColumnTransformer` (impute + scale numeric, impute + one-hot encode categorical).

5. **Return** `X_train, X_test, y_train, y_test`.

## Typical inputs & outputs

- **Inputs:** `pandas.DataFrame`, target column name, problem type, test size.
- **Outputs:** `X_train`, `X_test` (numpy arrays / sparse matrix for NLP), `y_train`, `y_test`.

## Functions

| Function                                                     | Purpose                                                             |
| ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `is_date_like(series, sample_size=20)`                       | Checks if a column looks like dates                                 |
| `profile_columns(df, target_col)`                            | Classifies each column: numeric / categorical / datetime / drop\_\* |
| `expand_datetime_cols(df, date_cols)`                        | Converts date columns into year/month/day/weekday numeric columns   |
| `build_preprocessor(profile)`                                | Builds a `ColumnTransformer` (scaling + one-hot encoding)           |
| `process_target(y, problem_type)`                            | Label-encodes target if classification and target is text           |
| `detect_text_column(X)`                                      | Finds the text column for NLP problems                              |
| `build_nlp_preprocessor(max_features=5000)`                  | Builds a `TfidfVectorizer` for NLP                                  |
| `run_preprocessing(df, target_col, problem_type, test_size)` | Main entry point — runs the full pipeline                           |

`run_preprocessing()` is the only function your backend needs to call directly.

## Quick usage example

```python
from backend.laboratory.preprocessing import run_preprocessing

X_train, X_test, y_train, y_test = run_preprocessing(
    df=your_dataframe,
    target_col="price",
    problem_type="regression",   # or "classification" or "nlp"
    test_size=0.2
)
```

Pass `X_train, X_test, y_train, y_test` directly into your model training loop.

## Column type rules (simplified)

| Condition                     | Action                                      |
| ----------------------------- | ------------------------------------------- |
| More than 60% missing values  | Dropped                                     |
| Only 1 unique value           | Dropped                                     |
| Numeric values                | Median-imputed, then scaled                 |
| Text with ≤ 100 unique values | Most-frequent-imputed, then one-hot encoded |
| Text with > 90% unique values | Dropped (likely an ID)                      |
| Text with > 100 unique values | Dropped (likely free text)                  |
| Date-like values              | Converted into year/month/day/weekday       |

## Notes and tips

- Encoders/scalers are fit only on training data (`fit_transform`), then applied
  to test data (`transform`) — this avoids target leakage.
- `random_state=42` is fixed in `train_test_split` for reproducibility.
- One-hot encoding is used for all categorical columns (no target encoding),
  so very high-cardinality columns are dropped instead of encoded — keeps the
  pipeline simple but is a known limitation for datasets like zip codes.
- For NLP problems, only one detected text column is used — mixed text +
  tabular datasets are not yet supported.

## Known limitations

- Categorical columns close to 100 unique values will create many one-hot
  columns, which can slow down training on large datasets.
- Columns with more than 100 unique text values are dropped completely, even
  if they contain useful information (e.g. product descriptions).
- Multi-label columns (e.g. `"tags": "action,comedy,drama"`) are not handled
  and will likely be dropped or mishandled by the profiler.

## Requirements

```
pandas
numpy
scikit-learn
```

Install with:

```
pip install pandas numpy scikit-learn
```
