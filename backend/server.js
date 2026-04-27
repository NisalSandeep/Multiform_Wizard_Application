import express from "express";
import cors from "cors";
import { ENV } from "./config/env.js";
import connectDB from "./config/db.js";


import personalRoutes from "./routes/personal.js";
import skillRoutes from "./routes/skill.js";
import reviewRoutes from "./routes/review.js";

const app = express();

const PORT = ENV.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(express.json()); // req.body


app.use('/api/personal', personalRoutes);
app.use('/api/skill', skillRoutes);
app.use('/api/review', reviewRoutes);




connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });
