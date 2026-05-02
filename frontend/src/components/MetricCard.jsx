import React from "react";

const getColor = (type, value) => {
  switch (type) {
    case "leadTime":
      return value < 24 ? "green" : value <= 48 ? "yellow" : "red";

    case "cycleTime":
      return value < 40 ? "green" : value <= 80 ? "yellow" : "red";

    case "bugRate":
      return value < 10 ? "green" : value <= 20 ? "yellow" : "red";

    case "deployment":
      return value > 10 ? "green" : value >= 5 ? "yellow" : "red";

    case "pr":
      return value > 15 ? "green" : value >= 8 ? "yellow" : "red";

    default:
      return "";
  }
};

export default function MetricCard({ label, value, unit, type }) {
  return (
    <div className={`metric-card ${getColor(type, value)}`}>
      <h4>{label}</h4>
      <p>
        {value} {unit}
      </p>
    </div>
  );
}