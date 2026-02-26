import Image from "next/image";

export const metadata = {
  title: "Aktuelles | Randack Group",
  description: "Neuigkeiten und aktuelle Meldungen der Randack Group.",
};

const news = [
  {
    date: "14. November 2024",
    company: "RS Randack Spezialschrauben GmbH",
    title: "Ein Neues Wahrzeichen im Volmetal bei Hagen",
    text: "Hiermit zeigen wir, was wir machen und was wir können — SPEZIALSCHRAUBEN!",
  },
  {
    date: "9. November 2024",
    company: "RFI Randack Fasteners India",
    title: "Randack Fasteners India participates ADIPEC 2024 in Abu Dhabi",
    text: "We are thrilled to announce the successful completion of our participation at ADIPEC 2024. This event marked a significant step forward for Randack Fasteners India as we expand our footprint in the oil & gas sector.",
  },
  {
    date: "24. Oktober 2024",
    company: "RFI Randack Fasteners India",
    title: "Randack Fasteners India participates in Windergy Chennai",
    text: "Das Unternehmen erhielt positives Feedback und ein Certificate of Appreciation auf Indiens führender Windenergie-Veranstaltung.",
  },
  {
    date: "1. Juli 2024",
    company: "RS Randack Spezialschrauben GmbH",
    title: "Sponsoring-Fortsetzung mit ISERLOHN-ROOSTERS",
    text: "Wir freuen uns als Business-Partner der ISERLOHN-ROOSTERS auf weitere spannende Spiele in der Neuen Saison.",
  },
  {
    date: "1. Juli 2024",
    company: "Randack Group",
    title: "RFI donation for dam construction in Pimpri Taluka-Satara",
    text: "Unterstützung von Wassermanagement und landwirtschaftlicher Entwicklung durch gemeinnützige Partnerschaft.",
  },
  {
    date: "26. Mai 2024",
    company: "Randack Group",
    title: "2K24 Party",
    text: "Feierveranstaltung für RFI-Kollegen in Indien — Teamgeist und Zusammenhalt über Grenzen hinweg.",
  },
];

export default function AktuellesPage() {
  return (
    <>
      <section className="hero" style={{ height: "50vh", minHeight: 350 }}>
        <div className="hero-bg">
          <Image
            src="/images/bildstreifen-home-3.jpg"
            alt="Aktuelles"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-badge">News</div>
          <h1>Aktuelles</h1>
          <p>Neuigkeiten und Meldungen aus der Randack Group.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {news.map((n, i) => (
              <div key={i} className="news-card">
                <div
                  className="news-card-image"
                  style={{
                    background: "linear-gradient(135deg, var(--rs-blue), var(--rs-blue-light))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.3)",
                    fontSize: "3rem",
                    fontWeight: 700,
                  }}
                >
                  RS
                </div>
                <div className="news-card-body">
                  <div className="news-card-date">
                    {n.date} | {n.company}
                  </div>
                  <h3>{n.title}</h3>
                  <p>{n.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
