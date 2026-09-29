import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/admin-auth";
import AdminSignOut from "./AdminSignOut";

export const dynamic = "force-dynamic";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminDashboardPage() {
  const user = await requireAdmin();
  const supabase = createAdminClient();

  const [{ data: applications }, { data: contacts }] = await Promise.all([
    supabase
      .from("applications")
      .select("id,status,first_name,last_name,email,phone,schedule_commitment,artwork_paths,created_at")
      .order("created_at", { ascending: false })
      .limit(50),
    supabase
      .from("contact_requests")
      .select("id,request_type,status,name,email,phone,preferred_day,preferred_time,message,created_at")
      .order("created_at", { ascending: false })
      .limit(50),
  ]);

  return (
    <main className="admin-page">
      <header className="admin-header">
        <div>
          <span className="brand-mark">INK</span>
          <span>School Admin</span>
        </div>
        <div>
          <span>{user.displayName || user.email}</span>
          <AdminSignOut />
        </div>
      </header>

      <section className="admin-shell">
        <div className="admin-title-row">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Leads & applications</h1>
          </div>
          <div className="admin-counts">
            <div><strong>{applications?.length ?? 0}</strong><span>Applications</span></div>
            <div><strong>{contacts?.length ?? 0}</strong><span>Contact requests</span></div>
          </div>
        </div>

        <section className="admin-panel">
          <div className="admin-panel-heading">
            <h2>Applications</h2>
            <span>Latest 50</span>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Applicant</th>
                  <th>Contact</th>
                  <th>Schedule</th>
                  <th>Artwork</th>
                  <th>Status</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {(applications ?? []).map((application) => (
                  <tr key={application.id}>
                    <td>
                      <a className="admin-record-link" href={`/admin/applications/${application.id}`}>
                        {application.first_name} {application.last_name}
                      </a>
                    </td>
                    <td>{application.email}<br /><small>{application.phone}</small></td>
                    <td>{application.schedule_commitment}</td>
                    <td>{Array.isArray(application.artwork_paths) ? application.artwork_paths.length : 0}</td>
                    <td><span className="admin-status">{application.status}</span></td>
                    <td>{formatDate(application.created_at)}</td>
                  </tr>
                ))}
                {!applications?.length && (
                  <tr><td colSpan={6}>No applications yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-panel-heading">
            <h2>Questions & visits</h2>
            <span>Latest 50</span>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Received</th>
                </tr>
              </thead>
              <tbody>
                {(contacts ?? []).map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.request_type}</td>
                    <td><strong>{contact.name}</strong></td>
                    <td>{contact.email}<br /><small>{contact.phone || "No phone"}</small></td>
                    <td className="admin-message-cell">{contact.message}</td>
                    <td><span className="admin-status">{contact.status}</span></td>
                    <td>{formatDate(contact.created_at)}</td>
                  </tr>
                ))}
                {!contacts?.length && (
                  <tr><td colSpan={6}>No contact requests yet.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}
