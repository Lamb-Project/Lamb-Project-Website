---
title: Ezagutu LAMBera konektatutako ikaskuntza-tresna bat
description: Irakaslearen konfigurazioaren, ikaslearen txataren eta kalifikazioen itzuleraren benetako ibilbidea, tresna-txantiloi publikoarekin.
translationKey: v08-learning-tool
weight: 5
aliases: [/guides/learning-tool/, /tool-template/]
---

**Aplikazioen garatzaileentzat eta irakaskuntza-berrikuntzako taldeentzat.** Ibilbide honek [lamb-tool-template](https://github.com/Lamb-Project/lamb-tool-template/tree/c8c6f2fecc4a55da8e67574ce5857270552a7db5) publikoa erakusten du, 2026ko urriaren 17an berriro jasoa, LAMB 0.8ra konektatuta. Erakustaldiko LMS bat, laguntzailearen benetako erantzunak eta parte-hartzaile sintetikoak erabiltzen ditu. Hauek ez dira ekoizpeneko Moodle ikastaro baten pantaila-argazkiak.

## Hasi aurretik {#before-you-begin}

Hauek behar dituzu: euskarria ematen duen LAMB instalazio bat, sortzaileen APIrako gako pertsonal bat sortzeko baimena, argitaratutako laguntzaile bat kontu horrentzat erabilgarri, eta tresnaren tokiko instalazio bat, txantiloiaren READMEari jarraituz. Erakutsitako txantiloiak LTI 1.1 eta Basic Outcomes bidezko kalifikazioen itzulera erabiltzen ditu.

Eskatu zure administratzaileari sortzaileen API sarbidea gaitzeko, beharrezkoa den lekuan. Gorde API gakoa tresnaren zerbitzarian eta erabili gako bereizi bat hedapen bakoitzerako. Ikasleek ez dute gako hau behar. Finkatu txantiloiaren berrikuspena eta probatu zure LAMB hedapenaren aurka.

## 1. Konfiguratu tresna {#1-configure-the-tool}

Exekutatu txantiloia, egiaztatutako berrikuspenaren README publikoari jarraituz. Ireki haren administrazio-orria eta eman LAMBen helbidea, sortzaileen APIrako gakoa eta tresnaren LMS kredentzialak. Txantiloiak LAMBen erro-helbidea espero du eta bere API bideak berak gehitzen ditu; jarraitu haren konfigurazio-kontratuari, beste API bezero batetik URL bat kopiatu beharrean.

{{< capture src="/images/guides/tool-admin.png" alt="Tresna-txantiloiaren administrazio-formularioa, zerbitzu-helbidearekin eta idazteko soilik diren kredentzial-eremuekin" caption="Txantiloiaren administrazioa LAMB 0.8ko tokiko instantziara konektatuta, 2026ko urriaren 17a. Sekretu-eremuak hutsik daude." >}}

## 2. Konfiguratu jarduera bat irakasle gisa {#2-set-up-an-activity-as-an-instructor}

Erregistratu tokiko tresna [LAMB LTI Test Tool](https://github.com/Lamb-Project/lamb-lti-test-tool) tresnan, eta abiarazi irakasle gisa erakustaldiko ikastaro batetik. Aukeratu erabilgarri dagoen argitaratutako laguntzailea. Beheko kalifikazioen itzulerako ariketarako, hautatu **Enable grade passback** eta gorde jardueraren ezarpenak.

{{< capture src="/images/guides/tool-setup.png" alt="Irakaslearen konfigurazio-orria, laguntzaile bat hautatzeko eta ikaskuntza-jarduera bat konfiguratzeko" caption="Irakaslearen konfigurazioa abiarazte sinatu baten ondoren, LAMB 0.8ko erakustaldiko laguntzaile argitaratua erabilgarri dagoela." >}}

## 3. Abiarazi ikasle gisa {#3-launch-as-a-learner}

Erabili proba-LMSaren ikasle-abiaraztea. Egin galdera bat laguntzaileari eta egiaztatu haren erantzuna. Adibidearen hizkuntza laguntzailearen konfiguraziotik dator; zure jarduerak beste hizkuntza bat erabil dezake.

{{< capture src="/images/guides/tool-chat.png" alt="Ikaslearen txata, LAMB laguntzaile baten benetako erantzuna tresna-txantiloiaren bidez erakusten duena" caption="LAMB 0.8ko RAG laguntzailearen erantzun berri bat tresna-txantiloiaren bidez, 2026ko urriaren 17a: CORAL-19 eta asteartean 10:00etan." >}}

## 4. Berrikusi emaitza bat bidali aurretik {#4-review-a-result-before-sending-it}

Itzuli irakasle gisa, ikuskatu jarduera eta sartu nahita jarritako proba-kalifikazio bat. Bidali tresnaren kalifikazioen itzulerako ekintzaren bidez, eta egiaztatu balioa proba-LMSan.

{{< capture src="/images/guides/tool-grade.png" alt="Irakaslearen panela, berrikuspenerako eta kalifikazioen itzulerako kontrolekin" caption="Erakustaldiko jarduera berriaren irakasle-ikuspegia, 2026ko urriaren 17a. Adibideko kalifikazioa sartuta dago, baina ez da bidali argazki honetan." >}}

**Bertsio honen muga ezaguna:** gordetako kalifikazio normalizatu bat, `0.8` adibidez, zuzenean kargatzen da 0–10 etiketa duen sarrera-eremu batean. Ez berrerabili gordetako bistaratzea 0–10 eskalan balego bezala. Bistaratze-bihurketa zuzendu egin behar da, eta gorde → kargatu berriro → gorde sekuentzia probatu, ikasgelan kalifikatu aurretik. Adibide hau ez da ekoizpenerako prest dagoela dioen baieztapena.

## 5. Ebaluatu emaitza osoa {#5-evaluate-the-complete-result}

Egiaztatu ikaslearen eta irakaslearen arteko bereizketa, laguntzailerako sarbide baimendua, benetako erantzuna eta LMSak erregistratutako kalifikazioa. Erantzun batek kasu horretarako konektibitatea frogatzen du, ez kalitate pedagogikoa. Tokiko LMS simulatu batean gainditzea ez da zure instituzioaren LMSan onartzea.

Benetako hedapen baterako, adostu zure instituzioko taldearekin HTTPS ostatatzea, onartutako LTI ezarpenak, kredentzialen kudeaketa, babeskopiak eta laguntza. Erabili aukeratutako berrikuspeneko instalazio- eta interfaze-jarraibide publikoak. Gida honek nahita jartzen du arreta tresna erabiltzean, LAMBen barne-arkitektura errepikatu beharrean.

[Garatzaileentzako abiapuntua](/eu/developers/) · [Jardunaren plangintza](/eu/institutions/operations/)
