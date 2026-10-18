---
title: "Planifica un servei operat"
description: "Les decisions operatives que cal tancar abans de desplegar LAMB per a un curs."
translationKey: operations
weight: 1
---

**Per a administradors de sistemes i de l’LMS.** Selecciona una revisió de LAMB ja examinada i un entorn de preproducció abans de seguir les instruccions de desplegament. Un contenidor en marxa no és una prova d’acceptació completa del servei docent.

## Acorda els límits del servei {#agree-the-service-boundaries}

Si els docents donaran accés als models als estudiants, planifica la passarel·la opcional que LAMB 0.8 inclou com a complement: la seva base de dades, l’adreça pública que els estudiants enganxen a les seves eines i la connexió amb el proxy que l’administrador del sistema configura per a cada organització. Consulta les [notes d’instal·lació](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) i [l’última milla per a la teva IA](/ca/institutions/ai-governance/).


Identifica el responsable del servei, l’entorn d’allotjament, els proveïdors de models, la càrrega docent prevista i les persones que gestionen les sol·licituds d’accés. Decideix qui aprova les actualitzacions i qui pot restaurar el servei.

L’accés als models pot tenir costos. Tingues en compte la generació, els embeddings i qualsevol servei de model auxiliar habilitat. Confirma els límits disponibles al desplegament seleccionat en lloc de suposar que totes les versions tenen els mateixos controls de pressupost.

## Fes servir les instruccions de la revisió seleccionada {#use-instructions-for-the-selected-revision}

Comença per la [guia d’instal·lació de la 0.8](/ca/guides/installation/), que té les referències de desplegament fixades i la seqüència de la prova pilot.

El [repositori públic de LAMB](https://github.com/Lamb-Project/lamb) inclou recursos per al desplegament local i en producció. Selecciona la branca o l’etiqueta que vols desplegar i fes servir el README i les instruccions de desplegament d’aquesta revisió. No barregis la documentació d’una línia amb els contenidors d’una altra.

La integració amb l’LMS també requereix una configuració d’eina externa aprovada per la institució. La guia pública de la plantilla d’eina descriu **LTI 1.1**; comprova que la teva institució permet aquest protocol i la via d’integració que has triat.

## Acceptació abans que l’usin els estudiants {#acceptance-before-student-use}

- L’accés del docent funciona amb el compte i l’organització previstos.
- El model seleccionat respon i es pot recuperar una font coneguda.
- Un estudiant pot obrir l’activitat prevista i no pot obtenir els controls del docent.
- S’han explicat la visibilitat de les converses, el tractament per part dels proveïdors i la conservació de les dades.
- Qualsevol retorn de qualificacions s’ha comprovat a l’LMS amb un estudiant de demostració.
- Una còpia de seguretat es pot restaurar en un entorn aïllat.
- Les actualitzacions, la notificació d’incidències i el suport tenen responsables designats.

Guarda les credencials, els registres que contenen converses i les còpies de seguretat fora dels repositoris públics. Això és una orientació operativa, no l’afirmació que completar una llista de comprovació garanteixi el compliment normatiu.

[Preguntes sobre privadesa i dades](/ca/privacy/) · [Límits de cada versió](/ca/availability/)
