# Webseite für Anik von Rohr | Systemische Beraterin

Das Ziel der Webseite ist es die Reichweite zu fördern und mehr Kunden anzusprechen. Es sollen erste Informationen bereitgestellt werden, um Interessenten zur Kontaktkaufnahme zu bewegen.

## Technische Dokumentation

Die Webseite wurde mit [Astro](https://astro.build/) und [Tailwind CSS](https://tailwindcss.com/) erstellt.

### Komponenten

- **LayoutSite**: Die Hauptlayout-Komponente für alle Seiten. Akzeptiert `title` und `backgroundColor` als Props. Siehe [Layout-Dokumentation](./docs/layout-usage.md) für weitere Details.

### Farbsystem

Die Webseite verwendet ein umfangreiches Farbsystem, das in `global.css` definiert und in `tailwind.config.mjs` konfiguriert ist. Alle Farben sind als CSS-Variablen verfügbar und können in Tailwind-Klassen verwendet werden.

Beispiel: `bg-[var(--primary-100)]` oder mit dem LayoutSite: `backgroundColor="primary-100"`
