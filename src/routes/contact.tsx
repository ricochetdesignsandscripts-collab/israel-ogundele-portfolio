import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ogundele Israel Oluwaseun" },
      {
        name: "description",
        content:
          "Have an idea worth building? Reach Ogundele Israel Oluwaseun in Lagos by email, phone or social for design, brand and software projects.",
      },
      { property: "og:title", content: "Contact — Ogundele Israel Oluwaseun" },
      {
        property: "og:description",
        content: "Get in touch about design, brand identity and software projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Have an idea worth building?"
      intro="Let's turn your idea into something people can see, use and remember."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href="mailto:iogundele8@gmail.com"
              className="link-underline mt-2 inline-block text-2xl"
            >
              iogundele8@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <a href="tel:+2348128496837" className="link-underline mt-2 inline-block text-2xl">
              +234 812 849 6837
            </a>
          </div>
          <div>
            <p className="eyebrow">Location</p>
            <p className="mt-2 text-muted-foreground">Lagos, Nigeria</p>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-2 flex flex-wrap gap-6 text-muted-foreground">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="link-underline hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/IsraelOgundele7"
                target="_blank"
                rel="noreferrer"
                className="link-underline hover:text-foreground"
              >
                @IsraelOgundele7
              </a>
              <a
                href="https://instagram.com/oluwaseunisrael"
                target="_blank"
                rel="noreferrer"
                className="link-underline hover:text-foreground"
              >
                @oluwaseunisrael
              </a>
            </div>
          </div>
        </div>

        <form
          className="space-y-4 rounded-xl border border-border bg-card p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="name" className="eyebrow">
              Name
            </label>
            <input
              id="name"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="email" className="eyebrow">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="type" className="eyebrow">
              Project type
            </label>
            <input
              id="type"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="budget" className="eyebrow">
              Budget / timeline
            </label>
            <input
              id="budget"
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label htmlFor="message" className="eyebrow">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </div>
    </PageShell>
  );
}
