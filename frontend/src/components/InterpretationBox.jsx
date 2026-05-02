import React from "react";

export default function InterpretationBox({ summary }) {
  const hasValidSummary =
    typeof summary === "string" && summary.trim().length > 0;

  return (
    <div className="box">
      <h3>Interpretation</h3>
      <p>
        {hasValidSummary
          ? summary
          : "Insights will appear once metrics are analyzed."}
      </p>
    </div>
  );
}