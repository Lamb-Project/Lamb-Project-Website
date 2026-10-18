---
title: Gehitu eta egiaztatu zure ikastaroko materialak
description: Igo dokumentu bat, ikuskatu haren prozesatze-egoera eta egiaztatu berreskurapena, laguntzaile batekin erabili aurretik.
translationKey: v08-knowledge
weight: 2
aliases: [/guides/knowledge/]
---

Gida honek iturriak prestatzen ditu **berreskurapenaz aberastutako sorkuntzarako (RAG)**: ikastaroko material garrantzitsua berreskuratzea, laguntzaile baten erantzunei testuingurua emateko.

**Behar duzuna:** materiala erabiltzeko baimena, sortzaile-kontu bat eta euskarria duen irenste-zerbitzu (ingestion) bat. Hasi edukia ezagutzen duzun dokumentu txiki eta ez-sentikor batekin. Irudietan ikastaroko ohar sintetiko bat erabiltzen da.

## 1. Sortu edo ireki ezagutza-base bat {#1-create-or-open-a-knowledge-base}

Ireki **Ezagutza Iturriak → Ezagutza Baseak**. Hautatu **Ezagutza Basea Sortu**, idatzi haren izena eta deskribapena, eta berretsi. Lehendik dagoen base baterako, ireki haren xehetasun-ikuspegia horren ordez.

{{< capture src="/images/guides/kb-create.png" alt="Ezagutza Basea Sortu elkarrizketa-koadroa, izen- eta deskribapen-eremuekin" caption="Ezagutza-basea sortzeko elkarrizketa-koadroa LAMB 0.8n, 2026ko urriaren 17a." >}}

## 2. Aukeratu eta igo fitxategia {#2-choose-and-upload-the-file}

Ireki **Ingest Content**. **Select File** atalean, erabili **Choose File** eta hautatu dokumentua zure ordenagailuan. Egiaztatu fitxategiaren izena igo aurretik. Interfaze honetan, **Files** fitxan ikuskatzen da prozesatze-egoera, ez igoera-formularioan.

Aukeratu fitxategiari egokitzen zaion **Ingestion Plugin** erabilgarri bat. Dokumentatutako interfazeak `simple_ingest` erabiltzen du testu arrunterako edo Markdownerako, eta `markitdown_ingest` PDF/Office bihurketa onartuetarako, plugin hori instalatuta dagoenean. Fitxategi-luzapen batek, berez, ez du bermatzen euskarria ondo dabilenik.

Mantendu hasierako parametroak aldatzeko arrazoirik ez baduzu, eta sakatu **Upload File**. Eskaera baten denbora-muga gainditzen bada, ikuskatu gordetako egoera fitxategi bera berriro bidali aurretik.

{{< capture src="/images/guides/kb-ingest.png" alt="Ingest Content formularioa, course-notes.md fitxategia hautatuta eta Upload File botoiarekin" caption="LAMB 0.8, course-notes.md hautatuta eta simple_ingest aukeratuta, 2026ko urriaren 17a." >}}

## 3. Egiaztatu prozesatzea {#3-check-processing}

Ireki **Files** eta erabili **Refresh Status**. **processing** markatutako errenkada bat ez dago prest oraindik. Itxaron amaitu arte; ikuskatu edozein errore, igoera arrakastatsu bat irenste arrakastatsutzat hartu beharrean.

{{< capture src="/images/guides/kb-files.png" alt="Files fitxa, course-notes.md prozesatze-egoera osatuarekin" caption="Erakustaldiko dokumentuaren irenste osatua LAMB 0.8n, 2026ko urriaren 17a." >}}

## 4. Egin dokumentu honek bakarrik erantzun dezakeen galdera bat {#4-ask-a-question-only-this-document-can-answer}

Ireki **Query**. Galdetu igotako dokumentuko datu bereizgarri bati buruz eta sakatu **Submit Query**. Egiaztatu itzulitako pasartea eta iturriaren identitatea. Erakustaldian, oharrak **CORAL-19** erreferentzia-kodea du eta tutoretza-orduak asteartean direla dio.

{{< capture src="/images/guides/kb-query.png" alt="Query Results atala, igotako ikastaro-oharretik CORAL-19 eta asteartea itzultzen dituena" caption="Benetako berreskurapena LAMB 0.8n: CORAL-19 eta asteartean 10:00etan, igotako oharretik, 2026ko urriaren 17a." >}}

## 5. Konektatu iturria zure laguntzailearekin {#5-connect-the-source-to-your-assistant}

Ireki **Sortu Laguntzailea**, aukeratu **Simple Rag** eta hautatu aurreikusitako ezagutza-basea **RAG Aukerak** atalean. Egiaztatu prompt-txantiloiak `{context}` eta `{user_input}` dituela, eta gorde. Adibideak `Course_RAG_08` izeneko laguntzaile berri bat sortzen du eta `course_notes_08` konektatzen du.

**Aukeratu RAG prozesatzailea sortzean.** 0.8 bertsioan, hautatzaile hau desgaituta dago gordetako laguntzaile bat editatzean. Zure lehen laguntzaileak **No Rag** erabiltzen badu, sortu laguntzaile berri bat ezagutza-baseen lan-fluxu honetarako. Dagoeneko Simple Rag erabiltzen duen laguntzaile baterako, erabili **Editatu** hautatutako ezagutza-baseak berrikusteko.

{{< capture src="/images/guides/assistant-kb.png" alt="Laguntzailearen konfigurazioa, Simple Rag eta ezagutza-basearen hautapenarekin" caption="LAMB 0.8ko laguntzaile berri bat, Simple Rag eta course_notes_08 hautatuta, 2026ko urriaren 17a." >}}

**Espero den emaitza:** kontsulta batek aurreikusitako iturria berreskuratzen du, eta gordetako laguntzaileak iturri horri lotuta dago. Probatu laguntzailearen benetako erantzunak ondoren. Berreskuratutako testuinguruak erantzunen oinarria hobe dezake, baina ez du bermatzen erantzun edo aipu zuzenik.

**Ezer itzultzen ez bada:** egiaztatu irenstearen egoera, hautatutako ezagutza-basea eta galdera benetan iturriarekin bat datorren. Ez ordeztu materiala isilean asmatutako informazioarekin.

[Hurrengoa: probatu laguntzailearen portaera →](/eu/guides/0.8/testing/)
