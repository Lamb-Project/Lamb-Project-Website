---
title: Da a tus estudiantes acceso a modelos con tus reglas
description: Define la política de LLM access de una organización, añade una actividad LLM access a un curso y da a cada estudiante una clave personal con límites y un horario.
translationKey: v08-llm-access
weight: 6
aliases: [/guides/llm-access/]
---

**Para administradores de organización y docentes.** Una actividad **LLM access** da a cada estudiante de un curso una clave personal para usar los modelos de la organización con sus propias herramientas: VS Code con Continue o Cline, Aider, Claude Code o su propio código. El administrador de la organización define las reglas; el docente define los límites y el horario del curso, dentro de esas reglas. [La última milla de tu IA](/es/institutions/ai-governance/) explica la idea.

Las capturas proceden de una ejecución automatizada en LAMB 0.8 el 16 de octubre de 2026, con una organización, un curso y estudiantes sintéticos, un modelo local y una herramienta de prueba LTI en lugar de Moodle. Las claves están ocultas.

## Antes de empezar {#before-you-start}

El administrador del sistema ha desplegado la pasarela que incluye LAMB 0.8 como complemento opcional y ha conectado tu organización a ella. Las pantallas de administración llaman a la pasarela **Proxy**. En la pestaña **LLM access**, la línea **Proxy** indica **connected, reachable** y **Models the proxy serves** muestra sus modelos. Si indica "not connected", pregunta a tu administrador del sistema.

Los docentes necesitan una cuenta de LAMB en la organización antes de poder configurar una actividad de LAMB en un curso: abren una vez, desde el LMS, el enlace de LAMB Creator de la organización. [Elige tu vía de entrada desde el LMS](/es/guides/0.8/lti/) explica los enlaces.

## Administrador de la organización: define las reglas {#organization-admin-set-the-rules}

1. Abre **Admin Org → Settings → LLM access**.
2. Marca **Teachers may create LLM access activities**. Los docentes solo ven el tipo LLM access cuando esta casilla está marcada, el proxy está conectado y hay al menos un modelo marcado (paso 6).
3. Elige **how tokens are limited** (cómo se limitan los tokens):
   - **Shared pool per activity:** cada actividad tiene una única bolsa de tokens para todos sus estudiantes.
   - **Allowance per student:** la clave de cada estudiante tiene un límite por franja horaria, en total, o ambos.
   - **Both:** una bolsa pone un tope a la actividad, y cada estudiante tiene además un límite personal.

   En la 0.8 solo la bolsa es un techo firme: un estudiante que sustituye su clave empieza un total nuevo. Elige una política con bolsa cuando necesites ese techo.
4. Define la **Default allowance per teacher**: lo máximo que un docente puede **comprometer** entre todas sus actividades LLM access. Una bolsa cuenta entera cuando se guarda la actividad; sin bolsa, el total de cada estudiante cuenta cuando el estudiante obtiene una clave; los límites por franja por sí solos no comprometen nada. La asignación limita lo que compromete un docente, no lo que gastan los estudiantes. Déjala vacía para no poner límite.
5. Añade **Exceptions for individual teachers** con el correo electrónico que el LMS envía para ese docente.
6. Marca los **Models teachers may offer**.
7. Elige el **Time slot** (franja horaria) para los límites por estudiante y el **Time zone of timetables** (zona horaria de los horarios) por defecto para las actividades nuevas. Las franjas siguen el reloj (10 minutos significa :00, :10, :20 …) y se recargan pocos segundos después del inicio de cada una. Usa 10, 20, 30 o 60 minutos: con 5 o 15, las cifras de la franja actual que muestran las páginas son incorrectas en la 0.8, aunque la pasarela aplica el límite correcto. Elige la franja antes de que empiecen los docentes; las claves ya emitidas conservan la franja con la que se emitieron.
8. Guarda. Las actividades nuevas siguen las reglas nuevas de inmediato. Las actividades existentes conservan sus modelos, la duración de la franja y la zona horaria, y solo se comprueban frente a la nueva política cuando su docente las vuelve a guardar; la pantalla indica cuántas hay.

{{< capture src="/images/guides/governance-org-policy.png" alt="Ajustes de LLM access de una organización: política Both, asignación por defecto por docente de 300000 tokens, una excepción de 1000000 para un docente, modelo course-model, franja de 10 minutos y una tabla de uso por docente" caption="La pestaña LLM access: estado del proxy, política, asignaciones, modelos, franja horaria y uso por docente." >}}

**Seguimiento del uso:** la tabla **Use by teacher** de la parte inferior muestra la asignación de cada docente, lo que ha comprometido, los tokens usados realmente y sus actividades. Las cifras de uso llegan entre 20 y 40 segundos después de las solicitudes; recarga para ver cifras más recientes.

## Docente: añade la actividad {#teacher-add-the-activity}

1. En tu curso, añade un enlace de actividad de LAMB (una herramienta externa) y ábrelo.
2. Elige **LLM access** como tipo de actividad y dale un nombre que verán los estudiantes.
3. Rellena los límites que pide la política de tu organización: **Activity pool**, **Per student: tokens per time slot** y **Per student: tokens in total**. Deja un campo vacío para no poner límite; el 0 se rechaza.
4. Elige **Save & Launch**. LAMB comprueba los límites frente a la política y la bolsa frente a tu asignación. Si no encajan, no se crea nada: el motivo aparece encima del botón y se conservan tus datos. Sin bolsa, el total de cada estudiante se comprueba cuando el estudiante obtiene una clave, así que un rechazo puede llegar más tarde, en la página del estudiante.

