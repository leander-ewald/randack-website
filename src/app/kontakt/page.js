import Image from "next/image";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Kontakt | Randack Spezialschrauben",
  description:
    "Kontaktieren Sie RS Randack Spezialschrauben GmbH — Delsterner Str. 148 E, 58091 Hagen. Tel: +49 2331 97 07 50",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ height: "50vh", minHeight: 350 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-spezialschrauben-standort-hagen-02.jpg"
            alt="Kontakt"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Kontakt</div>
          <h1>Wir freuen uns auf Ihre Anfrage</h1>
          <p>
            Wünschen Sie Angebote oder weitere Informationen? Kontaktieren Sie
            uns — Sie erhalten innerhalb eines Tages unsere Antwort.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info */}
            <div>
              <span className="section-label">Kontaktdaten</span>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
              >
                RS Randack Spezialschrauben GmbH
              </h2>

              <div style={{ marginTop: "2rem" }}>
                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" fill="none" stroke="#0C1F3F" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Adresse</h4>
                    <p>
                      Delsterner Straße 148 E
                      <br />
                      D-58091 Hagen
                    </p>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" fill="none" stroke="#0C1F3F" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4>Telefon</h4>
                    <a href="tel:+492331970750">+49 (0) 23 31 - 97 07 50</a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" fill="none" stroke="#0C1F3F" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4>E-Mail</h4>
                    <a href="mailto:kontakt@rs-randack.de">
                      kontakt@rs-randack.de
                    </a>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" fill="none" stroke="#0C1F3F" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                    </svg>
                  </div>
                  <div>
                    <h4>Website</h4>
                    <a href="https://www.rs-randack.de" target="_blank" rel="noopener noreferrer">
                      www.rs-randack.de
                    </a>
                  </div>
                </div>
              </div>

              {/* Vertretungen */}
              <div style={{ marginTop: "2.5rem" }}>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
                  Internationale Vertretungen
                </h3>
                <div style={{ display: "grid", gap: "1rem" }}>
                  {[
                    { country: "Niederlande", contact: "Peter Anker, Anker Agenturen b.v." },
                    { country: "Spanien", contact: "Joop Cremer" },
                    { country: "Deutschland (Süd)", contact: "Fritz Frömming Technisches Büro" },
                    { country: "Tschechien", contact: "Pavel Rada" },
                  ].map((v) => (
                    <div key={v.country} style={{ padding: "0.75rem 1rem", background: "#f5f5f5", borderRadius: 6 }}>
                      <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{v.country}</div>
                      <div style={{ fontSize: "0.85rem", color: "#666" }}>{v.contact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <iframe
        className="map-embed"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d7.4891!3d51.3447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b936e5c8d5f6ed%3A0x4b0!2sDelsterner+Str.+148E%2C+58091+Hagen!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Standort RS Randack Spezialschrauben GmbH"
      />
    </>
  );
}
