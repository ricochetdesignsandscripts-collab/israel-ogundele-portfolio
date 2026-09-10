import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Israel Ogundele" },
      {
        name: "description",
        content: "Get in touch about product design work, collaborations and new projects.",
      },
      { property: "og:title", content: "Contact — Israel Ogundele" },
      {
        property: "og:description",
        content: "Get in touch about product design work and new projects.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Let's talk."
      intro="Tell me a little about the problem you're working on and I'll get back to you within a couple of days."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href="mailto:hello@example.com"
              className="link-underline mt-2 inline-block text-2xl"
            >
              hello@example.com
            </a>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-2 flex gap-6 text-muted-foreground">
              <a href="#" className="link-underline hover:text-foreground">
                LinkedIn
              </a>
              <a href="#" className="link-underline hover:text-foreground">
                Dribbble
              </a>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Based in Lagos, working with teams anywhere.
          </p>
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
            Send message
          </button>
        </form>
      </div>
    </PageShell>
  );
}
