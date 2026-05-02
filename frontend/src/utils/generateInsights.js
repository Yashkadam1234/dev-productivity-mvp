export function generateInterpretation(metrics) {
  const insights = [];

  const {
    leadTime,
    cycleTime,
    bugRate,
    deployments,
    prThroughput,
  } = metrics;

  let leadTimeInsight = "";

  // Lead Time logic (main warning case)
  if (leadTime > 24) {
    leadTimeInsight =
      `Your lead time of ${leadTime} hours is slightly above the ideal threshold of 24 hours. ` +
      `This suggests PRs may be waiting too long for review or deployment pipeline has delays.`;
  } else {
    leadTimeInsight =
      `Your lead time of ${leadTime} hours is within the healthy range, indicating smooth delivery flow.`;
  }

  insights.push(leadTimeInsight);

  // Other metrics summary
  const goodMetrics = [];

  if (cycleTime <= 24) goodMetrics.push("cycle time");
  if (bugRate <= 10) goodMetrics.push("bug rate");
  if (deployments >= 10) goodMetrics.push("deployment frequency");
  if (prThroughput >= 15) goodMetrics.push("PR throughput");

  if (goodMetrics.length > 0) {
    insights.push(
      `All other metrics look healthy — ${goodMetrics.join(", ")} are performing well.`
    );
  }

  return insights.join(" ");
}