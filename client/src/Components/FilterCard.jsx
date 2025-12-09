import React from "react";

export default function FilterCard({ filterItem }) {
  return (
    <div className="FilterItemCard">
      <div className="card-body">
        <span className="category-button">{filterItem.category}</span>
      </div>
    </div>
  );
}
