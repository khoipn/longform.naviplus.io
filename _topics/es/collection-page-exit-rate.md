---
lang: es
ref: collection-page-exit-rate
title: "Métrica 3 — Tasa de salida en la página de colección"
description: "Una tasa de salida alta en la página de colección suele venir de etiquetas de menú que no coinciden con lo que muestra la página. Cómo medirla con las Exploraciones de GA4, y cómo revisar y corregir tu menú para retener a los clientes."
image: "/images/measuring-menu-performance/category-page-exit-rate.webp"
image_alt: "Métrica 3 — Tasa de salida en la página de colección"
parent_title: "Cómo saber si tu menú funciona — 5 métricas que vale la pena medir"
parent_url: "/es/measuring-menu-performance/"
seo_keywords:
  - tasa de salida página de colección
  - página de colección
  - GA4
date: 2026-06-02
---

Esta es la tercera métrica de la serie de cinco, y cuenta una historia muy distinta de las dos primeras. Antes nos preguntábamos: "¿el cliente hizo clic en el menú?". Ahora la pregunta es: después de hacer clic y aterrizar en la página de colección, ¿sigue adelante o abandona el sitio?

Medir la **tasa de salida de la página de colección** te permite ver exactamente dónde se rompe el recorrido. Cuando un cliente se toma la molestia de llegar a una página de colección y aun así se va, normalmente no es porque haya perdido el interés en comprar. Suele ser porque lo que ve no coincide con lo que esperaba al hacer clic en el menú. Y muy a menudo, la causa de raíz está en cómo nombramos el elemento del menú.

## Qué es la tasa de salida de la página de colección

La tasa de salida es la proporción de sesiones que terminan en una página determinada, calculada como el número de salidas dividido entre el número de vistas de esa página. Cualquier página donde un cliente mira y luego abandona el sitio sin ver otra página cuenta como una salida.

Aplicado a la página de colección, el significado es muy concreto. Un cliente aterriza en una página de colección —digamos "Chaquetas de hombre" o "Accesorios de cocina"—, no hace clic en ningún producto, no aplica ningún filtro, no pasa a ninguna otra categoría y cierra la pestaña. Eso es una salida en la página de colección.

Conviene distinguir esto de la tasa de rebote. Un rebote es un cliente que entra y se va sin interactuar en absoluto, y suele contarse para la primera página por la que entró. La salida es más amplia: puede que el cliente ya haya visto varias páginas, pero la página de colección es la última que vio antes de irse. Para la página de colección, la tasa de salida es la cifra más interesante, porque te dice que el cliente se quedó "atascado" mientras navegaba y no pudo avanzar hacia un producto.

## Cómo medir la tasa de salida de la página de colección en GA4

Hay un pequeño inconveniente que conviene mencionar primero. En GA4, Google ha ocultado las métricas Salidas y Tasa de salida de los Informes estándar. Si abres directamente el informe Páginas y pantallas, ya no encontrarás allí una columna de Tasa de salida. Esto es distinto del antiguo Universal Analytics, así que mucha gente busca y nunca lo encuentra.

La forma de obtenerlo es usar las Exploraciones, con estos pasos breves:

- Ve a **Explorar** en la barra lateral izquierda y elige un informe de **Formato libre**.
- Añade la dimensión **Ruta de página y clase de pantalla**.
- Añade dos métricas: **Vistas** y **Salidas**.
- Filtra la ruta para quedarte con la parte de la URL de tus páginas de colección. En Shopify, las páginas de colección suelen tener la forma `/collections/...`, así que filtra la ruta de página para que contenga `/collections/`.

GA4 no incluye una columna de Tasa de salida en esta tabla por defecto, así que la calculas tú mismo dividiendo las Salidas entre las Vistas de cada página. Una categoría con 1.000 vistas y 300 salidas tiene una tasa de salida del 30%. La forma rápida es exportar a Google Sheets y añadir una columna de división.

No te obsesiones con el número absoluto, porque cada sector es diferente. Un ejercicio más útil es comparar tus categorías entre sí y con el promedio de tu propia tienda. La categoría cuya tasa de salida se desmarca claramente del resto: esa es la que hay que examinar.

## Cómo leerlo: por qué las salidas son altas en la página de colección

Cuando una página de colección tiene una tasa de salida inusualmente alta, la causa suele caer en uno de dos grupos.

**Grupo uno — el cliente aterrizó en el lugar equivocado.** Hizo clic en un elemento del menú esperando ver A, pero la página muestra B. Por ejemplo, el menú dice "Rebajas" pero al hacer clic solo aparecen artículos a precio completo. O el menú dice "Novedades" mientras que la página sigue mostrando estilos de la temporada pasada. El cliente no se equivoca; simplemente se siente decepcionado y se va. En este caso, la página de colección carga con la culpa de un elemento de menú mal etiquetado.

