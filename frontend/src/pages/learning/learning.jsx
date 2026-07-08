import { useState } from "react";
import learning_Agentic_Ai from "./Agentic_AI";
import learning_AI_Fundamentals from "./AI_Fundamentals";
import learning_AI_Infrastructure from "./AI_Infrastructure";
import learning_Computer_Vision from "./Computer_Vision";
import learning_Deep_Learning from "./Deep_Learning";
import learning_Generative_AI from "./Generative_AI";
import "./learning.css";
import learning_Machine_Learning from "./Machine_Learning";
import learning_Mathematics from "./Mathematics";
import learning_MLOps from "./MLOps";
import learning_Model_Evaluation_Metrics from "./Model_Evaluation_Metrics";
import learning_Modern_AI_Trends from "./Modern_AI_Trends";
import learning_Natural_Language_Processing from "./Natural_Language_Processing";
import learning_Neural_Networks from "./Neural_Networks";
import learning_RAG from "./RAG";
import learning_Reinforcement_Learning from "./Reinforcement_Learning";
import learning_Supervised_Learning from "./Supervised_Learning";
import learning_transformers from "./Transformers";
import learning_unsupervised_learning from "./Unsupervised_Learning";

export default function Learning() {
  const [displayCategory, setDisplayCategory] = useState("All");

  const categories = {
    "Agentic AI": learning_Agentic_Ai,
    "AI Fundamentals": learning_AI_Fundamentals,
    "AI Infrastructure": learning_AI_Infrastructure,
    "Computer Vision": learning_Computer_Vision,
    "Deep Learning": learning_Deep_Learning,
    "Generative AI": learning_Generative_AI,
    "Machine Learning": learning_Machine_Learning,
    "Mathematics": learning_Mathematics,
    "MLOps": learning_MLOps,
    "Model Evaluation": learning_Model_Evaluation_Metrics,
    "Modern AI Trends": learning_Modern_AI_Trends,
    "Natural Language Processing": learning_Natural_Language_Processing,
    "Neural Networks": learning_Neural_Networks,
    "RAG": learning_RAG,
    "Reinforcement Learning": learning_Reinforcement_Learning,
    "Supervised Learning": learning_Supervised_Learning,
    "Transformers": learning_transformers,
    "Unsupervised Learning": learning_unsupervised_learning,
  };

  const allItems = Object.values(categories).flat();

  const getDisplayItems = () => {
    if (displayCategory === "All") {
      return allItems;
    }
    return categories[displayCategory] || [];
  };

  const getCategoryClass = (category) => {
    const mapping = {
      "Agentic AI": "purple",
      "Generative AI": "purple",
      "Modern AI Trends": "purple",
      "RAG": "purple",
      "AI Fundamentals": "blue",
      "Mathematics": "blue",
      "Machine Learning": "green",
      "Supervised Learning": "green",
      "Unsupervised Learning": "green",
      "Deep Learning": "indigo",
      "Neural Networks": "indigo",
      "Transformers": "indigo",
      "Reinforcement Learning": "indigo",
      "Natural Language Processing": "cyan",
      "Computer Vision": "cyan",
      "MLOps": "orange",
      "AI Infrastructure": "orange",
      "Model Evaluation": "orange",
    };
    return mapping[category] || "gray";
  };

  const displayList = getDisplayItems();

  return (
    <div className="learning-page">
      <div className="learning-header">
        <h1>Learning / Concepts</h1>
        <p className="learning-subtitle">
          Explore and learn core AI & ML concepts with easy explanations and resources.
        </p>
      </div>

      <div className="learning-content">
        <aside className="learning-sidebar">
          <h2 className="sidebar-title">Categories</h2>
          <div className="learning-categories-list">
            <button
              className={`category-item-btn ${displayCategory === "All" ? "active" : ""}`}
              onClick={() => setDisplayCategory("All")}
            >
              All
            </button>
            {Object.keys(categories).map((category, idx) => (
              <button
                key={idx}
                className={`category-item-btn ${displayCategory === category ? "active" : ""}`}
                onClick={() => setDisplayCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>

        <main className="learning-main">
          <div className="learning-items-list">
            {displayList.map((item, idx) => (
              <div key={idx} className="learning-card">
                <div className="learning-card-header">
                  <h3 className="learning-card-title">{item.title}</h3>
                  <span className={`learning-card-badge badge-${getCategoryClass(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <p className="learning-card-description">{item.description}</p>
                {item.resourceLink && (
                  <a
                    href={item.resourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="learning-card-link"
                  >
                    Learn More <span className="arrow">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
