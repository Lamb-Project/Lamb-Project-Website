---
title: Eraiki ikaskuntza-aplikazio bat LAMBekin
description: Erabili integrazio-baliabide publikoak hezkuntza-tresna bat eraikitzeko edo LAMBi ekarpenak egiteko.
translationKey: developers
weight: 3
---

LAMBek laguntzaileak eta ereduetarako sarbidea kudeatzeko geruza bat eskaintzen du, hezkuntza-aplikazioek instituzio-ingurune batean erabil dezaketena. Eraiki irakaskuntza-tresna berri bat, automatizatu lan-fluxu bat edo egin ekarpenak software librearen ekosistemari. LAMB GNU GPL v3 lizentziapean dago.

## Eraiki tresna bat ikaskuntza-jarduera baterako {#build-a-tool-for-a-learning-activity}

**lamb-tool-template** publikoak erakusten du nola LMS batetik abiarazten den tresna batek LAMB laguntzaile baimendu bat erabiltzen duen eta irakasleak onetsitako emaitza bat itzultzen dion LMSari. Aplikazio-talde bati abiapuntu zehatz bat ematen dio.

Hau behar duzu: sortzaileen APIrako sarbidea onartzen duen LAMB instalazio bat, sarbide hori erabiltzeko baimena, eta zure kontuarentzat eskuragarri dagoen laguntzaile argitaratu bat. Instituzio batek tresnak erabiltzen duen LTI bertsioa ere baimendu behar du. Erakutsitako txantiloiak LTI 1.1 erabiltzen du.

[Ikusi tresnaren gida bisuala →](/eu/guides/learning-tool/)

## Garapenerako eta probetarako tresnak {#tools-for-development-and-testing}

| Tresna | Zertan laguntzen dizun | Iturburu publikoa |
|---|---|---|
| LAMB LTI Test Tool | LTI 1.1 abiarazteak, irakasle/ikasle rolak, abiarazte-parametroak eta Basic Outcomes bidezko kalifikazioen itzulera probatzea garapenean | [LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) |
| Moodle CLI | Moodleren web-zerbitzuen API estandarrekin komando-lerrotik lan egitea, kontuaren baimenen barruan | [Moodle CLI](https://github.com/Lamb-Project/moodle-cli) |
| LAMB CLI | Laguntzaileak, ezagutza-baseak, errubrikak, probak, analitikak eta onartutako agente-lan-fluxuak terminaletik kudeatzea | [LAMB CLI](https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli) |
| LAMB tresna-txantiloia | Bereiz ostatatutako hezkuntza-aplikazio bat abiaraztea, laguntzaileetarako sarbide baimenduarekin eta LMS integrazioarekin | [Tresna-txantiloia](https://github.com/Lamb-Project/lamb-tool-template) |

Erabili LTI Test Tool integrazio bat aztertzeko eta entseatzeko, eta gero balioztatu instituzioaren benetako LMS konfigurazioan. Bere garapen-ingurunea ez da Moodle edo Canvas bateragarritasunaren ziurtagiri bat.

Moodle CLIk eta LAMBen Moodle konektoreak web-zerbitzu estandarrak erabiltzen dituzte; ez dute Moodle-plugin pertsonalizaturik behar. Eskuragarri dauden eragiketak gaitutako zerbitzuen, kontuaren baimenen eta, konektorearen kasuan, LAMBen erakunde-politikaren araberakoak dira.

## Ulertu kontratu publikoa {#understand-the-public-contract}

LAMBen sortzaileen APIak onartutako ereduak eta txat-osatzeak (chat completions) eskaintzen ditu OpenAIrekin bateragarria den interfaze baten bidez, gaitasun hori duten hedapenetan. Bateragarritasunak onartutako interfazea deskribatzen du; ez du hitzematen beste zerbitzu baten amaiera-puntu edo aukera guztiak daudenik.

Erabili APIak itzultzen dituen laguntzaile-identifikatzaileak. Gorde gako pertsonalak tresnaren zerbitzarian, inoiz ez ikasleek ikusten duten JavaScriptean. Egiaztatu baimen- eta bertsio-aurrebaldintzak, erantzun huts batek funtzio bat hautsita dagoela esan nahi duela pentsatu aurretik.

[Txantiloiaren biltegiak](https://github.com/Lamb-Project/lamb-tool-template) bere konfigurazio-jarraibide publikoak eskaintzen ditu. Finkatu probatzen duzun berrikuspena eta erregistratu zein LAMB bertsiorekin parekatzen den. Txantiloiaren gidak data jakineko berrikuspen batera estekatzen du, probatu gabeko etorkizuneko kode-kopia bat deskribatu beharrean.

## Egin ekarpenak proiektuari {#contribute-to-the-project}

LAMB GPL v3 lizentziapean banatzen da. Arazo bat jakinarazi, dokumentazioa hobetu, aldaketa bat probatu edo ekarpen bat proposa dezakezu [iturburu-biltegiaren](https://github.com/Lamb-Project/lamb) bidez.

[Prestatu ekarpen erabilgarri bat →](/eu/developers/contribute/)

AA agente bat tresna bat ebaluatzen edo garatzen laguntzen ari bazaizu, hasi [agenteentzako irakurketa-gida publikoarekin](/eu/agents/). Dokumentazio publikoak onartutako erabilera deskribatzen du; barne-arkitektura eta diseinu-oharrak ez daude webgune honetan.
