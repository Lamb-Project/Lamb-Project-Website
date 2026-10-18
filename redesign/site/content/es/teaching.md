---
title: Lleva la IA a tu curso
description: Un camino práctico desde un propósito docente hasta un asistente de aprendizaje probado.
translationKey: teaching
weight: 1
---

LAMB ofrece a los docentes un entorno para crear asistentes de aprendizaje RAG, preparar la preevaluación basada en rúbricas (PRE) y analizar y mejorar sus actividades, con LAMB LEGATUS y una conexión opcional con los cursos de Moodle del docente. Los estudiantes acceden a las herramientas configuradas desde el entorno virtual de aprendizaje (LMS) de la institución, incluidos Moodle o Canvas mediante LTI. Puedes preparar un asistente en una interfaz web sin escribir código de aplicación.

## Asistentes RAG a partir de los materiales del curso {#rag-assistants-from-course-materials}

La generación aumentada por recuperación (RAG) proporciona a un asistente, cuando responde, los fragmentos pertinentes de las fuentes seleccionadas. Úsala para construir un asistente en torno a las lecturas de tu curso, documentos de referencia o materiales docentes.

Tú defines su papel y sus instrucciones, eliges un modelo disponible y conectas las fuentes. La institución gestiona los modelos permitidos y el acceso. Prueba tanto la recuperación como la respuesta generada: recuperar un fragmento pertinente no garantiza que la respuesta lo use correctamente.

{{< capture src="/images/guides/kb-query.png" alt="Detalles de la Base de Conocimiento con una consulta sobre el código de referencia del curso y el horario de tutorías, y el fragmento recuperado de los apuntes del curso" caption="Comprobación de la recuperación: la consulta devuelve el fragmento de los apuntes del curso. LAMB 0.8, datos de demostración." >}}

[Conecta y comprueba tus materiales →](/es/guides/knowledge/)

