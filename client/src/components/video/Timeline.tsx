import React from "react";
import { SceneCard } from "./SceneCard";

export function Timeline() {
  return (
    <div className="space-y-2">
      <SceneCard title="Opening Scene" />
      <SceneCard title="Transition" />
      <SceneCard title="Closing Scene" />
    </div>
  );
}
