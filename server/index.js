import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// Router imports
import exampleRouter from "./routes/example.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CALL_ORIGIN }));

// Routes
app.use("/example", exampleRouter);

// Error handling middleware.
app.use((err, res) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(process.env.SERVER_PORT, () => console.log(`Backend API running on port ${process.env.SERVER_PORT}`));