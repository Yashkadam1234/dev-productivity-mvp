export const generateInsights = (dev) => {
  const insights = [];

  // Lead Time
  if (dev.leadTime > 48) {
    insights.push("Lead time is high — PRs are taking too long to reach production.");
  }

  // Cycle Time
  if (dev.cycleTime > 24) {
    insights.push("Cycle time is slow — tasks may be staying in progress too long.");
  }

  // Bug Rate
  if (dev.bugRate > 10) {
    insights.push("High bug rate — improve testing and review before merging.");
  }

  // Deployment Frequency
  if (dev.deployments < 10) {
    insights.push("Low deployment frequency — consider smaller and more frequent releases.");
  }

  // PR Throughput
  if (dev.prThroughput < 15) {
    insights.push("Low PR throughput — review team velocity and task sizing.");
  }

  // Healthy state fallback
  if (insights.length === 0) {
    insights.push("Great performance across all metrics — system is healthy and stable 🚀");
  }

  return insights;
};