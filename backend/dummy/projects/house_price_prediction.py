from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error,mean_squared_error,r2_score
import pandas as pd
from sklearn.datasets import fetch_california_housing
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression,Ridge,Lasso
from sklearn.neighbors import KNeighborsRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor,GradientBoostingRegressor,AdaBoostRegressor
from sklearn.svm import SVR
from sklearn.metrics import mean_absolute_error,mean_squared_error,r2_score
from sklearn.preprocessing import StandardScaler
import numpy as np

def predict(check_model,X_train,X_test,y_train,y_test):
    model = check_model
    model.fit(X_train,y_train)

    y_pred = model.predict(X_test)

    mae = mean_absolute_error(y_test,y_pred)
    mse = mean_squared_error(y_test,y_pred)
    r2 = r2_score(y_test,y_pred) #measure of goodness or fit of the model [0,1]
    
    print('\nModel performance')
    print(f"MAE: {mae:.4f}")
    print(f"MSE: {mse:.4f}")
    print(f"R2 Score: {r2:.4f}")

#dataset
housing = fetch_california_housing()

#features and target
X = pd.DataFrame(housing.data,columns = housing.feature_names)
y = housing.target

print(f'Dataset Shape: {X.shape}')
print("\nFeatures:")
print(X.head())

#Split data
X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=0.2,random_state=42)
predict(LinearRegression(),X_train,X_test,y_train,y_test)
predict(Ridge(),X_train,X_test,y_train,y_test)
predict(Lasso(),X_train,X_test,y_train,y_test)
predict(KNeighborsRegressor(),X_train,X_test,y_train,y_test)
predict(DecisionTreeRegressor(),X_train,X_test,y_train,y_test)
predict(RandomForestRegressor(),X_train,X_test,y_train,y_test)
predict(AdaBoostRegressor(),X_train,X_test,y_train,y_test)
predict(GradientBoostingRegressor(),X_train,X_test,y_train,y_test)

'''
#Train model
model = LinearRegression()
model.fit(X_train,y_train)

#prediction
y_pred = model.predict(X_test)

#evaluation
mae = mean_absolute_error(y_test,y_pred)
mse = mean_squared_error(y_test,y_pred)
r2 = r2_score(y_test,y_pred) #measure of goodness or fit of the model [0,1]

print('\nModel performance')
print(f"MAE: {mae:.4f}")
print(f"MSE: {mse:.4f}")
print(f"R2 Score: {r2:.4f}")

#example prediction
sample = X_test.iloc[[0]]
prediction = model.predict(sample)

print("\nSample House Features:")
print(sample)

print("\nPredicted House Price:")
print(f"{prediction[0] * 100000:.2f}")
'''
