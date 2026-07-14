import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-white">
          Zola Ai
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-gray-300 hover:text-white"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-sm text-gray-300 hover:text-white"
          >
            How it Works
          </a>

          <a href="#pricing" className="text-sm text-gray-300 hover:text-white">
            Pricing
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm text-white"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}
