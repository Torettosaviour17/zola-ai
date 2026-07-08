"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Welcome back 👋</h1>

        <p className="mt-3 text-muted-foreground">
          Sign in to continue creating amazing AI videos.
        </p>
      </div>

      <form className="space-y-5">
        <Input type="email" placeholder="Email address" />

        <Input type="password" placeholder="Password" />

        <Button className="w-full">Login</Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-medium text-primary">
          Create one
        </Link>
      </p>
    </div>
  );
}
