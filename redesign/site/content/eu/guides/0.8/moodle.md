---
title: Konektatu LAMB eta Moodle
description: Gehitu LAMB jarduerak Moodle ikastaro batean LTI 1.1 bidez, eta konektatu irakasle baten Moodle kontua, LAMB LEGATUSek ikastaroa irakurri eta materialak inportatu ahal izan ditzan.
translationKey: v08-moodle
weight: 5
aliases: [/guides/moodle/]
---

**LMS administratzaileentzat eta irakasleentzat.** Gida honek bi zati independente ditu. 1. zatiak LAMB jarduerak eta laguntzaileak Moodle ikastaro batean jartzen ditu. 2. zatiak irakasle bati bere Moodle kontua konektatzeko aukera ematen dio, LAMB LEGATUSek (LAMBek irakasleentzat dakarren agente integratuak) irakasle horren ikastaroak irakurri eta ikastaroko materialak ezagutza-base batera inportatu ahal izan ditzan.

**LAMBek ez du Moodle pluginik behar.** 1. zatiak Moodleren External tool estandarra erabiltzen du, LTI 1.1 bidez. 2. zatiak Moodleren mugikorreko aplikaziorako web-zerbitzu estandarrak erabiltzen ditu. Ez da ezer instalatzen Moodle zerbitzarian: Moodlen egiten diren aldaketa bakarrak behean deskribatzen diren administrazio-ezarpen estandarrak dira.

Pantaila-argazkietan LAMB 0.8 eta erakustaldiko Moodle 4.5 gune bat ageri dira, 2026ko urriaren 17an ateratakoak, ikastaro eta kontu sintetikoekin. `localhost` bezalako helbideak tokiko probetako balioak dira: erabili zure instituzioaren helbide publikoak.

## 1. zatia. LAMB Moodle ikastaro batean (LTI 1.1) {#part-1-lamb-in-a-moodle-course-lti-11}

LAMBek hiru LTI sarbide-bide eskaintzen ditu. Bakoitzak bere abiarazte-URLa eta kredentzialak ditu, eta ez dira elkarren ordezkagarriak. [Aukeratu zure LMSaren sarbide-bidea](/eu/guides/0.8/lti/) gidak azaltzen du noiz erabili bakoitza.

| Sarbide-bidea | Tresnaren URLaren amaiera | Kontsumitzaile-gakoa | Sekretu partekatua |
|---|---|---|---|
| LAMBen jarduera-tresna (txata, fitxategien ebaluazioa, LLM sarbidea) | `/lamb/v1/lti/launch` | Instalazioaren gakoa, LAMBen LTI Settings atalean ageri dena | LTI Settings atal berean ezartzen da |
| Argitaratutako laguntzaile bakarra | `/lamb/v1/lti_users/lti` | Laguntzailearen beraren gakoa, haren LTI argitaratze-xehetasunetan ageri dena | Sekretu bakarra argitaratutako laguntzaile guztientzat, zerbitzariaren administratzaileak gordea |
| Hezitzaileek LAMB Creator irekitzen dute | `/lamb/v1/lti_creator/launch` | Erakundearen gakoa | Erakundearen sekretua |

LAMBek abiarazte bakoitzaren sinadura egiaztatzen du abiaraztea iritsi den helbidearen aurka. Horregatik, Moodleko Tool URL eremuak zure LAMB zerbitzariaren helbide publiko zehatza izan behar du, zure erabiltzaileek ikusten duten `https` eskema eta ostalari-izen berarekin.

Hurrengo urratsek LAMBen jarduera-tresna behin konfiguratzen dute Moodle gune osoarentzat. Ondoren, irakasleek edozein ikastarotan gehi dezakete.

### Konfiguratu tresna (LAMB eta Moodle administratzaileak) {#set-up-the-tool-lamb-and-moodle-administrators}

