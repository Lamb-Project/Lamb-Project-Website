---
title: Conecta LAMB y Moodle
description: Añade actividades de LAMB a un curso de Moodle con LTI 1.1 y conecta después la cuenta de Moodle de un docente para que LAMB LEGATUS pueda leer el curso e importar materiales.
translationKey: v08-moodle
weight: 5
aliases: [/guides/moodle/]
---

**Para administradores del LMS y docentes.** Esta guía tiene dos partes independientes. La parte 1 lleva actividades y asistentes de LAMB a un curso de Moodle. La parte 2 permite que un docente conecte su propia cuenta de Moodle para que LAMB LEGATUS, el agente integrado de LAMB para docentes, pueda leer los cursos de ese docente e importar materiales del curso a una base de conocimiento.

**LAMB no necesita ningún plugin de Moodle.** La parte 1 usa la Herramienta externa (External tool) estándar de Moodle con LTI 1.1. La parte 2 usa los servicios web estándar de Moodle para la app móvil. No se instala nada en el servidor de Moodle: los únicos cambios en Moodle son los ajustes de administración estándar que se describen a continuación.

Las capturas muestran LAMB 0.8 y un sitio Moodle 4.5 de demostración, capturados el 17 de octubre de 2026 con cursos y cuentas sintéticos. Direcciones como `localhost` son valores de prueba locales: usa las direcciones públicas de tu institución.

## Parte 1. LAMB en un curso de Moodle (LTI 1.1) {#part-1-lamb-in-a-moodle-course-lti-11}

LAMB ofrece tres vías de entrada LTI. Cada una tiene su propia URL de lanzamiento y sus propias credenciales, y no son intercambiables. [Elige tu vía de entrada desde el LMS](/es/guides/0.8/lti/) explica cuándo usar cada una.

| Vía de entrada | La Tool URL termina en | Clave de consumidor | Secreto compartido |
|---|---|---|---|
| Herramienta de actividades de LAMB (chat, evaluación de archivos, LLM access) | `/lamb/v1/lti/launch` | La clave de la instalación, que se muestra en LTI Settings de LAMB | Se define en esas mismas LTI Settings |
| Un asistente publicado | `/lamb/v1/lti_users/lti` | La clave propia del asistente, que se muestra en sus Detalles de Publicación LTI | Un único secreto para todos los asistentes publicados, que custodia el administrador del servidor |
| Los docentes abren LAMB Creator | `/lamb/v1/lti_creator/launch` | La clave de la organización | El secreto de la organización |

LAMB comprueba la firma de cada lanzamiento con la dirección a la que ha llegado. Por eso, la Tool URL en Moodle debe ser la dirección pública exacta de tu servidor LAMB, con el mismo esquema `https` y el mismo nombre de host que ven tus usuarios.

Los pasos siguientes configuran la herramienta de actividades de LAMB una sola vez para todo el sitio Moodle. Después, los docentes la añaden a cualquier curso.

### Configura la herramienta (administradores de LAMB y de Moodle) {#set-up-the-tool-lamb-and-moodle-administrators}

1. En LAMB, un administrador del sistema elige **Administración** en la barra superior y después la pestaña **LTI Settings**. En **LMS Setup Information** aparecen la **Launch URL** y la **Consumer Key**, cada una con un botón para copiarla. Escribe el secreto en **OAuth Shared Secret** y elige **Save LTI Configuration**. Si cambias la clave de consumidor, vuelve a escribir el secreto compartido en ese mismo guardado.
2. En Moodle, ve a **Site administration > Plugins > Activity modules > External tool > Manage tools** y sigue **configure a tool manually**.
3. Rellena **Tool name** (por ejemplo, "LAMB activities"), **Tool URL** (la Launch URL del paso 1), **LTI version** "LTI 1.0/1.1", **Consumer key** y **Shared secret**.
4. Pon **Tool configuration usage** en **Show in activity chooser and as a preconfigured tool** para que los docentes puedan encontrarla en su curso.
5. Elige un **Default launch container**. La demostración usa **Existing window**. Prueba el contenedor que elijas con una cuenta de docente y otra de estudiante antes de que los cursos lo usen.
6. En **Privacy**:
   - **Share launcher's email with tool: Always.** En el primer lanzamiento de un docente, LAMB encuentra su cuenta de LAMB por este correo electrónico. Sin él, un docente cuya cuenta de LAMB usa un correo y una contraseña normales ve una página que le pide que contacte con el administrador.
   - **Share launcher's name with tool: Always.** LAMB lo usa como nombre visible.
   - **Accept grades from the tool.** Solo hace falta para File Evaluation, que envía las calificaciones a Moodle cuando el docente las sincroniza. Elige **Always**, o **As specified in Deep Linking definition or Delegate to teacher** para que cada docente decida en la actividad. Moodle solo envía los datos para devolver la calificación cuando esta opción está activada.
