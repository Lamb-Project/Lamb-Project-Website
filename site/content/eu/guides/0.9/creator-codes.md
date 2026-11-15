---
title: "Eman irakasleei beren kontua sortzaile-kode batekin"
description: "Sortu sortzaile-kodeak zure erakunderako eta idatzi irakasleek irakurtzen duten testua. Irakasle gisa, sartu kode bat LAMB jarduera bat LMStik lehen aldiz irekitzean, eta mugitu jardueraren eta LAMB Creatorren artean."
translationKey: v09-creator-codes
weight: 1
---

**Erakundeko administratzaileentzat eta irakasleentzat.** LAMB 0.9 bertsioan, LAMB jarduera bat LMStik irekitzen duen eta LAMB Creatorren konturik ez duen irakasleak une horretan bertan sor dezake kontua, bere erakundearen **sortzaile-kode** batekin. Administratzaileak kodeak sortzen eta banatzen ditu. Irakasleak bat idazten du, behin bakarrik.

Pantaila-argazkiak benetakoak dira, 0.9 hautagai-bertsiokoak, asmatutako erakunde, pertsona eta ikastaroarekin. Interfazea ingelesez erakusten dute; testuak LAMB euskaraz erabiltzean ikusten dituzun izenak darabiltza. [Pantaila-argazkiei buruz](#screenshots).

## Hasi aurretik {#before-you-start}

- Zure instituzioak **LAMB 0.9** erabiltzen du eta bere LMSak LAMBen jarduera-tresna du. [Konektatu LAMB eta Moodle](/eu/guides/0.8/moodle/) gidak LTI 1.1 bidezko konfigurazioa erakusten du; [0.9 bertsioaren oharrek](/eu/releases/0.9/#lti-13) LTI 1.3 azaltzen dute.
- Kodeak sistemaren erakundea ez den **erakunde** batenak dira. Sistemaren erakundeak ez du koderik ematen.
- Administratzaileek administratzaile-rola behar dute erakunde horretan. Irakasleek irakasle-rola behar dute LMSko ikastaroan.

Kode batek LMSak irakasle gisa aurkezten duen pertsona bati bakarrik balio dio, eta pertsona horrek jarduera bat irekitzean LAMBek itzultzen duen orrian bakarrik. Ikasle batek ezin du erabili, eta inork ezin du LMStik kanpo erabili. Muga horien barruan, kodea duen edozein irakasle sar daiteke zure erakundean kodea aktibo dagoen bitartean: erabili iraungitze-data, erabilera-muga eta **Desgaitu** botoia kontrolari eusteko.

## Administratzaileak: sortu kode bat {#create-a-code}

1. Hasi saioa LAMB Creatorren eta ireki **Erakunde Admin → Settings → LTI Creator**. Jaitsi **Sortzaile-kodeak** atalera.
2. **Kode berria** atalean, idatzi **Etiketa** bat, adibidez lauhilekoa edo fakultatea. Etiketa zuretzat da: irakasleek ez dute ikusten. Gehitu **Iraungitze-data** bat, **Erabilera-muga** bat, biak edo bat ere ez.

   {{< capture src="/images/guides/0.9/creator-codes-admin-new.png" alt="Oraindik koderik ez duen erakunde baten Creator codes atala: New code formularioa Autumn term 2026 etiketarekin eta 30eko erabilera-mugarekin eta, azpian, konturik gabeko irakasleentzako testua" caption="Udazkeneko lauhilekorako lehen kodea, gehienez hogeita hamar irakaslerentzat. Erakusteko datuak." details="#screenshots" >}}

3. Sakatu **Sortu kodea**. LAMBek behin bakarrik erakusten du kodea: lau karaktereko hiru talde. Sakatu **Kopiatu**, eman kodea zure irakasleei eta gero sakatu **Gorde dut**.
4. Une horretatik aurrera, zerrendak kodearen azken lau karaktereak, egoera, zenbat irakaslek erabili duten eta noiz iraungitzen den erakusten ditu. LAMBek ez du kodea gordetzen; beraz, ezin du berriro erakutsi. Kode bat galtzen bada, sortu beste bat.

   {{< capture src="/images/guides/0.9/creator-codes-admin-list.png" alt="Sortzaile-kodeen zerrenda: Summer school 2027, desgaituta, 10etik 0 erabilera; Autumn term 2026, aktiboa, 30etik 1 erabilera; ohar batek dio lehenengoa desgaitu dela; azpian, erakundearen testua" caption="Irakasle batek udazkeneko kodea erabili du. Udakoa desgaituta dago behar den arte. Erakusteko datuak." details="#screenshots" >}}

**Desgaitu** botoiak berehala gelditzen du kode bat, eta **Gaitu** botoiak berreskuratzen du. Kode bat desgaitzeak ez die eragiten harekin lehendik sortutako kontuei. Data igarota duen kodea **Iraungita** agertzen da; mugara iritsi dena, **Agortuta**.

## Administratzaileak: idatzi irakasleek irakurtzen duten testua {#write-the-text}

Konturik gabe, eta agian koderik gabe, iristen den irakasleak jakin behar du nori eskatu. Pantaila berean, **Konturik gabeko irakasleentzako testua** atalak mezu hori gordetzen du: idatzi **Erakunde honen testua** eremuan eta sakatu **Gorde testua**. **Leheneratu testu lehenetsia** botoiak testu lehenetsira itzultzen du.

Testua non agertzen den LMSa nola konektatuta dagoen araberakoa da:

- **LTI 1.1ekin**, LAMBek ez du irakaslearen erakundea ezagutzen kodea sartu arte; beraz, orriak **instalazioaren testu lehenetsia** erakusten du. Sistemaren administratzaileak idazten du pantaila honetan bertan, sistemaren erakundean. Zure erakundearen testua mezuaren azpian agertzen da zure kode bat desgaituta, iraungita edo agortuta dagoelako baztertzen denean.
- **LTI 1.3rekin**, LMSaren erregistroa erakunde bakarrerako gaituta dagoenean, orriak hasieratik erakusten du erakunde horren testua.

## Irakasleak: sartu kodea {#enter-the-code}

1. Zure ikastaroan, ireki LAMB jarduera. Jardueraren ordez **Set up this activity with LAMB** (konfiguratu jarduera hau LAMBekin) orria jasotzen duzu, zure instituzioaren mezuarekin.

   {{< capture src="/images/guides/0.9/creator-codes-teacher-page.png" alt="Set up this activity with LAMB orria: LMSak irakasle gisa identifikatu zaitu Databases 101 ikastaroan, instituzioaren mezua lauki urdin batean, Creator code eremua eta Create my account and continue botoia" caption="Konturik gabeko irakasleak jarduera irekitzean ikusten duena. Lauki urdina instituzioaren testu propioa da. Erakusteko datuak." details="#screenshots" >}}

2. Idatzi kodea **Creator code** eremuan. Letra larriek, zuriuneek eta marratxoek ez dute axola. Sakatu **Create my account and continue** (sortu nire kontua eta jarraitu).
3. LAMB Creator leiho berean irekitzen da, saioa hasita duzula. Zure izena goian dago, eta zure erakundea haren azpian. Barra batek esaten du zein jardueratatik etorri zaren eta **Itzuli jarduerara** eskaintzen du.

   {{< capture src="/images/guides/0.9/creator-codes-in-creator.png" alt="LAMB Creator, Learning Assistants orria, Robin Vale erabiltzailearentzat Tutorial University: Engineering erakundean; barra batek You came from the activity in Databases 101 dio, Back to the activity botoiarekin" caption="Zuzenean LAMB Creatorren, jarduerara itzultzeko bidearekin. Erakusteko datuak." details="#screenshots" >}}

4. [Sortu laguntzaile bat](/eu/guides/0.8/first-assistant/) eta argitaratu. Jarduera batek gutxienez argitaratutako laguntzaile bat behar du.
5. Sakatu **Itzuli jarduerara**, aukeratu jarduera mota eta laguntzaileak, eta gorde. [Konektatu LAMB eta Moodle](/eu/guides/0.8/moodle/) gidak konfigurazio-orria urratsez urrats azaltzen du.

   {{< capture src="/images/guides/0.9/creator-codes-activity.png" alt="Databases 101 ikastaroaren LAMB Activity Setup orria: Tutorial University: Engineering erakundea, Add an organization with a creator code esteka, Open LAMB Creator botoia, jarduera motak eta argitaratutako laguntzailerik ez dela aurkitu dioen oharra" caption="Jardueran berriro. Argitaratutako laguntzailerik ez dagoen bitartean, orriak hala dio eta LAMB Creator eskaintzen du. Erakusteko datuak." details="#screenshots" >}}

Kodea behin bakarrik eskatzen da. Handik aurrera, LMS beretik jarduera hau edo LAMBen beste edozein jarduera irekitzeak jarduerara eramaten zaitu.

Zure kontuak ez du pasahitzik: LAMBen sartzeko, jarduera bat irekitzen duzu LMStik. Bertsio honetan, kodea eskatzen duen orria ingelesez dago, LAMB edozein hizkuntzatan erabilita ere.

## Kodea baztertzen bada {#if-refused}

Orriak eremua mantentzen du eta zergatia esaten du. Mezuak ingelesez daude.

{{< capture src="/images/guides/0.9/creator-codes-teacher-refused.png" alt="Orri bera mezu gorri batekin: That code is not valid. Check it and try again. Creator code eremua hutsik dago, beste saiakera baterako prest" caption="Existitzen ez den kode bat. Erakusteko datuak." details="#screenshots" >}}

| Mezua | Zer esan nahi duen | Zer egin |
|---|---|---|
| That code is not valid. Check it and try again. | LAMB honetan ez dago horrelako koderik. | Berrikusi karaktereak. Kodeek ez dute inoiz 0, O, 1 edo I karaktererik. |
| This code is no longer active. | Administratzaile batek desgaitu du. | Eskatu indarrean dagoen kode bat. Erakundearen testuak, mezuaren azpian, esaten du nori. |
| This code has expired. | Data igaro da. | Eskatu indarrean dagoen kode bat. |
| This code has reached its limit of uses. | Onartzen zuen adina irakaslek erabili dute. | Eskatu indarrean dagoen kode bat. |
| Too many attempts. Wait a few minutes, then open the activity from your LMS again. | Bost saiakera baztertu dira hamabost minututan. | Itxaron hamabost minutu eta ireki jarduera berriro. |
| You already have an account in this organization. Go back and choose it. | Kodea dagoeneko kide zaren erakunde batena da. | Itzuli atzera eta aukeratu erakunde hori. |
| This code belongs to an organization that your LMS is not connected to. | LTI 1.3rekin, kodeak zure LMSrako gaitutako erakunde batena izan behar du. | Galdetu zure administratzaileari. |
| Your LAMB account in this organization is disabled. | Administratzaile batek zure kontua desgaitu du. | Galdetu zure administratzaileari. |
| Session expired. | Orria hamabost minutu baino gehiago egon da irekita. | Ireki jarduera berriro LMStik. |

## Erakunde bat baino gehiago {#several-organizations}

Irakasle batek LAMB bereko hainbat erakundetan izan dezake kontua, adibidez bi fakultatetan, bakoitza bere kodearekin.

1. Jardueraren konfigurazio-orrian, sakatu **Gehitu erakunde bat sortzaile-kode batekin**.

   {{< capture src="/images/guides/0.9/creator-codes-add-organization.png" alt="Add an organization orria: dagoeneko LAMBen lan egiten duzu; beste erakunde baten sortzaile-kode batekin han ere kontu bat lortzen duzu; Creator code eremua, Add this organization botoia eta Back to your organizations esteka" caption="Bigarren erakunde bat gehitzea, bere kodearekin. Erakusteko datuak." details="#screenshots" >}}

2. Sartu beste erakundearen kodea eta sakatu **Add this organization** (gehitu erakunde hau).
3. Konfigurazio-orriak zure erakundeak erakusten ditu orain. Aukeratu jarduera hau zein erakunderena den: haren laguntzaileak dira jardueran eskain ditzakezunak. **Gero ezin da aldatu.**

   {{< capture src="/images/guides/0.9/creator-codes-two-organizations.png" alt="LAMB Activity Setup orria, Choose Organization atalarekin: Tutorial University: Engineering eta Tutorial University: Education, bigarrena hautatuta, eta This cannot be changed later oharra" caption="Jarduera bat erakunde bakar batena da. Erakusteko datuak." details="#screenshots" >}}

LAMB Creatorren, zure izenaren azpiko erakundea menu bihurtzen da. **Aldatu erakundea** aukerak zure beste erakunde batera eramaten zaitu, LMSra itzuli gabe.

{{< capture src="/images/guides/0.9/creator-codes-change-organization.png" alt="LAMB Creator, erakundearen menua irekita Robin Vale izenaren azpian: Change organization, Tutorial University: Education unekoa bezala markatuta, eta Tutorial University: Engineering" caption="Erakundea aldatzea LAMB Creatorren barruan. Erakusteko datuak." details="#screenshots" >}}

## Jardueraren eta LAMB Creatorren artean {#activity-and-creator}

- LAMB LMSak ireki duen leihoan geratzen da. Jardueraren orrietako **Ireki LAMB Creator** botoiak LAMB Creatorrera eramaten zaitu; **Itzuli jarduerara** botoiak itzultzen zaitu.
- Horrek jarduera LMStik ireki eta **lau ordura arte** funtzionatzen du. Denbora hori igarota, edo orri batek "Session expired" erantzuten duenean, ireki jarduera berriro LMStik. Bi ordu baino gehiago irekita daraman konfigurazio-orria ere iraungitzen da.
- Nabigatzailearen fitxa bakoitzak bere jarduera gogoratzen du. Beste fitxa batean beste jarduera bat irekitzeak ez du aldatzen lehenengoa nora itzultzen den.
- Bi fitxak ez dituzte bi erakunde mantentzen: fitxa batean erakundea aldatzen duzunean, LAMB Creator bestean ere aldatzen da.

## Kode batek egiten ez duena {#limits}

- Ez du inor administratzaile bihurtzen. Sistemaren administratzaile batek kontu bat sustatu dezake gero.
- Ez du pasahitzik ematen. LAMBen posta eta pasahitzarekin sartzen diren irakasleek horrela jarraitzen dute: LMStik egindako abiarazte batek ez die saiorik irekitzen LAMB Creatorren.
- Ez da erakundearen erregistro-gakoa; hori LAMBen saioa hasteko orriko izen-emate formularioarena da. Bakoitza baztertu egiten da bestearen lekuan.
- Erakundearen LTI Creator tresnatik bereizita dago; tresna hori [Aukeratu zure LMSaren sarbide-bidea](/eu/guides/0.8/lti/) gidako "Hezitzaileen sarbidea Creatorrera" atalean deskribatzen da. Tresna horrek kontu bat ematen dio LMStik irekitzen duen edonori; sortzaile-kode batek jarduera baten bidez iristen diren irakasleei balio die.

**Espero den emaitza:** administratzaile gisa, kode aktibo bat duzu, badakizu zenbat irakaslek erabili duten, eta koderik gabeko irakasleek nori eskatu irakurtzen dute. Irakasle gisa, LAMB Creator kontu bat duzu zure erakundean, laguntzaile bat sortu eta argitaratu duzu eta zure jarduera konfiguratuta dago, inori kontua sortzeko eskatu gabe.

## Pantaila-argazkiei buruz {#screenshots}

Irudiak LAMB 0.9 bertsioaren benetako pantaila-argazkiak dira (bertsio-etiketa: `v0.9-dev.1`), 2026ko azaroaren 15ean hautagai-bertsioa darabilen proba-hedapen batean aterak. Erakundeak, pertsonak, ikastaroa eta helbideak asmatuak dira, eta LMSko abiarazteak proba-script batek sinatu zituen, LMS batek sinatzen dituen bezala. Irudi batek ere ez du sortzaile-koderik erakusten: kode berri bat behin erakusten duen panela ez zen argazkitan jaso.
