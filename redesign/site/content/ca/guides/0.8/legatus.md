---
title: Treballa amb LAMB LEGATUS
description: Fes servir l’agent integrat de LAMB per als docents per construir, millorar i provar assistents, amb la teva aprovació abans que canviï res.
translationKey: v08-legatus
weight: 3
aliases: [/guides/legatus/]
---

**Per a docents.** LAMB LEGATUS és l’agent integrat de LAMB per als docents. Descrius el que vols amb llenguatge planer i t’ajuda a crear i millorar assistents, a treballar amb bases de coneixement i rúbriques, a escriure i executar proves i a orientar-te per LAMB. Actua en nom teu, i les decisions continuen sent teves: els canvis a la teva feina esperen la teva aprovació. El nom ve del legatus romà, que actuava en nom del Senat.

Les captures mostren LAMB 0.8 el 17 d’octubre de 2026 amb contingut sintètic i un model local. La teva organització pot fer servir un altre model.

## Obre’l {#open-it}

Tria el botó blau fosc **LAMB LEGATUS** de la barra superior, al costat del teu nom. S’obre un tauler al costat de la pàgina en què treballes, de manera que pots veure com canvia LAMB mentre hi parles. En un telèfon, el tauler ocupa tota la pantalla i té un botó **Back to LAMB**.

La capçalera del tauler té **New conversation**, **History** i **Escenaris d’aprenentatge**. Si has descrit escenaris d’aprenentatge (el teu públic, el propòsit i les restriccions), una conversa nova et pregunta primer quin vols fer servir. **History** enumera les converses desades perquè les puguis cercar i reprendre.

{{< capture src="/images/guides/legatus-welcome.png" alt="Tauler de LAMB LEGATUS obert al costat de la llista d’assistents d’aprenentatge amb el missatge de benvinguda" caption="Una conversa nova amb LAMB LEGATUS al costat de la pàgina Assistents d’Aprenentatge, LAMB 0.8, 17 d’octubre de 2026." >}}

## Quatre coses per provar {#four-things-to-try}

1. **Crea un assistent.** «Crea un assistent anomenat Stats Tutor per a estudiants de primer curs que només respongui a partir de la meva base de coneixement Statistics notes.» LAMB LEGATUS proposa l’assistent i mostra una targeta amb un botó **Crear**.
2. **Millora’n les instruccions.** «Canvia les instruccions de Stats Tutor perquè doni pistes en lloc de solucions completes.» La targeta diu que s’actualitzaran les instruccions i ofereix **Aprovar**, **Editar proposta** i **Cancel·lar**.
3. **Prova’l.** «Genera tres casos de prova per a Stats Tutor i digues-me quines respostes no tenen en compte els apunts.» Proposa casos, els desa quan hi estàs d’acord i els pot executar i avaluar. Desar i executar proves no necessita cap targeta d’aprovació.
4. **Fes servir el teu curs de Moodle.** Si la teva organització ha activat el connector de Moodle i has connectat el teu compte: «Crea una base de coneixement anomenada Unit 1 readings a partir de la carpeta Readings del meu curs de Moodle.» Consulta [Connecta LAMB i Moodle](/ca/guides/0.8/moodle/).

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="Targeta d’aprovació de LAMB LEGATUS per actualitzar les instruccions d’un assistent" caption="Una proposta per actualitzar les instruccions d’un assistent, pendent d’aprovació. Encara no ha canviat res." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="Tres casos de prova desats per LAMB LEGATUS i mostrats a la pestanya Tests de l’assistent" caption="Després que el docent li demanés que desés els tres casos proposats, LAMB LEGATUS els va desar sense targeta d’aprovació i va obrir la pestanya Tests. Les proves encara no s’han executat." >}}

Després, comprova tu mateix el resultat: obre l’assistent, xateja-hi i llegeix els [resultats de les proves](/ca/guides/0.8/testing/).

## Com funcionen les aprovacions, i per què {#how-approvals-work-and-why}

LAMB LEGATUS llegeix lliurement, però pregunta abans de canviar la teva feina. Crear, actualitzar, publicar, despublicar o esborrar un assistent, canviar una base de coneixement, una rúbrica, una plantilla o un escenari d’aprenentatge, i qualsevol importació o escriptura a Moodle mostren primer una targeta d’aprovació.

La targeta mostra els camps clau i, quan la teva organització té un model petit i ràpid, una frase planera que explica què passarà. En una importació, indica l’origen, la destinació i cada fitxer. Pots:

