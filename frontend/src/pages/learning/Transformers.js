const learning_transformers = [
    {
      "title": "Attention Mechanism",
      "category": "Transformers",
      "subcategory": "Core",
      "description": "A way for models to weigh the importance of different input elements when producing outputs, enabling dynamic context-dependent representations.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/1706.03762"
    },
    {
      "title": "Self Attention",
      "category": "Transformers",
      "subcategory": "Core",
      "description": "A form of attention where a sequence's elements attend to each other, allowing the model to capture relationships and dependencies within the sequence.",
      "image": "",
      "resourceLink": "https://jalammar.github.io/illustrated-transformer/"
    },
    {
      "title": "Multi Head Attention",
      "category": "Transformers",
      "subcategory": "Core",
      "description": "Runs multiple attention mechanisms (heads) in parallel to capture different types of relationships and combine them for richer representations.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/1706.03762"
    },
    {
      "title": "Positional Encoding",
      "category": "Transformers",
      "subcategory": "Core",
      "description": "Since transformers lack recurrence, positional encodings inject information about token order (sinusoidal or learned) so models can reason about sequence positions.",
      "image": "",
      "resourceLink": "https://jalammar.github.io/illustrated-transformer/"
    },
    {
      "title": "Encoder",
      "category": "Transformers",
      "subcategory": "Architecture",
      "description": "The encoder stack processes input sequences to produce contextualized representations used by decoders or downstream tasks; consists of attention and feed-forward layers.",
      "image": "",
      "resourceLink": "https://huggingface.co/transformers/model_doc/bert.html"
    },
    {
      "title": "Decoder",
      "category": "Transformers",
      "subcategory": "Architecture",
      "description": "The decoder stack generates output sequences (e.g., translation) by attending to encoder outputs and previous decoder states, often using masked attention.",
      "image": "",
      "resourceLink": "https://huggingface.co/transformers/model_doc/gpt2.html"
    },
    {
      "title": "Transformer Architecture",
      "category": "Transformers",
      "subcategory": "Architecture",
      "description": "A sequence-to-sequence architecture built from stacked encoder and/or decoder layers using attention and pointwise feed-forward networks; it enabled major advances in NLP.",
      "image": "",
      "resourceLink": "https://arxiv.org/abs/1706.03762"
    }
  ]


export default learning_transformers