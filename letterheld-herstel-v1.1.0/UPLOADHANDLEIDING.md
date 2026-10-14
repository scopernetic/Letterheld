# Uploadhandleiding

1. Pak de ZIP uit.
2. Upload **de inhoud** van de map `letterheld-herstel-v1.1.0` naar de documentroot van een statische webhost. Behoud `index.html`, `manifest.webmanifest`, `sw.js` en de mappen `css/`, `js/`, `modules/`, `assets/` exact.
3. Open `https://jouwdomein.example/index.html`. HTTPS is nodig voor de service worker, behalve op localhost.
4. Controleer starttegels, instellingen, één oefening per module, `Volgende`, sterren, winkel en spraak.
5. Bij een update: wijzig `CACHE` in `sw.js`, upload alle gewijzigde bestanden, sluit oude tabbladen en voer een harde refresh uit. In ontwikkelaarstools kan de oude service worker zo nodig worden uitgeschreven.

`docs/` en `tests/` zijn niet vereist voor runtime, maar bewaar ze voor beheer. Open de app niet via `file://`; gebruik lokaal `python3 -m http.server 8000`.
