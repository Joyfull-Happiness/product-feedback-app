# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                                                                            |
| ------------- | ------ | ---------------------------- | -------------------------------------------------------------------------------------- |
| `suggestions` | GET    | /get-all-suggestions         | `Retrieves all the suggestions from the database`                                      |
| `suggestions` | GET    | /get-suggestions-by-category | `Retrieves all the suggestions from the database according to the category requested ` |
| `suggestions` | POST   | /add-one-suggestion          | `Adds a new suggestion to the the database`                                            |

---

### 🔹 GET `/get-all-suggestions`

**Description:**
`Retrieves all the suggestions from the database`
**Example Request URL:**

```
http://localhost:3000/get-all-suggestions
```

**Example Response:**

```

[
  {
    "feedback_title": "Add tags for solutions",
    "category": "Enhancement",
    "feedback_detail": "Easier to search for solutions based on a specific stack."
  },
  {
    "feedback_title": "Add a dark theme option",
    "category": "Feature",
    "feedback_detail": "It would help peopole with light sensitivities and who prefer dark mode."
  },
  {
    "feedback_title": "Q&A within the challenege hubs",
    "category": "Feature",
    "feedback_detail": "Challenge Specific Q&A would make for easy reference"
  }
]

```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:**
`Get a list of the suggestions with the same category`

**Example Request URL:**

```
http://localhost:3000/get-suggestions-by-category/:category
```

**Example Response:**

```

[
  {
    "feedback_title": "Add a dark theme option",
    "category": "Feature",
    "feedback_detail": "It would help peopole with light sensitivities and who prefer dark mode."
  },
  {
    "feedback_title": "Q&A within the challenege hubs",
    "category": "Feature",
    "feedback_detail": "Challenge Specific Q&A would make for easy reference"
  }
]


```

---

### 🔹 POST `/add-one-suggestion`

**Description:**
`add a new suggestion to the category`

**Example Request URL:**

```
http://localhost:3000/add-one-suggestion

```

**Example Request Body:**

```

[
    {
        "feedback_title": "Allow image/video upload",
        "category": "Enhancement",
        "feedback_detail": "Challenege-specific Q&A would make for easy reference"
    }
]

```

**Example Response:**

```

Success! Your suggestion is saved!

```
