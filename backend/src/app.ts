import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes );

app.get("/api/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Interview Copilot API Running",
  });
});

export default app;