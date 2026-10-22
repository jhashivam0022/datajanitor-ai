# 🦥 DataJanitor AI — From Raw Data to Real Insights

**Turn raw datasets into meaningful insights with AI-powered exploratory data analysis and automated machine learning.**

DataJanitor AI is an open-source data analysis workbench designed to help developers, students, data analysts, and machine learning enthusiasts understand datasets without spending hours manually inspecting columns, writing repetitive analysis code, and creating charts.

Upload a CSV or Excel file, explore its structure, visualize patterns, identify data-quality issues, and work toward building machine learning models — all through one interface.

> 🚧 **Project status:** In development. Features described in the roadmap are planned unless explicitly marked as implemented.

## ✨ The Problem

Working with a new dataset often involves repetitive steps:

- Inspecting column types and statistical summaries.
- Finding missing values, duplicate records, and inconsistent data.
- Creating visualizations to understand distributions and relationships.
- Identifying useful features for machine learning.
- Writing repetitive code before reaching meaningful insights.

DataJanitor AI aims to simplify this workflow with interactive analysis, automated profiling, and explanations powered by open-source AI models.

## 🎯 Key Features

### 📂 Dataset Upload and Profiling
- Upload CSV and Excel datasets.
- Inspect rows, columns, data types, and statistical summaries.
- Identify missing values and duplicate records.
- Generate a dataset-quality overview.

### 📊 Exploratory Data Analysis
- **Univariate analysis:** Understand individual feature distributions.
- **Bivariate analysis:** Explore relationships between two variables.
- **Multivariate analysis:** Investigate correlations and interactions between multiple features.
- Interactive charts for numerical and categorical columns.
- Correlation heatmaps and distribution visualizations.

### 🤖 AI-Powered Insights
- Explain statistical patterns in plain language.
- Summarize important findings from a dataset.
- Help users understand correlations, distributions, and potential anomalies.
- Recommend relevant charts and follow-up analysis.

The goal is to use open-weight models such as Gemma or Qwen through a suitable inference setup, rather than depending entirely on closed-source AI APIs.

### 🧠 Automated Machine Learning — Planned
- Select target and input features.
- Support classification and regression workflows.
- Prepare data and split it into training and testing sets.
- Train and compare suitable machine learning models.
- Evaluate model performance and inspect feature importance.
- Generate predictions and export supported artifacts.

### 🔮 Future Possibilities
- Natural-language queries about datasets.
- Automated chart recommendations.
- Tabular prediction using TabPFN where appropriate.
- Fine-tuned models for structured analysis planning.
- Deployment options for local or cloud-based usage.

## 🛠️ Tech Stack

| Component | Technology |
|---|---|
| Frontend | React, Tailwind CSS |
| Backend API | Python, FastAPI |
| Data processing | Pandas, NumPy |
| Visualization | Plotly |
| Machine learning | Scikit-learn |
| Open-source AI | Gemma or Qwen via a compatible inference runtime |
| Tabular ML | TabPFN, if integrated |
| Deployment | Local development initially; cloud deployment planned |

*Technologies listed as options or planned integrations are not necessarily implemented yet.*

## 🏗️ Architecture

```text
                 ┌──────────────────────┐
                 │   React Frontend     │
                 │ Upload & Dashboard   │
                 └──────────┬───────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │    FastAPI Backend   │
                 │ Dataset Processing   │
                 └──────────┬───────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
       ┌────────────┐ ┌────────────┐ ┌────────────┐
       │ Pandas &   │ │ Plotly &   │ │ Open-Weight│
       │ NumPy      │ │ Statistics │ │ AI Models  │
       └────────────┘ └────────────┘ └────────────┘
                            │
                            ▼
                 ┌──────────────────────┐
                 │ Insights & Reports   │
                 └──────────────────────┘
```

This diagram represents the intended architecture; the final implementation may evolve as development progresses.

## 🚀 Getting Started

### Prerequisites

- Node.js and npm
- Python 3.10 or newer
- Git
- An optional compatible local model runtime if AI-powered explanations are enabled

### 1. Clone the repository

```bash
git clone https://github.com/jhashivam0022/datajanitor-ai.git
cd datajanitor-ai
```

### 2. Set up the backend

```bash
cd backend
python -m venv venv
```

Activate the environment:

**Windows**
```bash
venv\Scripts\activate
```

**macOS/Linux**
```bash
source venv/bin/activate
```

Install dependencies after the backend's `requirements.txt` has been created:

```bash
pip install -r requirements.txt
```

Start the API using the entry point configured in the project:

```bash
uvicorn main:app --reload
```

### 3. Set up the frontend

In a separate terminal:

```bash
cd frontend
npm install
npm run dev
```

Use the local URL printed by Vite to open the application.

> These commands assume the repository uses `backend/main.py`, a backend `requirements.txt`, and a Vite-based React frontend. Adjust the paths and entry point to match the actual project structure.

## 🗺️ Roadmap

- [ ] Build the initial dashboard and dataset-upload workflow.
- [ ] Implement dataset profiling and quality checks.
- [ ] Add interactive univariate and bivariate visualizations.
- [ ] Add correlation analysis and multivariate exploration.
- [ ] Integrate an open-weight model for natural-language insights.
- [ ] Add automated classification and regression workflows.
- [ ] Evaluate TabPFN for suitable tabular prediction tasks.
- [ ] Explore Tinker fine-tuning for chart recommendations or structured analysis plans.
- [ ] Add downloadable analysis reports.
- [ ] Deploy a working demo.

## 🌱 Open-Source AI and Innovation

DataJanitor AI explores how open-weight models can make data analysis more accessible, transparent, and adaptable.

The long-term goal is to combine conventional data-science libraries with open-source AI, allowing users to inspect their data, understand the results, and build predictive models through a unified workflow.

## 🤝 Contributing

Contributions, suggestions, bug reports, and feature ideas are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes and test them.
4. Open a pull request describing the improvement.

## 🔐 Privacy and Responsible Use

Datasets can contain sensitive information. The intended design favors local processing where practical, but actual data handling depends on the implemented deployment and inference configuration. Avoid uploading confidential or personal data to an untrusted deployment.

AI-generated explanations should be treated as suggestions and validated against the underlying data and statistical results.

## 📜 License

This project is intended to be open source. Add a `LICENSE` file and update this section once the project license has been selected.

## 🏆 Hacktoberfest 2026

Built as part of the **Hacktoberfest Open-Source AI Challenge — Week 3: Slow and Steady**.

The focus is on building a useful, maintainable AI-powered data-analysis tool with a clear path from dataset exploration to machine learning.

---

**DataJanitor AI — Less repetitive analysis. More meaningful insights.**
