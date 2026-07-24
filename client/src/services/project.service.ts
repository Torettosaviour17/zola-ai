import { api } from "@/lib/axios";

export interface Project {
  _id: string;
  user: string;
  title: string;
  description: string;
  thumbnail: string;
  status: "draft" | "rendering" | "completed";
  createdAt: string;
  updatedAt: string;
}

export interface ProjectPayload {
  title: string;
  description?: string;
  thumbnail?: string;
  status?: "draft" | "rendering" | "completed";
}

class ProjectService {
  async listProjects() {
    const response = await api.get<{ success: boolean; projects: Project[] }>(
      "/projects",
    );

    return response.data;
  }

  async getProject(projectId: string) {
    const response = await api.get<{ success: boolean; project: Project }>(
      `/projects/${projectId}`,
    );

    return response.data;
  }

  async createProject(data: ProjectPayload) {
    const response = await api.post<{ success: boolean; project: Project }>(
      "/projects",
      data,
    );

    return response.data;
  }
}

export default new ProjectService();
