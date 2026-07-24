"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Plus, FolderOpen, Clock3 } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useProjects } from "@/hooks/useProjects";
import { Button } from "@/components/ui/button";
import { CreateProjectDialog } from "@/components/projects/CreateProjectDialog";

export default function DashboardPage() {
  const { user } = useAuth();
  const { projects, loading } = useProjects();
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6 p-6 lg:p-8">
      <div className="rounded-3xl border border-sidebar-border bg-sidebar p-8 text-sidebar-foreground shadow-xl shadow-primary/5">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-sidebar-border bg-sidebar-accent px-3 py-1 text-sm text-sidebar-accent-foreground">
              <Sparkles className="text-sidebar-primary" size={15} />
              AI-powered video storytelling
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">
              {user?.name ? `Hello, ${user.name} 👋` : "Hello there 👋"}
            </h2>
            <p className="text-sm text-sidebar-foreground/70">
              Create cinematic stories, build scenes, and turn ideas into
              polished video projects.
            </p>
          </div>

          <Button
            className="bg-sidebar-primary text-sidebar-primary-foreground shadow-sm hover:opacity-90"
            onClick={() => setOpen(true)}
          >
            <Plus size={16} />
            New Project
          </Button>
        </div>
      </div>

      <div className="rounded-3xl border bg-card p-6 text-card-foreground shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold">Recent Projects</h3>
            <p className="text-sm text-muted-foreground">
              Your latest work is ready when you are.
            </p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center text-sm text-muted-foreground">
            Loading projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-2xl border border-dashed bg-muted/40 p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <FolderOpen className="text-primary" size={20} />
            </div>
            <h4 className="mt-4 font-semibold">
              No projects yet
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Start your first storyboard and build something incredible.
            </p>
            <Button className="mt-5" onClick={() => setOpen(true)}>
              <Plus size={16} />
              Create your first project
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project._id}
                href={`/dashboard/projects/${project._id}`}
                className="rounded-2xl border bg-card p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-full bg-primary/10 p-2 text-primary shadow-sm">
                    <Sparkles size={16} />
                  </div>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    {project.status}
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <h4 className="font-semibold">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.description || "No description yet"}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock3 size={14} />
                  Updated recently
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <CreateProjectDialog open={open} onOpenChange={setOpen} />
    </div>
  );
}
