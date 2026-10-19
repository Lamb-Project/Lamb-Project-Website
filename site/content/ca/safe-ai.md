---
title: LAMB i el Safe AI in Education Manifesto
description: Per què els autors de LAMB van escriure el Safe AI in Education Manifesto, com respon LAMB a cadascun dels seus set principis i com es relaciona amb les normes de la UE sobre la IA.
translationKey: safe-ai
weight: 6
---

**Les persones que construeixen LAMB van escriure el Safe AI in Education Manifesto (Manifest per a una IA segura en l’educació) per guiar el disseny de LAMB.** Els seus cinc autors són Marc Alier Forment, Francisco José García-Peñalvo, María José Casañ Guerrero, Juan Antonio (Juanan) Pereira i Faraón Llorens Largo. Marc Alier i Juanan Pereira van crear LAMB; Francisco José García-Peñalvo i María José Casañ van coescriure l’article que el descriu.

Els principis es van formular abans de la primera descripció de LAMB. El febrer de 2024, Marc Alier, Francisco José García-Peñalvo i Jorge D. Camba van exposar cinc punts per a una «Safe AI in Education» (IA segura en l’educació) en un editorial de l’International Journal of Interactive Multimedia and Artificial Intelligence. L’article de LAMB, enviat el juliol de 2024, va prendre aquests punts com a requisits de disseny: un dels seus objectius declarats era «examinar les implicacions de la seguretat de la IA en el context de l’educació per al disseny de LAMB» (traducció pròpia). Els autors van publicar els punts com a manifest el 29 d’agost de 2024, quan ja existia un primer prototip de LAMB, i el setembre de 2024 els van ampliar a set principis. La versió 0.4.0 va arribar el 8 d’octubre de 2024. El text actual és la versió 0.5.0, del 9 de març de 2026, que va canviar el nom del principi 6 i va deixar sense canvis la redacció dels principis.

Aquesta pàgina repassa els principis un per un: què demana el manifest, com hi respon LAMB pel seu disseny, què queda en mans de la institució i del docent, i on LAMB encara no hi arriba. Descriu LAMB 0.8, la versió candidata actual (octubre de 2026). La teva instal·lació pot executar una altra versió.

{{< callout type="info" >}}
LAMB és programari. La institució que l’executa és responsable de com es fa servir. Res del que diu aquesta pàgina és assessorament jurídic, una certificació ni una declaració de compliment per a cap instal·lació.
{{< /callout >}}

## Principi 1: Supervisió humana i rendició de comptes {#principle-1-human-oversight-and-accountability}

> «Un sistema d’IA no pot ser responsable de l’educació dels estudiants. Qualsevol decisió presa per la IA, especialment les relacionades amb la qualificació i l’avaluació, ha de ser transparent i ha de rendir comptes plenament davant de la supervisió humana.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 1

**La resposta de LAMB.** El docent dissenya cada assistent: les seves instruccions, la seva plantilla de prompt, el seu model i els materials del curs que pot fer servir. Les rúbriques pertanyen al docent; una IA només redacta o modifica una rúbrica quan el docent ho demana.

En l’activitat d’avaluació de fitxers, la IA proposa una qualificació i un comentari, i el docent fixa la qualificació final. Només un docent pot iniciar una avaluació, editar qualificacions o enviar-les al llibre de qualificacions de l’LMS, i només s’envia la qualificació final del docent, mai la proposta en brut de la IA. Els estudiants no veuen cap qualificació fins que el docent la publica. Aleshores veuen la proposta de la IA i la qualificació final com dues línies etiquetades per separat.

Els docents poden llegir les transcripcions dels xats amb els noms dels estudiants només si van activar aquesta opció en configurar l’activitat per primera vegada; després no es pot canviar. Sigui quina sigui aquesta configuració, el docent propietari d’un assistent, i un administrador del sistema, poden llegir les converses que els estudiants hi mantenen a les analítiques de xat de LAMB, on els estudiants apareixen com a usuaris numerats en lloc de pel seu nom.

**Què queda en mans de la institució i del docent.** El manifest dona als estudiants el dret a recórrer davant d’una persona les decisions preses per la IA. LAMB no té cap funció de recurs: els recursos passen pel docent i pels procediments habituals de la institució. El docent decideix quin pes té cada proposta de la IA.