{{< capture src="/images/guides/governance-teacher-setup.png" alt="LAMB Activity Setup con LLM access seleccionado, bolsa de 200000, 3000 por estudiante y franja, 20000 por estudiante en total, y un mensaje de rechazo: hacen falta 500000 tokens; al docente le quedan 300000 de 300000" caption="Configuración con LLM access seleccionado. La línea roja corresponde a un primer intento que pedía más que la asignación del docente." >}}

## Docente: gestiona la actividad {#teacher-manage-the-activity}

Cada vez que abres la actividad llegas a su página de gestión.

- **Open / Closed** indica si las claves funcionan ahora. **Follow timetable** es la opción por defecto; **Open now** y **Close now** la anulan. LAMB aplica el cambio en unos 10 segundos.
- **Change limits and timetable:** los modelos, abierta todo el tiempo o en los días y horas elegidos, las fechas **From** y **Until**, la zona horaria y los límites. Los estudiantes conservan sus claves; los modelos y límites nuevos les llegan de inmediato, y los cambios de horario en unos 10 segundos. Una fecha **Until** posterior no llega a las claves ya obtenidas: los estudiantes tienen que sustituir su clave para que se aplique.
- **Students:** los tokens de cada clave en la franja actual, en total, y las solicitudes rechazadas. **Block** detiene la clave actual de un estudiante en unos 10 segundos y **Unblock** la reactiva; **Revoke** la borra. En la 0.8 ninguna de las dos deja fuera a un estudiante: un estudiante bloqueado puede sustituir la clave, y uno revocado puede obtener una clave nueva. Para cortar el acceso, cierra la actividad.

{{< capture src="/images/guides/governance-teacher-manage.png" alt="Página de gestión del docente: abierta, controles de horario, bolsa de 200000, 3000 por estudiante cada 10 minutos, 20000 por estudiante en total, el panel de horario y cuatro estudiantes con su uso" caption="La página de gestión con el panel de horario abierto. Charlie llegó dos veces al límite de su franja." >}}

La solicitud que supera un límite se completa igualmente y se cuenta entera; la siguiente se rechaza. Por eso un estudiante puede aparecer con algo más que el límite.

## Estudiante: obtén una clave {#student-take-a-key}

1. Abre la actividad desde el curso.
2. Lee **Before you take a key**: qué se registra (hora, modelo y tokens de cada solicitud, vinculados a ti, para que tu docente pueda ver tu uso), que la pasarela no guarda el texto de las preguntas ni de las respuestas, y qué recibe un proveedor externo. Marca **I have read this** y elige **Get my key**.
3. Copia la clave enseguida: solo se muestra una vez, junto con la configuración para herramientas compatibles con OpenAI, Claude Code y una prueba en el terminal.

{{< capture src="/images/guides/governance-student-key.png" alt="Página del estudiante con una clave oculta y la configuración para herramientas compatibles con OpenAI, Claude Code y una prueba en el terminal" caption="La clave, que se muestra una sola vez, con la configuración para pegar. Aquí está oculta." >}}

En visitas posteriores, la página muestra el estado de la clave y el uso del estudiante en la franja actual y en total. **Replace my key** detiene la clave antigua de inmediato y emite una nueva.

{{< capture src="/images/guides/governance-student-usage.png" alt="Página del estudiante en una visita posterior: clave activa, 3115 de 3000 tokens usados en los últimos 10 minutos, 3115 de 20000 en total, Replace my key" caption="Una visita posterior, después de que el estudiante llegara al límite de la franja." >}}

Cuando se alcanza un límite, la herramienta del estudiante recibe un error que dice cuál, en tokens: el límite de la franja (espera a la franja siguiente), la asignación total o la bolsa común de la actividad (pregunta al docente). Una actividad cerrada o una clave bloqueada también se rechazan.

## Límites de esta edición {#limits-of-this-edition}

- Estas reglas se aplican a las actividades LLM access. Las actividades de chat y de evaluación de archivos usan el proveedor de modelos de la organización y no se descuentan de las asignaciones de los docentes.
- Solo la bolsa de una actividad es un techo firme: sustituir una clave empieza un total por estudiante nuevo, y subir más tarde el total por estudiante no se vuelve a comprobar frente a la asignación del docente.
- Block y Revoke no dejan fuera a un estudiante; cerrar la actividad sí. Un estudiante que deja el curso conserva su clave hasta que se revoca o se cierra la actividad.
- Desactivar LLM access para la organización impide configurar actividades nuevas y que los docentes cambien las existentes. Las actividades existentes siguen abriéndose, y sus estudiantes todavía pueden obtener y sustituir claves: los docentes eligen **Close now** para detenerlas.
- Una fecha **Until** posterior no amplía las claves ya obtenidas.
- Con franjas de 5 o 15 minutos, las cifras de la franja actual que muestran las páginas son incorrectas; la pasarela aplica el límite correcto.
