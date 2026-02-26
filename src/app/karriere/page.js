import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Karriere | Randack Spezialschrauben",
  description: "Karriere bei Randack — aktuelle Stellenangebote und Bewerbungsmöglichkeiten.",
};

export default function KarrierePage() {
  return (
    <>
      <section className="hero" style={{ height: "60vh", minHeight: 400 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-aktuelles-1.jpg"
            alt="Karriere"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">Karriere</div>
          <h1>Ihre Karriere bei Randack</h1>
          <p>
            Wenn Sie eine dynamische und erfolgreiche Karriere bei Randack
            anstreben, freuen wir uns auf Ihre Bewerbung.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="section-label">Stellenangebote</span>
          <h2 className="section-title">Werden Sie Teil unseres Teams</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#555", marginBottom: "2rem" }}>
            Wir suchen engagierte Mitarbeiter, die unser Team verstärken möchten.
            Senden Sie uns Ihren Lebenslauf an{" "}
            <a href="mailto:info@rs-randack.de" style={{ color: "var(--rs-blue)", fontWeight: 600 }}>
              info@rs-randack.de
            </a>
          </p>

          <div
            style={{
              background: "var(--rs-gray)",
              borderRadius: 12,
              padding: "3rem",
              marginTop: "2rem",
            }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem" }}>
              Aktuelle Stellenangebote
            </h3>
            <p style={{ color: "#666", marginBottom: "1.5rem" }}>
              Finden Sie unsere aktuellen Stellenangebote auf unserem
              Karriereportal:
            </p>
            <a
              href="https://www.karriere-suedwestfalen.de/randack-spezialschrauben"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Zum Karriereportal
            </a>
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem" }}>
              Initiativbewerbung
            </h3>
            <p style={{ color: "#555", lineHeight: 1.8 }}>
              Auch wenn aktuell keine passende Stelle ausgeschrieben ist — wir
              freuen uns über Ihre Initiativbewerbung. Senden Sie Ihre Unterlagen
              an{" "}
              <a href="mailto:info@rs-randack.de" style={{ color: "var(--rs-blue)", fontWeight: 600 }}>
                info@rs-randack.de
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
