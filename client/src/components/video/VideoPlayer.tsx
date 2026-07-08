import React from "react";

export function VideoPlayer() {
  return (
    <div className="rounded-xl border p-4">
      <div className="aspect-video rounded-lg bg-muted" />
      <p className="mt-2 text-sm text-muted-foreground">
        Preview area for your generated video.
      </p>
    </div>
  );
}
