---
title: "Prepara una instal·lació de LAMB 0.8"
description: "Selecciona una revisió, segueix les instruccions de desplegament i comprova el servei abans d’una prova pilot docent."
translationKey: v08-installation
weight: 8
aliases: [/guides/installation/]
---

**Per a administradors de sistemes.** Comença en un entorn de proves aïllat. Aquesta edició documenta la versió candidata 0.8; no anuncia una versió estable ni substitueix el procés de desplegament de la teva institució.

## 1. Selecciona la versió que faràs servir {#1-select-the-version-you-will-run}

Fes servir la [línia de codi font de LAMB 0.8](https://github.com/Lamb-Project/lamb/tree/lamb-0.8). Anota la revisió exacta que desplegues i fes servir la seva documentació. No combinis instruccions d’una altra branca amb els contenidors seleccionats.

Les referències següents apunten a la versió candidata revisada per a aquesta edició, `ee28560e`:

- [Instruccions d’instal·lació amb Docker](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployLocal.md).
- [Referència de desplegament en producció](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/deployNext.md).
- [README del repositori](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/README.md).

Alguns documents de desplegament conserven el nom **LAMB NEXT**. Fes servir els fitxers i la configuració de la revisió seleccionada en lloc de tractar aquest nom com una versió diferent. La branca per defecte de la guia general d’instal·lació no substitueix la selecció explícita de la versió candidata 0.8.

## 2. Prepara l’entorn {#2-prepare-the-environment}

Prepara Git, Docker i Docker Compose v2 per a la via documentada amb contenidors. Tria el directori d’instal·lació i els ports, els proveïdors de generació i d’embeddings, les adreces dels serveis i la configuració inicial d’administració. Guarda les credencials fora dels repositoris públics i de les captures de pantalla.

Una instal·lació local amb Docker i un servei en producció tenen requisits diferents. Un desplegament obert als estudiants necessita una adreça institucional, HTTPS, una política d’accés, còpies de seguretat i un operador amb nom i cognoms. [Planifica aquestes responsabilitats](/ca/institutions/operations/) abans de convidar un curs.

## 3. Segueix la guia de desplegament seleccionada {#3-follow-the-selected-deployment-guide}

Fes servir la plantilla d’entorn i les instruccions de desplegament d’aquesta revisió. Configura explícitament els serveis de model i d’embeddings previstos. Que la pàgina web funcioni no demostra que l’accés als models, la recuperació o la connexió amb l’LMS estiguin a punt.

En una instal·lació existent, fes una còpia de seguretat de les dades persistents i assaja l’actualització en una còpia a part. Comprova que pots restaurar-la abans de canviar el servei que fan servir docents o estudiants.

## 4. Comprova un flux de treball docent petit {#4-verify-a-small-teaching-workflow}

1. Inicia la sessió amb el compte de creador i l’organització previstos.
2. Crea un assistent i obtén una resposta del model configurat.
3. Afegeix un document de curs sintètic i comprova que es recupera un fragment conegut.
4. Publica l’assistent i prova la [via d’accés LTI](/ca/guides/0.8/lti/) que hagis triat amb comptes de docent i d’estudiant de demostració.
5. Comprova els controls de l’activitat corresponents, la política de converses i qualsevol retorn de qualificacions.
6. Confirma qui s’encarregarà de les actualitzacions, les sol·licituds d’accés i les incidències.

**Resultat esperat:** una prova pilot documentada i repetible sobre una revisió coneguda, amb el flux de treball docent comprovat i un operador assignat.

## Vols parlar de la configuració? {#want-to-discuss-the-setup}

L’equip de LAMB ofereix [formació](/ca/contact/#training) i [consultoria](/ca/contact/#consultancy); la consultoria pot començar amb una demostració. Escriu a contact-lamb-project@proton.me i explica quin entorn i quin flux de treball docent estàs considerant.
