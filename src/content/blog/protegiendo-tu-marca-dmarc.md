---
title: 'Protegiendo tu marca: DMARC'
description: 'El correo electrónico es una herramienta clave para las empresas, pero su popularidad también lo convierte en un objetivo principal para los ciberdelincuentes. ...'
pubDate: '2024-05-02'
category: 'Tecnologías'
tags: ['Correo','DKIM','DMARC','SPF']
heroImage: "protegiendo-tu-marca-dmarc.jpg"
---

El correo electrónico es una herramienta clave para las empresas, pero su popularidad también lo convierte en un objetivo principal para los ciberdelincuentes. **Las estafas por correo electrónico**, especialmente los [ataques BEC](https://www.microsoft.com/es-es/security/business/security-101/what-is-business-email-compromise-bec), **han costado a las organizaciones miles de millones de dólares** **y han dañado la confianza del consumidor**. Es hora de tomar medidas proactivas. En este artículo, exploraremos DMARC, una herramienta que lucha contra el phishing y la suplantación de identidad.

### **¿Qué es DMARC?**

Presentado en 2012 por líderes de la industria del correo electrónico, DMARC (Domain-based Message Authentication Reporting & Conformance) es un **protocolo de autenticación de correo electrónico de código abierto** que provee protección a nivel de dominio para el canal de correo electrónico. Esto detecta y evita las técnicas de **[spoofing](https://es.wikipedia.org/wiki/Email_spoofing)** o suplantación de correo electrónico, los ataques de compromiso de correo electrónico corporativo (**BEC**) y otros ataques basados en correo electrónico.

### **¿Cómo funciona DMARC?**

DMARC se basa en estándares existentes como **SPF** y **DKIM** para autenticar el correo electrónico legítimo. **Permite a los remitentes recuperar el control**, indicar a los proveedores de buzones de correo cómo manejar mensajes no autenticados y obtener detalles sobre amenazas.

El **SPF** o Sender Policy Framework permite al servidor de correo electrónico del destinatario comprobar si un correo electrónico que parece proceder de un determinado dominio **se origina realmente en una dirección IP autorizada** de ese dominio. La lista que contiene todas las direcciones IP y hosts autorizados para un dominio específico puede encontrarse en los registros DNS de ese dominio

**DKIM** o Domain Key Identified Mail es un sistema por el cual el correo electrónico, cuando sale del servidor de correo saliente, **es firmado por una clave** que está en el DNS de la organización del remitente. Así, cuando se recibe, en el código del mensaje se puede ver qué clave de firma se utilizó. Se debe poder verificar esa clave en el registro DKIM correspondiente del servidor DNS de la organización, así que hay que configurar correctamente DKIM siguiente las especificaciones del servidor de correo saliente que estés utilizando.

Por último, **DMARC** permite que un remitente indique que sus correos electrónicos están protegidos por SPF o DKIM, e instruye a los destinatarios acerca de la **acción si fallan las verificaciones de SPF y DKIM**, como poner en **cuarentena** o **rechazar el mensaje** y se envía un informe de infracción a la dirección de correo electrónico especificada en la política.

DMARC ofrece tres opciones:

*   Supervisar: se entrega el mensaje al destinatario
*   Cuarentena: se entrega el correo en el buzón de “no deseado”
*   Rechazar: los correos se rechazan y eliminan directamente

![DMARC](https://relucio.es/wp-content/uploads/2024/02/DMARC-1024x438.png)

### **¿Por qué DMARC?**

Hasta este momento, hemos explorado cómo DMARC desempeña un papel crucial en la protección del canal de correo electrónico contra la falsificación de dominios y el phishing. Sin embargo, surge la pregunta: ¿realmente **ofrece beneficios sustanciales que justifiquen su implementación** en su organización?

Imaginemos una situación en la que un hacker se hace pasar por una marca, enviando correos electrónicos de phishing a todos sus clientes. Si algunos clientes caen en la trampa y revelan datos personales sensibles al ciberdelincuente, **esa marca se ve asociada con esa estafa de phishing**.

**Con DMARC podemos evitar que un empleado o cliente abra un correo electrónico falso** al eliminarlo antes de que llegue siquiera a las bandejas de entrada. Así mantienes el control sobre los correos electrónicos que ve el usuario y, por tanto, sobre tu marca. **DMARC actúa como un escudo**, asegurando que una organización no se vea comprometida por actividades maliciosas, ofreciéndole un control continuo y sólido sobre la integridad de su marca.

### **Conclusiones**

DMARC no solo protege a empleados, clientes y marcas, sino que también mejora la entregabilidad del correo, reduce los costes operativos y ofrece una visibilidad crucial ante amenazas.

Es el momento de dar el paso con DMARC para garantizar la seguridad y confianza del canal de correo electrónico.