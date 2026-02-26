export const metadata = {
  title: "Impressum | Randack Spezialschrauben",
};

export default function ImpressumPage() {
  return (
    <>
      <div className="nav-spacer" />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="section-title">Impressum</h1>

          <div style={{ lineHeight: 1.8, color: "#555" }}>
            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              RS Randack Spezialschrauben GmbH
            </h3>
            <p>
              Delsterner Straße 148 E
              <br />
              D-58091 Hagen
            </p>
            <p style={{ marginTop: "1rem" }}>
              Telefon: +49 (0) 23 31 - 97 07 50
              <br />
              E-Mail:{" "}
              <a href="mailto:kontakt@rs-randack.de" style={{ color: "var(--rs-blue)" }}>
                kontakt@rs-randack.de
              </a>
              <br />
              Website: www.rs-randack.de
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Vertretungsberechtigte Geschäftsführer
            </h3>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>Dipl.-Ing. Andreas Kuhn</li>
              <li>Oliver Skrzypczak</li>
              <li>Martin Marscheider</li>
            </ul>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Handelsregister
            </h3>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>HRB RS Spezialschrauben GmbH: Handelsregister Hagen 3132</li>
              <li>HRB RS Automotive GmbH: Handelsregister Hagen 3820</li>
            </ul>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Umsatzsteuer-Identifikationsnummer
            </h3>
            <ul style={{ paddingLeft: "1.5rem" }}>
              <li>RS Spezialschrauben GmbH: DE 811771133</li>
              <li>RS Automotive GmbH: DE 202916737</li>
            </ul>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              V.i.S.d.P.
            </h3>
            <p>Dipl.-Ing. Jens Randack</p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Hinweis zu Lieferungen und Leistungen
            </h3>
            <p>
              Für Lieferungen und Leistungen der Firmen RS Randack
              Spezialschrauben GmbH und Randack Automotive GmbH gelten
              ausschließlich die auf der Seite befindlichen Lieferbedingungen
              (ALB) in der jeweils aktuellen Fassung. Für die Beauftragung von
              Lieferanten und Dienstleistern gelten ergänzend die Allgemeinen
              Einkaufsbedingungen (AEB) in der jeweils aktuellen Fassung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
