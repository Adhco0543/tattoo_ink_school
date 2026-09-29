import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function requireAdmin() {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;

  if (error || !userId) {
    redirect("/admin/login");
  }

  const admin = createAdminClient();
  const { data: adminUser, error: adminError } = await admin
    .from("admin_users")
    .select("user_id, display_name")
    .eq("user_id", userId)
    .maybeSingle();

  if (adminError || !adminUser) {
    redirect("/admin/login?error=not-authorized");
  }

  return {
    userId,
    email: typeof data.claims.email === "string" ? data.claims.email : "",
    displayName: adminUser.display_name ?? "",
  };
}
