
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier,GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,precision_score,recall_score,f1_score
import pandas as pd


def laboratory_classification(df,target,test_size = 0.2):
    models = {
    "Logistic Regression":LogisticRegression(max_iter=1000),
    "KNN":KNeighborsClassifier(),
    "Decision Tree":DecisionTreeClassifier(),
    "Random Forest":RandomForestClassifier(),
    "Gradient Boosting":GradientBoostingClassifier(),
    "SVM (SVC)":SVC(),
    "Naive Bayes":GaussianNB()
    }

    df.dropna(inplace=True)
    y = df[target]
    X = df.drop(target,axis=1)

    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=test_size,random_state=42)
    scaler = StandardScaler()

    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)

    results = []
    better_models = []
    better_f1 = 0

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
    
    return {"problem_type":"Classification","better_models":better_models,"results":results}

data = load_breast_cancer()
X = data.data
y = data.target


#print(laboratory_classification(X,y))