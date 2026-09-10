import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="font-display text-xl tracking-tight">
          Israel<span className="text-primary">.</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="rounded-full border border-primary/50 px-4 py-2 text-xs tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Let's talk
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">
            Israel Ogundele<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Product Designer — available for new work.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <a href="mailto:hello@example.com" className="link-underline w-fit hover:text-foreground">
            hello@example.com
          </a>
          <Link to="/contact" className="link-underline w-fit hover:text-foreground">
            Contact
          </Link>
          <span className="text-xs">© 2026 Israel Ogundele. Designed with care.</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl">{title}</h1>
      {intro ? (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{intro}</p>
      ) : null}
      <div className="mt-16">{children}</div>
    </main>
  );
}

export const projects = [
  {
    slug: "atlas",
    kind: "Fintech Dashboard",
    name: "Atlas",
    blurb:
      "A payments dashboard that turns dense transaction data into calm, scannable insight for small business owners.",
  },
  {
    slug: "cohabit",
    kind: "Shared Living App",
    name: "Cohabit",
    blurb:
      "Helps roommates split bills and track chores without the friction that usually leads to conflict.",
  },
  {
    slug: "harvest",
    kind: "Food Ordering Platform",
    name: "Harvest",
    blurb:
      "A mobile-first ordering flow where browsing, ordering, and tracking a meal feel as good as the food.",
  },
  {
    slug: "motion",
    kind: "Design Reference Tool",
    name: "Motion Dictionary",
    blurb:
      "An interactive reference giving every easing curve a personality, so teams can choose motion with intent.",
  },
];
