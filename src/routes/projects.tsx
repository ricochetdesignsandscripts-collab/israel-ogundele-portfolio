import { createFileRoute } from "@tanstack/react-router";
import { PageShell, projects } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Ogundele Israel Oluwaseun" },
      {
        name: "description",
        content:
          "Selected work: GIGAEDEN, ONESQUAREMETER, ROCKETLINE, Olamata's Touch and Maintenance Tracker — brand identity, product design and software.",
      },
      { property: "og:title", content: "Selected Work — Ogundele Israel Oluwaseun" },
      {
        property: "og:description",
        content: "Brand identity, product design and software projects from 2022 to 2024.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <PageShell
      eyebrow="Selected work"
      title="Brands, products and systems."
      intro="A selection of identity, product and software work built between 2022 and 2024."
    >
      <div className="divide-y divide-border border-y border-border">
        {projects.map((p, i) => (
          <Reveal key={p.slug} as="article" delay={i * 90} className="project-row group grid gap-6 py-12 md:grid-cols-[auto_1fr_1fr]">
            <span className="text-sm text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
              0{i + 1} · {p.year}
            </span>
            <div>
              <p className="eyebrow">{p.kind}</p>
              <h2 className="mt-2 text-4xl transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary">
                {p.name}
              </h2>
            </div>
            <p className="leading-relaxed text-muted-foreground">{p.blurb}</p>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
