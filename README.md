# Anik von Rohr | Systemische Beratung - Website

Diese [Website](https://www.anikvonrohr.de) wurde entwickelt, um Anik von Rohr, eine systemische Beraterin, online zu präsentieren. Das Ziel der Webseite ist es, die Reichweite zu fördern und mehr Kunden anzusprechen. Sie stellt wichtige Informationen bereit, um Interessenten zur Kontaktaufnahme zu bewegen.

## 🚀 Technologien

Die Website wurde mit folgenden modernen Technologien entwickelt:

- **[Astro](https://astro.build/)** - Ein modernes Web-Framework, das für Geschwindigkeit und Benutzerfreundlichkeit optimiert ist
- **[TypeScript](https://www.typescriptlang.org/)** - Für typsicheren JavaScript-Code
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-First CSS-Framework für schnelles und responsives Design
- **[AlpineJS](https://alpinejs.dev/)** - Minimalistisches JavaScript-Framework für interaktive UI-Komponenten

### Besondere Komponenten

#### 🎠 Swiffy Slider

Die Website verwendet den [Swiffy Slider](https://swiffyslider.com/) für dynamische und responsive Karussell-Komponenten. Der Slider ist in der Datei `Carousel.astro` implementiert und zeigt verschiedene Beratungssituationen auf ansprechende Weise an.

Hauptmerkmale der Slider-Implementation:
- Responsive Design für verschiedene Bildschirmgrößen
- Automatisches Abspielen der Slides
- Navigations-Elemente für manuelle Steuerung
- Stilvolle Animation und Übergangseffekte

#### 📝 Web3Forms Kontaktformular

Die Kontaktfunktionalität wird über [Web3Forms](https://web3forms.com/) bereitgestellt, einer serverlosen Lösung für Formulare. Die Implementation ist in der Datei `Contact.astro` zu finden.

Vorteile der Web3Forms-Integration:
- Keine Server-Konfiguration notwendig
- SPAM-Schutz
- Einfache Weiterleitung von Nachrichten an die E-Mail-Adresse
- Benutzerfreundliche Fehlerbehandlung

## 🛠️ Entwicklung

```bash
# Lokale Entwicklungsumgebung starten
npm run dev

# Build für Produktion erstellen
npm run build

# Build-Ergebnis vorab anzeigen
npm run preview
```

## 📦 Projektstruktur

```
/
├── public/            # Statische Assets
├── src/
│   ├── components/    # UI-Komponenten
│   ├── layouts/       # Seitenlayouts
│   ├── pages/         # Astro-Seiten
│   ├── styles/        # Globale Stile
│   └── images/        # Bildressourcen
└── package.json       # Projektabhängigkeiten
```

## 🚀 Deployment

Die Website kann auf verschiedenen Hosting-Plattformen bereitgestellt werden, die statisches Hosting unterstützen, wie z.B. Netlify, Vercel, GitHub Pages oder jeder andere Webserver.

## 🧞 Lizenz

Dieses Projekt ist privat und nur für die Verwendung durch Anik von Rohr vorgesehen.
