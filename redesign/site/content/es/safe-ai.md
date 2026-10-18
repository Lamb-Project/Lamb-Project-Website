---
title: LAMB y el Safe AI in Education Manifesto
description: Por qué los autores de LAMB escribieron el Safe AI in Education Manifesto, cómo responde LAMB a cada uno de sus siete principios y qué relación tiene con las normas de la UE sobre IA.
translationKey: safe-ai
weight: 6
---

**Las personas que desarrollan LAMB escribieron el Safe AI in Education Manifesto (Manifiesto para una IA Segura en la Educación) para orientar el diseño de LAMB.** Sus cinco autores son Marc Alier Forment, Francisco José García-Peñalvo, María José Casañ Guerrero, Juan Antonio (Juanan) Pereira y Faraón Llorens Largo. Marc Alier y Juanan Pereira crearon LAMB; Francisco José García-Peñalvo y María José Casañ son coautores del artículo que lo describe.

Los principios se pusieron por escrito antes de que LAMB se describiera por primera vez. En febrero de 2024, Marc Alier, Francisco José García-Peñalvo y Jorge D. Camba formularon cinco puntos para una "Safe AI in Education" (IA segura en la educación) en un editorial del International Journal of Interactive Multimedia and Artificial Intelligence. El artículo de LAMB, enviado en julio de 2024, tomó esos puntos como requisitos de diseño: uno de sus objetivos declarados era "examinar las implicaciones de la seguridad de la IA en el contexto educativo para el diseño de LAMB" (traducción propia). Los autores publicaron los puntos como manifiesto el 29 de agosto de 2024, cuando ya existía un primer prototipo de LAMB, y los ampliaron a siete principios en septiembre de 2024. La versión 0.4.0 llegó el 8 de octubre de 2024. El texto vigente es la versión 0.5.0, del 9 de marzo de 2026, que cambió el nombre del principio 6 y dejó sin cambios la redacción de los principios.

Esta página recorre los principios uno a uno: qué pide el manifiesto, cómo responde LAMB por diseño, qué queda en manos de la institución y del docente, y dónde LAMB todavía no cumple. Describe LAMB 0.8, la versión candidata actual (octubre de 2026). Tu instalación puede usar otra versión.

{{< callout type="info" >}}
LAMB es software. La institución que lo pone en marcha es responsable de cómo se usa. Nada de lo que dice esta página es asesoramiento jurídico, una certificación ni una declaración de cumplimiento para ninguna instalación.
{{< /callout >}}

## Principio 1: Supervisión humana y responsabilidad {#principle-1-human-oversight-and-accountability}

> "Un sistema de IA no puede ser responsable de la educación de los estudiantes. Cualquier decisión tomada por la IA, particularmente aquellas relacionadas con la calificación y evaluación, debe ser transparente y totalmente responsable ante la supervisión humana."
>
> Safe AI in Education Manifesto 0.5.0, principio 1 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** El docente diseña cada asistente: sus instrucciones, su plantilla de prompt, su modelo y los materiales del curso que puede usar. Las rúbricas pertenecen al docente; una IA redacta o modifica una rúbrica solo cuando el docente se lo pide.

En la actividad de evaluación de archivos, la IA propone una calificación y un comentario, y el docente fija la calificación final. Solo un docente puede iniciar una evaluación, editar calificaciones o enviarlas al libro de calificaciones del LMS, y solo se envía la calificación final del docente, nunca la propuesta original de la IA. Los estudiantes no ven ninguna calificación hasta que el docente la publica. Entonces ven la propuesta de la IA y la calificación final como dos líneas con etiquetas separadas.

Los docentes pueden leer las transcripciones de los chats con los nombres de los estudiantes solo si activaron esa opción al configurar la actividad por primera vez; después no se puede cambiar. Sea cual sea ese ajuste, el docente propietario de un asistente, y un administrador del sistema, pueden leer las conversaciones que los estudiantes mantienen con él en las analíticas de chat de LAMB, donde los estudiantes aparecen como usuarios numerados en lugar de con su nombre.

**Lo que queda en manos de la institución y del docente.** El manifiesto reconoce a los estudiantes el derecho a recurrir ante una persona las decisiones impulsadas por la IA. LAMB no tiene una función de recurso: los recursos pasan por el docente y por los procedimientos habituales de la institución. El docente decide cuánto peso tiene cualquier propuesta de la IA.

