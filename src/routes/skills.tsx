import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Israel Ogundele" },
      {
        name: "description",
        content:
          "Research, interaction design, design systems and prototyping — the toolkit behind my product work.",
      },
      { property: "og:title", content: "Skills — Israel Ogundele" },
      {
        property: "og:description",
        content: "The research, design and prototyping toolkit behind my product work.",
      },
    ],
  }),
  component: Skills,
});

const groups = [
  {
    title: "Research",
    items: ["User interviews", "Usability testing", "Journey mapping", "Competitive audits"],
  },
  {
    title: "Design",
    items: ["Interaction design", "Design systems", "Information architecture", "Visual design"],
  },
  {
    title: "Delivery",
    items: ["Figma prototyping", "Motion & micro-interaction", "Design QA", "Dev handoff"],
  },
];

function Skills() {
  return (
    <PageShell
      eyebrow="Skills"
      title="What I bring to a team."
      intro="I work end to end, but I'm most useful in the messy middle: turning research into structure and structure into something shippable."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {groups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card p-8">
            <h2 className="text-2xl">{g.title}</h2>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {g.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
