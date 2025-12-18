# 📝 Product Feedback App

## 📌 Project Description & Purpose

\*The Product Feedback App is a full-stack project that lets users submit, view, and filter feedback suggestions. It’s built to mirror a real-world product feedback flow and highlight my ability to design APIs, manage data, and surface meaningful information through a simple, responsive UI.\*

## 🚀 Live Site

Check out the app: product-feedback-app-lajoie.netlify.app 
## 🖼️ Screenshots

<img width="692" height="952" alt="Screenshot 2025-12-18 at 12 14 57 PM" src="https://github.com/user-attachments/assets/efe3ce75-7859-4941-8055-9a7554d436bc" />


<img width="689" height="843" alt="Screenshot 2025-12-18 at 12 18 14 PM" src="https://github.com/user-attachments/assets/8fef01fe-0dae-41f7-bedc-8f3b9cc3d8bc" />


<img width="696" height="704" alt="Screenshot 2025-12-18 at 12 18 20 PM" src="https://github.com/user-attachments/assets/fa359372-42a5-41ce-ae2f-d291befb8c47" />


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

Learn more about the API endpoints here: https://github.com/Joyfull-Happiness/product-feedback-app/blob/main/api-documentation.md 

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:

```
CREATE TABLE suggestions (
  suggestions_id SERIAL PRIMARY KEY,
  feedback_title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  feedback_detail VARCHAR NOT NULL
);
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

Thanks to **Arianna** for veing an incredible instructor!
And thanks to **Bakari and Makeba** for helping debug when needed!
