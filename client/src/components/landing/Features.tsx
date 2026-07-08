import { Sparkles, ImageIcon, Video, Mic } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Story Assistant",
    description: "Describe your idea naturally and let Zola build your story.",
  },
  {
    icon: ImageIcon,
    title: "Scene Generation",
    description: "Generate consistent AI images for every scene.",
  },
  {
    icon: Mic,
    title: "AI Voiceovers",
    description: "Create realistic narration in multiple languages and voices.",
  },
  {
    icon: Video,
    title: "Video Rendering",
    description:
      "Combine scenes, animations, subtitles and music into one video.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-4 text-zinc-400">
            One platform for creating AI-powered cinematic videos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:-translate-y-2 hover:border-violet-500"
              >
                <Icon className="mb-6 h-10 w-10 text-violet-500" />

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
