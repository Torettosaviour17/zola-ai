import { api } from "@/lib/axios";

class AIService {
  async generateScript(prompt: string) {
    const response = await api.post<{ success: boolean; script: string }>(
      "/ai/generate-script",
      { prompt },
    );

    return response.data;
  }

  async generateScenes(prompt: string) {
    const response = await api.post<{
      success: boolean;
      scenes: Array<{ title: string; script: string }>;
    }>("/ai/generate-scenes", { prompt });

    return response.data;
  }
}

export default new AIService();
