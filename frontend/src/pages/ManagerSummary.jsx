import React from "react";
import { useEffect, useState } from "react";
import { getDevelopers, getMetrics } from "../services/api";
import { useNavigate } from "react-router-dom";

// 🎨 Color Logic (same as profile page)
const getColor = (type, value) => {
  switch (type) {
    case "leadTime":
      if (value < 24) return "green";
      if (value <= 48) return "yellow";
      return "red";

    case "cycleTime":
      if (value < 40) return "green";
      if (value <= 80) return "yellow";
      return "red";

    case "bugRate":
      if (value < 10) return "green";
      if (value <= 20) return "yellow";
      return "red";

    case "deployment":
      if (value > 10) return "green";
      if (value >= 5) return "yellow";
      return "red";

    case "pr":
      if (value > 15) return "green";
      if (value >= 8) return "yellow";
      return "red";

    default:
      return "";
  }
};

export default function ManagerSummary() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const devRes = await getDevelopers();
      const devs = devRes.data;

      const fullData = await Promise.all(
        devs.map(async (dev) => {
          const m = await getMetrics(dev.id);
          return { ...dev, metrics: m.data };
        })
      );

      setData(fullData);
    }

    fetchData();
  }, []);

  // 🧠 Team Health Logic
  const getTeamHealth = () => {
    let score = 0;

    data.forEach((d) => {
      const m = d.metrics;
      if (m.leadTime > 48) score++;
      if (m.bugRate > 20) score++;
      if (m.deploymentFrequency < 5) score++;
    });

    if (score === 0) return "Good";
    if (score <= 2) return "Needs Attention";
    return "Critical";
  };

  // 🚨 Top Concern Logic
  const getTopConcern = () => {
    let counts = {
      leadTime: 0,
      cycleTime: 0,
      bugRate: 0,
      deployment: 0,
      pr: 0
    };

    data.forEach((d) => {
      const m = d.metrics;

      if (m.leadTime > 48) counts.leadTime++;
      if (m.cycleTime > 80) counts.cycleTime++;
      if (m.bugRate > 20) counts.bugRate++;
      if (m.deploymentFrequency < 5) counts.deployment++;
      if (m.prThroughput < 8) counts.pr++;
    });

    const max = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

    return max[1] === 0 ? "No major concerns" : `Most issues in ${max[0]}`;
  };

  return (
    <div className="container">
      <h1>Manager Summary</h1>

      {/* 🟢 Team Health */}
      <div className="box">
        <h3>Team Health: {getTeamHealth()}</h3>
        <p>{getTopConcern()}</p>
      </div>

      {/* 📊 Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Lead Time</th>
            <th>Cycle Time</th>
            <th>Bug Rate</th>
            <th>Deploy Freq</th>
            <th>PR Throughput</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.name}</td>

              <td className={getColor("leadTime", d.metrics.leadTime)}>
                {d.metrics.leadTime}
              </td>

              <td className={getColor("cycleTime", d.metrics.cycleTime)}>
                {d.metrics.cycleTime}
              </td>

              <td className={getColor("bugRate", d.metrics.bugRate)}>
                {d.metrics.bugRate}%
              </td>

              <td className={getColor("deployment", d.metrics.deploymentFrequency)}>
                {d.metrics.deploymentFrequency}
              </td>

              <td className={getColor("pr", d.metrics.prThroughput)}>
                {d.metrics.prThroughput}
              </td>

              <td>
                <button onClick={() => navigate(`/profile/${d.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔙 Back */}
      <button onClick={() => navigate("/")}>Back to Developers</button>
    </div>
  );
}