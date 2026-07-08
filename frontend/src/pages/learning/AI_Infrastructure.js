const learning_AI_Infrastructure = [
    {
      "title": "Vector Databases",
      "category": "AI Infrastructure",
      "subcategory": "Storage",
      "description": "Specialized databases optimized for storing and searching vector embeddings. Enable efficient similarity search and are foundational for retrieval-augmented applications.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/learn/what-is-a-vector-database/"
    },
    {
      "title": "ChromaDB",
      "category": "AI Infrastructure",
      "subcategory": "Vector DB",
      "description": "An open-source embedding database designed for developers and small-to-medium scale applications, with simple APIs and integrations for LLM-powered apps.",
      "image": "",
      "resourceLink": "https://www.trychroma.com/"
    },
    {
      "title": "Pinecone",
      "category": "AI Infrastructure",
      "subcategory": "Vector DB",
      "description": "A managed vector database service that provides scalable, low-latency vector search with features like namespaces, filtering, and metadata support.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/"
    },
    {
      "title": "FAISS",
      "category": "AI Infrastructure",
      "subcategory": "Vector DB",
      "description": "Facebook AI Similarity Search (FAISS) is a library for efficient similarity search and clustering of dense vectors, suitable for large-scale on-premise use.",
      "image": "",
      "resourceLink": "https://github.com/facebookresearch/faiss"
    },
    {
      "title": "Weaviate",
      "category": "AI Infrastructure",
      "subcategory": "Vector DB",
      "description": "An open-source vector search engine with built-in semantic search, schema support, and integrations for embeddings and knowledge-graph style data.",
      "image": "",
      "resourceLink": "https://www.semi.technology/"
    },
    {
      "title": "Indexing & ANN",
      "category": "AI Infrastructure",
      "subcategory": "Search",
      "description": "Approximate Nearest Neighbor (ANN) indexing techniques (HNSW, IVF, PQ) speed up similarity search by trading off exactness for performance and memory efficiency.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/2006.10041"
    },
    {
      "title": "Model Serving",
      "category": "AI Infrastructure",
      "subcategory": "Serving",
      "description": "Deploying models as services for real-time or batch inference. Covers APIs, autoscaling, request routing, batching, and observability for production workloads.",
      "image": "",
      "resourceLink": "https://www.kubeflow.org/docs/components/serving/"
    },
    {
      "title": "GPU vs CPU",
      "category": "AI Infrastructure",
      "subcategory": "Hardware",
      "description": "GPUs offer massive parallelism ideal for training and large-batch inference; CPUs are cost-effective for light-weight or latency-sensitive workloads.",
      "image": "",
      "resourceLink": "https://developer.nvidia.com/blog/gpu-vs-cpu/"
    },
    {
      "title": "Quantization",
      "category": "AI Infrastructure",
      "subcategory": "Optimization",
      "description": "Reducing model precision (e.g., FP32 → INT8) to decrease memory footprint and speed up inference with minimal accuracy loss when applied carefully.",
      "image": "",
      "resourceLink": "https://pytorch.org/docs/stable/quantization.html"
    },
    {
      "title": "Inference",
      "category": "AI Infrastructure",
      "subcategory": "Serving",
      "description": "The process of running trained models to produce predictions. Includes considerations like latency, throughput, batching, and scaling strategies.",
      "image": "",
      "resourceLink": "https://www.tensorflow.org/tfx/serving"
    },
    {
      "title": "Fine Tuning",
      "category": "AI Infrastructure",
      "subcategory": "Modeling",
      "description": "Adapting pre-trained models to a specific task or domain by additional training on task-specific data, improving task performance with less data and compute.",
      "image": "",
      "resourceLink": "https://huggingface.co/docs/transformers/training"
    },
    {
      "title": "LoRA",
      "category": "AI Infrastructure",
      "subcategory": "Optimization",
      "description": "Low-Rank Adaptation (LoRA) is a parameter-efficient fine-tuning method that injects low-rank matrices into transformer layers to adapt large models cheaply.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/2106.09685"
    },
    {
      "title": "PEFT",
      "category": "AI Infrastructure",
      "subcategory": "Optimization",
      "description": "Parameter-Efficient Fine-Tuning (PEFT) encompasses techniques like LoRA and adapters to fine-tune large models using fewer trainable parameters.",
      "image": "",
      "resourceLink": "https://huggingface.co/blog/peft"
    },
    {
      "title": "Serverless & Edge Inference",
      "category": "AI Infrastructure",
      "subcategory": "Deployment",
      "description": "Running inference close to users (edge) or on-demand via serverless platforms to reduce latency, cost, and dependency on central servers.",
      "image": "",
      "resourceLink": "https://www.oreilly.com/library/view/building-serverless-ml/9781098108811/"
    },
    {
      "title": "Batch vs Real-time Inference",
      "category": "AI Infrastructure",
      "subcategory": "Serving",
      "description": "Batch inference processes large datasets offline for throughput-oriented tasks; real-time inference serves single requests with low latency for online apps.",
      "image": "",
      "resourceLink": "https://cloud.google.com/architecture/batch-processing"
    }
  ]

  export default learning_AI_Infrastructure