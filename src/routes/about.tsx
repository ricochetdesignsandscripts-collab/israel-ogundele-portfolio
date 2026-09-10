import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Israel Ogundele" },
      {
        name: "description",
        content:
          "Product designer focused on clarity, function, and the small details that make products feel considered.",
      },
      { property: "og:title", content: "About — Israel Ogundele" },
      {
        property: "og:description",
        content: "How I work as a product designer, and the process behind each project.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2024 — now", role: "Freelance Product Designer", place: "Remote" },
  { year: "2022 — 2024", role: "Product Designer", place: "Studio / Agency" },
  { year: "2020 — 2022", role: "UI Designer", place: "Early-stage startup" },
];

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="Clarity first, decoration second."
      intro="I'm Israel Ogundele, a product designer who cares about how things work as much as how they look. I spend most of my time untangling complex flows into something a first-time user can finish without thinking."
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            My work usually starts with conversations and messy notes — talking to the people
            who will actually use the thing, then mapping where they get stuck.
          </p>
          <p>
            From there I move quickly into structure and prototypes, testing early rather than
            polishing something nobody has tried yet.
          </p>
          <p>
            I like projects with real constraints: regulated products, dense data, small teams
            shipping fast.
          </p>
        </div>
        <div>
          <p className="eyebrow">Experience</p>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {timeline.map((t) => (
              <li key={t.year} className="flex items-baseline justify-between gap-6 py-5">
                <div>
                  <p className="text-lg">{t.role}</p>
                  <p className="text-sm text-muted-foreground">{t.place}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">{t.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