[Investigación: mejorar la recuperación de la terminología educativa →](/es/research/#improving-retrieval-for-educational-terminology)

## Preevaluación basada en rúbricas (PRE) {#rubric-based-pre-assessment-pre}

Crea un asistente que aplique una rúbrica al trabajo del estudiante y prepare retroalimentación o una propuesta de evaluación para su revisión. PRE apoya el proceso de evaluación del docente: el docente valora la propuesta y decide qué comunicar o registrar.

LAMB incluye la creación de rúbricas y flujos de evaluación de archivos. Define los criterios, proporciona la rúbrica prevista al asistente de evaluación y pruébalo con entregas representativas. Revisa la retroalimentación y las puntuaciones propuestas antes de usarlas en un curso. Si la actividad devuelve una calificación al LMS, comprueba tanto la revisión del docente como el resultado en el libro de calificaciones.

{{< capture src="/images/guides/pre-review.png" alt="Vista del docente de una actividad de evaluación de archivos: una entrega de un estudiante con la puntuación de la IA, un botón plegado con el comentario de la IA, la puntuación final y un botón para enviar las calificaciones a Moodle" caption="Una actividad de evaluación de archivos: la IA propone una puntuación y un comentario con la rúbrica del docente; el docente revisa, acepta o edita la calificación y la envía al libro de calificaciones. LAMB 0.8, 16 de octubre de 2026, datos sintéticos, con una herramienta de pruebas LTI en lugar de Moodle." >}}

[Elige la actividad del curso y la vía LTI →](/es/guides/0.8/lti/#course-activities)

[Investigación: una prueba de concepto de evaluación con IA basada en rúbricas →](/es/research/#ai-assisted-assessment-in-software-engineering)

## LAMB LEGATUS: un agente para el docente {#lamb-legatus-an-agent-for-the-teacher}

LAMB LEGATUS es un agente integrado en LAMB. Un modelo de lenguaje por sí solo únicamente escribe texto. LAMB LEGATUS es el entorno de ejecución que lo rodea: herramientas que leen y modifican tu trabajo en LAMB y leen tu curso de Moodle, los permisos de tu cuenta y un paso de aprobación que el modelo no puede saltarse. El nombre viene del legatus romano, que actuaba en nombre del Senado.

Describes lo que quieres en lenguaje corriente, y trabaja junto a la página en la que estás:

- **Diseñar conversando:** crea un asistente, mejora sus instrucciones, prepara una base de conocimiento o una rúbrica.
- **Pruebas integradas:** propone casos de prueba, los guarda cuando das tu conformidad, los ejecuta y da su propia valoración de cada respuesta para que tú la compruebes.
- **Tu curso de Moodle, al alcance:** con la conexión con Moodle, lista y lee los recursos de tu curso e importa los que elijas.
- **Escenarios de aprendizaje:** describe una vez tu público, tu propósito y tus restricciones, y las conversaciones nuevas parten de ellos.

**Pregunta antes de cambiar tu trabajo.** Crear, actualizar, publicar o borrar un asistente, modificar una base de conocimiento, una rúbrica o un escenario de aprendizaje, y cada importación o escritura en Moodle esperan en una tarjeta de aprobación; el cambio que apruebas es el cambio que hace LAMB. Leer, y guardar, ejecutar y evaluar pruebas, no necesitan tarjeta. Tu organización elige el modelo que usa.

{{< capture src="/images/guides/legatus-improve-prompt.png" alt="Panel de LAMB LEGATUS junto a la lista de Asistentes de Aprendizaje, con una tarjeta de aprobación para actualizar las instrucciones de un asistente" caption="Una propuesta para actualizar las instrucciones de un asistente, a la espera de la aprobación del docente. Todavía no ha cambiado nada. LAMB 0.8, datos de demostración." >}}

{{< capture src="/images/guides/legatus-tests-saved.png" alt="Tres casos de prueba guardados por LAMB LEGATUS en la pestaña Tests del asistente" caption="Casos de prueba que LAMB LEGATUS propuso y guardó cuando el docente dio su conformidad, antes de ejecutarlos. Guardar pruebas no necesita tarjeta de aprobación. LAMB 0.8, datos de demostración." >}}

[Trabaja con LAMB LEGATUS →](/es/guides/0.8/legatus/)

## Tu curso de Moodle, conectado {#your-moodle-course-connected}

LAMB se conecta con Moodle de dos maneras, y **no hace falta ningún plugin de Moodle** para ninguna de ellas.

- **Actividades en tu curso.** Las actividades de LAMB se añaden a un curso de Moodle como Herramienta externa mediante LTI 1.1 estándar: un chat con tus asistentes, la evaluación de archivos con una rúbrica y, donde tu organización lo ha configurado, [LLM access](/es/institutions/ai-governance/) (acceso a modelos de lenguaje), con claves personales para las herramientas propias de los estudiantes. Los estudiantes las abren desde el curso. En la evaluación de archivos, el docente revisa las calificaciones y las envía al libro de calificaciones de Moodle. También se puede añadir por LTI un único asistente publicado o el acceso a Creator; consulta [la guía de LTI](/es/guides/0.8/lti/).
- **Tu curso, para LAMB LEGATUS.** Con el conector opcional de Moodle, conectas tu propia cuenta de Moodle en la página **Tu Moodle** (el enlace **Moodle** de la barra superior de LAMB). Entonces LAMB LEGATUS puede listar tus cursos, leer sus recursos e importar el material seleccionado a una base de conocimiento, a través de los servicios web estándar de Moodle y con los permisos de tu cuenta.

Tu administrador de LAMB activa el conector, y Moodle debe exponer los servicios estándar. El conector solo lee, salvo que tu organización permita publicar en foros o guardar calificaciones; en ese caso cada escritura necesita su propia aprobación, un estudiante cada vez en el caso de las calificaciones. Los nombres, las publicaciones y las calificaciones de los estudiantes que lee LAMB LEGATUS llegan al proveedor de modelos configurado por la organización; con un proveedor externo, salen de tu institución. Usa la configuración de datos y de modelos aprobada por la institución.

{{< capture src="/images/guides/connector-import-approval.png" alt="Página Tu Moodle, conectada, junto a una tarjeta de aprobación de LAMB LEGATUS para crear una base de conocimiento a partir de una carpeta de Moodle, con la lista de dos archivos" caption="Tu Moodle, conectado, y una importación desde una carpeta de Moodle a la espera de aprobación: la tarjeta indica el origen, el destino y cada archivo. Moodle 4.5 de demostración y LAMB 0.8, cuenta sintética." >}}

[Conecta LAMB y Moodle →](/es/guides/0.8/moodle/)

## Analiza y evalúa el comportamiento del asistente {#analyse-and-evaluate-assistant-behaviour}

Usa casos de prueba repetibles y resultados guardados para examinar cómo responde un asistente. Las vistas de actividad y las analíticas ofrecen las evidencias de uso y de conversación disponibles según los permisos y la política de revisión configurada. LAMB LEGATUS puede ayudarte a interpretar esas evidencias y a proponer mejoras.

Compara las respuestas reales con tu propósito de aprendizaje y tu rúbrica. Las ejecuciones de prueba y la actividad de los estudiantes son evidencias de tipos distintos; un recuento de uso por sí solo no demuestra un beneficio para el aprendizaje.

{{< capture src="/images/guides/tests-result.png" alt="Pestaña Tests del asistente con un caso de prueba guardado y su ejecución, con la pregunta y la respuesta del asistente" caption="Un caso de prueba guardado y su ejecución con un asistente RAG. El docente lee la respuesta y registra una valoración. LAMB 0.8, datos de demostración." >}}

[Prueba un asistente →](/es/guides/testing/)

## Empieza por un propósito docente {#start-with-a-teaching-purpose}

Un asistente podría ayudar a los estudiantes a practicar la explicación de un concepto, a encontrar un fragmento en los apuntes del curso o a trabajar una pregunta sin darles la respuesta de inmediato. Son diseños docentes posibles: su calidad depende de tus instrucciones, tus fuentes, tu modelo y tus pruebas.

Para una primera actividad, mantén un propósito acotado. Por ejemplo: "Ayuda a los estudiantes a encontrar la sección pertinente de la guía del curso y a explicarla con sus propias palabras". Decide qué debe hacer el asistente cuando no encuentre una respuesta.

## Un primer proyecto pequeño {#a-small-first-project}

1. **Consigue acceso.** Tu institución te facilita una dirección de LAMB o un enlace de lanzamiento en su LMS. El sitio web público del proyecto no es un servicio de acceso compartido.
2. **Crea un asistente.** Dale un propósito, unas instrucciones y un modelo aprobado por la institución.
3. **Añade material del curso.** Conecta una base de conocimiento disponible y comprueba después que se pueden recuperar los fragmentos previstos.
4. **Prueba su comportamiento.** Haz una pregunta normal, una pregunta que el material no cubre y una petición engañosa. Lee tú las respuestas.
5. **Publícalo para un curso.** Sigue la vía de integración con el LMS de tu institución y comprueba el acceso como estudiante.

[Crea tu primer asistente →](/es/guides/first-assistant/)

## Lo que sigue siendo decisión tuya {#what-remains-your-decision}

Tú eliges el objetivo de aprendizaje, los materiales que pueden usar los estudiantes y qué se considera una respuesta útil. Proporcionar documentos no garantiza respuestas ni referencias correctas. Explica a los estudiantes el papel del asistente y dales una forma de comunicar problemas.

Los controles y permisos disponibles dependen de la revisión instalada y de la configuración de tu institución. Revisa la retroalimentación y las sugerencias generadas por IA según el proceso de evaluación de tu curso.

## Si ya usas LAMB {#if-you-already-use-lamb}

- [Conecta y comprueba los materiales del curso](/es/guides/knowledge/).
- [Prepara un conjunto repetible de casos de prueba](/es/guides/testing/).
- [Haz que un asistente esté disponible a través de tu LMS](/es/guides/publishing/).
- [Consulta las versiones y la disponibilidad de funcionalidades](/es/availability/).

Para el acceso a tu cuenta y los permisos del curso, contacta con el equipo de soporte de tu institución. Para un problema del producto que se pueda reproducir, usa el [gestor de incidencias del proyecto](https://github.com/Lamb-Project/lamb/issues) sin incluir contenido privado del curso ni credenciales.
