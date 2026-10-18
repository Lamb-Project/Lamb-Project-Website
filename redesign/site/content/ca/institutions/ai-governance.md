---
title: "L’última milla per a la teva IA"
description: "Dona a cada estudiant accés als models de la teva institució, en la quantitat adequada i en el moment adequat, segons les regles que fixen l’organització i el docent."
translationKey: ai-governance
weight: 0
---

**Per a institucions, centres i els docents que hi treballen.** Moltes institucions ja han decidit on s’executa la inferència: models locals o un proveïdor que compleix els seus requisits. La pregunta que queda és l’última milla. Com obté cada estudiant accés a aquests models, segons les seves necessitats i amb les regles que fixen el seu centre i el seu docent?

Un servei d’inferència coneix models, claus i tokens. No sap qui està matriculat, en quin curs, amb quin rol ni en quin centre. El teu LMS sí que ho sap, i LAMB ho aprèn mitjançant LTI cada vegada que un estudiant obre una activitat, i ho fa correspondre amb les seves pròpies organitzacions. Això és el que permet a LAMB oferir **el model adequat, a la persona adequada, en la quantitat adequada, en el moment adequat.**

<figure class="lamb-diagram"><img src="/images/diagrams/last-mile.svg" alt="Diagrama: la teva infraestructura d’IA dona a LAMB els models autoritzats; el teu LMS comunica a LAMB mitjançant LTI qui està matriculat, en quin curs, amb quin rol i en quin centre; la capa de governança de la IA de LAMB aplica les regles de l’organització i l’activitat del docent, i una passarel·la dona a cada persona una clau d’abast limitat. A LAMB 0.8 governa les eines pròpies dels estudiants; els assistents, LAMB LEGATUS i les aplicacions d’aprenentatge estan en disseny." width="1200" height="800"><figcaption>Línia contínua: governat a LAMB 0.8. Línia discontínua: en disseny.</figcaption></figure>

## Com funciona a LAMB 0.8 {#how-it-works-in-lamb-08}

El trànsit no passa per LAMB. Una passarel·la de codi obert ([LiteLLM](https://github.com/BerriAI/litellm), que apareix com a **Proxy** a les pantalles d’administració de LAMB) se situa davant dels teus models, i LAMB la controla: emet una clau personal per a cada estudiant d’una activitat, en fixa els límits i l’horari, i consulta quants tokens ha fet servir cada clau. La passarel·la s’inclou amb LAMB 0.8 com a complement opcional del desplegament.

Els límits es compten en tokens. Un token és un tros de paraula; una pàgina de text equival aproximadament a entre 500 i 700 tokens.

## Qui decideix què {#who-decides-what}

- **La institució** gestiona la passarel·la i tria quins models ofereix. El seu administrador del sistema connecta cada organització amb la passarel·la una sola vegada.
- **Cada centre o departament** és una organització a LAMB, amb els seus propis administradors i regles. L’administrador de l’organització decideix si els docents poden donar accés als models, com es limiten els tokens (una bossa compartida per activitat, una assignació personal per estudiant, o totes dues), quants tokens pot comprometre cada docent, amb excepcions per a docents concrets, i quins models poden oferir els docents.
- **El docent** afegeix una activitat **LLM access** a un curs de l’LMS i decideix, dins d’aquestes regles, la bossa, quant pot fer servir cada estudiant per franja de temps i en total, i quan està oberta l’activitat: uns dies i unes hores concrets, entre dues dates o sempre.
- **L’estudiant** obre l’activitat des del curs, llegeix què es registra i obté una clau personal per a les seves pròpies eines: qualsevol eina compatible amb OpenAI, com ara VS Code amb Continue o Cline, Aider, Zed o Cursor, i Claude Code.

Un Moodle, un LAMB, moltes estratègies: la institució fixa el marc, cada centre fixa les seves pròpies regles i el docent decideix al curs.

{{< capture src="/images/guides/governance-org-policy.png" alt="Configuració d’LLM access d’una organització: política Both, assignació per defecte per docent de 300000 tokens, una excepció per a un docent de 1000000, model course-model, franja de temps de 10 minuts i una taula d’ús per docent" caption="Les regles d’LLM access d’una organització a LAMB 0.8, amb l’ús per docent." >}}

## Què es comptabilitza {#what-is-accounted-for}

L’administrador de l’organització veu, per a cada docent, l’assignació, el que el docent ha compromès (**Committed**: les bosses més els totals dels estudiants que han obtingut una clau) i els tokens realment utilitzats. El docent veu l’ús de cada estudiant en la franja de temps actual i en total, i les peticions rebutjades.

Abans d’obtenir una clau, l’estudiant llegeix què es registra. Amb la configuració que inclou LAMB, la base de dades de la passarel·la registra l’hora, el model i el nombre de tokens de cada petició, vinculats a l’estudiant perquè el docent en pugui veure l’ús, i no el text dels prompts ni de les respostes. Si el model s’executa en un proveïdor extern, aquest proveïdor rep el text amb el compte de la institució, sense el nom de l’estudiant. Els registres de l’operador de la passarel·la es regeixen per les polítiques pròpies de la institució. [Privadesa, RGPD i control institucional](/ca/privacy/) cobreix la resta de LAMB.

## Què cobreix la 0.8 i quins límits té {#what-08-covers-and-its-limits}

- Aquestes regles governen les activitats **LLM access**: claus personals per a les eines pròpies dels estudiants. Les activitats de xat i d’avaluació de fitxers fan servir els assistents de l’organització a través del proveïdor de models de l’organització, i el seu ús no es descompta d’aquestes assignacions.
- **Un límit ferm necessita una bossa.** A la 0.8, un estudiant que substitueix la seva clau comença un total nou, i quan un docent augmenta més tard el total per estudiant no es torna a comprovar contra la seva assignació. Només una bossa d’activitat limita el que pot consumir una activitat.
- **Tancar l’activitat és el que atura l’accés.** A la 0.8, un estudiant bloquejat encara pot substituir la seva clau, i un estudiant que deixa el curs conserva la clau fins que el docent la revoca o l’activitat es tanca.
- La passarel·la s’ha provat com a instància única; encara no s’ha provat el funcionament amb diverses instàncies per repartir la càrrega o garantir la disponibilitat.

Estem dissenyant la mateixa governança per als assistents de LAMB i per a LAMB LEGATUS, amb pressupostos per model.

## Comença {#start}

- **Administradors d’organització i docents:** [dona als estudiants accés als models amb les teves regles](/ca/guides/0.8/llm-access/), pas a pas i amb totes les pantalles.
- **Operadors del sistema:** les [notes d’instal·lació](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) de la passarel·la al repositori de LAMB, i [planifica el servei operat](/ca/institutions/operations/).
- **Institucions que planifiquen una estratègia:** l’equip de LAMB ofereix [consultoria sobre governança de la IA](/ca/contact/#consultancy).
