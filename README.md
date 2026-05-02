
# 📘 Developer Productivity MVP

A lightweight full-stack application that helps developers understand their productivity metrics and take actionable steps to improve.

---

## 🚩 Problem Statement

Engineering teams track metrics like lead time, cycle time, and bug rate, but these numbers alone don’t explain what’s actually happening.

Developers often struggle to answer:

* *Why is my lead time high?*
* *What should I do to improve?*

This creates a gap between **data → understanding → action**.

---

## 💡 Solution

This MVP focuses on bridging that gap.

It provides:

* A **Developer Profile (IC view)** showing key productivity metrics
* A **plain-English interpretation** explaining what those metrics indicate
* **Two actionable next steps** tailored to the developer’s situation

Additionally, a **Manager Summary view** gives a quick overview of team health and top concerns.

---

## 🛠 Tech Stack

**Frontend**

* React (Vite)
* React Router
* Axios

**Backend**

* Node.js
* Express

**Data**

* Mock JSON data (no database)

---

## ✨ Features

### 👨‍💻 Developer List

* Displays all developers with basic info
* Simple navigation to individual profiles

### 📊 IC Profile Page

* **Metric Cards (5 metrics):**

  * Lead Time
  * Cycle Time
  * Bug Rate
  * Deployment Frequency
  * PR Throughput
* Color-coded status:

  * 🟢 Good
  * 🟡 Warning
  * 🔴 Critical

### 🧠 Interpretation Layer

* Converts raw metrics into **plain-English insights**
* Explains what might be happening in the workflow

### ✅ Next Steps

* Provides **2 practical, actionable recommendations**
* Directly tied to detected issues

### 📈 Manager Summary Page

* Team-level overview in table format
* Color-coded metrics for quick scanning
* **Team Health Status** (Good / Needs Attention / Critical)
* **Top Concern Detection** across team
* Navigation to individual profiles

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd dev-productivity-mvp
```

### 2. Setup Backend

```bash
cd backend
npm install
node index.js
```

Backend runs on:

```
http://localhost:5000
```

---

### 3. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🎯 Design Decisions

### 1. Mock Data Instead of Database

* Focused on **product logic and insights**, not infrastructure
* Keeps the MVP lightweight and easy to evaluate
* Easily replaceable with real APIs (GitHub, Jira)

### 2. One Focused User Journey (IC)

* Prioritized **depth over breadth**
* Designed flow:
  **Metrics → Interpretation → Action**

### 3. Simple Backend

* Express server with minimal routes
* Core logic lives in interpretation function
* Easy to extend and scale

---

## 📊 Metric Thresholds

| Metric               | Good (Green) | Warning (Yellow) | Critical (Red) |
| -------------------- | ------------ | ---------------- | -------------- |
| Lead Time            | < 24 hrs     | 24–48 hrs        | > 48 hrs       |
| Cycle Time           | < 40 hrs     | 40–80 hrs        | > 80 hrs       |
| Bug Rate             | < 10%        | 10–20%           | > 20%          |
| Deployment Frequency | > 10/month   | 5–10             | < 5            |
| PR Throughput        | > 15         | 8–15             | < 8            |

---

## 🤖 AI Usage Report

AI tools (ChatGPT) were used to:

* Brainstorm **product structure and user flows**
* Generate initial **boilerplate code (React + Express)**
* Assist in writing **interpretation logic**
* Help structure **README and documentation**

### What I verified and understood:

* All business logic (metric thresholds, interpretation rules)
* API structure and data flow between frontend and backend
* UI behavior and component structure
* How insights map from metrics to actionable steps

All generated code was **reviewed, modified, and tested manually**.

---

## 🔮 Future Improvements

With more time, I would add:

* 📊 Trend charts (month-over-month metrics)
* 🎯 Overall developer/team health score
* 🧠 AI-generated deeper insights (LLM-based)
* 🔄 Real integrations (GitHub, Jira, CI/CD tools)
* 👥 Team comparison and benchmarking
* 📈 Progress tracking over time

---

## 🧭 Miro Board (User Journey)
```
[https://miro.com/app/board/uXjVHZFgtgg=/]
```

---

## ✅ Summary

This MVP demonstrates how developer productivity tools can move beyond dashboards and provide:

* **Clarity (interpretation)**
* **Direction (next steps)**
* **Actionable insights**

---

If you want, I can also:
👉 Make a **GitHub repo structure + screenshots section**
👉 Or optimize this README for **recruiter scanning (top-tier polish)**
