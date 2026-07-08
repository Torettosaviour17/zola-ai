const steps = [
  {
    number: "01",
    title: "Describe Your Story",
    description:
      "Tell Zola your idea in plain English. It understands your vision and creates a structured story.",
  },
  {
    number: "02",
    title: "Generate Scenes",
    description:
      "Zola creates beautiful AI scenes, prompts, and keeps every character consistent.",
  },
  {
    number: "03",
    title: "Render Your Video",
    description:
      "Add voiceovers, subtitles, music, and export a polished cinematic video.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">How Zola Works</h2>

          <p className="mt-4 text-zinc-400">
            From idea to finished video in three simple steps.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
            >
              <span className="text-5xl font-black text-violet-500">
                {step.number}
              </span>

              <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>

              <p className="mt-4 leading-7 text-zinc-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
