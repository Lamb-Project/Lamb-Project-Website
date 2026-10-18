---
title: Probatu argitaratu aurretik
description: Erregistratu espero den portaera, egin benetako galderak eta berrikusi gordetako erantzunak.
translationKey: v08-testing
weight: 3
aliases: [/guides/testing/]
---

**Behar duzuna:** gordetako laguntzaile bat eta bere **Tests** fitxarako sarbidea. Proba bat exekutatzeak konfiguratutako eredua erabiltzen du eta kostuak sor ditzake. Pantaila-argazkiek LAMB 0.8 bertsioa erakusten dute, 2026ko urriaren 17an ateratakoak.

## 1. Idatzi erantzun on batek zer egiten duen {#1-write-down-what-a-good-answer-does}

Hasi hiru kasurekin: ikasle baten ohiko galdera bat, materialek erantzun ezin duten galdera bat, eta laguntzaileak bere helburua alde batera utz dezan saiakera bat. Elkarrizketa-jarduera baterako, gehitu aurreko truke baten araberakoa den jarraipen-galdera bat.

“Erantzunak ziurra dirudi” ez da onarpen-irizpide erabilgarria. “Ikastaroaren politika zuzena identifikatzen du eta ez du epemugarik asmatzen” egiazta dezakezun zerbait da.

## 2. Gorde proba-kasu bat {#2-save-a-test-case}

Ireki **Tests → + Gehitu proba-kasua**. Idatzi izenburu bat, **Student message / test prompt** (ikaslearen mezua edo proba-prompta), eskuragarri dagoen proba-kasu mota eta **Expected behavior** (espero den portaera). Irudiko interfazeak Normal, Multi-turn eta Adversarial motak eskaintzen ditu. Sakatu **Add** gordetzeko.

{{< capture src="/images/guides/tests-add.png" alt="Proba-kasua gehitzeko formularioa: ikaslearen prompta, kasu mota eta espero den portaera" caption="Proba-kasu berri bat erakustaldiko RAG laguntzailearentzat LAMB 0.8 bertsioan, 2026ko urriaren 17a." >}}

## 3. Exekutatu eta aztertu {#3-run-and-inspect}

Erabili **Run** kasu baterako edo **Run All** gordetako multzo osorako. Itxaron emaitzak iritsi arte, eta ireki gordetako exekuzio bat haren benetako erantzuna irakurtzeko. Denbora-muga gainditzeak ez du frogatzen exekuziorik gorde ez denik; aztertu historia berriro saiatu aurretik.

**Debug** eta **Debug All (bypass)** aukerek promptaren muntaketa aztertzen dute, osatze-ereduari deitu gabe. Ez dute erantzunaren kalitatea frogatzen, eta berreskurapenak beste zerbitzu batzuk erabil ditzake oraindik. Ez hartu arazketa muturretik muturrerako kostu-berme gisa.

{{< capture src="/images/guides/tests-run.png" alt="Gordetako proba-kasua, Run eta Debug kontrol indibidualekin eta multzo-ekintzekin" caption="LAMB 0.8 bertsioaren proba-kontrolak eta gordetako exekuzio bat, 2026ko urriaren 17a. Zabaldu exekuzioa bere erantzuna aztertzeko." >}}

{{< capture src="/images/guides/tests-result.png" alt="LAMB 0.8 bertsioko proba-exekuzio zabaldua, bere sarrerarekin eta benetako erantzunarekin" caption="Gordetako erantzunak CORAL-19 eta asteartea 10:00etan identifikatzen ditu. Berrikusi erantzun osoa espero den portaeraren arabera." >}}

## 4. Berrikusi, hobetu eta exekutatu berriro {#4-review-improve-and-rerun}

Alderatu erantzuna itxaropenarekin. Erabili **Evaluate** zure iritzia eta oharrak erregistratzeko. Laguntzailea aldatzen baduzu, gorde aldaketa eta exekutatu berriro eragindako kasuak. Berrikusi LAMB LEGATUSen iradokizunak haietan oinarritu aurretik.

**Espero den emaitza:** galderaren eta ikusitako erantzunaren adibideak gorde dituzu, zure ikaskuntza-helburuari lotutako iritzi batekin. Kasu multzo txiki bat gainditzeak ez du zuzentasun unibertsala frogatzen.

[Hurrena: argitaratu zure instituzioaren LMSaren bidez →](/eu/guides/0.8/publishing/)
