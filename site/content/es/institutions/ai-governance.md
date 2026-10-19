---
title: La última milla de tu IA
description: Da a cada estudiante acceso a los modelos de tu institución, en la cantidad adecuada y en el momento adecuado, con las reglas que fijan la organización y el docente.
translationKey: ai-governance
weight: 0
---

**Para instituciones, centros y los docentes que trabajan en ellos.** Muchas instituciones ya han decidido dónde se ejecuta la inferencia: modelos locales, o un proveedor que cumple sus requisitos. La pregunta que queda es la de la última milla. ¿Cómo obtiene cada estudiante acceso a esos modelos, según sus necesidades, con las reglas que fijan su centro y su docente?

Un servicio de inferencia conoce modelos, claves y tokens. No sabe quién está matriculado, en qué curso, con qué rol ni en qué centro. Tu LMS sí lo sabe, y LAMB lo recibe por LTI cada vez que un estudiante abre una actividad, y lo asocia a sus propias organizaciones. Eso es lo que permite a LAMB entregar **el modelo adecuado, a la persona adecuada, en la cantidad adecuada y en el momento adecuado.**

<figure class="lamb-diagram"><img src="/images/diagrams/last-mile.svg" alt="Diagrama: tu infraestructura de IA proporciona a LAMB los modelos autorizados; tu LMS indica a LAMB, mediante LTI, quién está matriculado, en qué curso, con qué rol y en qué centro; la capa de gobernanza de la IA de LAMB aplica las reglas de la organización y la actividad del docente, y una pasarela da a cada persona una clave con un alcance delimitado. En LAMB 0.8 gobierna las herramientas propias de los estudiantes; los asistentes, LAMB LEGATUS y las aplicaciones de aprendizaje están en diseño." width="1200" height="800"><figcaption>Línea continua: gobernado en LAMB 0.8. Línea discontinua: en diseño.</figcaption></figure>

## Cómo funciona en LAMB 0.8 {#how-it-works-in-lamb-08}

LAMB no transporta el tráfico por sí mismo. Una pasarela de código abierto ([LiteLLM](https://github.com/BerriAI/litellm), que aparece como **Proxy** en las pantallas de administración de LAMB) se sitúa delante de tus modelos, y LAMB la controla: emite una clave personal para cada estudiante de una actividad, fija los límites y el horario de la clave, y consulta cuántos tokens ha usado cada clave. La pasarela se incluye con LAMB 0.8 como complemento opcional del despliegue.

Los límites se cuentan en tokens. Un token es un fragmento de una palabra; una página de texto equivale aproximadamente a entre 500 y 700 tokens.

## Quién decide qué {#who-decides-what}

- **La institución** opera la pasarela y elige qué modelos ofrece. Su administrador de sistemas conecta cada organización con la pasarela una sola vez.
- **Cada centro o departamento** es una organización en LAMB, con sus propios administradores y sus propias reglas. El administrador de la organización decide si los docentes pueden repartir acceso a modelos, cómo se limitan los tokens (una bolsa compartida por actividad, una asignación personal por estudiante, o ambas), cuántos tokens puede comprometer cada docente, con excepciones para docentes concretos, y qué modelos pueden ofrecer los docentes.
- **El docente** añade una actividad **LLM access** a un curso del LMS y decide, dentro de esas reglas, la bolsa, cuánto puede usar cada estudiante por franja horaria y en total, y cuándo está abierta la actividad: en días y horas elegidos, entre dos fechas o siempre.
- **El estudiante** abre la actividad desde el curso, lee qué se registra y obtiene una clave personal para sus propias herramientas: cualquier herramienta compatible con OpenAI, como VS Code con Continue o Cline, Aider, Zed o Cursor, y Claude Code.

Un Moodle, un LAMB, muchas estrategias: la institución fija el marco, cada centro fija sus propias reglas y el docente decide en el curso.

{{< capture src="/images/guides/governance-org-policy.png" alt="Ajustes LLM access de una organización: política Both, asignación predeterminada por docente de 300000 tokens, una excepción de 1000000 para un docente, modelo course-model, franja horaria de 10 minutos y una tabla de uso por docente" caption="Las reglas LLM access de una organización en LAMB 0.8, con el uso por docente." >}}

## Qué se contabiliza {#what-is-accounted-for}

El administrador de la organización ve, para cada docente, la asignación, lo que el docente ha **comprometido** (columna Committed: las bolsas, más los totales de los estudiantes que han obtenido una clave) y los tokens realmente usados. El docente ve el uso de cada estudiante en la franja horaria actual y en total, y las peticiones rechazadas.

Antes de obtener una clave, el estudiante lee qué se registra. Con la configuración que incluye LAMB, la base de datos de la pasarela registra la hora, el modelo y el número de tokens de cada petición, vinculados al estudiante para que el docente pueda ver su uso, y no el texto de los prompts ni de las respuestas. Si el modelo se ejecuta en un proveedor externo, ese proveedor recibe el texto a nombre de la cuenta de la institución, sin el nombre del estudiante. Los registros de quien opera la pasarela se rigen por las políticas propias de la institución. [Privacidad, RGPD y control institucional](/es/privacy/) cubre el resto de LAMB.

## Qué cubre la 0.8, y sus límites {#what-08-covers-and-its-limits}

- Estas reglas gobiernan las actividades **LLM access**: claves personales para las herramientas propias de los estudiantes. Las actividades de chat y de evaluación de archivos ejecutan los asistentes de la organización a través de su proveedor de modelos, y su uso no se descuenta de estas asignaciones.
- **Un tope firme necesita una bolsa.** En la 0.8, un estudiante que sustituye su clave empieza un total nuevo, y a un docente que más tarde sube el total por estudiante no se le vuelve a comprobar su asignación. Solo una bolsa de actividad limita lo que puede usar una actividad.
- **Lo que corta el acceso es cerrar la actividad.** En la 0.8, un estudiante bloqueado todavía puede sustituir su clave, y un estudiante que deja el curso conserva su clave hasta que el docente la revoca o la actividad se cierra.
- La pasarela se ha probado como una sola instancia; todavía no se ha probado ejecutar varias para repartir carga o mejorar la disponibilidad.

Estamos diseñando la misma gobernanza para los asistentes de LAMB y para LAMB LEGATUS, con presupuestos por modelo.

## Empieza {#start}

- **Administradores de organización y docentes:** [da a los estudiantes acceso a modelos con tus reglas](/es/guides/0.8/llm-access/), paso a paso y con todas las pantallas.
- **Responsables de operación del sistema:** las [notas de instalación](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) de la pasarela en el repositorio de LAMB, y [planifica el servicio operado](/es/institutions/operations/).
- **Instituciones que planifican una estrategia:** el equipo de LAMB ofrece [consultoría sobre gobernanza de la IA](/es/contact/#consultancy).