1. LAMBen, sistema-administratzaile batek **Administrazioa** aukeratzen du goiko barran, eta ondoren **LTI Settings** fitxa. **LMS Setup Information** atalean **Launch URL** eta **Consumer Key** ageri dira, bakoitza bere Copy botoiarekin. Idatzi sekretua **OAuth Shared Secret** eremuan eta aukeratu **Save LTI Configuration**. Kontsumitzaile-gakoa aldatzen duzunean, idatzi berriro sekretu partekatua gordetze berean.
2. Moodlen, joan **Site administration > Plugins > Activity modules > External tool > Manage tools** atalera eta jarraitu **configure a tool manually** estekari.
3. Bete **Tool name** (adibidez, "LAMB jarduerak"), **Tool URL** (1. urratseko Launch URL), **LTI version** "LTI 1.0/1.1", **Consumer key** eta **Shared secret**.
4. Ezarri **Tool configuration usage** eremuan **Show in activity chooser and as a preconfigured tool**, irakasleek beren ikastaroan aurki dezaten.
5. Aukeratu **Default launch container** bat. Erakustaldian **Existing window** erabiltzen da. Probatu aukeratzen duzun edukiontzia irakasle-kontu batekin eta ikasle-kontu batekin, ikastaroek erabili aurretik.
6. **Privacy** atalean:
   - **Share launcher's email with tool: Always.** Irakasle batek lehen aldiz abiarazten duenean, LAMBek posta elektroniko horren bidez aurkitzen du irakaslearen LAMB kontua. Hori gabe, LAMB kontuan posta elektroniko eta pasahitz arruntak erabiltzen dituen irakasleak orri bat ikusten du, administratzailearekin harremanetan jartzeko eskatzen diona.
   - **Share launcher's name with tool: Always.** LAMBek bistaratzeko izen gisa erabiltzen du.
   - **Accept grades from the tool.** File Evaluation jarduerarako bakarrik behar da; jarduera horrek kalifikazioak Moodlera itzultzen ditu irakasleak sinkronizatzen dituenean. Aukeratu **Always**, edo **As specified in Deep Linking definition or Delegate to teacher**, irakasle bakoitzak jardueran erabaki dezan. Moodlek kalifikazioak itzultzeko xehetasunak aukera hau aktibatuta dagoenean bakarrik bidaltzen ditu.
7. Utzi **Services** atala dagoen bezala eta sakatu **Save changes**.

{{< capture src="/images/guides/moodle-tool-config.png" alt="Moodleren External tool konfigurazio-formularioa, LAMBen jarduera-tresnarako beteta" caption="Moodle 4.5 gunearen administrazioa erakustaldiko gune batean, 2026ko urriaren 17a. Moodlek sekretu partekatua ezkutatzen du. Tool URL eremua tokiko probetako helbide bat da." >}}

### Gehitu jarduera bat ikastaro batean (irakaslea) {#add-an-activity-to-a-course-teacher}

1. Moodle ikastaroan, aktibatu **Edit mode** eta aukeratu **Add an activity or resource**. Tresna administratzaileak eman dion izenarekin agertzen da.
2. Eman izen bat jarduerari. File Evaluation jardueran, administratzaileak eskuordetzeko aukera hautatu badu, ireki **Grade** atala eta markatu **Allow LAMB activities to add grades in the gradebook** (Moodlek tresnaren izena erakusten du hemen). Ondoren, aukeratu **Save and display**.

{{< capture src="/images/guides/moodle-activity-chooser.png" alt="Moodleren jarduera-hautatzailea, LAMB jarduerak lauzarekin" caption="Gune osorako tresna irakasle baten jarduera-hautatzailean agertzen da, LAMB jarduerak izenarekin. Erakustaldiko ikastaroa, 2026ko urriaren 17a." >}}

{{< capture src="/images/guides/moodle-add-activity.png" alt="Moodleren External tool berriaren formularioa, Research Methods helper jarduera-izenarekin" caption="Jarduera berriari izena ematen erakustaldiko ikastaroan, 2026ko urriaren 17a." >}}

