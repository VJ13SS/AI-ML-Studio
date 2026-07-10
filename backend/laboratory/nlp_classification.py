
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import LabelEncoder

from sklearn.linear_model import LogisticRegression
from sklearn.naive_bayes import MultinomialNB
from sklearn.svm import LinearSVC
from sklearn.ensemble import RandomForestClassifier

from sklearn.metrics import accuracy_score,precision_score,recall_score,f1_score

def laboratory_nlp_classification(X_train, X_test, y_train, y_test):
    models = {
    "Logistic Regression": LogisticRegression(),
    "Naive Bayes": MultinomialNB(),
    "Linear SVM": LinearSVC(),
    "Random Forest":RandomForestClassifier(n_estimators=100,random_state=42)
}

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
            if f1 == better_f1:
                better_models.append(name)
            else:
                better_models = [name]
                better_f1 = f1
        
        
        results.append(res_item)
    return {"problem_type":"NLP","better_models":better_models,"results":results}

