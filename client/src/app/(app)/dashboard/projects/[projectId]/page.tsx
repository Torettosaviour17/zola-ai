"use client";

import { useParams } from "next/navigation";
import { WorkspaceHeader } from "@/components/project/WorkspaceHeader";
import { SceneSidebar } from "@/components/project/SceneSidebar";
import { Editor } from "@/components/project/Editor";
import { AIPrompt } from "@/components/project/AIPrompt";
import { useProject } from "@/hooks/useProject";

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const projectId = params?.projectId ?? "";
  const { project, loading } = useProject(projectId);

  if (loading) {
    return <div className="p-6">Loading workspace...</div>;
  }

  return (
    <div className="flex h-full flex-col">
      <WorkspaceHeader title={project?.title ?? "Untitled Project"} />

      <div className="flex flex-1 overflow-hidden">
        <SceneSidebar projectId={projectId} />
        <Editor projectId={projectId} />
        <AIPrompt projectId={projectId} />
      </div>
    </div>
  );
}
