---
title: Connecta LAMB i Moodle
description: Afegeix activitats de LAMB a un curs de Moodle amb LTI 1.1 i, després, connecta el compte de Moodle d’un docent perquè LAMB LEGATUS pugui llegir el curs i importar-ne materials.
translationKey: v08-moodle
weight: 5
aliases: [/guides/moodle/]
---

**Per a administradors de l’LMS i docents.** Aquesta guia té dues parts independents. La part 1 posa activitats i assistents de LAMB dins d’un curs de Moodle. La part 2 permet que un docent connecti el seu propi compte de Moodle perquè LAMB LEGATUS, l’agent integrat de LAMB per als docents, pugui llegir els cursos d’aquest docent i importar materials del curs a una base de coneixement.

**LAMB no necessita cap plugin de Moodle.** La part 1 fa servir l’Eina externa (External tool) estàndard de Moodle amb LTI 1.1. La part 2 fa servir els serveis web estàndard de Moodle per a l’aplicació mòbil. No s’instal·la res al servidor de Moodle: els únics canvis a Moodle són els paràmetres d’administració estàndard que es descriuen a continuació.

Les captures mostren LAMB 0.8 i un lloc Moodle 4.5 de demostració, capturats el 17 d’octubre de 2026 amb cursos i comptes sintètics. Les adreces com ara `localhost` són valors de prova locals: fes servir les adreces públiques de la teva institució.

## Part 1. LAMB en un curs de Moodle (LTI 1.1) {#part-1-lamb-in-a-moodle-course-lti-11}

LAMB ofereix tres vies d’accés LTI. Cadascuna té el seu URL de llançament i les seves credencials, i no són intercanviables. [Tria la via d’accés des del teu LMS](/ca/guides/0.8/lti/) explica quan cal fer servir cadascuna.

| Via d’accés | L’URL de l’eina (Tool URL) acaba en | Clau de consumidor | Secret compartit |
|---|---|---|---|
| Eina d’activitats de LAMB (xat, avaluació de fitxers, LLM access) | `/lamb/v1/lti/launch` | La clau de la instal·lació, que es mostra a la pestanya LTI Settings de LAMB | Es defineix a la mateixa pestanya LTI Settings |
| Un assistent publicat | `/lamb/v1/lti_users/lti` | La clau pròpia de l’assistent, que es mostra als seus Detalls de Publicació LTI | Un sol secret per a tots els assistents publicats, que custodia l’administrador del servidor |
| Els docents obren LAMB Creator | `/lamb/v1/lti_creator/launch` | La clau de l’organització | El secret de l’organització |

LAMB comprova la signatura de cada llançament amb l’adreça on ha arribat el llançament. Per tant, el Tool URL de Moodle ha de ser l’adreça pública exacta del teu servidor LAMB, amb el mateix esquema `https` i el mateix nom de host que veuen els usuaris.

Els passos següents configuren l’eina d’activitats de LAMB una sola vegada per a tot el lloc Moodle. Després, els docents la poden afegir a qualsevol curs.

### Configura l’eina (administradors de LAMB i de Moodle) {#set-up-the-tool-lamb-and-moodle-administrators}

