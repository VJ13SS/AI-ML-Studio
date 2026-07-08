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

import pandas as pd
def laboratory_regression(df,target,test_size = 0.2):
    df.dropna(inplace=True)
    
    y = df[target]
    X = df.drop([target,"ocean_proximity"],axis=1)


    X_train,X_test,y_train,y_test = train_test_split(X,y,test_size=test_size,random_state=42)
    scaler = StandardScaler()

    X_train = scaler.fit_transform(X_train)
    X_test = scaler.transform(X_test)
    
    models = {
    "Linear Regression": LinearRegression(),
    "Ridge": Ridge(),
    "Lasso": Lasso(),
    "KNN": KNeighborsRegressor(),
    "Decision Tree": DecisionTreeRegressor(),
    "Random Forest": RandomForestRegressor(),
    "Gradient Boosting": GradientBoostingRegressor(),
    "AdaBoost": AdaBoostRegressor(),
    "SVM (SVR)": SVR()
}
    
    better_r2 = 0
    results = []
    better_models = []
    
    for name,model in models.items():
        res_item = {
    "model":name,
    "metrics":[]
}
        model.fit(X_train,y_train)
        y_pred = model.predict(X_test)
        mae = round(mean_absolute_error(y_test,y_pred),4)
        mse = round(mean_squared_error(y_test,y_pred),4)
        rmse = round(np.sqrt(mse),4)
        r2 = round(r2_score(y_test,y_pred),4)
        
        res_item["metrics"].append({"metric":"MAE","value":mae})
        res_item["metrics"].append({"metric":"MSE","value":mse})
        res_item["metrics"].append({"metric":"RMSE","value":rmse})
        res_item["metrics"].append({"metric":"R2 Score","value":r2})
        
         # models with higher r2 score indicates a good fit of the regression model
        if r2 >= better_r2:
            better_models.append(name)
            better_r2 = r2
        
        results.append(res_item)
    
    return {"problem_type":"Regression","better_models":better_models,"results":results}

housing = fetch_california_housing()

X = housing.data
y = housing.target

#print(laboratory_regression(X,'',0.2))
