from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier,GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.naive_bayes import GaussianNB
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score,precision_score,recall_score,f1_score

def laboratory_classification(X_train, X_test, y_train, y_test):
    models = {
    "Logistic Regression":LogisticRegression(max_iter=1000),
    "KNN":KNeighborsClassifier(),
    "Decision Tree":DecisionTreeClassifier(),
    "Random Forest":RandomForestClassifier(),
    "Gradient Boosting":GradientBoostingClassifier(),
    "SVM (SVC)":SVC(),
    "Naive Bayes":GaussianNB()
    }

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
            if f1 == better_f1:
                better_models.append(name)
            else:
                better_models = [name]
                better_f1 = f1
        
        results.append(res_item)
    
    return {"problem_type":"Classification","better_models":better_models,"results":results}

data = load_breast_cancer()
X = data.data
y = data.target


#print(laboratory_classification(X,y))