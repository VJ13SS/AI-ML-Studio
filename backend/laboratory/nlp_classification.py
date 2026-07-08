import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder

from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier

from sklearn.metrics import accuracy_score,precision_score,recall_score,f1_score

def laboratory_nlp_classification(df,target,test_size = 0.2):
    models = {
    "Logistic Regression": LogisticRegression(),
    "Naive Bayes": MultinomialNB(),
    "Linear SVM": LinearSVC(),
    "Random Forest":RandomForestClassifier(n_estimators=100,random_state=42)
}

    df.dropna(inplace=True)

    y = df[target]
    X = df.drop(target,axis = 1)

    encoder =  LabelEncoder()
    y = encoder.fit_transform(y)

    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=test_size,random_state=42,stratify=y)

    vectorizer = TfidfVectorizer(stop_words="english",max_features=5000)

    X_train = vectorizer.fit_transform(X_train)
    X_test = vectorizer.transform(X_test)

    better_f1 = 0
    better_models = []
    results = []

    for name,model in models.items():
        res_item = {
    "model":name,
    "metrics":[]
}
        model.fit(X_train,y_train)
        y_pred = model.predict(X_test)

        accuracy = round(accuracy_score(y_test,y_pred),4)
        precision = round(precision_score(y_test,y_pred,average="weighted"),4)
        recall = round(recall_score(y_test,y_pred,average="weighted"),4)
        f1 = round(f1_score(y_test,y_pred,average="weighted"),4)

        res_item["metrics"].append({"metric":"Accuracy","value":accuracy})
        res_item["metrics"].append({"metric":"Precision","value":precision})
        res_item["metrics"].append({"metric":"Recall","value":recall})
        res_item["metrics"].append({"metric":"F1 Score","value":f1})

        if f1 >= better_f1:
            better_models.append(name)
            better_f1 = f1
        
        
        results.append(res_item)
    return {"problem_type":"NLP","better_models":better_models,"results":results}

