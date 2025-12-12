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
      {/* below I am looping through the categories array and rendering one pill for each category */}
      {categories.map((categoryName) => (
        <button
          key={categoryName}
          onClick={() => onCategoryChange(categoryName)}
          type="button"
        >
          {categoryName}
        </button>
      ))}
    </div>
  );
}