3. Irakasle batek lehen aldiz abiarazten duenean, ikastaro horretarako **LAMB Activity Setup** irekitzen da. Aukeratu jarduera mota: **AI Chat Activity** edo **File Evaluation**. **LLM access** ere agertzen da zure erakundeak ikasleentzako eredu-sarbidea konfiguratu duenean.
4. Hautatu ikasleek erabil ditzaketen laguntzaileak. Argitaratutako laguntzaileak bakarrik agertzen dira hemen; beraz, argitaratu itzazu lehenik LAMBen. File Evaluation jardueran, hautatutako laguntzaile bakoitzak errubrika bat behar du (RAG prozesatzailea "Rubric RAG", laguntzailea sortzean aukeratua), eta jarduerak izenburua eta epemuga behar ditu.
5. Erabaki **Allow instructors to review chat transcripts** aukera. Aktibatzen baduzu, irakasleek ikasleen elkarrizketak irakur ditzakete ikasle bakoitzaren izenarekin, eta ikasleei txata lehen aldiz irekitzen dutenean jakinarazten zaie. Aukera hau ezin da aldatu konfiguratu ondoren.
6. Aukeratu **Save & Launch**. Jardueraren irakasle-ikuspegira iristen zara, bere ikasleekin, txatekin, laguntzaileekin eta sarbide-erregistroarekin.

{{< capture src="/images/guides/moodle-teacher-setup-filled.png" alt="LAMB Activity Setup orria, AI Chat Activity hautatuta eta laguntzaile bat markatuta" caption="Irakaslearen lehen abiaraztea Moodletik LAMB 0.8ra, 2026ko urriaren 17a. LLM access ez da eskaintzen, erakustaldiko erakundeak ez baitu konfiguratu." >}}

{{< capture src="/images/guides/moodle-teacher-after-setup.png" alt="Konfiguratutako txat-jarduera baten LAMB irakasle-ikuspegia, ikaslerik gabe" caption="Irakasle-ikuspegia konfiguratu eta berehala. Transkripzioen berrikuspena desaktibatuta utzi da, eta orriak dio ezin dela aldatu sortu ondoren." >}}

7. Probatu ikasle gisa erakustaldiko kontu batekin. Irakasle batek konfigurazioa osatu aurretik, ikasleak itxaron-orri bat ikusten du. Konfiguratu ondoren, ikasleak jarduera irekitzen du irakasleak hautatutako laguntzaileekin. File Evaluation jardueran, kalifikazioak ez dira berez iristen Moodlera: berrikusi ondoren, aukeratu **Notak Moodle-ra Bidali** irakasle-ikuspegian, eta egiaztatu kalifikazioa Moodleren kalifikazio-liburura iristen dela.

Irakasle batek LAMB kontua izan behar du dagoeneko jarduera bat konfiguratzeko. LAMBek Moodlek bidaltzen duen posta elektronikoaren bidez aurkitzen du, edo irakasleak Moodletik Creator sarbidea lehen aldiz erabili zuenean sortu zen kontuaren bidez.

### Beste bi bideak, laburki {#the-other-two-paths-in-brief}

- **Argitaratutako laguntzaile bakarra.** Argitaratu laguntzailea LAMBen. Haren xehetasun-ikuspegian **LTI Argitaratze Xehetasunak** agertzen dira, Tresnaren URLarekin eta kontsumitzaile-gakoarekin. Sekretuaren eremuan "ASK ADMIN FOR THE SECRET" irakurtzen da: zerbitzariaren administratzaileak sekretu bakarra ezartzen du argitaratutako laguntzaile guztientzat, eta lehenetsitako edozein balio bere sekretuarekin ordeztu beharko luke. Moodlen ez da beharrezkoa posta elektronikoa partekatzea; partekatu izena, ikasleak izen irakurgarri batekin ager daitezen.
- **Hezitzaileek Creator irekitzen dute.** Erakundeko administratzaile batek **Erakunde Admin > Settings > LTI Creator** irekitzen du, **Enable LTI Creator Access** markatzen du eta kontsumitzaile-gakoa eta sekretua ezartzen ditu. Gakoak bakarra izan behar du erakunde guztien artean. Erabiltzaile berriak erakunde horretako kide gisa iristen dira. Ez da beharrezkoa posta elektronikoa partekatzea; partekatu izena, bistaratzeko izen irakurgarri bat izateko.

