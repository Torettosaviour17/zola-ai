"use client";

import { useEffect } from "react";
import { useSceneStore } from "@/stores/scene.store";

export function useScenes(projectId: string) {
  const {
    scenes,
    loading,
    selectedSceneId,
    fetchScenes,
    createScene,
    updateScene,
    selectScene,
  } = useSceneStore();

  useEffect(() => {
    if (projectId) {
      fetchScenes(projectId);
    }
  }, [projectId, fetchScenes]);

  return {
    scenes,
    loading,
    selectedSceneId,
    fetchScenes,
    createScene,
    updateScene,
    selectScene,
  };
}
