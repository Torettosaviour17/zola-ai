import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
};

export function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="rounded-xl border p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
