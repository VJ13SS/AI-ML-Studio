const learning_Supervised_Learning = [
    {
      "title": "Regression",
      "category": "Supervised Learning",
      "subcategory": "Core Concepts",
      "description": "Regression is used when the target variable is continuous, such as predicting house prices or sales amounts. The model learns the relationship between input features and a numeric output.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/linear_model.html"
    },
    {
      "title": "Linear Regression",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Linear regression models the relationship between one or more input variables and a continuous target using a straight-line equation. It is simple, interpretable, and often used as a baseline model.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LinearRegression.html"
    },
    {
      "title": "Multiple Linear Regression",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Multiple linear regression extends simple linear regression by using several input features to predict one continuous target. It helps capture more complex relationships than a single variable model.",
      "image": "",
      "resourceLink": "https://www.statsmodels.org/stable/generated/statsmodels.regression.linear_model.OLS.html"
    },
    {
      "title": "Polynomial Regression",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Polynomial regression fits a curved line to data by adding polynomial terms to the model. It is useful when the relationship between variables is nonlinear.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.PolynomialFeatures.html"
    },
    {
      "title": "Ridge Regression",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Ridge regression adds L2 regularization to reduce overfitting and handle multicollinearity in linear models. It shrinks coefficients and improves generalization.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Ridge.html"
    },
    {
      "title": "Lasso Regression",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Lasso regression uses L1 regularization to shrink some coefficients to zero, making it useful for feature selection. It is often applied when many input features may be irrelevant.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.Lasso.html"
    },
    {
      "title": "Classification",
      "category": "Supervised Learning",
      "subcategory": "Core Concepts",
      "description": "Classification is used when the target variable belongs to a discrete category, such as spam or not spam, or disease yes/no. The model learns to assign input data to a class label.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/supervised_learning.html"
    },
    {
      "title": "Logistic Regression",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Logistic regression predicts the probability of a class using a sigmoid function. It is widely used for binary classification problems and is easy to interpret.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html"
    },
    {
      "title": "K-Nearest Neighbors (KNN)",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "KNN predicts labels based on the nearest neighboring data points in feature space. It is a simple instance-based algorithm that works well for many small datasets.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html"
    },
    {
      "title": "Naive Bayes",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Naive Bayes applies Bayes' theorem with a strong assumption of feature independence. It is fast, effective, and commonly used for text classification and spam detection.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/naive_bayes.html"
    },
    {
      "title": "Support Vector Machines (SVM)",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "SVM finds the optimal boundary that separates classes with the largest margin. It is powerful for both linear and nonlinear classification tasks.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVC.html"
    },
    {
      "title": "Decision Trees",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Decision trees split data into branches based on feature values to make predictions. They are easy to visualize and can handle both classification and regression tasks.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html"
    },
    {
      "title": "Random Forest",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Random forest builds many decision trees and combines their outputs for better accuracy and stability. It reduces overfitting compared with a single decision tree.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html"
    },
    {
      "title": "Gradient Boosting",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Gradient boosting builds models sequentially, where each new tree corrects the errors of the previous ones. It is a strong ensemble method known for high predictive performance.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.GradientBoostingClassifier.html"
    },
    {
      "title": "XGBoost",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "XGBoost is an optimized gradient boosting library known for speed and strong performance. It is widely used in machine learning competitions and real-world applications.",
      "image": "",
      "resourceLink": "https://xgboost.readthedocs.io/en/stable/"
    },
    {
      "title": "LightGBM",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "LightGBM is a fast and efficient gradient boosting framework that uses histogram-based learning. It is especially useful for large datasets and high-dimensional features.",
      "image": "",
      "resourceLink": "https://lightgbm.readthedocs.io/en/stable/"
    },
    {
      "title": "CatBoost",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "CatBoost is a gradient boosting library designed to handle categorical features effectively. It often requires less preprocessing and delivers strong performance out of the box.",
      "image": "",
      "resourceLink": "https://catboost.ai/"
    },
    {
      "title": "Elastic Net",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "Elastic Net combines L1 and L2 regularization to balance sparsity and stability in regression models. It is useful when features are highly correlated and feature selection is needed.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.ElasticNet.html"
    },
    {
      "title": "Support Vector Regression (SVR)",
      "category": "Supervised Learning",
      "subcategory": "Regression",
      "description": "SVR applies the principles of SVM to regression tasks by fitting a model within a margin of tolerance. It is effective for nonlinear regression problems and small to medium datasets.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/generated/sklearn.svm.SVR.html"
    },
    {
      "title": "Neural Networks",
      "category": "Supervised Learning",
      "subcategory": "Classification",
      "description": "Neural networks are flexible models inspired by the human brain, capable of learning complex patterns from labeled data. They are widely used for image, text, and speech tasks.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/modules/neural_networks_supervised.html"
    },
    {
      "title": "Overfitting and Underfitting",
      "category": "Supervised Learning",
      "subcategory": "Model Evaluation",
      "description": "Overfitting occurs when a model learns training data too closely and fails to generalize, while underfitting happens when the model is too simple to capture patterns. Balancing these is key to building reliable models.",
      "image": "",
      "resourceLink": "https://scikit-learn.org/stable/model_selection.html"
    }
  ]

  export default learning_Supervised_Learning