import { api } from "@/lib/axios";

export interface Scene {
  _id: string;
  project: string;
  title: string;
  order: number;
  script: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

class SceneService {
  async listScenes(projectId: string) {
    const response = await api.get<{ success: boolean; scenes: Scene[] }>(
      `/scenes/${projectId}`,
    );

    return response.data;
  }

  async createScene(projectId: string, title: string) {
    const response = await api.post<{ success: boolean; scene: Scene }>(
      `/scenes/${projectId}`,
      { title },
    );

    return response.data;
  }

  async updateScene(
    sceneId: string,
    updates: Pick<Scene, "title" | "script">,
  ) {
    const response = await api.patch<{ success: boolean; scene: Scene }>(
      `/scenes/${sceneId}`,
      updates,
    );

    return response.data;
  }
}

export default new SceneService();
