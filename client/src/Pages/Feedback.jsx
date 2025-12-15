import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Feedback.css";

export default function Feedback() {
  const emptyFormState = {
    feedback_title: "",
    category: "",
    feedback_detail: "",
  };
  // this holds the current state of the form inputs
  const [feedbackFormData, setFeedbackFormData] = useState(emptyFormState);
  // Step 1: Declare a new function called storeUserData() which should send a POST request to the APT to the /add-one-user endpoint
  // Step 2: Call the storeUserData() function on submit

  const addOneSuggestion = async () => {
    // when we call the fetch() function, we only need to pass in the API url as one parameter when it's a GET request
    // but hen we need to make a POST request, we have to pass in a second parameter: an object
    await fetch("/api/add-one-suggestion", {
      method: "POST", // we need to say we're sending a POST request because by default it's always a GET request
      headers: {
        // the headers is where we put metadata about our request, including the data type that we pass in the body
        // in this case we are saying we're  passing in JSON data in the body
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feedback_title: feedbackFormData.feedback_title,
        category: feedbackFormData.category,
        feedback_detail: feedbackFormData.feedback_detail,
      }),
    });
  };

  // This line defines the change handler for all form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // "..." is a spread operator which passes each item of the array in seperately
    setFeedbackFormData({ ...feedbackFormData, [name]: value });
    console.log("feedbackForm", feedbackFormData);
    console.log("FIELD NAME:", name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(feedbackFormData, "form was submitted");

    // storing the form data into local storage:
    addOneSuggestion();

    // reset the form to empty state
    setFeedbackFormData(emptyFormState);
  };

  return (
    <>
      <div className="add-feedback-page">
        <a href="/" className="go-back">
          ← Go Back
        </a>

        <div className="add-feedback-card">
          <div className="add-icon">
            <img
              src="./src/assets/icons/icon-new-feedback.svg"
              alt="add icon"
            />
          </div>

          <h2>Create New Feedback</h2>

          <form onSubmit={handleSubmit} className="feedback-form">
            <label>Feedback Title</label>
            <p className="field-hint">Add a short, descriptive headline</p>
            <input
              type="text"
              name="feedback_title"
              value={feedbackFormData.feedback_title}
              onChange={handleInputChange}
            />

            <label>Category</label>
            <p className="field-hint">Choose a category for your feedback</p>
            <select
              name="category"
              value={feedbackFormData.category}
              onChange={handleInputChange}
            >
              <option value="">Select...</option>
              <option value="Feature">Feature</option>
              <option value="Enhancement">Enhancement</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Bug">Bug</option>
            </select>

            <label>Feedback Detail</label>
            <p className="field-hint">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              rows="5"
              name="feedback_detail"
              value={feedbackFormData.feedback_detail}
              onChange={handleInputChange}
            ></textarea>

            <div className="form-buttons">
              <Link to="/" className="cancel-btn">
                Cancel
              </Link>

              <button type="submit" className="add-btn">
                Add Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
