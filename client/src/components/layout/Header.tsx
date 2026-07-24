"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-sidebar-border bg-sidebar px-6 text-sidebar-foreground shadow-sm">
      <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>

      <button
        onClick={async () => {
          await logout();
          router.replace("/login");
        }}
        className="rounded-lg bg-sidebar-primary px-4 py-2 text-sm font-medium text-sidebar-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
      >
        Logout
      </button>
    </header>
  );
}