**Espero den emaitza:** irakasle batek LAMB tresna gehitzen du jarduera-hautatzailetik, lehen abiaraztean konfigurazioa osatzen du eta irakasle-ikuspegira iristen da, eta erakustaldiko ikasle batek konfiguratutako jarduera ireki dezake.

## 2. zatia. Konektatu irakasle baten Moodle kontua LAMB LEGATUSentzat {#part-2-connect-a-teachers-moodle-account-for-lamb-legatus}

Konexio honekin, LAMB LEGATUSek irakasle batek ematen dituen ikastaroak irakur ditzake eta, irakasleak onartu ondoren, ikastaroko materialak LAMBeko ezagutza-base batera inportatu. Irakasle bakoitzak bere kontua konektatzen du. LAMBek Moodle kontu horrek dagoeneko egin dezakeena bakarrik egin dezake.

### Zer behar du Moodlek (ezarpen estandarrak bakarrik) {#what-moodle-needs-standard-settings-only}

- **Enable web services for mobile devices** aktibatuta dago.
- QR bidearentzat: **QR code access** eremuan **QR code with automatic login** ezarrita dago. Moodlek aukera hau HTTPS bidez zerbitzatzen den gune batean bakarrik eskaintzen du. Moodlek QR bidezko saio-hasiera ukatzen die guneko administratzaileei eta gunearen konfigurazioa alda dezaketen beste erabiltzaileei; kontu horiek token-eremua erabiltzen dute horren ordez.
- Erabiltzaileek mugikorreko tokenak sor ditzakete. Moodle estandarrean, autentifikatutako erabiltzailearen rolak badu dagoeneko baimen hori. Ez da rol gehigarririk behar.
- Ikastaro osoko informazioa irakurtzeko, irakasleak irakasle, editatu gabeko irakasle edo kudeatzaile rola du ikastaro horretan.

LAMB zerbitzariaren administratzaileak konektorearen enkriptatze-gakoa ere ezarri behar du, `LAMB_MOODLE_ENCRYPTION_KEY`, zerbitzariaren ingurunean: behin sortutako Fernet gako bat, [Moodle konektorearen instalazio-oharretan](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/moodle-connector.md) deskribatzen den bezala, eta datu-basetik kanpo babeskopia egina. Hori gabe, konexioak huts egiten du "The administrator must configure LAMB_MOODLE_ENCRYPTION_KEY" mezuarekin. LAMBek gako horrekin enkriptatzen du gordetako Moodle token bakoitza. Gakoa galtzen edo aldatzen bada, irakasle guztiek berriro konektatu beharko dute.

### Gaitu konektorea (erakundeko administratzailea) {#enable-the-connector-organization-administrator}

1. Ireki **Erakunde Admin > Settings > Moodle**.
2. Markatu **Enable Moodle connector**.
3. Idatzi **Allowed Moodle base URL**: helbide bakarra, `http` edo `https`, erabiltzaile-izenik, kontsultarik edo zatirik gabe.
4. Aukeratu **Access mode**. **Read only** aukerak irakurtzea eta onartutako inportazioak baimentzen ditu. **Allow selected writes** aukerarekin beste bi lauki gaitzen dira: **Allow forum replies and new discussions** eta **Allow reviewed grade proposals to be saved**. Kalifikazioak idaztea desaktibatuta dago lehenespenez.
5. Irakurri orriko informazio-testua (bertako "AAC driver model" LAMB LEGATUSek erabiltzen duen eredua da), eta aukeratu **Save organization settings**.

