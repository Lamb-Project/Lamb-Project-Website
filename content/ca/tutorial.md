---
title: "Tutorial ràpid de LAMB"
description: "Aprèn a crear i publicar el teu primer assistent d'aprenentatge en menys de 15 minuts"
date: 2025-05-29
draft: false
weight: 100
---

# Tutorial ràpid de **LAMB**

> **Objectiu**: en menys de 15 minuts tindràs un assistent d'aprenentatge que utilitza els teus propis documents i estarà disponible dins del teu curs de Moodle.

---

## 1. Registre i accés

1. Ves a `https://lamp.lamp-project.org`.
2. Prem **Sign Up** i completa el formulari (nom, correu, contrasenya, **Secret Key** que et facilita la coordinació).

![Formulari de registre](../../images/screenshots/frame_0005.png)

---

## 2. Coneix el panell principal

En entrar veuràs tres seccions clau:

* **My Assistants** – on vius els teus bots.
* **Knowledge Bases** – les teves bases semàntiques.
* **Open Web UI** – la interfície de xat.

![Panell principal](../../images/screenshots/frame_0008.png)

---

## 3. Crea el teu primer assistent

1. A **My Assistants** prem **New**.
2. Posa un nom (p. ex. *Demo*), descriu la seva missió i tria el model (GPT-4o, Mistral, etc.).
3. Desa.

![Creació d'assistent](../../images/screenshots/frame_0009.png)

---

## 4. Prova ràpida de l'assistent

Fes clic a la icona de xat per conversar i comprovar que respon.

![Xat de prova](../../images/screenshots/frame_0017.png)

---

## 5. Crea una base de coneixement

1. Obre **Knowledge Bases** ► **New**.
2. Marca la base com a *Private* i desa.

![Nova base](../../images/screenshots/frame_0020.png)

![Nova base 2](../../images/screenshots/frame_0019.png)
---

## 6. Ingestió de documents

1. Dins de la teva base prem **Markdown Ingest** (per ara el mètode més estable).
2. Arrossega PDFs, DOCX o fitxers `.md`.
3. Mantén *Chunk size* ≈ 2000 per a textos llargs.

![Pujada de documents](../../images/screenshots/frame_0033.png)

> **Consell**: També pots pujar fitxers .ZIP sempre que continguin .pdf, .docx, .txt o .md.

![Documents a la KB](../../images/screenshots/frame_0036.png)

Pots consultar la base de coneixement directament:

![Consulta la KB](../../images/screenshots/frame_0030.png)

---

## 7. Connecta la base al teu assistent

1. Torna a **My Assistants** i crea un assistent.
2. A la plantilla busca la secció **RAG** i tria la base acabada de crear.
3. Indica quants fragments (`k = 3` sol bastar).

![Consulta la KB](../../images/screenshots/frame_0043.png)

4. Prova el teu assistent a OpenWebui.

---

## 8. Mode *Debug* (opcional però útil)

Clona l'assistent, canvia el model a **Bypass** i activa *Simple RAG* per veure el *prompt* complet que LAMB envia al LLM.

![Vista debug](../../images/screenshots/frame_0076.png)

---

## 9. Publica el teu assistent com a eina LTI

Publicar el teu assistent LTI et permetrà que els teus alumnes accedeixin a l'assistent que has creat des del teu curs a Moodle o un altre LMS.

Des de la vista de detall d'Assistent prem **Publish**.

![Pantalla Publish](../../images/screenshots/frame_0080.png)

Es generaran tres dades:
* **Tool URL**
* **Consumer Key**
* **Shared Secret**

![Pantalla Publish](../../images/screenshots/frame_0081.png)

## 10. Insereix l'assistent a Moodle (LTI 1.1)

1. Al teu curs ► *Afegir activitat* ► **External Tool**.

![Pantalla Publish](../../images/screenshots/frame_0089.png)
2. Enganxa la **Tool URL** a *Secure Tool URL*.
3. Copia **Consumer Key** i **Shared Secret**.
4. Ajusta *Launch container* ► *New window*.
5. Desa.

![Configuració a Moodle](../../images/screenshots/frame_0090.png)

---

## 11. Vista de l'estudiant

Els alumnes accedeixen des de Moodle; veuen només aquest bot i els seus xats queden emmagatzemats a LAMB, complint la política de privacitat.

![Vista d'estudiant](../../images/screenshots/frame_0091.png) 