1. A LAMB, un administrador del sistema tria **Administració** a la barra superior i després la pestanya **LTI Settings**. A **LMS Setup Information** es mostren el **Launch URL** i la **Consumer Key**, cadascun amb un botó per copiar-lo. Escriu el secret a **OAuth Shared Secret** i tria **Save LTI Configuration**. Quan canviïs la clau de consumidor, torna a escriure el secret compartit en el mateix desament.
2. A Moodle, ves a **Site administration > Plugins > Activity modules > External tool > Manage tools** i segueix **configure a tool manually**.
3. Omple **Tool name** (per exemple, «LAMB activities»), **Tool URL** (el Launch URL del pas 1), **LTI version** «LTI 1.0/1.1», **Consumer key** i **Shared secret**.
4. Posa **Tool configuration usage** a **Show in activity chooser and as a preconfigured tool** perquè els docents la trobin al seu curs.
5. Tria un **Default launch container**. La demostració fa servir **Existing window**. Prova el contenidor que triïs amb un compte de docent i un d’estudiant abans que els cursos el facin servir.
6. A **Privacy**:
   - **Share launcher's email with tool: Always.** En el primer llançament d’un docent, LAMB troba el compte de LAMB del docent per aquest correu electrònic. Sense el correu, un docent el compte de LAMB del qual fa servir un correu i una contrasenya normals veu una pàgina que li demana que es posi en contacte amb l’administrador.
   - **Share launcher's name with tool: Always.** LAMB el fa servir com a nom visible.
   - **Accept grades from the tool.** Només cal per a l’avaluació de fitxers (File Evaluation), que envia les qualificacions a Moodle quan el docent les sincronitza. Tria **Always**, o **As specified in Deep Linking definition or Delegate to teacher** perquè cada docent ho decideixi a l’activitat. Moodle només envia les dades de retorn de qualificacions quan aquesta opció està activada.
7. Deixa la secció **Services** tal com està i tria **Save changes**.

{{< capture src="/images/guides/moodle-tool-config.png" alt="Formulari de configuració de l’eina externa de Moodle omplert per a l’eina d’activitats de LAMB" caption="Administració del lloc de Moodle 4.5 en un lloc de demostració, 17 d’octubre de 2026. Moodle amaga el secret compartit. El Tool URL és una adreça de prova local." >}}

### Afegeix una activitat a un curs (docent) {#add-an-activity-to-a-course-teacher}

1. Al curs de Moodle, activa **Edit mode** i tria **Add an activity or resource**. L’eina apareix amb el nom que li ha donat l’administrador.
2. Dona un nom a l’activitat. Per a l’avaluació de fitxers, si l’administrador ha triat l’opció de delegar-ho al docent, obre la secció **Grade** i marca **Allow LAMB activities to add grades in the gradebook** (aquí Moodle mostra el nom de l’eina). Després tria **Save and display**.

{{< capture src="/images/guides/moodle-activity-chooser.png" alt="Selector d’activitats de Moodle amb una icona d’activitats de LAMB" caption="L’eina de tot el lloc apareix al selector d’activitats del docent amb el nom LAMB activities. Curs de demostració, 17 d’octubre de 2026." >}}

{{< capture src="/images/guides/moodle-add-activity.png" alt="Formulari de nova eina externa de Moodle amb el nom d’activitat Research Methods helper" caption="Nom de la nova activitat al curs de demostració, 17 d’octubre de 2026." >}}

3. El primer llançament d’un docent obre **LAMB Activity Setup** per a aquell curs. Tria el tipus d’activitat: **AI Chat Activity** o **File Evaluation**. També apareix **LLM access** quan la teva organització ha configurat l’accés dels estudiants als models.
4. Selecciona els assistents que poden fer servir els estudiants. Aquí només apareixen assistents publicats, de manera que primer els has de publicar a LAMB. Per a l’avaluació de fitxers, cada assistent seleccionat necessita una rúbrica (processador RAG «Rubric RAG», que es tria quan es crea l’assistent), i l’activitat necessita un títol i una data límit.
5. Decideix sobre **Allow instructors to review chat transcripts**. Si ho actives, els docents poden llegir les converses dels estudiants amb el nom de cada estudiant, i se’ls avisa la primera vegada que obren el xat. Aquesta opció no es pot canviar després de la configuració.
6. Tria **Save & Launch**. Arribes a la vista de docent de l’activitat, amb els seus estudiants, xats, assistents i registre d’accés.

