---
title: LAMB eta Safe AI in Education Manifesto
description: Zergatik idatzi zuten LAMBen egileek Safe AI in Education Manifesto, nola erantzuten dion LAMBek haren zazpi printzipioetako bakoitzari eta nola lotzen den AAri buruzko EBko arauekin.
translationKey: safe-ai
weight: 6
---

**LAMB eraikitzen dutenek idatzi zuten Safe AI in Education Manifesto (Hezkuntzan AA Segururako Manifestua), LAMBen diseinua gidatzeko.** Bost egile ditu: Marc Alier Forment, Francisco José García-Peñalvo, María José Casañ Guerrero, Juan Antonio (Juanan) Pereira eta Faraón Llorens Largo. Marc Alierrek eta Juanan Pereirak sortu zuten LAMB; Francisco José García-Peñalvok eta María José Casañek haiekin batera idatzi zuten LAMB deskribatzen duen artikulua.

Printzipioak LAMB lehen aldiz deskribatu aurretik idatzi ziren. 2024ko otsailean, Marc Alierrek, Francisco José García-Peñalvok eta Jorge D. Cambak "Safe AI in Education" ideiarako bost puntu ezarri zituzten International Journal of Interactive Multimedia and Artificial Intelligence aldizkariko editorial batean. LAMBen artikuluak, 2024ko uztailean bidalitakoak, puntu horiek diseinu-eskakizun gisa hartu zituen: bere helburuetako bat zen "AAren segurtasunak hezkuntzaren testuinguruan LAMBen diseinurako dituen ondorioak aztertzea" (geure itzulpena). Egileek 2024ko abuztuaren 29an argitaratu zituzten puntuak manifestu gisa, LAMBen lehen prototipo bat bazegoenean, eta 2024ko irailean zazpi printzipiotara zabaldu zituzten. 0.4.0 bertsioa 2024ko urriaren 8an etorri zen. Egungo testua 0.5.0 bertsioa da, 2026ko martxoaren 9koa; bertsio horrek 6. printzipioaren izena aldatu zuen, eta printzipioen idazkera aldatu gabe utzi zuen.

Orri honek printzipio bakoitza hartzen du banan-banan: zer eskatzen duen manifestuak, nola erantzuten dion LAMBek diseinuz, zer geratzen den instituzioaren eta irakaslearen esku, eta non ez duen LAMBek oraindik betetzen. LAMB 0.8 deskribatzen du, egungo hautagai-bertsioa (2026ko urria). Zure instalazioak beste bertsio bat izan dezake.

{{< callout type="info" >}}
LAMB softwarea da. Hura exekutatzen duen instituzioa da haren erabileraren arduraduna. Orri honetako ezer ez da aholku juridikoa, ziurtagiria edo inongo instalazioren betetze-adierazpena.
{{< /callout >}}

## 1. printzipioa: Giza gainbegiratzea eta erantzukizuna {#principle-1-human-oversight-and-accountability}

> "AA sistema bat ezin da ikasleen hezkuntzaren arduradun izan. AAk hartutako edozein erabakik, bereziki kalifikazioari eta ebaluazioari lotutakoek, gardena izan behar du, eta haren erantzukizuna osorik egon behar da giza gainbegiratzearen mende." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 1. printzipioa

**LAMBen erantzuna.** Irakasleak diseinatzen du laguntzaile bakoitza: haren jarraibideak, prompt-txantiloia, eredua eta erabil ditzakeen ikastaro-materialak. Errubrikak irakaslearenak dira; AA batek errubrika bat zirriborratzen edo aldatzen du irakasleak eskatzen duenean bakarrik.

Fitxategien ebaluazioko jardueran, AAk kalifikazio bat eta iruzkin bat proposatzen ditu, eta irakasleak ezartzen du azken kalifikazioa. Irakasle batek bakarrik has dezake ebaluazio bat, edita ditzake kalifikazioak edo bidal ditzake LMSaren kalifikazio-liburura, eta irakaslearen azken kalifikazioa bakarrik bidaltzen da, inoiz ez AAren proposamen gordina. Ikasleek ez dute kalifikaziorik ikusten irakasleak argitaratu arte. Orduan, AAren proposamena eta azken kalifikazioa ikusten dituzte, bi lerro bereizitan, bakoitza bere etiketarekin.

