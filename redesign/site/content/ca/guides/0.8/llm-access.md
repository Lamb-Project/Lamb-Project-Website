---
title: Dona als estudiants accés als models amb les teves regles
description: Defineix la política d’LLM access d’una organització, afegeix una activitat LLM access a un curs i dona a cada estudiant una clau personal amb límits i un horari.
translationKey: v08-llm-access
weight: 6
aliases: [/guides/llm-access/]
---

**Per a administradors d’organització i docents.** Una activitat **LLM access** dona a cada estudiant d’un curs una clau personal per als models de l’organització, per fer-la servir amb les seves pròpies eines: VS Code amb Continue o Cline, Aider, Claude Code o el seu propi codi. L’administrador de l’organització defineix les regles; el docent defineix els límits i l’horari del curs, dins d’aquestes regles. [L’última milla per a la teva IA](/ca/institutions/ai-governance/) n’explica la idea.

Les captures provenen d’una execució automatitzada sobre LAMB 0.8 el 16 d’octubre de 2026, amb una organització, un curs i uns estudiants sintètics, un model local i una eina de prova LTI en lloc de Moodle. Les claus estan emmascarades.

## Abans de començar {#before-you-start}

L’administrador del sistema ha desplegat la passarel·la que s’inclou amb LAMB 0.8 com a complement opcional i hi ha connectat la teva organització. Les pantalles d’administració anomenen la passarel·la **Proxy**. A la pestanya **LLM access**, la línia **Proxy** diu **connected, reachable** i **Models the proxy serves** n’enumera els models. Si diu «not connected», pregunta-ho a l’administrador del sistema.

Els docents necessiten un compte de LAMB a l’organització abans de poder configurar una activitat de LAMB en un curs: han d’obrir una vegada, des de l’LMS, l’enllaç de LAMB Creator de l’organització. [Tria la via d’accés des del teu LMS](/ca/guides/0.8/lti/) explica els enllaços.

## Administrador de l’organització: defineix les regles {#organization-admin-set-the-rules}

1. Obre **Admin Org → Settings → LLM access**.
2. Marca **Teachers may create LLM access activities**. Els docents només veuen el tipus LLM access quan aquesta casella està marcada, el proxy està connectat i hi ha almenys un model marcat (pas 6).
3. Tria **how tokens are limited** (com es limiten els tokens):
   - **Shared pool per activity:** cada activitat té una sola bossa de tokens per a tots els seus estudiants.
   - **Allowance per student:** la clau de cada estudiant té un límit per franja de temps, en total o totes dues coses.
   - **Both:** una bossa limita l’activitat i, a més, cada estudiant té un límit personal.

   A la 0.8 només la bossa és un límit ferm: un estudiant que substitueix la seva clau comença un total nou. Tria una política amb bossa quan en necessitis un.
4. Defineix el **Default allowance per teacher**: el màxim que un docent pot **comprometre** entre totes les seves activitats LLM access. Una bossa compta sencera quan es desa l’activitat; sense bossa, el total de cada estudiant compta quan l’estudiant obté una clau; els límits per franja sols no comprometen res. L’assignació limita el que compromet un docent, no el que gasten els estudiants. Deixa-ho buit perquè no hi hagi límit.
5. Afegeix **Exceptions for individual teachers** amb el correu electrònic que envia l’LMS per a aquell docent.
6. Marca els **Models teachers may offer**.
7. Tria la **Time slot** (franja de temps) per als límits per estudiant i la **Time zone of timetables** (zona horària dels horaris) predeterminada per a les activitats noves. Les franges segueixen el rellotge (10 minuts vol dir :00, :10, :20…) i es recarreguen pocs segons després de l’inici de cadascuna. Fes servir 10, 20, 30 o 60 minuts: amb 5 o 15, les xifres de la franja actual que mostren les pàgines són incorrectes a la 0.8, tot i que la passarel·la aplica el límit correcte. Tria la franja abans que els docents comencin; les claus ja emeses conserven la franja amb què es van emetre.
8. Desa. Les activitats noves segueixen les regles noves immediatament. Les activitats existents conserven els seus models, la durada de la franja i la zona horària, i només es comproven amb la política nova quan el seu docent les torna a desar; la pantalla indica quantes n’hi ha.

{{< capture src="/images/guides/governance-org-policy.png" alt="Paràmetres d’LLM access d’una organització: política Both, assignació predeterminada per docent de 300000 tokens, una excepció de docent de 1000000, model course-model, franja de temps de 10 minuts i una taula d’ús per docent" caption="La pestanya LLM access: estat del proxy, política, assignacions, models, franja de temps i ús per docent." >}}

**Segueix l’ús:** la taula **Use by teacher** de la part inferior mostra l’assignació de cada docent, el que ha compromès, els tokens que s’han fet servir realment i les seves activitats. Les xifres d’ús arriben entre 20 i 40 segons després de les peticions; torna a carregar la pàgina per veure les xifres més recents.

## Docent: afegeix l’activitat {#teacher-add-the-activity}

