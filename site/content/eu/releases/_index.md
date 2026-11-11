---
title: Bertsio-oharrak
description: Zer aldatu den LAMB bertsio bakoitzean, zergatik aldatu den eta instalazio batek zer egin behar duen horren aurrean.
translationKey: releases
weight: 9
---

Orri hauek jasotzen dute LAMB bertsio bakoitzak zer gehitzen eta aldatzen duen, aldaketa bakoitzaren arrazoia eta administratzaile batek zer egin behar duen bertsioa berritzean. Kodearekin alderatuta idatzita daude: sarrera bakoitzak adierazten du zein arazo publikotan (issue) edo iturburu-kodeko zein lekutan egiazta daitekeen.

| Bertsioa | Egoera 2026ko azaroaren 11n | Oharrak |
|---|---|---|
| **0.9** | Hautagai-bertsioa, garapen-adarrean 2026ko azaroaren 11tik. Etiketatu gabe. | [LAMB 0.9 bertsioaren berritasunak](/eu/releases/0.9/): LTI 1.3 ikastaroko jardueretarako, prompt-iragazkiak, LAMB LEGATUSen Auto modua, laguntzailearen jardueraren analisia |
| **0.8** | `v0.8` gisa etiketatua 2026ko azaroaren 11n. | [LAMB 0.8 bertsioaren berritasunak](/eu/releases/0.8/): ikastaroko jarduerak modulu gisa, fitxategien ebaluazioa, LLM sarbidea. [Iturburu-kodea etiketa horretan](https://github.com/Lamb-Project/lamb/tree/v0.8) |
| **0.7** | `v0.7` gisa etiketatua 2026ko urriaren 20an. | [LAMB 0.7 bertsioaren berritasunak](/eu/releases/0.7/): LAMB LEGATUS, Moodle konexioa, laguntza-sarbidea, sortzaileen API gakoak. [Iturburu-kodea etiketa horretan](https://github.com/Lamb-Project/lamb/tree/v0.7) |

## 0.7 bertsiotik bazatoz {#coming-from-07}

0.7 bertsiotik 0.9 bertsiora igarotzen den instalazio batek 0.8 eta 0.9 bertsioetako aldaketak batera jasotzen ditu, 0.9 bertsioa 0.8 bertsioaren gainean eraikita dagoelako. Irakurri bi orriak. Laburpena:

- **Lehendik dagoen ezer ez da kentzen.** Laguntzaile bakarraren argitalpenak, LMStiko Creator sarbideak eta LTI 1.1 jarduera-tresnak lehen bezala funtzionatzen jarraitzen dute. LTI 1.3 jarduera-tresnari gehitzen zaio; ez du ezer ordezten.
- **Ikastaroko hiru jarduera motak** ordezten dute lehengo txat-jarduera bakarra: txata, fitxategien ebaluazioa eta LLM sarbidea. Irakasleak bat aukeratzen du lehen abiaraztean.
- **Datu-basea berez eguneratzen da** bertsio berria abiaraztean (bost migrazio: 28, 31, 33, 34 eta 35 zenbakidunak). Egin datu-basearen babeskopia lehenik, edozein bertsio-berritzetan bezala.
- **Portaera bat aldatzen da abian diren elkarrizketetan.** 0.9 bertsiotik aurrera, elkarrizketa batek hasi zeneko sistemaren prompta gordetzen du. Ikusi [Bertsio-berritzeko oharrak](/eu/releases/0.9/#upgrade-notes) eguna aukeratu aurretik.
- **Bi funtziok administratzaile bat behar dute inork ikusi aurretik:** LTI 1.3 (erregistratu zure LMSa) eta LLM sarbidea (hedatu aukerako atebidea).

## Nola irakurri egoera {#status}

**Hautagai-bertsio** bat probatzen ari den bertsio bat da. Proiektuaren garapen-instantzian exekutatzen da, eta etiketatu aurretik oraindik alda daiteke. Bertsio **etiketatu** bat da instalazioek erabiltzea espero den bertsioa. LAMB Creatorren goiko ezkerreko izkinako etiketak erakusten du instalazio batek zein bertsio exekutatzen duen, eta irakasle batek ikusten duena erakundeak gaitu duenaren araberakoa ere bada. Ikusi [Bertsioak eta funtzioen erabilgarritasuna](/eu/availability/).

Gida ilustratuak [Gidak eta bertsioak](/eu/guides/) orrian daude oraindik. 0.8 bertsioa dokumentatzen dute; 0.9 bertsioak gida bateko prozedura aldatzen duenean, 0.9 bertsioko oharrek hala diote.
