import React from "react";

export default function FeedbackCard({ feedbackItem }) {
  return (
    <div className="FeedbackCard">
      <div className="card-body">
        <p>
          <strong>{feedbackItem.feedback_title}</strong>
        </p>
        <p>{feedbackItem.feedback_detail}</p>
        <p>{feedbackItem.category}</p>
      </div>
    </div>
  );
}
