"use client";

import { FormEvent, useState } from "react";

type Mode = "question" | "visit";

export default function ContactExperience() {
  const [mode, setMode] = useState<Mode>("question");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    const data = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestType: mode,
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          replyPreference: data.get("reply"),
          preferredDay: data.get("preferredDay"),
          preferredTime: data.get("preferredTime"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Your request could not be sent.");
      }

      setReference(payload.id || "");
      setStatus("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Your request could not be sent.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-card contact-preview-message" aria-live="polite">
        <span className="contact-preview-mark">✓</span>
        <p className="eyebrow">Request received</p>
        <h3>{mode === "visit" ? "Your visit request is in." : "Your question is in."}</h3>
        <p>
          Ink Tattoo School can now review your request and follow up using the contact information you provided.
        </p>
        {reference && <p className="submission-reference">Reference: {reference}</p>}
        <button
          className="button"
          type="button"
          onClick={() => {
            setReference("");
            setStatus("idle");
          }}
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <div className="contact-experience">
      <div className="contact-mode-switch" role="tablist" aria-label="Contact type">
        <button
          type="button"
          className={mode === "question" ? "active" : ""}
          onClick={() => setMode("question")}
          role="tab"
          aria-selected={mode === "question"}
        >
          Ask a question
        </button>
        <button
          type="button"
          className={mode === "visit" ? "active" : ""}
          onClick={() => setMode("visit")}
          role="tab"
          aria-selected={mode === "visit"}
        >
          Request a visit
        </button>
      </div>

      <form className="contact-form-card" onSubmit={submit}>
        <div className="contact-form-heading">
          <span>{mode === "visit" ? "Visit request" : "General question"}</span>
          <h3>{mode === "visit" ? "Come see the school." : "What do you want to know?"}</h3>
        </div>

        <div className="contact-form-grid">
          <label>
            Full name *
            <input name="name" autoComplete="name" required />
          </label>
          <label>
            Email *
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone
            <input name="phone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Best way to reply
            <select name="reply">
              <option>Email</option>
              <option>Phone</option>
              <option>Text</option>
            </select>
          </label>
        </div>

        {mode === "visit" && (
          <div className="contact-form-grid">
            <label>
              Preferred day
              <select name="preferredDay">
                <option>No preference</option>
                <option>Weekday</option>
                <option>Saturday</option>
              </select>
            </label>
            <label>
              Preferred time
              <select name="preferredTime">
                <option>No preference</option>
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Early evening</option>
              </select>
            </label>
          </div>
        )}

        <label>
          {mode === "visit" ? "What would you like to see or discuss?" : "Your question"} *
          <textarea name="message" rows={6} required />
        </label>

        <label className="honeypot-field" aria-hidden="true">
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <label className="contact-consent">
          <input type="checkbox" required />
          <span>
            I understand this request does not reserve a class seat or create an enrollment agreement.
          </span>
        </label>

        {error && <p className="form-error" role="alert">{error}</p>}

        <button className="button" type="submit" disabled={status === "submitting"}>
          {status === "submitting"
            ? "Sending..."
            : mode === "visit"
              ? "Send visit request"
              : "Send question"}
        </button>
      </form>
    </div>
  );
}
