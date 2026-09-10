import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Services & Skills — Ogundele Israel Oluwaseun" },
      {
        name: "description",
        content:
          "Product and UI/UX design, brand identity and graphic design, web design and software development — plus the tools and skills behind the work.",
      },
      { property: "og:title", content: "Services & Skills — Ogundele Israel Oluwaseun" },
      {
        property: "og:description",
        content: "Product design, brand identity and software development services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const services = [
  {
    no: "01",
    title: "Product & UI/UX Design",
    desc: "Design intuitive digital products and user experiences from research through high-fidelity prototypes.",
    items: [
      "User research",
      "User personas",
      "Information architecture",
      "Wireframes",
      "User flows",
      "Interactive Figma prototypes",
      "Design systems",
      "Usability testing",
      "Usability testing reports",
    ],
  },
  {
    no: "02",
    title: "Brand Identity & Graphic Design",
    desc: "Build distinctive visual identities that communicate the personality, values and positioning of a brand.",
    items: [
      "Brand strategy",
      "Logo systems",
      "Primary & secondary logos",
      "Sub-marks",
      "Color palettes",
      "Typography systems",
      "Visual assets",
      "Brand guidelines",
      "Marketing materials",
    ],
  },
  {
    no: "03",
    title: "Web Design & Software Development",
    desc: "Combine design and technology to create responsive, functional and scalable digital experiences.",
    items: [
      "Responsive websites",
      "Landing pages",
      "Front-end implementation",
      "Database integration",
      "Custom digital systems",
      "Software solutions",
      "System maintenance",
    ],
  },
];

const skillGroups = [
  {
    title: "Design Tools",
    items: [
      "Adobe Illustrator",
      "Adobe InDesign",
      "Adobe Photoshop",
      "Adobe XD",
      "CorelDRAW",
      "Figma",
      "Canva",
      "Affinity Designer",
    ],
  },
  {
    title: "Core Design Skills",
    items: [
      "Graphic Design",
      "Brand Identity",
      "UI/UX Design",
      "Product Design",
      "Design Systems",
      "Visual Communication",
      "Creative Direction",
    ],
  },
  {
    title: "Professional Skills",
    items: [
      "Curiosity",
      "Open-mindedness",
      "Empathy",
      "Storytelling",
      "Presentation",
      "Organization",
      "Communication",
      "Cross-functional collaboration",
      "Constructive feedback",
      "Problem-solving",
      "Adaptability",
    ],
  },
];

function Skills() {
  return (
    <PageShell
      eyebrow="Services"
      title="What I do."
      intro="Three connected practices — design, brand and technology — that take an idea from a blank canvas to a working product."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.no} className="rounded-xl border border-border bg-card p-8">
            <p className="eyebrow">{s.no}</p>
            <h2 className="mt-3 text-2xl">{s.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              {s.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-primary">—</span>
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="link-underline mt-6 inline-block text-sm text-primary"
            >
              Start a conversation
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <p className="eyebrow">Skills</p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} className="rounded-xl border border-border p-8">
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
      </div>
    </PageShell>
  );
}
