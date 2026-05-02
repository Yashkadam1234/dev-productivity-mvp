import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMetrics, getInterpretation } from "../services/api";

import MetricCard from "../components/MetricCard";
import InterpretationBox from "../components/InterpretationBox";
import NextSteps from "../components/NextSteps";

import { generateFallbackInterpretation } from "../utils/generateFallbackInterpretation";

export default function Profile() {
  const { id } = useParams();

  const [metrics, setMetrics] = useState(null);
  const [interpretation, setInterpretation] = useState({
    summary: "",
    nextSteps: [],
    developer: "",
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const metricsRes = await getMetrics(id);
        const metricsData = metricsRes.data;
        setMetrics(metricsData);

        const interpRes = await getInterpretation(id);

        const summary =
          interpRes.data?.summary?.trim() ||
          generateFallbackInterpretation(metricsData);

        setInterpretation({
          summary,
          nextSteps:
            interpRes.data?.nextSteps?.length > 0
              ? interpRes.data.nextSteps
              : [
                  "Request faster PR reviews from teammates — aim for review within 4 hours of opening",
                  "Check if deployment pipeline has any bottlenecks causing delays",
                ],
          developer:
            interpRes.data?.developer ||
            metricsData?.name ||
            "Developer Profile",
        });
      } catch (error) {
        console.error("Profile load error:", error);

        if (metrics) {
          setInterpretation({
            summary: generateFallbackInterpretation(metrics),
            nextSteps: [
              "Request faster PR reviews from teammates — aim for review within 4 hours of opening",
              "Check if deployment pipeline has any bottlenecks causing delays",
            ],
            developer: metrics?.name || "Developer Profile",
          });
        }
      }
    }

    fetchData();
  }, [id]);

  if (!metrics) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>{interpretation.developer}</h1>

      {/* Metrics Row */}
      <div className="metrics-row">
        <MetricCard label="Lead Time" value={metrics.leadTime} unit="hrs" type="leadTime" />
        <MetricCard label="Cycle Time" value={metrics.cycleTime} unit="hrs" type="cycleTime" />
        <MetricCard label="Bug Rate" value={metrics.bugRate} unit="%" type="bugRate" />
        <MetricCard
          label="Deployments"
          value={metrics.deployments || metrics.deploymentFrequency}
          unit="/month"
          type="deployment"
        />
        <MetricCard label="PR Throughput" value={metrics.prThroughput} unit="PRs" type="pr" />
      </div>

      {/* Interpretation */}
      <InterpretationBox summary={interpretation.summary} />

      {/* Next Steps */}
      <NextSteps steps={interpretation.nextSteps} />
    </div>
  );
}