const learning_RAG = [
    {
      "title": "What is RAG?",
      "category": "RAG",
      "subcategory": "Introduction",
      "description": "Retrieval-Augmented Generation combines a retriever (to fetch relevant documents or passages) with a generator (LLM) to produce answers grounded in external data.",
      "image": "",
      "resourceLink": "https://huggingface.co/blog/rag"
    },
    {
      "title": "Why RAG?",
      "category": "RAG",
      "subcategory": "Motivation",
      "description": "RAG improves factuality, reduces hallucinations, and enables up-to-date or domain-specific answers by providing the model with retrieved context at generation time.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/learn/rag/"
    },
    {
      "title": "Document Chunking",
      "category": "RAG",
      "subcategory": "Preprocessing",
      "description": "Splitting large documents into smaller, semantically-coherent chunks or passages to create retrievable units; chunk size and overlap affect recall and context relevance.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/learn/document-chunking/"
    },
    {
      "title": "Embeddings",
      "category": "RAG",
      "subcategory": "Retrieval",
      "description": "Transform text into dense vector representations so semantic similarity can be computed; embeddings are central to retrieval and similarity search.",
      "image": "",
      "resourceLink": "https://www.sbert.net/"
    },
    {
      "title": "Vector Databases",
      "category": "RAG",
      "subcategory": "Storage",
      "description": "Stores embeddings and supports efficient similarity search; examples include Pinecone, FAISS, Weaviate, and Chroma — essential for scalable retrieval.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/learn/what-is-a-vector-database/"
    },
    {
      "title": "Similarity Search",
      "category": "RAG",
      "subcategory": "Retrieval",
      "description": "Finding nearest neighbor vectors to a query embedding to retrieve candidate passages; typically uses ANN indexes for speed at scale.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/2006.10041"
    },
    {
      "title": "Retrieval",
      "category": "RAG",
      "subcategory": "Pipeline",
      "description": "The process of querying embeddings to fetch relevant chunks or documents that will be supplied as context to the generative model.",
      "image": "",
      "resourceLink": "https://huggingface.co/docs/transformers/main/en/main_classes/retrieval"
    },
    {
      "title": "Re-ranking",
      "category": "RAG",
      "subcategory": "Retrieval",
      "description": "A secondary scoring step that rescales or reorders retrieved candidates (often with cross-encoders) to improve the relevance of context passed to the generator.",
      "image": "",
      "resourceLink": "https://aclanthology.org/2020.findings-emnlp.83/"
    },
    {
      "title": "Context Injection",
      "category": "RAG",
      "subcategory": "Generation",
      "description": "Incorporating retrieved passages into the model prompt or conditioning context so the generator can use specific facts and reduce hallucinations.",
      "image": "",
      "resourceLink": "https://huggingface.co/blog/rag"
    },
    {
      "title": "RAG Pipeline",
      "category": "RAG",
      "subcategory": "End-to-end",
      "description": "Typical pipeline: ingest → chunk → embed → index → retrieve → (re-rank) → inject context → generate → (optionally) verify or post-process.",
      "image": "",
      "resourceLink": "https://www.pinecone.io/learn/rag/"
    },
    {
      "title": "Hybrid Search",
      "category": "RAG",
      "subcategory": "Retrieval",
      "description": "Combines lexical (keyword) search with semantic (embedding) search to capture both exact matches and semantic relevance, improving recall and precision.",
      "image": "",
      "resourceLink": "https://www.elastic.co/blog/hybrid-search"
    },
    {
      "title": "Prompt Engineering for RAG",
      "category": "RAG",
      "subcategory": "Generation",
      "description": "Designing prompts and context templates that present retrieved information effectively to the generator and guide the model to use the evidence correctly.",
      "image": "",
      "resourceLink": "https://www.promptingguide.ai/"
    },
    {
      "title": "Evaluation & Verification",
      "category": "RAG",
      "subcategory": "Quality",
      "description": "Assess retrieval and generation quality using metrics (e.g., recall, MRR, factuality checks) and human evaluation to ensure accurate, useful outputs.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/2305.17027"
    }
  ]

  export default learning_RAG