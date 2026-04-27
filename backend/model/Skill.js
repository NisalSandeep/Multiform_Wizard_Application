import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    avatarUrl: { type: String, required: true },
    skills: { type: [String], required: true, default: [] },
  },
  { timestamps: true },
);

const Skill = mongoose.model("Skill", skillSchema, "skills");

export default Skill;