{{< capture src="/images/guides/moodle-teacher-setup-filled.png" alt="Pàgina LAMB Activity Setup amb AI Chat Activity seleccionat i un assistent marcat" caption="Primer llançament d’un docent des de Moodle a LAMB 0.8, 17 d’octubre de 2026. No s’ofereix LLM access perquè l’organització de demostració no l’ha configurat." >}}

{{< capture src="/images/guides/moodle-teacher-after-setup.png" alt="Vista de docent de LAMB d’una activitat de xat configurada amb zero estudiants" caption="La vista de docent just després de la configuració. La revisió de transcripcions s’ha deixat desactivada, i la pàgina indica que no es pot canviar després de crear l’activitat." >}}

7. Prova-ho com a estudiant amb un compte de demostració. Abans que un docent completi la configuració, un estudiant veu una pàgina d’espera. Després de la configuració, l’estudiant obre l’activitat amb els assistents que ha seleccionat el docent. Per a l’avaluació de fitxers, les qualificacions no arriben a Moodle soles: després de revisar-les, tria **Enviar Notes a Moodle** a la vista de docent i comprova que la qualificació arriba al llibre de qualificacions de Moodle.

Un docent ha de tenir ja un compte de LAMB per configurar una activitat. LAMB el troba pel correu electrònic que envia Moodle o pel compte que es va crear quan el docent va fer servir per primera vegada l’accés al Creator des de Moodle.

### Les altres dues vies, en resum {#the-other-two-paths-in-brief}

- **Un assistent publicat.** Publica l’assistent a LAMB. Aleshores, la seva vista de detall mostra **Detalls de Publicació LTI** amb el Tool URL i la clau de consumidor. El camp del secret diu «ASK ADMIN FOR THE SECRET»: l’administrador del servidor defineix un sol secret per a tots els assistents publicats i ha de substituir qualsevol valor predeterminat pel seu. A Moodle no cal compartir el correu electrònic; comparteix el nom perquè els estudiants apareguin amb un nom llegible.
- **Els docents obren el Creator.** Un administrador de l’organització obre **Admin Org > Settings > LTI Creator**, marca **Enable LTI Creator Access** i defineix la clau de consumidor i el secret. La clau ha de ser única entre totes les organitzacions. Els usuaris nous hi arriben com a membres d’aquella organització. No cal compartir el correu electrònic; comparteix el nom perquè el nom visible sigui llegible.

**Resultat esperat:** un docent afegeix l’eina de LAMB des del selector d’activitats, completa la configuració en el primer llançament i arriba a la vista de docent, i un estudiant de demostració pot obrir l’activitat configurada.

## Part 2. Connecta el compte de Moodle d’un docent per a LAMB LEGATUS {#part-2-connect-a-teachers-moodle-account-for-lamb-legatus}

Amb aquesta connexió, LAMB LEGATUS pot llegir els cursos on fa classe un docent i, després que el docent ho aprovi, importar materials del curs a una base de coneixement de LAMB. Cada docent connecta el seu propi compte. LAMB només pot fer el que aquell compte de Moodle ja té permès fer.

### Què necessita Moodle (només paràmetres estàndard) {#what-moodle-needs-standard-settings-only}

- **Enable web services for mobile devices** està activat.
- Per a la via del codi QR: **QR code access** està posat a **QR code with automatic login**. Moodle només ofereix aquesta opció en un lloc servit per HTTPS. Moodle rebutja l’inici de sessió amb QR per als administradors del lloc i per a altres usuaris que poden canviar la configuració del lloc; aquests comptes fan servir el camp del token.
- Els usuaris poden crear tokens mòbils. Al Moodle estàndard, el rol d’usuari autenticat ja té aquest permís. No cal cap rol addicional.
- Per llegir informació de tot el curs, el docent té un rol de professor, professor sense permís d’edició o gestor en aquell curs.

