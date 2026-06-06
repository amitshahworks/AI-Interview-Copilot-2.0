import { Router } from "express";
import { registerUser , loginUser , getCurrentUser} from "../controllers/authController";


import { protect } from "../middleware/authMiddleware";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/user", protect, getCurrentUser);

router.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Auth routes working",
  });
});

export default router;