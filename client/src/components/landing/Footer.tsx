import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-10 text-zinc-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div>
          <h3 className="text-2xl font-bold text-white">Zola</h3>
          <p className="mt-2 text-sm">AI storytelling made simple.</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </div>
      </div>
    </footer>
  );
}
