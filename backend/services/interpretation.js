export function getInterpretation(metrics) {
  const stories = [];
  const actions = [];

  const isGood =
    metrics.leadTime <= 24 &&
    metrics.bugRate <= 10 &&
    metrics.cycleTime <= 40;

  /* ---------------- LEAD TIME ---------------- */

  if (metrics.leadTime > 48) {
    stories.push("Lead time is critical — PRs are taking too long to reach production.");
    actions.push("Break PRs into smaller chunks under 400 lines");
    actions.push("Set up automated deployment");
  } else if (metrics.leadTime > 24) {
    stories.push("Lead time is elevated — PR review cycle is slow.");
    actions.push("Request faster PR reviews, aim for review within 4 hours");
    actions.push("Check deployment pipeline for bottlenecks");
  }

  /* ---------------- BUG RATE ---------------- */

  if (metrics.bugRate > 20) {
    stories.push("Bug rate is critical — production issues are frequent.");
    actions.push("Immediately review testing strategy");
    actions.push("Add integration tests");
  } else if (metrics.bugRate > 10) {
    stories.push("Bug rate is elevated — improve test coverage.");
    actions.push("Add unit tests for critical paths");
    actions.push("Set up code review checklist");
  }

  /* ---------------- CYCLE TIME ---------------- */

  if (metrics.cycleTime > 40) {
    stories.push("Cycle time is high — tasks are taking too long.");
    actions.push("Hold daily standup on blockers");
    actions.push("Break large issues into smaller tasks");
  }

  /* ---------------- GOOD STATE ---------------- */

  if (isGood) {
    stories.push("Your development workflow looks healthy across all metrics.");
    actions.push("Mentor junior team members");
    actions.push("Look for automation opportunities");
  }

  return {
    story: stories.join(" "),
    nextSteps: actions.slice(0, 2)
  };
}