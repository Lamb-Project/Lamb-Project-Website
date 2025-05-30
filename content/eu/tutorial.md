---
title: "LAMB tutorial azkarra"
description: "Ikasi zure lehen ikaskuntza-laguntzailea nola sortu eta argitaratu 15 minutu baino gutxiagotan"
date: 2025-05-29
draft: false
weight: 100
---

# **LAMB** tutorial azkarra

> **Helburua**: 15 minutu baino gutxiagotan zure dokumentu propioak erabiltzen dituen ikaskuntza-laguntzaile bat izango duzu, zure Moodle ikastaroan erabilgarri.

---

## 1. Erregistroa eta sarbidea

1. Joan `https://lamp.lamp-project.org` helbidera.
2. Sakatu **Sign Up** eta bete formularioa (izena, helbide elektronikoa, pasahitza, koordinazioak emandako **Secret Key**).

![Erregistro formularioa](../images/screenshots/frame_0005.png)

---

## 2. Ezagutu panel nagusia

Sartzean hiru atal garrantzitsu ikusiko dituzu:

* **My Assistants** – zure bot-ak dauden tokia.
* **Knowledge Bases** – zure base semantikoak.
* **Open Web UI** – txat interfazea.

![Panel nagusia](../images/screenshots/frame_0008.png)

---

## 3. Sortu zure lehen laguntzailea

1. **My Assistants** atalean sakatu **New**.
2. Jarri izen bat (adib. *Demo*), deskribatu bere eginkizuna eta aukeratu modeloa (GPT-4o, Mistral, etab.).
3. Gorde.

![Laguntzailearen sorrera](../images/screenshots/frame_0009.png)

---

## 4. Laguntzailearen proba azkarra

Egin klik txat ikonoan hitz egiteko eta erantzuten duela egiaztatzeko.

![Probako txata](../images/screenshots/frame_0017.png)

---

## 5. Sortu ezagutza-base bat

1. Ireki **Knowledge Bases** ► **New**.
2. Markatu basea *Private* bezala eta gorde.

![Base berria](../images/screenshots/frame_0020.png)

![Base berria 2](../images/screenshots/frame_0019.png)
---

## 6. Dokumentuen jaso

1. Zure basearen barruan sakatu **Markdown Ingest** (oraingoz metodorik egonkorrena).
2. Arrastatu PDF, DOCX edo `.md` fitxategiak.
3. Mantendu *Chunk size* ≈ 2000 testu luzeentzat.

![Dokumentuen igoera](../images/screenshots/frame_0033.png)

> **Aholkua**: .ZIP fitxategiak ere igo ditzakezu, baldin eta .pdf, .docx, .txt edo .md dauzkaten.

![Dokumentuak KB-an](../images/screenshots/frame_0036.png)

Ezagutza-basea zuzenean kontsultatu dezakezu:

![KB kontsultatu](../images/screenshots/frame_0030.png)

---

## 7. Konektatu basea zure laguntzailearekin

1. Itzuli **My Assistants** atalera eta sortu laguntzaile bat.
2. Txantiloian bilatu **RAG** atala eta aukeratu sortu berri duzun basea.
3. Adierazi zenbat zati (`k = 3` nahikoa izan ohi da).

![KB kontsultatu](../images/screenshots/frame_0043.png)

4. Probatu zure laguntzailea OpenWebui-n.

---

## 8. *Debug* modua (aukerakoa baina erabilgarria)

Klonatu laguntzailea, aldatu modeloa **Bypass**-era eta aktibatu *Simple RAG* LAMBek LLMri bidaltzen dion *prompt* osoa ikusteko.

![Debug ikuspegia](../images/screenshots/frame_0076.png)

---

## 9. Argitaratu zure laguntzailea LTI tresna gisa

Zure LTI laguntzailea argitaratzeak zure ikasleei sortu duzun laguntzailea Moodle edo beste LMS bateko zure ikastarotik atzitzea ahalbidetuko die.

Laguntzailearen xehetasun ikuspegitik sakatu **Publish**.

![Argitaratze pantaila](../images/screenshots/frame_0080.png)

Hiru datu sortuko dira:
* **Tool URL**
* **Consumer Key**
* **Shared Secret**

![Argitaratze pantaila](../images/screenshots/frame_0081.png)

## 10. Txertatu laguntzailea Moodle-n (LTI 1.1)

1. Zure ikastaroan ► *Gehitu jarduera* ► **External Tool**.

![Argitaratze pantaila](../images/screenshots/frame_0089.png)
2. Itsatsi **Tool URL** *Secure Tool URL* atalean.
3. Kopiatu **Consumer Key** eta **Shared Secret**.
4. Doitu *Launch container* ► *New window*.
5. Gorde.

![Moodle konfigurazioa](../images/screenshots/frame_0090.png)

---

## 11. Ikaslearen ikuspegia

Ikasleek Moodle-tik sartzen dira; bot hau bakarrik ikusten dute eta haien txatak LAMBen gordeta geratzen dira, pribatutasun-politika betez.

![Ikaslearen ikuspegia](../images/screenshots/frame_0091.png) 