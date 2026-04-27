import express from 'express';
import cloudinary from '../config/cloudinary.js';
import Skill from '../model/Skill.js';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { image, skills } = req.body;

        if (!image || !Array.isArray(skills) || skills.length < 1) {
            return res.status(400).json({ message: "All fields are required" });
        }

        
        const result = await cloudinary.uploader.upload(image, { folder: "skills" });
        const newSkill = await Skill.create({ avatarUrl: result.secure_url, skills });

        res.status(201).json({ message: "Skill information saved successfully", skill: newSkill });


        
    }catch (error) {
        console.error("Error saving skill information:", error);
        res.status(500).json({ message: "Failed to save skill information" });
    }   
})

export default router;