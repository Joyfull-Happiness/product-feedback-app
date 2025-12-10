import React from "react";
import "./FilterCard.css";

// below I am defining the FilterCard component and declaring the props it receives
export default function FilterCard({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  // below I am returning the JSX structure for the filter card
  return (
    // below I am rendering the single white card that will hold all category
    <div className="filter-card">
      {/* below I am looping through each category and rendering one button per category */}
      {categories.map((categoryName) => (
        // below I am rendering one pill button for the current category
        <button
          // below I am setting a unique key equal to the category name
          key={categoryName}
          // below I am applying an "active" class if this category is selected
          className={
            categoryName === selectedCategory
              ? "filter-pill filter-pill--active"
              : "filter-pill"
          }
          // below I am calling onCategoryChange and updating the selected category when a pill is clicked
          onClick={() => onCategoryChange(categoryName)}
          // below I am ensuring this button does not act as a form submit button
          type="button"
        >
          {/* below I am displaying the category name inside the pill */}
          {categoryName}
        </button>
      ))}
    </div>
  );
}

// export default function FilterCard({ filterItem }) {
//   return (
//     <div className="filter-card">
//       <button className="category-button">{filterItem.category}</button>
//     </div>
//   );
// }
