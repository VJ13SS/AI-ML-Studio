const learning_Model_Evaluation_Metrics = [
    {
      "title": "Accuracy",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "The proportion of correct predictions out of all predictions. Useful for balanced datasets but can be misleading with class imbalance.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Precision",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "The ratio of true positive predictions to all positive predictions (true positives + false positives). Indicates how many predicted positives are actually correct.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Recall",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "Also called sensitivity; the ratio of true positives to all actual positives (true positives + false negatives). Shows how well the model finds all relevant cases.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "F1 Score",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "The harmonic mean of precision and recall, providing a single metric that balances both. Especially useful when classes are imbalanced.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Confusion Matrix",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "A table that shows counts of true positives, true negatives, false positives, and false negatives — helpful for diagnosing specific error types.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "ROC Curve",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "Receiver Operating Characteristic curve plots true positive rate vs false positive rate at different thresholds, illustrating the trade-off between sensitivity and specificity.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "AUC",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "Area Under the ROC Curve; a single scalar summarizing ROC performance. Higher AUC indicates better separability between classes.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Log Loss",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "Also known as logistic loss; measures the uncertainty of predictions by penalizing confident and wrong probabilistic predictions. Lower is better.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "MAE",
      "category": "Model Evaluation",
      "subcategory": "Regression",
      "description": "Mean Absolute Error computes the average absolute difference between predicted and actual values. It is robust to outliers compared to squared errors.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "MSE",
      "category": "Model Evaluation",
      "subcategory": "Regression",
      "description": "Mean Squared Error is the average of squared differences between predictions and actual values. It penalizes larger errors more heavily.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "RMSE",
      "category": "Model Evaluation",
      "subcategory": "Regression",
      "description": "Root Mean Squared Error is the square root of MSE, bringing the error metric back to the original units of the target variable for easier interpretation.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "R² Score",
      "category": "Model Evaluation",
      "subcategory": "Regression",
      "description": "Coefficient of determination that indicates the proportion of variance in the dependent variable explained by the model. Values closer to 1 are better.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Silhouette Score",
      "category": "Model Evaluation",
      "subcategory": "Clustering",
      "description": "Measures how similar a data point is to its own cluster compared to other clusters. Values range from -1 to 1; higher is better.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Generative AI",
      "category": "Model Evaluation",
      "subcategory": "Generative Models",
      "description": "Evaluation of generative models (images, text, audio) often uses a mix of automatic metrics, human judgments, and task-specific criteria to assess fidelity and diversity.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "BLEU",
      "category": "Model Evaluation",
      "subcategory": "NLP / Sequence Generation",
      "description": "Bilingual Evaluation Understudy score measures n-gram overlap between candidate and reference texts; commonly used for machine translation and text generation evaluation.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "ROUGE",
      "category": "Model Evaluation",
      "subcategory": "NLP / Summarization",
      "description": "Recall-Oriented Understudy for Gisting Evaluation; a set of metrics comparing overlap of n-grams, longest common subsequences, and skip-grams between system and reference summaries.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    },
    {
      "title": "Matthews Correlation Coefficient",
      "category": "Model Evaluation",
      "subcategory": "Classification",
      "description": "A balanced measure that takes into account true and false positives and negatives; considered a reliable single-score metric even with imbalanced classes.",
      "image": "",
      "resourceLink": "https://www.geeksforgeeks.org/machine-learning/"
    }
  ]

  export default learning_Model_Evaluation_Metrics