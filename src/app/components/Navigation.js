"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          <Image
            src="/images/logo-randack-group.png"
            alt="Randack Group"
            width={160}
            height={50}
            priority
            style={{ height: 45, width: "auto" }}
          />
        </Link>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <Link href="/herstellung" onClick={() => setOpen(false)}>
              Herstellung
            </Link>
          </li>
          <li>
            <Link href="/lieferprogramm" onClick={() => setOpen(false)}>
              Lieferprogramm
            </Link>
          </li>
          <li>
            <Link href="/qualitaet" onClick={() => setOpen(false)}>
              Qualität
            </Link>
          </li>
          <li>
            <Link href="/unternehmen" onClick={() => setOpen(false)}>
              Unternehmen
            </Link>
          </li>
          <li>
            <Link href="/aktuelles" onClick={() => setOpen(false)}>
              Aktuelles
            </Link>
          </li>
          <li>
            <Link href="/karriere" onClick={() => setOpen(false)}>
              Karriere
            </Link>
          </li>
          <li>
            <Link
              href="/kontakt"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