**Límites actuales.** Un docente puede aceptar de una vez todas las propuestas de la IA de una actividad, y LAMB no registra si se revisó cada una. Un asistente creado para aplicar una rúbrica también puede colocarse en una actividad de chat, donde puede mostrar a los estudiantes una puntuación sin revisión del docente y sin ninguna etiqueta que indique que la puntuación es solo formativa. La página en la que el estudiante sube su archivo no dice que una IA puede evaluar la entrega.

## Principio 2: Garantía de confidencialidad {#principle-2-guaranteeing-confidentiality}

> "Advertimos contra el uso de herramientas gratuitas que requieren que los estudiantes se registren en servicios de terceros como un componente obligatorio de su educación."
>
> Safe AI in Education Manifesto 0.5.0, principio 2 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** LAMB es software libre bajo la GNU GPL v3, y una institución puede ejecutarlo entero en sus propios servidores, incluido un servicio de modelos local. Los estudiantes llegan a LAMB desde su curso en el LMS y nunca se registran en LAMB ni en una empresa de IA. Cada organización de LAMB configura sus propios proveedores de modelos y sus claves.

El proveedor del modelo no recibe el nombre ni el correo electrónico del estudiante. LAMB reconstruye cada petición de chat, de modo que el proveedor recibe el nombre del modelo, las instrucciones del docente, la conversación y los fragmentos del curso recuperados, sin datos de identidad. En la actividad LLM access, que da a los estudiantes una clave personal para sus propias herramientas, la pasarela ve una referencia opaca en lugar de un nombre o un correo electrónico. Las analíticas que ve el propietario de un asistente incluyen el texto de las conversaciones de los estudiantes, con cada estudiante mostrado como un usuario numerado, nunca con su nombre ni su correo electrónico.

Cuando un docente puede leer las transcripciones de una actividad de chat, LAMB 0.8 muestra a cada estudiante un aviso, una sola vez, antes de que se abra el chat. El aviso dice que los docentes de la actividad pueden leer todo lo que escribe el estudiante y las respuestas del asistente, con el nombre del estudiante. Al estudiante que no está de acuerdo se le indica que no entre y que hable con el docente. Ningún aviso informa a los estudiantes de que el propietario del asistente puede leer sus conversaciones, sin nombres, en las analíticas.

**Lo que queda en manos de la institución y del docente.** El contenido de la conversación sí llega al modelo. Si el modelo se ejecuta en el campus, se queda en el campus. Si es un modelo en la nube, el proveedor recibe el texto bajo la cuenta de la institución, y la institución necesita un contrato con ese proveedor y una decisión sobre adónde pueden ir los datos. La institución también fija cuánto tiempo se conservan los chats: LAMB los guarda hasta que alguien los borra.

**Límites actuales.** LAMB no elimina los datos personales que un estudiante escribe en un mensaje. La configuración predeterminada de los asistentes apunta a un modelo en la nube, así que una institución que quiera tenerlo todo en el campus debe cambiarla. Algunas funciones opcionales envían datos a servicios externos cuando un administrador las activa, como el trazado para desarrolladores y un conector de generación de imágenes que usa un proveedor externo. Unas pocas páginas de aviso dirigidas a los estudiantes cargan sus estilos desde una red pública de distribución de contenidos, de modo que el navegador del estudiante se conecta a ella.

## Principio 3: Alineación con estrategias educativas {#principle-3-alignment-with-educational-strategies}

> "Abogamos por el uso de sistemas de IA que estén adaptados para satisfacer las necesidades y objetivos específicos de las instituciones educativas."
>
> Safe AI in Education Manifesto 0.5.0, principio 3 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** LAMB está hecho para la educación y no para un uso general. Funciona dentro del LMS como actividades del curso: un chat con asistentes seleccionados, la evaluación de archivos y, donde la institución ha desplegado su pasarela de LLM y un administrador la ha activado, LLM access. Se organiza por institución, con roles de propietario, administrador y miembro. Los administradores deciden qué proveedores y modelos pueden usar sus docentes. Un asistente puede tener un límite de coste, y en la actividad LLM access el docente fija límites de tokens por estudiante y un horario que abre y cierra el acceso.

**Lo que queda en manos de la institución y del docente.** La política de IA de la institución, sus normas sobre copia y plagio, y qué herramientas aprueba. LAMB da a los administradores mecanismos de control; no redacta la política.

**Límites actuales.** El comportamiento de un asistente depende de las instrucciones que escribe el docente y de lo bien que las sigue el modelo elegido. LAMB no tiene una capa de moderación o de políticas que imponga por código las normas de una institución. La conexión con el LMS usa LTI 1.1; LTI 1.3 todavía no se admite.