Irakasleek ikasleen izenekin irakur ditzakete txat-transkripzioak, jarduera lehen aldiz konfiguratu zutenean aukera hori aktibatu bazuten bakarrik; gero ezin da aldatu. Ezarpen hori edozein dela ere, laguntzaile baten jabe den irakasleak eta sistema-administratzaile batek irakur ditzakete ikasleek laguntzaile horrekin dituzten elkarrizketak LAMBen txat-analitiketan, eta han ikasleak zenbakidun erabiltzaile gisa agertzen dira, ez izenez.

**Instituzioaren eta irakaslearen esku geratzen dena.** Manifestuak ikasleei eskubidea ematen die AAk eragindako erabakien aurka gizaki baten aurrean helegitea jartzeko. LAMBek ez du helegiteetarako funtziorik: helegiteak irakaslearen eta instituzioaren ohiko prozeduren bidez bideratzen dira. Irakasleak erabakitzen du AAren proposamen bakoitzak zenbateko pisua duen.

**Gaurko mugak.** Irakasle batek jarduera bateko AAren proposamen guztiak urrats bakarrean onar ditzake, eta LAMBek ez du erregistratzen bakoitza berrikusi zen ala ez. Errubrika bat aplikatzeko eraikitako laguntzaile bat txat-jarduera batean ere jar daiteke, eta han puntuazio bat erakuts diezaieke ikasleei, irakaslearen berrikuspenik gabe eta puntuazioa formatiboa besterik ez dela dioen etiketarik gabe. Ikasleak lana igotzeko orriak ez du esaten AA batek ebalua dezakeela bidalitako lana.

## 2. printzipioa: Konfidentzialtasuna bermatzea {#principle-2-guaranteeing-confidentiality}

> "Ohartarazten dugu ez dela komeni ikasleak hirugarrenen zerbitzuetan erregistratzera behartzen dituzten doako tresnak erabiltzea, haien hezkuntzaren derrigorrezko osagai gisa." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 2. printzipioa

**LAMBen erantzuna.** LAMB software librea da, GNU GPL v3 lizentziapekoa, eta instituzio batek osorik exekuta dezake bere zerbitzarietan, tokiko eredu-zerbitzu bat barne. Ikasleak LMSko beren ikastarotik iristen dira LAMBera, eta ez dira inoiz erregistratzen ez LAMBen ez AA enpresa batean. LAMBeko erakunde bakoitzak ezartzen ditu bere eredu-hornitzaileak eta gakoak.

Eredu-hornitzaileak ez du jasotzen ikaslearen izena ez helbide elektronikoa. LAMBek txat-eskaera bakoitza berreraikitzen du; beraz, hornitzaileak ereduaren izena, irakaslearen jarraibideak, elkarrizketa eta berreskuratutako ikastaro-zatiak jasotzen ditu, eta ez identitate-daturik. LLM sarbideko jardueran (ikasleei beren tresnetarako gako pertsonal bat ematen die), atebideak erreferentzia opako bat ikusten du, izenaren edo helbide elektronikoaren ordez. Laguntzaile baten jabeak ikusten dituen analitiketan ikasleen elkarrizketen testua dago, eta ikasle bakoitza zenbakidun erabiltzaile gisa agertzen da, inoiz ez izenez edo helbide elektronikoz.

Irakasle batek txat-jarduera bateko transkripzioak irakur ditzakeenean, LAMB 0.8k behin bakarrik erakusten dio ohar bat ikasle bakoitzari, txata ireki aurretik. Oharrak dio jarduerako irakasleek irakur dezaketela ikasleak idazten duen guztia eta laguntzailearen erantzunak, ikaslearen izenarekin. Ados ez dagoen ikasleari esaten zaio ez sartzeko eta irakaslearekin hitz egiteko. Ez dago ikasleei jakinarazten dien oharrik laguntzailearen jabeak haien elkarrizketak irakur ditzakeela, izenik gabe, analitiketan.

**Instituzioaren eta irakaslearen esku geratzen dena.** Elkarrizketaren edukia ereduraino iristen da. Eredua campusean exekutatzen bada, campusean geratzen da. Hodeiko eredu bat bada, hornitzaileak instituzioaren kontupean jasotzen du testua, eta instituzioak kontratu bat behar du hornitzaile horrekin, bai eta datuak nora joan daitezkeen erabakitzea ere. Instituzioak ezartzen du, halaber, zenbat denboraz gordetzen diren txatak: LAMBek norbaitek ezabatu arte gordetzen ditu.

