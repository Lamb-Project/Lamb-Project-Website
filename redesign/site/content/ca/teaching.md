---
title: Porta la IA al teu curs
description: Un camí pràctic des d’un propòsit docent fins a un assistent d’aprenentatge provat.
translationKey: teaching
weight: 1
---

LAMB ofereix als docents un entorn per crear assistents d’aprenentatge RAG, preparar la preavaluació basada en rúbriques (PRE) i analitzar i millorar les seves activitats, amb LAMB LEGATUS i una connexió opcional amb els cursos de Moodle del docent. Els estudiants accedeixen a les eines configurades des de l’LMS de la institució, com ara Moodle o Canvas mitjançant LTI. Pots preparar un assistent en una interfície web sense escriure codi d’aplicació.

## Assistents RAG a partir dels materials del curs {#rag-assistants-from-course-materials}

La generació augmentada per recuperació (RAG) proporciona a un assistent fragments rellevants de les fonts seleccionades quan respon. Fes-la servir per construir un assistent a partir de les lectures del curs, de documents de referència o dels materials docents.

Tu en defineixes el rol i les instruccions, tries un dels models disponibles i connectes les fonts. La institució gestiona els models permesos i l’accés. Prova tant la recuperació com la resposta generada: recuperar un fragment rellevant no garanteix que la resposta el faci servir correctament.

{{< capture src="/images/guides/kb-query.png" alt="Detalls de la Base de Coneixement amb una consulta sobre el codi de referència del curs i l’horari d’atenció, i el fragment recuperat dels apunts del curs" caption="Comprovació de la recuperació: la consulta retorna el fragment dels apunts del curs. LAMB 0.8, dades de demostració." >}}

[Connecta i comprova els teus materials →](/ca/guides/knowledge/)