7. Deja la sección **Services** como está y elige **Save changes**.

{{< capture src="/images/guides/moodle-tool-config.png" alt="Formulario de configuración de Herramienta externa de Moodle rellenado para la herramienta de actividades de LAMB" caption="Administración del sitio de Moodle 4.5 en un sitio de demostración, 17 de octubre de 2026. Moodle oculta el secreto compartido. La Tool URL es una dirección de prueba local." >}}

### Añade una actividad a un curso (docente) {#add-an-activity-to-a-course-teacher}

1. En el curso de Moodle, activa **Edit mode** y elige **Add an activity or resource**. La herramienta aparece con el nombre que le dio el administrador.
2. Ponle un nombre a la actividad. Para File Evaluation, si el administrador eligió la opción de delegar, abre la sección **Grade** y marca **Allow LAMB activities to add grades in the gradebook** (aquí Moodle muestra el nombre de la herramienta). Después elige **Save and display**.

{{< capture src="/images/guides/moodle-activity-chooser.png" alt="Selector de actividades de Moodle con un recuadro LAMB activities" caption="La herramienta de todo el sitio aparece en el selector de actividades del docente como LAMB activities. Curso de demostración, 17 de octubre de 2026." >}}

{{< capture src="/images/guides/moodle-add-activity.png" alt="Formulario de nueva Herramienta externa de Moodle con el nombre de actividad Research Methods helper" caption="Nombre de la nueva actividad en el curso de demostración, 17 de octubre de 2026." >}}

3. El primer lanzamiento de un docente abre **LAMB Activity Setup** para ese curso. Elige el tipo de actividad: **AI Chat Activity** o **File Evaluation**. **LLM access** también aparece cuando tu organización ha configurado el acceso a modelos para los estudiantes.
4. Selecciona los asistentes que pueden usar los estudiantes. Aquí solo aparecen asistentes publicados, así que publícalos antes en LAMB. Para File Evaluation, cada asistente seleccionado necesita una rúbrica (procesador RAG "Rubric RAG", que se elige al crear el asistente), y la actividad necesita un título y una fecha límite.
5. Decide sobre **Allow instructors to review chat transcripts**. Si lo activas, los docentes pueden leer las conversaciones de los estudiantes con el nombre de cada estudiante, y a los estudiantes se les avisa la primera vez que abren el chat. Esta opción no se puede cambiar después de la configuración.
6. Elige **Save & Launch**. Llegas a la vista de docente de la actividad, con sus estudiantes, chats, asistentes y registro de accesos.

{{< capture src="/images/guides/moodle-teacher-setup-filled.png" alt="Página LAMB Activity Setup con AI Chat Activity seleccionada y un asistente marcado" caption="Primer lanzamiento de un docente desde Moodle a LAMB 0.8, 17 de octubre de 2026. No se ofrece LLM access porque la organización de demostración no lo ha configurado." >}}

{{< capture src="/images/guides/moodle-teacher-after-setup.png" alt="Vista de docente de LAMB de una actividad de chat configurada, con cero estudiantes" caption="La vista de docente justo después de la configuración. La revisión de transcripciones se dejó desactivada, y la página indica que no se puede cambiar después de crearla." >}}

7. Haz una prueba como estudiante con una cuenta de demostración. Antes de que un docente complete la configuración, el estudiante ve una página de espera. Después de la configuración, el estudiante abre la actividad con los asistentes que seleccionó el docente. En File Evaluation, las calificaciones no llegan a Moodle por sí solas: después de revisarlas, elige **Enviar Notas a Moodle** en la vista de docente y comprueba que la calificación llega al libro de calificaciones de Moodle.

Para configurar una actividad, el docente ya debe tener una cuenta de LAMB. LAMB la encuentra por el correo electrónico que envía Moodle, o por la cuenta que se creó cuando el docente usó por primera vez el acceso a Creator desde Moodle.

### Las otras dos vías, en breve {#the-other-two-paths-in-brief}

- **Un asistente publicado.** Publica el asistente en LAMB. Su vista de detalle muestra entonces **Detalles de Publicación LTI** con la Tool URL y la clave de consumidor. El campo del secreto dice "ASK ADMIN FOR THE SECRET": el administrador del servidor define un único secreto para todos los asistentes publicados y debería sustituir cualquier valor por defecto por uno propio. En Moodle no hace falta compartir el correo electrónico; comparte el nombre para que los estudiantes aparezcan con un nombre legible.
- **Los docentes abren Creator.** Un administrador de la organización abre **Admin Org > Settings > LTI Creator**, marca **Enable LTI Creator Access** y define la clave de consumidor y el secreto. La clave debe ser única entre organizaciones. Los usuarios nuevos llegan como miembros de esa organización. No hace falta compartir el correo electrónico; comparte el nombre para tener un nombre visible legible.

