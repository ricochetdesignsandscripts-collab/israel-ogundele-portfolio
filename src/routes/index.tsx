import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import professionalPortrait from "@/assets/israel-professional.jpg.asset.json";
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
      <section className="grain relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="glow pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 opacity-70" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-end gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(19rem,0.8fr)]">
            <div>
              <p className="eyebrow rise-in">Available for work — Lagos, Nigeria</p>
              <h1
                className="rise-in mt-6 max-w-4xl text-5xl leading-[1.02] md:text-7xl"
                style={{ animationDelay: "80ms" }}
              >
                I design identities, products and{" "}
                <span className="text-primary">digital experiences</span> that turn ideas into
                reality.
              </h1>
              <p
                className="rise-in mt-8 max-w-xl text-lg text-muted-foreground"
                style={{ animationDelay: "180ms" }}
              >
                I'm Ogundele Israel Oluwaseun, a multidisciplinary creative technologist. I combine
                graphic design, product design, technology and strategic thinking to create
                meaningful brands and functional digital experiences.
              </p>
              <div
                className="rise-in mt-10 flex flex-wrap gap-4"
                style={{ animationDelay: "260ms" }}
              >
                <Link
                  to="/projects"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_var(--primary)]"
                >
                  View my work →
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-border px-6 py-3 text-sm transition-colors hover:border-primary/60 hover:bg-accent"
                >
                  Let's work together
                </Link>
              </div>
              <div
                className="rise-in mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7"
                style={{ animationDelay: "340ms" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-4xl text-primary">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Reveal delay={240} className="group relative mx-auto w-full max-w-md lg:mx-0">
              <div className="absolute -inset-5 bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <figure className="relative overflow-hidden border border-border bg-card">
                <img
                  src={professionalPortrait.url}
                  alt="Portrait of Ogundele Israel Oluwaseun, creative technologist"
                  width={704}
                  height={704}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <figcaption className="absolute inset-x-4 bottom-4 flex items-end justify-between border border-border bg-background/80 px-4 py-3 backdrop-blur-md">
                  <span>
                    <span className="block text-xs font-medium uppercase">Ogundele Israel Oluwaseun</span>
                    <span className="mt-1 block text-xs text-muted-foreground">Creative Technologist</span>
                  </span>
                  <span aria-hidden="true" className="text-xl text-primary">↗</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-border bg-card/30 py-4">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center gap-10 pr-10">
              {[
                "Brand Identity",
                "Product Design",
                "UI/UX",
                "Design Systems",
                "Web Development",
                "Creative Direction",
              ].map((word) => (
                <span
                  key={word}
                  className="eyebrow flex items-center gap-10 whitespace-nowrap"
                >
                  {word}
                  <span className="text-primary">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="border-b border-border bg-card/40">
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
          ].map((s, i) => (
            <Reveal key={s.t} delay={i * 90}>
              <h2 className="text-2xl">{s.t}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="flex items-end justify-between border-b border-border pb-6">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-3 text-4xl">Recent projects</h2>
          </div>
          <Link to="/projects" className="link-underline text-sm text-muted-foreground">
            View all
          </Link>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal
              key={p.slug}
              as="article"
              delay={i * 80}
              className="hover-lift group rounded-lg border border-border bg-card p-8 hover:border-primary/50"
            >
              <p className="eyebrow">{p.kind}</p>
              <h3 className="mt-3 text-3xl transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
            </Reveal>
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
