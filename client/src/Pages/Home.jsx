import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./home.css";
import FeedbackCard from "../Components/FeedbackCard";
import FilterCard from "../Components/FilterCard";

export default function Home() {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const getAllSuggestions = async () => {
    const response = await fetch("/api/get-all-suggestions");
    const data = await response.json();

    console.log("Got all suggestions:", data);

    // Check if your "all" endpoint returns the array directly or inside data.suggestions
    // Try this first - if it doesn't work, change to: data.suggestions
    setSuggestions(Array.isArray(data) ? data : []);
  };

  const getSuggestionsByCategory = async (category) => {
    const response = await fetch(
      `/api/get-suggestions-by-category/${category}`
    );
    const data = await response.json();

    console.log(`Got data for ${category}:`, data);

    // The array is INSIDE data.suggestions!
    setSuggestions(Array.isArray(data.suggestions) ? data.suggestions : []);
  };

  const handleCategoryChange = (newCategory) => {
    // Add this console.log to see which button was clicked
    console.log("Button clicked:", newCategory);

    setSelectedCategory(newCategory);

    if (newCategory === "All") {
      getAllSuggestions();
    } else {
      getSuggestionsByCategory(newCategory);
    }
  };

  useEffect(() => {
    getAllSuggestions();
  }, []);

  // This useEffect watches for changes to suggestions
  useEffect(() => {
    console.log("Suggestions changed! Now showing:", suggestions);
    console.log("Number of suggestions:", suggestions.length);
  }, [suggestions]);

  const totalCount = suggestions.length;

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header-brand">
            <h1>My Company</h1>
            <p>Feedback board</p>
          </div>
        </div>

        <div className="header-bottom">
          <div className="suggestions">
            <img
              src="./src/assets/suggestions/icon-suggestions.svg"
              alt="add icon"
            />
            <span> {totalCount} Suggestions</span>
          </div>

          <Link to="/feedback" className="feedback-btn">
            + Add Feedback
          </Link>
        </div>
      </header>

      <main>
        <div className="filter-container">
          <FilterCard
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        <div className="card-container">
          {suggestions.length === 0 && <p>No suggestions found</p>}

          {suggestions.map((feedbackItem, index) => (
            <FeedbackCard key={index} feedbackItem={feedbackItem} />
          ))}
        </div>
      </main>
    </>
  );
}
