import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

/* ---------------- MOCK DATA ---------------- */

const developers = [
  { id: 1, name: "Amit Sharma", role: "Senior Engineer", team: "Platform", avatar: "AS" },
  { id: 2, name: "Neha Verma", role: "Software Engineer", team: "Frontend", avatar: "NV" },
  { id: 3, name: "Rahul Patil", role: "Junior Developer", team: "Backend", avatar: "RP" }
];

const metrics = [
  {
    developerId: 1,
    leadTime: 12,
    cycleTime: 8,
    bugRate: 2,
    deploymentFrequency: 26,
    prThroughput: 42
  },
  {
    developerId: 2,
    leadTime: 30,
    cycleTime: 20,
    bugRate: 8,
    deploymentFrequency: 12,
    prThroughput: 20
  },
  {
    developerId: 3,
    leadTime: 72,
    cycleTime: 55,
    bugRate: 25,
    deploymentFrequency: 4,
    prThroughput: 8
  }
];

/* ---------------- HELPERS ---------------- */

const getMetricsByDevId = (id) => {
  return metrics.find((m) => m.developerId === id);
};

const generateInterpretation = (dev, m) => {
  const stories = [];
  const actions = [];

  const isGood =
    m.leadTime <= 24 &&
    m.bugRate <= 10 &&
    m.cycleTime <= 40;

  /* ---------------- LEAD TIME ---------------- */

  if (m.leadTime > 48) {
    stories.push("Lead time is critical — PRs are taking too long to reach production.");
    actions.push("Break PRs into smaller chunks under 400 lines");
    actions.push("Set up automated deployment");
  } else if (m.leadTime > 24) {
    stories.push("Lead time is elevated — review cycles are slower than expected.");
    actions.push("Request faster PR reviews, aim for review within 4 hours");
    actions.push("Check deployment pipeline for bottlenecks");
  }

  /* ---------------- BUG RATE ---------------- */

  if (m.bugRate > 20) {
    stories.push("Bug rate is critical — frequent production issues detected.");
    actions.push("Immediately review testing strategy");
    actions.push("Add integration tests");
  } else if (m.bugRate > 10) {
    stories.push("Bug rate is elevated — more testing is required.");
    actions.push("Add unit tests for critical paths");
    actions.push("Set up code review checklist");
  }

  /* ---------------- CYCLE TIME ---------------- */

  if (m.cycleTime > 40) {
    stories.push("Cycle time is high — tasks are taking too long to complete.");
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
    developer: dev.name,
    story: stories.join(" "),
    nextSteps: actions.slice(0, 2)
  };
};

/* ---------------- ROUTES ---------------- */

// GET all developers
app.get("/api/developers", (req, res) => {
  res.json(developers);
});

// GET metrics
app.get("/api/developers/:id/metrics", (req, res) => {
  const id = Number(req.params.id);
  const data = getMetricsByDevId(id);

  if (!data) {
    return res.status(404).json({ error: "Metrics not found" });
  }

  res.json(data);
});

// GET interpretation
app.get("/api/developers/:id/interpretation", (req, res) => {
  const id = Number(req.params.id);

  const dev = developers.find((d) => d.id === id);
  const m = getMetricsByDevId(id);

  if (!dev || !m) {
    return res.status(404).json({ error: "Developer not found" });
  }

  const result = generateInterpretation(dev, m);
  res.json(result);
});

/* ---------------- SERVER ---------------- */

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});