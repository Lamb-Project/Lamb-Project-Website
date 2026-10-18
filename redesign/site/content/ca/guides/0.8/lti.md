---
title: Tria la via d’accés des del teu LMS
description: Troba la via LTI adequada per a un assistent, l’accés dels docents, una activitat de curs o una eina d’aprenentatge separada.
translationKey: v08-lti
weight: 4
aliases: [/guides/lti/]
---

**Per a docents i administradors de l’LMS.** LAMB 0.8 manté les vies d’accés LTI existents. No cal substituir un enllaç de curs només perquè existeixi una via d’activitat més nova. Fes servir la via que ha configurat la teva institució i prova-la amb els rols previstos.

## Quina via s’adapta a la teva tasca? {#which-path-fits-your-task}

| Què vols fer | Via d’accés | Què cal preparar |
|---|---|---|
| Que els estudiants facin servir un assistent publicat | Publicació LTI d’un assistent individual | Publica l’assistent i fes servir a l’LMS les dades de llançament que se’n proporcionen |
| Que els docents obrin LAMB Creator des de l’LMS | Accés al Creator de l’organització | Un administrador configura l’eina Creator de l’organització i els permisos d’accés |
| Configurar una activitat de curs i iniciar-la com a docent o com a estudiant | Eina d’activitats de LAMB | Un docent completa la configuració de l’activitat abans que hi entrin els estudiants |
| Iniciar una aplicació educativa allotjada a part | L’eina LTI pròpia de l’aplicació | Configura les dades de llançament d’aquesta aplicació i el seu accés autoritzat a LAMB |

Són punts d’entrada diferents. Una clau de consumidor, un secret compartit o un URL de llançament d’un d’ells no és intercanviable amb els d’un altre. Per als camps de Moodle, els paràmetres de privadesa i una guia pas a pas de l’eina d’activitats de LAMB en un Moodle de demostració, consulta [Connecta LAMB i Moodle](/ca/guides/0.8/moodle/). Les integracions documentades fan servir **LTI 1.1**; aquesta guia no afirma que s’admeti LTI 1.3.

## Un assistent publicat {#one-published-assistant}

1. Crea i prova l’assistent a LAMB Creator.
2. Publica’l amb el control de publicació de l’assistent.
3. Fes servir l’URL de llançament, la clau de consumidor i el secret compartit que es proporcionen per a aquell assistent quan configuris l’eina externa (External Tool) a l’LMS.
4. Obre l’activitat del curs amb un compte d’estudiant de demostració i comprova que hi ha disponible l’assistent correcte.

És possible que l’administrador de l’LMS gestioni aquests paràmetres per tu. Mantén en privat les credencials de publicació. [Revisa la llista de comprovació completa de la publicació](/ca/guides/0.8/publishing/).

## Accés dels docents al Creator {#educator-access-to-creator}

1. Demana als administradors de LAMB i de l’LMS que configurin l’accés al Creator per a la teva organització.
2. Obre des de l’LMS l’enllaç al Creator que proporciona la institució.
3. Comprova que arribes a l’organització prevista amb els permisos d’autoria adequats.
4. [Crea el teu primer assistent](/ca/guides/0.8/first-assistant/).

L’accés al Creator és una via d’autoria. Per si sol, no publica cap assistent ni crea cap activitat per als estudiants. L’inici de sessió directe a l’adreça de LAMB de la teva institució continua sent una opció d’accés separada, on estigui activada.

## Activitats de curs {#course-activities}

Una institució pot configurar l’eina d’activitats de LAMB al seu LMS. El primer llançament d’un docent configura l’activitat; els llançaments posteriors de docents i estudiants obren la vista corresponent. Un estudiant no pot completar la configuració inicial del docent.

La versió candidata 0.8 inclou mòduls d’activitat de xat, d’avaluació de fitxers i LLM access. Les opcions disponibles per a un docent depenen de la instal·lació i de la seva configuració. Fes servir les instruccions exactes que et doni l’administrador per al mòdul seleccionat.

- **Xat:** selecciona els assistents publicats previstos i revisa els paràmetres de visibilitat de les converses.
- **Avaluació de fitxers:** comprova la tasca, els requisits de lliurament, la rúbrica i la revisió del docent abans que es retorni cap qualificació.
- **LLM access:** confirma que l’organització ha configurat l’accés als models i que l’assignació i l’horari del curs corresponen a l’activitat prevista.

Abans que la facin servir els estudiants, prova tant la vista del docent com la de l’estudiant. Per a l’avaluació, comprova la qualificació resultant a l’LMS, a més del llançament. Per a l’accés als models, comprova que l’eina de l’estudiant pot fer una petició autoritzada dins de les condicions configurades.

## Eines d’aprenentatge allotjades a part {#separately-hosted-learning-tools}

Una aplicació construïda a partir de la plantilla d’eina de LAMB té el seu propi llançament i la seva pròpia configuració. Fa servir un assistent publicat i autoritzat a través de l’API de LAMB. Segueix la [guia il·lustrada de l’aplicació](/ca/guides/0.8/learning-tool/); no enganxis les dades de llançament de l’aplicació a la configuració d’una altra eina de LAMB.

**Resultat esperat:** pots identificar quina via d’accés fa servir el teu curs, qui la configura i què cal provar com a docent i com a estudiant. Si un llançament falla, informa l’equip de suport de la teva institució de la via, la versió instal·lada i el rol, sense compartir-ne els secrets.
