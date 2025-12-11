import React from "react";
import "./FilterCard.css";
export default function FilterCard({ filterItem }) {
  return (
    <div className="filter-card">
      <button className="category-button">{filterItem.category}</button>
    </div>
  );
}
