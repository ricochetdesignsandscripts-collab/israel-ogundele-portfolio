import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { projects } from "@/components/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Israel Ogundele — Product Designer" },
      {
        name: "description",
        content:
          "Product designer turning complex problems into simple, intuitive digital experiences.",
      },
      { property: "og:title", content: "Israel Ogundele — Product Designer" },
      {
        property: "og:description",
        content:
          "Product designer turning complex problems into simple, intuitive digital experiences.",
      },
    ],
  }),
  component: Index,
});

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
          <p className="eyebrow">Product Designer</p>
          <h1 className="mt-6 text-6xl leading-[0.95] md:text-8xl">
            Israel
            <br />
            <span className="text-primary">Ogundele</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            I design digital experiences that simplify complex workflows and make products
            easier to understand.
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
              Get in touch
            </Link>
          </div>
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
          {projects.map((p) => (
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
            Have a problem worth
            <br />
            <span className="text-primary">untangling?</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Currently open to selected product design engagements.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground"
          >
            Start a conversation →
          </Link>
        </div>
      </section>
    </main>
  );
}
