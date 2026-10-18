---
title: Lan egin LAMB LEGATUSekin
description: Erabili LAMBek irakasleentzat dakarren agente integratua laguntzaileak eraiki, hobetu eta probatzeko, ezer aldatu aurretik zuk onartuta.
translationKey: v08-legatus
weight: 3
aliases: [/guides/legatus/]
---

**Irakasleentzat.** LAMB LEGATUS LAMBek irakasleentzat dakarren agente integratua da. Zuk hizkuntza arruntean deskribatzen duzu zer nahi duzun, eta hark laguntzen dizu laguntzaileak sortzen eta hobetzen, ezagutza-baseekin eta errubrikekin lan egiten, probak idazten eta exekutatzen, eta LAMBen barruan bidea aurkitzen. Zure izenean jarduten du, eta erabakiak zureak dira: zure lanean egindako aldaketak zure onarpenaren zain geratzen dira. Izena erromatar legatusetik dator, Senatuaren izenean jarduten baitzuen.

Pantaila-argazkietan LAMB 0.8 ageri da, 2026ko urriaren 17an, eduki sintetikoarekin eta tokiko eredu batekin. Zure erakundeak beste eredu bat erabil dezake.

## Ireki {#open-it}

Aukeratu goiko barrako **LAMB LEGATUS** botoi urdin iluna, zure izenaren ondoan. Panel bat irekitzen da lantzen ari zaren orriaren ondoan, eta horrela LAMB nola aldatzen den ikus dezakezu hitz egin ahala. Telefono batean, panelak pantaila osoa betetzen du eta **Back to LAMB** botoia du.

Panelaren goiburuan **New conversation**, **History** eta **Ikaskuntza-eszenatokiak** daude. Ikaskuntza-eszenatokiak deskribatu badituzu (zure publikoa, helburua eta mugak), elkarrizketa berri batek lehenik zein erabili galdetzen du. **History** atalak gordetako elkarrizketak zerrendatzen ditu, bilatu eta berriro hasi ahal izan ditzazun.

{{< capture src="/images/guides/legatus-welcome.png" alt="LAMB LEGATUS panela irekita Ikaskuntza Laguntzaileak zerrendaren ondoan, ongietorri-mezuarekin" caption="LAMB LEGATUSekin elkarrizketa berri bat Ikaskuntza Laguntzaileak orriaren ondoan, LAMB 0.8, 2026ko urriaren 17a." >}}

## Probatzeko lau gauza {#four-things-to-try}

1. **Sortu laguntzaile bat.** "Sortu Stats Tutor izeneko laguntzaile bat lehen mailako ikasleentzat, nire Statistics notes ezagutza-basetik bakarrik erantzuten duena." LAMB LEGATUSek laguntzailea proposatzen du eta **Create** botoia duen txartel bat erakusten du.
2. **Hobetu haren jarraibideak.** "Aldatu Stats Tutor-en jarraibideak, ebazpen osoen ordez pistak eman ditzan." Txartelak dio jarraibideak eguneratuko direla, eta **Approve**, **Edit proposal** eta **Cancel** eskaintzen ditu.
3. **Probatu.** "Sortu hiru proba-kasu Stats Tutor-entzat eta esadazu zein erantzunek ez dituzten apunteak kontuan hartzen." Kasuak proposatzen ditu, ados zaudenean gordetzen ditu, eta exekutatu eta ebalua ditzake. Probak gordetzeak eta exekutatzeak ez du onarpen-txartelik behar.
4. **Erabili zure Moodle ikastaroa.** Zure erakundeak Moodle konektorea gaitu badu eta zuk zure kontua konektatu baduzu: "Sortu Unit 1 readings izeneko ezagutza-base bat nire Moodle ikastaroko Readings karpetatik." Ikusi [Konektatu LAMB eta Moodle](/eu/guides/0.8/moodle/).

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="LAMB LEGATUSen onarpen-txartela, laguntzaile baten jarraibideak eguneratzeko" caption="Laguntzaile baten jarraibideak eguneratzeko proposamen bat, onarpenaren zain. Oraindik ez da ezer aldatu." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="LAMB LEGATUSek gordetako hiru proba-kasu, laguntzailearen Tests fitxan erakutsiak" caption="Irakasleak proposatutako hiru kasuak gordetzeko erantzun ondoren, LAMB LEGATUSek onarpen-txartelik gabe gorde zituen eta Tests fitxa ireki zuen. Probak ez dira oraindik exekutatu." >}}

Ondoren, egiaztatu emaitza zuk zeuk: ireki laguntzailea, txateatu harekin eta irakurri [proben emaitzak](/eu/guides/0.8/testing/).

## Nola funtzionatzen duten onarpenek, eta zergatik {#how-approvals-work-and-why}

LAMB LEGATUSek askatasunez irakurtzen du, baina zure lana aldatu aurretik galdetu egiten du. Laguntzaile bat sortzeak, eguneratzeak, argitaratzeak, argitalpenetik kentzeak edo ezabatzeak, ezagutza-base, errubrika, txantiloi edo ikaskuntza-eszenatoki bat aldatzeak, eta Moodleko inportazio edo idazketa orok onarpen-txartel bat erakusten dute lehenik.

Txartelak funtsezko eremuak erakusten ditu eta, zure erakundeak eredu txiki eta azkar bat badu, zer gertatuko den esaten duen esaldi argi bat. Inportazio batean, iturria, helmuga eta fitxategi bakoitza zerrendatzen ditu. Hauek egin ditzakezu:

