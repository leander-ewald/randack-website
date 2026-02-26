"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      company: form.company.value,
      salutation: form.salutation.value,
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form">
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>&#10003;</div>
          <h3 style={{ marginBottom: "0.5rem" }}>Nachricht gesendet!</h3>
          <p style={{ color: "#666" }}>
            Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb eines
            Arbeitstages bei Ihnen.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="btn-primary"
            style={{ marginTop: "1.5rem" }}
          >
            Neue Nachricht senden
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-form">
      <h3>Kontaktformular</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Firma</label>
            <input type="text" name="company" />
          </div>
          <div className="form-group">
            <label>Anrede</label>
            <select name="salutation">
              <option value="">Bitte wählen</option>
              <option>Herr</option>
              <option>Frau</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Vorname</label>
            <input type="text" name="firstName" />
          </div>
          <div className="form-group">
            <label>Nachname *</label>
            <input type="text" name="lastName" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Telefon</label>
            <input type="tel" name="phone" />
          </div>
          <div className="form-group">
            <label>E-Mail *</label>
            <input type="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label>Nachricht *</label>
          <textarea name="message" rows={5} required />
        </div>
        <button
          type="submit"
          className="btn-primary"
          style={{ width: "100%" }}
          disabled={status === "sending"}
        >
          {status === "sending" ? "Wird gesendet..." : "Nachricht senden"}
        </button>
        {status === "error" && (
          <p style={{ color: "#c0392b", marginTop: "1rem", fontSize: "0.9rem" }}>
            Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder
            schreiben Sie an kontakt@rs-randack.de
          </p>
        )}
      </form>
    </div>
  );
}
