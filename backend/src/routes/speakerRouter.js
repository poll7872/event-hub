import express from "express";
import {
  createSpeaker,
  deleteSpeaker,
  getAllSpeakers,
  updateSpeaker,
} from "../controllers/speakerController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/createSpeaker", authMiddleware, createSpeaker);
router.get("/getSpeakers", getAllSpeakers);
router.put("/update/:id", authMiddleware, updateSpeaker);
router.delete("/delete/:id", authMiddleware, deleteSpeaker);

export default router;
