---
title: Notes de versió
description: Què ha canviat a cada versió de LAMB, per què ha canviat i què hi ha de fer una instal·lació.
translationKey: releases
weight: 9
---

Aquestes pàgines recullen què afegeix i què canvia cada versió de LAMB, el motiu de cada canvi i què ha de fer un administrador quan actualitza. S’han escrit contrastant-les amb el codi: cada entrada indica la incidència pública o el lloc del codi font on es pot comprovar.

| Versió | Estat el 10 de novembre de 2026 | Notes |
|---|---|---|
| **0.9** | Versió candidata. No etiquetada. | [Novetats de LAMB 0.9](/ca/releases/0.9/): LTI 1.3 per a les activitats de curs, filtres del prompt, mode Auto de LAMB LEGATUS, anàlisi de l’activitat dels assistents |
| **0.8** | Línia d’integració. Fusionada a la branca de desenvolupament el 20 d’octubre de 2026; no etiquetada com a versió independent. | [Novetats de LAMB 0.8](/ca/releases/0.8/): les activitats de curs com a mòduls, avaluació de fitxers, LLM access |
| **0.7** | Etiquetada com a `v0.7` el 20 d’octubre de 2026. | [Novetats de LAMB 0.7](/ca/releases/0.7/): LAMB LEGATUS, la connexió amb Moodle, accés de suport, claus d’API de creador. [Codi font a l’etiqueta](https://github.com/Lamb-Project/lamb/tree/v0.7) |

## Si vens de la 0.7 {#coming-from-07}

Una instal·lació que passa de la 0.7 a la 0.9 rep alhora els canvis de la 0.8 i els de la 0.9, perquè la 0.9 es construeix sobre la 0.8. Llegeix totes dues pàgines. En resum:

- **No es retira res del que ja hi havia.** La publicació d’assistents individuals, l’accés al Creator des de l’LMS i l’eina d’activitats amb LTI 1.1 continuen funcionant com fins ara. LTI 1.3 és un afegit a l’eina d’activitats, no un substitut.
- **Tres tipus d’activitat de curs** substitueixen l’única activitat de xat: xat, avaluació de fitxers i LLM access. El docent en tria un en el primer llançament.
- **La base de dades s’actualitza sola** quan arrenca la versió nova (cinc migracions, les números 28, 31, 33, 34 i 35). Abans, fes una còpia de seguretat de la base de dades, com en qualsevol actualització.
- **Canvia un comportament per a les converses en curs.** A partir de la 0.9, una conversa conserva el prompt del sistema amb què va començar. Consulta les [notes d’actualització](/ca/releases/0.9/#upgrade-notes) abans de triar el dia.
- **Dues funcionalitats necessiten un administrador abans que ningú les vegi:** LTI 1.3 (cal registrar el teu LMS) i LLM access (cal desplegar la passarel·la opcional).

## Com s’ha de llegir l’estat {#status}

Una **versió candidata** és una versió en proves. Funciona a la instància de desenvolupament del projecte i encara pot canviar abans que s’etiqueti. Una versió **etiquetada** és la que s’espera que facin servir les instal·lacions. L’etiqueta de la cantonada superior esquerra de LAMB Creator mostra la versió que fa servir una instal·lació, i el que veu un docent també depèn del que hagi habilitat l’organització. Consulta [Versions i disponibilitat de les funcionalitats](/ca/availability/).

Les guies il·lustrades continuen a [Guies i versions](/ca/guides/). Documenten la 0.8; on la 0.9 canvia el procediment d’una guia, les notes de la 0.9 ho indiquen.
