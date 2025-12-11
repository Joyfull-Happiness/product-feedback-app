import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./home.css";
import FeedbackCard from "../Components/FeedbackCard";
import FilterCard from "../Components/FilterCard";

// the next line defines the Home component which receives feedback data as a prop

export default function Home() {
  // here i am creating a usestate to hold the suggestions list
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getAllSuggestions = async () => {
    // declare a variable that will hold the response from the GET request to API endpoint /get-all-saved-countries
    const response = await fetch("/api/get-all-suggestions");
    // we're taking the raw data from the API and converting it into a js object
    // the response.json() turns the response object into the data we can use in out JS code
    const allSuggestionsData = await response.json();
    // we are setting the savedcountries state and saving all of the data as an array of objects (it's already )
    setSuggestions(allSuggestionsData);
  };

  // The next line counts how many suggestions exist using the length property
  const totalCount = suggestions.length;
  // const filteredFeedback = suggestions.filter((oneSuggestion) => {
  //   return oneSuggestion.category === selectedCategory;
  // });

  const getOneSuggestionByCategory = async () => {
    // declare a variable that will hold the response from the GET request to API endpoint /get-all-saved-countries
    const response = await fetch("/api/get-suggestions-by-category/:category");
    // we're taking the raw data from the API and converting it into a js object
    // the response.json() turns the response object into the data we can use in out JS code
    const getOneSuggestionCategory = await response.json();
    // we are setting the savedcountries state and saving all of the data as an array of objects (it's already )
    setSelectedCategory(getOneSuggestionCategory);
  };

  useEffect(() => {
    getAllSuggestions();
    getOneSuggestionByCategory();
  }, []);
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
        {/* notes */}
      </header>

      <main>
        <div className="filter-container">
          {suggestions.map((filterItem, index) => (
            <FilterCard key={index} filterItem={filterItem} />
          ))}
        </div>
        <div className="card-container">
          {suggestions.map((feedbackItem, index) => (
            <FeedbackCard key={index} feedbackItem={feedbackItem} />
          ))}
        </div>
      </main>
    </>
  );
}
