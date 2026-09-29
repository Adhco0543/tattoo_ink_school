import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifySchool } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const startedAt = Date.now();
  const requestId = request.headers.get("x-vercel-id") ?? crypto.randomUUID();

  console.log(JSON.stringify({
    level: "info",
    message: "contact_submission_started",
    route: "/api/contact",
    requestId
  }));

  try {
    const body = await request.json();

    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const requestType = body.requestType === "visit" ? "visit" : "question";
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const supabase = createAdminClient();
    const id = crypto.randomUUID();

    const { error } = await supabase.from("contact_requests").insert({
      id,
      request_type: requestType,
      name,
      email,
      phone: String(body.phone ?? "").trim() || null,
      reply_preference: String(body.replyPreference ?? "").trim() || null,
      preferred_day: requestType === "visit" ? String(body.preferredDay ?? "").trim() || null : null,
      preferred_time: requestType === "visit" ? String(body.preferredTime ?? "").trim() || null : null,
      message,
    });

    if (error) {
      console.error("Contact request insert failed", error);
      return NextResponse.json({ error: "Your request could not be saved. Please try again." }, { status: 500 });
    }

    await notifySchool({
      subject: requestType === "visit" ? `Visit request from ${name}` : `Website question from ${name}`,
      heading: requestType === "visit" ? "New visit request" : "New website question",
      replyTo: email,
      lines: [
        ["Name", name],
        ["Email", email],
        ["Phone", String(body.phone ?? "").trim() || "Not provided"],
        ["Reply preference", String(body.replyPreference ?? "").trim() || "Not provided"],
        ["Preferred day", requestType === "visit" ? String(body.preferredDay ?? "").trim() || "No preference" : "N/A"],
        ["Preferred time", requestType === "visit" ? String(body.preferredTime ?? "").trim() || "No preference" : "N/A"],
        ["Message", message],
        ["Reference", id],
      ],
    });

    console.log(JSON.stringify({
      level: "info",
      message: "contact_submission_completed",
      route: "/api/contact",
      requestId,
      duration_ms: Date.now() - startedAt,
      request_type: requestType
    }));

    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error(JSON.stringify({
      level: "error",
      message: "contact_submission_failed",
      route: "/api/contact",
      requestId,
      duration_ms: Date.now() - startedAt,
      error: error instanceof Error ? error.message : String(error)
    }));
    return NextResponse.json({ error: "Contact service is not configured yet." }, { status: 503 });
  }
}
