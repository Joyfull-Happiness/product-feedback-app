# 📝 Product Feedback App

## 📌 Project Description & Purpose

\*The Product Feedback App is a full-stack project that lets users submit, view, and filter feedback suggestions. It’s built to mirror a real-world product feedback flow and highlight my ability to design APIs, manage data, and surface meaningful information through a simple, responsive UI.\*

## 🚀 Live Site

Check out the app: https://your-project.netlify.app

## 🖼️ Screenshots

## ✨ Features

This is what you can do on the app:

- \*\*\* View all product feedback suggestions
- \*\*\* Submit a new feedback suggestion through a form
- \*\*\* Filter feedback by category to find relevant ideas
- \*\*\* See real-time updates as new suggestions are added

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML, CSS, JavaScript
- **Framework:** React, Vite
- **Deployment:** Netlify

**Server/API**

- **Languages:** JavaScript, JSON, SQL
- **Framework:** Node.js + Express
- **Deployment:** Render

**Database**

- **Languages:** SQL
- **Deployment:** Neon (PostgreSQL)

## 🔹 API Documentation

These are the API endpoints I built:

\*\*\* POST /add-one-suggestion

\*\*\* GET /get-suggestions-by-category/:category

\*\*\* GET /get-all-suggestions

Learn more about the API endpoints here: _**[api-documentation.md]**_

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:

```sql
Select * FROM suggestions
```

```sql
SELECT * FROM suggestions WHERE category = $1
```

```sql
INSERT INTO suggestions (feedback_title, category, feedback_detail) VALUES ($1, $2, $3)
```

## 💭 Reflections

**What I learned:** **_How to design and connect full-stack features, work with APIs and databases, and structure clean, readable code that supports real product workflows._**

**What I'm proud of:** **_Building a complete, working feedback system end to end—from the database and API to a responsive UI that surfaces meaningful data._**

**What challenged me:** **_Debugging data flow across the stack and making sure filtering, submissions, and updates behaved consistently across different states._**

**Future ideas for how I'd continue building this project:**

1. **_Add user authentication and roles for submitting and managing feedback._**
2. **_Improve filtering and sorting options (by date, popularity, or status)._**
3. **_Add analytics or admin views to help teams track feedback trends over time._**

## 🙌 Credits & Shoutouts

Thanks to **\_\_\_\_** for \***\*\_\_\*\***!
And thanks to **\_\_\_\_** for \***\*\_\_\*\***!
