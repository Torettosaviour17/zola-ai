import { Response } from "express";
import { Project } from "../models/Project";
import { AuthRequest } from "../middleware/auth.middleware";
import {
  createProjectSchema,
  updateProjectSchema,
} from "../validators/project.validator";

export async function createProject(req: AuthRequest, res: Response) {
  try {
    const validatedData = createProjectSchema.parse(req.body);

    const project = await Project.create({
      ...validatedData,
      user: req.user?.userId,
    });

    return res.status(201).json({
      success: true,
      project,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function listProjects(req: AuthRequest, res: Response) {
  try {
    const projects = await Project.find({ user: req.user?.userId }).sort({
      createdAt: -1,
    });

    return res.json({
      success: true,
      projects,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getProject(req: AuthRequest, res: Response) {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user?.userId,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      project,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateProject(req: AuthRequest, res: Response) {
  try {
    const validatedData = updateProjectSchema.parse(req.body);

    const project = await Project.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user?.userId,
      },
      validatedData,
      { new: true },
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      project,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

export async function deleteProject(req: AuthRequest, res: Response) {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.user?.userId,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    return res.json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
