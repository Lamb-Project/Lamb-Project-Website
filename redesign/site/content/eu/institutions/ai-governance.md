---
title: Zure AAren azken kilometroa
description: Eman ikasle bakoitzari zure instituzioaren ereduetarako sarbidea, kopuru egokian eta une egokian, erakundeak eta irakasleak ezarritako arauen arabera.
translationKey: ai-governance
weight: 0
---

**Instituzioentzat, eskolentzat eta haietan lan egiten duten irakasleentzat.** Instituzio askok erabaki dute non exekutatzen den inferentzia: tokiko ereduetan, edo beren eskakizunak betetzen dituen hornitzaile batean. Geratzen den galdera azken kilometroa da. Nola lortzen du ikasle bakoitzak eredu horietarako sarbidea, bere beharren arabera, bere eskolak eta irakasleak ezarritako arauen barruan?

Inferentzia-zerbitzu batek ereduak, gakoak eta tokenak ezagutzen ditu. Ez daki nor dagoen matrikulatuta, zein ikastarotan, zein rolekin, zein eskolatan. Zure LMSak badaki, eta LAMBek LTI bidez jasotzen du hori ikasle batek jarduera bat irekitzen duen bakoitzean, eta bere erakundeekin lotzen du. Horri esker ematen du LAMBek **eredu egokia, pertsona egokiari, kopuru egokian, une egokian.**

<figure class="lamb-diagram"><img src="/images/diagrams/last-mile.svg" alt="Diagrama: zure AA azpiegiturak baimendutako ereduak ematen dizkio LAMBi; zure LMSak LTI bidez adierazten dio LAMBi nor dagoen matrikulatuta, zein ikastarotan, zein rolekin eta zein eskolatan; LAMBen AA gobernantza-geruzak erakundearen arauak eta irakaslearen jarduera aplikatzen ditu, eta atebide batek irismen mugatuko gako bat ematen dio pertsona bakoitzari. LAMB 0.8 bertsioan ikasleen tresna propioak gobernatzen ditu; laguntzaileak, LAMB LEGATUS eta ikaskuntza-aplikazioak diseinu-fasean daude." width="1200" height="800"><figcaption>Lerro jarraitua: LAMB 0.8 bertsioan gobernatua. Lerro etena: diseinu-fasean.</figcaption></figure>

## Nola funtzionatzen duen LAMB 0.8 bertsioan {#how-it-works-in-lamb-08}