L’administrador del servidor LAMB també ha de definir la clau de xifratge del connector, `LAMB_MOODLE_ENCRYPTION_KEY`, a l’entorn del servidor: una clau Fernet generada una sola vegada, tal com es descriu a les [notes d’instal·lació del connector de Moodle](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/moodle-connector.md), i amb una còpia de seguretat fora de la base de dades. Sense aquesta clau, la connexió falla amb «The administrator must configure LAMB_MOODLE_ENCRYPTION_KEY». LAMB xifra amb aquesta clau cada token de Moodle desat. Si la clau es perd o es canvia, tots els docents s’han de tornar a connectar.

### Activa el connector (administrador de l’organització) {#enable-the-connector-organization-administrator}

1. Obre **Admin Org > Settings > Moodle**.
2. Marca **Enable Moodle connector**.
3. Introdueix l’**Allowed Moodle base URL**: una sola adreça, `http` o `https`, sense nom d’usuari, consulta ni fragment.
4. Tria l’**Access mode**. **Read only** permet llegir i fer importacions aprovades. **Allow selected writes** fa disponibles dues caselles més: **Allow forum replies and new discussions** i **Allow reviewed grade proposals to be saved**. L’escriptura de qualificacions està desactivada per defecte.
5. Llegeix el text informatiu de la pàgina (el seu «AAC driver model» és el model que fa servir LAMB LEGATUS) i després tria **Save organization settings**.

{{< capture src="/images/guides/connector-org-settings.png" alt="Paràmetres de Moodle de l’organització amb el connector activat en mode de només lectura" caption="Admin Org > Settings > Moodle a LAMB 0.8, 17 d’octubre de 2026, en mode de només lectura i amb les dues opcions d’escriptura desactivades." >}}

### Connecta el teu compte (docent) {#connect-your-account-teacher}

1. Quan el connector està activat, apareix un enllaç **Moodle** a la barra superior de LAMB. Obre **El teu Moodle**.
2. Amb un codi QR: a Moodle, obre el teu perfil, mostra el codi QR per a l’inici de sessió automàtic a l’aplicació mòbil i fes-ne una captura de pantalla. En uns tres minuts com a màxim, puja-la a **Imatge del codi QR**, tria el teu ordinador a **El teu ordinador** (macOS, Windows PowerShell o Linux) i tria **Prepara l’ordre local**. LAMB només llegeix la imatge i construeix una ordre; encara no s’intercanvia ni es desa res.
3. Executa aquesta ordre en un terminal del mateix ordinador i de la mateixa xarxa. L’ordre envia la petició estàndard d’inici de sessió amb QR de Moodle per obtenir el teu token, identificant-se com l’aplicació de Moodle perquè Moodle només accepta aquesta petició des de l’aplicació, i copia el token al porta-retalls. Si la teva institució no ho permet, fes servir el camp del token.
4. Enganxa el token a **Token del servei mòbil** i tria **Connecta Moodle**. Aquí també pots enganxar un token de servei mòbil que ja tinguis per al teu compte.
5. LAMB comprova que el token funciona al lloc Moodle permès i, després, el desa xifrat amb la teva connexió. No comprova que el compte de Moodle sigui teu, així que enganxa només un token del teu propi compte.

No enganxis mai un token de Moodle en una conversa amb LAMB LEGATUS. LAMB LEGATUS no te’n demana cap.

{{< capture src="/images/guides/connector-connect.png" alt="Pàgina El teu Moodle abans de connectar, amb la pujada del QR, la tria d’ordinador i el camp del token" caption="El teu Moodle abans de connectar, 17 d’octubre de 2026. El Moodle de demostració funciona sense HTTPS, de manera que la via del QR no es va poder completar; la connexió que es mostra a continuació es va fer enganxant un token." >}}

{{< capture src="/images/guides/connector-connected.png" alt="Pàgina El teu Moodle amb un compte connectat i un curs on l’usuari és docent" caption="Després de connectar: el lloc Moodle, la seva versió, el compte i els cursos agrupats segons el rol del docent." >}}