**Gaurko mugak.** LAMBek ez ditu kentzen ikasle batek mezu batean idazten dituen datu pertsonalak. Laguntzaileen ezarpen lehenetsiek hodeiko eredu bat adierazten dute; beraz, dena campusean izan nahi duen instituzioak aldatu egin behar ditu. Aukerako funtzio batzuek kanpoko zerbitzuetara bidaltzen dituzte datuak administratzaile batek aktibatzen dituenean, hala nola garatzaileentzako trazatzea (tracing) eta kanpoko hornitzaile bat erabiltzen duen irudiak sortzeko konektorea. Ikasleentzako ohar-orri batzuek eduki-sare publiko batetik kargatzen dute estiloa, eta, beraz, ikaslearen nabigatzailea sare horrekin konektatzen da.

## 3. printzipioa: Hezkuntza-estrategiekiko lerrokatzea {#principle-3-alignment-with-educational-strategies}

> "Hezkuntza-erakundeen behar eta helburu zehatzetara egokitutako AA sistemak erabiltzearen alde egiten dugu." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 3. printzipioa

**LAMBen erantzuna.** LAMB hezkuntzarako eraikita dago, ez erabilera orokorrerako. LMSaren barruan funtzionatzen du, ikastaroko jarduera gisa: hautatutako laguntzaileekin txat bat, fitxategien ebaluazioa eta, instituzioak bere LLM atebidea hedatu duenean eta administratzaile batek gaitu duenean, LLM sarbidea. Erakundeka antolatuta dago, jabe, administratzaile eta kide rolekin. Administratzaileek erabakitzen dute zer hornitzaile eta eredu erabil ditzaketen beren irakasleek. Laguntzaile batek kostu-muga bat izan dezake, eta LLM sarbideko jardueran irakasleak ikasle bakoitzeko token-mugak eta sarbidea irekitzen eta ixten duen ordutegi bat ezartzen ditu.

**Instituzioaren eta irakaslearen esku geratzen dena.** Instituzioaren AA politika, iruzurrari eta plagioari buruzko arauak, eta zer tresna onartzen dituen. LAMBek kontrol-baliabideak ematen dizkie administratzaileei; ez du politika idazten.

**Gaurko mugak.** Laguntzaile baten portaera irakasleak idazten dituen jarraibideen eta aukeratutako ereduak jarraibide horiek zenbateraino betetzen dituen araberakoa da. LAMBek ez du instituzio baten arauak kodean betearazten dituen moderazio- edo politika-geruzarik. LMSarekiko konexioak LTI 1.1 erabiltzen du; LTI 1.3 ez da oraindik onartzen.

## 4. printzipioa: Praktika didaktikoekiko lerrokatzea {#principle-4-alignment-with-didactic-practices}

> "Azpimarratzen dugu AA tresnek hainbat irakaskuntza-diseinutara egokitzeko gai izan behar dutela." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 4. printzipioa

**LAMBen erantzuna.** Irakasleak aukeratzen du ikastaroaren diseinuari egokitzen zaion jarduera mota, eta laguntzaileak materialekin nola lan egiten duen: hainbat berreskuratze-estrategia daude, eta horietako batek errubrika bat aplikatzen du. LAMB LEGATUSek, irakasleentzako agenteak, laguntzaile bat kodea idatzi gabe diseinatzen laguntzen die. Irakasleek prompt-txantiloiak, errubrikak eta laguntzaileak parteka ditzakete lankideekin, eta berrerabil ditzakete.

**Instituzioaren eta irakaslearen esku geratzen dena.** Irakaskuntza-diseinua bera, eta laguntzaile bat benetako zereginekin probatzeko denbora, ikasleek erabili aurretik.

**Gaurko mugak.** Ikasleek ikusten duten txata txat-leiho orokor bat da, jarduera guztietan berdina, ez jarduera bakoitzari egokitutako interfaze bat. Prompt-txantiloi lehenetsia generikoa da, eta ez du inongo ikastaro-diseinurik islatzen irakasleak egokitu arte.

