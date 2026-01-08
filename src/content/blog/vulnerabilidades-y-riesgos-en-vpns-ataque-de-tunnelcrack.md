---
title: 'Vulnerabilidades y riesgos en VPNs: ataque de TunnelCrack'
description: 'En un documento aceptado por USENIX Association, académicos de New York University y KU Leuven han detallado las vulnerabilidades conocidas colectivamente como ...'
pubDate: '2026-01-08'
category: 'General'
tags: []
heroImage: "https://relucio.es/wp-content/uploads/2024/01/1691738857286.jpg"
---

[En un documento aceptado por](https://papers.mathyvanhoef.com/usenix2023-tunnelcrack.pdf) [USENIX Association](https://www.linkedin.com/company/usenix-association/), académicos de [New York University](https://www.linkedin.com/company/new-york-university/) y [KU Leuven](https://www.linkedin.com/company/ku_leuven/) han detallado las vulnerabilidades conocidas colectivamente como TunnelCrack, las cuales tienen el potencial de comprometer la seguridad de las redes privadas virtuales (VPN).

### ¿Qué es TunnelCrack?

**TunnelCrack** se refiere a un par de técnicas que, cuando se ejecutan correctamente, **pueden exponer el tráfico de red fuera de las VPNs cifradas**. Estas vulnerabilidades fueron descubiertas por el equipo de investigación después de probar más de 60 clientes de VPN. Encontraron que mientras las aplicaciones de VPN para Android parecían ser más seguras, **casi todas las aplicaciones de VPN en iOS fueron consideradas vulnerables**.

### Ataque LocalNet

Una de las técnicas utilizadas en TunnelCrack es el ataque LocalNet. Para ejecutar este ataque se establece una red Wi-Fi o Ethernet diseñada para engañar a las víctimas y hacer que se conecten a ella. Una vez conectado, el atacante asigna a la víctima una dirección IP pública y una subred. Al explotar **el hecho de que la mayoría de las VPN permiten acceso directo a la red local** mientras se utilizan, el atacante puede redirigir la conexión de la víctima a una dirección IP de destino fuera del túnel VPN, lo que le **permite observar el tráfico de red de la víctima**.

### Ataque ServerIP

La segunda técnica, conocida como el ataque ServerIP, es más compleja. Se aprovecha de que muchas **VPNs no cifran el tráfico hacia la dirección IP del servidor VPN**. Mediante la suplantación de respuestas DNS y la manipulación de reglas de enrutamiento, el atacante puede redirigir tráfico específico fuera del túnel VPN, exponiéndolo a posibles interceptaciones.

### ¿Qué se puede hacer?

Si se utiliza VPNs para tener privacidad y seguridad, se pueden tomar medidas para protegerse contra estas vulnerabilidades. Aquí hay algunas acciones que se pueden considerar:

1.  **Actualizar las aplicaciones VPN**: Verificar actualizaciones o avisos de los proveedores de aplicaciones de VPN. Muchos proveedores ya han comenzado a abordar estas vulnerabilidades.
2.  **Configurar ajustes de VPN**: Comprobar si el cliente VPN se puede configurar para **NO enturar las conexiones de red local** a través del túnel VPN.
3.  **Habilitar funciones de seguridad**: Si están disponibles, activar funciones de seguridad en la aplicación de VPN que ayuden a mitigar estos riesgos. Algunas aplicaciones ofrecen opciones para **bloquear el acceso a internet cuando la conexión VPN se interrumpe**.

Por último, remarcar que, aunque estas vulnerabilidades son preocupantes, **las conexiones seguras que se cifran** antes de ingresar al túnel VPN, como conexiones HTTPS o SSH, **deberían permanecer protegidas y cifradas incluso si se redirigen con estas técnicas**.

Para más detalles sobre las vulnerabilidades de TunnelCrack y cómo probar manualmente una VPN, se puede visitar el repositorio [GitHub](https://github.com/vanhoefm/vpnleaks) de los investigadores.

### Deja una respuesta [Cancelar la respuesta](/blog/vulnerabilidades-y-riesgos-en-vpns-ataque-de-tunnelcrack#respond)

Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con \*

Comentario \*

Nombre \* 

Correo electrónico \* 

Sitio web 

 Guardar mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente

  

Δ
