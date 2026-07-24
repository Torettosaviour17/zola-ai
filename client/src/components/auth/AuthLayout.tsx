import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-12">
        <div className="w-full max-w-md rounded-2xl border bg-card p-8 text-card-foreground shadow-xl shadow-primary/5">
          {children}
        </div>
      </div>
    </div>
  );
}
