"use client";

import { useEffect, useState } from "react";
import { useScenes } from "@/hooks/useScenes";
import type { Scene } from "@/services/scene.service";

type Props = {
  projectId: string;
};

type SceneEditorProps = {
  scene: Scene;
  updateScene: (
    sceneId: string,
    updates: Pick<Scene, "title" | "script">,
  ) => Promise<void>;
};

function SceneEditor({ scene, updateScene }: SceneEditorProps) {
  const [title, setTitle] = useState(scene.title);
  const [script, setScript] = useState(scene.script);
  const [saveStatus, setSaveStatus] = useState<
    "saved" | "unsaved" | "saving" | "error"
  >("saved");

  useEffect(() => {
    if (title === scene.title && script === scene.script) {
      return;
    }

    const timeout = window.setTimeout(async () => {
      setSaveStatus("saving");

      try {
        await updateScene(scene._id, { title, script });
        setSaveStatus("saved");
      } catch {
        setSaveStatus("error");
      }
    }, 1000);

    return () => window.clearTimeout(timeout);
  }, [scene, script, title, updateScene]);

  return (
    <div className="w-full max-w-3xl rounded-3xl border bg-card p-6 text-card-foreground shadow-sm">
      <label className="block text-sm font-medium" htmlFor="scene-title">
        Scene Name
      </label>
      <input
        className="mt-2 w-full border-b bg-transparent pb-3 text-2xl font-semibold tracking-tight outline-none transition focus:border-primary"
        id="scene-title"
        onChange={(event) => {
          setTitle(event.target.value);
          setSaveStatus("unsaved");
        }}
        value={title}
      />

      <div className="mt-8 aspect-video overflow-hidden rounded-xl border bg-muted">
        {scene.image ? (
          <img alt={`Preview for ${scene.title}`} className="size-full object-cover" src={scene.image} />
        ) : (
          <div className="flex size-full items-center justify-center text-sm text-muted-foreground">
            No image generated yet
          </div>
        )}
      </div>

      <label className="mt-8 block text-sm font-medium" htmlFor="scene-script">
        Script
      </label>
      <textarea
          className="mt-2 min-h-72 w-full resize-y rounded-xl border bg-background p-4 text-base leading-7 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20"
        id="scene-script"
        onChange={(event) => {
          setScript(event.target.value);
          setSaveStatus("unsaved");
        }}
        placeholder="Once upon a time..."
        value={script}
      />

      <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
        {saveStatus === "saving" && "Saving..."}
        {saveStatus === "saved" && "Saved"}
        {saveStatus === "unsaved" && "Changes will save automatically"}
        {saveStatus === "error" && "Could not save changes. Keep editing to retry."}
      </p>
    </div>
  );
}

export function Editor({ projectId }: Props) {
  const { scenes, selectedSceneId, updateScene } = useScenes(projectId);
  const selectedScene = scenes.find((scene) => scene._id === selectedSceneId);

  if (!selectedScene) {
    return (
      <main className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Ready to create</h2>
          <p className="mt-2 text-muted-foreground">
            Create your first scene to begin building your AI video.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex flex-1 flex-col p-6">
      <SceneEditor
        key={`${selectedScene._id}-${selectedScene.updatedAt}`}
        scene={selectedScene}
        updateScene={updateScene}
      />
    </main>
  );
}
