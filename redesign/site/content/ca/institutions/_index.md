---
title: "Fes que la IA sigui útil a la teva institució"
description: "Planifica una prova pilot docent amb LAMB amb responsabilitats clares sobre l’accés, els proveïdors, les dades i el suport."
translationKey: institutions
weight: 2
aliases: [/next/]
---

LAMB porta la IA generativa a l’entorn d’aprenentatge de la institució. Docents i estudiants fan servir assistents i activitats a través de l’LMS, mentre que la institució gestiona l’accés, els proveïdors de models i les condicions en què es tracten les dades dels cursos.

És **programari lliure amb llicència GNU GPL v3**, amb el codi font disponible per inspeccionar-lo, adaptar-lo i compartir-lo d’acord amb la llicència. LTI connecta les activitats amb plataformes LMS com Moodle i Canvas. El connector opcional de Moodle també dona a LAMB LEGATUS, l’agent per als docents, accés al contingut i l’activitat dels cursos que estiguin permesos, mitjançant serveis web estàndard i sense instal·lar cap plugin a Moodle.

## Tres maneres de començar {#three-ways-to-begin}

Tria el pas següent que millor s’adapti al teu equip.

{{< adoption-routes >}}

## L’última milla per a la teva IA {#the-last-mile-for-your-ai}

És possible que la teva institució ja tingui models propis o faci servir un proveïdor que compleix els seus requisits. LAMB dona a cada estudiant accés a aquests models segons les regles que fixen el centre i el docent: assignacions per docent, límits per estudiant, horaris i una clau personal amb l’ús comptabilitzat. A la 0.8 això cobreix les activitats LLM access, per a les eines pròpies dels estudiants. [L’última milla per a la teva IA →](/ca/institutions/ai-governance/)

## Governança i elecció de proveïdors {#governance-and-provider-choice}

Decideix qui pot crear i fer servir activitats d’IA, quins serveis de generació i d’embeddings estan aprovats, i com es pot accedir als continguts i a les converses. Aquestes decisions integren LAMB en la feina de la institució sobre privadesa, RGPD i governança de la IA. El compliment normatiu depèn de les polítiques i del desplegament de la institució, a més de la configuració del programari.

Tria entre els proveïdors admesos amb inferència allotjada a la mateixa institució, serveis al núvol o una combinació adequada a la teva política. Allotjar LAMB i allotjar els models són decisions separades; fes-les explícites totes dues.

[Privadesa, RGPD i control institucional →](/ca/privacy/)

## Què pot oferir una institució {#what-an-institution-can-provide}

| Necessitat | Què aporta LAMB | Què decideix la teva institució |
|---|---|---|
| Els docents necessiten assistents específics per a cada curs | Una interfície per a instruccions, materials i proves | Qui crea assistents, quines fonts es permeten i com es revisa la qualitat |
| Els estudiants necessiten accés des del seu curs | Vies d’integració amb l’LMS | Configuració LMS/LTI admesa, matriculació i suport |
| Els equips necessiten poder triar serveis d’IA | Connexions configurables amb models | Proveïdors locals o externs, dades aprovades, despesa i acords de servei |
| Els estudiants necessiten accés a models per a les seves pròpies eines | Activitats LLM access: claus personals amb límits, horaris i registres d’ús | Quins models, quants tokens per docent i per estudiant, i quan |
| Els administradors necessiten un servei operat | Administració d’organitzacions i d’usuaris | Allotjament, còpies de seguretat, monitoratge, actualitzacions i responsabilitat operativa |
| Els innovadors necessiten un punt de partida | API pública i recursos per a eines educatives | Abast, responsabilitat del desplegament i acceptació de cada aplicació |

Les capacitats varien segons la versió instal·lada. Consulta la [disponibilitat](/ca/availability/) abans de tractar una demostració com un compromís de desplegament.

## Comença amb una prova pilot acotada {#begin-with-a-bounded-pilot}

Tria un curs, un equip docent petit i un propòsit d’aprenentatge clar. Designa el responsable acadèmic, la persona de contacte de l’LMS i l’operador del sistema. Acorda quines dades es poden fer servir, com es cobriran els costos dels models i com s’informarà els estudiants.

Abans de convidar els estudiants, prova el recorregut complet: l’accés del docent, la preparació dels documents, el comportament de l’assistent, l’accés de l’estudiant i el suport. Quan una activitat retorni una qualificació, prova l’escala que es mostra i el resultat al llibre de qualificacions, a més de la connexió tècnica.

Avalua la prova pilot amb preguntes que realment puguis respondre: l’assistent ha ajudat en la tasca seleccionada? Quines respostes han fallat? El docent ha pogut corregir el problema? El servei es podia mantenir? Els recomptes d’ús per si sols no demostren un benefici per a l’aprenentatge.

## La privadesa és una decisió de desplegament {#privacy-is-a-deployment-decision}

Allotjar LAMB a la institució no fa, per si sol, que totes les peticions als models es quedin al campus. Els proveïdors externs de generació i d’embeddings poden tractar el contingut que s’hi envia. L’accés a les converses i la seva conservació també necessiten una política institucional explícita.

[Preguntes per a la teva revisió de privadesa i seguretat →](/ca/privacy/)

## Passa al pas següent adequat {#move-to-the-right-next-step}

- **Equip de l’LMS:** [revisa la via de publicació i d’accés des del curs](/ca/guides/publishing/).
- **Operador del sistema:** [planifica l’operació i el desplegament](/ca/institutions/operations/).
- **Responsable docent:** [prepara un primer assistent](/ca/guides/first-assistant/).
- **Equip d’aplicacions:** [explora la via per a desenvolupadors](/ca/developers/).