**Resultado esperado:** un docente añade la herramienta de LAMB desde el selector de actividades, completa la configuración en el primer lanzamiento y llega a la vista de docente, y un estudiante de demostración puede abrir la actividad configurada.

## Parte 2. Conecta la cuenta de Moodle de un docente para LAMB LEGATUS {#part-2-connect-a-teachers-moodle-account-for-lamb-legatus}

Con esta conexión, LAMB LEGATUS puede leer los cursos en los que da clase un docente y, después de que el docente lo apruebe, importar materiales del curso a una base de conocimiento de LAMB. Cada docente conecta su propia cuenta. LAMB solo puede hacer lo que esa cuenta de Moodle ya tiene permitido hacer.

### Qué necesita Moodle (solo ajustes estándar) {#what-moodle-needs-standard-settings-only}

- **Enable web services for mobile devices** está activado.
- Para la vía del código QR: **QR code access** está en **QR code with automatic login**. Moodle solo ofrece esta opción en un sitio servido por HTTPS. Moodle rechaza el acceso por QR para los administradores del sitio y para otros usuarios que pueden cambiar la configuración del sitio; esas cuentas usan el campo del token.
- Los usuarios pueden crear tokens móviles. En Moodle estándar, el rol de usuario autenticado ya tiene este permiso. No hace falta ningún rol adicional.
- Para leer información de todo el curso, el docente tiene en ese curso un rol de profesor, profesor sin permiso de edición o gestor.

