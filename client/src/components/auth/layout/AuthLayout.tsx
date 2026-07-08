import { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="flex min-h-screen">
      {/* Left Side */}
      <section className="hidden flex-1 items-center justify-center bg-gradient-to-br from-violet-700 via-indigo-700 to-black lg:flex">
        <div className="max-w-md text-white">
          <h1 className="text-5xl font-bold">ZolaAI</h1>

          <p className="mt-6 text-lg text-zinc-300">
            Turn ideas into cinematic AI videos with one conversation.
          </p>
        </div>
      </section>

      {/* Right Side */}
      <section className="flex flex-1 items-center justify-center bg-background p-8">
        <div className="w-full max-w-md">
          {children}
        </div>
      </section>
    </main>
  );
}
