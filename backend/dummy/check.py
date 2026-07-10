from preprocessing import run_preprocessing
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error,mean_squared_error,r2_score
from sklearn.preprocessing import StandardScaler
import numpy as np

df = pd.read_csv("housing.csv")
X_train, X_test, y_train, y_test = run_preprocessing(
    df=df,
    target_col="median_house_value",
    problem_type="regression",   # "regression" / "classification" / "nlp"
    test_size=0.2
)

model= LinearRegression()

model.fit(X_train,y_train)
y_pred = model.predict(X_test)
mae = round(mean_absolute_error(y_test,y_pred),4)
mse = round(mean_squared_error(y_test,y_pred),4)
rmse = round(np.sqrt(mse),4)
r2 = round(r2_score(y_test,y_pred),4)

print(mae,mse,rmse,r2)

# now feed X_train, X_test, y_train, y_test into your existing model training loop