## Principio 4: Alineación con prácticas didácticas {#principle-4-alignment-with-didactic-practices}

> "Enfatizamos la necesidad de que las herramientas de IA sean adaptables a varios diseños instruccionales."
>
> Safe AI in Education Manifesto 0.5.0, principio 4 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** El docente elige el tipo de actividad que encaja con el diseño del curso, y cómo trabaja el asistente con los materiales: hay varias estrategias de recuperación disponibles, entre ellas una que aplica una rúbrica. LAMB LEGATUS, el agente para docentes, les ayuda a diseñar un asistente sin escribir código. Los docentes pueden compartir plantillas de prompt, rúbricas y asistentes con sus colegas y reutilizarlos.

**Lo que queda en manos de la institución y del docente.** El propio diseño instruccional, y el tiempo para probar un asistente con tareas reales antes de que lo usen los estudiantes.

**Límites actuales.** El chat que ven los estudiantes es una ventana de chat general, la misma para todas las actividades, y no una interfaz adaptada a cada una. La plantilla de prompt predeterminada es genérica y no refleja ningún diseño de curso hasta que el docente la adapta.

## Principio 5: Precisión y explicabilidad {#principle-5-accuracy-and-explainability}

> "Fomentamos evaluaciones rigurosas de calidad para las herramientas de IA utilizadas en la educación. La fiabilidad de los sistemas de IA es innegociable, y la evaluación continua es necesaria para mantener la integridad del proceso educativo."
>
> Safe AI in Education Manifesto 0.5.0, principio 5 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** Los asistentes pueden responder a partir de los materiales del propio docente mediante la generación aumentada por recuperación (RAG), que los mantiene en un contexto acotado y definido, como recomienda el manifiesto. Los títulos y enlaces de las fuentes recuperadas se pasan al modelo con cada pregunta. Los docentes pueden ver el prompt completo que monta LAMB, guardar escenarios de prueba, ejecutarlos y registrar su propio veredicto sobre cada respuesta antes de que los estudiantes usen el asistente. La retroalimentación basada en rúbricas trabaja con una rúbrica explícita y sus ponderaciones.

**Lo que queda en manos de la institución y del docente.** Probar cada asistente con preguntas representativas, comprobar que los materiales del curso son correctos y están actualizados, y repetir las comprobaciones cuando cambian los materiales o los modelos.

**Límites actuales.** El manifiesto pide que las herramientas "hagan referencia a sus fuentes". En LAMB, los estudiantes ven las fuentes solo cuando el modelo las escribe en su respuesta; el chat no las muestra como una lista aparte, y la plantilla predeterminada no pide al modelo que cite. Las pruebas son manuales: LAMB no evalúa la calidad de las respuestas de forma continua, no detecta contenido inventado ni muestra el grado de confianza de una respuesta.

## Principio 6: Interfaz y comportamiento comprensibles {#principle-6-comprehensible-interface-and-behavior}

> "Estas herramientas deben transmitir explícitamente sus limitaciones y evitar presentar información errónea con confianza indebida."
>
> Safe AI in Education Manifesto 0.5.0, principio 6 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** LAMB deja claro quién ve qué. En el chat, el estudiante ve el nombre del asistente y la descripción del docente, y cada respuesta aparece bajo el nombre del asistente. Cuando la revisión de transcripciones está activada, el aviso de transcripciones dice a los estudiantes con claridad que el docente puede leer sus chats con su nombre. Antes de que el estudiante obtenga una clave, la página de LLM access explica qué registra la pasarela y que un proveedor externo recibe las peticiones sin el nombre del estudiante; indica el modelo una vez emitida la clave. En la evaluación de archivos, la calificación de la IA y la del docente llevan etiquetas separadas.

**Lo que queda en manos de la institución y del docente.** Explicar a los estudiantes, en la descripción o en las instrucciones del asistente, para qué sirve el asistente, qué no puede hacer y que sus respuestas pueden ser erróneas.

**Límites actuales.** Aquí es donde LAMB se queda más lejos del principio. El chat no muestra ningún aviso permanente de que las respuestas proceden de un modelo de IA y pueden contener errores, y no indica a los estudiantes qué modelo ni qué proveedor responde. Un asistente declara sus límites solo si el docente lo escribe en sus instrucciones; la configuración predeterminada no lo hace.

## Principio 7: Formación ética y transparencia {#principle-7-ethical-training-and-transparency}

