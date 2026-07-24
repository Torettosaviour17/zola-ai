import { Request, Response } from "express";

export async function generateScript(req: Request, res: Response) {
  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";

  if (!prompt) {
    return res.status(400).json({ success: false, message: "A prompt is required" });
  }

  res.json({ success: true, script: "This is an AI generated script..." });
}

export async function generateScenes(req: Request, res: Response) {
  const prompt = typeof req.body?.prompt === "string" ? req.body.prompt.trim() : "";

  if (!prompt) {
    return res.status(400).json({ success: false, message: "A prompt is required" });
  }

  return res.json({
    success: true,
    scenes: [
      { title: "Opening", script: "A poor boy lives in a quiet village." },
      { title: "The Discovery", script: "He finds a glowing dragon egg in the forest." },
      { title: "The Hunt", script: "The king sends soldiers to capture him." },
    ],
  });
}
