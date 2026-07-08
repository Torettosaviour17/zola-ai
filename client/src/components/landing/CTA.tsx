import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-900 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Ready to Create Your First AI Video?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-zinc-200">
            Turn your ideas into stunning cinematic videos with AI powered
            storytelling, scene generation, voiceovers and rendering.
          </p>

          <Link
            href="/register"
            className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </section>
  );
}
