import express from "express";
import Personal from "../model/Personal.js";
import Skill from "../model/Skill.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { personalId, skillId } = req.query;

    const personalPromise = personalId
      ? Personal.findById(personalId)
      : Personal.findOne().sort({ createdAt: -1 });

    const skillPromise = skillId
      ? Skill.findById(skillId)
      : Skill.findOne().sort({ createdAt: -1 });

    const [personal, skill] = await Promise.all([personalPromise, skillPromise]);

    if (!personal && !skill) {
      return res.status(404).json({ message: "No review data found" });
    }

    res.status(200).json({
      message: "Review information fetched successfully",
      review: {
        personal: personal || null,
        skill: skill || null,
      },
    });
  } catch (error) {
    console.error("Error fetching review information:", error);
    res.status(500).json({ message: "Failed to fetch review information" });
  }
});

export default router;