El administrador del servidor LAMB también debe definir la clave de cifrado del conector, `LAMB_MOODLE_ENCRYPTION_KEY`, en el entorno del servidor: una clave Fernet generada una sola vez, como se describe en las [notas de instalación del conector de Moodle](https://github.com/Lamb-Project/lamb/blob/ee28560ead5aeb75a9b25395fe60a7fc8da1377a/Documentation/installation/moodle-connector.md), y con una copia de seguridad fuera de la base de datos. Sin ella, la conexión falla con "The administrator must configure LAMB_MOODLE_ENCRYPTION_KEY". LAMB cifra con ella cada token de Moodle que guarda. Si la clave se pierde o se cambia, todos los docentes tienen que volver a conectarse.

### Activa el conector (administrador de la organización) {#enable-the-connector-organization-administrator}

1. Abre **Admin Org > Settings > Moodle**.
2. Marca **Enable Moodle connector**.
3. Introduce la **Allowed Moodle base URL**: una sola dirección, `http` o `https`, sin nombre de usuario, consulta ni fragmento.
4. Elige el **Access mode**. **Read only** permite leer e importar con aprobación. **Allow selected writes** habilita dos casillas más: **Allow forum replies and new discussions** y **Allow reviewed grade proposals to be saved**. La escritura de calificaciones está desactivada por defecto.
5. Lee el texto informativo de la página (su "AAC driver model" es el modelo que usa LAMB LEGATUS) y después elige **Save organization settings**.

{{< capture src="/images/guides/connector-org-settings.png" alt="Ajustes de Moodle de la organización con el conector activado en modo de solo lectura" caption="Admin Org > Settings > Moodle en LAMB 0.8, 17 de octubre de 2026, en modo de solo lectura y con las dos opciones de escritura desactivadas." >}}

### Conecta tu cuenta (docente) {#connect-your-account-teacher}

1. Cuando el conector está activado, aparece un enlace **Moodle** en la barra superior de LAMB. Abre **Tu Moodle**.
2. Con un código QR: en Moodle, abre tu perfil, muestra el código QR de acceso automático desde el móvil y haz una captura de pantalla. En unos tres minutos, súbela en **Imagen del código QR**, elige tu ordenador en **Tu ordenador** (macOS, Windows PowerShell o Linux) y elige **Preparar comando local**. LAMB solo lee la imagen y construye un comando; todavía no se intercambia ni se guarda nada.
3. Ejecuta ese comando en un terminal del mismo ordenador y la misma red. Envía la solicitud estándar de acceso por QR de Moodle para obtener tu token, identificándose como la app de Moodle porque Moodle solo acepta esa solicitud desde la app, y copia el token al portapapeles. Si tu institución no lo permite, usa el campo del token.
4. Pega el token en **Token del servicio móvil** y elige **Conectar Moodle**. Aquí también puedes pegar un token del servicio móvil que ya tengas para tu cuenta.
5. LAMB comprueba que el token funciona en el sitio Moodle permitido y después lo guarda cifrado con tu conexión. No comprueba que la cuenta de Moodle sea tuya, así que pega solo un token de tu propia cuenta.

No pegues nunca un token de Moodle en una conversación de LAMB LEGATUS. LAMB LEGATUS no te lo pide.

{{< capture src="/images/guides/connector-connect.png" alt="Página Tu Moodle antes de conectar, con subida del QR, elección de ordenador y campo del token" caption="Tu Moodle antes de conectar, 17 de octubre de 2026. El Moodle de demostración funciona sin HTTPS, así que no se pudo completar su vía QR; la conexión que se muestra a continuación se hizo pegando un token." >}}

{{< capture src="/images/guides/connector-connected.png" alt="Página Tu Moodle con una cuenta conectada y un curso en el que el usuario es docente" caption="Después de conectar: el sitio Moodle, su versión, la cuenta y los cursos agrupados según el rol del docente." >}}

### Qué puede hacer entonces LAMB LEGATUS {#what-lamb-legatus-can-then-do}

Abre **LAMB LEGATUS** desde la barra superior y pregunta sobre tu curso. Consulta [Trabaja con LAMB LEGATUS](/es/guides/0.8/legatus/) para lo básico.

- **Sin preguntar:** leer cursos, tareas, foros, calificaciones, cuestionarios, el calendario e información similar, con las lecturas de todo el curso limitadas a los cursos en los que eres docente; recopilar las nuevas publicaciones de los foros de esos cursos; leer un archivo, una Página o un Libro del curso sin importarlo.
- **Borradores para que los revises:** comentarios sobre una entrega con una calificación propuesta y su justificación. Un borrador no cambia nada en Moodle.
- **Después de tu aprobación, una tarjeta por acción:** importar un Archivo, una Carpeta, una Página o un Libro a una base de conocimiento nueva o existente. Las importaciones necesitan aprobación incluso en modo de solo lectura. La tarjeta muestra el origen, el destino, cada archivo y la configuración de fragmentos.
- **Solo si la organización permite escrituras, y con aprobación cada vez:** publicar o responder en un foro, o guardar la calificación de un estudiante con su justificación después de que hayas visto la entrega. Cuando no se permite una escritura, LAMB LEGATUS te ofrece un borrador para que lo publiques tú.

Marca **Modo avanzado** en la página Tu Moodle para ver el comando exacto en cada tarjeta de aprobación, además de la explicación. Se aplica a todas tus conversaciones.

{{< capture src="/images/guides/connector-import-approval.png" alt="Tarjeta de aprobación de LAMB LEGATUS para crear una base de conocimiento a partir de una carpeta de Moodle" caption="Una importación pendiente de aprobación, 17 de octubre de 2026: carpeta de origen, base de conocimiento nueva, dos archivos, configuración de fragmentos y los botones Crear e importar, Editar propuesta o Cancelar." >}}

### Qué llega al proveedor del modelo {#what-reaches-the-model-provider}

Los nombres, las publicaciones y las calificaciones de los estudiantes que lee LAMB LEGATUS llegan al proveedor de modelos configurado por la organización. Los detalles de una acción propuesta también llegan al modelo pequeño y rápido de la organización, que redacta la explicación de la aprobación. Cuando LAMB LEGATUS lee un archivo, una Página o un Libro del curso sin importarlo, el texto completo de ese documento va al modelo pequeño y rápido de la organización, o al modelo de LAMB LEGATUS si no hay ningún modelo pequeño configurado; el propio LAMB LEGATUS solo recibe un resumen y los pasajes que pide. Con un proveedor local, estos datos se quedan en tus instalaciones; con un proveedor externo, salen de ellas. Planifícalo con tu delegado de protección de datos. Consulta también la página de [privacidad](/es/privacy/).

### Desconecta {#disconnect}

1. En **Tu Moodle**, elige **Desconectar Moodle**. LAMB borra el token guardado y cancela cualquier aprobación que siga pendiente.
2. Desconectar no revoca el token en Moodle. Para revocarlo, cambia tu contraseña de Moodle y deja marcada **Log out of all web apps** (esto cierra todas las sesiones móviles y de servicios web de tu cuenta), o pide a tu administrador de Moodle que borre el token en **Site administration > Server > Web services > Manage tokens**.

Si el administrador cambia la dirección de Moodle permitida, tu conexión muestra "La conexión guardada está inactiva". Desconecta y vuelve a conectar.

**Resultado esperado:** Tu Moodle muestra **Conectado** con tu cuenta y tus cursos, LAMB LEGATUS puede describir un curso en el que das clase, y una importación crea una base de conocimiento solo después de que apruebes su tarjeta.
