---
title: Planifica un servicio operado
description: Las decisiones operativas que hay que cerrar antes de desplegar LAMB para un curso.
translationKey: operations
weight: 1
---

**Para administradores de sistemas y del LMS.** Elige una revisión de LAMB que ya se haya evaluado y un entorno de preproducción antes de seguir las instrucciones de despliegue. Un contenedor en marcha no equivale a haber completado la prueba de aceptación de un servicio docente.

## Acuerda los límites del servicio {#agree-the-service-boundaries}

Si los docentes van a repartir acceso a modelos entre los estudiantes, planifica la pasarela opcional que LAMB 0.8 incluye como complemento: su base de datos, la dirección pública que los estudiantes pegan en sus herramientas y la conexión del administrador del sistema con el proxy para cada organización. Consulta las [notas de instalación](https://github.com/Lamb-Project/lamb/blob/lamb-0.8/Documentation/installation/token-dealer.md) y [la última milla de tu IA](/es/institutions/ai-governance/).


Identifica a la persona responsable del servicio, el entorno de alojamiento, los proveedores de modelos, la carga docente prevista y las personas que atienden las solicitudes de acceso. Decide quién aprueba las actualizaciones y quién puede restaurar el servicio.

El acceso a los modelos puede generar costes. Ten en cuenta la generación, los embeddings y cualquier servicio de modelos auxiliar que esté habilitado. Confirma los límites disponibles en el despliegue que has elegido en lugar de suponer que todas las versiones tienen los mismos controles de presupuesto.

## Usa las instrucciones de la revisión elegida {#use-instructions-for-the-selected-revision}

Empieza por la [guía de instalación de la 0.8](/es/guides/installation/), con referencias de despliegue fijadas y la secuencia del piloto.

El [repositorio público de LAMB](https://github.com/Lamb-Project/lamb) incluye recursos para el despliegue local y en producción. Elige la rama o la etiqueta que vas a desplegar y usa el README y las instrucciones de despliegue de esa revisión. No mezcles la documentación de una línea con los contenedores de otra.

La integración con el LMS también requiere una configuración de Herramienta externa (External tool) aprobada por la institución. La guía pública de la plantilla de herramienta describe **LTI 1.1**; comprueba que tu institución permite este protocolo y la vía de integración que has elegido.

## Aceptación antes del uso por los estudiantes {#acceptance-before-student-use}

- El acceso del docente funciona con la cuenta y la organización previstas.
- El modelo elegido responde y se puede recuperar una fuente conocida.
- Un estudiante puede lanzar la actividad prevista y no puede obtener controles de docente.
- Se ha explicado la visibilidad de las conversaciones, el tratamiento por parte de los proveedores y la conservación.
- Cualquier devolución de calificaciones se ha comprobado en el LMS con un estudiante de demostración.
- Una copia de seguridad se puede restaurar en un entorno aislado.
- Las actualizaciones, la notificación de incidencias y el soporte tienen responsables con nombre.

Guarda las credenciales, los registros que contienen conversaciones y las copias de seguridad fuera de los repositorios públicos. Esto es una orientación operativa, no una afirmación de que completar una lista de comprobación establezca el cumplimiento normativo.

[Preguntas sobre privacidad y datos](/es/privacy/) · [Límites de cada versión](/es/availability/)