1. Al teu curs, afegeix un enllaç d’activitat de LAMB (una eina externa) i obre’l.
2. Tria **LLM access** com a tipus d’activitat i dona-li un nom que vegin els estudiants.
3. Omple els límits que demana la política de la teva organització: **Activity pool**, **Per student: tokens per time slot** i **Per student: tokens in total**. Deixa un camp buit perquè no hi hagi límit; el 0 es rebutja.
4. Tria **Save & Launch**. LAMB comprova els límits amb la política i la bossa amb la teva assignació. Si no hi encaixen, no es crea res: el motiu apareix a sobre del botó i es conserven les dades que has introduït. Sense bossa, el total de cada estudiant es comprova quan l’estudiant obté una clau, de manera que un rebuig pot arribar més tard, a la pàgina de l’estudiant.

{{< capture src="/images/guides/governance-teacher-setup.png" alt="LAMB Activity Setup amb LLM access seleccionat, bossa de 200000, 3000 per estudiant per franja, 20000 per estudiant en total i un missatge de rebuig: calen 500000 tokens i al docent li en queden 300000 de 300000" caption="Configuració amb LLM access seleccionat. La línia vermella és d’un primer intent que demanava més que l’assignació del docent." >}}

## Docent: gestiona l’activitat {#teacher-manage-the-activity}

Cada vegada que obres l’activitat arribes a la seva pàgina de gestió.

- **Open / Closed** mostra si les claus funcionen ara. **Follow timetable** és l’opció predeterminada; **Open now** i **Close now** hi passen per davant. LAMB aplica el canvi en uns 10 segons.
- **Change limits and timetable:** els models, oberta tot el temps o en dies i hores triats, les dates **From** i **Until**, la zona horària i els límits. Els estudiants conserven les seves claus; els models i els límits nous els arriben immediatament, i els canvis d’horari en uns 10 segons. Una data **Until** posterior no arriba a les claus ja obtingudes: els estudiants han de substituir la clau per tenir-la.
- **Students:** els tokens de cada clau a la franja actual i en total, i les peticions rebutjades. **Block** atura la clau actual d’un estudiant en uns 10 segons i **Unblock** la torna a activar; **Revoke** l’esborra. A la 0.8 cap de les dues opcions no deixa l’estudiant fora: un estudiant bloquejat pot substituir la clau, i un de revocat pot obtenir-ne una de nova. Per aturar l’accés, tanca l’activitat.

{{< capture src="/images/guides/governance-teacher-manage.png" alt="Pàgina de gestió del docent: oberta, controls d’horari, bossa de 200000, 3000 per estudiant cada 10 minuts, 20000 per estudiant en total, el tauler d’horari i quatre estudiants amb el seu ús" caption="La pàgina de gestió amb el tauler d’horari obert. Charlie ha arribat dues vegades al límit de la seva franja." >}}

La petició que supera un límit es completa igualment i es compta sencera; la següent es rebutja. Per això un estudiant pot mostrar una mica més que el límit.

## Estudiant: obté una clau {#student-take-a-key}

1. Obre l’activitat des del curs.
2. Llegeix **Before you take a key**: què es registra (l’hora, el model i els tokens de cada petició, vinculats a tu, perquè el docent pugui veure el teu ús), que la passarel·la no desa el text dels prompts ni de les respostes, i què rep un proveïdor extern. Marca **I have read this** i tria **Get my key**.
3. Copia la clau de seguida: només es mostra una vegada, amb la configuració per a eines compatibles amb OpenAI, per a Claude Code i per a una prova des del terminal.

{{< capture src="/images/guides/governance-student-key.png" alt="Pàgina de l’estudiant amb una clau emmascarada i la configuració per a eines compatibles amb OpenAI, Claude Code i una prova des del terminal" caption="La clau, que només es mostra una vegada, amb la configuració per enganxar. Aquí està emmascarada." >}}

En les visites següents, la pàgina mostra l’estat de la clau i l’ús de l’estudiant a la franja actual i en total. **Replace my key** atura la clau antiga immediatament i n’emet una de nova.

{{< capture src="/images/guides/governance-student-usage.png" alt="Pàgina de l’estudiant en una visita posterior: clau activa, 3115 de 3000 tokens fets servir en els últims 10 minuts, 3115 de 20000 en total, Replace my key" caption="Una visita posterior, després que l’estudiant arribés al límit de la franja." >}}

Quan s’arriba a un límit, l’eina de l’estudiant rep un error que diu quin és, en tokens: el límit de la franja (cal esperar la franja següent), l’assignació total o la bossa compartida de l’activitat (cal demanar-ho al docent). Una activitat tancada o una clau bloquejada també es rebutgen.

## Límits d’aquesta edició {#limits-of-this-edition}

- Aquestes regles s’apliquen a les activitats LLM access. Les activitats de xat i d’avaluació de fitxers fan servir el proveïdor de models de l’organització i no es compten dins de les assignacions dels docents.
- Només la bossa d’una activitat és un límit ferm: en substituir una clau comença un total nou per estudiant, i augmentar més tard el total per estudiant no es torna a comprovar amb l’assignació del docent.
- Block i Revoke no deixen un estudiant fora; tancar l’activitat, sí. Un estudiant que deixa el curs conserva la seva clau fins que es revoca o l’activitat es tanca.
- Desactivar LLM access per a l’organització impedeix configurar activitats noves i que els docents canviïn les existents. Les activitats existents s’obren igualment, i els seus estudiants encara poden obtenir i substituir claus: els docents trien **Close now** per aturar-les.
- Una data **Until** posterior no amplia les claus ja obtingudes.
- Amb franges de 5 o 15 minuts, les xifres de la franja actual que mostren les pàgines són incorrectes; la passarel·la aplica el límit correcte.
