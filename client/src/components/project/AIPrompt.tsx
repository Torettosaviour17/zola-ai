"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScenes } from "@/hooks/useScenes";
import aiService from "@/services/ai.service";
import sceneService from "@/services/scene.service";

type Props = { projectId: string };

export function AIPrompt({ projectId }: Props) {
  const { scenes, selectedSceneId, fetchScenes, selectScene, updateScene } = useScenes(projectId);
  const selectedScene = scenes.find((scene) => scene._id === selectedSceneId);
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [generating, setGenerating] = useState<"script" | "scenes" | null>(null);

  async function handleGenerate() {
    if (!prompt.trim()) return setStatus("Write a prompt first.");
    if (!selectedScene) return setStatus("Create and select a scene first.");

    setGenerating("script");
    setStatus(null);
    try {
      const response = await aiService.generateScript(prompt);
      await updateScene(selectedScene._id, {
        title: selectedScene.title,
        script: response.script,
      });
      setStatus("Script added to the selected scene.");
    } catch {
      setStatus("Unable to generate a script. Please try again.");
    } finally {
      setGenerating(null);
    }
  }

  async function handleGenerateScenes() {
    if (!prompt.trim()) return setStatus("Write a story prompt first.");

    setGenerating("scenes");
    setStatus(null);
    try {
      const response = await aiService.generateScenes(prompt);
      let firstSceneId: string | null = null;

      for (const scene of response.scenes) {
        const created = await sceneService.createScene(projectId, scene.title);
        firstSceneId ??= created.scene._id;
        await sceneService.updateScene(created.scene._id, {
          title: scene.title,
          script: scene.script,
        });
      }

      await fetchScenes(projectId);
      selectScene(firstSceneId);
      setStatus(`${response.scenes.length} scenes added to your timeline.`);
    } catch {
      setStatus("Unable to generate scenes. Please try again.");
    } finally {
      setGenerating(null);
    }
  }

  return (
    <aside className="flex w-80 shrink-0 flex-col border-l bg-card p-5 text-card-foreground">
      <div className="flex items-center gap-2">
        <div className="rounded-lg bg-primary/10 p-2 text-primary"><Sparkles size={18} /></div>
        <div><h2 className="font-semibold tracking-tight">AI Assistant</h2><p className="text-xs text-muted-foreground">Script starter</p></div>
      </div>
      <label className="mt-7 text-sm font-medium" htmlFor="ai-prompt">Prompt</label>
      <textarea
        className="mt-2 min-h-40 w-full resize-none rounded-xl border bg-background p-3 text-sm leading-6 outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
        id="ai-prompt"
        onChange={(event) => setPrompt(event.target.value)}
        placeholder="Generate a cinematic story about..."
        value={prompt}
      />
      <Button className="mt-4 w-full shadow-sm" disabled={generating !== null} onClick={handleGenerate}>
        <Sparkles size={16} />
        {generating === "script" ? "Generating..." : "Generate Script"}
      </Button>
      <Button className="mt-2 w-full" disabled={generating !== null} onClick={handleGenerateScenes} variant="outline">
        <Sparkles size={16} />
        {generating === "scenes" ? "Generating scenes..." : "Generate Scenes"}
      </Button>
      {status && <p className="mt-3 text-xs text-muted-foreground">{status}</p>}
    </aside>
  );
}
