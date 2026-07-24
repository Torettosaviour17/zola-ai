import { z } from "zod";

export const createSceneSchema = z.object({
  title: z.string().min(1),
});

export const updateSceneSchema = z.object({
  title: z.string().optional(),
  script: z.string().optional(),
  order: z.number().optional(),
});