- **Approve** (edo **Create**, edo **Create and import**), txartelak erakusten duena zehazki exekutatzeko;
- **Edit proposal**, eta deskribatu zer aldatu;
- **Cancel**.

Elkarrizketan bai edo ez idazteak ere balio du. Proposamen bat zain dagoen bitartean beste zerbait eskatzen baduzu, LAMB LEGATUSek esaten du proposamena oraindik zain dagoela, eta ez du beste ezer egiten txanda horretan. Proposamen bat berrikusten badu, txartel berri bat agertzen da: onartu ikusten duzun txartela, ez espero zenuena. Moodle konektorea gaituta dagoen lekuetan, markatu **Modu aurreratua** Zure Moodle orrian, txartel bakoitzean komando zehatza eta konfigurazio berri osoa ikusteko.

Ekintza hauek txartelik gabe exekutatzen dira: irakurtzea, laguntzaile batekin txateatzea hura egiaztatzeko, probak gehitzea, exekutatzea eta ebaluatzea, errubrika bat sortzea, LAMBeko orri bat zuretzat irekitzea, eta Moodle irakurtzea. Orri bat irekitzeak ez du inoiz betetzen ezta bidaltzen ere.

Arrazoia erantzukizuna da. Zu zara zure ikasleek erabiltzen dutenaren arduraduna; beraz, zuk onartzen duzun aldaketa da LAMBek egiten duen aldaketa, eta gertatu aurretik ikus dezakezu.

## Zer ezin duen egin {#what-it-cannot-do}

- Zure ordenagailuko fitxategiak hautatu edo igo. Horren ordez, Ezagutza Baseak pantailan gidatzen zaitu.
- Zure LMSan ikastaroko jarduera konfiguratu. Hori zuk egiten duzun urratsa da oraindik, [LTI gidan](/eu/guides/0.8/lti/) deskribatua.
- Zure erakundearen ereduak, hornitzaileak edo ezarpenak aldatu.
- Multzoka kalifikatu. Moodlen kalifikazio bat gordetzea desaktibatuta dago zure erakundeak gaitzen ez badu, eta orduan ere ikasle bat eta onarpen bat aldi bakoitzean. Foroetan argitaratzea ere desaktibatuta dago gaitzen ez bada.
- Zure Moodle tokena eskatu, edo Moodleko edukiko testua jarraibide edo onarpen gisa hartu.
- Hizkuntza aldatu elkarrizketaren erdian. Elkarrizketak hasi zenean finkatutako hizkuntza gordetzen du: zure interfazearen hizkuntza (ingelesa, gaztelania, katalana edo euskara), edo zure erakundeak hizkuntza horretarako ezarri duen ordezko hizkuntza. Hasi elkarrizketa berri bat hizkuntza aldatzeko.

## Zein eredu, eta zer datu iristen zaizkion {#which-model-and-what-data-reaches-it}

Zure erakundeko administratzaileak aukeratzen du eredua **Erakunde Admin > Settings > API** atalean, **LAMB LEGATUS** sekzioan. Erakundearen eredu lehenetsia izan daiteke, edo OpenAI-rekin bateragarria den eredu zehatz bat edo Ollama eredu bat. Eredurik konfiguratuta ez badago, LAMB LEGATUS ez dago erabilgarri, beste hornitzaile batera aldatu beharrean. Irakasleek ezin dute hau aldatu; galdetu zure administratzaileari.

{{< capture src="/images/guides/legatus-settings.png" alt="Erakundearen LAMB LEGATUS ezarpenak: hornitzailea, eredua, ezagutza-paketea, eredu laguntzailea eta hizkuntza-euskarria" caption="Erakundearen ezarpenetako LAMB LEGATUS sekzioa, erakundeko administratzaileek bakarrik ikusten dutena. Sekzio honetara moztua. Eredua adibide bat da." >}}

Ereduak elkarrizketa osoa jasotzen du: zure mezuak eta LAMB LEGATUSek zuretzat irakurtzen duena, hala nola laguntzaileen jarraibideak, ezagutza-baseetako pasarteak, proben sarrerak eta erantzunak, zure ikasleen gordetako txatak jarduerari buruz galdetzen baduzu, eta Moodleko izenak, mezuak eta kalifikazioak. Eredu txiki eta azkar bereizi batek, zure erakundeak ezartzen badu, onarpenaren esaldia idazten du proposatutako ekintzaren xehetasunetatik abiatuta, eta LAMB LEGATUSek inportatu gabe irekitzen dituen Moodle dokumentuak irakurtzen ditu. Eredu txikirik gabe, txartelak ez du hizkuntza arrunteko esaldirik, eta dokumentuak LAMB LEGATUSen ereduak irakurtzen ditu. Hornitzaileen kredentzialak ez zaizkio inoiz bidaltzen ereduari. Tokiko hornitzaile batekin, datu horiek zure instituzioaren instalazioetan geratzen dira; kanpoan ostatatutako hornitzaile batekin, handik ateratzen dira.

Elkarrizketak zureak dira eta **History** atalean gordetzen dira. Bat ezabatzeak artxibatu egiten du, ez du suntsitzen, eta zerbitzariak saio bakoitzaren erregistro bat ere gordetzen du. Galdetu zure administratzaileari zenbat denboraz gordetzen diren. Ikusi baita [pribatutasuna](/eu/privacy/).

**Espero den emaitza:** LAMB LEGATUS ireki dezakezu, laguntzaile bat hobetzeko eta probatzeko eska diezaiokezu, onarpen-txartel bakoitza irakur dezakezu ezer aldatu aurretik, eta badakizu zure elkarrizketa zein eredutara iristen den.