## 5. printzipioa: Zehaztasuna eta azalgarritasuna {#principle-5-accuracy-and-explainability}

> "Hezkuntzan erabiltzen diren AA tresnen kalitate-ebaluazio zorrotzak sustatzen ditugu. AA sistemen fidagarritasuna ez da negoziagarria, eta etengabeko ebaluazioa beharrezkoa da hezkuntza-prozesuaren osotasunari eusteko." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 5. printzipioa

**LAMBen erantzuna.** Laguntzaileek irakaslearen beraren ikastaro-materialetatik erantzun dezakete, berreskurapenaz aberastutako sorkuntzari (RAG) esker; horri esker, testuinguru estu eta zehaztu batean mantentzen dira, manifestuak gomendatzen duen bezala. Berreskuratutako iturrien izenburuak eta estekak galdera bakoitzarekin batera pasatzen zaizkio ereduari. Irakasleek ikus dezakete LAMBek osatzen duen prompt osoa, proba-eszenatokiak gorde eta exekutatu ditzakete, eta erantzun bakoitzari buruzko beren iritzia erregistra dezakete, ikasleek laguntzailea erabili aurretik. Errubriketan oinarritutako atzeraelikadura errubrika esplizitu batetik abiatzen da, haren pisuekin.

**Instituzioaren eta irakaslearen esku geratzen dena.** Laguntzaile bakoitza galdera adierazgarriekin probatzea, ikastaro-materialak zuzenak eta eguneratuak direla egiaztatzea, eta egiaztapenak errepikatzea materialak edo ereduak aldatzen direnean.

**Gaurko mugak.** Manifestuak eskatzen du tresnek "beren iturriak aipatzea" (geure itzulpena). LAMBen, ikasleek iturriak ikusten dituzte ereduak bere erantzunean idazten dituenean bakarrik; txatak ez ditu zerrenda bereizi gisa erakusten, eta txantiloi lehenetsiak ez dio ereduari aipatzeko eskatzen. Probak eskuzkoak dira: LAMBek ez du erantzunen kalitatea etengabe ebaluatzen, ez du asmatutako edukirik detektatzen, eta ez du erakusten erantzun batek zer konfiantza-maila duen.

## 6. printzipioa: Interfaze eta portaera ulergarriak {#principle-6-comprehensible-interface-and-behavior}

> "Tresna hauek beren mugak esplizituki adierazi behar dituzte, eta ez dute informazio okerra behar ez den ziurtasunez aurkeztu behar." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 6. printzipioa

**LAMBen erantzuna.** LAMB argia da nork zer ikusten duen adierazteko orduan. Txatean, ikasleak laguntzailearen izena eta irakaslearen deskribapena ikusten ditu, eta erantzun bakoitza laguntzailearen izenpean agertzen da. Transkripzioen berrikuspena aktibatuta dagoenean, transkripzio-oharrak argi esaten die ikasleei irakasleak haien txatak irakur ditzakeela, haien izenarekin. Ikasleak gako bat hartu aurretik, LLM sarbideko orriak azaltzen du zer erregistratzen duen atebideak eta kanpoko hornitzaile batek eskaerak ikaslearen izenik gabe jasotzen dituela; gakoa eman ondoren, eredua izendatzen du. Fitxategien ebaluazioan, AAren kalifikazioa eta irakaslearen kalifikazioa bereizita etiketatzen dira.

**Instituzioaren eta irakaslearen esku geratzen dena.** Ikasleei esatea, laguntzailearen deskribapenean edo jarraibideetan, zertarako den laguntzailea, zer ezin duen egin eta haren erantzunak okerrak izan daitezkeela.

**Gaurko mugak.** Hemen geratzen da LAMB printzipiotik urrutien. Txatak ez du ohar iraunkorrik erakusten erantzunak AA eredu batetik datozela eta akatsak izan ditzaketela esateko, eta ez die ikasleei esaten zer eredu edo hornitzaile ari den erantzuten. Laguntzaile batek bere mugak adierazten ditu irakasleak hori bere jarraibideetan idazten badu bakarrik; ezarpen lehenetsiek ez dute halakorik egiten.

## 7. printzipioa: Entrenamendu etikoa eta gardentasuna {#principle-7-ethical-training-and-transparency}

