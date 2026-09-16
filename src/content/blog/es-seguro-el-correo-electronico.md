---
title: '¿Es seguro el correo electrónico?'
description: 'El correo parece un trayecto directo, pero atraviesa clientes, servidores, DNS, relays y filtros. Estas son las capas que lo protegen y sus límites.'
pubDate: '2026-09-16'
category: 'Tecnología'
tags: ['Correo']
heroImage: "es-seguro-el-correo-electronico.svg"
---

Pulsas «Enviar» y el mensaje desaparece. Unos segundos después aparece en otra bandeja de entrada.

Parece un trayecto directo entre dos personas, pero un correo pasa por clientes, servidores, consultas DNS, relays, filtros y almacenes. En cada salto cambia de manos. También cambia qué se cifra, qué identidad se acepta y cuánto se confía en el servidor de enfrente.

El correo electrónico nació para mover mensajes entre sistemas que confiaban unos en otros. Cuando llegó Internet, hubo que añadir seguridad sobre una arquitectura que ya llevaba décadas funcionando.

## Pulsas «Enviar». Empieza el recorrido

El primer actor es el **MUA**, el Mail User Agent: Outlook, Thunderbird, Apple Mail o la interfaz web desde la que escribes.

Ese cliente no suele lanzar el mensaje directamente contra el servidor del destinatario. Primero lo entrega a un **MSA**, el Message Submission Agent de tu proveedor.

