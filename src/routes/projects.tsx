import { createFileRoute } from "@tanstack/react-router";
import { PageShell, projects } from "@/components/site-chrome";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Israel Ogundele" },
      {
        name: "description",
        content:
          "Selected product design case studies: fintech dashboards, shared living apps, food ordering and motion tooling.",
      },
      { property: "og:title", content: "Projects — Israel Ogundele" },
      {
        property: "og:description",
        content: "Selected product design case studies and the thinking behind them.",
      },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell
      eyebrow="Projects"
      title="Selected work."
      intro="A few projects that show how I think — from research and structure through to the final interface."
    >
      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <article key={p.slug} className="group grid gap-6 py-12 md:grid-cols-[auto_1fr_1fr]">
            <span className="text-sm text-muted-foreground">0{i + 1}</span>
            <div>
              <p className="eyebrow">{p.kind}</p>
              <h2 className="mt-2 text-4xl transition-colors group-hover:text-primary">
                {p.name}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">{p.blurb}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
