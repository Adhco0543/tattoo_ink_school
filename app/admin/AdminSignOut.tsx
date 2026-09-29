"use client";

import { createClient } from "@/lib/supabase/browser";

export default function AdminSignOut() {
  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.assign("/admin/login");
  }

  return (
    <button className="admin-signout" type="button" onClick={signOut}>
      Sign out
    </button>
  );
}
