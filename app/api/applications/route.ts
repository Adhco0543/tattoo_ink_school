import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { notifySchool, sendApplicantConfirmation } from "@/lib/email";

export const runtime = "nodejs";

const allowedTypes = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
  ["application/pdf", "pdf"],
]);

function readText(data: FormData, key: string) {
  const value = data.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const data = await request.formData();

    if (readText(data, "website")) {
      return NextResponse.json({ ok: true });
    }

    const firstName = readText(data, "firstName");
    const lastName = readText(data, "lastName");
    const email = readText(data, "email");
    const phone = readText(data, "phone");
    const artExperience = readText(data, "artExperience");
    const tattooExperience = readText(data, "tattooExperience");
    const goals = readText(data, "goals");
    const whyNow = readText(data, "whyNow");
    const schedule = readText(data, "schedule");
    const acknowledgment = readText(data, "acknowledgment") === "true";

    if (!firstName || !lastName || !email || !phone || !artExperience || !tattooExperience || !goals || !whyNow || !schedule || !acknowledgment) {
      return NextResponse.json({ error: "Please complete all required application fields." }, { status: 400 });
    }

    const files = data.getAll("artwork").filter((value): value is File => value instanceof File && value.size > 0);

    if (files.length > 10) {
      return NextResponse.json({ error: "Please upload no more than 10 artwork files." }, { status: 400 });
    }

    for (const file of files) {
      if (!allowedTypes.has(file.type)) {
        return NextResponse.json({ error: "Artwork must be JPG, PNG, WEBP, or PDF." }, { status: 400 });
      }
      if (file.size > 8 * 1024 * 1024) {
        return NextResponse.json({ error: "Each artwork file must be 8 MB or smaller." }, { status: 400 });
      }
    }

    const supabase = createAdminClient();
    const applicationId = crypto.randomUUID();
    const artworkPaths: string[] = [];

    for (const file of files) {
      const extension = allowedTypes.get(file.type)!;
      const path = `${applicationId}/${crypto.randomUUID()}.${extension}`;
      const bytes = await file.arrayBuffer();

      const { error } = await supabase.storage
        .from("application-artwork")
        .upload(path, bytes, {
          contentType: file.type,
          upsert: false,
        });

      if (error) {
        if (artworkPaths.length) {
          await supabase.storage.from("application-artwork").remove(artworkPaths);
        }
        console.error("Artwork upload failed", error);
        return NextResponse.json({ error: "Artwork upload failed. Please try again." }, { status: 500 });
      }

      artworkPaths.push(path);
    }

    const { error: insertError } = await supabase.from("applications").insert({
      id: applicationId,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      city: readText(data, "city") || null,
      state: readText(data, "state") || null,
      contact_preference: readText(data, "contactPreference") || null,
      art_experience: artExperience,
      tattoo_experience: tattooExperience,
      goals,
      why_now: whyNow,
      schedule_commitment: schedule,
      acknowledgment: true,
      artwork_paths: artworkPaths,
    });

    if (insertError) {
      if (artworkPaths.length) {
        await supabase.storage.from("application-artwork").remove(artworkPaths);
      }
      console.error("Application insert failed", insertError);
      return NextResponse.json({ error: "Application could not be saved. Please try again." }, { status: 500 });
    }

    await Promise.allSettled([
      notifySchool({
        subject: `New Ink Tattoo School application: ${firstName} ${lastName}`,
        heading: "New student application",
        replyTo: email,
        lines: [
          ["Applicant", `${firstName} ${lastName}`],
          ["Email", email],
          ["Phone", phone],
          ["Schedule", schedule],
          ["Artwork files", String(artworkPaths.length)],
          ["Reference", applicationId],
        ],
      }),
      sendApplicantConfirmation({
        to: email,
        firstName,
        reference: applicationId,
      }),
    ]);

    return NextResponse.json({ ok: true, id: applicationId });
  } catch (error) {
    console.error("Application route failed", error);
    return NextResponse.json({ error: "Application service is not configured yet." }, { status: 503 });
  }
}
