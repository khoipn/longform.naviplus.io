---
lang: es
ref: internal-search-usage-rate
title: "Métrica 5 — Tasa de uso de la búsqueda interna"
description: "Qué es la tasa de uso de la búsqueda, cómo medirla con GA4 y cómo leer tus consultas de búsqueda más frecuentes para nombrar los elementos del menú en el idioma de tus clientes y reducir la frecuencia con la que tienen que buscar por su cuenta en la tienda."
parent_title: "Cómo saber si tu menú funciona — 5 métricas que conviene seguir"
parent_url: "/es/measuring-menu-performance/"
seo_keywords:
  - tasa de uso de la búsqueda
  - view_search_results
  - consultas de búsqueda más frecuentes
date: 2026-06-02
---

De todas las métricas para evaluar la salud de un menú, esta es la que se pasa por alto con más frecuencia. La **tasa de uso de la búsqueda** —la proporción de clientes que usan la barra de búsqueda en lugar del menú para llegar a donde necesitan ir— cuenta una historia que las métricas de clics en el menú no pueden contar: la parte de los clientes que, en silencio, han evitado tu menú.

La barra de búsqueda y el menú suenan como dos cosas distintas. En realidad son dos caras de la misma pregunta: ¿encontró el cliente lo que necesitaba, y cómo?

## Qué es la tasa de uso de la búsqueda

Dicho de forma sencilla, es la proporción de sesiones con al menos una búsqueda interna, dividida entre el total de sesiones. Si 100 personas visitan la tienda y 18 de ellas escriben en el cuadro de búsqueda, tu tasa de uso de la búsqueda es de alrededor del 18 %.

No existe un nivel "correcto" absoluto para este número. Según el Baymard Institute, la proporción de clientes que prefieren buscar antes que navegar por el menú varía muchísimo según la tienda y el tipo de producto: una tienda de moda con unos cientos de estilos es muy diferente de una tienda de repuestos electrónicos con decenas de miles de SKU.

Así que no compares tu número con un punto de referencia general. Compáralo contigo mismo a lo largo del tiempo y, lo que es más importante, lee *qué* están buscando los clientes.

## Cómo medir la tasa de uso de la búsqueda con GA4

Apenas tienes que hacer nada para empezar. GA4 cuenta con la Medición mejorada, que está activada de forma predeterminada. Cuando está habilitada, GA4 dispara automáticamente el evento **view_search_results** cada vez que un cliente realiza una búsqueda.

Así es como funciona: GA4 reconoce una búsqueda a partir de un parámetro en la URL de la página de resultados. De forma predeterminada busca los parámetros `q`, `s`, `search`, `query` y `keyword`. Si tu URL de resultados de búsqueda se ve como `?q=camisa-blanca`, todo funciona de inmediato.

En Shopify, la URL de búsqueda predeterminada usa `?q=`, así que `view_search_results` normalmente empieza a contar sin ningún ajuste. Si tu tienda usa un parámetro poco habitual, solo tienes que añadirlo a la configuración de tu flujo de datos en GA4.

Para ver los datos, ve a Informes → Interacción → Eventos y busca el evento **view_search_results**. Ábrelo y encontrarás el parámetro `search_term`, que es la lista de palabras clave que escribieron los clientes. Para calcular la tasa, toma el número de sesiones con `view_search_results` y divídelo entre el total de sesiones del mismo periodo.

## Un uso elevado de la búsqueda no es necesariamente malo

Aquí es donde resulta fácil malinterpretar las cosas. Un uso elevado de la búsqueda a veces puede ser una buena señal. Los clientes que compran a través de la búsqueda suelen saber exactamente lo que quieren y, según el Baymard Institute, este es un grupo con una alta intención de compra. Una barra de búsqueda que se usa mucho, y que se usa de forma eficaz, es un activo.

El problema es *qué* están buscando los clientes.

Si un cliente escribe el nombre de un producto muy concreto, un SKU o una marca, eso es un comportamiento de búsqueda sano. El menú no puede, ni debe, listar absolutamente todos los artículos.

