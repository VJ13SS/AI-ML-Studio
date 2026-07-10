# AI/ML Studio

AI/ML Studio is an educational and interactive platform for exploring artificial intelligence and machine learning concepts. It combines a modern React frontend with Python-based machine learning examples, making it a practical resource for learning, experimentation, and project showcases.

## Overview

This repository is designed for students, beginners, and developers who want to understand AI/ML topics through a simple and visually organized experience. The project includes:

- a learning portal for AI/ML concepts
- a projects section with real-world ML examples
- a laboratory area for experimenting with models
- tools and blog content for further exploration

## Features

- Responsive and modern UI built with React and Vite
- Structured navigation for learning, projects, tools, and blogs
- Python-based ML examples for classification, regression, and NLP-related tasks
- Clean project organization for easier exploration and extension

## Project Structure

```text
AI_ML_Studio/
├── backend/
│   └── laboratory/
│       ├── classification.py
│       ├── laboratory.py
│       ├── nlp_classification.py
│       ├── preprocessing.py
│       ├── preprocessing_README.md
│       └── regression.py
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── public/
    │   ├── favicon.svg
    │   ├── icons.svg
    │   └── (images & assets)
    └── src/
        ├── App.jsx
        ├── App.css
        ├── main.jsx
        ├── assets/
        ├── components/
        │   ├── hero/
        │   ├── navbar/
        │   ├── sidebar/
        │   └── sidebar_mobile/
        ├── context/
        │   └── AppContext.jsx
        └── pages/
            ├── about/
            ├── blogs/
            ├── home/
            ├── laboratorty/
            ├── learning/
            ├── projects/
            └── tools/
```

- `backend/laboratory/` — Python ML scripts for classification, regression, NLP, and data preprocessing experiments
- `frontend/src/components/` — Reusable UI components (hero, loader, navbar, sidebar, sidebar_mobile)
- `frontend/src/pages/` — Page-level views for each route (home, about, learning, projects, laboratory, tools, blogs)
- `frontend/src/context/` — App-wide state via React Context

## Tech Stack

### Frontend

- React 19
- Vite 8
- React Router DOM 7
- React Icons 5
- Axios

### Backend

- Python 3
- `classification.py` — classification model experiments
- `regression.py` — regression model experiments
- `nlp_classification.py` — NLP text classification
- `preprocessing.py` — data preprocessing utilities
- `laboratory.py` — general lab runner script

## Getting Started

### Prerequisites

- Node.js and npm installed
- Python 3.x installed

### Frontend Setup

1. Open the project folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal.

### Backend Setup

1. Navigate to the laboratory folder:
   ```bash
   cd backend/laboratory
   ```
2. Run the Python script:
   ```bash
   python laboratory.py
   ```

## Main Pages

- Home
- About
- Learning
- Projects
- Laboratory
- Tools
- Blogs

## Why This Project?

AI/ML Studio is a simple but effective starting point for building AI/ML learning applications. It can be used as a portfolio project, a learning resource, or a foundation for more advanced ML-based web apps.

## License

This project is open for personal and educational use.
