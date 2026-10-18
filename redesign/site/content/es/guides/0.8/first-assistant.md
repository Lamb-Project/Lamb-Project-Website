---
title: Crea tu primer asistente de aprendizaje
description: Define un propósito docente concreto, guarda un asistente y prueba una primera conversación.
translationKey: v08-first-assistant
weight: 1
aliases: [/guides/first-assistant/, /tutorial/]
---

**Necesitas:** una cuenta de creador en la instalación de LAMB de tu institución y un modelo disponible. Las capturas muestran la interfaz de LAMB 0.8 en inglés, capturada el 17 de octubre de 2026 con contenido sintético. Tu organización puede ofrecer otros modelos o controles.

## 1. Abre el formulario de creación {#1-open-the-creation-form}

Abre **Asistentes de Aprendizaje** y después **Crear Asistente**. Ponle al asistente un nombre breve y reconocible, y una descripción de la tarea docente. Sigue las reglas de nombres que muestre tu instalación.

En **Prompt del Sistema**, describe el papel del asistente, la tarea con la que debe ayudar y qué debe hacer cuando le falte información. Por ejemplo:

> Ayuda a los estudiantes a entender la guía de la asignatura. Remítelos al material pertinente y hazles una pregunta que les ayude a explicarlo por sí mismos. Si el material no responde a la pregunta, dilo.

{{< capture src="/images/guides/assistant-create.png" alt="Formulario Crear Nuevo Asistente con nombre, descripción, prompt del sistema y selección de modelo" caption="Formulario de creación de LAMB 0.8, 17 de octubre de 2026. El texto que se muestra es contenido de demostración." >}}

## 2. Elige un modelo y un enfoque para las fuentes {#2-choose-a-model-and-a-source-approach}

Elige entre las opciones de **Modelo de Lenguaje (LLM)** que ofrece tu organización. El nombre de un modelo en una captura es un ejemplo, no un requisito.

Para una primera configuración sin documentos, selecciona **No Rag** y usa una plantilla de pregunta adecuada a ese modo. Si la tarea de aprendizaje necesita materiales del curso, sigue la [guía de bases de conocimiento](/es/guides/0.8/knowledge/) y conecta una fuente antes de juzgar lo que el asistente sabe del curso.

La **Plantilla de Prompt** controla la pregunta y el contexto de las fuentes que se envían al modelo. En el camino documentado con base de conocimiento, necesita tanto `{context}` como `{user_input}`. Son campos de configuración visibles para el usuario, no un proceso de entrenamiento.

En la 0.8, el procesador RAG se elige al crear el asistente y queda bloqueado en las ediciones posteriores. Crea otro asistente si quieres pasar de No Rag a un modo con base de conocimiento.

## 3. Guarda y comprueba {#3-save-and-verify}

Desplázate hasta **Guardar**. Después de guardar, abre **Propiedades** y comprueba el nombre, el modelo, las instrucciones y la selección de fuentes que han quedado guardados. Un formulario rellenado no significa, por sí solo, que la configuración se haya guardado.

{{< capture src="/images/guides/assistant-properties.png" alt="Vista Propiedades de un asistente guardado con su configuración" caption="Propiedades de un asistente guardado en LAMB 0.8, 17 de octubre de 2026. Los nombres y los identificadores son ejemplos sintéticos." >}}

## 4. Prueba el asistente {#4-try-the-assistant}

Abre **Chat con [nombre del asistente]**. Haz una pregunta típica de un estudiante y luego otra que quede fuera del ámbito previsto del asistente. Lee las dos respuestas. Este chat prueba el asistente de aprendizaje; la conversación con LAMB LEGATUS, que es aparte, tiene otra finalidad.

{{< capture src="/images/guides/assistant-chat.png" alt="Pestaña de chat del asistente de aprendizaje en la interfaz Creator" caption="Una respuesta completa en el chat de Creator de LAMB 0.8, 17 de octubre de 2026. El asistente todavía no tiene documentos del curso conectados." >}}

**Resultado esperado:** el asistente guardado está disponible para ti y genera una respuesta a través del modelo configurado. Si falla una petición al modelo, revisa el error y contacta con tu administrador; no des por hecho que crear el asistente también habilita el acceso al proveedor.

**Siguiente:** [añade materiales del curso](/es/guides/0.8/knowledge/) y después [registra pruebas repetibles](/es/guides/0.8/testing/). La publicación para los estudiantes es un paso aparte.
