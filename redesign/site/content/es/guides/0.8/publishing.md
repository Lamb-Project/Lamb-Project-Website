---
title: Haz que un asistente esté disponible en tu LMS
description: Distingue la publicación, la configuración institucional de la herramienta y el lanzamiento desde el curso por parte del estudiante.
translationKey: v08-publishing
weight: 4
aliases: [/guides/publishing/]
---

**Necesitas:** un asistente probado, permiso para publicarlo y una integración con el LMS aprobada por la institución. Pregunta a la administración de tu LMS qué vía usa tu instalación. Publicar un asistente y configurar una actividad del curso son acciones relacionadas, pero distintas.

## 1. Revisa el asistente guardado {#1-review-the-saved-assistant}

Comprueba sus instrucciones, el material de origen, el modelo y los resultados de las pruebas. Asegúrate de que el material es adecuado para los estudiantes que lo usarán. Abre la vista Propiedades del asistente y usa el control de publicación disponible en tu versión.

{{< capture src="/images/guides/assistant-properties.png" alt="Vista Propiedades del asistente, usada para revisar la configuración guardada antes de publicar" caption="Pantalla Propiedades de LAMB 0.8, 17 de octubre de 2026, con el control Publicar. Esta captura muestra la revisión previa a la publicación." >}}

## 2. Sigue la vía de integración de tu institución {#2-follow-your-institutions-integration-path}

La [guía LTI de la 0.8](/es/guides/0.8/lti/) distingue la publicación de asistentes individuales, el acceso a Creator, las actividades de curso y las aplicaciones independientes. Todas estas vías se mantienen; ninguna se considera obsoleta en esta edición.

Con una herramienta de actividades configurada por la institución, los docentes pueden elegir asistentes publicados durante la primera configuración de la actividad. Otras instalaciones muestran los datos de publicación LTI de cada asistente. No mezcles la URL de lanzamiento ni las credenciales de una vía con las de otra.

Si tu administrador te pide que añadas una actividad de Moodle de tipo **Herramienta externa** (External tool), usa exactamente la dirección de lanzamiento y la configuración que te proporcione. La vía documentada de asistente y plantilla de herramienta usa **LTI 1.1**. Confirma el protocolo y los permisos del curso antes de continuar. Mantén los secretos compartidos fuera de las capturas de pantalla, de los hilos de correo y de los informes de soporte públicos.

## 3. Compruébalo como estudiante {#3-check-as-a-learner}

Usa una cuenta de estudiante de demostración autorizada o el procedimiento de prueba que admita tu institución. Abre la actividad desde el curso, envía una pregunta y comprueba que responde el asistente previsto. Confirma que el acceso como estudiante no expone los controles de docente.

Si la actividad incluye evaluación, comprueba el paso de revisión del docente, la escala de calificación prevista y el valor que aparece en el libro de calificaciones del LMS. Un lanzamiento correcto no verifica, por sí solo, la devolución de la calificación.

## 4. Explica la actividad {#4-explain-the-activity}

Explica a los estudiantes su propósito, el uso permitido, sus limitaciones y dónde pedir ayuda. Explica la política aplicable de revisión de conversaciones y de tratamiento de datos. No des por hecho que los estudiantes son anónimos ni que una etiqueta de la interfaz establece su consentimiento informado.

**Resultado esperado:** un estudiante autorizado puede usar la actividad prevista desde el curso, y el equipo docente sabe explicar cómo funciona. Si no puedes probar el recorrido del estudiante, no presentes la configuración del curso como aceptada.

Para el lanzamiento de una **plantilla de aplicación** y su configuración por el docente, ilustrados aparte, consulta la [guía paso a paso de la herramienta](/es/guides/0.8/learning-tool/). Sus capturas con un LMS simulado no representan un despliegue institucional de Moodle.
