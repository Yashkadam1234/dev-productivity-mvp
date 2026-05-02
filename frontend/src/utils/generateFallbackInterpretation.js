export function generateFallbackInterpretation(metrics) {
  const {
    leadTime,
    cycleTime,
    bugRate,
    deployments,
    prThroughput,
  } = metrics;

  let text = "";

  // Lead Time (main insight)
  if (leadTime > 24) {
    text +=
      `Your lead time of ${leadTime} hours is slightly above the ideal threshold of 24 hours. ` +
      `This suggests PRs may be waiting too long for review or deployment pipeline has delays. `;
  } else {
    text += `Your lead time is within a healthy range, indicating smooth delivery flow. `;
  }

  // Other metrics summary
  text +=
    `All other metrics look healthy — cycle time, bug rate, deployments, and PR throughput are performing well.`;

  return text;
}