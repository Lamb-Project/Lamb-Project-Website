---
title: LAMB - Learning Assistants Manager and Builder
description: Programari lliure per a una IA generativa gestionada per la institució dins del teu LMS, amb assistents RAG, preavaluació basada en rúbriques, LAMB LEGATUS (un agent per al docent), una connexió amb Moodle i eines per a desenvolupadors.
translationKey: home
---

<section class="lamb-hero">
<div>
<p class="lamb-kicker">Programari lliure · GNU GPL v3</p>
<h1>LAMB <small class="lamb-release-badge">{{< documentation-version >}}</small><span>Learning Assistants<br>Manager and Builder</span></h1>
<p class="lamb-lead">Porta la IA generativa a l’LMS de la teva institució. Els docents creen assistents RAG i activitats de preavaluació basada en rúbriques (PRE), mentre la institució gestiona l’accés, els proveïdors de models i les dades.</p>
<div class="lamb-actions"><a class="lamb-button" href="/ca/teaching/">Descobreix LAMB per a la docència ↗</a><a class="lamb-button lamb-button-outline" href="https://github.com/Lamb-Project/lamb">Mira’l a GitHub ↗</a></div>
<div class="lamb-project-facts"><a href="https://github.com/Lamb-Project/lamb/blob/main/LICENSE">Programari lliure · GPL v3</a><a href="https://manifesto.safeaieducation.org">Safe AI in Education Manifesto ↗</a></div>
<p class="lamb-authors">Creat per <a href="/ca/research/">Marc Alier i Juanan Pereira</a><br><span>Universitat Politècnica de Catalunya · UPV/EHU</span></p>
</div>
<figure class="lamb-brand-art"><img src="/images/lamb-logo.png" alt="Logotip de LAMB: una ovella que fa classe davant d’una pissarra" width="768" height="1152" fetchpriority="high"></figure>
</section>

<div class="lamb-strip"><span><b>Programari lliure</b> · GNU GPL v3</span><span><b>Dins del teu LMS</b> · Moodle, Canvas i LTI</span><span><b>La IA que triïs</b> · Inferència als teus servidors o al núvol</span></div>
<nav class="lamb-overview-nav" aria-label="Explora les capacitats de LAMB"><a href="#institutional-ai">Governança institucional</a><a href="#teaching-tools">RAG, PRE i avaluació</a><a href="#lamb-legatus">LAMB LEGATUS i Moodle</a><a href="#last-mile">L’última milla per a la teva IA</a><a href="#developer-ecosystem">Eines per a desenvolupadors</a></nav>

<section id="institutional-ai" class="lamb-governance">
<div><p class="lamb-kicker">Per a tota la institució</p><h2>IA generativa dins del<br>teu entorn d’aprenentatge.</h2><p>LAMB s’integra a l’LMS institucional mitjançant LTI i porta les activitats d’IA als cursos que docents i estudiants ja fan servir.</p><a class="lamb-text-link" href="/ca/institutions/">Planifica l’adopció institucional ↗</a></div>
<div class="lamb-governance-details"><div><h3>Privadesa, RGPD i governança de la IA</h3><p>Gestiona l’accés, la tria de proveïdors i el tractament de les dades com a part de la feina de la teva institució en governança de la IA i en RGPD. LAMB proporciona controls; el compliment també depèn de les teves polítiques i del teu desplegament.</p><a href="/ca/privacy/">Privadesa i governança a la pràctica ↗</a></div><div><h3>Tria on s’executa la inferència</h3><p>Fes servir la teva pròpia infraestructura d’inferència o proveïdors al núvol compatibles. Selecciona models segons les teves necessitats docents, la política institucional i els recursos.</p></div><div><h3>Programari lliure que pots examinar i adaptar</h3><p>LAMB té llicència GNU GPL v3. El seu codi font està disponible per examinar-lo, adaptar-lo i compartir-lo d’acord amb la llicència.</p></div></div>
</section>

