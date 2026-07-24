import { Router } from "express";
import { generateScenes, generateScript } from "../controllers/ai.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.use(protect);
router.post("/generate-script", generateScript);
router.post("/generate-scenes", generateScenes);

export default router;
