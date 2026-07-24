import { Router } from "express";
import {
  createProject,
  deleteProject,
  getProject,
  listProjects,
  updateProject,
} from "../controllers/project.controller";
import { protect } from "../middleware/auth.middleware";

const router = Router();

router.use(protect);
router.post("/", createProject);
router.get("/", listProjects);
router.get("/:id", getProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