> "Hezkuntza-testuinguruetako AA tresna guztiak estandar etikoekiko konpromisoz garatu eta hedatu behar direla eskatzen dugu. Horrek barne hartzen du entrenamendu-datuen iturriak irekian adieraztea, ereduak alborapenak minimizatzeko diseinatuta daudela bermatzea, eta AAren erabakiak hartzeko prozesuek berez izan ditzaketen mugei buruzko gardentasuna ematea." (geure itzulpena)
>
> Safe AI in Education Manifesto 0.5.0, 7. printzipioa

**LAMBen erantzuna.** LAMBek ez du eredurik entrenatzen ez doitzen. Aukera eskaintzen du: erakunde bakoitzak pisu irekiko tokiko ereduak erabil ditzake, edo OpenAIrekin bateragarria den interfazea duen edozein zerbitzu, hornitzaile bakar bati lotuta egon gabe. Horri esker, instituzio batek lehentasuna eman diezaieke entrenamendu-datuak eta -metodoak dokumentatuta dituzten ereduei.

**Instituzioaren eta irakaslearen esku geratzen dena.** Ereduak printzipio hau kontuan hartuta aukeratzea, eta hornitzaileek entrenamendu-datuei, alborapenei eta mugei buruz ematen duten dokumentazioa gordetzea.

**Gaurko mugak.** LAMBek ez du erregistratzen eredu baten entrenamendu-datuei edo alborapen ezagunei buruzko informaziorik, eta ez die halakorik erakusten irakasleei edo ikasleei.

## AAri buruzko EBko arauak hezkuntzan {#the-eu-rules-on-ai-in-education}

Manifestuak ez du EBko legerik aipatzen. Egileek zazpi printzipioak aurkezten dituzte AAri eta hezkuntzari buruzko Europako orientabideak praktikan jartzeko bide gisa. Orientabide horien artean daude Europako Batzordeak hezitzaileentzat AAri eta datuei buruz emandako jarraibide etikoak; 2022an argitaratu ziren lehen aldiz, eta 2026ko martxoaren 5ean argitaratutako edizio batean berrikusi ziren. Lehen ediziotik hona, arau lotesleak iritsi dira. Atal honek laburbiltzen ditu instituzio batek ikasleei AA eskaintzen dienean garrantzitsuenak diren EBko zuzenbideko puntuak, eta LAMB horietako bakoitzarekin nola lotzen den. Arauak 2026ko urriaren 17an zeuden bezala deskribatzen ditu.

{{< callout type="warning" >}}
Hizkera argiko laburpena da hau, ez aholku juridikoa. LAMBen erabilera jakin bat arau jakin baten eremuan sartzen den ala ez, instituzioak nola erabiltzen duen araberakoa da. Galdetu zure zerbitzu juridikoei eta datuak babesteko zerbitzuei.
{{< /callout >}}

### Nork du erantzukizuna: hornitzailea eta hedapenaren arduraduna {#who-is-responsible-provider-and-deployer}

AA Legeak ((EB) 2024/1689 Erregelamendua, 2024ko abuztuaren 1etik indarrean) bi rolen artean banatzen ditu betebehar gehienak. Hornitzaileak AA sistema bat garatzen du eta bere izenpean merkaturatzen edo zerbitzuan jartzen du. Hedapenaren arduradunak AA sistema bat erabiltzen du bere agintepean.

LAMB proiektuak software librea argitaratzen du. **Bere ikastaroetarako LAMB exekutatzen duen instituzioa da hedapenaren arduraduna.** LAMB konfiguratu eta bere ikasleei bere izenpean eskaintzen dien instituzioa hornitzailetzat ere har daiteke; Legeak ez du kasu hori argi ebazten. Legea ez zaie aplikatzen lizentzia libre eta irekien pean argitaratutako AA sistemei, salbu eta arrisku handiko sistema gisa merkaturatzen edo zerbitzuan jartzen badira, edo jarraian deskribatzen diren praktika debekatuen edo gardentasun-arauen eremuan sartzen badira. Beraz, ikasleekin hitz egiten duen LAMBen txat-laguntzaile bat gardentasun-arauen pean dago, hala ere.

AA Legea AAri buruzko Omnibus Digitalak ((EB) 2026/1744 Erregelamendua) aldatu zuen, 2026ko uztailaren 27tik indarrean dagoenak. Beheko datek kontuan hartzen dute aldaketa hori.

