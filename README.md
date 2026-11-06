# ZDM – Website

Statische Website: Vite + React + TypeScript + Tailwind CSS, ohne Backend. Gleicher Aufbau wie die anderen
Websites (z. B. bookique-website).

| Seite | URL |
|---|---|
| Startseite (Hero, Leistungen, Über uns, Kontakt) | `/` |
| Impressum | `/impressum/` |
| Datenschutz | `/datenschutz/` |

## Texte ändern

Alle Texte, Kontaktdaten und die Domain stehen in **`src/content.ts`**. Alles mit „Platzhalter“ muss noch ersetzt
werden. Farben stehen in `tailwind.config.js` (`brand`, `accent`).

## Lokal starten

Node.js 18 oder neuer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Typprüfung, Build und Vorrendern nach dist/
npm run preview   # dist/ unter http://localhost:4173
```

Das Vorrendern läuft in `vite build` selbst (Plugin in `vite.config.ts`), also auch bei Bolt oder jedem Host, der nur
`vite build` ausführt. Ergebnis: eine fertige HTML-Datei pro Seite, `404.html`, `sitemap.xml` und `robots.txt`.

## Veröffentlichen

`netlify.toml` ist vorbereitet (Build `npm run build`, Ordner `dist`). Jeder andere statische Host funktioniert ebenso.
