---
title: "Privadesa, RGPD i governança de la IA"
description: "Entén quines decisions determinen on es tracta el contingut i qui hi pot accedir."
translationKey: privacy
weight: 7
---

LAMB ofereix controls perquè les institucions gestionin l’accés a la IA, els proveïdors de models admesos i el tractament de les dades dins del seu entorn d’aprenentatge. Aquests controls donen suport a la feina de la institució en privadesa i governança de la IA, incloses les seves responsabilitats segons l’RGPD.

La institució determina com s’utilitza i s’opera el servei. Configurar LAMB és una part d’aquesta feina; el programari no ofereix cap garantia automàtica de compliment de l’RGPD. La [guia de la Comissió Europea sobre l’RGPD](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) explica la responsabilitat de les organitzacions de complir els principis de protecció de dades i de poder demostrar-ne el compliment.

## Controls i decisions institucionals {#controls-and-institutional-decisions}

| Àmbit | Què cal gestionar |
|---|---|
| Accés | Organitzacions, comptes, permisos de creació i accés a les activitats de l’LMS |
| Proveïdors de models | Serveis de model aprovats per a la generació, els embeddings i LAMB LEGATUS, amb inferència local o al núvol |
| Contingut del curs | Quins materials es poden importar o enviar a un model, i qui els pot fer servir |
| Revisió de converses | Quines funcions de revisió estan habilitades, qui hi té accés i què se’ls diu als estudiants |
| Accés dels estudiants als models | Si els docents poden donar claus LLM access, quins models, les assignacions per docent, els límits per estudiant i els horaris, i què se’ls diu als estudiants abans d’obtenir una clau |
| Connexió amb Moodle | Si el connector està habilitat, quin lloc pot fer servir i quines operacions es permeten |
| Operació | Conservació, còpies de seguretat, acords amb els proveïdors i procediments institucionals per atendre sol·licituds |

Alguns d’aquests elements són opcions del producte; altres són polítiques institucionals i responsabilitats operatives. Avalua’ls conjuntament per al desplegament seleccionat.

## On es tracta la informació {#where-information-is-processed}

Quan un assistent fa servir un proveïdor de models extern, el contingut que s’envia en aquella petició el tracta aquest proveïdor. El mateix passa amb les eines pròpies dels estudiants en una activitat LLM access: les seves peticions passen per la passarel·la de la institució, que amb la configuració que inclou LAMB registra l’hora, el model i els tokens de cada petició, vinculats a l’estudiant, i no el text ([l’última milla per a la teva IA](/ca/institutions/ai-governance/)). Això pot incloure el missatge de l’estudiant, el context de la conversa i fragments rellevants dels materials del curs. La preparació de documents o la recuperació també poden fer servir un servei extern d’embeddings. Les funcions de creació poden tenir la seva pròpia configuració de models.

Executar LAMB al teu propi servidor no converteix aquests serveis externs en locals. Un desplegament amb models locals ha de tenir en compte igualment tots els serveis que habilita.

## Qui pot llegir les converses {#who-can-read-conversations}

L’accés a les converses depèn de la integració, dels permisos i de la configuració. Alguns fluxos de treball admesos mostren les converses a revisors autoritzats. Les institucions haurien d’informar els estudiants de quin accés hi ha habilitat i no haurien de presentar les converses com a anònimes sense comprovar la configuració i el comportament reals.

Publicar, compartir i l’accés administratiu són conceptes diferents. Que un assistent no estigui publicat no és una garantia general que cap altra persona autoritzada no pugui accedir a la seva informació.

## Preguntes que cal resoldre abans que comenci un curs {#questions-to-settle-before-a-course-starts}

| Pregunta | Qui hauria de poder respondre-la? |
|---|---|
| Quins serveis tracten els prompts, els documents i els embeddings? | L’operador del sistema i el responsable del proveïdor |
| Quines persones poden veure el contingut de les converses? | L’administrador de l’LMS o de LAMB i el responsable docent |
| Quant de temps es conserven els registres i les còpies de seguretat? | El responsable institucional del servei |
| Què passa quan un estudiant o un docent marxa? | Els administradors de comptes i de cursos |
| Què haurien d’evitar escriure els estudiants? | L’equip docent i el contacte institucional de privadesa |
| Qui atén les sol·licituds d’accés, rectificació o supressió? | Els equips institucionals de servei i de privadesa |

## Una base per a decisions informades {#a-basis-for-informed-decisions}

El [Safe AI in Education Manifesto](https://manifesto.safeaieducation.org) (Manifest per a una IA segura en l’educació) orienta el projecte. No és cap certificació d’un desplegament concret. [LAMB i el Safe AI in Education Manifesto](/ca/safe-ai/) exposa la resposta de LAMB a cada principi i a les normes de la UE sobre la IA. El codi obert permet la inspecció; una operació responsable continua necessitant persones, configuracions provades i decisions institucionals.

[Planifica una prova pilot](/ca/institutions/) · [Planifica l’operació](/ca/institutions/operations/)
