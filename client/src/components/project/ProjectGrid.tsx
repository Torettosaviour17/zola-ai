import React from "react";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <ProjectCard
        title="Marketing Reel"
        description="A polished vertical video project for launch week."
      />
      <ProjectCard
        title="Product Demo"
        description="Animated walkthrough for a new feature release."
      />
    </div>
  );
}
