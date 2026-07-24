import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-muted/30 py-24 text-foreground">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border bg-card p-10 text-center text-card-foreground shadow-xl shadow-primary/10 sm:p-16">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Ready to Create Your First AI Video?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Turn your ideas into stunning cinematic videos with AI powered
            storytelling, scene generation, voiceovers and rendering.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-flex rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  );
}
