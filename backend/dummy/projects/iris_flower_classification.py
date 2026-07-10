import pandas as pd
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report,confusion_matrix,accuracy_score
from sklearn.neighbors import KNeighborsClassifier

#load dataset
iris = load_iris()

X = pd.DataFrame(iris.data,columns=iris.feature_names)
y = iris.target

print(X.head())

#Split
X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)

#KNN
model = KNeighborsClassifier(n_neighbors=5)

model.fit(X_train,y_train)

#predict
y_pred = model.predict(X_test)

print(confusion_matrix(y_test,y_pred))
print(classification_report(y_test,y_pred))