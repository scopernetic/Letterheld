# Test- en regressierapport — 1.1.0

## Gemelde problemen
De eerder gegenereerde project-ZIP was niet beschikbaar in de uitvoersandbox. Daardoor kon de exacte foutregel uit die versie niet worden gereproduceerd. De herstelversie is opnieuw geconsolideerd vanuit `index 7.html`, het ontwikkelplan en de ontwikkelinstructies. De fragiele patronen uit de baseline — één globale clickhandler, gedeelde `S.current`/`S.feedback`, schermfallback naar home en een generieke `next` — zijn vervangen door een routegebaseerde modulehost, modulelifecycle en centrale ronde-engine.

## Herstel tijdens testcyclus
Een eerste statische controle vond dat de aparte modulekeuze als `<select>` wel gerenderd werd, maar alleen click-delegatie bestond. Dit is hersteld met centrale change-delegatie en een regressietest. Ook de clonefallback gebruikt nu `typeof structuredClone` zodat oudere browsers geen ReferenceError krijgen.

## Geautomatiseerd
- Node syntaxcontrole op elk `.js`-bestand;
- unit: opslag/fallback, profielmigratie, reset, spraakfallback, moeilijkheidsresolver, ronde-engine/dubbele reward;
- generatoren: letters, cijfers 10/20/50/100, sommen, twee prentgroepen, producten, exact deelbare delingen, woorden/patronen;
- modulecontract: elke module en subroute start/rendert; quizmodules behouden oefening bij `newRound`;
- statisch: geen directe platform-API in modules, geen CDN/framework, PWA-cachedekking, mobile-first CSS-tokens.

## Handmatige acceptatiematrix vóór productie
| Viewport | Te controleren |
|---|---|
| 320×568 | compacte header, opdracht/antwoorden/feedback, Volgende zichtbaar of direct bereikbaar |
| 390×844 | alle starttegels en instellingen |
| 844×390 | landschapsindeling zonder overlap |
| 768×1024 | tabletgrid en avatarwinkel |
| 1440×900 | maximale breedte en toetsenbordfocus |

Claim geen echte browserrendering zolang die niet is uitgevoerd op de doelhost.