LAMBek ez du trafikoa berak eramaten. Kode irekiko atebide bat ([LiteLLM](https://github.com/BerriAI/litellm), LAMBen administrazio-pantailetan **Proxy** gisa agertzen dena) zure ereduen aurrean kokatzen da, eta LAMBek kontrolatzen du: jarduera bateko ikasle bakoitzari gako pertsonal bat ematen dio, gakoaren mugak eta ordutegia ezartzen ditu, eta gako bakoitzak zenbat token erabili dituen irakurtzen du. Atebidea LAMB 0.8 bertsioarekin batera dator, hedapenaren aukerako gehigarri gisa.

Mugak tokenetan zenbatzen dira. Token bat hitz baten zati bat da; testu-orri bat, gutxi gorabehera, 500 eta 700 token artekoa da.

## Nork erabakitzen du zer {#who-decides-what}

- **Instituzioak** exekutatzen du atebidea eta aukeratzen du zein eredu eskaintzen dituen. Bere sistema-administratzaileak erakunde bakoitza atebidearekin konektatzen du, behin.
- **Eskola edo sail bakoitza** erakunde bat da LAMBen, bere administratzaile eta arauekin. Erakundearen administratzaileak erabakitzen du irakasleek ereduetarako sarbidea eman dezaketen ala ez, nola mugatzen diren tokenak (jarduera bakoitzeko poltsa partekatu bat, ikasle bakoitzeko kuota pertsonal bat, edo biak), irakasle bakoitzak zenbat token konprometi ditzakeen (irakasle jakin batzuentzako salbuespenekin), eta zein eredu eskain ditzaketen irakasleek.
- **Irakasleak** **LLM access** jarduera bat gehitzen dio LMSko ikastaro bati, eta, arau horien barruan, erabakitzen ditu poltsa, ikasle bakoitzak denbora-tarte bakoitzean eta guztira zenbat erabil dezakeen, eta noiz dagoen jarduera irekita: aukeratutako egun eta orduetan, bi dataren artean, edo beti.
- **Ikasleak** jarduera ikastarotik irekitzen du, zer erregistratzen den irakurtzen du, eta gako pertsonal bat hartzen du bere tresnetarako: OpenAIrekin bateragarria den edozein tresna, hala nola VS Code Continue edo Cline gehigarriekin, Aider, Zed edo Cursor, eta Claude Code.

Moodle bat, LAMB bat, estrategia asko: instituzioak markoa ezartzen du, eskola bakoitzak bere arauak ezartzen ditu, eta irakasleak ikastaroan erabakitzen du.

{{< capture src="/images/guides/governance-org-policy.png" alt="Erakunde baten LLM access ezarpenak: Both politika, irakasle bakoitzeko kuota lehenetsia 300000 token, irakasle baten salbuespena 1000000 tokenekoa, course-model eredua, 10 minutuko denbora-tartea, eta irakasle bakoitzaren erabileraren taula" caption="Erakunde baten LLM access arauak LAMB 0.8 bertsioan, irakasle bakoitzaren erabilerarekin." >}}

## Zer zenbatzen den {#what-is-accounted-for}

Erakundearen administratzaileak irakasle bakoitzeko ikusten ditu kuota, irakasleak konprometitu duena (**Committed**: poltsak, gehi gakoa hartu duten ikasleen guztizkoak) eta benetan erabilitako tokenak. Irakasleak ikasle bakoitzaren erabilera ikusten du uneko denbora-tartean eta guztira, baita ukatutako eskaerak ere.

Gakoa hartu aurretik, ikasleak irakurtzen du zer erregistratzen den. LAMBekin batera datorren konfigurazioarekin, atebidearen datu-baseak eskaera bakoitzaren ordua, eredua eta token kopurua erregistratzen ditu, ikaslearekin lotuta irakasleak haren erabilera ikus dezan, eta ez promptetako edo erantzunetako testua. Eredua kanpoko hornitzaile batean exekutatzen bada, hornitzaile horrek testua jasotzen du instituzioaren kontuaren bidez, ikaslearen izenik gabe. Atebidearen operadorearen erregistroak instituzioaren beraren politiken mende daude. [Pribatutasuna, DBEO eta instituzioaren kontrola](/eu/privacy/) orriak LAMBen gainerakoa azaltzen du.

## Zer hartzen duen 0.8 bertsioak, eta bere mugak {#what-08-covers-and-its-limits}

- Arau hauek **LLM access** jarduerak gobernatzen dituzte: ikasleen tresna propioetarako gako pertsonalak. Txat-jarduerek eta fitxategien ebaluazioko jarduerek erakundearen laguntzaileak exekutatzen dituzte erakundearen eredu-hornitzailearen bidez, eta haien erabilera ez da kuota horien kontura zenbatzen.
- **Muga irmo batek poltsa bat behar du.** 0.8 bertsioan, bere gakoa ordezten duen ikasle batek guztizko berri bat hasten du, eta ikasle bakoitzeko guztizkoa geroago igotzen duen irakaslea ez da berriro egiaztatzen bere kuotaren aurka. Jarduera-poltsa batek bakarrik mugatzen du jarduera batek erabil dezakeena.
- **Jarduera ixteak eteten du sarbidea.** 0.8 bertsioan, blokeatutako ikasle batek bere gakoa ordeztu dezake oraindik, eta ikastaroa uzten duen ikasle batek bere gakoa gordetzen du irakasleak baliogabetu arte edo jarduera itxi arte.
- Atebidea instantzia bakar gisa probatu da; karga edo erabilgarritasuna dela-eta hainbat instantzia exekutatzea ez da oraindik probatu.

Gobernantza bera diseinatzen ari gara LAMBen laguntzaileetarako eta LAMB LEGATUSerako, eredu bakoitzeko aurrekontuak gehituz.

## Hasi {#start}

- **Erakundeetako administratzaileak eta irakasleak:** [eman ikasleei ereduetarako sarbidea zuen arauen arabera](/eu/guides/0.8/llm-access/), urratsez urrats, pantaila guztiekin.
- **Sistema-operadoreak:** atebidearen [instalazio-oharrak](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) LAMBen biltegian, eta [planifikatu kudeatutako zerbitzua](/eu/institutions/operations/).
- **Estrategia bat planifikatzen ari diren instituzioak:** LAMB taldeak [AA gobernantzari buruzko aholkularitza](/eu/contact/#consultancy) eskaintzen du.
