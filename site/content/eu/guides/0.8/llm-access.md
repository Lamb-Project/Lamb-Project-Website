---
title: Eman ikasleei eredu-sarbidea zure arauekin
description: Ezarri erakunde baten LLM sarbide-politika, gehitu LLM access jarduera bat ikastaro batean, eta eman ikasle bakoitzari gako pertsonal bat, mugekin eta ordutegi batekin.
translationKey: v08-llm-access
weight: 6
aliases: [/guides/llm-access/]
---

**Erakundeetako administratzaileentzat eta irakasleentzat.** **LLM access** jarduera batek ikastaro bateko ikasle bakoitzari gako pertsonal bat ematen dio erakundearen ereduetarako, bere tresnekin erabiltzeko: VS Code Continue edo Cline-rekin, Aider, Claude Code edo bere kodea. Erakundeko administratzaileak ezartzen ditu arauak; irakasleak ezartzen ditu ikastaroaren mugak eta ordutegia, arau horien barruan. [Zure AAren azken kilometroa](/eu/institutions/ai-governance/) orriak azaltzen du ideia.

Pantaila-argazkiak LAMB 0.8n 2026ko urriaren 16an egindako exekuzio automatizatu batetik datoz, erakunde, ikastaro eta ikasle sintetikoekin, tokiko eredu batekin eta Moodleren ordez LTI proba-tresna batekin. Gakoak ezkutatuta daude.

## Hasi aurretik {#before-you-start}

Sistema-administratzaileak LAMB 0.8rekin aukerako gehigarri gisa datorren atebidea hedatu du, eta zure erakundea hari konektatu dio. Administrazio-pantailek **Proxy** deitzen diote atebideari. **LLM access** fitxan, **Proxy** lerroak **connected, reachable** dio, eta **Models the proxy serves** atalak bere ereduak zerrendatzen ditu. "not connected" badio, galdetu zure sistema-administratzaileari.

Irakasleek erakundean LAMB kontu bat behar dute ikastaro batean LAMB jarduera bat konfiguratu aurretik: behin ireki behar dute erakundearen LAMB Creator esteka LMStik. [Aukeratu zure LMSaren sarbide-bidea](/eu/guides/0.8/lti/) gidak azaltzen ditu estekak.

## Erakundeko administratzailea: ezarri arauak {#organization-admin-set-the-rules}

1. Ireki **Erakunde Admin → Settings → LLM access**.
2. Markatu **Teachers may create LLM access activities**. Irakasleek LLM access mota laukia markatuta dagoenean, proxya konektatuta dagoenean eta gutxienez eredu bat markatuta dagoenean bakarrik ikusten dute (6. urratsa).
3. Aukeratu **how tokens are limited** (tokenak nola mugatzen diren):
   - **Shared pool per activity:** jarduera bakoitzak token-poltsa bakarra du bere ikasle guztientzat.
   - **Allowance per student:** ikasle bakoitzaren gakoak muga bat du denbora-tarte bakoitzeko, guztira, edo biak.
   - **Both:** poltsa batek jarduera mugatzen du, eta ikasle bakoitzak muga pertsonal bat ere badu.

   0.8 bertsioan poltsa da muga irmo bakarra: gakoa ordezten duen ikasleak guztizko berri bat hasten du. Aukeratu poltsa duen politika bat behar duzunean.
4. Ezarri **Default allowance per teacher**: irakasle batek bere LLM access jarduera guztien artean gehienez **commit** (konprometitu) dezakeena. Poltsa bat osorik zenbatzen da jarduera gordetzen denean; poltsarik gabe, ikasle bakoitzaren guztizkoa ikasleak gakoa hartzen duenean zenbatzen da; denbora-tarteko mugek, bakarrik, ez dute ezer konprometitzen. Kuotak irakasle batek konprometitzen duena mugatzen du, ez ikasleek gastatzen dutena. Utzi hutsik mugarik ez jartzeko.
5. Gehitu **Exceptions for individual teachers**, LMSak irakasle horrentzat bidaltzen duen posta elektronikoarekin.
6. Markatu **Models teachers may offer**.
7. Aukeratu ikasle bakoitzeko mugetarako **Time slot** eta jarduera berrietarako **Time zone of timetables** lehenetsia. Tarteek erlojuari jarraitzen diote (10 minutuk esan nahi du :00, :10, :20 …) eta bakoitzaren hasieratik segundo gutxira berritzen dira. Erabili 10, 20, 30 edo 60 minutu: 5 edo 15 minuturekin, orrietako uneko tarteko zifrak okerrak dira 0.8 bertsioan, nahiz eta atebideak muga zuzena aplikatzen duen. Aukeratu tartea irakasleak hasi aurretik; dagoeneko emandako gakoek eman zitzaienean zuten tartea gordetzen dute.
8. Gorde. Jarduera berriek arau berriei jarraitzen diete berehala. Lehendik dauden jarduerek beren ereduak, tartearen luzera eta ordu-eremua gordetzen dituzte, eta politika berriaren arabera egiaztatzen dira beren irakasleak berriro gordetzen dituenean bakarrik; pantailak zenbat diren esaten du.

