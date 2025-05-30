---
title: "Tutorial rápido de LAMB"
description: "Aprende a crear y publicar tu primer asistente de aprendizaje en menos de 15 minutos"
date: 2025-05-29
draft: false
weight: 100
---

# Tutorial rápido de **LAMB**

> **Objetivo**: en menos de 15 minutos tendrás un asistente de aprendizaje que utiliza tus propios documentos y estará disponible dentro de tu curso de Moodle.

---

## 1. Registro y acceso

1. Ve a `https://lamp.lamp-project.org`.
2. Pulsa **Sign Up** y completa el formulario (nombre, correo, contraseña, **Secret Key** que te facilita la coordinación).

![Formulario de registro](../images/screenshots/frame_0005.png)

---

## 2. Conoce el panel principal

Al entrar verás tres secciones clave:

* **My Assistants** – donde vives tus bots.
* **Knowledge Bases** – tus bases semánticas.
* **Open Web UI** – la interfaz de chat.

![Panel principal](../images/screenshots/frame_0008.png)

---

## 3. Crea tu primer asistente

1. En **My Assistants** pulsa **New**.
2. Pon un nombre (p. ej. *Demo*), describe su misión y elige el modelo (GPT-4o, Mistral, etc.).
3. Guarda.

![Creación de asistente](../images/screenshots/frame_0009.png)

---

## 4. Prueba rápida del asistente

Haz clic en el icono de chat para conversar y comprobar que responde.

![Chat de prueba](../images/screenshots/frame_0017.png)

---

## 5. Crea una base de conocimiento

1. Abre **Knowledge Bases** ► **New**.
2. Marca la base como *Private* y guarda.

![Nueva base](../images/screenshots/frame_0020.png)

![Nueva base 2](../images/screenshots/frame_0019.png)
---

## 6. Ingesta de documentos

1. Dentro de tu base pulsa **Markdown Ingest** (por ahora el método más estable).
2. Arrastra PDFs, DOCX o archivos `.md`.
3. Mantén *Chunk size* ≈ 2000 para textos largos.

![Subida de documentos](../images/screenshots/frame_0033.png)

> **Tip**: También puedes subir ficheros .ZIP siempre que contengan .pdf, .docx, .txt o .md.

![Documentos en la KB](../images/screenshots/frame_0036.png)

Puedes consultar la base de conocimiento directamente:

![Consulta la KB](../images/screenshots/frame_0030.png)


---

## 7. Conecta la base a tu asistente

1. Vuelve a **My Assistants** y crea un asistente.
2. En la plantilla busca la sección **RAG** y elige la base recién creada.
3. Indica cuántos fragmentos (`k = 3` suele bastar).

![Consulta la KB](../images/screenshots/frame_0043.png)

4. Prueba tu asistente en OpenWebui. 

---

## 8. Modo *Debug* (opcional pero útil)

Clona el asistente, cambia el modelo a **Bypass** y activa *Simple RAG* para ver el *prompt* completo que LAMB envía al LLM.

![Vista debug](../images/screenshots/frame_0076.png)

---

## 9. Publica tu asistente como herramienta LTI

Publicar tu asistente LTI te permitirá que tus alumnos accedan al asistente que has creado desde tu curso en Moodle u otro LMS.

Desde la vista de detalle de Asistente pulsa **Publish**.

![Pantalla Publish](../images/screenshots/frame_0080.png)

Se generarán tres datos:
* **Tool URL**
* **Consumer Key**
* **Shared Secret**

![Pantalla Publish](../images/screenshots/frame_0081.png)



## 10. Inserta el asistente en Moodle (LTI 1.1)

1. En tu curso ► *Añadir actividad* ► **External Tool**.

![Pantalla Publish](../images/screenshots/frame_0089.png)
2. Pega la **Tool URL** en *Secure Tool URL*.
3. Copia **Consumer Key** y **Shared Secret**.
4. Ajusta *Launch container* ► *New window*.
5. Guarda.

![Configuración en Moodle](../images/screenshots/frame_0090.png)

---

## 11. Vista del estudiante

Los alumnos acceden desde Moodle; ven solo ese bot y sus chats quedan almacenados en LAMB, cumpliendo la política de privacidad.

![Vista de estudiante](../images/screenshots/frame_0091.png)