**Grupo dos — la página de colección es poco atractiva o difícil de usar.** Es la categoría correcta, pero dentro hay solo un puñado de productos, las fotos son malas, no hay forma de filtrar por talla o precio, o la página carga lentamente. El cliente se queda atascado a nivel de categoría y no puede avanzar hacia una página de producto, quizá porque los productos están organizados de forma desordenada o el diseño de la página está sobrecargado.

Estos dos grupos requieren soluciones distintas. El grupo dos es trabajo de la página de colección: reordenar los productos, añadir filtros, aligerar la página. El grupo uno —que es muy común y a menudo se pasa por alto— es trabajo del menú. Y en eso quiero detenerme un poco más.

## La conexión con el menú: etiquetas que no coinciden con la página

Una página de colección rara vez atrae tráfico por sí sola. La mayoría de las visitas a una página de colección vienen de un solo clic en el menú. Eso significa que la etiqueta del menú es la primera promesa que le haces al cliente. La página de colección es donde mantienes esa promesa o la rompes.

La brecha entre la promesa y la realidad es donde nacen las salidas. Algunas situaciones familiares para los comerciantes:

- El menú dice "50% de descuento", el cliente hace clic esperando grandes rebajas, pero la página mezcla artículos con un 10% de descuento con otros a precio completo.
- El menú todavía tiene "Colección de Año Nuevo" colgando ahí después de las fiestas; al hacer clic lleva a una página casi vacía.
- El menú de escritorio y el menú móvil llevan a dos páginas diferentes, una con stock y otra agotada.
- La etiqueta usa terminología interna ("Colección P/V") mientras que los clientes están acostumbrados a buscar "Vestidos" o "Camisas".

En todos los casos, el cliente no hizo nada mal. Confió en las palabras del menú, hizo clic, descubrió que no era lo correcto y se fue. La tasa de salida de esa página de colección sube, y es fácil que lo interpretemos mal como "la página de colección tiene un problema" y arreglemos lo que no es.

Vale la pena añadir: esta salida temprana ocurre incluso antes del carrito. La gente tiende a preocuparse por el abandono del carrito —según el Baymard Institute, alrededor del 70% de los carritos se abandonan de media—. Pero a nivel de categoría, el cliente se va antes incluso de haber mirado un producto. Esta es una etapa más temprana, que menos gente vigila, y corregirla suele ser barato y rápido.

## Acción: revisar las etiquetas del menú frente al contenido de la página de colección

Lo que debes hacer es muy sencillo, sin necesidad de herramientas complicadas. Abre GA4, filtra la lista de páginas de colección, ordena por tasa de salida de mayor a menor y extrae las primeras categorías.

Para cada categoría con salidas altas, recorre el propio camino del cliente:

- ¿Qué dice en realidad el elemento del menú que lleva a esta página?
- Al hacer clic, ¿la página que aparece coincide con lo que prometía la etiqueta?
- ¿Hay suficientes productos para que el cliente sienta que "hay algo que ver"?
- En móvil, ¿dónde está situado este elemento del menú y al hacer clic lleva a la misma página que en escritorio?

Si la etiqueta del menú y el contenido de la página no encajan, hay dos formas de arreglarlo: renombrar el elemento para que coincida con lo que la página realmente muestra, o mantener el nombre y ajustar la página para cumplir la expectativa. Cuál elijas depende de tu intención de negocio, pero los dos deben coincidir.

Un pequeño consejo: nombra los elementos en el idioma del cliente, no en el tuyo interno. Los clientes escriben "freidora de aire", pocos buscan "colección de electrodomésticos premium para el hogar". Cuanto más se acerque la etiqueta a las palabras que los clientes realmente usan, más fácil será que las expectativas coincidan, y más bajas serán las salidas.

El trabajo de editar el menú puede ser tedioso si tienes que tocar el código del tema. Por eso muchas tiendas usan [Navi+](https://naviplus.io) para construir y editar menús con arrastrar y soltar, sin código: renombrar un elemento, reordenar o apuntar un elemento a la página de colección correcta solo lleva unos minutos. Navi+ te permite configurar móvil y escritorio por separado, así evitas el fallo donde los dos lados llevan a páginas diferentes, y el menú se mantiene intacto incluso cuando cambias de tema. El resto —decidir qué nombre coincide con qué página— sigue siendo tuyo, porque solo tú entiendes tus propios productos.

En resumen, una tasa de salida alta en la página de colección no siempre es culpa de la página de colección. Muy a menudo empieza con una etiqueta de menú que promete una cosa y entrega otra. Hacer que las dos coincidan suele ser la forma más rápida de retener a los clientes el tiempo suficiente para que lleguen a ver un producto.

Este artículo forma parte de la guía más amplia sobre [Cómo saber si tu menú funciona — 5 métricas que vale la pena medir](/es/measuring-menu-performance/).
