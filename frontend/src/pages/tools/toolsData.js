const tools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    description: "Conversational AI assistant for writing, coding, research, learning, and problem-solving.",
    website: "https://chatgpt.com",
    logo: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=128",
    display: true
  },
  {
    name: "Claude",
    category: "AI Assistant",
    description: "AI assistant focused on reasoning, writing, analysis, and long-context conversations.",
    website: "https://claude.ai",
    logo: "https://cdn.simpleicons.org/anthropic",
    display: true
  },
  {
    name: "Gemini",
    category: "AI Assistant",
    description: "Google's multimodal AI assistant capable of handling text, images, and code.",
    website: "https://gemini.google.com",
    logo: "https://cdn.simpleicons.org/googlegemini",
    display: true
  },
  {
    name: "Perplexity",
    category: "AI Assistant",
    description: "AI-powered answer engine that provides web-backed responses and citations.",
    website: "https://www.perplexity.ai",
    logo: "https://cdn.simpleicons.org/perplexity",
    display: true
  },
  {
    name: "Microsoft Copilot",
    category: "AI Assistant",
    description: "AI assistant integrated with Microsoft's productivity ecosystem.",
    website: "https://copilot.microsoft.com",
    logo: "./microsoft.jpeg",
    display: true
  },

  {
    name: "GitHub Copilot",
    category: "Coding Assistant",
    description: "AI pair programmer that assists with code generation and suggestions.",
    website: "https://github.com/features/copilot",
    logo: "https://cdn.simpleicons.org/githubcopilot",
    display: true
  },
  {
    name: "Cursor",
    category: "Coding Assistant",
    description: "AI-powered code editor built for modern software development.",
    website: "https://cursor.com",
    logo: "https://cdn.simpleicons.org/cursor",
    display: true
  },
  {
    name: "Windsurf",
    category: "Coding Assistant",
    description: "Agentic IDE designed for AI-assisted software engineering.",
    website: "https://windsurf.com",
    logo: "https://www.google.com/s2/favicons?domain=windsurf.com&sz=128",
    display: true
  },
  {
    name: "Codeium",
    category: "Coding Assistant",
    description: "AI coding assistant offering autocomplete, chat, and code generation.",
    website: "https://codeium.com",
    logo: "https://www.google.com/s2/favicons?domain=codeium.com&sz=128",
    display: true
  },

  {
    name: "Gamma",
    category: "Presentation Generation",
    description: "AI-powered tool for creating presentations, documents, and webpages.",
    website: "https://gamma.app",
    logo: "https://www.google.com/s2/favicons?domain=gamma.app&sz=128",
    display: true
  },
  {
    name: "Canva",
    category: "Design",
    description: "Graphic design platform with AI-powered content creation tools.",
    website: "https://www.canva.com",
    logo: "https://www.google.com/s2/favicons?domain=canva.com&sz=128",
    display: true
  },
  {
    name: "Napkin",
    category: "Visualization",
    description: "Creates visual diagrams and illustrations from text.",
    website: "https://www.napkin.ai",
    logo: "https://www.google.com/s2/favicons?domain=napkin.ai&sz=128",
    display: true
  },

  {
    name: "LangChain",
    category: "Agentic AI",
    description: "Framework for building LLM-powered applications and agents.",
    website: "https://www.langchain.com",
    logo: "https://cdn.simpleicons.org/langchain",
    display: true
  },
  {
    name: "LangGraph",
    category: "Agentic AI",
    description: "Framework for building stateful and multi-agent workflows.",
    website: "https://langchain-ai.github.io/langgraph/",
    logo: "https://www.google.com/s2/favicons?domain=langchain.com&sz=128",
    display: true
  },
  {
    name: "CrewAI",
    category: "Agentic AI",
    description: "Framework for orchestrating multiple AI agents.",
    website: "https://www.crewai.com",
    logo: "https://www.google.com/s2/favicons?domain=crewai.com&sz=128",
    display: true
  },
  {
    name: "AutoGen",
    category: "Agentic AI",
    description: "Microsoft framework for creating multi-agent AI systems.",
    website: "https://microsoft.github.io/autogen/",
    logo: "https://cdn.simpleicons.org/microsoft",
    display: true
  },

  {
    name: "Scikit-learn",
    category: "Machine Learning",
    description: "Popular machine learning library for classification, regression, and clustering.",
    website: "https://scikit-learn.org",
    logo: "https://cdn.simpleicons.org/scikitlearn",
    display: true
  },
  {
    name: "XGBoost",
    category: "Machine Learning",
    description: "Gradient boosting framework known for high-performance tabular learning.",
    website: "https://xgboost.ai",
    logo: "https://www.google.com/s2/favicons?domain=xgboost.ai&sz=128",
    display: true
  },
  {
    name: "LightGBM",
    category: "Machine Learning",
    description: "Efficient gradient boosting framework developed by Microsoft.",
    website: "https://lightgbm.readthedocs.io",
    logo: "https://www.google.com/s2/favicons?domain=lightgbm.readthedocs.io&sz=128",
    display: true
  },

  {
    name: "TensorFlow",
    category: "Deep Learning",
    description: "Open-source framework for machine learning and deep learning.",
    website: "https://www.tensorflow.org",
    logo: "https://cdn.simpleicons.org/tensorflow",
    display: true
  },
  {
    name: "PyTorch",
    category: "Deep Learning",
    description: "Deep learning framework widely used in research and production.",
    website: "https://pytorch.org",
    logo: "https://cdn.simpleicons.org/pytorch",
    display: true
  },
  {
    name: "Keras",
    category: "Deep Learning",
    description: "High-level neural network API built on top of TensorFlow.",
    website: "https://keras.io",
    logo: "https://cdn.simpleicons.org/keras",
    display: true
  },

  {
    name: "Hugging Face",
    category: "Model Hub",
    description: "Platform for sharing, training, and deploying AI models.",
    website: "https://huggingface.co",
    logo: "https://cdn.simpleicons.org/huggingface",
    display: true
  },
  {
    name: "Kaggle",
    category: "Datasets & Competitions",
    description: "Platform for datasets, notebooks, machine learning competitions, and courses.",
    website: "https://www.kaggle.com",
    logo: "https://cdn.simpleicons.org/kaggle",
    display: true
  },

  {
    name: "ChromaDB",
    category: "Vector Database",
    description: "Open-source vector database for AI applications.",
    website: "https://www.trychroma.com",
    logo: "https://www.google.com/s2/favicons?domain=trychroma.com&sz=128",
    display: true
  },
  {
    name: "Pinecone",
    category: "Vector Database",
    description: "Managed vector database for semantic search and RAG systems.",
    website: "https://www.pinecone.io",
    logo: "./pinecone_logo.jpeg",
    display: true
  },
  {
    name: "FAISS",
    category: "Vector Database",
    description: "Library for efficient similarity search and clustering.",
    website: "https://faiss.ai",
    logo: "https://www.google.com/s2/favicons?domain=faiss.ai&sz=128",
    display: true
  },

  {
    name: "MLflow",
    category: "MLOps",
    description: "Platform for experiment tracking and model lifecycle management.",
    website: "https://mlflow.org",
    logo: "https://cdn.simpleicons.org/mlflow",
    display: true
  },
  {
    name: "Weights & Biases",
    category: "MLOps",
    description: "Experiment tracking and model monitoring platform.",
    website: "https://wandb.ai",
    logo: "https://cdn.simpleicons.org/weightsandbiases",
    display: true
  },

  {
    name: "Jupyter Notebook",
    category: "Notebook",
    description: "Interactive environment for coding, visualization, and data analysis.",
    website: "https://jupyter.org",
    logo: "https://cdn.simpleicons.org/jupyter",
    display: true
  },
  {
    name: "Google Colab",
    category: "Notebook",
    description: "Cloud-hosted Jupyter notebooks with free GPU access.",
    website: "https://colab.research.google.com",
    logo: "https://cdn.simpleicons.org/googlecolab",
    display: true
  },

  {
    name: "Streamlit",
    category: "Deployment",
    description: "Framework for building interactive machine learning web apps.",
    website: "https://streamlit.io",
    logo: "https://cdn.simpleicons.org/streamlit",
    display: true
  },
  {
    name: "Gradio",
    category: "Deployment",
    description: "Framework for quickly creating ML model interfaces.",
    website: "https://www.gradio.app",
    logo: "https://cdn.simpleicons.org/gradio",
    display: true
  },
  {
    name: "FastAPI",
    category: "Backend",
    description: "Modern Python framework for building APIs and ML services.",
    website: "https://fastapi.tiangolo.com",
    logo: "https://cdn.simpleicons.org/fastapi",
    display: true
  },

  {
    name: "Midjourney",
    category: "Image Generation",
    description: "AI image generation platform known for high-quality artwork.",
    website: "https://www.midjourney.com",
    logo: "https://www.google.com/s2/favicons?domain=midjourney.com&sz=128",
    display: true
  },
  {
    name: "Stable Diffusion",
    category: "Image Generation",
    description: "Open-source text-to-image generation model.",
    website: "https://stablediffusionweb.com",
    logo: "./stable_diffusion.jpeg",
    display: true
  },
  {
    name: "Adobe Firefly",
    category: "Image Generation",
    description: "Generative AI suite for image creation and editing.",
    website: "https://firefly.adobe.com",
    logo: "https://www.google.com/s2/favicons?domain=firefly.adobe.com&sz=128",
    display: true
  },

  {
    name: "Runway",
    category: "Video Generation",
    description: "AI-powered video creation and editing platform.",
    website: "https://runwayml.com",
    logo: "./runway.jpeg",
    display: true
  },
  {
    name: "Pika",
    category: "Video Generation",
    description: "AI tool for generating and editing videos from prompts.",
    website: "https://pika.art",
    logo: "https://www.google.com/s2/favicons?domain=pika.art&sz=128",
    display: true
  },
  {
    name: "Synthesia",
    category: "Video Generation",
    description: "AI avatar platform for creating professional videos.",
    website: "https://www.synthesia.io",
    logo: "https://www.google.com/s2/favicons?domain=synthesia.io&sz=128",
    display: true
  }
];

export default tools;