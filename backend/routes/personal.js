import express from 'express';
import Personal from '../model/Personal.js';


const router = express.Router();


router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const personal = await Personal.findById(id);

        if (!personal) {
            return res.status(404).json({ message: "Personal information not found" });
        }

        res.status(200).json(personal);
    }   
    catch (error) {
            console.error("Error fetching personal information:", error);
            res.status(500).json({ message: "Failed to fetch personal information" });
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, email, role, department } = req.body;

        if(!name || !email || !role || !department) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if(!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const newPersonal = await Personal.create({ name, email, role, department });

        res.status(201).json({ message: "Personal information saved successfully", personal: newPersonal });


    }catch (error) {
        console.error("Error saving personal information:", error);
        res.status(500).json({ message: "Failed to save personal information" });
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, role, department } = req.body;

        if (!name || !email || !role || !department) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        const updatedPersonal = await Personal.findByIdAndUpdate(
            id,
            { name, email, role, department },
            { new: true, runValidators: true },
        );

        if (!updatedPersonal) {
            return res.status(404).json({ message: "Personal information not found" });
        }

        return res.status(200).json({ message: "Personal information updated successfully", personal: updatedPersonal });
    } catch (error) {
        console.error("Error updating personal information:", error);
        res.status(500).json({ message: "Failed to update personal information" });
    }
});

export default router;