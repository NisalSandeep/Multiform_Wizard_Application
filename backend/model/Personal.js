import mongoose from "mongoose";


const personalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    department: { type: String, required: true },
}, { timestamps: true });

const Personal = mongoose.model("Personal", personalSchema);

export default Personal;