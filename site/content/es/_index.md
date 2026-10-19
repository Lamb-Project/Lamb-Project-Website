---
title: LAMB - Learning Assistants Manager and Builder
description: Software libre para una IA generativa gestionada por la institución dentro de tu LMS, con asistentes RAG, preevaluación basada en rúbricas, LAMB LEGATUS (un agente para docentes), conexión con Moodle y herramientas para desarrolladores.
translationKey: home
aliases: [/categories/, /tags/]
---

<section class="lamb-hero">
<div>
<p class="lamb-kicker">Software libre · GNU GPL v3</p>
<h1>LAMB <small class="lamb-release-badge">{{< documentation-version >}}</small><span>Learning Assistants<br>Manager and Builder</span></h1>
<p class="lamb-lead">Lleva la IA generativa al entorno virtual de aprendizaje (LMS) de tu institución. Los docentes crean asistentes RAG y actividades de preevaluación basada en rúbricas (PRE), mientras la institución gestiona el acceso, los proveedores de modelos y los datos.</p>
<div class="lamb-actions"><a class="lamb-button" href="/es/teaching/">Descubre LAMB para la docencia ↗</a><a class="lamb-button lamb-button-outline" href="https://github.com/Lamb-Project/lamb">Ver en GitHub ↗</a></div>
<div class="lamb-project-facts"><a href="https://github.com/Lamb-Project/lamb/blob/main/LICENSE">Software libre · GPL v3</a><a href="https://manifesto.safeaieducation.org">Safe AI in Education Manifesto ↗</a></div>
<p class="lamb-authors">Creado por <a href="/es/research/">Marc Alier y Juanan Pereira</a><br><span>Universitat Politècnica de Catalunya · UPV/EHU</span></p>
</div>
<figure class="lamb-brand-art"><img src="/images/lamb-logo.png" alt="Logotipo de LAMB: una oveja dando clase ante una pizarra" width="768" height="1152" fetchpriority="high"></figure>
</section>

<div class="lamb-strip"><span><b>Software libre</b> · GNU GPL v3</span><span><b>Dentro de tu LMS</b> · Moodle, Canvas y LTI</span><span><b>Tú eliges la IA</b> · Inferencia en servidores propios o en la nube</span></div>
<nav class="lamb-overview-nav" aria-label="Explora las capacidades de LAMB"><a href="#institutional-ai">Gobernanza institucional</a><a href="#teaching-tools">RAG, PRE y evaluación</a><a href="#lamb-legatus">LAMB LEGATUS y Moodle</a><a href="#last-mile">La última milla de tu IA</a><a href="#developer-ecosystem">Herramientas para desarrolladores</a></nav>

<section id="institutional-ai" class="lamb-governance">
<div><p class="lamb-kicker">Para toda la institución</p><h2>IA generativa dentro de<br>tu entorno de aprendizaje.</h2><p>LAMB se integra en el LMS institucional mediante LTI y lleva las actividades de IA a los cursos que docentes y estudiantes ya usan.</p><a class="lamb-text-link" href="/es/institutions/">Planifica la adopción institucional ↗</a></div>
<div class="lamb-governance-details"><div><h3>Privacidad, RGPD y gobernanza de la IA</h3><p>Gestiona el acceso, la elección de proveedores y el tratamiento de los datos como parte del trabajo de tu institución en gobernanza de la IA y en RGPD. LAMB ofrece controles; el cumplimiento depende también de tus políticas y de tu despliegue.</p><a href="/es/privacy/">Privacidad y gobernanza en la práctica ↗</a></div><div><h3>Elige dónde se ejecuta la inferencia</h3><p>Usa tu propia infraestructura de inferencia o proveedores en la nube compatibles. Selecciona los modelos según tus necesidades docentes, la política institucional y tus recursos.</p></div><div><h3>Software libre que puedes inspeccionar y adaptar</h3><p>LAMB se distribuye bajo la licencia GNU GPL v3. Su código fuente está disponible para inspeccionarlo, adaptarlo y compartirlo en los términos de la licencia.</p></div></div>
</section>

