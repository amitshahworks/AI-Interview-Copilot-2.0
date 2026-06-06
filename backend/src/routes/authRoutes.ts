import { Router } from "express";
import { registerUser , loginUser} from "../controllers/authController";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/test", (_req, res) => {
  res.json({
    success: true,
    message: "Auth routes working",
  });
});

export default router;