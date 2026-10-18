---
title: Afegeix i comprova els materials del curs
description: Puja un document, revisa’n l’estat de processament i verifica’n la recuperació abans de fer-lo servir amb un assistent.
translationKey: v08-knowledge
weight: 2
aliases: [/guides/knowledge/]
---

Aquesta guia prepara fonts per a la **generació augmentada per recuperació (RAG)**: recuperar el material del curs rellevant per donar context a les respostes d’un assistent.

**Necessites:** permís per fer servir el material, un compte de creador i un servei d’ingestió compatible. Comença amb un document petit, no sensible i del qual coneguis el contingut. Les il·lustracions fan servir uns apunts de curs sintètics.

## 1. Crea o obre una base de coneixement {#1-create-or-open-a-knowledge-base}

Obre **Fonts de Coneixement → Bases de Coneixement**. Selecciona **Crear Base de Coneixement**, introdueix-ne el nom i la descripció i confirma. Si la base ja existeix, obre’n la vista de detall.

{{< capture src="/images/guides/kb-create.png" alt="Diàleg Crear Base de Coneixement amb els camps de nom i descripció" caption="Diàleg de creació d’una base de coneixement a LAMB 0.8, 17 d’octubre de 2026." >}}

## 2. Tria i puja el fitxer {#2-choose-and-upload-the-file}

Obre **Ingest Content**. A **Select File**, fes servir **Choose File** i selecciona el document al teu ordinador. Comprova’n el nom abans de pujar-lo. A la pestanya **Files** és on revises l’estat del processament; en aquesta interfície no és el formulari de pujada.

Tria un **Ingestion Plugin** disponible que sigui adequat per al fitxer. La interfície documentada fa servir `simple_ingest` per a text pla o Markdown i `markitdown_ingest` per a la conversió de PDF/Office compatibles quan aquest complement està instal·lat. L’extensió d’un fitxer, per si sola, no garanteix que s’admeti correctament.

Mantén els paràmetres inicials tret que tinguis un motiu per canviar-los i, després, fes clic a **Upload File**. Si una petició esgota el temps d’espera, revisa l’estat desat abans de tornar a enviar el mateix fitxer.

{{< capture src="/images/guides/kb-ingest.png" alt="Formulari Ingest Content amb el fitxer course-notes.md seleccionat i el botó Upload File" caption="LAMB 0.8 amb course-notes.md seleccionat i simple_ingest triat, 17 d’octubre de 2026." >}}

## 3. Comprova el processament {#3-check-processing}

Obre **Files** i fes servir **Refresh Status**. Una fila marcada com a **processing** encara no està a punt. Espera que acabi; revisa qualsevol error en lloc de considerar que una pujada correcta és una ingestió correcta.

{{< capture src="/images/guides/kb-files.png" alt="Pestanya Files amb course-notes.md i l’estat de processament completat" caption="Ingestió completada del document de demostració a LAMB 0.8, 17 d’octubre de 2026." >}}

## 4. Fes una pregunta que només aquest document pugui respondre {#4-ask-a-question-only-this-document-can-answer}

Obre **Query**. Pregunta per una dada distintiva del document pujat i fes clic a **Submit Query**. Comprova el fragment retornat i la identitat de la font. A la demostració, els apunts contenen el codi de referència **CORAL-19** i diuen que l’horari d’atenció és el dimarts.

{{< capture src="/images/guides/kb-query.png" alt="Resultats de la consulta que retornen CORAL-19 i dimarts a partir dels apunts del curs pujats" caption="Recuperació real a LAMB 0.8: CORAL-19 i dimarts a les 10:00 a partir dels apunts pujats, 17 d’octubre de 2026." >}}

## 5. Connecta la font al teu assistent {#5-connect-the-source-to-your-assistant}

Obre **Crear Assistent**, tria **Simple Rag** i selecciona la base de coneixement prevista a **Opcions RAG**. Comprova que la plantilla de prompt inclou `{context}` i `{user_input}` i, després, desa. L’exemple crea un assistent nou anomenat `Course_RAG_08` i hi connecta `course_notes_08`.

**Tria el processador RAG en el moment de crear l’assistent.** A la 0.8 aquest selector està desactivat quan edites un assistent desat. Si el teu primer assistent fa servir **No Rag**, crea un assistent nou per a aquest flux de treball amb base de coneixement. Per a un assistent que ja fa servir Simple Rag, fes servir **Editar** per revisar-ne les bases de coneixement seleccionades.

{{< capture src="/images/guides/assistant-kb.png" alt="Configuració d’un assistent amb Simple Rag i la selecció de la base de coneixement" caption="Un assistent nou de LAMB 0.8 amb Simple Rag i course_notes_08 seleccionats, 17 d’octubre de 2026." >}}

**Resultat esperat:** una consulta recupera la font prevista, i l’assistent desat apunta a aquesta font. A continuació, prova les respostes reals de l’assistent. El context recuperat pot millorar la fonamentació, però no garanteix una resposta ni una citació correctes.

**Si no es retorna res:** comprova l’estat de la ingestió, la base de coneixement seleccionada i si la pregunta correspon realment a la font. No substitueixis en silenci el material per informació inventada.

[Següent: prova el comportament de l’assistent →](/ca/guides/0.8/testing/)
