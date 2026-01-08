---
title: 'Elegir contraseñas fuertes'
description: 'Rompiendo mitos: La fuerza de la contraseña La fuerza de las contraseñas es importante en contextos específicos, como cuando se trata de proteger información va...'
pubDate: '2026-01-08'
category: 'General'
tags: []
heroImage: "https://relucio.es/wp-content/uploads/2024/01/1695726748678.jpg"
---

### Rompiendo mitos: La fuerza de la contraseña

La fuerza de las contraseñas es importante en contextos específicos, como cuando se trata de proteger información valiosa o confidencial. Sin embargo, **la fuerza de la contraseña no siempre es importante**. Por ejemplo, si una contraseña es robada en texto plano a través de un ataque de phishing o un servidor web comprometido, una contraseña fuerte no ayudará.

Para reducir el daño de este tipo de ataques, es mucho más importante no reutilizar las contraseñas y que cada servicio web tenga una contraseña única. Además, es esencial **utilizar un gestor de contraseñas**, ya que es imposible recordar cientos de contraseñas únicas.

Sin embargo, un gestor de contraseñas se convierte en un único punto de fallo. Especialmente si los datos del gestor de contraseñas se suben a la web, ya sea para sincronizarlos entre varios dispositivos o simplemente como copia de seguridad, siempre existe la posibilidad de que estos datos sean robados. Pero nadie podrá descifrar tus contraseñas mientras no sean capaces de adivinar tu clave maestra.

Por lo tanto, **la única contraseña que es necesario recordar, esta clave maestra, debe ser muy difícil de adivinar**. Una contraseña fuerte. Y no está de más recordar que hay que habilitar la [autenticación de múltiples factores (MFA)](https://www.linkedin.com/pulse/consejos-de-ciberseguridad-1-c%C3%B3mo-proteger-tus-en-l%C3%ADnea-relucio-).

### Cómo funciona la adivinación de contraseñas

Cuando alguien tiene datos encriptados, **adivinar la contraseña con la que están encriptados es un proceso bastante sencillo**. Se basa únicamente en probar contraseñas. La misión del gestor de contraseñas es hacer que este proceso sea muy lento permitiendo, como máximo, 1.000 pruebas por segundo. Aunque no todos los gestores tienen esta limitación.

Por tanto, el objetivo de elegir una contraseña fuerte no es elegir una contraseña que incluya el mayor número posible de clases de caracteres. Tampoco es hacer que la contraseña parezca compleja. En realidad, hacerla muy larga tampoco ayudará necesariamente. **Lo que importa es que esta contraseña en particular aparezca lo más abajo posible en la lista de pruebas**.

Un punto de partida para adivinar contraseñas son siempre las contraseñas conocidas por fugas de datos anteriores. Por ejemplo, es bien conocida la lista rockyou.txt, una lista con 14 millones de contraseñas filtradas en 2009 en la brecha de [RockYou](https://techcrunch.com/2009/12/14/rockyou-hack-security-myspace-facebook-passwords/).

Si tu contraseña está en esta lista, incluso a 1.000 pruebas por segundo, **llevará como mucho 14.000 segundos (menos de 4 horas)** encontrar tu contraseña. Este tiempo es bastante corto, y eso asumiendo que el proveedor de tu gestor de contraseñas ha hecho su trabajo que, como muestra la experiencia pasada, esta no es una suposición en la que se pueda confiar.

Dado que estamos hablando de ordenadores, la forma «correcta» de expresar los números grandes es a través de potencias de dos. Así que, si una contraseña en la lista de RockYou tiene menos de 24 bits de entropía, significa que definitivamente se encontrará después de 2^24 (16.777.216) conjeturas. Cada bit de entropía añadido a la contraseña duplica el tiempo de adivinación.

Una palabra poco común como, por ejemplo, “**bahorrina”** aporta 16 bits de entropía, la mayúscula al principio sólo aporta un bit porque solo hay dos opciones; mayúscula o minúscula. Hay sustituciones comunes y algo de basura añadida al final que aporta unos pocos bits más. Pero el resultado final, **“B4h0rr1n4&;**”, son unos escasos 28 bits de entropía, **así que esta es una contraseña que parece compleja, pero en realidad no lo es**.

### Cómo elegir una contraseña verdaderamente fuerte

El hecho es que somos malos eligiendo contraseñas fuertes, por lo que la única forma realista de conseguir una contraseña fuerte es generarla aleatoriamente. Pero también somos muy malos para recordar una mezcla de letras y dígitos sin sentido. Lo que nos lleva a las frases de contraseña: **secuencias de múltiples palabras aleatorias**, mucho más fáciles de recordar con la misma fuerza.

Una forma típica de generar una frase de contraseña sería el [diceware](https://en.wikipedia.org/wiki/Diceware), por ejemplo, podrías usar la [lista de palabras de la EFF](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) para cinco dados. Usa dados reales o un sitio web que tire dados por ti.

Digamos que el resultado es ⚄⚃⚂⚅⚀, busca el 54361 en el diccionario y obtienes «silver». Esta es la primera palabra de tu frase de contraseña. Repite el proceso para obtener el número de palabras necesario. Este proceso es justo lo que hacen algunos generadores de contraseñas como el de [Bitwarden](https://www.linkedin.com/company/bitwarden1/).

¿Cuántas palabras necesitas? Como una «persona normal» probablemente puedas estar seguro si adivinar tu contraseña llevara un siglo a un hardware común. Aunque no es imposible, descifrar tus contraseñas simplemente costará demasiado incluso en el hardware del futuro y no valdrá la pena. Incluso si tu gestor de contraseñas no te protege bien y permite 1.000.000 de intentos por segundo, **una frase de contraseña de cuatro palabras (51 bits de entropía) debería ser suficiente**.

### Deja una respuesta [Cancelar la respuesta](/blog/elegir-contrasenas-fuertes#respond)

Tu dirección de correo electrónico no será publicada. Los campos obligatorios están marcados con \*

Comentario \*

Nombre \* 

Correo electrónico \* 

Sitio web 

 Guardar mi nombre, correo electrónico y sitio web en este navegador para la próxima vez que comente

  

Δ