**Límits actuals.** Un docent pot acceptar d’un sol cop totes les propostes de la IA d’una activitat, i LAMB no registra si cadascuna s’ha revisat. Un assistent creat per aplicar una rúbrica també es pot col·locar en una activitat de xat, on pot mostrar als estudiants una puntuació sense revisió del docent i sense cap etiqueta que digui que la puntuació només és formativa. La pàgina on l’estudiant puja el seu treball no diu que una IA pugui avaluar el lliurament.

## Principi 2: Garantir la confidencialitat {#principle-2-guaranteeing-confidentiality}

> «Advertim contra l’ús d’eines gratuïtes que exigeixen als estudiants registrar-se en serveis de tercers com a component obligatori de la seva educació.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 2

**La resposta de LAMB.** LAMB és programari lliure sota la llicència GNU GPL v3, i una institució el pot executar sencer als seus propis servidors, inclòs un servei de models local. Els estudiants accedeixen a LAMB des del seu curs a l’LMS i mai no es registren a LAMB ni a cap empresa d’IA. Cada organització de LAMB configura els seus propis proveïdors de models i les seves claus.

El proveïdor de models no rep el nom ni el correu electrònic de l’estudiant. LAMB reconstrueix cada petició de xat, de manera que el proveïdor rep el nom del model, les instruccions del docent, la conversa i els fragments del curs recuperats, i cap dada d’identitat. En l’activitat LLM access, que dona als estudiants una clau personal per a les seves pròpies eines, la passarel·la veu una referència opaca en lloc d’un nom o un correu electrònic. Les analítiques que veu el propietari d’un assistent inclouen el text de les converses dels estudiants, amb cada estudiant mostrat com a usuari numerat, mai pel seu nom o el seu correu electrònic.

Quan un docent pot llegir les transcripcions d’una activitat de xat, LAMB 0.8 mostra a cada estudiant un avís únic abans que s’obri el xat. L’avís diu que els docents de l’activitat poden llegir tot el que escriu l’estudiant i les respostes de l’assistent, amb el nom de l’estudiant. A l’estudiant que no hi estigui d’acord se li indica que no hi entri i que en parli amb el docent. Cap avís no informa els estudiants que el propietari de l’assistent pot llegir les seves converses, sense noms, a les analítiques.

**Què queda en mans de la institució i del docent.** El contingut de la conversa sí que arriba al model. Si el model s’executa al campus, el contingut es queda al campus. Si és un model al núvol, el proveïdor rep el text a través del compte de la institució, i la institució necessita un contracte amb aquest proveïdor i una decisió sobre on poden anar les dades. La institució també fixa quant de temps es conserven els xats: LAMB els conserva fins que algú els elimina.

**Límits actuals.** LAMB no elimina les dades personals que un estudiant escriu en un missatge. La configuració per defecte dels assistents apunta a un model al núvol, de manera que una institució que ho vulgui tot al campus l’ha de canviar. Algunes funcions opcionals envien dades a serveis externs quan un administrador les activa, com ara el traçat per a desenvolupadors i un connector de generació d’imatges que fa servir un proveïdor extern. Unes quantes pàgines d’avís adreçades als estudiants carreguen els seus estils des d’una xarxa pública de distribució de continguts, de manera que el navegador de l’estudiant s’hi connecta.

## Principi 3: Alineació amb les estratègies educatives {#principle-3-alignment-with-educational-strategies}

> «Defensem l’ús de sistemes d’IA adaptats a les necessitats i els objectius específics de les institucions educatives.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 3

**La resposta de LAMB.** LAMB està fet per a l’educació i no per a un ús general. Funciona dins de l’LMS com a activitats del curs: un xat amb assistents seleccionats, l’avaluació de fitxers i, on la institució hagi desplegat la seva passarel·la d’LLM i un administrador l’hagi habilitat, LLM access. S’organitza per institucions, amb els rols de propietari, administrador i membre. Els administradors decideixen quins proveïdors i models poden fer servir els seus docents. Un assistent pot tenir un límit de cost, i en l’activitat LLM access el docent fixa límits de tokens per estudiant i un horari que obre i tanca l’accés.

**Què queda en mans de la institució i del docent.** La política d’IA de la institució, les seves normes sobre còpia i plagi, i quines eines aprova. LAMB dona palanques als administradors; no redacta la política.

**Límits actuals.** El comportament d’un assistent depèn de les instruccions que escriu el docent i de com les segueix el model triat. LAMB no té cap capa de moderació ni de polítiques que imposi per codi les normes d’una institució. La connexió amb l’LMS fa servir LTI 1.1; LTI 1.3 encara no és compatible.

