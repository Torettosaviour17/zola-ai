"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScenes } from "@/hooks/useScenes";

type Props = {
  projectId: string;
};

export function SceneSidebar({ projectId }: Props) {
  const { scenes, loading, selectedSceneId, createScene, selectScene } =
    useScenes(projectId);

  async function handleCreateScene() {
    await createScene(projectId, `Scene ${scenes.length + 1}`);
  }

  return (
    <aside className="flex w-72 shrink-0 flex-col border-r bg-card text-card-foreground">
      <div className="border-b p-5">
        <h2 className="font-semibold tracking-tight">Scenes</h2>
        <p className="mt-1 text-xs text-muted-foreground">Build your story beat by beat.</p>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto p-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">Loading scenes...</p>
        ) : scenes.length === 0 ? (
          <p className="text-sm text-muted-foreground">No scenes yet.</p>
        ) : (
          scenes.map((scene) => (
            <button
              key={scene._id}
              onClick={() => selectScene(scene._id)}
              className={`group w-full rounded-xl border p-3 text-left transition ${
                selectedSceneId === scene._id
                  ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15"
                  : "border-border bg-card text-card-foreground hover:border-primary/40 hover:bg-accent"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${selectedSceneId === scene._id ? "bg-primary-foreground/15 text-primary-foreground" : "bg-muted text-muted-foreground group-hover:bg-primary/15 group-hover:text-primary"}`}>
                  {scene.order + 1}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-medium">{scene.title}</div>
                  <div className="mt-0.5 text-xs opacity-70">Scene {scene.order + 1}</div>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
      <div className="border-t p-4">
        <Button className="w-full shadow-sm" onClick={handleCreateScene}>
          <Plus size={16} />
          New Scene
        </Button>
      </div>
    </aside>
  );
}