La sumisión inicial suele estar autenticada porque el proveedor necesita saber qué usuario intenta enviar el mensaje. Normalmente se utiliza el puerto 587 con STARTTLS o el 465 con TLS implícito. El estándar separa esta función del relay entre servidores, que continúa usando SMTP sobre el puerto 25.[\[1\]](https://www.rfc-editor.org/rfc/rfc6409.html) [\[2\]](https://www.rfc-editor.org/rfc/rfc8314.html)

El MSA entrega el mensaje a un **MTA**, Mail Transfer Agent. Este consulta DNS para localizar los registros MX del dominio receptor, que indican qué servidores aceptan correo para ese dominio.

Después abre una conexión SMTP con el siguiente servidor. Puede ser el servidor final, otro relay, una pasarela de seguridad o un gateway que vuelva a enviar el mensaje.

Cuando el correo llega a su destino, un sistema de entrega lo deposita en un almacén. El destinatario lo consulta después mediante una interfaz web, IMAP o, cada vez menos, POP3.

El recorrido simplificado queda así:

```txt
MUA → MSA → MTA emisor → DNS/MX → MTA receptor → almacén → MUA receptor
```

En el mundo real suele haber más cajas: antispam, sandboxing, DLP, archivado, reescritura de enlaces o relays de terceros. El correo se parece más a una cadena logística que a una tubería directa.

## El sobre y la carta

SMTP transporta un objeto con dos partes: **sobre** y **contenido**.[\[3\]](https://www.rfc-editor.org/rfc/rfc5321.html)

El sobre contiene las instrucciones que utilizan los servidores durante la entrega. Ahí aparecen comandos como `MAIL FROM` y `RCPT TO`.

El contenido incluye las cabeceras `From`, `To`, `Subject` y `Date`, seguidas del cuerpo del mensaje.[\[4\]](https://www.rfc-editor.org/rfc/rfc5322.html)

El `From` que ves en pantalla no es el `MAIL FROM` que utilizan los servidores para gestionar la entrega y los rebotes. Pueden coincidir, pero no tienen por qué hacerlo.

Un atacante puede escribir una dirección falsa en el `From` visible igual que alguien puede poner un remitente falso en la esquina de un sobre. El protocolo base no convierte ese texto en una identidad demostrada. Buena parte de la seguridad moderna del correo intenta cerrar esa distancia.

## SMTP mueve; IMAP y POP3 permiten recoger

SMTP se ocupa del envío y el transporte. IMAP y POP3 permiten acceder a los mensajes que ya están en el buzón.

**IMAP** trabaja sobre el buzón almacenado en el servidor. Permite manejar carpetas, flags, búsquedas y sincronización entre varios clientes. Por eso puedes leer un correo en el móvil y encontrarlo marcado como leído en el ordenador.[\[5\]](https://www.rfc-editor.org/rfc/rfc9051.html)

**POP3** responde a un modelo más antiguo. El cliente descarga los mensajes y, en su planteamiento original, suele eliminarlos del servidor. Tiene muchas menos capacidades para gestionar carpetas o sincronizar varios dispositivos.[\[6\]](https://www.rfc-editor.org/rfc/rfc1939.html)

La diferencia principal está en el modelo de acceso, no en que uno sea seguro y el otro no. Ambos necesitan TLS, autenticación robusta y una configuración decente.

Los protocolos originales permitían intercambiar credenciales y mensajes en claro. La recomendación moderna es utilizar TLS implícito: puerto 993 para IMAP y 995 para POP3.[\[2\]](https://www.rfc-editor.org/rfc/rfc8314.html)

## TLS cifra cada tramo

Con el correo puede haber TLS entre tu cliente y tu proveedor, otro canal TLS entre el proveedor emisor y una pasarela y un tercero entre esa pasarela y el servidor receptor.

Cada canal protege su tramo. Esto dificulta que alguien situado en medio escuche o modifique el tráfico, pero los servidores de los extremos todavía pueden leer y procesar el mensaje. Tampoco garantiza que todos los saltos hayan utilizado cifrado.[\[7\]](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-177.pdf)

En el relay entre servidores se ha utilizado mucho **STARTTLS oportunista**. El servidor anuncia que soporta TLS y ambas partes elevan la conexión en claro a una conexión cifrada.

El problema aparece cuando un atacante activo elimina el anuncio de STARTTLS o manipula la resolución del registro MX. Si los servidores aceptan continuar sin TLS, el mensaje sigue circulando en claro.

**MTA-STS** permite que un dominio publique una política indicando que espera TLS autenticado y qué debe hacer el emisor si no puede establecerlo. **DANE** busca una protección parecida mediante registros TLSA y DNSSEC.[\[8\]](https://www.rfc-editor.org/rfc/rfc8461.html)

Ambos mejoran la protección del transporte, pero no proporcionan cifrado de extremo a extremo.

## SPF: qué máquinas pueden hablar en tu nombre

SPF permite que un dominio publique en DNS qué hosts están autorizados para enviar usando ese dominio en las identidades SMTP `HELO/EHLO` o `MAIL FROM`.[\[9\]](https://www.rfc-editor.org/rfc/rfc7208.html)

Cuando el servidor receptor recibe una conexión, compara la IP emisora con la política SPF del dominio correspondiente. Si aparece autorizada, SPF pasa.

Esto no demuestra que el `From` visible sea auténtico. SPF mira principalmente el sobre SMTP, no la dirección que el usuario identifica como remitente.

Tampoco lleva bien todos los reenvíos. Si un servidor intermedio vuelve a enviar el mensaje desde una IP que el dominio original no autorizó, SPF puede fallar aunque el correo sea legítimo.

SPF solo comprueba si una máquina está autorizada para usar un dominio en una parte concreta de la conversación SMTP. No identifica a la persona que escribió el mensaje ni valida su contenido.

## DKIM: el sello del dominio

DKIM añade una firma criptográfica al mensaje.

El servidor emisor calcula un hash sobre las cabeceras y partes del cuerpo que decide proteger. Después firma ese resultado con una clave privada. La clave pública se publica en DNS.

El receptor recupera esa clave y verifica la firma. Si todo encaja, sabe que el dominio firmante controlaba la clave privada y que las partes firmadas no han cambiado desde que se generó la firma.

Eso no prueba que la persona mostrada en `From` sea quien escribió el mensaje. El dominio que firma ni siquiera tiene que coincidir con ese `From`.[\[10\]](https://www.rfc-editor.org/rfc/rfc6376.html)

DKIM tampoco cifra el contenido. Funciona como un sello, no como una caja fuerte.

Además, algunos sistemas modifican mensajes durante el tránsito. Añaden un pie, reescriben enlaces o alteran la codificación. Dependiendo de qué se firmó y de cómo se normalizó, esos cambios pueden romper la firma.

## DMARC alinea las identidades

DMARC intenta unir lo que el usuario ve con lo que SPF y DKIM han validado.

Para que un mensaje pase DMARC, necesita que SPF o DKIM pasen y que el dominio autenticado esté **alineado** con el dominio del `From` visible. La alineación puede ser estricta o relajada.[\[11\]](https://www.rfc-editor.org/rfc/rfc9989.html)

El propietario del dominio también puede publicar una preferencia:

- `p=none`: observar y recibir información.
- `p=quarantine`: pedir que los fallos se traten como sospechosos.
- `p=reject`: pedir que se rechacen.

El receptor mantiene la última palabra.

DMARC también genera reportes. Sirven para descubrir servicios legítimos que envían sin autenticar, errores de alineación e intentos de utilizar el dominio sin autorización.

Es una herramienta potente contra la suplantación del dominio exacto, pero un atacante todavía puede registrar un dominio visualmente parecido y configurar SPF, DKIM y DMARC correctamente. También puede comprometer una cuenta legítima y enviar desde infraestructura autorizada.

En ambos casos, el mensaje puede pasar los controles técnicos y seguir siendo una estafa.

## Qué protege cada mecanismo

| Mecanismo | Protege principalmente | No demuestra |
| --- | --- | --- |
| TLS | La conexión entre dos puntos | Cifrado completo de extremo a extremo |
| SPF | La autorización de una IP para ciertas identidades SMTP | Que el `From` visible sea legítimo |
| DKIM | La vinculación con un dominio firmante y la integridad de las partes firmadas | Que el autor visible sea quien dice ser |
| DMARC | La alineación del `From` con SPF o DKIM y una política de tratamiento | Que el contenido sea benigno |
| S/MIME / OpenPGP | Firma y cifrado del contenido de extremo a extremo | Que la gestión de claves sea sencilla |
| Filtros y pasarelas | Detección de spam, malware, enlaces y patrones sospechosos | Que ningún mensaje malicioso vaya a pasar |

Cada capa resuelve una parte distinta del problema. TLS no autentica al empleado que solicita una transferencia, DMARC no detecta todas las mentiras y un filtro no arregla una cuenta robada.

## Cifrado de extremo a extremo

S/MIME y OpenPGP permiten cifrar y firmar el contenido para que solo los destinatarios previstos puedan leerlo.

**S/MIME** suele apoyarse en certificados X.509. Puede aportar confidencialidad, autenticación, integridad y prueba de origen. Para cifrar, el emisor necesita disponer de la clave pública de cada destinatario.[\[12\]](https://www.rfc-editor.org/rfc/rfc8551.html)

**OpenPGP** combina criptografía simétrica para el contenido con criptografía de clave pública para proteger la clave de sesión. También permite firmar mensajes.[\[13\]](https://www.rfc-editor.org/rfc/rfc9580.html)

El resultado ofrece más protección que confiar solo en TLS entre servidores, pero la gestión de claves mete bastante fricción. Hay que distribuirlas, validar a quién pertenecen, proteger las privadas, rotarlas, revocarlas y recuperar el acceso cuando alguien pierde un dispositivo o deja la organización.

En un entorno cerrado o regulado puede tener sentido. Para el correo cotidiano entre organizaciones desconocidas, esa fricción explica por qué no se ha convertido en el comportamiento universal.

Incluso con cifrado de extremo a extremo, algunos metadatos necesarios para entregar el mensaje quedan expuestos.

## Lo que los registros DNS no arreglan

Un mensaje puede pasar SPF, DKIM y DMARC y seguir siendo una estafa. Puede proceder de:

- Una cuenta legítima comprometida.
- Un proveedor autorizado atacado.
- Un dominio parecido registrado por el atacante.
- Un empleado que ha sido engañado.
- Una conversación secuestrada con contexto real.

Aquí entramos en el terreno del phishing y el Business Email Compromise.

La defensa necesita varias capas: MFA —preferiblemente resistente al phishing—, protección de endpoints, filtros de correo, revisión de reglas sospechosas, formación y procesos para verificar por otro canal las peticiones sensibles. CISA recomienda combinar estas medidas en lugar de fiarlo todo a la contraseña o a la capacidad del usuario para detectar trampas.[\[14\]](https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business)

Para un pago urgente, una llamada de treinta segundos puede valer más que todas las comprobaciones visibles en las cabeceras.

## Entonces, ¿el correo es seguro?

Depende de toda la cadena. El correo puede estar bien protegido si:

- La sumisión y el acceso exigen TLS y autenticación robusta.
- El transporte entre servidores fuerza TLS cuando corresponde.
- SPF, DKIM y DMARC están desplegados y monitorizados.
- Las cuentas utilizan MFA resistente al phishing.
- Los filtros inspeccionan enlaces, adjuntos y comportamientos anómalos.
- Las acciones sensibles se verifican fuera del propio correo.
- El contenido crítico utiliza cifrado de extremo a extremo cuando el riesgo lo justifica.

También puede romperse por un único eslabón: una cuenta robada, un dominio parecido, una regla de reenvío oculta o una petición creíble recibida a las seis de la tarde.
