import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

const allowedStatuses = ["submitted", "reviewing", "interview", "enrolled", "declined", "withdrawn"];

async function updateStatus(formData: FormData) {
  "use server";

  await requireAdmin();

  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");

  if (!id || !allowedStatuses.includes(status)) return;

  const supabase = createAdminClient();
  await supabase.from("applications").update({ status }).eq("id", id);

  revalidatePath("/admin");
  revalidatePath(`/admin/applications/${id}`);
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireAdmin();
  const { id } = await params;
  const supabase = createAdminClient();

  const { data: application } = await supabase
    .from("applications")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!application) notFound();

  const artworkPaths = Array.isArray(application.artwork_paths)
    ? application.artwork_paths.filter((value: unknown): value is string => typeof value === "string")
    : [];

  const artwork = await Promise.all(
    artworkPaths.map(async (path: string) => {
      const { data } = await supabase.storage
        .from("application-artwork")
        .createSignedUrl(path, 60 * 60);

      return { path, url: data?.signedUrl ?? "" };
    })
  );

  return (
    <main className="admin-page">
      <header className="admin-header">
        <a href="/admin">← Dashboard</a>
        <span className="admin-status">{application.status}</span>
      </header>

      <section className="admin-shell admin-detail">
        <div className="admin-title-row">
          <div>
            <p className="eyebrow">Application</p>
            <h1>{application.first_name} {application.last_name}</h1>
            <p>{application.email} · {application.phone}</p>
          </div>

          <form action={updateStatus} className="admin-status-form">
            <input type="hidden" name="id" value={application.id} />
            <label>
              Status
              <select name="status" defaultValue={application.status}>
                {allowedStatuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </label>
            <button className="button button-small" type="submit">Update</button>
          </form>
        </div>

        <div className="admin-detail-grid">
          <article className="admin-panel">
            <h2>Contact & schedule</h2>
            <dl>
              <dt>City / State</dt><dd>{application.city || "—"} {application.state || ""}</dd>
              <dt>Contact preference</dt><dd>{application.contact_preference || "—"}</dd>
              <dt>Schedule commitment</dt><dd>{application.schedule_commitment}</dd>
              <dt>Received</dt><dd>{new Date(application.created_at).toLocaleString("en-US")}</dd>
            </dl>
          </article>

          <article className="admin-panel">
            <h2>Background</h2>
            <h3>Art experience</h3>
            <p>{application.art_experience}</p>
            <h3>Tattoo-related experience</h3>
            <p>{application.tattoo_experience}</p>
          </article>

          <article className="admin-panel">
            <h2>Goals</h2>
            <h3>What they want to learn</h3>
            <p>{application.goals}</p>
            <h3>Why now</h3>
            <p>{application.why_now}</p>
          </article>

          <article className="admin-panel">
            <h2>Artwork</h2>
            {artwork.length ? (
              <div className="admin-artwork-links">
                {artwork.map((item, index) => (
                  item.url ? (
                    <a key={item.path} href={item.url} target="_blank" rel="noreferrer">
                      Open artwork file {index + 1} ↗
                    </a>
                  ) : (
                    <span key={item.path}>Artwork file {index + 1} unavailable</span>
                  )
                ))}
              </div>
            ) : (
              <p>No artwork was uploaded.</p>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