[Recerca: millorar la recuperació de la terminologia educativa →](/ca/research/#improving-retrieval-for-educational-terminology)

## Preavaluació basada en rúbriques (PRE) {#rubric-based-pre-assessment-pre}

Crea un assistent que apliqui una rúbrica a la feina dels estudiants i prepari un retorn o una proposta d’avaluació per revisar. PRE dona suport al procés d’avaluació del docent: el docent valora la proposta i decideix què comunica o registra.

LAMB inclou l’elaboració de rúbriques i fluxos d’avaluació de fitxers. Defineix els criteris, proporciona a l’assistent d’avaluació la rúbrica que vols aplicar i prova’l amb lliuraments representatius. Revisa el retorn i les puntuacions proposades abans de fer-los servir en un curs. Si l’activitat retorna una qualificació a l’LMS, comprova tant la revisió del docent com el resultat al llibre de qualificacions.

{{< capture src="/images/guides/pre-review.png" alt="Vista del docent d’una activitat d’avaluació de fitxers: un lliurament d’un estudiant amb la Nota IA, un botó Comentari de la IA plegat, la Nota Final i un botó per enviar les notes a Moodle" caption="Una activitat d’avaluació de fitxers: la IA proposa una puntuació i un retorn amb la rúbrica del docent; el docent revisa, accepta o edita la qualificació i l’envia al llibre de qualificacions. LAMB 0.8, 16 d’octubre de 2026, dades sintètiques, amb una eina de prova LTI en lloc de Moodle." >}}

[Tria l’activitat del curs i la via LTI →](/ca/guides/0.8/lti/#course-activities)

[Recerca: una prova de concepte d’avaluació amb IA basada en rúbriques →](/ca/research/#ai-assisted-assessment-in-software-engineering)

## LAMB LEGATUS: un agent per al docent {#lamb-legatus-an-agent-for-the-teacher}

LAMB LEGATUS és un agent integrat a LAMB. Un model de llenguatge, tot sol, només escriu text. LAMB LEGATUS és l’arnès (harness) que l’envolta: eines que llegeixen i modifiquen la teva feina a LAMB i llegeixen el teu curs de Moodle, els permisos del teu compte i un pas d’aprovació que el model no es pot saltar. El nom ve del legatus romà, que actuava en nom del Senat.

Descrius el que vols en llenguatge planer, i treballa al costat de la pàgina on ets:

- **Dissenya conversant:** crea un assistent, millora’n les instruccions, prepara una base de coneixement o una rúbrica.
- **Proves integrades:** proposa casos de prova, els desa quan hi estàs d’acord, els executa i fa la seva pròpia avaluació de cada resposta perquè la comprovis.
- **El teu curs de Moodle, a l’abast:** amb la connexió amb Moodle, llista i llegeix els recursos del teu curs i importa els que triïs.
- **Escenaris d’aprenentatge:** descriu una sola vegada el teu públic, el propòsit i les restriccions, i les converses noves en parteixen.

**Et demana permís abans de canviar la teva feina.** Crear, actualitzar, publicar o eliminar un assistent, canviar una base de coneixement, una rúbrica o un escenari d’aprenentatge, i cada importació o escriptura a Moodle esperen en una targeta d’aprovació; el canvi que aproves és el canvi que fa LAMB. Llegir, i desar, executar i avaluar proves, no necessiten cap targeta. La teva organització tria el model que fa servir.

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="Tauler de LAMB LEGATUS al costat de la llista Assistents d’Aprenentatge, amb una targeta d’aprovació per actualitzar les instruccions d’un assistent" caption="Una proposta per actualitzar les instruccions d’un assistent, que espera l’aprovació del docent. Encara no ha canviat res. LAMB 0.8, dades de demostració." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="Tres casos de prova desats per LAMB LEGATUS a la pestanya Tests de l’assistent" caption="Casos de prova que LAMB LEGATUS ha proposat i desat després que el docent hi estigués d’acord, abans d’executar-los. Desar proves no necessita cap targeta d’aprovació. LAMB 0.8, dades de demostració." >}}

[Treballa amb LAMB LEGATUS →](/ca/guides/0.8/legatus/)

## El teu curs de Moodle, connectat {#your-moodle-course-connected}

LAMB es connecta amb Moodle de dues maneres, i **cap de les dues requereix cap plugin de Moodle**.

- **Activitats al teu curs.** Les activitats de LAMB s’afegeixen a un curs de Moodle com a Eina externa mitjançant l’estàndard LTI 1.1: un xat amb els teus assistents, l’avaluació de fitxers amb una rúbrica i, on la teva organització ho hagi configurat, [LLM access](/ca/institutions/ai-governance/) amb claus personals per a les eines pròpies dels estudiants. Els estudiants les obren des del curs. En l’avaluació de fitxers, el docent revisa les qualificacions i les envia al llibre de qualificacions de Moodle. També es pot afegir mitjançant LTI un sol assistent publicat o l’accés al Creator; consulta [la guia d’LTI](/ca/guides/0.8/lti/).
- **El teu curs, per a LAMB LEGATUS.** Amb el connector opcional de Moodle, connectes el teu propi compte de Moodle a la pàgina **El teu Moodle** (l’enllaç **Moodle** de la barra superior de LAMB). Aleshores LAMB LEGATUS pot llistar els teus cursos, llegir-ne els recursos i importar el material seleccionat a una base de coneixement, a través dels serveis web estàndard de Moodle i dels permisos del teu compte.

L’administrador de LAMB habilita el connector, i Moodle ha d’oferir els serveis estàndard. El connector només llegeix, tret que la teva organització permeti publicar als fòrums o desar qualificacions; en aquest cas, cada escriptura necessita la seva pròpia aprovació, i en el cas de les qualificacions, estudiant per estudiant. Els noms, les publicacions i les qualificacions dels estudiants que llegeix LAMB LEGATUS arriben al proveïdor de models configurat per l’organització; amb un proveïdor extern, surten de la teva institució. Fes servir la configuració de dades i de models aprovada per la institució.

{{< capture src="/images/guides/connector-import-approval.png" alt="Pàgina El teu Moodle, connectada, al costat d’una targeta d’aprovació de LAMB LEGATUS per crear una base de coneixement a partir d’una carpeta de Moodle, amb una llista de dos fitxers" caption="El teu Moodle, connectat, i una importació des d’una carpeta de Moodle que espera aprovació: la targeta indica l’origen, la destinació i cada fitxer. Moodle 4.5 i LAMB 0.8 de demostració, compte sintètic." >}}

[Connecta LAMB i Moodle →](/ca/guides/0.8/moodle/)

## Analitza i avalua el comportament de l’assistent {#analyse-and-evaluate-assistant-behaviour}

Fes servir casos de prova repetibles i resultats desats per examinar com respon un assistent. Les vistes d’activitat i les analítiques ofereixen les evidències d’ús i de converses disponibles, segons els permisos i la política de revisió configurada. LAMB LEGATUS et pot ajudar a interpretar aquestes evidències i a suggerir millores.

Compara les respostes reals amb el teu propòsit d’aprenentatge i amb la rúbrica. Les execucions de proves i l’activitat dels estudiants són tipus d’evidència diferents; un recompte d’ús, per si sol, no demostra cap benefici per a l’aprenentatge.

{{< capture src="/images/guides/tests-result.png" alt="Pestanya Tests de l’assistent amb un cas de prova desat i la seva execució, que mostra la pregunta i la resposta de l’assistent" caption="Un cas de prova desat i la seva execució amb un assistent RAG. El docent llegeix la resposta i en registra una avaluació. LAMB 0.8, dades de demostració." >}}

[Prova un assistent →](/ca/guides/testing/)

## Comença amb un propòsit docent {#start-with-a-teaching-purpose}

Un assistent pot ajudar els estudiants a practicar l’explicació d’un concepte, a trobar un fragment als apunts del curs o a treballar una pregunta sense donar-los la resposta de seguida. Són dissenys docents possibles: la seva qualitat depèn de les teves instruccions, de les fonts, del model i de les proves.

Per a una primera activitat, limita el propòsit. Per exemple: «Ajuda els estudiants a trobar l’apartat rellevant de la guia del curs i a explicar-lo amb les seves paraules.» Decideix què ha de fer l’assistent quan no trobi una resposta.

## Un primer projecte petit {#a-small-first-project}

1. **Obtén accés.** La teva institució et proporciona una adreça de LAMB o un enllaç d’accés al seu LMS. El lloc web públic del projecte no és un servei d’inici de sessió compartit.
2. **Crea un assistent.** Dona-li un propòsit, unes instruccions i un model aprovat per la institució.
3. **Afegeix material del curs.** Connecta una base de coneixement disponible i després comprova que es poden recuperar els fragments previstos.
4. **Prova’n el comportament.** Fes-li una pregunta normal, una pregunta que les fonts no cobreixen i una petició enganyosa. Llegeix les respostes tu mateix.
5. **Publica’l per a un curs.** Segueix la via d’integració amb l’LMS de la teva institució i comprova l’accés com a estudiant.

[Crea el teu primer assistent →](/ca/guides/first-assistant/)

## El que continua sent decisió teva {#what-remains-your-decision}

Tu tries l’objectiu d’aprenentatge, els materials que poden fer servir els estudiants i què compta com a resposta útil. Proporcionar documents no garanteix respostes ni referències correctes. Explica als estudiants el rol de l’assistent i dona’ls una manera de comunicar problemes.

Els controls i els permisos disponibles depenen de la revisió instal·lada i de la configuració de la teva institució. Revisa el retorn i els suggeriments generats per la IA d’acord amb el procés d’avaluació del teu curs.

## Si ja fas servir LAMB {#if-you-already-use-lamb}

- [Connecta i comprova els materials del curs](/ca/guides/knowledge/).
- [Construeix un conjunt repetible de casos de prova](/ca/guides/testing/).
- [Posa un assistent a disposició a través del teu LMS](/ca/guides/publishing/).
- [Comprova les versions i la disponibilitat de les funcions](/ca/availability/).

Per a l’accés al compte i els permisos del curs, contacta amb l’equip de suport de la teva institució. Per a una incidència reproduïble del producte, fes servir el [gestor d’incidències del projecte](https://github.com/Lamb-Project/lamb/issues) sense incloure-hi contingut privat del curs ni credencials.
