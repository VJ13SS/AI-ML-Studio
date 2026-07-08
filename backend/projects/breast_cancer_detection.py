from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report,confusion_matrix
import pandas as pd

#dataset
data = load_breast_cancer()

X = pd.DataFrame(data.data,columns=data.feature_names)
y = data.target

print(X.head)
#split
X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)

#sacling 
scaler = StandardScaler()

X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

#model
model = LogisticRegression(max_iter=1000)

model.fit(X_train,y_train)

#predict
y_pred = model.predict(X_test)

print(confusion_matrix(y_test,y_pred))
print(classification_report(y_test,y_pred))