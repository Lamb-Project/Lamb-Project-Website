---
title: "Construeix una aplicació d’aprenentatge amb LAMB"
description: "Fes servir els recursos públics d’integració per construir una eina educativa o contribuir a LAMB."
translationKey: developers
weight: 3
---

Desenvolupem LAMB a [GitHub](https://github.com/Lamb-Project/lamb) i fem servir la [branca `dev`](https://github.com/Lamb-Project/lamb/tree/dev) per al desenvolupament. Pots instal·lar LAMB en local passant a un agent de programació el fitxer [`Documentation/installation/deployLocal.md`](https://github.com/Lamb-Project/lamb/blob/dev/Documentation/installation/deployLocal.md): està escrit perquè el segueixi un agent, que et demana les dades que necessita. Tot funciona a localhost amb Docker.

LAMB ofereix una capa de gestió d’assistents i d’accés a models que les aplicacions educatives poden fer servir dins d’un entorn institucional. Construeix una eina docent nova, automatitza un flux de treball o contribueix a l’ecosistema de programari lliure. LAMB té llicència GNU GPL v3.

## Construeix una eina per a una activitat d’aprenentatge {#build-a-tool-for-a-learning-activity}

La plantilla pública **lamb-tool-template** mostra una eina que s’obre des d’un LMS, fa servir un assistent de LAMB autoritzat i retorna a l’LMS un resultat aprovat pel docent. Dona a un equip de desenvolupament d’aplicacions un punt de partida concret.

Necessites una instal·lació de LAMB que admeti l’accés a l’API de creador, permís per fer servir aquest accés i un assistent publicat disponible al teu compte. La institució també ha de permetre la versió d’LTI que fa servir l’eina. La plantilla demostrada fa servir LTI 1.1.

[Consulta la guia il·lustrada de l’eina →](/ca/guides/learning-tool/)

## Eines per al desenvolupament i les proves {#tools-for-development-and-testing}

| Eina | En què t’ajuda | Codi font públic |
|---|---|---|
| LAMB LTI Test Tool | Provar llançaments LTI 1.1, els rols de docent i d’estudiant, els paràmetres de llançament i el retorn de qualificacions amb Basic Outcomes durant el desenvolupament | [LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) |
| Moodle CLI | Treballar amb les API de serveis web estàndard de Moodle des de la línia d’ordres, dins dels permisos del compte | [Moodle CLI](https://github.com/Lamb-Project/moodle-cli) |
| LAMB CLI | Gestionar assistents, bases de coneixement, rúbriques, proves, analítiques i els fluxos de treball amb agents admesos des del terminal | [LAMB CLI](https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli) |
| Plantilla d’eina de LAMB | Començar una aplicació educativa allotjada a part amb accés autoritzat als assistents i integració amb l’LMS | [Plantilla d’eina](https://github.com/Lamb-Project/lamb-tool-template) |

Fes servir l’LTI Test Tool per examinar i assajar una integració, i després valida-la amb la configuració real de l’LMS de la institució. El seu entorn de desenvolupament no certifica la compatibilitat amb Moodle ni amb Canvas.

Moodle CLI i el connector de Moodle de LAMB fan servir serveis web estàndard; no necessiten cap plugin de Moodle fet a mida. Les operacions disponibles depenen dels serveis habilitats, dels permisos del compte i, en el cas del connector, de la política de l’organització a LAMB.

## Entén el contracte públic {#understand-the-public-contract}

L’API de creador de LAMB exposa els models admesos i les complecions de xat mitjançant una interfície compatible amb OpenAI en els desplegaments que tenen aquesta capacitat. La compatibilitat descriu la interfície admesa; no promet tots els punts d’accés ni totes les opcions d’un altre servei.

Fes servir els identificadors d’assistent que retorna l’API. Guarda les claus personals al servidor de l’eina, mai en JavaScript visible per als estudiants. Comprova els requisits de permisos i de versió abans de concloure que una resposta buida vol dir que una funcionalitat no funciona.

El [repositori de la plantilla](https://github.com/Lamb-Project/lamb-tool-template) conté les seves instruccions públiques de configuració. Fixa la revisió que proves i anota amb quina versió de LAMB la fas servir. La guia de la plantilla enllaça una revisió datada en lloc de descriure una descàrrega futura no provada.

## Contribueix al projecte {#contribute-to-the-project}

LAMB es distribueix amb llicència GPL v3. Pots informar d’una incidència, millorar la documentació, provar un canvi o proposar una contribució a través del [repositori de codi font](https://github.com/Lamb-Project/lamb).

[Prepara una contribució útil →](/ca/developers/contribute/)

Si un agent d’IA t’ajuda a avaluar o desenvolupar una eina, comença per la [guia pública de lectura per a agents](/ca/agents/). La documentació pública descriu l’ús admès; l’arquitectura interna i les notes de disseny no formen part d’aquest web.