<section id="teaching-tools" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Herramientas para docentes</p><h2>Materiales del curso.<br>Rúbricas. Evidencias.</h2></div><p>Crea actividades de aprendizaje, revisa su comportamiento y mantén el criterio del docente en el centro.</p></div>
<div class="lamb-teaching-showcase"><div><h3>Asistentes RAG construidos en torno a tu curso</h3><p>La generación aumentada por recuperación (RAG) incorpora a las respuestas de un asistente los fragmentos pertinentes de tus materiales docentes. Crea un asistente, conecta sus fuentes y ponlo a disposición dentro de un LMS como Moodle o Canvas mediante la integración LTI configurada.</p><a class="lamb-text-link" href="/es/guides/knowledge/">Trabaja con los materiales de tu curso ↗</a></div><figure class="lamb-product"><div class="lamb-product-top"><span>LAMB CREATOR</span><span>Crear un asistente</span></div><a href="/es/guides/first-assistant/" aria-label="Ver la guía para crear un asistente"><img src="/images/guides/assistant-create.png" alt="Formulario real del Creator de LAMB con el nombre del asistente, las instrucciones y los controles del modelo" width="1280" height="1234" loading="lazy"></a><figcaption>Pantalla real del Creator de LAMB 0.8, 17 de octubre de 2026, con contenido de demostración. <a href="/es/guides/screenshots/">Detalles de la captura ↗</a></figcaption></figure></div>
<div class="lamb-teaching-pair"><article><span class="lamb-kicker">PRE · Preevaluación</span><h3>Aplica rúbricas. Revisa la evaluación.</h3><p>Crea asistentes de preevaluación que aplican una rúbrica al trabajo del estudiante y proponen retroalimentación. El docente revisa el resultado y decide cómo se usa en la evaluación.</p><a class="lamb-text-link" href="/es/teaching/#rubric-based-pre-assessment-pre">Descubre PRE ↗</a></article><article><span class="lamb-kicker">Análisis y evaluación</span><h3>Comprueba cómo se comportan tus asistentes.</h3><p>Usa casos de prueba, resultados guardados y el análisis de la actividad para inspeccionar las respuestas, detectar puntos débiles y valorar los cambios en tus asistentes.</p><a class="lamb-text-link" href="/es/guides/testing/">Prueba y evalúa un asistente ↗</a></article></div>
</section>

<section id="lamb-legatus" class="lamb-agent-section">
<div><p class="lamb-kicker">Un agente que trabaja para el docente</p><h2>LAMB LEGATUS.<br>Diseñar conversando.</h2><p>LAMB LEGATUS es un agente integrado en LAMB: un entorno de ejecución alrededor de un modelo de lenguaje, con herramientas para LAMB y para tu curso de Moodle, los permisos de tu cuenta y un paso de aprobación que el modelo no puede saltarse. Te ayuda a crear y mejorar asistentes, a preparar y ejecutar pruebas y a preparar bases de conocimiento a partir de tu curso. Los cambios en tus asistentes, tus materiales y tu curso de Moodle esperan tu aprobación.</p><a class="lamb-text-link" href="/es/teaching/#lamb-legatus-an-agent-for-the-teacher">Conoce LAMB LEGATUS ↗</a></div>
<div class="lamb-agent-workflow"><h3>De un curso de Moodle a un asistente</h3><ol><li><strong>Conecta tu curso.</strong> Usa tu cuenta de Moodle autorizada y los servicios que habilita tu institución.</li><li><strong>Selecciona el material.</strong> Pide a LAMB LEGATUS que examine los recursos del curso y prepare el contenido seleccionado para un asistente RAG.</li><li><strong>Revisa y mejora.</strong> Aprueba los cambios propuestos, prueba las respuestas y afina la actividad con LAMB LEGATUS.</li></ol><p><strong>No hace falta ningún plugin adicional de Moodle.</strong> El conector usa los servicios web estándar de Moodle; los servicios habilitados y los permisos de la cuenta determinan a qué puede acceder.</p></div>
</section>

