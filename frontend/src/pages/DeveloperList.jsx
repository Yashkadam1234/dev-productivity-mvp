import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getDevelopers } from "../services/api";
import DeveloperCard from "../components/DeveloperCard";

export default function DeveloperList() {
  const [developers, setDevelopers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getDevelopers().then(res => setDevelopers(res.data));
  }, []);

  return (
    <div className="container">
      {/* 🔝 Header */}
      <div className="header">
        <h1>Developer Productivity Dashboard</h1>

        {/* 🧠 Manager View Button */}
        <button onClick={() => navigate("/manager")}>
          Manager Summary
        </button>
      </div>

      {/* 👨‍💻 Developer Cards */}
      <div className="grid">
        {developers.map(dev => (
          <DeveloperCard key={dev.id} dev={dev} />
        ))}
      </div>
    </div>
  );
}