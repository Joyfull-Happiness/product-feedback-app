import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FeedbackCard({ feedback }) {
  return (
    <Link className="all-links" to={`/country-detail/${country.name.common}`}>
      <div className="FeedbackCard">
        <article className="card">
          <div className="card-body">
            <p>{filter.toLocaleString("en-US")}</p>
            <p>
              <strong>{feedback_title}</strong>
            </p>
            <p>{feedback_detail}</p>
            <p>{category}</p>
          </div>
        </article>
      </div>
    </Link>
  );
}
