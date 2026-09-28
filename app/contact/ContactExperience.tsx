"use client";

import { FormEvent, useState } from "react";

type Mode = "question" | "visit";

export default function ContactExperience() {
  const [mode, setMode] = useState<Mode>("question");
  const [prepared, setPrepared] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPrepared(true);
  };

  if (prepared) {
    return (
      <div className="contact-form-card contact-preview-message" aria-live="polite">
        <span className="contact-preview-mark">✓</span>
        <p className="eyebrow">Pre-launch preview</p>
        <h3>Your request is filled out.</h3>
        <p>
          This site is still being built, so the form has not sent your information yet.
          Online delivery and school notifications are connected during the backend build.
        </p>
        <button className="button" type="button" onClick={() => setPrepared(false)}>
          Review form
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

        <label className="contact-consent">
          <input type="checkbox" required />
          <span>
            I understand this request does not reserve a class seat or create an enrollment agreement.
          </span>
        </label>

        <button className="button" type="submit">
          {mode === "visit" ? "Review visit request" : "Review question"}
        </button>
      </form>
    </div>
  );
}