## Principi 4: Alineació amb les pràctiques didàctiques {#principle-4-alignment-with-didactic-practices}

> «Remarquem la necessitat que les eines d’IA es puguin adaptar a diversos dissenys instruccionals.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 4

**La resposta de LAMB.** El docent tria el tipus d’activitat que s’ajusta al disseny del curs, i com treballa l’assistent amb els materials: hi ha diverses estratègies de recuperació disponibles, entre les quals una que aplica una rúbrica. LAMB LEGATUS, l’agent per als docents, els ajuda a dissenyar un assistent sense escriure codi. Els docents poden compartir plantilles de prompt, rúbriques i assistents amb els seus col·legues i reutilitzar-los.

**Què queda en mans de la institució i del docent.** El disseny instruccional mateix, i el temps per provar un assistent amb tasques reals abans que el facin servir els estudiants.

**Límits actuals.** El xat que veuen els estudiants és una finestra de xat general, la mateixa per a totes les activitats, no una interfície pensada per a cadascuna. La plantilla de prompt per defecte és genèrica i no reflecteix cap disseny de curs fins que el docent l’adapta.

## Principi 5: Precisió i explicabilitat {#principle-5-accuracy-and-explainability}

> «Encoratgem avaluacions de qualitat rigoroses de les eines d’IA que es fan servir en educació. La fiabilitat dels sistemes d’IA no és negociable, i cal una avaluació contínua per mantenir la integritat del procés educatiu.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 5

**La resposta de LAMB.** Els assistents poden respondre a partir dels materials del curs del mateix docent mitjançant la generació augmentada per recuperació (RAG), que els manté en un context acotat i definit, tal com recomana el manifest. Els títols i els enllaços de les fonts recuperades es passen al model amb cada pregunta. Els docents poden veure el prompt complet que munta LAMB, desar escenaris de prova, executar-los i registrar el seu propi veredicte sobre cada resposta abans que els estudiants facin servir l’assistent. El retorn basat en rúbriques parteix d’una rúbrica explícita amb les seves ponderacions.

**Què queda en mans de la institució i del docent.** Provar cada assistent amb preguntes representatives, comprovar que els materials del curs són correctes i actuals, i repetir les comprovacions quan canvien els materials o els models.

**Límits actuals.** El manifest demana que les eines «citin les seves fonts» (traducció pròpia). A LAMB, els estudiants només veuen les fonts quan el model les escriu a la seva resposta; el xat no les mostra com una llista a part, i la plantilla per defecte no demana al model que citi. Les proves són manuals: LAMB no avalua contínuament la qualitat de les respostes, no detecta contingut inventat ni mostra el grau de confiança d’una resposta.

## Principi 6: Interfície i comportament comprensibles {#principle-6-comprehensible-interface-and-behavior}

> «Aquestes eines han de comunicar explícitament les seves limitacions i evitar presentar informació errònia amb una confiança injustificada.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 6

**La resposta de LAMB.** LAMB és clar sobre qui veu què. Al xat, l’estudiant veu el nom de l’assistent i la descripció del docent, i cada resposta apareix sota el nom de l’assistent. Quan la revisió de transcripcions està activada, l’avís de transcripcions diu clarament als estudiants que el docent pot llegir els seus xats amb el seu nom. Abans que l’estudiant obtingui una clau, la pàgina d’LLM access explica què registra la passarel·la i que un proveïdor extern rep les peticions sense el nom de l’estudiant; indica el model un cop s’ha emès la clau. En l’avaluació de fitxers, la qualificació de la IA i la del docent s’etiqueten per separat.

**Què queda en mans de la institució i del docent.** Explicar als estudiants, a la descripció o a les instruccions de l’assistent, per a què serveix l’assistent, què no pot fer i que les seves respostes poden ser errònies.

**Límits actuals.** Aquí és on LAMB queda més lluny del principi. El xat no mostra cap avís permanent que les respostes provenen d’un model d’IA i poden contenir errors, i no diu als estudiants quin model o quin proveïdor respon. Un assistent només declara els seus límits si el docent ho escriu a les seves instruccions; la configuració per defecte no ho fa.

## Principi 7: Entrenament ètic i transparència {#principle-7-ethical-training-and-transparency}

