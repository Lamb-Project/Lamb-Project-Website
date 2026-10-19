---
title: Privacidad, RGPD y gobernanza de la IA
description: Entiende qué decisiones determinan dónde se trata el contenido y quién puede acceder a él.
translationKey: privacy
weight: 7
---

LAMB ofrece controles para que las instituciones gestionen el acceso a la IA, los proveedores de modelos admitidos y el tratamiento de los datos dentro de su entorno de aprendizaje. Estos controles apoyan el trabajo de la institución en privacidad y gobernanza de la IA, incluidas sus responsabilidades derivadas del RGPD.

La institución determina cómo se usa y se opera el servicio. Configurar LAMB es una parte de ese trabajo; el software no ofrece una garantía automática de cumplimiento del RGPD. La [guía de la Comisión Europea sobre el RGPD](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en) explica la responsabilidad de las organizaciones de cumplir los principios de protección de datos y de poder demostrar ese cumplimiento.

## Controles y decisiones institucionales {#controls-and-institutional-decisions}

| Ámbito | Qué hay que gestionar |
|---|---|
| Acceso | Organizaciones, cuentas, permisos de creación y acceso a las actividades del LMS |
| Proveedores de modelos | Servicios de modelos aprobados para generación, embeddings y LAMB LEGATUS, con inferencia local o en la nube |
| Contenido de los cursos | Qué materiales se pueden importar o enviar a un modelo, y quién puede usarlos |
| Revisión de conversaciones | Qué funciones de revisión están habilitadas, quién tiene acceso y qué se dice a los estudiantes |
| Acceso de los estudiantes a los modelos | Si los docentes pueden repartir claves de LLM access, qué modelos, las asignaciones por docente, los límites por estudiante y los horarios, y qué se dice a los estudiantes antes de que obtengan una clave |
| Conexión con Moodle | Si el conector está habilitado, qué sitio puede usar y qué operaciones están permitidas |
| Operación | Conservación, copias de seguridad, acuerdos con proveedores y procedimientos institucionales para atender solicitudes |

Algunos de estos puntos son ajustes del producto; otros son políticas institucionales y responsabilidades operativas. Evalúalos en conjunto para el despliegue elegido.

## Dónde se trata la información {#where-information-is-processed}

Cuando un asistente usa un proveedor de modelos externo, ese proveedor trata el contenido enviado en la petición. Lo mismo ocurre con las herramientas propias de los estudiantes en una actividad LLM access: sus peticiones pasan por la pasarela de la institución, que con la configuración que incluye LAMB registra la hora, el modelo y los tokens de cada petición, vinculados al estudiante, y no el texto ([la última milla de tu IA](/es/institutions/ai-governance/)). Esto puede incluir el mensaje del estudiante, el contexto de la conversación y pasajes relevantes de los materiales del curso. La preparación de documentos o la recuperación también pueden usar un servicio externo de embeddings. Las funciones de creación pueden tener su propia configuración de modelos.

Ejecutar LAMB en tu propio servidor no convierte estos servicios externos en locales. Un despliegue con modelos locales debe tener en cuenta igualmente cada servicio que habilita.

## Quién puede leer las conversaciones {#who-can-read-conversations}

El acceso a las conversaciones depende de la integración, de los permisos y de la configuración. Algunos flujos de trabajo admitidos muestran las conversaciones a revisores autorizados. Las instituciones deben decir a los estudiantes qué acceso está habilitado y no deben describir las conversaciones como anónimas sin verificar la configuración y el comportamiento reales.

Publicar, compartir y el acceso administrativo son conceptos distintos. Que un asistente no esté publicado no garantiza, en general, que ninguna otra persona autorizada pueda acceder a su información.

## Preguntas que hay que resolver antes de que empiece un curso {#questions-to-settle-before-a-course-starts}

| Pregunta | ¿Quién debería poder responderla? |
|---|---|
| ¿Qué servicios tratan los prompts, los documentos y los embeddings? | Responsable de operación del sistema y responsable del proveedor |
| ¿Qué personas pueden ver el contenido de las conversaciones? | Administrador del LMS o de LAMB y responsable docente |
| ¿Cuánto tiempo se conservan los registros y las copias de seguridad? | Responsable institucional del servicio |
| ¿Qué pasa cuando un estudiante o un docente se va? | Administradores de cuentas y de cursos |
| ¿Qué deberían evitar escribir los estudiantes? | Equipo docente y contacto institucional de privacidad |
| ¿Quién atiende las solicitudes de acceso, rectificación o supresión? | Equipos institucionales del servicio y de privacidad |

## Una base para decidir con conocimiento de causa {#a-basis-for-informed-decisions}

El [Safe AI in Education Manifesto](https://manifesto.safeaieducation.org) (Manifiesto para una IA Segura en la Educación) orienta el proyecto. No es una certificación de ningún despliegue concreto. [LAMB y el Safe AI in Education Manifesto](/es/safe-ai/) expone la respuesta de LAMB a cada principio y a las normas de la UE sobre IA. El código abierto permite la inspección; una operación responsable sigue necesitando personas, configuraciones probadas y decisiones institucionales.

[Planifica un piloto](/es/institutions/) · [Planifica la operación](/es/institutions/operations/)
