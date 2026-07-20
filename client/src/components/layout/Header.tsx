"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const router = useRouter();
  const { logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-semibold">Dashboard</h1>

      <button
        onClick={async () => {
          await logout();
          router.replace("/login");
        }}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        Logout
      </button>
    </header>
  );
}
