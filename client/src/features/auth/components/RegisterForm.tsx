"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function RegisterForm() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Create your account 🚀</h1>

        <p className="mt-3 text-muted-foreground">
          Start building AI-powered stories and videos today.
        </p>
      </div>

      <form className="space-y-5">
        <Input placeholder="Full name" />

        <Input type="email" placeholder="Email address" />

        <Input type="password" placeholder="Password" />

        <Button className="w-full">Create Account</Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="font-medium text-primary">
          Login
        </Link>
      </p>
    </div>
  );
}
