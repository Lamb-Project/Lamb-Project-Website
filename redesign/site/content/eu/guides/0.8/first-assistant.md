---
title: Sortu zure lehen ikaskuntza-laguntzailea
description: Zehaztu irakaskuntza-helburu argi bat, gorde laguntzaile bat eta probatu lehen elkarrizketa bat.
translationKey: v08-first-assistant
weight: 1
aliases: [/guides/first-assistant/, /tutorial/]
---

**Behar duzuna:** sortzaile-kontu bat zure instituzioaren LAMB instalazioan eta eredu erabilgarri bat. Pantaila-argazkiek LAMB 0.8 bertsioaren ingelesezko interfazea erakusten dute, 2026ko urriaren 17an ateratakoa, eduki sintetikoarekin. Zure erakundeak beste eredu edo kontrol batzuk eskain ditzake.

## 1. Ireki sortzeko formularioa {#1-open-the-creation-form}

Ireki **Ikaskuntza Laguntzaileak** eta, ondoren, **Sortu Laguntzailea**. Eman laguntzaileari izen labur eta erraz ezagutzeko bat, eta irakaskuntza-zereginaren deskribapen bat. Erabili zure instalazioak erakusten dituen izen-arauak.

**Sistemaren Prompt-a** eremuan, deskribatu laguntzailearen rola, zein zereginetan lagundu behar duen eta zer egin behar duen informaziorik ez duenean. Adibidez:

> Lagundu ikasleei ikastaroaren eskuliburua ulertzen. Bideratu itzazu material egokira eta egin galdera bat, materiala beren kabuz azaltzen lagunduko diena. Materialak galderari erantzuten ez badio, esan hori.

{{< capture src="/images/guides/assistant-create.png" alt="Laguntzaile berria sortzeko formularioa: izena, deskribapena, sistemaren prompta eta eredu-hautaketa" caption="LAMB 0.8 bertsioaren sortze-formularioa, 2026ko urriaren 17a. Agertzen den testua erakustaldirako edukia da." >}}

## 2. Aukeratu eredu bat eta iturrien ikuspegi bat {#2-choose-a-model-and-a-source-approach}

Aukeratu zure erakundeak eskaintzen dituen **Hizkuntza Modeloa (LLM)** aukeren artean. Pantaila-argazki bateko eredu-izena adibide bat da, ez baldintza bat.

Dokumenturik gabeko lehen konfigurazio baterako, hautatu **No Rag** eta erabili modu horretarako egokia den galdera-txantiloi bat. Ikaskuntza-zereginak ikastaroko materialak behar baditu, jarraitu [ezagutza-baseen gida](/eu/guides/0.8/knowledge/) eta konektatu iturri bat, laguntzaileak ikastaroaz duen ezagutza epaitu aurretik.

**Prompt Txantiloia** eremuak eredura bidaltzen diren galdera eta iturri-testuingurua kontrolatzen ditu. Dokumentatutako ezagutza-basearen biderako, `{context}` eta `{user_input}` biak behar ditu. Erabiltzaileak ikus ditzakeen konfigurazio-eremuak dira, ez entrenamendu-prozesu bat.

0.8 bertsioan, RAG prozesatzailea laguntzailea sortzean aukeratzen da, eta blokeatuta geratzen da ondorengo aldaketetan. Sortu beste laguntzaile bat No Rag modutik ezagutza-baseko modu batera aldatu nahi baduzu.

## 3. Gorde eta egiaztatu {#3-save-and-verify}

Joan behera **Gorde** botoiraino. Gorde ondoren, ireki **Propietateak** eta egiaztatu gordetako izena, eredua, jarraibideak eta iturri-hautaketa. Formularioa betetzeak berak ez du esan nahi konfigurazioa gorde denik.

{{< capture src="/images/guides/assistant-properties.png" alt="Gordetako laguntzailearen propietateen ikuspegia, bere konfigurazioarekin" caption="Gordetako laguntzailearen propietateak LAMB 0.8 bertsioan, 2026ko urriaren 17a. Izenak eta identifikatzaileak adibide sintetikoak dira." >}}

## 4. Probatu laguntzailea {#4-try-the-assistant}

Ireki **Txata honekin [laguntzailearen izena]**. Egin ikasle baten ohiko galdera bat, eta gero laguntzailearen esparrutik kanpo dagoen beste bat. Irakurri bi erantzunak. Txat honek ikaskuntza-laguntzailea probatzen du; LAMB LEGATUSekin izaten den elkarrizketa bereiziak beste helburu bat du.

{{< capture src="/images/guides/assistant-chat.png" alt="Ikaskuntza-laguntzailearen txat-fitxa Creator interfazean" caption="Erantzun osatu bat LAMB 0.8 bertsioaren Creator interfazeko txatean, 2026ko urriaren 17a. Laguntzaileak oraindik ez du ikastaroko dokumenturik konektatuta." >}}

**Espero den emaitza:** gordetako laguntzailea zuretzat erabilgarri dago eta erantzun bat sortzen du konfiguratutako ereduaren bidez. Eredu-eskaera batek huts egiten badu, aztertu errorea eta jarri harremanetan zure administratzailearekin; ez eman ontzat laguntzailea sortzeak hornitzailearekiko sarbidea ere prestatzen duenik.

**Hurrena:** [gehitu ikastaroko materialak](/eu/guides/0.8/knowledge/), eta gero [erregistratu proba errepikagarriak](/eu/guides/0.8/testing/). Ikasleentzako argitalpena aparteko urratsa da.