<section id="teaching-tools" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Eines per als docents</p><h2>Materials del curs.<br>Rúbriques. Evidències.</h2></div><p>Construeix activitats d’aprenentatge, revisa’n el comportament i mantén el criteri del docent al centre.</p></div>
<div class="lamb-teaching-showcase"><div><h3>Assistents RAG construïts a partir del teu curs</h3><p>La generació augmentada per recuperació (RAG) incorpora a les respostes d’un assistent els fragments rellevants dels teus materials docents. Crea un assistent, connecta’n les fonts i posa’l a disposició dins d’un LMS com Moodle o Canvas a través de la integració LTI configurada.</p><a class="lamb-text-link" href="/ca/guides/knowledge/">Construeix amb els materials del teu curs ↗</a></div><figure class="lamb-product"><div class="lamb-product-top"><span>LAMB CREATOR</span><span>Crea un assistent</span></div><a href="/ca/guides/first-assistant/" aria-label="Consulta la guia per crear un assistent"><img src="/images/guides/assistant-create.png" alt="Formulari real del Creator de LAMB amb el nom de l’assistent, les instruccions i els controls del model" width="1280" height="1234" loading="lazy"></a><figcaption>Pantalla real del Creator de LAMB 0.8, 17 d’octubre de 2026, amb contingut de demostració. <a href="/ca/guides/screenshots/">Detalls de la captura ↗</a></figcaption></figure></div>
<div class="lamb-teaching-pair"><article><span class="lamb-kicker">PRE · Preavaluació</span><h3>Aplica rúbriques. Revisa l’avaluació.</h3><p>Crea assistents de preavaluació que apliquen una rúbrica a la feina de l’estudiant i proposen un retorn. El docent revisa el resultat i decideix com es fa servir en l’avaluació.</p><a class="lamb-text-link" href="/ca/teaching/#rubric-based-pre-assessment-pre">Descobreix PRE ↗</a></article><article><span class="lamb-kicker">Anàlisi i avaluació</span><h3>Comprova com es comporten els teus assistents.</h3><p>Fes servir casos de prova, resultats desats i l’anàlisi de l’activitat per examinar les respostes, identificar punts febles i valorar els canvis als teus assistents.</p><a class="lamb-text-link" href="/ca/guides/testing/">Prova i avalua un assistent ↗</a></article></div>
</section>

<section id="lamb-legatus" class="lamb-agent-section">
<div><p class="lamb-kicker">Un agent que treballa per al docent</p><h2>LAMB LEGATUS.<br>Dissenya conversant.</h2><p>LAMB LEGATUS és un agent integrat a LAMB: un arnès (harness) al voltant d’un model de llenguatge, amb eines per a LAMB i per al teu curs de Moodle, els permisos del teu compte i un pas d’aprovació que el model no es pot saltar. T’ajuda a crear i millorar assistents, a construir i executar proves i a preparar bases de coneixement a partir del teu curs. Els canvis als teus assistents, als teus materials i al teu curs de Moodle esperen la teva aprovació.</p><a class="lamb-text-link" href="/ca/teaching/#lamb-legatus-an-agent-for-the-teacher">Coneix LAMB LEGATUS ↗</a></div>
<div class="lamb-agent-workflow"><h3>D’un curs de Moodle a un assistent</h3><ol><li><strong>Connecta el teu curs.</strong> Fes servir el teu compte de Moodle autoritzat i els serveis que la teva institució habiliti.</li><li><strong>Selecciona el material.</strong> Demana a LAMB LEGATUS que examini els recursos del curs i prepari el contingut seleccionat per a un assistent RAG.</li><li><strong>Revisa i millora.</strong> Aprova els canvis proposats, prova les respostes i afina l’activitat amb LAMB LEGATUS.</li></ol><p><strong>No cal cap plugin addicional de Moodle.</strong> El connector fa servir els serveis web estàndard de Moodle; els serveis habilitats i els permisos del compte determinen a què pot accedir.</p></div>
</section>

