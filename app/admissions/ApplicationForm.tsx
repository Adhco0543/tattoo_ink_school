"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

type FormDataState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  contactPreference: string;
  artExperience: string;
  tattooExperience: string;
  goals: string;
  whyNow: string;
  schedule: string;
  acknowledgment: boolean;
};

const initialForm: FormDataState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  contactPreference: "Email",
  artExperience: "",
  tattooExperience: "",
  goals: "",
  whyNow: "",
  schedule: "",
  acknowledgment: false,
};

const stepLabels = ["Contact", "Background", "Goals", "Artwork"];

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormDataState>(initialForm);
  const [artwork, setArtwork] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");

  const update = (field: keyof FormDataState, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const canContinue = () => {
    if (step === 0) return Boolean(form.firstName && form.lastName && form.email && form.phone);
    if (step === 1) return Boolean(form.artExperience && form.tattooExperience);
    if (step === 2) return Boolean(form.goals && form.whyNow && form.schedule);
    return form.acknowledgment;
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(event.target.files ?? []);

    if (selected.length > 10) {
      setError("Please select no more than 10 artwork files.");
      setArtwork(selected.slice(0, 10));
      return;
    }

    setError("");
    setArtwork(selected);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.acknowledgment || status === "submitting") return;

    setStatus("submitting");
    setError("");

    const data = new FormData();
    Object.entries(form).forEach(([key, value]) => data.append(key, String(value)));
    data.append("website", "");
    artwork.forEach((file) => data.append("artwork", file));

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        body: data,
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || "Application could not be submitted.");
      }

      setReference(payload.id || "");
      setStatus("success");
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Application could not be submitted.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="application-card application-complete" aria-live="polite">
        <span className="application-complete-mark">✓</span>
        <p className="eyebrow">Application received</p>
        <h3>Your application is in.</h3>
        <p>
          Ink Tattoo School can now review your information and follow up about the next step.
          Submitting an application does not reserve a class seat or create an enrollment agreement.
        </p>
        {reference && <p className="submission-reference">Reference: {reference}</p>}
        <button
          className="button"
          type="button"
          onClick={() => {
            setForm(initialForm);
            setArtwork([]);
            setReference("");
            setStep(0);
            setStatus("idle");
          }}
        >
          Start another application
        </button>
      </div>
    );
  }

  return (
    <form className="application-card" onSubmit={handleSubmit}>
      <div className="form-progress" aria-label="Application progress">
        {stepLabels.map((label, index) => (
          <button
            key={label}
            className={index === step ? "active" : index < step ? "complete" : ""}
            type="button"
            onClick={() => index <= step && setStep(index)}
            aria-current={index === step ? "step" : undefined}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {label}
          </button>
        ))}
      </div>

      {step === 0 && (
        <fieldset>
          <legend>Contact information</legend>
          <p className="field-intro">Tell us how to reach you.</p>
          <div className="form-grid two-col">
            <label>
              First name *
              <input value={form.firstName} onChange={(e) => update("firstName", e.target.value)} autoComplete="given-name" required />
            </label>
            <label>
              Last name *
              <input value={form.lastName} onChange={(e) => update("lastName", e.target.value)} autoComplete="family-name" required />
            </label>
            <label>
              Email *
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" required />
            </label>
            <label>
              Phone *
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" required />
            </label>
            <label>
              City
              <input value={form.city} onChange={(e) => update("city", e.target.value)} autoComplete="address-level2" />
            </label>
            <label>
              State
              <input value={form.state} onChange={(e) => update("state", e.target.value)} autoComplete="address-level1" />
            </label>
          </div>
          <label>
            Best way to contact you
            <select value={form.contactPreference} onChange={(e) => update("contactPreference", e.target.value)}>
              <option>Email</option>
              <option>Phone</option>
              <option>Text</option>
            </select>
          </label>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset>
          <legend>Your background</legend>
          <p className="field-intro">Experience is context, not a requirement stated by the program materials.</p>
          <label>
            Tell us about your drawing or art experience *
            <textarea rows={5} value={form.artExperience} onChange={(e) => update("artExperience", e.target.value)} required />
          </label>
          <label>
            Tell us about any tattoo-related experience or exposure *
            <textarea rows={5} value={form.tattooExperience} onChange={(e) => update("tattooExperience", e.target.value)} required />
          </label>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset>
          <legend>Goals & expectations</legend>
          <p className="field-intro">The admissions conversation is built around goals, expectations, and readiness.</p>
          <label>
            What do you want to learn from this program? *
            <textarea rows={5} value={form.goals} onChange={(e) => update("goals", e.target.value)} required />
          </label>
          <label>
            Why are you looking at tattoo fundamentals now? *
            <textarea rows={4} value={form.whyNow} onChange={(e) => update("whyNow", e.target.value)} required />
          </label>
          <label>
            Can you commit to three class days per week, four hours per day, for 12 weeks? *
            <select value={form.schedule} onChange={(e) => update("schedule", e.target.value)} required>
              <option value="">Select an answer</option>
              <option>Yes</option>
              <option>I need to discuss scheduling</option>
            </select>
          </label>
        </fieldset>
      )}

      {step === 3 && (
        <fieldset>
          <legend>Artwork & acknowledgment</legend>
          <p className="field-intro">Artwork is optional. The school package suggests 5–10 examples if available.</p>
          <label className="file-drop">
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.webp,.pdf"
              multiple
              onChange={handleFiles}
            />
            <span className="file-drop-icon">＋</span>
            <strong>Add artwork</strong>
            <small>JPG, PNG, WEBP or PDF · maximum 10 files · 8 MB each</small>
            {artwork.length > 0 && <em>{artwork.length} file{artwork.length === 1 ? "" : "s"} selected</em>}
          </label>

          <label className="acknowledgment-check">
            <input
              type="checkbox"
              checked={form.acknowledgment}
              onChange={(e) => update("acknowledgment", e.target.checked)}
              required
            />
            <span>
              I understand this is a Professional Tattoo Fundamentals educational program and
              completion does not itself grant a tattoo license, create an apprenticeship, guarantee
              employment, or independently authorize me to tattoo the public.
            </span>
          </label>
        </fieldset>
      )}

      {error && <p className="form-error" role="alert">{error}</p>}

      <div className="form-controls">
        <button
          className="form-back"
          type="button"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0 || status === "submitting"}
        >
          ← Back
        </button>

        {step < 3 ? (
          <button
            className="button"
            type="button"
            onClick={() => canContinue() && setStep((current) => Math.min(3, current + 1))}
            disabled={!canContinue() || status === "submitting"}
          >
            Continue
          </button>
        ) : (
          <button className="button" type="submit" disabled={!canContinue() || status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit application"}
          </button>
        )}
      </div>
    </form>
  );
}
