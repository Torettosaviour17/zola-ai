import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <span className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-400">
            AI Storytelling Platform
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Turn Ideas Into
            <span className="block bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Cinematic Videos
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-zinc-400 sm:text-lg">
            Chat with Zola, generate scenes, create voiceovers, and produce
            complete AI videos in minutes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-white px-6 py-3 text-center font-semibold text-black transition hover:scale-105"
            >
              Start Creating
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border border-zinc-700 px-6 py-3 text-center transition hover:border-white"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="mt-16 flex h-72 w-full max-w-lg items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900 lg:mt-0">
          <p className="text-zinc-500">AI Preview Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
