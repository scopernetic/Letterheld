# Letterheld 1.1.0 — robuuste herstelversie

Uploadklare mobile-first browserapp zonder framework, buildstap, backend of runtime-CDN. De app bevat onafhankelijke modules voor Letters, Cijfers, Rekenen, Producten & delen, Woorden & taal, Sterrenwinkel/avatar en Pretlab.

## Snel starten

```bash
python3 -m http.server 8000
```
Open `http://localhost:8000`. Voer tests uit met `npm test` (Node.js, geen installatie nodig).

## Belangrijkste herstelpunten
- uniforme lifecycle: `init`, `render`, `handleAction`, `newRound`, `destroy`;
- centrale foutisolatie in de modulehost;
- centrale ronde-engine met dubbele-beloningpreventie;
- `Volgende` roept altijd `newRound()` binnen dezelfde oefening aan;
- globale moeilijkheid plus moduleoverride (`inherit` = algemeen volgen);
- profielmigratie naar schemaVersion 2;
- compacte 100dvh-layout met safe-area-insets;
- platform-API's uitsluitend via services/adapters.
