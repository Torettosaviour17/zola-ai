import { Router } from "express";
import { protect } from "../middleware/auth.middleware";
import { createScene, getScenes, updateScene } from "../controllers/scene.controller";

const router = Router();

router.use(protect);
router.get("/:projectId", getScenes);
router.post("/:projectId", createScene);
router.patch("/:sceneId", updateScene);

export default router;
