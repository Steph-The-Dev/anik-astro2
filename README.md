# Anik von Rohr | Systemische Beratung - Website

![Portfolio Screenshot](/public/AnikVonRohr-Screenshot.png)

Diese [Website](https://www.anikvonrohr.de) wurde entwickelt, um Anik von Rohr, eine systemische Beraterin, online zu präsentieren. Das Ziel der Webseite ist es, die Reichweite zu fördern und mehr Kunden anzusprechen. Sie stellt wichtige Informationen bereit, um Interessenten zur Kontaktaufnahme zu bewegen.

## 🚀 Technologien

- **[Astro 7](https://astro.build/)** – statische Seiten, optimierte Bilder (`astro:assets`), Sitemap & robots.txt
- **[Tailwind CSS 4](https://tailwindcss.com/)** – Design-Tokens in `src/styles/global.css` (`@theme`, `@utility`)
- **Selbst gehostete Schriften** via Fontsource (Playfair Display, Lato) – keine Verbindung zu Google Fonts
- **Native Web-Plattform statt Frameworks**: Popover-API für das mobile Menü, CSS View Transitions für Seitenwechsel
- **Matomo** (selbst gehostet, ohne Cookies) für die Webanalyse

### Besondere Komponenten

#### 📝 Kontaktformular (eigenes PHP-Skript)

Das Formular sendet an `public/kontakt.php`, das auf dem eigenen Webspace läuft und die Anfrage per `mail()` weiterleitet – ohne externen Formulardienst.

- Spam-Schutz: Honeypot-Feld, Mindest-Ausfülldauer, Rate-Limit pro IP (nur Hash, verfällt nach 1 h)
- Funktioniert mit und ohne JavaScript (JSON-Antwort bzw. Weiterleitung mit `?kontakt=ok|fehler`)
- Die Empfängeradresse steht nicht im Repository: Beim Build wird `dist/kontakt-config.php` aus `.env` erzeugt
- Voraussetzung auf dem Server: PHP ≥ 8.1 mit funktionierendem `mail()` (z. B. netcup Webhosting)
- Im Dev-Server (`npm run dev` / `preview`) läuft kein PHP – das Formular lässt sich nur auf dem Webspace testen

### 🔒 Kontaktdaten & Umgebungsvariablen

E-Mail, Telefon und Adresse kommen aus `.env` (Vorlage: `.env.example`) und werden nur kodiert ins HTML geschrieben (`Protected.astro`). Ohne `.env` bricht der Build bewusst ab.

## 🛠️ Entwicklung

```bash
# Lokale Entwicklungsumgebung starten
npm run dev

# Build für Produktion erstellen
npm run build

# Build-Ergebnis vorab anzeigen
npm run preview

# Typen prüfen, linten, formatieren
npm run check
npm run lint
npm run format
```

Voraussetzung: Node.js ≥ 22.

## 📦 Projektstruktur

```
/
├── public/            # Statische Assets
├── src/
│   ├── components/    # UI-Komponenten
│   ├── layouts/       # Seitenlayouts
│   ├── pages/         # Astro-Seiten
│   ├── styles/        # Globale Stile & Design-Tokens
│   └── assets/images/ # Bildressourcen (werden beim Build optimiert)
└── package.json       # Projektabhängigkeiten
```

## 🚀 Deployment

Die Website kann auf verschiedenen Hosting-Plattformen bereitgestellt werden, die statisches Hosting unterstützen, wie z.B. Netlify, Vercel, GitHub Pages oder jeder andere Webserver.

## 🧞 Lizenz

Dieses Projekt ist privat und nur für die Verwendung durch Anik von Rohr vorgesehen.
