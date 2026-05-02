import express from "express";
import data from "../data/metrics.json" assert { type: "json" };
import { generateInsights } from "../services/insights.js";
import { getInterpretation } from "../services/interpretation.js";

const router = express.Router();

// 1️⃣ Get all developers + insights
router.get("/", (req, res) => {
  const result = data.map(dev => ({
    ...dev,
    insights: generateInsights(dev)
  }));

  res.json(result);
});

// 2️⃣ Get interpretation for a developer
router.get("/:id/interpretation", (req, res) => {
  const id = Number(req.params.id);

  const m = data.find(d => d.developerId === id);

  if (!m) {
    return res.status(404).json({ error: "Metrics not found" });
  }

  const result = getInterpretation(m);

  res.json(result);
});

export default router;