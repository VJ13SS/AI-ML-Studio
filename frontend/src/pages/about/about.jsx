import "./about.css";
import { LuLinkedin, LuMail } from "react-icons/lu";

export default function About() {
  return (
    <div className="about-section">
      <h1>
        About AI-ML <span>Studio</span>
      </h1>
      <div className="about-container">
        <div className="about-text">
          <p>
            AI-ML Studio is a centralized space for exploring the world of
            Artificial Intelligence and Machine Learning.
          </p>
          <br />
          <p>
            Rather than introducing new technologies, AI-ML Studio brings
            together learning resources, projects, tools, blogs, and
            experimentation capabilities into a single platform. It is designed
            for students, developers, and AI enthusiasts who want a convenient
            place to learn concepts, discover useful tools, explore real-world
            projects, and experiment with machine learning models.
          </p>
          <br />
          <p>
            Whether you're learning Linear Regression for the first time,
            comparing machine learning models on a dataset, exploring the latest
            AI tools, or browsing industry blogs, AI-ML Studio aims to make the
            journey simpler and more organized.
          </p>
        </div>
        <img src="./HeroImg.jpeg" alt="" />
      </div>

      <div className="about-cards">
        <div className="about-card">
          <i></i>
          <span>Learn</span>
          <p>
            Explore AI, ML, Deep Learning, Generative AI, Agentic AI, RAG, NLP,
            Computer Vision, and more through concise learning resources.
          </p>
        </div>
        <div className="about-card">
          <i></i>
          <span>Explore</span>
          <p>
            Browse project implementations and understand how different AI and
            ML concepts are applied in practice.
          </p>
        </div>
        <div className="about-card">
          <i></i>
          <span>Experiment</span>
          <p>
            Upload datasets, compare machine learning models, and gain insights
            through the built-in laboratory.
          </p>
        </div>
        <div className="about-card">
          <i></i>
          <span>Discover</span>
          <p>
            Find popular AI tools, frameworks, platforms, and resources used
            across the industry.
          </p>
        </div>
      </div>
      <div className="about-footer">
        <p>
          For Queries and Suggestions <span>Contact Us</span>
        </p>
        <div className="contact-icons">
          <a href="mailto:viswajith5749@gmail.com" className="mail">
            <i>
              <LuMail />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/viswajith-s-connect"
            className="linked-in"
          >
            <i>
              <LuLinkedin />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
