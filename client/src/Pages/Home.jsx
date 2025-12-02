import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./home.css";
import FeedbackCard from "../Components/FeedbackCard";

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
  const filteredFeedback = suggestions.filter((oneSuggestion) => {
    return oneSuggestion.category === selectedCategory;
  });

  useEffect(() => {
    getAllSuggestions();
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
          <h2>2 suggestions</h2>

          <Link to="/feedback" className="feedback-btn">
            + Add Feedback
          </Link>
        </div>
        {/* notes */}
      </header>

      <main>
        <div className="card-container">
          {filteredFeedback.map((oneFeedback, index) => (
            <FeedbackCard key={index} feedback={oneFeedback} />
          ))}
        </div>
      </main>
    </>
  );
}
