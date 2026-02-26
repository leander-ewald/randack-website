import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Randack Group | Spezialisten für Sonderschrauben seit 1934",
  description:
    "RS Randack Spezialschrauben GmbH — Ihr Partner für hochwertige, abnahmepflichtige Schrauben, Muttern und Verbindungselemente. Über 90 Jahre Erfahrung in der Herstellung von Spezialschrauben.",
  keywords:
    "Spezialschrauben, Sonderschrauben, Verbindungselemente, Randack, Hagen, Schrauben nach Zeichnung",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