> "Insistimos en que todas las herramientas de IA en contextos educativos deben ser desarrolladas e implementadas con un compromiso con los estándares éticos. Esto incluye declarar abiertamente las fuentes de datos de entrenamiento, asegurar que los modelos estén diseñados para minimizar los sesgos y proporcionar transparencia sobre las limitaciones potenciales inherentes a los procesos de toma de decisiones de la IA."
>
> Safe AI in Education Manifesto 0.5.0, principio 7 (texto de la versión en español de los autores, 0.4.0)

**La respuesta de LAMB.** LAMB no entrena ni ajusta ningún modelo. Lo que ofrece es elección: cada organización puede usar modelos locales de pesos abiertos, o cualquier servicio con una interfaz compatible con OpenAI, en lugar de quedar atada a un solo proveedor. Eso permite a una institución preferir modelos cuyos datos y métodos de entrenamiento estén documentados.

**Lo que queda en manos de la institución y del docente.** Elegir los modelos teniendo presente este principio, y conservar la documentación de los proveedores sobre datos de entrenamiento, sesgos y límites.

**Límites actuales.** LAMB no registra ninguna información sobre los datos de entrenamiento de un modelo ni sobre sus sesgos conocidos, y no muestra nada de eso a docentes ni a estudiantes.

## Las normas de la UE sobre IA en la educación {#the-eu-rules-on-ai-in-education}

El manifiesto no cita ninguna ley de la UE. Sus autores presentan sus siete principios como una forma de llevar a la práctica las orientaciones europeas sobre IA y educación. Esas orientaciones incluyen las directrices éticas de la Comisión Europea para educadores sobre la IA y los datos, publicadas por primera vez en 2022 y revisadas en una edición publicada el 5 de marzo de 2026. Desde la primera edición han llegado normas vinculantes. Esta sección resume los puntos del Derecho de la UE que más importan cuando una institución ofrece IA a sus estudiantes, y cómo se relaciona LAMB con cada uno. Describe las normas a 17 de octubre de 2026.

{{< callout type="warning" >}}
Esto es un resumen en lenguaje sencillo, no asesoramiento jurídico. Que un uso concreto de LAMB quede sujeto a una norma determinada depende de cómo lo use la institución. Consúltalo con los servicios jurídicos y de protección de datos.
{{< /callout >}}

### Quién es responsable: proveedor y responsable del despliegue {#who-is-responsible-provider-and-deployer}

El Reglamento de IA (Reglamento (UE) 2024/1689, en vigor desde el 1 de agosto de 2024) asigna la mayoría de las obligaciones a dos figuras. El proveedor desarrolla un sistema de IA y lo introduce en el mercado o lo pone en servicio con su propio nombre. El responsable del despliegue usa un sistema de IA bajo su propia autoridad.

El proyecto LAMB publica software libre. **Una institución que pone en marcha LAMB para sus cursos es el responsable del despliegue.** Una institución que configura LAMB y lo ofrece a sus estudiantes con su propio nombre también podría considerarse proveedor; el Reglamento no resuelve ese caso con claridad. El Reglamento no se aplica a los sistemas de IA divulgados con licencias libres y de código abierto, salvo que se introduzcan en el mercado o se pongan en servicio como sistemas de alto riesgo, o que entren en las prácticas prohibidas o en las normas de transparencia descritas más abajo. Por tanto, un asistente de chat de LAMB que conversa con estudiantes sigue sujeto a las normas de transparencia.

El Reglamento de IA fue modificado por el Ómnibus Digital sobre IA (Reglamento (UE) 2026/1744), en vigor desde el 27 de julio de 2026. Las fechas que siguen ya lo tienen en cuenta.

### Alfabetización en materia de IA {#ai-literacy}

Desde el 2 de febrero de 2025, proveedores y responsables del despliegue tienen obligaciones de alfabetización en materia de IA. Desde el 27 de julio de 2026, el texto dice que "adoptarán medidas para apoyar el desarrollo de la alfabetización en materia de IA de su personal y de otras personas que se encarguen en su nombre del funcionamiento y la utilización de sistemas de IA" (traducción propia). No exige ningún nivel garantizado.

**Cómo ayuda LAMB.** Los docentes crean sus propios asistentes, pueden ver el prompt completo que se envía al modelo y prueban los asistentes antes de que los usen los estudiantes. Eso es un contacto práctico con el funcionamiento de estos sistemas.

