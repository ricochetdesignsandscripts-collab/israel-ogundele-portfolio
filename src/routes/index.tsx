import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { projects } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ogundele Israel Oluwaseun — Creative Technologist" },
      {
        name: "description",
        content:
          "Multidisciplinary creative technologist in Lagos, Nigeria — brand identity, product design and software that turn ideas into reality.",
      },
      { property: "og:title", content: "Ogundele Israel Oluwaseun — Creative Technologist" },
      {
        property: "og:description",
        content:
          "Brand identity, product design and software from a Lagos-based creative technologist.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const stats = [
  { value: "8+", label: "Years practising" },
  { value: "40+", label: "Projects shipped" },
  { value: "4", label: "Disciplines" },
];

function Index() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <p className="eyebrow">Available for work — Lagos, Nigeria</p>
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.02] md:text-7xl">
            I design identities, products and{" "}
            <span className="text-primary">digital experiences</span> that turn ideas into
            reality.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            I'm Ogundele Israel Oluwaseun, a multidisciplinary creative technologist. I combine
            graphic design, product design, technology and strategic thinking to create
            meaningful brands and functional digital experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work →
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-accent"
            >
              Let's work together
            </Link>
          </div>
          <div className="mt-16 grid max-w-lg grid-cols-3 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-primary">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-3">
          {[
            {
              t: "Product & UI/UX Design",
              d: "Intuitive digital products, from research through high-fidelity prototypes.",
            },
            {
              t: "Brand Identity & Graphic Design",
              d: "Distinctive visual identities that communicate personality, values and positioning.",
            },
            {
              t: "Web Design & Development",
              d: "Responsive, functional and scalable digital experiences.",
            },
          ].map((s) => (
            <div key={s.t}>
              <h2 className="text-2xl">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl">Recent projects</h2>
          </div>
          <Link to="/projects" className="link-underline text-sm text-muted-foreground">
            View all
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p) => (
            <article
              key={p.slug}
              className="group rounded-xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
            >
              <p className="eyebrow">{p.kind}</p>
              <h3 className="mt-3 text-3xl transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-4xl leading-tight md:text-6xl">
            Good design should look good.
            <br />
            Great design should{" "}
            <span className="text-primary">make something better.</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Have an idea worth building? Let's turn it into something people can see, use and
            remember.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a project →
          </Link>
        </div>
      </section>
    </main>
  );
}
