import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/skills", label: "Services" },
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
            Ogundele Israel Oluwaseun<span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Creative Technologist — Lagos, Nigeria. Available for work.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground md:items-end">
          <a href="mailto:iogundele8@gmail.com" className="link-underline w-fit hover:text-foreground">
            iogundele8@gmail.com
          </a>
          <a href="tel:+2348128496837" className="link-underline w-fit hover:text-foreground">
            +234 812 849 6837
          </a>
          <div className="flex gap-5">
            <a
              href="https://x.com/IsraelOgundele7"
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-foreground"
            >
              X
            </a>
            <a
              href="https://instagram.com/oluwaseunisrael"
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-foreground"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="link-underline hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
          <span className="text-xs">© 2026 Ogundele Israel Oluwaseun.</span>
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
      <p className="eyebrow rise-in">{eyebrow}</p>
      <h1
        className="rise-in mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        {title}
      </h1>
      {intro ? (
        <p
          className="rise-in mt-6 max-w-2xl text-lg text-muted-foreground"
          style={{ animationDelay: "160ms" }}
        >
          {intro}
        </p>
      ) : null}
      <Reveal className="mt-16">{children}</Reveal>
    </main>
  );
}

export const projects = [
  {
    slug: "gigaeden",
    year: "2023",
    kind: "Complete Brand Identity — Technology / Hospitality",
    name: "GIGAEDEN",
    blurb:
      "Logo, brand identity, typography and colour system extended across digital applications, product design and a full technology ecosystem.",
  },
  {
    slug: "onesquaremeter",
    year: "2024",
    kind: "Hospitality Database System — Technology",
    name: "ONESQUAREMETER",
    blurb:
      "Database interface and system architecture, from data structure and user flows through to the finished UI screens.",
  },
  {
    slug: "rocketline",
    year: "2023",
    kind: "Complete Brand Identity — Fashion",
    name: "ROCKETLINE",
    blurb:
      "Logo, visual identity, typography and colour system, applied across brand collateral and campaign visuals.",
  },
  {
    slug: "olamatas-touch",
    year: "2022",
    kind: "Complete Brand Identity — Aluminum Fabrication",
    name: "OLAMATA'S TOUCH",
    blurb:
      "A logo and brand system with typography, colour palette and marketing materials for a fabrication business.",
  },
  {
    slug: "maintenance-tracker",
    year: "2022",
    kind: "Operations Software — Andela TeenCode Programme",
    name: "MAINTENANCE TRACKER",
    blurb:
      "A dashboard for maintenance records and tracking, covering the workflow and system logic end to end.",
  },
];
