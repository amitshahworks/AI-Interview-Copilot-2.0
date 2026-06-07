import { Router } from "express";

import { createInterview } from "../controllers/interviewController";
import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post("/create", protect, createInterview);

export default router;