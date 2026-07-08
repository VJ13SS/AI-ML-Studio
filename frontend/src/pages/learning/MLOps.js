const learning_MLOps = [
    {
      "title": "What is MLOps?",
      "category": "MLOps",
      "subcategory": "Introduction",
      "description": "A set of practices that combines machine learning, DevOps, and data engineering to operationalize ML workflows. Covers automation, collaboration, and governance across the model lifecycle.",
      "image": "",
      "resourceLink": "https://en.wikipedia.org/wiki/MLOps"
    },
    {
      "title": "Model Deployment",
      "category": "MLOps",
      "subcategory": "Deployment",
      "description": "The process of packaging and delivering trained models to production environments (APIs, batch jobs, edge devices). Includes serving, scaling, and latency considerations.",
      "image": "",
      "resourceLink": "https://aws.amazon.com/machine-learning/model-deployment/"
    },
    {
      "title": "CI/CD for ML",
      "category": "MLOps",
      "subcategory": "Automation",
      "description": "Continuous integration and continuous delivery adapted for ML: automate testing, model validation, and deployment pipelines while managing data and model artifacts.",
      "image": "",
      "resourceLink": "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-ml-systems"
    },
    {
      "title": "Model Monitoring",
      "category": "MLOps",
      "subcategory": "Observability",
      "description": "Ongoing tracking of model performance, inputs, and outputs in production to detect degradation, anomalies, or operational issues; enables timely interventions.",
      "image": "",
      "resourceLink": "https://www.databricks.com/glossary/model-monitoring"
    },
    {
      "title": "Data Drift",
      "category": "MLOps",
      "subcategory": "Monitoring",
      "description": "Changes in the input data distribution over time that can degrade model performance. Detecting drift is key to triggering retraining or data pipeline fixes.",
      "image": "",
      "resourceLink": "https://towardsdatascience.com/data-drift-in-machine-learning-9f8d6b8c5a8b"
    },
    {
      "title": "Model Drift",
      "category": "MLOps",
      "subcategory": "Monitoring",
      "description": "When a model's predictive performance worsens over time due to changes in data, environment, or concept; requires monitoring metrics and periodic retraining.",
      "image": "",
      "resourceLink": "https://www.oreilly.com/content/monitoring-and-maintaining-machine-learning-models/"
    },
    {
      "title": "Experiment Tracking",
      "category": "MLOps",
      "subcategory": "Reproducibility",
      "description": "Recording experiment metadata (hyperparameters, datasets, metrics, code) to reproduce results and compare models. Critical for collaboration and auditability.",
      "image": "",
      "resourceLink": "https://mlflow.org/docs/latest/tracking.html"
    },
    {
      "title": "MLflow",
      "category": "MLOps",
      "subcategory": "Tools",
      "description": "An open-source platform for the ML lifecycle providing experiment tracking, model packaging, and a model registry to manage production models.",
      "image": "",
      "resourceLink": "https://mlflow.org/"
    },
    {
      "title": "Feature Store",
      "category": "MLOps",
      "subcategory": "Data",
      "description": "A centralized system to store, serve, and manage features for training and inference; ensures consistency between offline training and online serving.",
      "image": "",
      "resourceLink": "https://docs.databricks.com/applications/mlflow/feature-store/index.html"
    },
    {
      "title": "Model Registry",
      "category": "MLOps",
      "subcategory": "Tools",
      "description": "A repository to version, stage, and manage models (e.g., staging, production). Facilitates governance, approvals, and controlled rollouts.",
      "image": "",
      "resourceLink": "https://mlflow.org/docs/latest/model-registry.html"
    },
    {
      "title": "Data Versioning",
      "category": "MLOps",
      "subcategory": "Reproducibility",
      "description": "Keeping immutable, versioned copies of datasets used for training and evaluation to enable exact recreation of experiments and debugging.",
      "image": "",
      "resourceLink": "https://neptune.ai/blog/data-versioning"
    },
    {
      "title": "Infrastructure as Code",
      "category": "MLOps",
      "subcategory": "Operations",
      "description": "Defining deployment infrastructure (compute, networking, storage) as code for repeatable, auditable, and version-controlled provisioning.",
      "image": "",
      "resourceLink": "https://aws.amazon.com/devops/what-is-infrastructure-as-code/"
    },
    {
      "title": "Canary / Blue-Green Deployment",
      "category": "MLOps",
      "subcategory": "Deployment",
      "description": "Deployment strategies to roll out models gradually (canary) or switch traffic between environments (blue-green) to reduce risk and enable safe rollback.",
      "image": "",
      "resourceLink": "https://martinfowler.com/bliki/BlueGreenDeployment.html"
    },
    {
      "title": "Explainability & Governance",
      "category": "MLOps",
      "subcategory": "Ethics",
      "description": "Tools and practices to interpret model decisions, ensure fairness, and satisfy regulatory or business governance requirements in production ML systems.",
      "image": "",
      "resourceLink": "https://www.ibm.com/topics/explainable-ai"
    },
    {
      "title": "Security & Compliance",
      "category": "MLOps",
      "subcategory": "Operations",
      "description": "Protecting models and data from adversarial threats and ensuring compliance with data privacy regulations; includes access controls and auditing.",
      "image": "",
      "resourceLink": "https://cloud.google.com/security"
    }
  ]

  export default learning_MLOps