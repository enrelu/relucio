# Relucio — Editorial cálido

## Alcance aprobado
Mejora visual de la landing comercial sin reescribir el copy ni reordenar secciones. Los tokens de tema, controles y cabecera son compartidos; el layout nuevo queda limitado a `.framework-landing` y `.site-main-home`.

Rama: `feature/ui-ux-refresh`. Base: `master` en `4aab1863e8ef81c5b80857f52ba9c95754cd656b`. Sin autorización de merge ni publicación en producción.

## Decisiones
- Mantener Inter y el acento terracota existente; no añadir fuentes, paquetes ni librerías de animación.
- Fondo cálido `#FAF9F6`, texto `#242420`, secundario `#55554E`, superficies `#F1F0EB`, CTA `#B83A12`.
- Modo oscuro: fondo `#1B1C19`, texto `#FAF9F6`, secundario `#C0BEB5`, superficies `#292A26`, acento `#FFB292`.
- Paneles oscuros en hero y cierre; texto claro y foco salmón.
- Titulares con más jerarquía; fases delimitadas y resultados destacados. Métricas más visibles.
- Conservar el orden natural de lectura y permitir que los títulos se ajusten sin truncarlos.
- Menú y selector de tema mantienen semántica, teclado y persistencia. Iconos SVG decorativos con nombre accesible en el botón.
- Bordes de formulario con contraste suficiente, foco visible y controles de al menos 44 px. Respetar movimiento reducido.

## Referencia
UI UX Pro Max: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

Se leyó SKILL.md y se ejecutó su generador de diseño, la búsqueda de navegación/foco y la guía de Astro. Las recomendaciones se adaptaron: no se adoptaron automáticamente el azul corporativo, la fuente serif para cuerpo, carruseles ni badges de seguridad. No se añadieron pruebas sociales ni datos no existentes. La implementación sigue Astro 6/Tailwind 4; las recomendaciones de la habilidad para versiones posteriores se consideran orientativas, no una migración.

## Validación realizada
- `npm run build`: 92 páginas compiladas.
- Home: 320, 375, 390, 768, 1024 y 1440 px, claro y oscuro.
- Contacto, perfil, blog y herramientas: 390 y 1440 px, claro y oscuro.
- Total: 28 combinaciones sin desbordamiento horizontal ni excepciones JavaScript.
- Menú móvil, Escape, enlace al método, salto al contenido, persistencia del tema, movimiento reducido y navegación sin JavaScript.
- Formulario vacío: validación nativa y sin avance a la reserva. No se enviaron datos ni se realizó ninguna reserva. Calendly en vivo no se probó en esta iteración.
- Inspección visual: home desktop/móvil/oscuro; contacto desktop/móvil/oscuro; perfil móvil y listado de blog móvil. Los extractos truncados del blog son su comportamiento previo y enlazan al artículo completo.
- `src/pages/index.astro` y `src/pages/contacto.astro` permanecen sin modificaciones.

## Archivos
- `src/styles/uiux-refresh.css`: tokens y estilos de la propuesta revisada.
- `src/layouts/Layout.astro`: carga de la hoja y clase de home.
- `src/components/Header.astro`: iconos SVG del selector de tema.