{{< capture src="/images/guides/governance-org-policy.png" alt="Erakunde baten LLM access ezarpenak: Both politika, irakasle bakoitzeko kuota lehenetsia 300000 token, irakasle-salbuespen bat 1000000rekin, course-model eredua, 10 minutuko denbora-tartea, eta irakasleen erabileraren taula" caption="LLM access fitxa: proxyaren egoera, politika, kuotak, ereduak, denbora-tartea eta irakasleen erabilera." >}}

**Jarraitu erabilerari:** beheko **Use by teacher** taulak irakasle bakoitzaren kuota, konprometitu duena, benetan erabilitako tokenak eta haren jarduerak erakusten ditu. Erabilitako zifrak eskaeren ondoren 20 eta 40 segundo artean iristen dira; kargatu berriro orria zifra berriagoak ikusteko.

## Irakaslea: gehitu jarduera {#teacher-add-the-activity}

1. Zure ikastaroan, gehitu LAMB jarduera-esteka bat (kanpoko tresna bat) eta ireki.
2. Aukeratu **LLM access** jarduera mota gisa eta eman ikasleek ikusiko duten izen bat.
3. Bete zure erakundearen politikak eskatzen dituen mugak: **Activity pool**, **Per student: tokens per time slot** eta **Per student: tokens in total**. Utzi eremu bat hutsik mugarik ez jartzeko; 0 ez da onartzen.
4. Aukeratu **Save & Launch**. LAMBek mugak politikaren arabera egiaztatzen ditu, eta poltsa zure kuotaren arabera. Ez badira egokitzen, ez da ezer sortzen: arrazoia botoiaren gainean agertzen da, eta zure sarrerak gorde egiten dira. Poltsarik gabe, ikasle bakoitzaren guztizkoa ikasleak gakoa hartzen duenean egiaztatzen da; beraz, ukapena geroago etor daiteke, ikaslearen orrian.

{{< capture src="/images/guides/governance-teacher-setup.png" alt="LAMB Activity Setup, LLM access hautatuta, 200000ko poltsa, 3000 ikasleko tarteko, 20000 ikasleko guztira, eta ukapen-mezu bat: honek 500000 token behar ditu; irakasleari 300000tik 300000 geratzen zaizkio" caption="Konfigurazioa LLM access hautatuta. Lerro gorria irakaslearen kuota baino gehiago eskatu zuen lehen saiakera batekoa da." >}}

## Irakaslea: kudeatu jarduera {#teacher-manage-the-activity}

Jarduera irekitzen duzun bakoitzean, haren kudeaketa-orrira iristen zara.

- **Open / Closed** aukerak erakusten du gakoek orain funtzionatzen duten. **Follow timetable** da lehenetsia; **Open now** eta **Close now** aukerek gainidazten dute. LAMBek aldaketa 10 segundo ingurutan aplikatzen du.
- **Change limits and timetable:** ereduak, beti irekita edo aukeratutako egun eta orduetan, **From** eta **Until** datak, ordu-eremua eta mugak. Ikasleek beren gakoak gordetzen dituzte; eredu eta muga berriak berehala iristen zaizkie, eta ordutegiaren aldaketak 10 segundo ingurutan. **Until** data beranduago bat ez zaie iristen dagoeneko hartutako gakoei: ikasleek gakoa ordeztu behar dute hura lortzeko.
- **Students:** gako bakoitzaren tokenak uneko tartean, guztira, eta ukatutako eskaerak. **Block** aukerak ikasle baten uneko gakoa geldiarazten du 10 segundo ingurutan, eta **Unblock** aukerak berreskuratzen du; **Revoke** aukerak ezabatu egiten du. 0.8 bertsioan, bietako batek ere ez du ikaslea kanpoan uzten: blokeatutako ikasleak gakoa ordez dezake, eta baliogabetutakoak gako berri bat har dezake. Sarbidea geldiarazteko, itxi jarduera.

