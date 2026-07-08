import React from "react";

type AppLayoutProps = {
  children: React.ReactNode;
};

export function AppLayout({ children }: AppLayoutProps) {
  return <div className="flex min-h-screen bg-background">{children}</div>;
}
