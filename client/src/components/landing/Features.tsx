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
    <section id="features" className="bg-muted/30 py-24 text-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Everything You Need
          </h2>

          <p className="mt-4 text-muted-foreground">
            One platform for creating AI-powered cinematic videos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border bg-card p-8 text-card-foreground shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <Icon className="mb-6 h-10 w-10 text-primary" />

                <h3 className="text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
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