Pero si los clientes escriben una y otra vez cosas que deberían estar visibles directamente en el menú —"camisa blanca", "rebajas", "novedades", "nuevo"—, eso es una señal de que el menú no es lo bastante claro. Los clientes no buscan porque disfruten buscando. Echan un vistazo al menú, no encuentran una vía de entrada y recurren al cuadro de búsqueda como una salida de emergencia.

Baymard describe este fenómeno con exactitud: muchas consultas de "tipo de producto" son en realidad clientes que intentan llegar a una categoría más rápido, o que lo hacen porque no pudieron encontrar esa categoría a través del menú principal. Dicho de otro modo, la barra de búsqueda está cargando con un trabajo que debería haber hecho el menú.

## Leer tus consultas de búsqueda más frecuentes

No te quedes en el número total. La parte más valiosa son tus **consultas de búsqueda más frecuentes** —la lista de palabras clave más buscadas, extraída del parámetro `search_term`.

Imprime las 30–50 consultas principales y ponlas junto a tu menú actual. Luego pregúntate, línea por línea: lo que escribió el cliente, ¿ya tiene una vía de entrada clara en el menú?

Suelen aparecer tres grupos:

- **Coincide con un nombre de categoría que ya está en el menú.** El cliente escribe "vestido" mientras el menú dice "Faldas". El cliente escribe "descuento" mientras el menú dice "Outlet". Esta es la señal más clara: la categoría *existe*, pero su nombre en el menú no coincide con el idioma que usan los clientes, así que no la reconocen y tienen que escribirla a mano.
- **Algo que tienes, pero que el menú nunca menciona.** Los clientes escriben "regalos", "tallas grandes", "conjuntos a juego": tienes stock para este grupo, pero no le has dado una sección propia. Esto es una pista para añadir una nueva categoría o filtro.
- **Algo que no vendes.** Los clientes escriben el nombre de un producto que no has incorporado. Este grupo no tiene nada que ver con el menú, pero es un dato valioso para las compras.

El primer grupo es el que vale la pena corregir de inmediato. Cada consulta que coincide con el nombre de una categoría es un cliente que tuvo que dar un paso extra que no debería haber necesitado.

## Nombra tu menú en el idioma de tus clientes

La conclusión es muy sencilla: renombra los elementos de tu menú tal como se refieren a ellos los clientes, no como lo haces tú, el comerciante.

Los comerciantes tienden a nombrar los menús en su propio idioma interno: "Colección Primavera/Verano", "Línea Premium", "Grupo A". A nosotros nos suena bien porque vivimos dentro de esa forma de categorizar. Los clientes no. Los clientes escriben lo que tienen en la cabeza: "camisa de manga corta", "gama alta", "barato".

La regla que surge: tus consultas de búsqueda más frecuentes son el diccionario que tus clientes escribieron para ti. Si mucha gente escribe "rebajas", plantéate un elemento de menú llamado sencillamente "Rebajas" en lugar de "Outlet" o "Ofertas". Si mucha gente escribe "vestido", pon "Vestidos" primero, o úsalo en lugar de "Faldas".

La prueba también es suave: cambia algunas etiquetas y luego observa, durante las semanas siguientes, si el uso de la búsqueda para esas consultas exactas baja. Si los clientes dejan de tener que buscar algo que ahora está justo en el menú, sabrás que arreglaste lo correcto.

La parte difícil no es técnica, es estar dispuesto a cambiar las etiquetas. Renombrar un menú suena a algo menor, pero toca cómo definimos nuestra propia tienda. Una herramienta de arrastrar y soltar como [Navi+](https://naviplus.io) quita parte de la incomodidad de esto: editas etiquetas, reordenas y pruebas nuevos diseños en un Mega Menu o una Tab Bar sin código y sin miedo a romper tu tema. Cuando cambiar una etiqueta sale barato, estarás más dispuesto a escuchar a tus clientes.

La tasa de uso de la búsqueda, leída de la forma correcta, es la voz de los clientes que probaron el menú y lo encontraron insuficiente. Se quedaron y buscaron de todos modos. Nuestro trabajo es escuchar lo que nos están diciendo.

---

Este artículo forma parte de la guía más amplia sobre [Cómo saber si tu menú funciona — 5 métricas que conviene seguir](/es/measuring-menu-performance/).