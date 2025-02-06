import express from "express";
import {
  createSpeaker,
  getAllSpeakers,
} from "../controllers/speakerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createSpeaker", authMiddleware, createSpeaker);
router.get("/getSpeakers", getAllSpeakers);

export default router;
