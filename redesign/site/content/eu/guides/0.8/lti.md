---
title: Aukeratu zure LMSaren sarbide-bidea
description: Aurkitu LTI bide egokia laguntzaile baterako, hezitzaileen sarbiderako, ikastaroko jarduera baterako edo ikaskuntza-tresna bereizi baterako.
translationKey: v08-lti
weight: 4
aliases: [/guides/lti/]
---

**Hezitzaileentzat eta LMS administratzaileentzat.** LAMB 0.8k lehendik dauden LTI sarbide-bideak mantentzen ditu. Ez dago ikastaroko esteka bat ordeztu beharrik jarduera-bide berriago bat dagoelako soilik. Erabili zure instituzioak konfiguratu duen bidea eta probatu aurreikusitako rolekin.

## Zein bide dagokio zure zereginari? {#which-path-fits-your-task}

| Zer egin nahi duzu | Sarbide-bidea | Zer prestatu |
|---|---|---|
| Ikasleei argitaratutako laguntzaile bat erabiltzen utzi | Laguntzaile bakarraren LTI argitalpena | Argitaratu laguntzailea eta erabili LMSan emandako abiarazte-xehetasunak |
| Hezitzaileei LAMB Creator LMStik irekitzen utzi | Erakundearen Creator sarbidea | Administratzaile batek erakundearen Creator tresna eta sarbide-baimenak konfiguratzen ditu |
| Ikastaroko jarduera bat konfiguratu eta irakasle edo ikasle gisa abiarazi | LAMBen jarduera-tresna | Irakasle batek jardueraren konfigurazioa osatzen du ikasleak sartu aurretik |
| Bereiz ostatatutako hezkuntza-aplikazio bat abiarazi | Aplikazioaren beraren LTI tresna | Konfiguratu aplikazio horren abiarazte-xehetasunak eta LAMBerako baimendutako sarbidea |

Sarbide-puntu desberdinak dira. Bateko kontsumitzaile-gakoa, sekretu partekatua edo abiarazte-URLa ez da beste batekoarekin ordezkagarria. Moodleko eremuetarako, pribatutasun-ezarpenetarako eta erakustaldiko Moodle batean LAMBen jarduera-tresnaren urratsez urratseko azalpenerako, ikusi [Konektatu LAMB eta Moodle](/eu/guides/0.8/moodle/). Dokumentatutako integrazioek **LTI 1.1** erabiltzen dute; gida honek ez du LTI 1.3rako euskarririk aldarrikatzen.

## Argitaratutako laguntzaile bakarra {#one-published-assistant}

1. Sortu eta probatu laguntzailea LAMB Creatorren.
2. Argitaratu laguntzailearen argitaratze-kontrolaren bidez.
3. Erabili laguntzaile horretarako emandako abiarazte-URLa, kontsumitzaile-gakoa eta sekretu partekatua LMSko External Tool konfiguratzean.
4. Ireki ikastaroko jarduera erakustaldiko ikasle-kontu batekin eta egiaztatu laguntzaile zuzena erabilgarri dagoela.

Baliteke zure LMS administratzaileak ezarpen hauek zuretzat kudeatzea. Gorde argitalpenaren kredentzialak pribatuan. [Berrikusi argitaratzeko egiaztapen-zerrenda osoa](/eu/guides/0.8/publishing/).

## Hezitzaileen sarbidea Creatorrera {#educator-access-to-creator}

1. Eskatu zure LAMB eta LMS administratzaileei Creator sarbidea konfiguratzeko zure erakundearentzat.
2. Ireki instituzioak emandako Creator esteka LMStik.
3. Egiaztatu aurreikusitako erakundera iristen zarela, egiletza-baimen egokiekin.
4. [Sortu zure lehen laguntzailea](/eu/guides/0.8/first-assistant/).

Creator sarbidea egiletza-bide bat da. Berez ez du laguntzailerik argitaratzen ezta ikasleentzako jarduerarik sortzen ere. Zure instituzioaren LAMB helbidean zuzenean saioa hastea sarbide-aukera bereizia da oraindik, gaituta dagoen lekuetan.

## Ikastaroko jarduerak {#course-activities}

Instituzio batek LAMBen jarduera-tresna konfigura dezake bere LMSan. Irakaslearen lehen abiarazteak jarduera konfiguratzen du; irakasleen eta ikasleen hurrengo abiarazteek dagokien ikuspegia irekitzen dute. Ikasle batek ezin du irakaslearen hasierako konfigurazioa osatu.

0.8 hautagaiak txat-, fitxategien ebaluazio- eta LLM sarbide-jarduerako moduluak ditu. Irakasle batek dituen aukerak instalazioaren eta haren konfigurazioaren araberakoak dira. Erabili zure administratzaileak hautatutako modulurako ematen dituen jarraibide zehatzak.

- **Txata:** hautatu aurreikusitako argitaratutako laguntzaileak eta berrikusi elkarrizketen ikusgarritasun-ezarpenak.
- **Fitxategien ebaluazioa:** egiaztatu zeregina, bidalketaren baldintzak, errubrika eta irakaslearen berrikuspena, kalifikaziorik itzuli aurretik.
- **LLM sarbidea:** berretsi erakundeak eredu-sarbidea konfiguratu duela eta ikastaroaren kuota eta ordutegia aurreikusitako jarduerarekin bat datozela.

Ikasleek erabili aurretik, probatu irakaslearen ikuspegia eta ikaslearena. Ebaluaziorako, egiaztatu LMSan sortutako kalifikazioa, baita abiaraztea ere. Eredu-sarbiderako, egiaztatu ikaslearen tresnak baimendutako eskaera bat egin dezakeela konfiguratutako baldintzen barruan.

## Bereiz ostatatutako ikaskuntza-tresnak {#separately-hosted-learning-tools}

LAMBen tresna-txantiloitik eraikitako aplikazio batek bere abiaraztea eta konfigurazioa ditu. Argitaratutako laguntzaile baimendu bat erabiltzen du LAMBen APIaren bidez. Jarraitu [aplikazioaren azalpen ilustratua](/eu/guides/0.8/learning-tool/); ez itsatsi aplikazioaren abiarazte-xehetasunak LAMBen beste tresna baten konfigurazioan.

**Espero den emaitza:** zure ikastaroak zein sarbide-bide erabiltzen duen, nork konfiguratzen duen eta irakasle eta ikasle gisa zer probatu behar den identifika dezakezu. Abiarazte batek huts egiten badu, jakinarazi bidea, instalatutako bertsioa eta rola zure instituzioaren laguntza-taldeari, sekreturik partekatu gabe.
