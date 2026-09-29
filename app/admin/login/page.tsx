import Link from "next/link";
"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/browser";

export default function AdminLoginPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

      if (signInError) {
        setError("Sign-in failed. Check your email and password.");
        return;
      }

      window.location.assign("/admin");
    } catch {
      setError("Admin sign-in is not configured yet.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">
        <Link className="brand" href="/">
          <span className="brand-mark">INK</span>
          <span className="brand-copy">Tattoo School</span>
        </Link>
        <p className="eyebrow">Private administration</p>
        <h1>Admin sign in</h1>
        <p>Approved school administrators only.</p>

        <form onSubmit={submit}>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Password
            <input name="password" type="password" autoComplete="current-password" required />
          </label>
          {error && <p className="admin-login-error">{error}</p>}
          <button className="button" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
