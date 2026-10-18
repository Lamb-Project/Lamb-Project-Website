---
title: Explora una eina d’aprenentatge connectada a LAMB
description: Un recorregut real per la configuració del docent, el xat de l’estudiant i el retorn de qualificacions amb la plantilla d’eina pública.
translationKey: v08-learning-tool
weight: 5
aliases: [/guides/learning-tool/, /tool-template/]
---

**Per a desenvolupadors d’aplicacions i equips d’innovació docent.** Aquest recorregut mostra la plantilla pública [lamb-tool-template](https://github.com/Lamb-Project/lamb-tool-template/tree/c8c6f2fecc4a55da8e67574ce5857270552a7db5), capturada de nou el 17 d’octubre de 2026, connectada a LAMB 0.8. Fa servir un LMS de demostració, respostes reals d’un assistent i participants sintètics. No són captures d’un curs de Moodle en producció.

## Abans de començar {#before-you-begin}

Necessites una instal·lació de LAMB compatible, permís per crear una clau d’API personal de creador, un assistent publicat i disponible per a aquest compte, i una instal·lació local de l’eina feta seguint el README de la plantilla. La plantilla que es mostra fa servir LTI 1.1 i el retorn de qualificacions Basic Outcomes.

Demana a l’administrador que activi l’accés a l’API de creador on calgui. Guarda la clau d’API al servidor de l’eina i fes servir una clau diferent per a cada desplegament. Els estudiants no necessiten aquesta clau. Fixa la revisió de la plantilla i prova-la amb el teu desplegament de LAMB.

## 1. Configura l’eina {#1-configure-the-tool}

Executa la plantilla seguint el README públic de la revisió comprovada. Obre’n la pàgina d’administració i introdueix l’adreça de LAMB, la clau de creador i les credencials LMS de l’eina. La plantilla espera l’adreça arrel de LAMB i hi afegeix ella mateixa els camins de l’API; segueix el seu contracte de configuració en lloc de copiar un URL d’un altre client de l’API.

{{< capture src="/images/guides/tool-admin.png" alt="Formulari d’administració de la plantilla d’eina amb l’adreça del servei i camps de credencials només d’escriptura" caption="Administració de la plantilla connectada a la instància local de LAMB 0.8, 17 d’octubre de 2026. Els camps secrets estan buits." >}}

## 2. Configura una activitat com a docent {#2-set-up-an-activity-as-an-instructor}

Registra l’eina local a l’eina de proves [LAMB LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) i, després, inicia-la com a docent des d’un curs de demostració. Tria l’assistent publicat disponible. Per a l’exercici de retorn de qualificacions que segueix, selecciona **Enable grade passback** i després desa la configuració de l’activitat.

{{< capture src="/images/guides/tool-setup.png" alt="Pàgina de configuració del docent per seleccionar un assistent i configurar una activitat d’aprenentatge" caption="Configuració del docent després d’un llançament signat, amb l’assistent de demostració publicat a LAMB 0.8 disponible." >}}

## 3. Inicia-la com a estudiant {#3-launch-as-a-learner}

Fes servir el llançament d’estudiant de l’LMS de prova. Fes una pregunta a l’assistent i comprova’n la resposta. L’idioma de l’exemple ve de la configuració del seu assistent; la teva activitat pot fer servir un altre idioma.

{{< capture src="/images/guides/tool-chat.png" alt="Xat de l’estudiant amb una resposta real d’un assistent de LAMB a través de la plantilla d’eina" caption="Una resposta nova de l’assistent RAG de LAMB 0.8 a través de la plantilla d’eina, 17 d’octubre de 2026: CORAL-19 i dimarts a les 10:00." >}}

## 4. Revisa un resultat abans d’enviar-lo {#4-review-a-result-before-sending-it}

Torna-hi com a docent, examina l’activitat i introdueix una qualificació de prova deliberada. Envia-la amb l’acció de retorn de qualificacions de l’eina i després comprova el valor a l’LMS de prova.

{{< capture src="/images/guides/tool-grade.png" alt="Tauler del docent amb controls de revisió i de retorn de qualificacions" caption="Vista del docent de la nova activitat de demostració, 17 d’octubre de 2026. En aquesta captura, la qualificació d’exemple està introduïda però no enviada." >}}

**Limitació coneguda d’aquesta revisió:** una qualificació normalitzada desada, com ara `0.8`, es torna a carregar directament en un camp etiquetat 0–10. No reutilitzis el valor desat que es mostra com si ja estigués en l’escala 0–10. Cal corregir la conversió de la visualització i provar desar → tornar a carregar → desar abans de qualificar a l’aula. Aquest exemple no afirma que l’eina estigui a punt per a producció.

## 5. Avalua el resultat complet {#5-evaluate-the-complete-result}

Comprova la separació entre estudiant i docent, l’accés autoritzat a l’assistent, la resposta real i la qualificació que registra l’LMS. Una resposta demostra la connectivitat en aquell cas, no la qualitat educativa. Una prova superada en un LMS simulat local no equival a l’acceptació a l’LMS de la teva institució.

Per a un desplegament real, acorda amb l’equip de la teva institució l’allotjament amb HTTPS, els paràmetres LTI admesos, la gestió de les credencials, les còpies de seguretat i el suport. Fes servir les instruccions públiques d’instal·lació i d’interfície de la revisió triada. Aquesta guia se centra intencionadament en l’ús de l’eina, i no reprodueix l’arquitectura interna de LAMB.

[Punt de partida per a desenvolupadors](/ca/developers/) · [Planificació operativa](/ca/institutions/operations/)
