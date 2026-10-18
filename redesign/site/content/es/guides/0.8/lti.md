---
title: Elige tu vía de entrada desde el LMS
description: Encuentra la vía LTI adecuada para un asistente, el acceso de los docentes, una actividad de curso o una herramienta de aprendizaje independiente.
translationKey: v08-lti
weight: 4
aliases: [/guides/lti/]
---

**Para docentes y administradores del LMS.** LAMB 0.8 mantiene las vías de entrada LTI existentes. No hace falta sustituir un enlace de curso solo porque exista una vía de actividad más reciente. Usa la vía que tenga configurada tu institución y pruébala con los roles previstos.

## ¿Qué vía encaja con tu tarea? {#which-path-fits-your-task}

| Lo que quieres hacer | Vía de entrada | Qué hay que preparar |
|---|---|---|
| Que los estudiantes usen un asistente publicado | Publicación LTI de un asistente individual | Publica el asistente y usa en el LMS los datos de lanzamiento que proporciona |
| Que los docentes abran LAMB Creator desde el LMS | Acceso a Creator de la organización | Un administrador configura la herramienta Creator de la organización y los permisos de acceso |
| Configurar una actividad de curso y lanzarla como docente o como estudiante | Herramienta de actividades de LAMB | Un docente completa la configuración de la actividad antes de que entren los estudiantes |
| Lanzar una aplicación educativa alojada por separado | La herramienta LTI propia de la aplicación | Configura los datos de lanzamiento de esa aplicación y su acceso autorizado a LAMB |

Son puntos de entrada distintos. Una clave de consumidor, un secreto compartido o una URL de lanzamiento de uno no sirven para otro. Para los campos de Moodle, los ajustes de privacidad y un recorrido por la herramienta de actividades de LAMB en un Moodle de demostración, consulta [Conecta LAMB y Moodle](/es/guides/0.8/moodle/). Las integraciones documentadas usan **LTI 1.1**; esta guía no afirma que haya compatibilidad con LTI 1.3.

## Un asistente publicado {#one-published-assistant}

1. Crea y prueba el asistente en LAMB Creator.
2. Publícalo con el control de publicación del asistente.
3. Usa la URL de lanzamiento, la clave de consumidor y el secreto compartido que se proporcionan para ese asistente al configurar la herramienta externa del LMS.
4. Abre la actividad del curso con una cuenta de estudiante de demostración y comprueba que está disponible el asistente correcto.

Puede que la administración de tu LMS gestione estos ajustes por ti. Mantén en privado las credenciales de publicación. [Revisa la lista completa de comprobación de la publicación](/es/guides/0.8/publishing/).

## Acceso de los docentes a Creator {#educator-access-to-creator}

1. Pide a los administradores de LAMB y del LMS que configuren el acceso a Creator para tu organización.
2. Abre desde el LMS el enlace a Creator que proporciona la institución.
3. Comprueba que llegas a la organización prevista con los permisos de autoría adecuados.
4. [Crea tu primer asistente](/es/guides/0.8/first-assistant/).

El acceso a Creator es una vía de autoría. Por sí solo no publica un asistente ni crea una actividad para estudiantes. Donde esté habilitado, el inicio de sesión directo en la dirección de LAMB de tu institución sigue siendo una opción de acceso aparte.

## Actividades de curso {#course-activities}

Una institución puede configurar la herramienta de actividades de LAMB en su LMS. El primer lanzamiento de un docente configura la actividad; los lanzamientos posteriores de docentes y estudiantes abren la vista correspondiente. Un estudiante no puede completar la configuración inicial que corresponde al docente.

La versión candidata 0.8 incluye módulos de actividad de chat, de evaluación de archivos y LLM access. Las opciones disponibles para un docente dependen de la instalación y de su configuración. Usa las instrucciones exactas que te proporcione tu administrador para el módulo elegido.

- **Chat:** selecciona los asistentes publicados previstos y revisa los ajustes de visibilidad de las conversaciones.
- **Evaluación de archivos:** comprueba la tarea, los requisitos de entrega, la rúbrica y la revisión del docente antes de devolver ninguna calificación.
- **LLM access:** confirma que la organización ha configurado el acceso a modelos y que la asignación y el horario del curso corresponden a la actividad prevista.

Antes de que la usen los estudiantes, prueba tanto la vista de docente como la de estudiante. En la evaluación, comprueba la calificación resultante en el LMS además del lanzamiento. En el acceso a modelos, comprueba que la herramienta del estudiante puede hacer una solicitud autorizada dentro de las condiciones configuradas.

## Herramientas de aprendizaje alojadas por separado {#separately-hosted-learning-tools}

Una aplicación construida a partir de la plantilla de herramienta de LAMB tiene su propio lanzamiento y su propia configuración. Usa un asistente publicado autorizado a través de la API de LAMB. Sigue el [recorrido ilustrado de la aplicación](/es/guides/0.8/learning-tool/); no pegues los datos de lanzamiento de la aplicación en la configuración de otra herramienta de LAMB.

**Resultado esperado:** puedes identificar qué vía de entrada usa tu curso, quién la configura y qué probar como docente y como estudiante. Si un lanzamiento falla, comunica la vía, la versión instalada y el rol al equipo de soporte de tu institución, sin compartir secretos.
