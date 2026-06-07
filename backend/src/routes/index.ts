import { Router } from "express";

import authRoutes from "./authRoutes";
import interviewRoutes from "./interviewRoutes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/interviews", interviewRoutes);

export default router;