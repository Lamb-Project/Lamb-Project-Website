---
title: "Zergatik behar duzu kontrola zure hezkuntzarako IA laguntzaileen gainean"
description: "LAMBek zure IA tresnen, zure datuen eta zure erabiltzaileen datuen gaineko kontrola mantentzeko aukera ematen dizu"
date: 2025-11-04
draft: false
weight: 1
type: "docs"
---

# Zer behar duzu IA laguntzaile / agente bat sortzeko

{{< youtube btSKVMMFhqo >}}

Hezkuntzarako edo beste erabileretarako adimen artifizialeko laguntzaile bat sortzea erabakitzen duzunean, hiru oinarrizko elementu behar dituzu: hizkuntza-modelo bat (LLM), jarraibide multzo bat (prompt-ak) eta ezagutza-base espezifiko bat, haluzinazioak saihesteko eta informazio zehatza tonu egokian emateko.

![laguntzaile baten oinarrizko elementuak](image1.png)

## Merkataritza-soluzioen arazoa

Egia da OpenAI edo Google bezalako zerbitzuak erabiltzea erosoa dela: ez duzu ezer instalatzen eta berehala funtzionatzen du.

Baina begira dezagun hurbilagotik zer gertatzen den benetan:

![laguntzailea openai-ko GPT gisa](image2.png)

### Kontatzen ez dizutena

- **Hornitzaileak bere jarraibide propioak ditu**, zurekin partekatzen ez dituenak, eta zure prompt-ak sistemaren zati txiki bat baino ez dira

- **Zure ezagutza hornitzailearekin geratzen da** — agian konfidentziala den informazioa

- **Zure erabiltzaileen datuak hirugarrenek prozesatzen dituzte** — galdera, interakzio eta erabilera-patroi guztiak

- **Ez duzu erregistro osorik** zure laguntzailea nola erabiltzen den jakiteko

Gogoratzen duzu Chrome-ren modu pribatuaren kasua? Google zigortu zuten, ustez pribatua zen baina bildu egiten ari ziren informazioa ezabatzera. Hori da saihestu nahi dugun arazo mota.

## Zeure buruari egin beharreko galderak

IAn oinarritutako laguntzaileak sortzeko eta zabaltzeko estrategia aukeratu nahi duzunean, batez ere hezkuntzan, hau galdetu behar diozu zeure buruari:
- Nola babesten duzu zure erabiltzaileen pribatutasuna?
- Nola bermatzen duzu jokabidearen koherentzia? Nola jakingo duzu hornitzaileak zerbait aldatzen badu?
- Nola babesten duzu zure informazioaren konfidentzialtasuna?
- Benetan badakizu zure laguntzailea nola erabiltzen den? Datuetarako sarbidea duzu, edo oparitu egin dituzu?
- GDPR araudia betetzen duzu?

![zure laguntzailea openai/google-ren etxean](image3.png)

## LAMB: software librea kontrola mantentzeko

[LAMB (Learning Assistant Manager and Builder)](https://lamb-project.org) UPCko eta EHUko ikertzaile diren Marc Alier eta Juanan Pereirak garatutako software libreko proiektu bat da, ikuspegia guztiz aldatzen duena.

### Nola funtzionatzen du LAMBek

LAMBekin, dena zure azpiegituran exekutatzen da:

- Jarraibideak zuk definitzen dituzunak dira soilik
- Ezagutza zuk ekartzen duzuna da
- Zure erabiltzaileen datuak zure sisteman geratzen dira
- Erabileraren erregistro osoak dituzu

![zure laguntzailea LAMBen](image4.png)

Eta hemen dago interesgarria: **zuk aukeratzen duzu LLM-a**. OpenAI, Google, Mistral edo kode irekiko modeloak erabil ditzakezu. Nahi duzunean batetik bestera alda dezakezu, edo iragazkiak ezarri datu konfidentzialak zure erakundetik ez irteteko.

Proiektua kode irekikoa da eta [lamb-project.org](https://lamb-project.org) helbidean dago eskuragarri.