{{< capture src="/images/guides/connector-org-settings.png" alt="Erakundearen Moodle ezarpenak, konektorea irakurtzeko soilik moduan gaituta" caption="Erakunde Admin > Settings > Moodle LAMB 0.8n, 2026ko urriaren 17a, irakurtzeko soilik moduan eta idazteko bi aukerak desaktibatuta." >}}

### Konektatu zure kontua (irakaslea) {#connect-your-account-teacher}

1. Konektorea gaitu ondoren, **Moodle** esteka bat agertzen da LAMBen goiko barran. **Zure Moodle** irekitzen du.
2. QR kode batekin: Moodlen, ireki zure profila, erakutsi mugikorreko saio-hasiera automatikorako QR kodea eta egin pantaila-argazki bat. Hiru minutu inguruko epean, igo ezazu **QR kodearen irudia** eremuan, aukeratu zure ordenagailua **Zure ordenagailua** eremuan (macOS, Windows PowerShell edo Linux) eta aukeratu **Prestatu komando lokala**. LAMBek irudia irakurri eta komando bat eraikitzen du soilik; oraindik ez da ezer trukatzen ezta gordetzen ere.
3. Exekutatu komando hori ordenagailu eta sare bereko terminal batean. Komandoak Moodleren QR bidezko saio-hasierako eskaera estandarra bidaltzen du zure tokena lortzeko, Moodle aplikazio gisa identifikatuz, Moodlek eskaera hori aplikaziotik bakarrik onartzen baitu, eta tokena arbelera kopiatzen du. Zure instituzioak hori baimentzen ez badu, erabili token-eremua horren ordez.
4. Itsatsi tokena **Mugikorreko zerbitzuaren tokena** eremuan eta aukeratu **Konektatu Moodle**. Zure kontuaren mugikorreko zerbitzuko token bat ere itsats dezakezu hemen, lehendik baduzu.
5. LAMBek egiaztatzen du tokenak baimendutako Moodle gunean funtzionatzen duela, eta ondoren enkriptatuta gordetzen du zure konexioarekin. Ez du egiaztatzen Moodle kontua zurea dela; beraz, itsatsi zure kontuko token bat bakarrik.

Ez itsatsi inoiz Moodle token bat LAMB LEGATUSekin duzun elkarrizketa batean. LAMB LEGATUSek ez du tokenik eskatzen.

{{< capture src="/images/guides/connector-connect.png" alt="Zure Moodle orria konektatu aurretik, QR igoerarekin, ordenagailuaren aukerarekin eta token-eremuarekin" caption="Zure Moodle konektatu aurretik, 2026ko urriaren 17a. Erakustaldiko Moodlek ez du HTTPSrik erabiltzen, eta ezin izan da QR bidea osatu; hurrengo irudiko konexioa itsatsitako token batekin egin zen." >}}

{{< capture src="/images/guides/connector-connected.png" alt="Zure Moodle orria, konektatutako kontu batekin eta erabiltzailea irakasle den ikastaro batekin" caption="Konektatu ondoren: Moodle gunea, haren bertsioa, kontua eta ikastaroak, irakaslearen rolaren arabera taldekatuta." >}}

### Zer egin dezake orduan LAMB LEGATUSek {#what-lamb-legatus-can-then-do}

Ireki **LAMB LEGATUS** goiko barratik eta galdetu zure ikastaroari buruz. Oinarrietarako, ikusi [Lan egin LAMB LEGATUSekin](/eu/guides/0.8/legatus/).

