---
title: Haz que la IA sea útil dentro de tu institución
description: Planifica un piloto docente con LAMB y responsabilidades claras sobre el acceso, los proveedores, los datos y el soporte.
translationKey: institutions
weight: 2
aliases: [/next/]
---

LAMB lleva la IA generativa al entorno de aprendizaje de la institución. Docentes y estudiantes usan asistentes y actividades a través del LMS, mientras la institución gestiona el acceso, los proveedores de modelos y las condiciones en que se tratan los datos de los cursos.

Es **software libre con licencia GNU GPL v3**, con el código fuente disponible para inspeccionarlo, adaptarlo y compartirlo según la licencia. LTI conecta las actividades con plataformas LMS como Moodle y Canvas. El conector opcional de Moodle también da a LAMB LEGATUS, el agente para docentes, acceso al contenido y a la actividad del curso que estén permitidos, mediante servicios web estándar y sin instalar ningún plugin de Moodle.

## Tres formas de empezar {#three-ways-to-begin}

Elige el siguiente paso que encaje con tu equipo.

{{< adoption-routes >}}

## La última milla de tu IA {#the-last-mile-for-your-ai}

Puede que tu institución ya tenga sus propios modelos o use un proveedor que cumple sus requisitos. LAMB da a cada estudiante acceso a ellos con las reglas que fijan el centro y el docente: asignaciones por docente, límites por estudiante, horarios y una clave personal cuyo uso se contabiliza. En la 0.8 esto cubre las actividades LLM access, para las herramientas propias de los estudiantes. [La última milla de tu IA →](/es/institutions/ai-governance/)

## Gobernanza y elección de proveedor {#governance-and-provider-choice}

Decide quién puede crear y usar actividades de IA, qué servicios de generación y de embeddings están aprobados y cómo se puede acceder a los contenidos y a las conversaciones. Estas decisiones hacen que LAMB forme parte del trabajo de la institución en privacidad, RGPD y gobernanza de la IA. El cumplimiento normativo depende de las políticas y del despliegue de la institución, además de la configuración del software.

Elige entre los proveedores admitidos con inferencia en servidores propios, servicios en la nube o la combinación que mejor se ajuste a tu política. Alojar LAMB y alojar los modelos son decisiones distintas; toma las dos de forma explícita.

[Privacidad, RGPD y control institucional →](/es/privacy/)

## Lo que puede ofrecer una institución {#what-an-institution-can-provide}

| Necesidad | Qué aporta LAMB | Qué decide tu institución |
|---|---|---|
| El profesorado necesita asistentes específicos para cada asignatura | Una interfaz para instrucciones, materiales y pruebas | Quién crea asistentes, qué fuentes se permiten y cómo se revisa la calidad |
| Los estudiantes necesitan acceso dentro de su curso | Vías de integración con el LMS | La configuración LMS/LTI admitida, la matrícula y el soporte |
| Los equipos necesitan poder elegir servicios de IA | Conexiones con modelos configurables | Proveedores locales o externos, datos aprobados, gasto y acuerdos de servicio |
| Los estudiantes necesitan acceso a modelos para sus propias herramientas | Actividades LLM access: claves personales con límites, horarios y registros de uso | Qué modelos, cuántos tokens por docente y por estudiante, y cuándo |
| La administración necesita un servicio operado | Administración de organizaciones y usuarios | Alojamiento, copias de seguridad, monitorización, actualizaciones y responsabilidad de la operación |
| Quienes innovan necesitan un punto de partida | API pública y recursos para herramientas educativas | Alcance, responsabilidad del despliegue y aceptación de cada aplicación |

Las capacidades varían según la versión instalada. Consulta la [disponibilidad](/es/availability/) antes de tomar una demostración como un compromiso de despliegue.

## Empieza con un piloto acotado {#begin-with-a-bounded-pilot}

Elige una asignatura, un equipo docente pequeño y un propósito de aprendizaje claro. Designa a la persona responsable académica, al contacto del LMS y a quien opera el sistema. Acuerda qué datos se pueden usar, cómo se cubrirán los costes de los modelos y cómo se informará a los estudiantes.

Antes de invitar a los estudiantes, prueba el recorrido completo: acceso del docente, preparación de documentos, comportamiento del asistente, lanzamiento por parte del estudiante y soporte. Cuando una actividad devuelva una calificación, prueba la escala que se muestra y el resultado en el libro de calificaciones, además de la conexión técnica.

Evalúa el piloto con preguntas que realmente puedas responder: ¿ayudó el asistente en la tarea elegida? ¿Qué respuestas fallaron? ¿Pudo el docente corregir el problema? ¿Se pudo dar soporte al servicio? Las cifras de uso, por sí solas, no demuestran un beneficio para el aprendizaje.

## La privacidad es una decisión de despliegue {#privacy-is-a-deployment-decision}

Alojar LAMB en servidores propios no mantiene, por sí solo, todas las peticiones a los modelos dentro del campus. Los proveedores externos de generación y de embeddings pueden tratar el contenido que se les envía. El acceso a las conversaciones y su conservación también necesitan una política institucional explícita.

[Preguntas para tu revisión de privacidad y seguridad →](/es/privacy/)

## Pasa al siguiente paso adecuado {#move-to-the-right-next-step}

- **Equipo del LMS:** [revisa la vía de publicación y de acceso desde el curso](/es/guides/publishing/).
- **Responsable de operación del sistema:** [planifica la operación y el despliegue](/es/institutions/operations/).
- **Responsable docente:** [prepara un primer asistente](/es/guides/first-assistant/).
- **Equipo de desarrollo de aplicaciones:** [explora la vía para desarrolladores](/es/developers/).
