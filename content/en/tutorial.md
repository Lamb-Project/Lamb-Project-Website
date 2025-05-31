---
title: "Quick LAMB Tutorial"
description: "Learn how to create and publish your first learning assistant in less than 15 minutes"
date: 2025-05-29
draft: false
weight: 100
---

# Quick **LAMB** Tutorial

> **Goal**: in less than 15 minutes you will have a learning assistant that uses your own documents and will be available within your Moodle course.

---

## 1. Registration and access

1. Go to `https://lamp.lamp-project.org`.
2. Click **Sign Up** and complete the form (name, email, password, **Secret Key** provided by coordination).

![Registration form](../../images/screenshots/frame_0005.png)

---

## 2. Get to know the main dashboard

Upon entering you will see three key sections:

* **My Assistants** – where your bots live.
* **Knowledge Bases** – your semantic bases.
* **Open Web UI** – the chat interface.

![Main dashboard](../../images/screenshots/frame_0008.png)

---

## 3. Create your first assistant

1. In **My Assistants** click **New**.
2. Give it a name (e.g. *Demo*), describe its mission and choose the model (GPT-4o, Mistral, etc.).
3. Save.

![Assistant creation](../../images/screenshots/frame_0009.png)

---

## 4. Quick assistant test

Click on the chat icon to converse and check that it responds.

![Test chat](../../images/screenshots/frame_0017.png)

---

## 5. Create a knowledge base

1. Open **Knowledge Bases** ► **New**.
2. Mark the base as *Private* and save.

![New base](../../images/screenshots/frame_0020.png)

![New base 2](../../images/screenshots/frame_0019.png)
---

## 6. Document ingestion

1. Inside your base click **Markdown Ingest** (currently the most stable method).
2. Drag PDFs, DOCX or `.md` files.
3. Keep *Chunk size* ≈ 2000 for long texts.

![Document upload](../../images/screenshots/frame_0033.png)

> **Tip**: You can also upload .ZIP files as long as they contain .pdf, .docx, .txt or .md.

![Documents in KB](../../images/screenshots/frame_0036.png)

You can query the knowledge base directly:

![Query the KB](../../images/screenshots/frame_0030.png)

---

## 7. Connect the base to your assistant

1. Go back to **My Assistants** and create an assistant.
2. In the template look for the **RAG** section and choose the newly created base.
3. Indicate how many chunks (`k = 3` is usually enough).

![Query the KB](../../images/screenshots/frame_0043.png)

4. Test your assistant in OpenWebui.

---

## 8. *Debug* mode (optional but useful)

Clone the assistant, change the model to **Bypass** and activate *Simple RAG* to see the complete *prompt* that LAMB sends to the LLM.

![Debug view](../../images/screenshots/frame_0076.png)

---

## 9. Publish your assistant as an LTI tool

Publishing your LTI assistant will allow your students to access the assistant you have created from your course in Moodle or another LMS.

From the Assistant detail view click **Publish**.

![Publish screen](../../images/screenshots/frame_0080.png)

Three pieces of data will be generated:
* **Tool URL**
* **Consumer Key**
* **Shared Secret**

![Publish screen](../../images/screenshots/frame_0081.png)

## 10. Insert the assistant in Moodle (LTI 1.1)

1. In your course ► *Add activity* ► **External Tool**.

![Publish screen](../../images/screenshots/frame_0089.png)
2. Paste the **Tool URL** in *Secure Tool URL*.
3. Copy **Consumer Key** and **Shared Secret**.
4. Adjust *Launch container* ► *New window*.
5. Save.

![Moodle configuration](../../images/screenshots/frame_0090.png)

---

## 11. Student view

Students access from Moodle; they only see this bot and their chats are stored in LAMB, complying with the privacy policy.

![Student view](../../images/screenshots/frame_0091.png) 