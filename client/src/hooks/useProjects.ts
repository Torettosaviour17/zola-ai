import { useEffect } from "react";
import { useProjectStore } from "@/stores/project.store";

export function useProjects() {
  const { projects, loading, fetchProjects, createProject } = useProjectStore();

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  return {
    projects,
    loading,
    fetchProjects,
    createProject,
  };
}