{{< capture src="/images/guides/governance-teacher-manage.png" alt="Irakaslearen kudeaketa-orria: irekita, ordutegiaren kontrolak, 200000ko poltsa, 3000 ikasleko 10 minutuko, 20000 ikasleko guztira, ordutegiaren panela, eta lau ikasle beren erabilerarekin" caption="Kudeaketa-orria ordutegiaren panela irekita duela. Charlie bi aldiz iritsi zen bere tarteko mugara." >}}

Muga bat gainditzen duen eskaera osatu egiten da eta osorik zenbatzen da; hurrengoa ukatu egiten da. Horregatik ager daiteke ikasle batek muga baino zertxobait gehiago duela.

## Ikaslea: hartu gako bat {#student-take-a-key}

1. Ireki jarduera ikastarotik.
2. Irakurri **Before you take a key**: zer erregistratzen den (eskaera bakoitzaren ordua, eredua eta tokenak, zuri lotuta, zure irakasleak zure erabilera ikus dezan), atebideak ez duela gordetzen prompten edo erantzunen testua, eta kanpoko hornitzaile batek zer jasotzen duen. Markatu **I have read this** eta aukeratu **Get my key**.
3. Kopiatu gakoa berehala: behin bakarrik erakusten da, OpenAI-rekin bateragarriak diren tresnetarako, Claude Coderako eta terminaleko proba baterako ezarpenekin.

{{< capture src="/images/guides/governance-student-key.png" alt="Ikaslearen orria, gako ezkutatu batekin eta OpenAI-rekin bateragarriak diren tresnetarako, Claude Coderako eta terminaleko proba baterako ezarpenekin" caption="Gakoa, behin erakutsia, itsasteko ezarpenekin. Hemen ezkutatuta." >}}

Hurrengo bisitetan, orriak gakoaren egoera eta ikaslearen erabilera erakusten ditu, uneko tartean eta guztira. **Replace my key** aukerak gako zaharra berehala geldiarazten du eta berri bat ematen du.

{{< capture src="/images/guides/governance-student-usage.png" alt="Ikaslearen orria geroko bisita batean: gakoa aktibo, azken 10 minutuetan 3000tik 3115 token erabilita, guztira 20000tik 3115, Replace my key" caption="Geroko bisita bat, ikaslea tarteko mugara iritsi ondoren." >}}

Muga batera iristean, ikaslearen tresnak errore bat jasotzen du, zein muga den esaten duena, tokenetan: tarteko muga (itxaron hurrengo tarteari), guztizko kuota edo jardueraren poltsa partekatua (galdetu irakasleari). Itxitako jarduera bat edo blokeatutako gako bat ere ukatu egiten da.

## Edizio honen mugak {#limits-of-this-edition}

- Arau hauek LLM access jarduerei aplikatzen zaizkie. Txat-jarduerek eta fitxategien ebaluazioko jarduerek erakundearen eredu-hornitzailea erabiltzen dute, eta ez dira irakasleen kuotetan zenbatzen.
- Jardueraren poltsa da muga irmo bakarra: gakoa ordezteak ikasle bakoitzeko guztizko berri bat hasten du, eta ikasle bakoitzeko guztizkoa geroago handitzea ez da berriro egiaztatzen irakaslearen kuotaren arabera.
- Block eta Revoke aukerek ez dute ikaslea kanpoan uzten; jarduera ixteak bai. Ikastarotik ateratzen den ikasleak bere gakoa gordetzen du baliogabetzen den arte edo jarduera ixten den arte.
- Erakundearentzat LLM access desaktibatzeak jarduera berriak konfiguratzea eta irakasleek lehendik daudenak aldatzea eragozten du. Lehendik dauden jarduerak oraindik ireki daitezke, eta haien ikasleek gakoak hartu eta ordeztu ditzakete oraindik: irakasleek **Close now** aukeratzen dute haiek geldiarazteko.
- **Until** data beranduago batek ez ditu luzatzen dagoeneko hartutako gakoak.
- 5 edo 15 minutuko tarteekin, orrietako uneko tarteko zifrak okerrak dira; atebideak muga zuzena aplikatzen du.