<section id="last-mile" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Gobernanza de la IA</p><h2>La última milla<br>de tu IA.</h2></div><p>El modelo adecuado, para la persona adecuada, en la cantidad adecuada y en el momento adecuado.</p></div>
<div class="lamb-teaching-showcase"><div><h3>Tus modelos, con tus reglas, para cada estudiante</h3><p>Un servicio de inferencia no sabe quién está matriculado, en qué curso ni con qué rol. Tu LMS sí lo sabe, y LAMB lo recibe por LTI cada vez que un estudiante abre una actividad. La organización fija las reglas y la asignación de cada docente; el docente fija límites y un horario en el curso; cada estudiante recibe una clave personal para sus propias herramientas, y se contabiliza el uso de cada clave.</p><a class="lamb-text-link" href="/es/institutions/ai-governance/">Cómo funciona la última milla ↗</a></div><figure class="lamb-diagram"><a href="/es/institutions/ai-governance/" aria-label="Cómo funciona la última milla"><img src="/images/diagrams/last-mile.svg" alt="Diagrama: tu infraestructura de IA da a LAMB los modelos autorizados; tu LMS le dice a LAMB, por LTI, quién está matriculado, en qué curso, con qué rol y en qué centro; la capa de gobernanza de la IA de LAMB aplica las reglas de la organización y la actividad del docente, y una pasarela da a cada persona una clave con un alcance limitado. En LAMB 0.8 gobierna las herramientas propias de los estudiantes; los asistentes, LAMB LEGATUS y las aplicaciones de aprendizaje están en diseño." width="1200" height="800" loading="lazy"></a><figcaption>Las herramientas propias de los estudiantes ya se gobiernan en LAMB 0.8; los asistentes, LAMB LEGATUS y las aplicaciones de aprendizaje están en diseño.</figcaption></figure></div>
</section>

<section id="developer-ecosystem" class="lamb-section">
<div class="lamb-section-intro"><div><p class="lamb-kicker">Un ecosistema para desarrolladores</p><h2>Crea herramientas sobre la<br>misma base institucional.</h2></div><p>Amplía los flujos de trabajo docentes con aplicaciones que usan los asistentes de LAMB y su capa de gestión. Las API públicas, una plantilla de herramienta y utilidades de desarrollo ofrecen puntos de partida prácticos.</p></div>
<div class="lamb-dev-tools"><a href="https://github.com/Lamb-Project/lamb-lti-test-tool"><strong>LTI Test Tool ↗</strong><span>Prueba lanzamientos LTI 1.1, los roles de docente y de estudiante y la devolución de calificaciones en un entorno de desarrollo.</span></a><a href="https://github.com/Lamb-Project/moodle-cli"><strong>Moodle CLI ↗</strong><span>Trabaja con Moodle desde la línea de comandos a través de sus API de servicios web.</span></a><a href="https://github.com/Lamb-Project/lamb/tree/lamb-0.8/lamb-cli"><strong>LAMB CLI ↗</strong><span>Gestiona asistentes, materiales, pruebas y el análisis de la actividad desde el terminal.</span></a><a href="/es/developers/"><strong>API y plantilla de aplicación ↗</strong><span>Crea una aplicación educativa con acceso autorizado a los asistentes e integración con el LMS.</span></a></div>
</section>

{{< release-panel >}}

<section class="lamb-section"><p class="lamb-kicker">Lleva LAMB a tu institución</p><h2>Elige el siguiente paso.</h2>

{{< adoption-routes >}}

</section>

<section class="lamb-project-note"><div><h2>Un proyecto basado en la investigación</h2><p>Creado por Marc Alier y Juanan Pereira, LAMB se estudia y se describe en publicaciones junto con grupos de investigación de la UPC, la UPV/EHU, la Universidad de Salamanca y la Universidad de Alicante: EduSTEAM, ONEKIN, GRIAL y Smart Learning.</p></div><a class="lamb-text-link" href="/es/research/">Grupos de investigación y publicaciones ↗</a></section>
<section class="lamb-student"><div><h2>¿Buscas el asistente de tu curso?</h2><p>Tu docente o tu institución te da acceso a través de tu curso.</p></div><a class="lamb-text-link" href="/es/students/">Empieza aquí como estudiante ↗</a></section>