**Lo que debe hacer la institución.** Adoptar medidas que apoyen la alfabetización en materia de IA del personal que configura y usa LAMB, por ejemplo formación. El software no incluye un programa de formación. El equipo de LAMB ofrece [formación del personal en alfabetización y gobernanza de la IA](/es/contact/#training).

### Prácticas prohibidas: reconocimiento de emociones {#prohibited-practices-emotion-recognition}

Desde el 2 de febrero de 2025, el Reglamento de IA prohíbe el uso de sistemas de IA "para inferir las emociones de una persona física en los lugares de trabajo y en los centros educativos", salvo por motivos médicos o de seguridad. Las directrices de la Comisión dan ejemplos del ámbito educativo: está prohibido inferir el interés o la atención de los estudiantes, y también el reconocimiento de emociones durante las pruebas de admisión. También está prohibida la IA que usa técnicas manipuladoras o engañosas, o que explota vulnerabilidades derivadas de la edad, cuando altera de manera sustancial el comportamiento de una persona de un modo que le causa, o es probable que le cause, un perjuicio considerable.

**Cómo ayuda LAMB.** LAMB no tiene ninguna función diseñada para inferir las emociones, el interés o la atención de los estudiantes.

**Lo que debe hacer la institución.** No usar LAMB, ni ninguna herramienta conectada a él, con ese fin, y comprobar que los asistentes no están diseñados para manipular a los estudiantes.

### Usos de alto riesgo en la educación {#high-risk-uses-in-education}

El Reglamento de IA considera de alto riesgo cuatro usos educativos: decidir la admisión o la asignación a centros, evaluar los resultados del aprendizaje, evaluar el nivel de educación que recibirá una persona y vigilar a los estudiantes para detectar comportamientos prohibidos durante los exámenes. **Las obligaciones para estos usos se aplican a partir del 2 de diciembre de 2027.** El Ómnibus Digital trasladó esta fecha desde el 2 de agosto de 2026.

El proyecto de directrices de la Comisión sobre la clasificación, publicado a consulta el 19 de mayo de 2026 y todavía no definitivo, traza una línea entre usos sumativos y formativos. La IA que evalúa con vistas a una decisión final, como calificar trabajos que cuentan para la calificación final, es de alto riesgo. La IA que da retroalimentación y apoyo al aprendizaje durante el curso, como un asistente de tutoría, no debería clasificarse como de alto riesgo.

**Cómo ayuda LAMB.** Un asistente de chat usado para tutoría o retroalimentación durante el curso es el tipo de uso formativo que el proyecto de directrices describe como no de alto riesgo. Para la evaluación, la actividad de evaluación de archivos mantiene al docente al mando: la IA solo propone, el docente fija la calificación final, solo esa calificación va al libro de calificaciones, y los estudiantes ven la propuesta de la IA y la calificación final con etiquetas separadas.

**Lo que debe hacer la institución.** Decidir si cada uso entra en una categoría de alto riesgo, por ejemplo cuando las propuestas de la IA alimentan calificaciones que cuentan. Si es así, el responsable del despliegue debe, entre otras obligaciones, encomendar la supervisión humana a personas con la competencia, la formación y la autoridad necesarias para ejercerla, vigilar el sistema, conservar sus registros durante al menos seis meses e informar a los estudiantes de que se usa un sistema de IA de alto riesgo para tomar decisiones sobre ellos. Los organismos públicos, y las entidades privadas que prestan servicios públicos, deben además realizar una evaluación de impacto relativa a los derechos fundamentales antes del primer uso. LAMB no tiene un flujo de recurso y no registra si un docente revisó cada propuesta de la IA, así que la institución debe ofrecer ambas cosas con sus propios procedimientos. El proyecto LAMB no ha realizado una evaluación de la conformidad como sistema de alto riesgo.

La fecha del 2 de diciembre de 2027 se aplica a los sistemas puestos en servicio a partir de entonces. Un sistema que ya estaba en servicio antes de esa fecha solo queda sujeto cuando su diseño cambia de forma significativa, y los sistemas que usan las autoridades públicas deben cumplir a más tardar el 2 de agosto de 2030. Para una instalación de LAMB ya existente en una universidad pública, la fecha aplicable puede ser, por tanto, posterior al 2 de diciembre de 2027.

### Transparencia {#transparency}

Desde el 2 de agosto de 2026, hay que informar a las personas de que están interactuando con un sistema de IA, salvo que resulte evidente, a más tardar en la primera interacción. Los proveedores de sistemas que generan texto deben además marcar la salida en un formato legible por máquina, con un periodo transitorio hasta el 2 de diciembre de 2026 para los sistemas que ya estaban en el mercado.

**Cómo ayuda LAMB.** Los estudiantes se encuentran con un asistente con nombre dentro de una actividad del curso, y cada respuesta aparece bajo ese nombre. Antes de que un estudiante obtenga una clave, la página de LLM access explica qué registra la pasarela y qué recibe un proveedor externo, e indica el modelo una vez emitida la clave. La evaluación de archivos etiqueta la calificación de la IA.

**Lo que debería hacer la institución.** Asegurarse de que se informa a los estudiantes, en la actividad o en el curso, de que están hablando con una IA. El chat por sí mismo no muestra ningún aviso general de ese tipo y no indica el modelo. LAMB no añade ninguna marca legible por máquina al texto generado, así que la institución debería comprobar cómo cumple esa obligación su proveedor de modelos.

### Modelos de IA de uso general {#general-purpose-ai-models}

Desde el 2 de agosto de 2025, los proveedores de modelos de uso general, como los grandes modelos de lenguaje, deben publicar un resumen del contenido usado para entrenarlos y, salvo que el modelo se divulgue con una licencia libre y de código abierto con pesos públicos, documentarlo para quienes desarrollan sobre él. Los modelos que ya estaban en el mercado antes del 2 de agosto de 2025 tienen hasta el 2 de agosto de 2027 para cumplir. Estas obligaciones recaen en los proveedores de los modelos, no en las instituciones que los usan.

**Cómo ayuda LAMB.** Cada organización elige sus modelos, incluidos modelos locales de pesos abiertos.

**Lo que puede hacer la institución.** Al elegir un modelo, consultar el resumen del contenido de entrenamiento que publica el proveedor y cualquier documentación, en línea con el principio 7.

### Protección de datos: el RGPD {#data-protection-the-gdpr}

El Reglamento General de Protección de Datos (RGPD) se aplica a toda instalación de LAMB que trate datos de estudiantes. Las directrices de la Comisión para educadores de 2026 afirman que las instituciones educativas actúan como responsables del tratamiento, mientras que otras partes pueden actuar como encargados del tratamiento por cuenta de ellas. Una propuesta de la Comisión para modificar el RGPD no se había adoptado a 17 de octubre de 2026, así que el RGPD se aplica tal como está redactado.

| Punto del RGPD | Cómo ayuda LAMB | Lo que sigue decidiendo la institución |
|---|---|---|
| Minimización de datos | Los proveedores reciben la conversación sin el nombre ni el correo electrónico del estudiante; las claves de LLM access usan una referencia opaca; las analíticas del docente muestran las conversaciones con usuarios numerados en lugar de nombres | Qué se pide a los estudiantes que no escriban; LAMB no filtra los datos personales de los mensajes |
| Información a los estudiantes | El aviso de transcripciones y el aviso de LLM access explican, antes del uso, la revisión de transcripciones con nombre y qué registra la pasarela; ningún aviso menciona que el propietario del asistente puede leer las conversaciones, sin nombres, en las analíticas | La información sobre privacidad, la base jurídica y cómo ejercer los derechos; el aviso de transcripciones es información, no una base jurídica |
| Encargados y transferencias | Los modelos locales mantienen las conversaciones en el campus; los proveedores se eligen por organización | Los contratos con cualquier proveedor en la nube y las condiciones de cualquier transferencia fuera de la UE |
| Decisiones automatizadas | En la evaluación de archivos, la decisión es la calificación del docente | Que ninguna decisión significativa se base únicamente en un resultado de la IA, y cómo pueden impugnarla los estudiantes |
| Evaluación de impacto | Software libre que se puede inspeccionar, ejecutar en el campus y probar | Si hace falta una evaluación de impacto relativa a la protección de datos, y llevarla a cabo |
| Conservación | Cuando la institución pone en marcha LAMB, los chats, las entregas y las calificaciones se guardan en sus propias bases de datos | Cuánto tiempo se conservan los chats, las entregas y las calificaciones; LAMB no borra nada automáticamente |

Una referencia seudónima sigue siendo un dato personal para la institución, que puede vincularla con el estudiante.

## Para saber más {#read-further}

El manifiesto, con su texto vigente y su lista de verificación para evaluar herramientas de IA en la educación, lo publican sus autores.

[Lee el Safe AI in Education Manifesto ↗](https://manifesto.safeaieducation.org)

[Privacidad, RGPD y gobernanza de la IA](/es/privacy/) · [Usar LAMB como estudiante](/es/students/) · [El proyecto y su investigación](/es/research/)
