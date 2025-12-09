import express from "express";
import cors from "cors";
import { healthRouter } from "./routes/healthCheck.routes.js";

const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    allowedHeaders: ["GET", "PUT", "POST", "PATCH", "DELETE", "OPTIONS"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/instagram", (req, res) => {
  res.send("This is a instagram page");
});

app.use("/api/v1/healthcheck", healthRouter);

export default app;
