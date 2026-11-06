# Immobilien zwischen den Meeren – Website

Neue Website für die Immobilien zwischen den Meeren eGbR (Husum). Statisch: Vite + React + TypeScript + Tailwind CSS,
jede Seite wird beim Build fertig vorgerendert (wie bookique-website). Inhalte übernommen von
zwischen-den-meeren.vibepreview.app, Design komplett neu.

## Seiten

`/`, `/immobilien/`, `/immobilie-verkaufen/`, `/immobilie-vermieten/`, `/immobilienbewertung/`, `/finanzierung/`,
`/bauvorhaben/`, `/ueber-uns/`, `/region/`, `/kontakt/`, `/rechner/` (+ `kaufnebenkosten/`, `tilgung/`, `budget/`,
`mietrendite/`), `/impressum/`, `/datenschutzerklaerung/`, `/danke/` (nach dem Absenden eines Formulars, noindex).

## Wo was steht

- Texte, Team, Kontaktdaten, Bilder: `src/content.ts`, Seitentitel und Beschreibungen: `src/site.ts`
- Rechenlogik der Rechner: `src/calc/math.ts`
- Farben (Priel, Watt, Reet, Ostsee): `tailwind.config.js`; Schriften (Bricolage Grotesque, Instrument Sans, IBM Plex Mono)
  liegen selbst gehostet im Build, keine Verbindung zu Google Fonts.
- Signatur: die bewegten Wasserkanten „Nordsee“ und „Ostsee“ im Startseiten-Hero (`src/components/Waves.tsx`).
  Alle Animationen respektieren „Bewegung reduzieren“.

## Formulare

Alle Formulare laufen über **Netlify Forms** (`data-netlify`). Nach dem ersten Deploy in Netlify unter
*Forms → Form notifications* die E-Mail-Benachrichtigung an info@immobilien-zdm.de einrichten.

## Vor dem Livegang

- Bilder liegen noch auf vibe.filesafe.space bzw. immobilien-zdm.de. Nach `public/images/` kopieren und die Pfade in
  `src/content.ts` (`IMAGES`, `TEAM`) umstellen.
- Objektliste auf `/immobilien/` einbinden (Quelle klären), bis dahin gibt es dort einen Suchauftrag.
- Datenschutzerklärung rechtlich prüfen.

## Lokal starten

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Typprüfung, Build und Vorrendern nach dist/
npm run preview   # http://localhost:4173
```
