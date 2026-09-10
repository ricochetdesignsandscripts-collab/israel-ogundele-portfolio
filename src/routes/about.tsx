import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ogundele Israel Oluwaseun" },
      {
        name: "description",
        content:
          "Creative technologist bridging graphic design, brand identity, product design and software, with leadership roles across Lagos studios and startups.",
      },
      { property: "og:title", content: "About — Ogundele Israel Oluwaseun" },
      {
        property: "og:description",
        content: "Where creativity meets technology: background, experience and education.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const experience = [
  {
    period: "Jan 2023 — Present",
    company: "GIGAEDEN",
    role: "Head of Technology & Media",
    note: "Leading technology strategy and the creative team across product, brand and media.",
  },
  {
    period: "Aug 2017 — Present",
    company: "The Executive Helping Initiative",
    role: "Associate Creative Director",
    note: "Creative strategy and direction with a focus on brand consistency.",
  },
  {
    period: "Jun 2025 — Present",
    company: "Samson Agbato Consulting",
    role: "Facility Management Consultant",
    note: "The intersection of technology, property and operations.",
  },
  {
    period: "Jan 2023 — Jun 2023",
    company: "ROK Studios (CANAL+)",
    role: "Graphic Designer",
    note: "Design for one of Africa's largest studio brands.",
  },
  {
    period: "Jun 2022 — Dec 2022",
    company: "Bamigbola Consulting",
    role: "Creative Director / Social Media Manager / Data Analyst",
    note: "Creative leadership paired with analytics.",
  },
  {
    period: "Jan 2021 — Apr 2021",
    company: "Volunteers Hub Africa",
    role: "Associate Creative Director",
    note: "Full rebranding of the organisation's identity.",
  },
  {
    period: "Jul 2018 — Jan 2021",
    company: "EcoChampions",
    role: "Associate Creative Director",
    note: "Brand development for an environmental movement.",
  },
];

const education = [
  {
    title: "HND (Hons) — Estate Management & Valuation",
    place: "Yaba College of Technology, Yaba",
    years: "2023 — 2025",
  },
  {
    title: "OND (Hons) — Estate Management & Valuation",
    place: "Yaba College of Technology, Yaba",
    years: "2019 — 2022",
  },
];

const training = [
  "Andela Software Engineering Internship",
  "Google Developers for Africa",
  "Scale-Up Motion Design & Illustration Programme",
  "Zuri i4g Product Design Programme",
  "HNG Programming Scholarship",
  "Specs Academy Programming Bootcamp",
  "Torilo Academy — Graphic Design",
  "Utiva — Product Design",
  "Geneza School of Design — Graphic Design",
  "Geneza School of Design — Brand Design",
  "Geneza School of Design — Animation",
  "Geneza School of Design — UI/UX Design",
];

const achievements = [
  {
    title: "Pitch & Speaking",
    items: [
      "Winner — NANS Speaking Contest",
      "Winner — Junior Chamber International Speaking Contest",
      "Winner — Daytona Nigeria Business Grant Pitch Contest",
    ],
  },
  {
    title: "Design",
    items: [
      "Winner — Logo Design Contest, Society for Adolescent and Young People's Health in Nigeria",
    ],
  },
  {
    title: "Technology",
    items: ["Maintenance Tracker System built during the Andela TeenCode Programme"],
  },
  {
    title: "Branding",
    items: ["Full Brand Identity — Volunteers Hub Africa"],
  },
];

function About() {
  return (
    <PageShell
      eyebrow="About"
      title="Where creativity meets technology."
      intro="I'm a confident, reliable and versatile creative professional with experience spanning graphic design, brand identity, product design, UI/UX, software development, technology, data, creative direction and facility management."
    >
      <div className="grid gap-16 md:grid-cols-2">
        <div className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            I bridge creative and technical disciplines — moving from a blank canvas to a brand
            identity, from a Figma prototype to a working product, and from a business problem
            to a technology-driven solution.
          </p>
          <p>
            My leadership background includes roles as Associate Creative Director, Creative
            Director, Head of Technology & Media, Graphic Designer and Facility Management
            Consultant.
          </p>
          <p>
            Outside of work you'll find me gaming, exploring virtual and outdoor experiences,
            digging into new technology and learning something new.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 font-display text-2xl text-foreground">
            "I enjoy solving problems where creativity, technology and human experience
            intersect."
          </blockquote>
        </div>

        <div>
          <p className="eyebrow">Experience</p>
          <ul className="mt-6 divide-y divide-border border-t border-border">
            {experience.map((e) => (
              <li key={e.period + e.company} className="py-5">
                <div className="flex items-baseline justify-between gap-6">
                  <p className="text-lg">{e.company}</p>
                  <span className="shrink-0 text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="text-sm text-primary">{e.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Education</p>
          <ul className="mt-6 space-y-5">
            {education.map((e) => (
              <li key={e.title}>
                <p className="text-lg">{e.title}</p>
                <p className="text-sm text-muted-foreground">
                  {e.place} · {e.years}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Technology & design training</p>
          <ul className="mt-6 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            {training.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="text-primary">—</span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <p className="eyebrow">Achievements</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl">{a.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {a.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
