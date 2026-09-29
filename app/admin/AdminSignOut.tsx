"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/browser";

export default function AdminSignOut() {
  const router = useRouter();
  async function signOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button className="admin-signout" type="button" onClick={signOut}>
      Sign out
    </button>
  );
}