### Què pot fer llavors LAMB LEGATUS {#what-lamb-legatus-can-then-do}

Obre **LAMB LEGATUS** des de la barra superior i pregunta sobre el teu curs. Consulta [Treballa amb LAMB LEGATUS](/ca/guides/0.8/legatus/) per als conceptes bàsics.

- **Sense preguntar:** llegir cursos, tasques, fòrums, qualificacions, qüestionaris, el calendari i informació semblant, amb les lectures de tot el curs limitades als cursos on ets docent; recollir les publicacions noves als fòrums d’aquests cursos; llegir un fitxer, una pàgina (Page) o un llibre (Book) del curs sense importar-lo.
- **Esborranys perquè els revisis:** un retorn sobre un lliurament amb una qualificació proposada i una justificació. Un esborrany no canvia res a Moodle.
- **Després de la teva aprovació, una targeta per acció:** importar un fitxer (File), una carpeta (Folder), una pàgina (Page) o un llibre (Book) a una base de coneixement nova o existent. Les importacions necessiten aprovació fins i tot en mode de només lectura. La targeta indica l’origen, la destinació, cada fitxer i la configuració dels fragments.
- **Només si l’organització permet escriure, i amb aprovació cada vegada:** publicar o respondre en un fòrum, o desar la qualificació d’un estudiant amb la seva justificació després que hagis vist el lliurament. Quan no es permet escriure, LAMB LEGATUS t’ofereix un esborrany perquè el publiquis tu.

Marca **Mode avançat** a la pàgina **El teu Moodle** per veure l’ordre exacta a cada targeta d’aprovació, a més de l’explicació. S’aplica a totes les teves converses.

{{< capture src="/images/guides/connector-import-approval.png" alt="Targeta d’aprovació de LAMB LEGATUS per crear una base de coneixement a partir d’una carpeta de Moodle" caption="Una importació pendent d’aprovació, 17 d’octubre de 2026: carpeta d’origen, base de coneixement nova, dos fitxers, configuració dels fragments i les opcions Crear i importar, Editar proposta o Cancel·lar." >}}

### Què arriba al proveïdor de models {#what-reaches-the-model-provider}

Els noms, les publicacions i les qualificacions dels estudiants que llegeix LAMB LEGATUS arriben al proveïdor de models configurat per l’organització. Els detalls d’una acció proposada també arriben al model petit i ràpid de l’organització, que escriu l’explicació de l’aprovació. Quan LAMB LEGATUS llegeix un fitxer, una pàgina (Page) o un llibre (Book) del curs sense importar-lo, el text complet d’aquest document va al model petit i ràpid de l’organització, o al model de LAMB LEGATUS si no hi ha cap model petit configurat; LAMB LEGATUS només rep un resum general i els fragments que demana. Amb un proveïdor local, aquestes dades es queden a les teves instal·lacions; amb un proveïdor allotjat, en surten. Planifica-ho amb el teu delegat de protecció de dades. Consulta també la [privadesa](/ca/privacy/).

### Desconnecta {#disconnect}

1. A **El teu Moodle**, tria **Desconnecta Moodle**. LAMB esborra el token desat i cancel·la qualsevol aprovació que encara estigui pendent.
2. Desconnectar no revoca el token a Moodle. Per revocar-lo, canvia la teva contrasenya de Moodle i deixa marcada l’opció **Log out of all web apps** (així es tanquen totes les sessions mòbils i de serveis web del teu compte), o demana a l’administrador de Moodle que esborri el token a **Site administration > Server > Web services > Manage tokens**.

Si l’administrador canvia l’adreça de Moodle permesa, la teva connexió mostra «La connexió desada està inactiva». Desconnecta i torna a connectar.

**Resultat esperat:** El teu Moodle mostra **Connectat** amb el teu compte i els teus cursos, LAMB LEGATUS pot descriure un curs on fas classe i una importació crea una base de coneixement només després que n’aprovis la targeta.
