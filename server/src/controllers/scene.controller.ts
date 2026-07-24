import { Request, Response } from "express";
import { Scene } from "../models/Scene";
import { createSceneSchema, updateSceneSchema } from "../validators/scene.validator";

export async function createScene(req: Request, res: Response) {
  try {
    const { projectId } = req.params;

    const data = createSceneSchema.parse(req.body);

    const count = await Scene.countDocuments({
      project: projectId,
    });

    const scene = await Scene.create({
      project: projectId,
      title: data.title,
      order: count,
    });

    res.status(201).json({
      success: true,
      scene,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function getScenes(req: Request, res: Response) {
  try {
    const { projectId } = req.params;

    const scenes = await Scene.find({
      project: projectId,
    }).sort("order");

    res.json({
      success: true,
      scenes,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function updateScene(req: Request, res: Response) {
  try {
    const data = updateSceneSchema.parse(req.body);
    const scene = await Scene.findByIdAndUpdate(req.params.sceneId, data, {
      new: true,
      runValidators: true,
    });

    if (!scene) {
      return res.status(404).json({ success: false, message: "Scene not found" });
    }

    res.json({ success: true, scene });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
}
