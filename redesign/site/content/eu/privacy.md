---
title: Pribatutasuna, DBEO eta AAren gobernantza
description: Ulertu zein aukerak zehazten duten non tratatzen den edukia eta nork atzi dezakeen.
translationKey: privacy
weight: 7
---

LAMBek kontrolak eskaintzen dizkie instituzioei AArako sarbidea, onartutako eredu-hornitzaileak eta datuen tratamendua beren ikaskuntza-ingurunearen barruan kudeatzeko. Kontrol horiek instituzioaren pribatutasun- eta AA-gobernantza-lanari laguntzen diote, Datuak Babesteko Erregelamendu Orokorraren (DBEO, ingelesez GDPR) araberako erantzukizunak barne.

Instituzioak zehazten du nola erabiltzen eta kudeatzen den zerbitzua. LAMB konfiguratzea lan horren zati bat da; softwareak ez du DBEO betetzearen berme automatikorik ematen. [Europako Batzordearen DBEOri buruzko orientabideek](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) azaltzen dute erakundeek dutela datuen babeserako printzipioak betetzeko eta betetzen dituztela frogatzeko erantzukizuna.

## Kontrolak eta instituzio-erabakiak {#controls-and-institutional-decisions}

| Arloa | Zer kudeatu |
|---|---|
| Sarbidea | Erakundeak, kontuak, egiletza-baimenak eta LMS jardueretarako sarbidea |
| Eredu-hornitzaileak | Sorkuntza-, embedding- eta LAMB LEGATUS eredu-zerbitzu onetsiak, tokiko edo hodeiko inferentzia erabiliz |
| Ikastaro-edukia | Zein material inporta daitezkeen edo eredu bati bidal dakizkiokeen, eta nork erabil ditzakeen |
| Elkarrizketen berrikuspena | Zein berrikuspen-funtzio dauden gaituta, nork duen sarbidea eta zer esaten zaien ikasleei |
| Ikasleen sarbidea ereduetara | Irakasleek LLM access gakoak eman ditzaketen ala ez, zein eredu, irakasleen kuotak, ikasle bakoitzeko mugak eta ordutegiak, eta zer esaten zaien ikasleei gakoa hartu aurretik |
| Moodle konexioa | Konektorea gaituta dagoen ala ez, zein gune erabil dezakeen eta zein eragiketa baimentzen diren |
| Jarduna | Atxikipena, babeskopiak, hornitzaileekiko hitzarmenak eta eskaerak kudeatzeko instituzio-prozedurak |

Horietako batzuk produktuaren ezarpenak dira; beste batzuk instituzio-politikak eta jardun-erantzukizunak. Ebaluatu guztiak batera hautatutako hedapenerako.

## Non tratatzen den informazioa {#where-information-is-processed}

Laguntzaile batek kanpoko eredu-hornitzaile bat erabiltzen duenean, eskaera horretan bidalitako edukia hornitzaile horrek tratatzen du. Gauza bera gertatzen da LLM access jarduera bateko ikasleen tresna propioekin: haien eskaerak instituzioaren atebidetik igarotzen dira, eta atebideak, LAMBekin batera datorren konfigurazioarekin, eskaera bakoitzaren ordua, eredua eta tokenak erregistratzen ditu, ikaslearekin lotuta, eta ez testua ([zure AAren azken kilometroa](/eu/institutions/ai-governance/)). Eduki horrek ikaslearen mezua, elkarrizketaren testuingurua eta ikastaro-materialetako pasarte garrantzitsuak izan ditzake. Dokumentuak prestatzeko edo berreskuratzeko kanpoko embedding-zerbitzu bat ere erabil daiteke. Egiletza-funtzioek beren eredu-konfigurazioa izan dezakete.

LAMB zure zerbitzarian exekutatzeak ez ditu kanpoko zerbitzu horiek tokiko bihurtzen. Tokiko ereduak erabiltzen dituen hedapen batek ere kontuan hartu behar du gaitzen duen zerbitzu bakoitza.

## Nork irakur ditzakeen elkarrizketak {#who-can-read-conversations}

Elkarrizketetarako sarbidea integrazioaren, baimenen eta konfigurazioaren araberakoa da. Onartutako lan-fluxu batzuek elkarrizketak berrikusle baimenduen eskura jartzen dituzte. Instituzioek ikasleei esan behar diete zer sarbide dagoen gaituta, eta ez lituzkete elkarrizketak anonimotzat deskribatu behar benetako konfigurazioa eta portaera egiaztatu gabe.

Argitaratzea, partekatzea eta administrazio-sarbidea kontzeptu desberdinak dira. Laguntzaile bat argitaratu gabe egoteak ez du, oro har, bermatzen beste pertsona baimendurik ezin dela bere informaziora sartu.

## Ikastaro bat hasi aurretik argitu beharreko galderak {#questions-to-settle-before-a-course-starts}

| Galdera | Nork jakin beharko luke erantzuten? |
|---|---|
| Zein zerbitzuk tratatzen dituzte promptak, dokumentuak eta embeddingak? | Sistema-operadoreak eta hornitzailearen arduradunak |
| Zein pertsonak ikus dezakete elkarrizketen edukia? | LMS/LAMB administratzaileak eta irakaskuntzako arduradunak |
| Zenbat denbora gordetzen dira erregistroak eta babeskopiak? | Instituzioko zerbitzuaren jabeak |
| Zer gertatzen da ikasle edo irakasle batek alde egiten duenean? | Kontuen eta ikastaroen administratzaileek |
| Zer ez lukete ikasleek idatzi behar? | Irakasle-taldeak eta instituzioko pribatutasun-kontaktuak |
| Nork kudeatzen ditu sarbide-, zuzenketa- edo ezabatze-eskaerak? | Instituzioko zerbitzu- eta pribatutasun-taldeek |

## Erabaki informatuetarako oinarri bat {#a-basis-for-informed-decisions}

[Safe AI in Education Manifesto](https://manifesto.safeaieducation.org) (Hezkuntzan AA Segururako Manifestua) da proiektuaren gidaria. Ez da hedapen jakin baten ziurtagiria. [LAMB eta Safe AI in Education Manifesto](/eu/safe-ai/) orriak LAMBek printzipio bakoitzari eta AAri buruzko EBko arauei ematen dien erantzuna azaltzen du. Kode irekiak ikuskapena ahalbidetzen du; jardun arduratsuak, hala ere, pertsonak, probatutako konfigurazioak eta instituzio-erabakiak behar ditu.

[Planifikatu pilotu-proba bat](/eu/institutions/) · [Planifikatu jarduna](/eu/institutions/operations/)
