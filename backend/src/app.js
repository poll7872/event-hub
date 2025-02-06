import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import speakerRoutes from "./routes/speakerRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/speaker", speakerRoutes);

export default app;
