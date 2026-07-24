import { create } from "zustand";
import projectService, { Project } from "@/services/project.service";

interface ProjectState {
  projects: Project[];
  loading: boolean;
  fetchProjects: () => Promise<void>;
  createProject: (payload: {
    title: string;
    description?: string;
  }) => Promise<void>;
}

export const useProjectStore = create<ProjectState>((set) => ({
  projects: [],
  loading: false,

  fetchProjects: async () => {
    set({ loading: true });
    try {
      const response = await projectService.listProjects();
      set({ projects: response.projects });
    } finally {
      set({ loading: false });
    }
  },

  createProject: async (payload: { title: string; description?: string }) => {
    set({ loading: true });
    try {
      const response = await projectService.createProject(payload);
      set((state) => ({
        projects: [response.project, ...state.projects],
      }));
    } finally {
      set({ loading: false });
    }
  },
}));
