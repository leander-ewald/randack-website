import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Image
            src="/images/logo-randack-group.png"
            alt="Randack Group"
            width={160}
            height={40}
            style={{ height: 40, width: "auto", filter: "brightness(10)" }}
          />
          <p>
            Spezialisten für Sonderschrauben seit 1934. Qualität und Präzision
            aus Hagen für die Welt.
          </p>
        </div>

        <div>
          <h4>Unternehmen</h4>
          <ul>
            <li>
              <Link href="/unternehmen">Über uns</Link>
            </li>
            <li>
              <Link href="/herstellung">Herstellung</Link>
            </li>
            <li>
              <Link href="/qualitaet">Qualität</Link>
            </li>
            <li>
              <Link href="/karriere">Karriere</Link>
            </li>
            <li>
              <Link href="/aktuelles">Aktuelles</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Produkte</h4>
          <ul>
            <li>
              <Link href="/lieferprogramm">Lieferprogramm</Link>
            </li>
            <li>
              <Link href="/lieferprogramm#warmformteile">Warmformteile</Link>
            </li>
            <li>
              <Link href="/lieferprogramm#schraubenbolzen">
                Schraubenbolzen
              </Link>
            </li>
            <li>
              <Link href="/lieferprogramm#kaltfliesspressteile">
                Kaltfliesspressteile
              </Link>
            </li>
            <li>
              <Link href="/lieferprogramm#drehteile">Drehteile</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Kontakt</h4>
          <ul>
            <li>
              <Link href="/kontakt">Kontaktformular</Link>
            </li>
            <li>
              <a href="tel:+492331970750">+49 2331 97 07 50</a>
            </li>
            <li>
              <a href="mailto:kontakt@rs-randack.de">kontakt@rs-randack.de</a>
            </li>
            <li>
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                Delsterner Str. 148 E
                <br />
                58091 Hagen
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Randack Group</span>
        <div className="footer-legal">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
