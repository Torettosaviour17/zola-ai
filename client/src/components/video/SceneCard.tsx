import React from "react";

type SceneCardProps = {
  title: string;
};

export function SceneCard({ title }: SceneCardProps) {
  return (
    <div className="rounded-lg border p-3">
      <h4 className="font-medium">{title}</h4>
    </div>
  );
}