> «Insistim que totes les eines d’IA en contextos educatius s’han de desenvolupar i desplegar amb un compromís amb els estàndards ètics. Això inclou declarar obertament les fonts de les dades d’entrenament, garantir que els models estiguin dissenyats per minimitzar els biaixos i oferir transparència sobre les possibles limitacions inherents als processos de presa de decisions de la IA.» (traducció pròpia)
>
> Safe AI in Education Manifesto 0.5.0, principi 7

**La resposta de LAMB.** LAMB no entrena ni ajusta (fine-tuning) cap model. El que ofereix és capacitat d’elecció: cada organització pot fer servir models locals de pesos oberts, o qualsevol servei amb una interfície compatible amb OpenAI, en lloc d’estar lligada a un sol proveïdor. Això permet a una institució preferir models amb les dades i els mètodes d’entrenament documentats.

**Què queda en mans de la institució i del docent.** Triar els models tenint en compte aquest principi, i conservar la documentació dels proveïdors sobre dades d’entrenament, biaixos i límits.

**Límits actuals.** LAMB no registra cap informació sobre les dades d’entrenament d’un model ni sobre els seus biaixos coneguts, i no en mostra cap ni als docents ni als estudiants.

## Les normes de la UE sobre la IA en educació {#the-eu-rules-on-ai-in-education}

El manifest no cita cap llei de la UE. Els seus autors presenten els set principis com una manera de portar a la pràctica les orientacions europees sobre IA i educació. Aquestes orientacions inclouen les directrius ètiques de la Comissió Europea per als educadors sobre la IA i les dades, publicades per primera vegada el 2022 i revisades en una edició publicada el 5 de març de 2026. Des de la primera edició, han arribat normes vinculants. Aquesta secció resumeix els punts del dret de la UE més rellevants quan una institució ofereix IA als estudiants, i com s’hi relaciona LAMB en cada cas. Descriu les normes tal com són el 17 d’octubre de 2026.

{{< callout type="warning" >}}
Això és un resum en llenguatge planer, no assessorament jurídic. Que un ús concret de LAMB entri en l’àmbit d’una norma determinada depèn de com el faci servir la institució. Consulta-ho amb els teus serveis jurídics i de protecció de dades.
{{< /callout >}}

### Qui és responsable: proveïdor i responsable del desplegament {#who-is-responsible-provider-and-deployer}

El Reglament d’IA (Reglament (UE) 2024/1689, en vigor des de l’1 d’agost de 2024) assigna la majoria de les obligacions a dos rols. El proveïdor desenvolupa un sistema d’IA i l’introdueix al mercat o el posa en servei amb el seu propi nom. El responsable del desplegament fa servir un sistema d’IA sota la seva pròpia autoritat.

El projecte LAMB publica programari lliure. **Una institució que executa LAMB per als seus cursos és el responsable del desplegament.** Una institució que configura LAMB i l’ofereix als seus estudiants amb el seu propi nom també es pot considerar proveïdor; el Reglament no resol aquest cas amb claredat. El Reglament no s’aplica als sistemes d’IA publicats amb llicències lliures i de codi obert, tret que s’introdueixin al mercat o es posin en servei com a sistemes d’alt risc, o que entrin dins de les pràctiques prohibides o de les normes de transparència que es descriuen més avall. Per tant, un assistent de xat de LAMB que parla amb els estudiants continua subjecte a les normes de transparència.

El Reglament d’IA va ser modificat per l’Òmnibus digital sobre la IA (Reglament (UE) 2026/1744), en vigor des del 27 de juliol de 2026. Les dates que segueixen ja el tenen en compte.

### Alfabetització en IA {#ai-literacy}

Des del 2 de febrer de 2025, els proveïdors i els responsables del desplegament tenen obligacions en matèria d’alfabetització en IA. Des del 27 de juliol de 2026, el text diu que «adoptaran mesures per donar suport al desenvolupament de l’alfabetització en IA del seu personal i d’altres persones que s’ocupen del funcionament i la utilització de sistemes d’IA en nom seu» (traducció pròpia). No exigeix cap nivell garantit.

**Com hi ajuda LAMB.** Els docents construeixen els seus propis assistents, poden veure el prompt complet que s’envia al model i proven els assistents abans que els facin servir els estudiants. Això és un contacte directe amb el funcionament d’aquests sistemes.

