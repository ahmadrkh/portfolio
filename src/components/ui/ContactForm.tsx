"use client";

import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { site } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "sent" | "drafted" | "error";
type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const initial: ContactInput = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactInput>(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof ContactInput>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    if (status === "sent" || status === "drafted" || status === "error") setStatus("idle");
  }

  function openMailClient(data: ContactInput) {
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name}\n${data.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        delivered?: boolean;
      };

      if (res.ok && result.delivered) {
        setStatus("sent");
        setValues(initial);
        return;
      }

      // Server reachable but email isn't configured → open the user's mail app.
      openMailClient(parsed.data);
      setStatus("drafted");
    } catch {
      // Network failed → still let them reach out via their mail client.
      openMailClient(parsed.data);
      setStatus("drafted");
    }
  }

  const disabled = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4 text-left">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={values.name}
          onChange={(v) => update("name", v)}
          error={errors.name}
          placeholder="Jane Doe"
          disabled={disabled}
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          placeholder="jane@company.com"
          disabled={disabled}
        />
      </div>

      <div>
        <FieldLabel htmlFor="message">Message</FieldLabel>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell me about the role or project…"
          disabled={disabled}
          aria-invalid={!!errors.message}
          className={inputClasses(!!errors.message)}
        />
        <FieldError message={errors.message} />
      </div>

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={disabled} className="w-full sm:w-auto">
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Send message
            </>
          )}
        </Button>

        <p aria-live="polite" className="font-mono text-[12px] text-ink-faint">
          {status === "sent" && <span className="text-[#4ade80]">Thanks — your message is on its way.</span>}
          {status === "drafted" && <span className="text-accent">Opening your email app…</span>}
          {status === "error" && <span className="text-[#f87171]">Something went wrong. Try emailing directly.</span>}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  disabled,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
}) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        className={inputClasses(!!error)}
      />
      <FieldError message={error} />
    </div>
  );
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block font-mono text-[12px] font-medium text-ink-muted">
      {children}
    </label>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[12px] text-[#f87171]">{message}</p>;
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-bg/60 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:opacity-60",
    hasError ? "border-[#f87171]/60" : "border-line focus:border-accent",
  );
}
