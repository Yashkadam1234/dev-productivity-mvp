import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeveloperCard({ dev }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="avatar">{dev.avatar}</div>
      <h2>{dev.name}</h2>
      <p>{dev.role}</p>
      <p className="team">{dev.team}</p>

      <button onClick={() => navigate(`/profile/${dev.id}`)}>
        View Profile
      </button>
    </div>
  );
}