<section id="last-mile" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Governança de la IA</p><h2>L’última milla<br>per a la teva IA.</h2></div><p>El model adequat, a la persona adequada, en la quantitat adequada, en el moment adequat.</p></div>
<div class="lamb-teaching-showcase"><div><h3>Els teus models, amb les teves regles, per a cada estudiant</h3><p>Un servei d’inferència no sap qui està matriculat, en quin curs ni amb quin rol. El teu LMS sí que ho sap, i LAMB ho aprèn mitjançant LTI cada vegada que un estudiant obre una activitat. L’organització fixa les regles i l’assignació de cada docent; el docent fixa els límits i un horari al curs; cada estudiant rep una clau personal per a les seves pròpies eines, i es compta l’ús de cada clau.</p><a class="lamb-text-link" href="/ca/institutions/ai-governance/">Com funciona l’última milla ↗</a></div><figure class="lamb-diagram"><a href="/ca/institutions/ai-governance/" aria-label="Com funciona l’última milla"><img src="/images/diagrams/last-mile.svg" alt="Diagrama: la teva infraestructura d’IA dona a LAMB els models autoritzats; el teu LMS diu a LAMB mitjançant LTI qui està matriculat, en quin curs, amb quin rol i en quin centre; la capa de governança de la IA de LAMB aplica les regles de l’organització i l’activitat del docent, i una passarel·la dona a cada persona una clau d’abast limitat. A LAMB 0.8 governa les eines pròpies dels estudiants; els assistents, LAMB LEGATUS i les aplicacions d’aprenentatge estan en fase de disseny." width="1200" height="800" loading="lazy"></a><figcaption>A LAMB 0.8 es governen les eines pròpies dels estudiants; els assistents, LAMB LEGATUS i les aplicacions d’aprenentatge estan en fase de disseny.</figcaption></figure></div>
</section>

<section id="developer-ecosystem" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Un ecosistema per a desenvolupadors</p><h2>Construeix eines sobre la<br>mateixa base institucional.</h2></div><p>Amplia els fluxos de treball docents amb aplicacions que fan servir els assistents de LAMB i la seva capa de gestió. Les API públiques, una plantilla d’eina i utilitats de desenvolupament ofereixen punts de partida pràctics.</p></div>
<div class="lamb-dev-tools"><a href="https://github.com/Lamb-Project/lamb-lti-test-tool"><strong>LTI Test Tool ↗</strong><span>Prova llançaments LTI 1.1, els rols de docent i d’estudiant i el retorn de qualificacions en un entorn de desenvolupament.</span></a><a href="https://github.com/Lamb-Project/moodle-cli"><strong>Moodle CLI ↗</strong><span>Treballa amb Moodle a través de les seves API de serveis web des de la línia d’ordres.</span></a><a href="https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli"><strong>LAMB CLI ↗</strong><span>Gestiona assistents, materials, proves i l’anàlisi de l’activitat des del terminal.</span></a><a href="/ca/developers/"><strong>API i plantilla d’aplicació ↗</strong><span>Construeix una aplicació educativa amb accés autoritzat als assistents i integració amb l’LMS.</span></a></div>
</section>

{{< release-panel >}}

<section class="lamb-section"><p class="lamb-kicker">Porta LAMB a la teva institució</p><h2>Tria el pas següent.</h2>

{{< adoption-routes >}}

</section>

<section class="lamb-project-note"><div><h2>Un projecte basat en la recerca</h2><p>Creat per Marc Alier i Juanan Pereira, LAMB és objecte d’estudi i de publicacions amb grups de recerca de la UPC, la UPV/EHU, la Universidad de Salamanca i la Universidad de Alicante: EduSTEAM, ONEKIN, GRIAL i Smart Learning.</p></div><a class="lamb-text-link" href="/ca/research/">Grups de recerca i publicacions ↗</a></section>
<section class="lamb-student"><div><h2>Busques l’assistent del teu curs?</h2><p>El teu docent o la teva institució t’hi donen accés a través del curs.</p></div><a class="lamb-text-link" href="/ca/students/">Comença aquí com a estudiant ↗</a></section>
