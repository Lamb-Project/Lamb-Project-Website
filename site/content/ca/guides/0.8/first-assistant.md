---
title: "Crea el teu primer assistent d’aprenentatge"
description: "Defineix un propòsit docent concret, desa un assistent i prova una primera conversa."
translationKey: v08-first-assistant
weight: 1
aliases: [/guides/first-assistant/, /tutorial/]
---

**Necessites:** un compte de creador a la instal·lació de LAMB de la teva institució i un model disponible. Les captures mostren la interfície de LAMB 0.8 en anglès, capturada el 17 d’octubre de 2026 amb contingut sintètic. La teva organització pot oferir altres models o controls.

## 1. Obre el formulari de creació {#1-open-the-creation-form}

Obre **Assistents d’Aprenentatge** i després **Crear Assistent**. Dona a l’assistent un nom curt i fàcil de reconèixer i una descripció de la tasca docent. Fes servir les regles de nom que mostra la teva instal·lació.

A **Prompt del Sistema**, descriu el paper de l’assistent, la tasca en què ha d’ajudar i què ha de fer quan no té prou informació. Per exemple:

> Ajuda els estudiants a entendre la guia de l’assignatura. Indica’ls el material rellevant i fes-los una pregunta que els ajudi a explicar-ho amb les seves paraules. Si el material no respon la pregunta, digues-ho.

{{< capture src="/images/guides/assistant-create.png" alt="Formulari de creació d’un assistent nou amb nom, descripció, prompt del sistema i selecció de model" caption="Formulari de creació de LAMB 0.8, 17 d’octubre de 2026. El text que s’hi veu és contingut de demostració." >}}

## 2. Tria un model i una manera de fer servir les fonts {#2-choose-a-model-and-a-source-approach}

Tria entre les opcions de **Model de Llenguatge (LLM)** que ofereix la teva organització. El nom d’un model en una captura és un exemple, no un requisit.

Per a una primera configuració sense documents, selecciona **No Rag** i fes servir una plantilla de pregunta adequada a aquest mode. Si la tasca d’aprenentatge necessita materials del curs, segueix la [guia de bases de coneixement](/ca/guides/0.8/knowledge/) i connecta una font abans de jutjar què sap l’assistent del curs.

La **Plantilla de Prompt** controla la pregunta i el context de les fonts que s’envien al model. En el camí documentat amb base de coneixement, ha de contenir tant `{context}` com `{user_input}`. Són camps de configuració visibles per a l’usuari, no un procés d’entrenament.

A la 0.8, el processador RAG es tria quan es crea l’assistent i queda bloquejat en les edicions posteriors. Crea un assistent nou si vols passar de No Rag a un mode amb base de coneixement.

## 3. Desa i comprova {#3-save-and-verify}

Desplaça’t fins a **Desar**. Un cop desat, obre **Propietats** i comprova el nom, el model, les instruccions i la selecció de fonts que s’han desat. Un formulari omplert no vol dir, per si sol, que la configuració s’hagi desat.

{{< capture src="/images/guides/assistant-properties.png" alt="Vista de Propietats d’un assistent desat amb la seva configuració" caption="Propietats d’un assistent desat a LAMB 0.8, 17 d’octubre de 2026. Els noms i els identificadors són exemples sintètics." >}}

## 4. Prova l’assistent {#4-try-the-assistant}

Obre **Xat amb [nom de l’assistent]**. Fes una pregunta típica d’un estudiant i després una altra que quedi fora de l’abast previst de l’assistent. Llegeix les dues respostes. Aquest xat prova l’assistent d’aprenentatge; la conversa a part amb LAMB LEGATUS té una altra finalitat.

{{< capture src="/images/guides/assistant-chat.png" alt="Pestanya de xat de l’assistent d’aprenentatge a la interfície Creator" caption="Una resposta completa al xat del Creator de LAMB 0.8, 17 d’octubre de 2026. L’assistent encara no té cap document del curs connectat." >}}

**Resultat esperat:** l’assistent desat està disponible per a tu i genera una resposta amb el model configurat. Si una petició al model falla, revisa l’error i posa’t en contacte amb l’administrador; no donis per fet que crear l’assistent també habilita l’accés al proveïdor.

**Següent pas:** [afegeix materials del curs](/ca/guides/0.8/knowledge/) i després [registra proves repetibles](/ca/guides/0.8/testing/). Publicar-lo per als estudiants és un pas a part.
