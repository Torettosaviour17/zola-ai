"use client";

import { useEffect, useState } from "react";
import projectService, { Project } from "@/services/project.service";

export function useProject(projectId: string) {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        setLoading(true);
        const response = await projectService.getProject(projectId);
        setProject(response.project);
      } catch {
        setProject(null);
      } finally {
        setLoading(false);
      }
    }

    if (projectId) {
      loadProject();
    }
  }, [projectId]);

  return { project, loading };
}
