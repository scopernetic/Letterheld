# Architectuur en nieuwe modules

## Contract
Elke definitie gebruikt `defineModule({id,title,icon,color,description,exercises,create})`. `create(ctx)` retourneert exact deze lifecycle:
- `init(exerciseId)` — valideert en initialiseert route/state;
- `render()` — rendert alleen in `ctx.el`;
- `handleAction(action, element)` — verwerkt gedelegeerde moduleacties;
- `newRound()` — maakt een nieuwe vraag in dezelfde oefening;
- `destroy()` — stopt spraak en ruimt tijdelijke state op.

De modulehost vernietigt de vorige module vóór routewissel en vangt start-/actiefouten af. Eén defecte module toont een foutkaart zonder de rest van de app onbruikbaar te maken.

## Context
Modules krijgen: `el`, `router`, `profile`, `speech`, `rewards`, `store`, `refreshHeader`, `applySettings`. Gebruik nooit rechtstreeks `localStorage`, `speechSynthesis` of Android-API's.

## Nieuwe module toevoegen
1. Maak `modules/<id>/module.js`; zet generator/data in aparte bestanden.
2. Gebruik een stabiele id en unieke oefen-ids.
3. Implementeer alle lifecycle-hooks.
4. Registreer alleen de module-import in `js/registry.js`.
5. Gebruik `createRoundEngine` voor antwoorden/rewards en `resolveDifficulty` voor parameters.
6. Voeg moduleparameters toe in `js/services/difficulty.js` en de instellingenlijst.
7. Voeg generator-, module-start- en next-roundtests toe.
8. Voeg runtimebestanden toe aan `sw.js` en verhoog de cacheversie.

Een module kan uit `js/registry.js` worden verwijderd zonder andere modules te wijzigen.
