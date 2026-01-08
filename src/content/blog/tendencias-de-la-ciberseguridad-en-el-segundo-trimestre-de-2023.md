---
title: 'Tendencias de la ciberseguridad en el segundo trimestre de 2023'
description: 'Según el informe del equipo de acción de ciberseguridad de Google, en el segundo trimestre de 2023 se han identificado diversas tendencias y amenazas en el ámbi...'
pubDate: '2026-01-08'
category: 'General'
tags: []
heroImage: "https://relucio.es/wp-content/uploads/2024/01/1699437279850.jpg"
---

[Según el informe del equipo de acción de ciberseguridad de Google](https://services.google.com/fh/files/blogs/gcat_threathorizons_full_oct2023.pdf), en el segundo trimestre de 2023 se han identificado diversas tendencias y amenazas en el ámbito de la ciberseguridad. Entre las más destacadas se encuentran los ataques a la nube, el abuso de servicios de Software-as-a-Service (SaaS) y el aumento de la práctica de ciberocupación.

### Ataques a la nube y compromisos de seguridad

En este trimestre, los ataques a la nube han continuado siendo una preocupación significativa. Un dato alarmante es que más del 50% de los incidentes registrados involucraron la explotación de credenciales débiles o sin credenciales. Esto indica la necesidad imperante de reforzar la autenticación y la gestión de contraseñas en entornos en la nube.

![](https://media.licdn.com/dms/image/D4D12AQF9n75JE1v4iQ/article-inline_image-shrink_1500_2232/0/1699436832019?e=1710979200&v=beta&t=Bga_VmocVPKCQ1vm8DTB9xOY5jIWqKGFHqapSQg68F8)

También se destaca el uso persistente de ataques de fuerza bruta contra cuentas por defecto, como Secure Shell (SSH) y el Protocolo de Escritorio Remoto (RDP). Además, se observó que la red privada virtual (VPC) de Google Cloud, en modo automático, presenta reglas predefinidas que facilitan la exploración temprana. Por lo que, para entornos de producción, se recomienda el uso de VPC en modo personalizado.

### Impacto de los compromisos en la nube

Una de las consecuencias más comunes de los compromisos en la nube es la minería de criptomonedas, que representó el 67.6% de los impactos observados. Esta tendencia es consistente con hallazgos anteriores y subraya la necesidad de vigilancia y monitoreo constante para detectar y responder a estas actividades maliciosas.

![](https://media.licdn.com/dms/image/D4D12AQGvGp8f0C_g1A/article-inline_image-shrink_1500_2232/0/1699436908092?e=1710979200&v=beta&t=jg3UmtZkyMmBkAT3qb0Q98dzcyssDf-dTucQiCAQ1gU)

### Compromisos relacionados con software vulnerable

Durante este periodo, se ha observado un incremento del 8.5% en compromisos de seguridad relacionados con software vulnerable, siendo PostgreSQL el objetivo más explotado, lo que subraya la necesidad de parchear y asegurar las configuraciones de las bases de datos.

### Ataques al Software-as-a-Service (SaaS)

La adopción creciente de Software-as-a-Service (SaaS) ha ampliado la superficie de ataque, con un aumento del 41% en el número promedio de aplicaciones SaaS utilizadas entre 2021 y 2023. Esto ha llevado a un incremento en los casos de brechas de seguridad y fugas de datos en entornos SaaS.

Recientemente, se publicó el [código en prueba de concepto en Github](https://github.com/MrSaighnal/GCR-Google-Calendar-RAT) «Google Calendar RAT (GCR)». Aunque no se ha visto en uso real, existe interés en su abuso. GCR opera en máquinas comprometidas y permite a un atacante colocar comandos en el campo de descripción del evento del calendario de Google. Consulta periódicamente la descripción del evento del calendario en busca de nuevos comandos, ejecuta esos comandos en el dispositivo objetivo y luego actualiza la descripción del evento con la salida del comando. Según el desarrollador, GCR se comunica exclusivamente a través de infraestructura legítima operada por Google, lo que dificulta a los defensores detectar actividad sospechosa.

### Ciberocupación en plataformas de almacenamiento en la nube

La ciberocupación ha experimentado un aumento significativo en la última década, y ahora se ha extendido a plataformas de almacenamiento en la nube. Los atacantes están utilizando la técnica de [_typosquatting_](https://www.incibe.es/aprendeciberseguridad/typosquatting) para registrar nombres de dominio falsificados que se asemejan a dominios legítimos. El typosquatting puede ser utilizado en ataques de phishing y como medio para distribuir malware.

La ciberocupación también puede ser utilizado para llevar a cabo ataques de robo de identidad. Por ejemplo, los actores de amenazas podrían registrar el nombre literal de una empresa e intentar operar suplantando a la organización.

### Conclusión

El análisis detallado de las tendencias de ciberseguridad en el segundo trimestre de 2023 ofrece una visión completa de los desafíos actuales que enfrentan las organizaciones en materia de seguridad. Las conclusiones subrayan la importancia de implementar estrategias de protección y vigilancia constante para mantener la integridad y seguridad de los sistemas y datos.

### Deja una respuesta [Cancelar la respuesta](/blog/tendencias-de-la-ciberseguridad-en-el-segundo-trimestre-de-2023#respond)

Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con \*

Comentario \*

Nombre \* 

Correo electrónico \* 

Sitio web 

 Guardar mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente

  

Δ
