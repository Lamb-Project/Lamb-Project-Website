---
title: Planifikatu kudeatutako zerbitzu bat
description: LAMB ikastaro baterako hedatu aurretik erabaki beharreko jardun-erabakiak.
translationKey: operations
weight: 1
---

**Sistema- eta LMS-administratzaileentzat.** Hautatu LAMBen berrikuspen aztertu bat eta aurre-ekoizpeneko ingurune (staging) bat, hedapen-jarraibideak jarraitu aurretik. Exekutatzen ari den edukiontzi bat ez da irakaskuntza-zerbitzuaren onarpen-proba osatu bat.

## Adostu zerbitzuaren mugak {#agree-the-service-boundaries}

Irakasleek ikasleei ereduetarako sarbidea emango badiete, planifikatu LAMB 0.8 bertsioak gehigarri gisa dakarren aukerako atebidea: bere datu-basea, ikasleek beren tresnetan itsasten duten helbide publikoa, eta sistema-administratzailearen proxy-konexioa erakunde bakoitzerako. Ikusi [instalazio-oharrak](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) eta [zure AAren azken kilometroa](/eu/institutions/ai-governance/).


Identifikatu zerbitzuaren jabea, ostatatze-ingurunea, eredu-hornitzaileak, espero den irakaskuntza-karga eta sarbide-eskaerak kudeatzen dituzten pertsonak. Erabaki nork onartzen dituen eguneraketak eta nork leheneratu dezakeen zerbitzua.

Ereduetarako sarbideak kostuak sor ditzake. Kontuan hartu sorkuntza, embeddinga eta gaitutako eredu-zerbitzu osagarriak. Berretsi hautatutako hedapenean eskuragarri dauden mugak, bertsio guztiek aurrekontu-kontrol berberak dituztela pentsatu beharrean.

## Erabili hautatutako berrikuspenaren jarraibideak {#use-instructions-for-the-selected-revision}

Hasi [0.8 instalazio-gidarekin](/eu/guides/installation/), hedapen-erreferentzia finkoak eta pilotu-probaren sekuentzia ezagutzeko.

[LAMBen biltegi publikoak](https://github.com/Lamb-Project/lamb) tokiko eta ekoizpeneko hedapen-baliabideak ditu. Hautatu hedatu nahi duzun adarra edo etiketa (tag), eta erabili berrikuspen horren README fitxategia eta hedapen-jarraibideak. Ez nahastu lerro bateko dokumentazioa beste baten edukiontziekin.

LMS integrazioak instituzioak onetsitako External Tool konfigurazio bat ere behar du. Tresna-txantiloiaren gida publikoak **LTI 1.1** deskribatzen du; egiaztatu protokolo hori eta aukeratutako integrazio-bidea zure instituzioak baimentzen dituela.

## Onarpena ikasleek erabili aurretik {#acceptance-before-student-use}

- Irakasleen sarbideak funtzionatzen du aurreikusitako kontuarekin eta erakundearekin.
- Hautatutako ereduak erantzuten du, eta iturri ezagun bat berreskura daiteke.
- Ikasle batek aurreikusitako jarduera abiaraz dezake, eta ezin ditu irakaslearen kontrolak eskuratu.
- Elkarrizketen ikusgarritasuna, hornitzaileek egiten duten tratamendua eta atxikipena azaldu dira.
- Kalifikazioen itzulera, halakorik badago, LMSan egiaztatu da erakustaldiko ikasle batekin.
- Babeskopia bat ingurune isolatu batean leheneratu daiteke.
- Eguneraketek, gorabeheren jakinarazpenak eta laguntzak arduradun izendatuak dituzte.

Gorde kredentzialak, elkarrizketak dituzten erregistroak eta babeskopiak biltegi publikoetatik kanpo. Hau jardunerako orientabidea da, ez egiaztapen-zerrenda bat osatzeak araudia betetzen dela frogatzen duenaren baieztapena.

[Pribatutasunari eta datuei buruzko galderak](/eu/privacy/) · [Bertsioen mugak](/eu/availability/)
