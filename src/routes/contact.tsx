import { useState, type FormEvent, type ChangeEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site-chrome";
import { Reveal } from "@/components/reveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xljeynpz";

type FormStatus = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  type: string;
  budget: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  type: "",
  budget: "",
  message: "",
};

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
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errors.name = "Please enter your name.";
    if (!form.email.trim()) {
      errors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) errors.message = "Please enter a message.";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          "project-type": form.type,
          "budget-timeline": form.budget,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        const data = await response.json().catch(() => ({}));
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Could not send your message. Please check your connection and try again.");
    }
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Have an idea worth building?"
      intro="Let's turn your idea into something people can see, use and remember."
    >
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal className="space-y-6">
          <div>
            <p className="eyebrow">Email</p>
            <a
              href="mailto:iogundele8@gmail.com"
              className="contact-link link-underline mt-2 inline-block text-2xl"
            >
              iogundele8@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow">Phone</p>
            <a href="tel:+2348128496837" className="contact-link link-underline mt-2 inline-block text-2xl">
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
                className="contact-link link-underline inline-block hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/IsraelOgundele7"
                target="_blank"
                rel="noreferrer"
                className="contact-link link-underline inline-block hover:text-foreground"
              >
                @IsraelOgundele7
              </a>
              <a
                href="https://instagram.com/oluwaseunisrael"
                target="_blank"
                rel="noreferrer"
                className="contact-link link-underline inline-block hover:text-foreground"
              >
                @oluwaseunisrael
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal as="section" delay={120} className="interactive-card rounded-lg border border-border bg-card p-8">
          <form className="space-y-4" onSubmit={handleSubmit} aria-busy={status === "loading"}>
            <div>
              <label htmlFor="name" className="eyebrow">
                Name
              </label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField("name")}
                aria-invalid={!!fieldErrors.name}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
                className="field-motion mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              />
              {fieldErrors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-destructive">
                  {fieldErrors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="eyebrow">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateField("email")}
                aria-invalid={!!fieldErrors.email}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                className="field-motion mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              />
              {fieldErrors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-destructive">
                  {fieldErrors.email}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="type" className="eyebrow">
                Project type
              </label>
              <input
                id="type"
                name="type"
                value={form.type}
                onChange={updateField("type")}
                className="field-motion mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="budget" className="eyebrow">
                Budget / timeline
              </label>
              <input
                id="budget"
                name="budget"
                value={form.budget}
                onChange={updateField("budget")}
                className="field-motion mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              />
            </div>
            <div>
              <label htmlFor="message" className="eyebrow">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={updateField("message")}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={fieldErrors.message ? "message-error" : undefined}
                className="field-motion mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none"
              />
              {fieldErrors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-destructive">
                  {fieldErrors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-12px_var(--primary)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>

            {status === "success" && (
              <p className="rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-primary" role="status" aria-live="polite">
                Message sent. I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive" role="alert" aria-live="assertive">
                {errorMessage}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </PageShell>
  );
}
