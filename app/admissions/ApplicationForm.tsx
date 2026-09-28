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
  const [artworkCount, setArtworkCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

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
    setArtworkCount(event.target.files?.length ?? 0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.acknowledgment) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="application-card application-complete" aria-live="polite">
        <span className="application-complete-mark">✓</span>
        <p className="eyebrow">Application prepared</p>
        <h3>Everything is ready for submission.</h3>
        <p>
          The admissions form experience is complete. Final delivery, file storage, and confirmation
          email will be connected before launch when the site backend is wired in Build 8.
        </p>
        <button className="button" type="button" onClick={() => { setSubmitted(false); setStep(0); }}>
          Review application
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
            <small>JPG, PNG, WEBP or PDF · up to 10 examples recommended</small>
            {artworkCount > 0 && <em>{artworkCount} file{artworkCount === 1 ? "" : "s"} selected</em>}
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

      <div className="form-controls">
        <button
          className="form-back"
          type="button"
          onClick={() => setStep((current) => Math.max(0, current - 1))}
          disabled={step === 0}
        >
          ← Back
        </button>

        {step < 3 ? (
          <button
            className="button"
            type="button"
            onClick={() => canContinue() && setStep((current) => Math.min(3, current + 1))}
            disabled={!canContinue()}
          >
            Continue
          </button>
        ) : (
          <button className="button" type="submit" disabled={!canContinue()}>
            Review application
          </button>
        )}
      </div>
    </form>
  );
}
