import React from "react";

export default function NextSteps({ steps }) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="box">
      <h3>Next Steps</h3>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </div>
  );
}