- **Aprovar** (o **Crear**, o **Crear i importar**) per executar exactament el que mostra la targeta;
- **Editar proposta** i descriure què cal canviar;
- **Cancel·lar**.

També funciona escriure sí o no a la conversa. Si demanes una altra cosa mentre hi ha una proposta pendent, LAMB LEGATUS diu que la proposta encara espera i no fa res més en aquell torn. Si revisa una proposta, apareix una targeta nova: aprova la targeta que veus, no la que esperaves. On el connector de Moodle està activat, marca **Mode avançat** a la pàgina **El teu Moodle** per veure l’ordre exacta i la configuració nova completa a cada targeta.

Aquestes accions s’executen sense targeta: llegir, xatejar amb un assistent per comprovar-lo, afegir, executar i avaluar proves, generar una rúbrica, obrir-te una pàgina de LAMB i llegir Moodle. Obrir una pàgina mai no l’omple ni l’envia.

El motiu és la responsabilitat. Tu respons del que fan servir els teus estudiants, així que el canvi que aproves és el canvi que fa LAMB, i el pots veure abans que passi.

## Què no pot fer {#what-it-cannot-do}

- Triar o pujar fitxers del teu ordinador. En lloc d’això, et guia per la pantalla Bases de Coneixement.
- Configurar l’activitat del curs al teu LMS. Continua sent un pas que fas tu, descrit a la [guia d’LTI](/ca/guides/0.8/lti/).
- Canviar els models, els proveïdors o els paràmetres de la teva organització.
- Posar qualificacions en bloc. Desar una qualificació a Moodle està desactivat tret que la teva organització ho activi, i aleshores es fa d’un estudiant i d’una aprovació cada vegada. Publicar als fòrums també està desactivat tret que s’activi.
- Demanar-te el token de Moodle, o tractar el text del contingut de Moodle com a instruccions o com a aprovació.
- Canviar d’idioma a mitja conversa. La conversa manté l’idioma fixat quan va començar: l’idioma de la teva interfície (anglès, castellà, català o basc), o l’alternativa que la teva organització hagi definit per a aquest idioma. Comença una conversa nova per canviar-lo.

## Quin model, i quines dades hi arriben {#which-model-and-what-data-reaches-it}

L’administrador de la teva organització tria el model a **Admin Org > Settings > API**, a la secció **LAMB LEGATUS**. Pot ser el model predeterminat de l’organització o un model concret compatible amb OpenAI o d’Ollama. Si no hi ha cap model configurat, LAMB LEGATUS no està disponible, en lloc de passar a un altre proveïdor. Els docents no ho poden canviar; pregunta-ho a l’administrador.

{{< capture src="/images/guides/legatus-settings.png" alt="Paràmetres de LAMB LEGATUS de l’organització amb proveïdor, model, paquet de coneixement, model auxiliar i suport d’idiomes" caption="La secció LAMB LEGATUS dels paràmetres de l’organització, visible només per als administradors de l’organització. Retallada a aquesta secció. El model és un exemple." >}}

El model rep tota la conversa: els teus missatges i el que LAMB LEGATUS llegeix per a tu, com ara les instruccions dels assistents, fragments de bases de coneixement, entrades i respostes de proves, els xats desats dels teus estudiants si preguntes per l’activitat, i noms, publicacions i qualificacions de Moodle. Un model petit i ràpid separat, si la teva organització en defineix un, escriu la frase d’aprovació a partir dels detalls de l’acció proposada i llegeix els documents de Moodle que LAMB LEGATUS obre sense importar-los. Sense model petit no hi ha frase en llenguatge planer a la targeta, i els documents els llegeix el model de LAMB LEGATUS. Les credencials del proveïdor no s’envien mai al model. Amb un proveïdor local, aquestes dades es queden a les instal·lacions de la teva institució; amb un proveïdor allotjat, en surten.

Les converses són teves i es conserven a **History**. Esborrar-ne una l’arxiva en lloc d’eliminar-la, i el servidor també conserva un registre de cada sessió. Pregunta a l’administrador quant de temps es conserven. Consulta també la [privadesa](/ca/privacy/).

**Resultat esperat:** pots obrir LAMB LEGATUS, demanar-li que millori i provi un assistent, llegir cada targeta d’aprovació abans que canviï res i saber a quin model arriba la teva conversa.
