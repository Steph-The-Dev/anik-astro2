# Anik von Rohr | Systemische Beratung – Website

Quellcode der Website [www.anikvonrohr.de](https://www.anikvonrohr.de) von Anik von Rohr, systemische Beraterin (DGSF) in Basel. Die Seite stellt das Beratungsangebot vor und soll Interessierten den Schritt zur Kontaktaufnahme leicht machen.

## 🚀 Technologien

- **[Astro 7](https://astro.build/)** – statische Seiten, optimierte Bilder (`astro:assets`), Sitemap & robots.txt
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Design-Tokens in `src/styles/global.css` (`@theme`, `@utility`)
- **Selbst gehostete Schriften** über Fontsource (Playfair Display, Lato) – keine Verbindung zu Google Fonts
- **Native Web-Plattform statt Frameworks** – Popover-API für das mobile Menü, CSS View Transitions für Seitenwechsel
- **PHP-Kontaktformular** auf dem eigenen Webspace – kein externer Formulardienst
- **Matomo** (selbst gehostet, ohne Cookies) für die Webanalyse

## 📄 Seiten

| Seite | Datei |
|---|---|
| Startseite (Hero, Themen, Zitat, Kontakt) | `src/pages/index.astro` |
| Systemische Beratung | `src/pages/systemische-beratung.astro` |
| Über mich | `src/pages/ueber-mich.astro` |
| Impressum | `src/pages/impressum.astro` |
| Datenschutzerklärung (Schweizer DSG) | `src/pages/datenschutzerklaerung.astro` |

Die Seite richtet sich an die Schweiz: `lang="de-CH"`, Schweizer Schreibweise (ss statt ß), Impressum und Datenschutzerklärung nach Schweizer Recht.

## 🔒 Kontaktdaten & Datenschutz

Persönliche Kontaktdaten stehen **nicht im Repository**:

- E-Mail, Telefon und Adresse kommen aus `.env` (Vorlage: `.env.example`). Ohne `.env` bricht der Build bewusst ab.
- `Protected.astro` schreibt die Werte nur kodiert ins HTML und wandelt sie erst im Browser in normale Links um. Einfache Adress-Sammler finden sie im Quelltext so nicht.
- Impressum und Datenschutzerklärung sind `noindex` und nicht in der Sitemap.

```dotenv
CONTACT_EMAIL=name@example.com
CONTACT_PHONE=+41 00 000 00 00
CONTACT_ADDRESS=Musterstrasse 1|1234 Ort|Schweiz   # Zeilen mit | trennen
CONTACT_FORM_FROM=                                  # optional, Absender für Formular-Mails
```

## 📝 Kontaktformular

Das Formular sendet an `public/kontakt.php`, das die Anfrage per `mail()` an die Adresse aus `CONTACT_EMAIL` weiterleitet. Gespeichert wird nichts.

- **Spam-Schutz:** Honeypot-Feld, Mindest-Ausfülldauer (im Browser gemessen), Rate-Limit von 5 Anfragen pro Stunde und IP (nur gehasht, verfällt nach 1 h), Origin-Check
- **Mit und ohne JavaScript:** JSON-Antwort bzw. Weiterleitung mit `?kontakt=ok|fehler`
- **Konfiguration:** Beim Build wird `dist/kontakt-config.php` aus `.env` erzeugt (siehe `astro.config.mjs`). Die Datei gibt bei direktem Aufruf nur 404 zurück.
- Im Dev-Server (`npm run dev` / `preview`) läuft kein PHP – das Formular lässt sich nur auf dem Webspace testen.

## 🛠️ Entwicklung

Voraussetzung: **Node.js ≥ 22** und eine ausgefüllte `.env`.

```bash
npm install
cp .env.example .env   # Werte eintragen

npm run dev       # Entwicklungsserver auf http://localhost:4321
npm run build     # Typprüfung (astro check) + Build nach dist/
npm run preview   # Build lokal ansehen
npm run lint      # ESLint inkl. Accessibility-Regeln
npm run format    # Prettier
```

## 📦 Projektstruktur

```
/
├── public/                  # Statische Dateien, inkl. kontakt.php
├── src/
│   ├── assets/images/       # Bilder (werden beim Build optimiert)
│   ├── components/site/
│   │   ├── common/          # Navbar, Footer, Quote, Protected
│   │   └── homepage/        # Hero, Topics, Contact
│   ├── layouts/             # LayoutSite (Meta-Tags, Matomo, Skip-Link)
│   ├── lib/contact.ts       # Kontaktdaten aus .env + Kodierung
│   ├── pages/               # Seiten
│   └── styles/global.css    # Design-Tokens & Basis-Stile
├── .env.example             # Vorlage für Kontaktdaten
└── astro.config.mjs         # Astro-Konfiguration inkl. Erzeugung der Formular-Config
```

## 🚀 Deployment

Die Seite liegt bei **netcup** (Webhosting) und wird manuell veröffentlicht:

1. `npm run build` mit ausgefüllter `.env`
2. Den **kompletten Inhalt von `dist/`** auf den Webspace hochladen – inklusive `kontakt.php` und `kontakt-config.php`
3. Auf dem Webspace ist **PHP 8.5** eingestellt (mindestens 8.1 nötig)
4. Nach Änderungen am Formular eine Testnachricht schicken

## 🧞 Lizenz

Dieses Projekt ist privat und nur für die Verwendung durch Anik von Rohr vorgesehen.
