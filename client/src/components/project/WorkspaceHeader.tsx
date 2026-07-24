"use client";

import { Button } from "@/components/ui/button";

type Props = {
  title: string;
};

export function WorkspaceHeader({ title }: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-card px-6 text-card-foreground">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground">
          Start building your AI video
        </p>
      </div>

      <Button>Export</Button>
    </header>
  );
}
