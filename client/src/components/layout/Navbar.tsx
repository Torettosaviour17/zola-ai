import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 text-foreground backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          Zola Ai
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition hover:text-foreground"
          >
            How it Works
          </a>

          <a href="#pricing" className="text-sm text-muted-foreground transition hover:text-foreground">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