- **Galdetu gabe:** ikastaroak, zereginak, foroak, kalifikazioak, galdetegiak, egutegia eta antzeko informazioa irakurri, ikastaro osoko irakurketak irakasle zaren ikastaroetara mugatuta; ikastaro horietako foroetako mezu berriak bildu; ikastaroko fitxategi, Page edo Book bat irakurri inportatu gabe.
- **Zuk berrikusteko zirriborroak:** bidalketa baten gaineko atzeraelikadura, proposatutako kalifikazio eta justifikazio batekin. Zirriborro batek ez du ezer aldatzen Moodlen.
- **Zuk onartu ondoren, ekintza bakoitzeko txartel bat:** File, Folder, Page edo Book bat inportatu ezagutza-base berri edo lehendik dagoen batera. Inportazioek onarpena behar dute irakurtzeko soilik moduan ere. Txartelak iturria, helmuga, fitxategi bakoitza eta zatitze-ezarpenak zerrendatzen ditu.
- **Erakundeak idaztea baimentzen badu bakarrik, eta aldi bakoitzean onarpenarekin:** foro batean argitaratu edo erantzun, edo ikasle baten kalifikazioa bere justifikazioarekin gorde, bidalketa ikusi ondoren. Idaztea baimenduta ez dagoenean, LAMB LEGATUSek zirriborro bat eskaintzen dizu, zuk zeuk argitara dezazun.

Markatu **Modu aurreratua** Zure Moodle orrian, onarpen-txartel bakoitzean azalpenaz gain komando zehatza ere ikusteko. Zure elkarrizketa guztiei aplikatzen zaie.

{{< capture src="/images/guides/connector-import-approval.png" alt="LAMB LEGATUSen onarpen-txartela, Moodle karpeta batetik ezagutza-base bat sortzeko" caption="Onarpenaren zain dagoen inportazio bat, 2026ko urriaren 17a: iturburu-karpeta, ezagutza-base berria, bi fitxategi, zatitze-ezarpenak, eta Create and import, Edit proposal edo Cancel." >}}

### Zer iristen zaio eredu-hornitzaileari {#what-reaches-the-model-provider}

LAMB LEGATUSek irakurtzen dituen ikasleen izenak, mezuak eta kalifikazioak erakundeak konfiguratutako eredu-hornitzaileari iristen zaizkio. Proposatutako ekintza baten xehetasunak erakundearen eredu txiki eta azkarrari ere iristen zaizkio, eta eredu horrek idazten du onarpenaren azalpena. LAMB LEGATUSek ikastaroko fitxategi, Page edo Book bat inportatu gabe irakurtzen duenean, dokumentu horren testu osoa erakundearen eredu txiki eta azkarrera doa, edo LAMB LEGATUSen eredura, eredu txikirik ezarrita ez badago; LAMB LEGATUSek berak ikuspegi orokor bat eta eskatzen dituen pasarteak bakarrik jasotzen ditu. Tokiko hornitzaile batekin, datu horiek zure instalazioetan geratzen dira; kanpoan ostatatutako hornitzaile batekin, handik ateratzen dira. Planifikatu hau zure datuak babesteko ordezkariarekin. Ikusi baita [pribatutasuna](/eu/privacy/).

### Deskonektatu {#disconnect}

1. **Zure Moodle** orrian, aukeratu **Deskonektatu Moodle**. LAMBek gordetako tokena ezabatzen du eta oraindik zain dagoen edozein onarpen bertan behera uzten du.
2. Deskonektatzeak ez du tokena baliogabetzen Moodlen. Baliogabetzeko, aldatu zure Moodle pasahitza eta utzi **Log out of all web apps** markatuta (horrek zure kontuaren mugikorreko eta web-zerbitzuetako saio guztiak ixten ditu), edo eskatu zure Moodle administratzaileari tokena ezabatzeko **Site administration > Server > Web services > Manage tokens** atalean.

Administratzaileak baimendutako Moodle helbidea aldatzen badu, zure konexioak "Gordetako konexioa ez dago aktibo" erakusten du. Deskonektatu, eta konektatu berriro.

**Espero den emaitza:** Zure Moodle orriak **Konektatuta** erakusten du zure kontuarekin eta zure ikastaroekin, LAMB LEGATUSek ematen duzun ikastaro bat deskriba dezake, eta inportazio batek ezagutza-base bat sortzen du zuk haren txartela onartu ondoren bakarrik.
