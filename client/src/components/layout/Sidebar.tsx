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
    <aside className="w-72 border-r bg-zinc-950 text-white">
      <div className="p-6 text-2xl font-bold">
        Zola<span className="text-blue-500">AI</span>
      </div>

      <nav className="space-y-2 px-3">
        {links.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              pathname === href ? "bg-blue-600" : "hover:bg-zinc-800"
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
