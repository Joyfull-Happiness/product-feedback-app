import React from "react";
import "./FilterCard.css";
export default function FilterCard({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  // below I am returning the JSX that displays the pills inside one card
  return (
    <div className="filter-card">
      {categories.map((categoryName) => (
        <button
          key={categoryName}
          onClick={() => onCategoryChange(categoryName)}
          type="button"
          className={selectedCategory === categoryName ? "active" : ""}
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
}
