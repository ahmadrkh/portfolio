import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Contact endpoint.
 *
 * Out of the box this validates the submission and reports `delivered: false`,
 * which tells the client to open the visitor's email app (zero config needed).
 *
 * To enable real server-side delivery:
 *   1. Add a key to .env.local:  RESEND_API_KEY=re_xxx
 *   2. (optional) CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL
 *   3. Verify a sending domain at https://resend.com
 * The block below then emails you on every submission.
 */
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  // No provider configured → client opens the user's mail app.
  if (!apiKey) {
    console.info(`[contact] ${name} <${email}>: ${message.slice(0, 120)}`);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL ?? "ahmadrezakhanari02@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      return NextResponse.json({ ok: false, delivered: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch {
    // SDK missing or send failed → graceful fallback to mailto on the client.
    return NextResponse.json({ ok: true, delivered: false });
  }
}
