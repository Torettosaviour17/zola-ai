"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  FolderKanban,
  MessageSquare,
  Video,
  CreditCard,
  Settings,
} from "lucide-react";

const links = [
  {
    href: "/dashboard",
    icon: Home,
    label: "Dashboard",
  },
  {
    href: "/projects",
    icon: FolderKanban,
    label: "Projects",
  },
  {
    href: "/chat",
    icon: MessageSquare,
    label: "Zola",
  },
  {
    href: "/videos",
    icon: Video,
    label: "Videos",
  },
  {
    href: "/billing",
    icon: CreditCard,
    label: "Billing",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-xl shadow-black/10">
      <div className="p-6 text-2xl font-bold tracking-tight">
        Zola<span className="text-sidebar-primary">AI</span>
      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto px-3">
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              pathname === href
                ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                : "text-sidebar-foreground/75 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
