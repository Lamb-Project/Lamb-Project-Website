---
title: Añade y comprueba los materiales de tu curso
description: Sube un documento, revisa su estado de procesamiento y verifica la recuperación antes de usarlo con un asistente.
translationKey: v08-knowledge
weight: 2
aliases: [/guides/knowledge/]
---

Esta guía prepara fuentes para la **generación aumentada por recuperación (RAG)**: recuperar material relevante del curso para dar contexto a las respuestas de un asistente.

**Necesitas:** permiso para usar el material, una cuenta de creador y un servicio de ingesta compatible. Empieza con un documento pequeño, no sensible y cuyo contenido conozcas. Las ilustraciones usan una nota de curso sintética.

## 1. Crea o abre una base de conocimiento {#1-create-or-open-a-knowledge-base}

Abre **Fuentes de Conocimiento → Bases de Conocimiento**. Selecciona **Crear Base de Conocimiento**, introduce su nombre y su descripción, y confirma. Para una base existente, abre en su lugar su vista de detalle.

{{< capture src="/images/guides/kb-create.png" alt="Diálogo Crear Base de Conocimiento con los campos de nombre y descripción" caption="Diálogo de creación de una base de conocimiento en LAMB 0.8, 17 de octubre de 2026." >}}

## 2. Elige y sube el archivo {#2-choose-and-upload-the-file}

Abre **Ingest Content**. En **Select File**, usa **Choose File** y selecciona el documento en tu ordenador. Comprueba el nombre del archivo antes de subirlo. La pestaña **Files** es donde revisas el estado del procesamiento; en esta interfaz no es el formulario de subida.

Elige un **Ingestion Plugin** disponible que sea adecuado para el archivo. La interfaz documentada usa `simple_ingest` para texto plano o Markdown y `markitdown_ingest` para la conversión de PDF/Office compatibles cuando ese plugin está instalado. La extensión del archivo, por sí sola, no garantiza que sea compatible.

Mantén los parámetros iniciales salvo que tengas un motivo para cambiarlos y después haz clic en **Upload File**. Si una solicitud agota el tiempo de espera, revisa el estado guardado antes de volver a enviar el mismo archivo.

{{< capture src="/images/guides/kb-ingest.png" alt="Formulario Ingest Content con el archivo course-notes.md seleccionado y el botón Upload File" caption="LAMB 0.8 con course-notes.md seleccionado y simple_ingest elegido, 17 de octubre de 2026." >}}

## 3. Comprueba el procesamiento {#3-check-processing}

Abre **Files** y usa **Refresh Status**. Una fila marcada como **processing** todavía no está lista. Espera a que termine; revisa cualquier error en lugar de dar por buena la ingesta solo porque la subida haya funcionado.

{{< capture src="/images/guides/kb-files.png" alt="Pestaña Files con course-notes.md y el estado de procesamiento completado" caption="Ingesta completada del documento de demostración en LAMB 0.8, 17 de octubre de 2026." >}}

## 4. Haz una pregunta que solo este documento pueda responder {#4-ask-a-question-only-this-document-can-answer}

Abre **Query**. Pregunta por un dato distintivo del documento subido y haz clic en **Submit Query**. Comprueba el pasaje devuelto y la identidad de la fuente. En la demostración, la nota contiene el código de referencia **CORAL-19** y dice que las tutorías son el martes.

{{< capture src="/images/guides/kb-query.png" alt="Query Results con CORAL-19 y el martes a partir de la nota de curso subida" caption="Recuperación real en LAMB 0.8: CORAL-19 y el martes a las 10:00, a partir de la nota subida, 17 de octubre de 2026." >}}

## 5. Conecta la fuente a tu asistente {#5-connect-the-source-to-your-assistant}

Abre **Crear Asistente**, elige **Simple Rag** y selecciona la base de conocimiento prevista en **Opciones RAG**. Comprueba que la plantilla de prompt incluye `{context}` y `{user_input}` y después guarda. El ejemplo crea un asistente nuevo llamado `Course_RAG_08` y conecta `course_notes_08`.

**Elige el procesador RAG al crear el asistente.** En la 0.8, este selector está desactivado cuando editas un asistente guardado. Si tu primer asistente usa **No Rag**, crea un asistente nuevo para este flujo de trabajo con base de conocimiento. Para un asistente que ya usa Simple Rag, usa **Editar** para revisar las bases de conocimiento seleccionadas.

{{< capture src="/images/guides/assistant-kb.png" alt="Configuración del asistente con Simple Rag y selección de base de conocimiento" caption="Un asistente nuevo de LAMB 0.8 con Simple Rag y course_notes_08 seleccionados, 17 de octubre de 2026." >}}

**Resultado esperado:** una consulta recupera la fuente prevista, y el asistente guardado apunta a esa fuente. A continuación, prueba las respuestas reales del asistente. El contexto recuperado puede mejorar la fundamentación de las respuestas, pero no garantiza una respuesta ni una cita correctas.

**Si no se devuelve nada:** comprueba el estado de la ingesta, la base de conocimiento seleccionada y si la pregunta corresponde de verdad a la fuente. No sustituyas en silencio el material por información inventada.

[Siguiente: prueba el comportamiento del asistente →](/es/guides/0.8/testing/)