**Què ha de fer la institució.** Adoptar mesures per donar suport a l’alfabetització en IA del personal que configura i fa servir LAMB, per exemple formació. El programari no inclou cap programa de formació. L’equip de LAMB ofereix [formació per al personal en alfabetització en IA i governança de la IA](/ca/contact/#training).

### Pràctiques prohibides: reconeixement d’emocions {#prohibited-practices-emotion-recognition}

Des del 2 de febrer de 2025, el Reglament d’IA prohibeix l’ús de sistemes d’IA «per inferir les emocions d’una persona física en els àmbits del lloc de treball i dels centres educatius» (traducció pròpia), excepte per motius mèdics o de seguretat. Les directrius de la Comissió donen exemples de l’àmbit educatiu: inferir l’interès o l’atenció dels estudiants està prohibit, i també el reconeixement d’emocions durant les proves d’admissió. També està prohibida la IA que fa servir tècniques manipuladores o enganyoses, o que explota vulnerabilitats derivades de l’edat, quan altera de manera substancial el comportament d’una persona d’una manera que causa o pot causar un perjudici considerable.

**Com hi ajuda LAMB.** LAMB no té cap funció dissenyada per inferir les emocions, l’interès o l’atenció dels estudiants.

**Què ha de fer la institució.** No fer servir LAMB, ni cap eina connectada a LAMB, amb aquesta finalitat, i comprovar que els assistents no estiguin dissenyats per manipular els estudiants.

### Usos d’alt risc en educació {#high-risk-uses-in-education}

El Reglament d’IA classifica com a d’alt risc quatre usos en educació: decidir l’admissió o l’assignació a centres, avaluar els resultats d’aprenentatge, valorar el nivell educatiu que rebrà una persona i vigilar els estudiants per detectar comportaments prohibits durant les proves. **Les obligacions per a aquests usos s’apliquen a partir del 2 de desembre de 2027.** L’Òmnibus digital va ajornar aquesta data, que era el 2 d’agost de 2026.

L’esborrany de directrius de la Comissió sobre classificació, publicat per a consulta el 19 de maig de 2026 i encara no definitiu, traça una línia entre els usos sumatius i els formatius. La IA que avalua amb vista a una decisió final, com ara una qualificació que compta per a la nota final, és d’alt risc. La IA que dona retorn i suport a l’aprenentatge durant el curs, com ara un assistent de tutoria, no s’hauria de classificar com a d’alt risc.

**Com hi ajuda LAMB.** Un assistent de xat que es fa servir per a tutoria o retorn durant el curs és el tipus d’ús formatiu que l’esborrany de directrius no considera d’alt risc. Per a l’avaluació, l’activitat d’avaluació de fitxers manté el docent al comandament: la IA només proposa, el docent fixa la qualificació final, només aquesta qualificació va al llibre de qualificacions, i els estudiants veuen la proposta de la IA i la qualificació final etiquetades per separat.

**Què ha de fer la institució.** Decidir si cada ús entra en una categoria d’alt risc, per exemple quan les propostes de la IA alimenten qualificacions que compten. Si és així, el responsable del desplegament, entre altres obligacions, ha d’encomanar la supervisió humana a persones amb la competència, la formació i l’autoritat per exercir-la, vigilar el sistema, conservar-ne els registres durant almenys sis mesos i informar els estudiants que es fa servir un sistema d’IA d’alt risc per prendre decisions que els afecten. Els organismes públics, i els organismes privats que presten serveis públics, també han de fer una avaluació d’impacte sobre els drets fonamentals abans del primer ús. LAMB no té cap circuit de recurs i no registra si un docent ha revisat cada proposta de la IA, de manera que la institució ha de proporcionar totes dues coses amb els seus propis procediments. El projecte LAMB no ha fet cap avaluació de conformitat d’alt risc.

La data del 2 de desembre de 2027 s’aplica als sistemes posats en servei a partir d’aleshores. Un sistema que ja estigui en servei abans d’aquesta data només hi queda subjecte quan el seu disseny canviï de manera significativa, i els sistemes que fan servir les autoritats públiques han de complir com a molt tard el 2 d’agost de 2030. Per a una instal·lació de LAMB existent en una universitat pública, doncs, la data aplicable pot ser posterior al 2 de desembre de 2027.

### Transparència {#transparency}

Des del 2 d’agost de 2026, cal informar les persones quan interactuen amb un sistema d’IA, tret que sigui evident, com a molt tard en la primera interacció. Els proveïdors de sistemes que generen text també han de marcar els resultats en un format llegible per màquina, amb un període transitori fins al 2 de desembre de 2026 per als sistemes que ja són al mercat.

**Com hi ajuda LAMB.** Els estudiants es troben amb un assistent amb nom dins d’una activitat del curs, i cada resposta apareix sota aquest nom. Abans que un estudiant obtingui una clau, la pàgina d’LLM access explica què registra la passarel·la i què rep un proveïdor extern, i indica el model un cop s’ha emès la clau. L’avaluació de fitxers etiqueta la qualificació de la IA.

**Què hauria de fer la institució.** Assegurar-se que s’informa els estudiants, a l’activitat o al curs, que parlen amb una IA. El xat mateix no mostra cap avís general d’aquest tipus i no indica el model. LAMB no afegeix cap marca llegible per màquina al text generat, de manera que la institució hauria de comprovar com compleix aquesta obligació el seu proveïdor de models.

### Models d’IA d’ús general {#general-purpose-ai-models}

Des del 2 d’agost de 2025, els proveïdors de models d’ús general, com ara els grans models de llenguatge, han de publicar un resum del contingut fet servir per entrenar-los i, tret que el model es publiqui amb una llicència lliure i de codi obert amb pesos públics, documentar-lo per als qui construeixen a partir del model. Els models que ja eren al mercat abans del 2 d’agost de 2025 tenen fins al 2 d’agost de 2027 per complir. Aquestes obligacions recauen en els proveïdors dels models, no en les institucions que els fan servir.

**Com hi ajuda LAMB.** Cada organització tria els seus models, inclosos models locals de pesos oberts.

**Què pot fer la institució.** Quan triï un model, consultar el resum del contingut d’entrenament publicat pel proveïdor i la documentació disponible, d’acord amb el principi 7.

### Protecció de dades: l’RGPD {#data-protection-the-gdpr}

El Reglament general de protecció de dades (RGPD) s’aplica a totes les instal·lacions de LAMB que tracten dades d’estudiants. Les directrius de 2026 de la Comissió per als educadors indiquen que les institucions educatives actuen com a responsables del tractament, mentre que altres parts poden actuar com a encarregats del tractament en nom seu. Una proposta de la Comissió per modificar l’RGPD no s’havia adoptat a 17 d’octubre de 2026, de manera que l’RGPD s’aplica tal com està redactat.

| Punt de l’RGPD | Com hi ajuda LAMB | El que continua decidint la institució |
|---|---|---|
| Minimització de dades | Els proveïdors reben la conversa sense el nom ni el correu electrònic de l’estudiant; les claus d’LLM access fan servir una referència opaca; les analítiques del docent mostren les converses amb usuaris numerats en lloc de noms | Què es diu als estudiants que no escriguin; LAMB no filtra les dades personals dels missatges |
| Informació als estudiants | L’avís de transcripcions i l’avís d’LLM access expliquen, abans de l’ús, la revisió nominal de transcripcions i què registra la passarel·la; cap avís no esmenta que el propietari de l’assistent pot llegir les converses, sense noms, a les analítiques | L’avís de privadesa, la base jurídica i com exercir els drets; l’avís de transcripcions és informació, no una base jurídica |
| Encarregats i transferències | Els models locals mantenen les converses al campus; els proveïdors es trien per a cada organització | Els contractes amb qualsevol proveïdor al núvol i les condicions de qualsevol transferència fora de la UE |
| Decisions automatitzades | En l’avaluació de fitxers, la qualificació del docent és la decisió | Que cap decisió significativa no depengui només d’un resultat de la IA, i com la poden impugnar els estudiants |
| Avaluació d’impacte | Programari lliure que es pot examinar, executar al campus i provar | Si cal una avaluació d’impacte relativa a la protecció de dades, i dur-la a terme |
| Conservació | Quan la institució executa LAMB, els xats, els lliuraments i les qualificacions s’emmagatzemen a les seves pròpies bases de dades | Quant de temps es conserven els xats, els lliuraments i les qualificacions; LAMB no elimina res automàticament |

Una referència pseudonimitzada continua sent una dada personal per a la institució, que la pot vincular amb l’estudiant.

## Per saber-ne més {#read-further}

El manifest, amb el seu text actual i la seva llista de comprovació per avaluar eines d’IA en educació, el publiquen els seus autors.

[Llegeix el Safe AI in Education Manifesto ↗](https://manifesto.safeaieducation.org)

[Privadesa, RGPD i governança de la IA](/ca/privacy/) · [Fer servir LAMB com a estudiant](/ca/students/) · [El projecte i la seva recerca](/ca/research/)
