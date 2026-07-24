import { create } from "zustand";
import sceneService, { Scene } from "@/services/scene.service";

interface SceneState {
  scenes: Scene[];
  loading: boolean;
  selectedSceneId: string | null;
  fetchScenes: (projectId: string) => Promise<void>;
  createScene: (projectId: string, title: string) => Promise<void>;
  updateScene: (
    sceneId: string,
    updates: Pick<Scene, "title" | "script">,
  ) => Promise<void>;
  selectScene: (sceneId: string | null) => void;
}

export const useSceneStore = create<SceneState>((set) => ({
  scenes: [],
  loading: false,
  selectedSceneId: null,

  fetchScenes: async (projectId: string) => {
    set({ loading: true });
    try {
      const response = await sceneService.listScenes(projectId);
      set({
        scenes: response.scenes,
        selectedSceneId: response.scenes[0]?._id ?? null,
      });
    } finally {
      set({ loading: false });
    }
  },

  createScene: async (projectId: string, title: string) => {
    set({ loading: true });
    try {
      const response = await sceneService.createScene(projectId, title);
      set((state) => ({
        scenes: [...state.scenes, response.scene],
        selectedSceneId: response.scene._id,
      }));
    } finally {
      set({ loading: false });
    }
  },

  updateScene: async (sceneId, updates) => {
    const response = await sceneService.updateScene(sceneId, updates);
    set((state) => ({
      scenes: state.scenes.map((scene) =>
        scene._id === sceneId ? response.scene : scene,
      ),
    }));
  },

  selectScene: (sceneId) => set({ selectedSceneId: sceneId }),
}));
