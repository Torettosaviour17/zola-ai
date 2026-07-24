import { z } from "zod";

export const createProjectSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),
  description: z.string().optional().default(""),
  thumbnail: z.string().optional().default(""),
  status: z
    .enum(["draft", "rendering", "completed"])
    .optional()
    .default("draft"),
});

export const updateProjectSchema = createProjectSchema.partial();
