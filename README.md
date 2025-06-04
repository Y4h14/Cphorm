# Cphorm
[![Python](https://img.shields.io/badge/python-3.10-blue.svg)](https://www.python.org/)
[![Build Status](https://github.com/STACK-42/Cphorm/actions/workflows/python-app.yml/badge.svg)](https://github.com/STACK-42/Cphorm/actions)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)


![Panel Screenshot](utiles/Panel.png)


---

#### 🧬 Cphorm

A *lightweight*, *offline-first health data collection and synchronization platform* designed for field workers, researchers, and organizations working in connectivity-challenged regions.

---

#### 🚀 Key Features

* Dynamic form creation - selecting your own parameters 

* Offline data entry & syncing when  online

* Clean web dashboard for accessing data, viewing submissions & regional health patterns 

* Role-based access (enumerators, reviewers)

### 🛠️ Tech Stack
* __Frontend__: React / Next.js / Tailwind CSS

* __Backend__: Flask / Node.js / 

* __Database__: Mongo DB

* __Data Pipeline__: Pandas


### 📦 Folder Structure

```bash
/Cphorm
├── form/
│   ├── back-end/
│   │   ├── app/
│   │   │   ├── __init__.py
│   │   │   ├── models.py
│   │   │   ├── routes.py
│   │   │   └── utils.py
│   │   ├── tests/
│   │   │   └── test_api.py
│   │   └── requirements.txt
│   └── front-end/
│       ├── components/
│       │   ├── FormBuilder.jsx
│       │   ├── Dashboard.jsx
│       │   └── Navbar.jsx
│       ├── pages/
│       │   ├── index.jsx
│       │   └── dashboard.jsx
│       ├── public/
│       │   └── favicon.ico
│       ├── styles/
│       │   └── globals.css
│       ├── utils/
│       │   └── api.js
│       └── package.json
├── platform/
│   ├── analytics/
│   │   ├── src/
│   │   │   └── data_generation.py
│   │   ├── tests/
│   │   │   └── test_analytics.py
│   │   ├── notebooks/
│   │   │   └── main.ipynb
│   │   └── __init__.py
│   └── dashboard/
│       ├── components/
│       │   └── Chart.js
│       └── app.py
├── utils/
│   └── helpers.py
├── docs/
│   └── architecture.md
└── README.md
```


### Prerequisites

- Python 3.10+  
  (Required for analytics, data generation, and backend scripts)
- Node.js (Recommended v18+ for frontend)
- pip (Python package manager)
- npm or yarn (Node.js package manager)
- MongoDB (for backend database)
- [Optional] Docker (for containerized deployment)

### Setup

```bash
git clone https://github.com/STACK-42/Cphorm.git
cd cphorm
```
Then follow setup steps for /frontend and /backend in their respective READMEs.

### 📊 Use Cases
- Health survey campaigns

- Rapid response to humanitarian crises (by detecting patterns early)

- Offline-first data collection in rural areas
