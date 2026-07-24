import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center lg:flex-row lg:justify-between lg:text-left">
        <div className="max-w-2xl">
          <span className="rounded-full border bg-muted px-4 py-2 text-sm text-muted-foreground">
            AI Storytelling Platform
          </span>

          <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Turn Ideas Into
            <span className="block text-primary">
              Cinematic Videos
            </span>
          </h1>

          <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
            Chat with Zola, generate scenes, create voiceovers, and produce
            complete AI videos in minutes.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/register"
              className="rounded-xl bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start Creating
            </Link>

            <Link
              href="/pricing"
              className="rounded-xl border px-6 py-3 text-center transition hover:bg-accent hover:text-accent-foreground"
            >
              View Pricing
            </Link>
          </div>
        </div>

        <div className="mt-16 flex h-72 w-full max-w-lg items-center justify-center rounded-3xl border bg-card shadow-xl shadow-primary/5 lg:mt-0">
          <p className="text-muted-foreground">AI Preview Coming Soon</p>
        </div>
      </div>
    </section>
  );
}
