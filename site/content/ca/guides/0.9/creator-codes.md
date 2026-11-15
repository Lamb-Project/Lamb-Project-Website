---
title: "Dona als docents el seu compte amb un codi de creador"
description: "Crea codis de creador per a la teva organització i escriu el text que llegeixen els docents. Com a docent, introdueix un codi la primera vegada que obres una activitat de LAMB des de l’LMS i mou-te entre l’activitat i LAMB Creator."
translationKey: v09-creator-codes
weight: 1
---

**Per a administradors d’organització i docents.** A LAMB 0.9, un docent que obre una activitat de LAMB des de l’LMS i no té compte a LAMB Creator el pot crear en aquell moment, amb un **codi de creador** de la seva institució. L’administrador crea els codis i els reparteix. El docent n’escriu un, una sola vegada.

Les captures són reals, de la versió candidata 0.9, amb organitzacions, persones i curs inventats. Mostren la interfície en anglès; el text fa servir els noms que veus amb LAMB en català. [Sobre les captures](#screenshots).

## Abans de començar {#before-you-start}

- La teva institució fa servir **LAMB 0.9** i el seu LMS té l’eina d’activitats de LAMB. [Connecta LAMB i Moodle](/ca/guides/0.8/moodle/) mostra la configuració amb LTI 1.1; les [notes de la versió 0.9](/ca/releases/0.9/#lti-13) tracten LTI 1.3.
- Els codis són d’una **organització** diferent de l’organització del sistema. L’organització del sistema no emet codis.
- Els administradors necessiten el rol d’administrador en aquella organització. Els docents necessiten el rol de professor al curs de l’LMS.

Un codi només serveix a una persona que l’LMS presenta com a docent, i només a la pàgina que LAMB retorna quan aquella persona obre una activitat. Un estudiant no el pot fer servir, i ningú no el pot fer servir des de fora de l’LMS. Dins d’aquests límits, qualsevol docent que tingui el codi pot entrar a la teva organització mentre el codi sigui actiu: fes servir la data de caducitat, el límit d’usos i el botó **Desactiva** per mantenir-ne el control.

## Administradors: crea un codi {#create-a-code}

1. Inicia la sessió a LAMB Creator i obre **Admin Org → Settings → LTI Creator**. Baixa fins a **Codis de creador**.
2. A **Codi nou**, escriu una **Etiqueta**, per exemple el quadrimestre o la facultat. L’etiqueta és per a tu: els docents no la veuen. Afegeix-hi una **Data de caducitat**, un **Límit d’usos**, totes dues coses o cap.

   {{< capture src="/images/guides/0.9/creator-codes-admin-new.png" alt="La secció Creator codes d’una organització que encara no té cap codi: el formulari New code amb l’etiqueta Autumn term 2026 i el límit d’usos 30 i, a sota, el text per als docents sense compte" caption="Un primer codi per al quadrimestre de tardor, per a trenta docents com a màxim. Dades de demostració." details="#screenshots" >}}

3. Prem **Crea el codi**. LAMB mostra el codi una sola vegada: tres grups de quatre caràcters. Prem **Copia**, passa’l als teus docents i després prem **Ja l’he desat**.
4. A partir d’aquell moment, la llista mostra els quatre últims caràcters del codi, l’estat, quants docents l’han fet servir i quan caduca. LAMB no conserva el codi, de manera que no el pot tornar a mostrar. Si es perd un codi, crea’n un altre.

   {{< capture src="/images/guides/0.9/creator-codes-admin-list.png" alt="La llista de codis de creador: Summer school 2027, desactivat, 0 de 10 usos; Autumn term 2026, actiu, 1 de 30 usos; un avís diu que el primer s’ha desactivat; a sota, el text de l’organització" caption="Un docent ha fet servir el codi de tardor. El d’estiu està desactivat fins que faci falta. Dades de demostració." details="#screenshots" >}}

**Desactiva** atura un codi a l’instant i **Activa** el recupera. Desactivar un codi no afecta els comptes que ja s’hi han creat. Un codi amb la data passada apareix com a **Caducat**; un que ha arribat al límit, com a **Esgotat**.

## Administradors: escriu el text que llegeixen els docents {#write-the-text}

Un docent que arriba sense compte, i potser sense codi, ha de saber a qui demanar-lo. A la mateixa pantalla, **Text per als docents sense compte** conté aquest missatge: escriu-lo a **Text d’aquesta organització** i prem **Desa el text**. **Restaura el text predeterminat** torna al text per defecte.

On apareix el text depèn de com estigui connectat l’LMS:

- **Amb LTI 1.1**, LAMB no coneix l’organització del docent fins que s’introdueix el codi, de manera que la pàgina mostra el **text predeterminat de la instal·lació**. L’escriu l’administrador del sistema en aquesta mateixa pantalla, a l’organització del sistema. El text de la teva organització apareix sota el missatge quan es rebutja un dels teus codis perquè està desactivat, caducat o esgotat.
- **Amb LTI 1.3**, quan el registre de l’LMS està habilitat per a una sola organització, la pàgina mostra des del principi el text d’aquella organització.

## Docents: introdueix el codi {#enter-the-code}

1. Al teu curs, obre l’activitat de LAMB. En lloc de l’activitat reps la pàgina **Set up this activity with LAMB** (configura aquesta activitat amb LAMB), amb el missatge de la teva institució.

   {{< capture src="/images/guides/0.9/creator-codes-teacher-page.png" alt="La pàgina Set up this activity with LAMB: l’LMS t’ha identificat com a docent a Databases 101, el missatge de la institució en un requadre blau, un camp Creator code i el botó Create my account and continue" caption="El que veu un docent sense compte quan obre l’activitat. El requadre blau és el text propi de la institució. Dades de demostració." details="#screenshots" >}}

2. Escriu el codi a **Creator code**. Les majúscules, els espais i els guionets no importen. Prem **Create my account and continue** (crea el meu compte i continua).
3. LAMB Creator s’obre a la mateixa finestra, amb la sessió ja iniciada. El teu nom és a dalt, amb la teva organització a sota. Una barra diu des de quina activitat has arribat i ofereix **Torna a l’activitat**.

   {{< capture src="/images/guides/0.9/creator-codes-in-creator.png" alt="LAMB Creator, pàgina Learning Assistants, per a Robin Vale a Tutorial University: Engineering; una barra diu You came from the activity in Databases 101, amb el botó Back to the activity" caption="Directament a LAMB Creator, amb el camí de tornada a l’activitat. Dades de demostració." details="#screenshots" >}}

4. [Crea un assistent](/ca/guides/0.8/first-assistant/) i publica’l. Una activitat necessita almenys un assistent publicat.
5. Prem **Torna a l’activitat**, tria el tipus d’activitat i els assistents, i desa. [Connecta LAMB i Moodle](/ca/guides/0.8/moodle/) recorre la pàgina de configuració.

   {{< capture src="/images/guides/0.9/creator-codes-activity.png" alt="LAMB Activity Setup del curs Databases 101: l’organització Tutorial University: Engineering, l’enllaç Add an organization with a creator code, el botó Open LAMB Creator, els tipus d’activitat i un avís que no s’han trobat assistents publicats" caption="De tornada a l’activitat. Mentre no hi hagi cap assistent publicat, la pàgina ho diu i ofereix LAMB Creator. Dades de demostració." details="#screenshots" >}}

El codi es demana una sola vegada. Des de llavors, obrir aquesta o qualsevol altra activitat de LAMB des del mateix LMS et porta a l’activitat.

El teu compte no té contrasenya: entres a LAMB obrint una activitat des de l’LMS. En aquesta versió, la pàgina que demana el codi és en anglès, sigui quin sigui l’idioma en què fas servir LAMB.

## Si el codi es rebutja {#if-refused}

La pàgina conserva el camp i diu per què. Els missatges són en anglès.

{{< capture src="/images/guides/0.9/creator-codes-teacher-refused.png" alt="La mateixa pàgina amb un missatge en vermell: That code is not valid. Check it and try again. El camp Creator code és buit i a punt per a un altre intent" caption="Un codi que no existeix. Dades de demostració." details="#screenshots" >}}

| Missatge | Què vol dir | Què cal fer |
|---|---|---|
| That code is not valid. Check it and try again. | No hi ha cap codi així en aquest LAMB. | Revisa els caràcters. Els codis no contenen mai 0, O, 1 ni I. |
| This code is no longer active. | Un administrador l’ha desactivat. | Demana un codi vigent. El text de l’organització, sota el missatge, diu a qui. |
| This code has expired. | La data ha passat. | Demana un codi vigent. |
| This code has reached its limit of uses. | L’han fet servir tants docents com permetia. | Demana un codi vigent. |
| Too many attempts. Wait a few minutes, then open the activity from your LMS again. | Cinc intents rebutjats en quinze minuts. | Espera quinze minuts i torna a obrir l’activitat. |
| You already have an account in this organization. Go back and choose it. | El codi és d’una organització de la qual ja formes part. | Torna enrere i tria aquella organització. |
| This code belongs to an organization that your LMS is not connected to. | Amb LTI 1.3, el codi ha de ser d’una organització habilitada per al teu LMS. | Pregunta al teu administrador. |
| Your LAMB account in this organization is disabled. | Un administrador ha desactivat el teu compte. | Pregunta al teu administrador. |
| Session expired. | La pàgina ha estat oberta més de quinze minuts. | Torna a obrir l’activitat des de l’LMS. |

## Més d’una organització {#several-organizations}

Un docent pot tenir compte en diverses organitzacions del mateix LAMB, per exemple dues facultats, cadascuna amb el seu codi.

1. A la pàgina de configuració de l’activitat, prem **Afegeix una organització amb un codi de creador**.

   {{< capture src="/images/guides/0.9/creator-codes-add-organization.png" alt="La pàgina Add an organization: ja treballes a LAMB; amb un codi de creador d’una altra organització hi aconsegueixes també un compte; un camp Creator code, el botó Add this organization i l’enllaç Back to your organizations" caption="Afegir una segona organització amb el seu propi codi. Dades de demostració." details="#screenshots" >}}

2. Introdueix el codi de l’altra organització i prem **Add this organization** (afegeix aquesta organització).
3. La pàgina de configuració mostra ara les teves organitzacions. Tria aquella a la qual pertany aquesta activitat: els seus assistents són els que hi pots oferir. **Després no es pot canviar.**

   {{< capture src="/images/guides/0.9/creator-codes-two-organizations.png" alt="LAMB Activity Setup amb Choose Organization: Tutorial University: Engineering i Tutorial University: Education, la segona seleccionada, i l’advertiment This cannot be changed later" caption="Una activitat pertany a una sola organització. Dades de demostració." details="#screenshots" >}}

A LAMB Creator, l’organització que apareix sota el teu nom es converteix en un menú. **Canvia d’organització** et porta a una altra de les teves organitzacions sense tornar a l’LMS.

{{< capture src="/images/guides/0.9/creator-codes-change-organization.png" alt="LAMB Creator amb el menú d’organització obert sota el nom Robin Vale: Change organization, Tutorial University: Education marcada com a actual i Tutorial University: Engineering" caption="Canvi d’organització dins de LAMB Creator. Dades de demostració." details="#screenshots" >}}

## Entre l’activitat i LAMB Creator {#activity-and-creator}

- LAMB es queda a la finestra que ha obert l’LMS. **Obre LAMB Creator**, a les pàgines de l’activitat, et porta a LAMB Creator; **Torna a l’activitat** et fa tornar.
- Això funciona fins a **quatre hores** després d’obrir l’activitat des de l’LMS. Passat aquest temps, o quan una pàgina respongui "Session expired", torna a obrir l’activitat des de l’LMS. Una pàgina de configuració que faci més de dues hores que és oberta també caduca.
- Cada pestanya del navegador recorda la seva pròpia activitat. Obrir una altra activitat en una altra pestanya no canvia on torna la primera.
- Dues pestanyes no mantenen dues organitzacions: quan canvies d’organització en una pestanya, LAMB Creator canvia també a l’altra.

## El que un codi no fa {#limits}

- No converteix ningú en administrador. Un administrador del sistema pot promoure un compte després.
- No dona cap contrasenya. Els docents que entren a LAMB amb un correu i una contrasenya ho continuen fent així: un llançament des de l’LMS no els obre la sessió a LAMB Creator.
- No és la clau de registre de l’organització, que pertany al formulari de registre de la pàgina d’inici de sessió de LAMB. Cadascuna es rebutja al lloc de l’altra.
- És independent de l’eina LTI Creator de l’organització, descrita a "Accés dels docents al Creator" de [Tria la via d’accés des del teu LMS](/ca/guides/0.8/lti/). Aquella eina dona un compte a qui l’obre des de l’LMS; un codi de creador serveix als docents que arriben a través d’una activitat.

**Resultat esperat:** com a administrador, tens un codi actiu, saps quants docents l’han fet servir, i els docents sense codi llegeixen a qui l’han de demanar. Com a docent, tens un compte de LAMB Creator a la teva organització, has creat i publicat un assistent i la teva activitat està configurada, sense demanar a ningú que et creï el compte.

## Sobre les captures {#screenshots}

Les imatges són captures reals de LAMB 0.9 (etiqueta de versió `v0.9-dev.1`), fetes el 15 de novembre de 2026 en un desplegament de proves amb la versió candidata. Les organitzacions, les persones, el curs i les adreces són inventats, i els llançaments des de l’LMS els va signar un script de proves tal com els signa un LMS. Cap imatge no mostra un codi de creador: el plafó que mostra una vegada un codi nou no es va fotografiar.
