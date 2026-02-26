export const metadata = {
  title: "Datenschutzerklärung | Randack Spezialschrauben",
};

export default function DatenschutzPage() {
  return (
    <>
      <div style={{ height: 80 }} />
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="section-title">Datenschutzerklärung</h1>

          <div style={{ lineHeight: 1.8, color: "#555" }}>
            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Verantwortliche Stelle
            </h3>
            <p>
              RS Randack Spezialschrauben GmbH, vertreten durch Jens Randack und
              Andreas Kuhn, Delsterner Str. 148e, DE-58091 Hagen.
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Allgemeine Hinweise
            </h3>
            <p>
              Wir begrüßen Sie auf unserer Webseite. Der Schutz Ihrer
              persönlichen Daten ist uns ein wichtiges Anliegen. Personenbezogene
              Daten werden in Übereinstimmung mit der EU-DSGVO, dem
              Bundesdatenschutzgesetz 2018 und anderen nationalen Regelungen
              verarbeitet.
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Rechte der Betroffenen
            </h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung
              (&ldquo;Recht auf Vergessenwerden&rdquo;), Einschränkung,
              Widerspruch und Datenübertragbarkeit. Sie können Ihre Einwilligung
              jederzeit widerrufen und Beschwerden bei der zuständigen
              Aufsichtsbehörde einreichen.
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Datenerfassung beim Website-Besuch
            </h3>
            <p>
              Beim Besuch unserer Website werden automatisch Informationen in
              Server-Logfiles gespeichert: Browsertyp, Betriebssystem,
              IP-Adresse, Zeitstempel der Anfrage und Domain-Namen des
              Providers. Eine direkte Identifizierung erfolgt nicht. Die Daten
              dienen der technischen Optimierung und administrativen Zwecken.
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Cookies
            </h3>
            <p>
              Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden. Sie erleichtern die Website-Nutzung. Wir
              übermitteln keine erhobenen Daten ohne Einwilligung an Dritte.
            </p>
            <ul style={{ paddingLeft: "1.5rem", marginTop: "0.5rem" }}>
              <li>
                <strong>klaro:</strong> Speichert Cookie-Einwilligungsstatus,
                Dauer 120 Tage
              </li>
              <li>
                <strong>PHPSESSID:</strong> Session-Cookie für
                Kontaktformular-Verarbeitung, endet mit Sitzungsende
              </li>
            </ul>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              Google Maps
            </h3>
            <p>
              Diese Website nutzt die Google Maps API für geografische
              Visualisierung. Google verarbeitet Nutzerdaten bezüglich der
              Maps-Funktionsnutzung.
            </p>

            <h3 style={{ color: "var(--rs-dark)", marginTop: "2rem", marginBottom: "0.5rem" }}>
              E-Mail-Kommunikation
            </h3>
            <p>
              Unverschlüsselte E-Mails können keine Übertragungssicherheit
              garantieren. Vertrauliche Informationen sollten verschlüsselt oder
              per Post versandt werden.
            </p>

            <p style={{ marginTop: "2rem", fontStyle: "italic", color: "#999" }}>
              Stand: Hagen, 24.05.2018
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