### AAri buruzko alfabetatzea {#ai-literacy}

2025eko otsailaren 2tik, hornitzaileek eta hedapenaren arduradunek AAri buruzko alfabetatzearen inguruko betebeharrak dituzte. 2026ko uztailaren 27tik, testuak dio "neurriak hartuko dituzte beren langileen eta, beren izenean, AA sistemen funtzionamenduaz eta erabileraz arduratzen diren beste pertsonen AAri buruzko alfabetatzea garatzen laguntzeko" (geure itzulpena). Ez du inolako maila bermaturik eskatzen.

**LAMBek nola laguntzen duen.** Irakasleek beren laguntzaileak eraikitzen dituzte, ereduari bidaltzen zaion prompt osoa ikus dezakete, eta laguntzaileak probatzen dituzte ikasleek erabili aurretik. Horrela, sistema hauek nola funtzionatzen duten zuzenean ezagutzen dute.

**Instituzioak egin behar duena.** LAMB konfiguratzen eta erabiltzen duten langileen AAri buruzko alfabetatzea sustatzeko neurriak hartzea, adibidez prestakuntza. Softwareak ez dakar prestakuntza-programarik. LAMB taldeak [langileentzako prestakuntza eskaintzen du AAri buruzko alfabetatzeaz eta AAren gobernantzaz](/eu/contact/#training).

### Praktika debekatuak: emozioen ezagutza {#prohibited-practices-emotion-recognition}

2025eko otsailaren 2tik, AA Legeak debekatzen du AA sistemak erabiltzea "pertsona fisiko baten emozioak ondorioztatzeko lantokien eta hezkuntza-erakundeen eremuetan" (geure itzulpena), arrazoi medikoengatik edo segurtasun-arrazoiengatik denean izan ezik. Batzordearen jarraibideek hezkuntzako adibideak ematen dituzte: debekatuta dago ikasleen interesa edo arreta ondorioztatzea, eta baita onarpen-probetan emozioak ezagutzea ere. Debekatuta dago, halaber, teknika manipulatzaileak edo iruzurrezkoak erabiltzen dituen AA, edo adinagatiko zaurgarritasunak baliatzen dituena, baldin eta pertsona baten portaera nabarmen distortsionatzen badu kalte handia eragiten duen edo eragin dezakeen moduan.

**LAMBek nola laguntzen duen.** LAMBek ez du ikasleen emozioak, interesa edo arreta ondorioztatzeko diseinatutako funtziorik.

**Instituzioak egin behar duena.** LAMB, edo harekin konektatutako edozein tresna, helburu horretarako ez erabiltzea, eta laguntzaileak ikasleak manipulatzeko diseinatuta ez daudela egiaztatzea.

### Arrisku handiko erabilerak hezkuntzan {#high-risk-uses-in-education}

AA Legeak hezkuntzako lau erabilera jotzen ditu arrisku handikotzat: erakundeetarako onarpena edo esleipena erabakitzea, ikaskuntzaren emaitzak ebaluatzea, pertsona batek jasoko duen hezkuntza-maila ebaluatzea, eta probetan debekatutako portaerak antzemateko ikasleak zaintzea. **Erabilera horietarako betebeharrak 2027ko abenduaren 2tik aurrera aplikatuko dira.** Omnibus Digitalak aldatu zuen data hori; lehen 2026ko abuztuaren 2a zen.

Batzordearen sailkapenari buruzko jarraibide-zirriborroek, 2026ko maiatzaren 19an kontsultarako argitaratuak eta oraindik behin betikoak ez direnak, bereizketa egiten dute erabilera sumatiboen eta formatiboen artean. Azken erabaki baterako ebaluatzen duen AA, adibidez azken notan zenbatzen duen kalifikazioa, arrisku handikoa da. Ikastaroan zehar atzeraelikadura eta ikaskuntzarako laguntza ematen duen AA, adibidez tutoretza-laguntzaile bat, ez litzateke arrisku handikotzat sailkatu behar.

**LAMBek nola laguntzen duen.** Ikastaroan zehar tutoretzarako edo atzeraelikadurarako erabiltzen den txat-laguntzaile bat jarraibide-zirriborroek arrisku handikoa ez dela deskribatzen duten erabilera formatibo mota da. Ebaluaziorako, fitxategien ebaluazioko jarduerak irakaslearen esku uzten du kontrola: AAk proposatu besterik ez du egiten, irakasleak ezartzen du azken kalifikazioa, kalifikazio hori bakarrik doa kalifikazio-liburura, eta ikasleek AAren proposamena eta azken kalifikazioa ikusten dituzte, bereizita etiketatuta.

**Instituzioak egin behar duena.** Erabilera bakoitza arrisku handiko kategoria batean sartzen den erabakitzea, adibidez AAren proposamenek zenbatzen duten kalifikazioak elikatzen dituztenean. Hala bada, hedapenaren arduradunak, beste betebehar batzuen artean, giza gainbegiratzea hura egiteko gaitasuna, prestakuntza eta agintea duten pertsonen esku utzi behar du, sistema zaindu behar du, haren erregistroak gutxienez sei hilabetez gorde behar ditu, eta ikasleei jakinarazi behar die arrisku handiko AA sistema bat erabiltzen dela haiei buruzko erabakiak hartzeko. Erakunde publikoek, eta zerbitzu publikoak ematen dituzten erakunde pribatuek, oinarrizko eskubideetan duen eraginaren ebaluazio bat ere egin behar dute lehen erabileraren aurretik. LAMBek ez du helegiteetarako lan-fluxurik, eta ez du erregistratzen irakasle batek AAren proposamen bakoitza berrikusi zuen ala ez; beraz, instituzioak biak bermatu behar ditu bere prozeduren bidez. LAMB proiektuak ez du arrisku handiko sistemen adostasun-ebaluaziorik egin.

2027ko abenduaren 2ko data egun horretatik aurrera zerbitzuan jartzen diren sistemei aplikatzen zaie. Data hori baino lehen zerbitzuan dagoen sistema bat haren diseinua nabarmen aldatzen denean bakarrik sartzen da betebeharren eremuan, eta agintari publikoek erabiltzen dituzten sistemek 2030eko abuztuaren 2rako bete behar dituzte, beranduenez. Unibertsitate publiko batean dagoen LAMB instalazio baterako, beraz, aplikatu beharreko data 2027ko abenduaren 2a baino beranduagokoa izan daiteke.

### Gardentasuna {#transparency}

2026ko abuztuaren 2tik, jendeari jakinarazi behar zaio AA sistema batekin ari dela elkarreragiten, begi-bistakoa denean izan ezik, eta beranduenez lehen elkarreraginean. Testua sortzen duten sistemen hornitzaileek, gainera, irteera makinaz irakur daitekeen moduan markatu behar dute, eta dagoeneko merkatuan dauden sistemek trantsizio-aldi bat dute 2026ko abenduaren 2ra arte.

**LAMBek nola laguntzen duen.** Ikasleek izena duen laguntzaile bat aurkitzen dute ikastaroko jarduera baten barruan, eta erantzun bakoitza izen horren pean agertzen da. Ikasleak gako bat hartu aurretik, LLM sarbideko orriak azaltzen du zer erregistratzen duen atebideak eta zer jasotzen duen kanpoko hornitzaile batek, eta eredua izendatzen du gakoa eman ondoren. Fitxategien ebaluazioak AAren kalifikazioa etiketatzen du.

**Instituzioak egin beharko lukeena.** Ikasleei, jardueran edo ikastaroan, AA batekin ari direla hizketan esaten zaiela ziurtatzea. Txatak berak ez du mota horretako ohar orokorrik erakusten, eta ez du eredua izendatzen. LAMBek ez dio makinaz irakurtzeko markarik gehitzen sortutako testuari; beraz, instituzioak egiaztatu beharko luke bere eredu-hornitzaileak nola betetzen duen betebehar hori.

### Erabilera orokorreko AA ereduak {#general-purpose-ai-models}

2025eko abuztuaren 2tik, erabilera orokorreko ereduen hornitzaileek, hala nola hizkuntza-eredu handiek, ereduak entrenatzeko erabilitako edukiaren laburpen bat argitaratu behar dute, eta, eredua lizentzia libre eta ireki baten pean eta pisu publikoekin argitaratzen ez bada, eredua dokumentatu behar dute haren gainean eraikitzen dutenentzat. 2025eko abuztuaren 2a baino lehen merkatuan zeuden ereduek 2027ko abuztuaren 2ra arte dute betetzeko epea. Betebehar horiek eredu-hornitzaileei dagozkie, ez ereduak erabiltzen dituzten erakundeei.

**LAMBek nola laguntzen duen.** Erakunde bakoitzak aukeratzen ditu bere ereduak, pisu irekiko tokiko ereduak barne.

**Instituzioak egin dezakeena.** Eredu bat aukeratzen duenean, hornitzaileak argitaratutako entrenamendu-edukiaren laburpena eta dokumentazioa egiaztatzea, 7. printzipioarekin bat.

### Datuen babesa: DBEO {#data-protection-the-gdpr}

Datuak Babesteko Erregelamendu Orokorra (DBEO, ingelesez GDPR) ikasleen datuak tratatzen dituen LAMB instalazio orori aplikatzen zaio. Batzordearen 2026ko hezitzaileentzako jarraibideek diote hezkuntza-erakundeak tratamenduaren arduradun direla, eta beste alderdi batzuk haien izenean tratamenduaren eragile izan daitezkeela. DBEO aldatzeko Batzordearen proposamen bat ez zen onartu 2026ko urriaren 17rako; beraz, DBEO idatzita dagoen bezala aplikatzen da.

| DBEOko puntua | LAMBek nola laguntzen duen | Instituzioak oraindik erabakitzen duena |
|---|---|---|
| Datuen minimizazioa | Hornitzaileek elkarrizketa jasotzen dute ikaslearen izenik edo helbide elektronikorik gabe; LLM sarbideko gakoek erreferentzia opako bat erabiltzen dute; irakasleen analitiketan elkarrizketak zenbakidun erabiltzaileekin agertzen dira, izenen ordez | Ikasleei zer ez idazteko esaten zaien; LAMBek ez ditu datu pertsonalak mezuetatik iragazten |
| Ikasleentzako informazioa | Transkripzio-oharrak eta LLM sarbideko oharrak azaltzen dute, erabili aurretik, izenekin egiten den transkripzioen berrikuspena eta atebideak zer erregistratzen duen; ez dago laguntzailearen jabeak elkarrizketak, izenik gabe, analitiketan irakur ditzakeela aipatzen duen oharrik | Pribatutasun-oharra, oinarri juridikoa eta eskubideak nola baliatu; transkripzio-oharra informazioa da, ez oinarri juridikoa |
| Tratamenduaren eragileak eta transferentziak | Tokiko ereduek elkarrizketak campusean gordetzen dituzte; hornitzaileak erakundeka aukeratzen dira | Hodeiko edozein hornitzailerekin egindako kontratuak eta EBtik kanpoko edozein transferentziaren baldintzak |
| Erabaki automatizatuak | Fitxategien ebaluazioan, irakaslearen kalifikazioa da erabakia | Erabaki esanguratsurik ez dadin AAren emaitza baten mende soilik egon, eta ikasleek erabaki bat nola aurkara dezaketen |
| Eraginaren ebaluazioa | Ikuskatu, campusean exekutatu eta proba daitekeen software librea | Datuen babesari buruzko eraginaren ebaluazioa behar den ala ez, eta hura egitea |
| Atxikipena | Instituzioak LAMB exekutatzen duenean, txatak, bidalitako lanak eta kalifikazioak bere datu-baseetan gordetzen dira | Zenbat denboraz gordetzen diren txatak, bidalitako lanak eta kalifikazioak; LAMBek ez du ezer automatikoki ezabatzen |

Erreferentzia seudonimizatu batek datu pertsonala izaten jarraitzen du instituzioarentzat, hark ikaslearekin lot baitezake.

## Irakurri gehiago {#read-further}

Manifestua, bere egungo testuarekin eta hezkuntzako AA tresnak ebaluatzeko kontrol-zerrendarekin, bere egileek argitaratzen dute.

[Irakurri Safe AI in Education Manifesto ↗](https://manifesto.safeaieducation.org)

[Pribatutasuna, DBEO eta AAren gobernantza](/eu/privacy/) · [LAMB ikasle gisa erabiltzea](/eu/students/) · [Proiektua eta haren ikerketa](/eu/research/)
