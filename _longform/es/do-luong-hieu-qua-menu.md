---
lang: es
ref: do-luong-hieu-qua-menu
order: 3
title: "Cómo saber si tu menú funciona — 5 métricas que vale la pena medir"
description: "Mide el rendimiento de tu menú con 5 métricas prácticas: CTR, profundidad de navegación, tasa de salida, comportamiento en móvil y búsqueda interna — todas medibles gratis con GA4 y Clarity."
topic_tag: "Medición"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - medir rendimiento del menú
  - GA4
  - métricas de navegación
  - analítica del menú
date: 2026-06-02
child_links:
  - title: "Métrica 1 — Tasa de clics de cada elemento del menú"
    url: "/es/topic/chi-so-ctr-menu/"
    desc: "Qué elementos reciben clics y cuáles se ignoran."
  - title: "Métrica 2 — Profundidad de navegación"
    url: "/es/topic/chi-so-navigation-depth/"
    desc: "Cuántos pasos hacen falta para llegar a un producto."
  - title: "Métrica 3 — Tasa de salida en las páginas de categoría"
    url: "/es/topic/chi-so-exit-rate-danh-muc/"
    desc: "El cliente llega a una categoría y se va sin ver ningún producto."
  - title: "Métrica 4 — Comportamiento de navegación en móvil vs. escritorio"
    url: "/es/topic/chi-so-mobile-vs-desktop/"
    desc: "El mismo menú, dos mundos muy distintos."
  - title: "Métrica 5 — Tasa de uso de la búsqueda interna"
    url: "/es/topic/chi-so-search-usage/"
    desc: "Cuando el cliente busca lo que el menú debería haber resuelto."
---

La mayoría juzgamos nuestro menú a ojo. Se ve ordenado, tiene suficientes elementos, nadie se queja — así que debe de estar bien. Pero hay algo que pocos notan: el cliente rara vez se queja de un menú difícil de usar. No te escribe para darte su opinión. Simplemente busca un rato en silencio, no encuentra lo que necesita y cierra la pestaña.

Para saber si tu menú está cumpliendo de verdad su función, no basta con la intuición. Hay que mirar lo que el cliente realmente hace: en qué hace clic, cuán profundo llega, dónde se detiene. Eso es lo que significa **medir el rendimiento del menú** — en lugar de adivinar, dejas que hablen los datos. La buena noticia es que no necesitas ser un experto en analítica. Las cinco métricas que vienen a continuación bastan para empezar, y la mayoría ya vienen integradas en herramientas gratuitas como GA4 o Microsoft Clarity.

Este artículo recorre cada métrica: qué es, por qué importa y cómo leerla para que puedas saber si tu menú está ayudando al cliente o poniéndose en su camino.

## Métrica 1 — Tasa de clics de cada elemento del menú

La tasa de clics (CTR) de un elemento del menú es la proporción de personas que lo ven y realmente hacen clic en él. Es la métrica más sencilla y, sin embargo, la que más revela, porque te dice cuánta atención atrae cada elemento.

Cuando miras el CTR de todo tu menú a la vez, normalmente ves un panorama desigual. Unos pocos elementos reciben muchos clics y otros pocos apenas reciben ninguno. Un elemento casi sin clics no es necesariamente inútil — puede estar en el lugar equivocado, tener un nombre confuso o quedar eclipsado por otros elementos.

Algunas preguntas que vale la pena hacerse al leer el CTR:

- ¿El elemento más importante para los ingresos está entre los que reciben clics con frecuencia?
- ¿Hay algún elemento que consideras "menor" pero que recibe clics sorprendentemente a menudo? Puede que el cliente lo necesite más de lo que crees.
- ¿Hay algún elemento prácticamente muerto que aun así ocupa un lugar privilegiado en la barra del menú?

En GA4 esto se mide con eventos de clic asociados a cada enlace del menú. Si la parte técnica te resulta intimidante, Microsoft Clarity ofrece mapas de calor que muestran dónde hace clic la gente usando solo color.

El CTR también es una buena forma de hacer experimentos. Cambia el nombre de un elemento, modifica el orden o fusiona dos elementos — y luego observa cómo se mueven los números al cabo de una o dos semanas. Cómo leer e interpretar el CTR en situaciones concretas lo abordamos con más detalle en un artículo aparte.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/chi-so-ctr-menu/">Lee la guía completa → Métrica 1 — Tasa de clics de cada elemento del menú</a></p>

## Métrica 2 — Profundidad de navegación

La profundidad de navegación mide cuántos clics le toma al cliente llegar a lo que necesita. Un producto que está a un clic de la página de inicio es fácil de encontrar. Uno que está a cuatro clics es uno que la mayoría de los clientes abandona antes siquiera de llegar.

Aquí es donde un menú perjudica tus ventas en silencio. Puedes tener exactamente el producto que el cliente quiere, a buen precio y con buenas fotos — pero si está enterrado demasiado profundo, el cliente nunca lo ve. Cada capa extra de clics es otra oportunidad para que el cliente se distraiga, cambie de opinión o cierre la página.

En los informes de recorrido de GA4 puedes ver las rutas habituales que la gente sigue desde la página de inicio. Si los clientes tienen que dar varios rodeos para llegar a la página de una categoría principal, eso es una señal de que tu menú les está haciendo trabajar demasiado.

Un consejo práctico: haz una lista de las cinco páginas más importantes para los ingresos y luego navega hasta cada una desde la página de inicio contando los pasos. Si te toma más de tres, puede que las estés escondiendo demasiado bien. Tipos de menú como el Mega Menu en escritorio o la Tab Bar en la parte inferior de la pantalla móvil existen precisamente para acortar este camino — acercando los elementos importantes al alcance del cliente. Cómo medir la profundidad y reducirla con sensatez lo tratamos en un artículo aparte.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/chi-so-navigation-depth/">Lee la guía completa → Métrica 2 — Profundidad de navegación</a></p>

## Métrica 3 — Tasa de salida en las páginas de categoría

La tasa de salida te dice la proporción de sesiones que terminan en una página concreta, sin importar cómo llegó el cliente hasta ella. A diferencia de la tasa de rebote (que solo cuenta la primera página de una sesión), la tasa de salida se aplica a todas las páginas de una sesión — lo que la hace ideal para examinar las páginas de categoría.

¿Por qué importan las páginas de categoría? Porque llegar a una significa que el cliente ya tiene intención. Hizo clic en "Calzado de hombre" o "Artículos de cocina" porque quería ver ese grupo. Si la mayoría se va justo ahí sin ver un solo producto, algo no encaja entre lo que esperaban y lo que vieron.

Algunas causas habituales de una tasa de salida alta en las páginas de categoría:

- El nombre del elemento del menú promete una cosa, pero la página entrega otra.
- La página muestra demasiado y el cliente no sabe dónde mirar.
- No hay filtros, así que el cliente no puede acotar sus opciones.
- La página carga lento. Según Google, el umbral "bueno" para el tiempo que tarda en aparecer el contenido principal (LCP) es de menos de 2,5 segundos; mucho más lento que eso y el cliente se va antes de que la página termine siquiera de cargar.

Una nota al leer esto: una tasa de salida alta no siempre es mala. Algunas páginas son puntos de parada naturales. Pero para una página de categoría — donde el cliente debería avanzar hacia los productos — un número alto suele merecer una segunda mirada. Cómo distinguir una tasa de salida "normal" de una "alarmante" lo profundizamos en un artículo aparte.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/chi-so-exit-rate-danh-muc/">Lee la guía completa → Métrica 3 — Tasa de salida en las páginas de categoría</a></p>

## Métrica 4 — Comportamiento de navegación en móvil vs. escritorio

Esta es la métrica que muchos se saltan, y a menudo lo pagan caro. La razón es simple: hoy la mayoría de los clientes llega desde un teléfono. Las cifras del sector muestran que los dispositivos móviles representan la mayor parte del tráfico hacia las webs de comercio electrónico — el número exacto varía bastante según la fuente y la región, pero el móvil superó al escritorio hace mucho tiempo.

El problema es que un menú que se ve bien en la pantalla de un portátil puede ser muy difícil de usar en un teléfono. Un Mega Menu de varias columnas no se puede meter entero en una pantalla vertical. Un menú de hamburguesa esconde todo detrás de un solo icono — el cliente tiene que tocarlo para verlo. El Nielsen Norman Group ha demostrado que el contenido oculto tras una hamburguesa se descubre y se usa menos que cuando se deja visible: esconder tu navegación principal reduce casi a la mitad las probabilidades de que el cliente la encuentre.

La forma más fácil de leer esto es separar tus números por dispositivo. En GA4 puedes comparar los dos grupos lado a lado:

| Qué comparar | La pregunta que plantea |
| --- | --- |
| CTR del menú en móvil vs. escritorio | Para el mismo elemento, ¿se hace clic mucho menos en móvil? |
| Profundidad de navegación | ¿Los clientes en móvil tienen que hacer más clics para llegar a su objetivo? |
| Tasa de conversión por dispositivo | ¿Dónde se queda el móvil muy por detrás del escritorio? |

Si el móvil claramente se queda atrás, lo más probable es que los botones sean demasiado pequeños, queden fuera del alcance del pulgar o que los elementos importantes estén enterrados muy adentro tras un menú deslizable. Por eso muchas tiendas usan una Tab Bar fija en la parte inferior de la pantalla para móvil y un Mega Menu para escritorio — dos diseños distintos para dos maneras distintas de usar el sitio. Una herramienta como [Navi+](https://naviplus.io) te permite configurar móvil y escritorio por separado sin código, así no tienes que forzar un solo diseño para que sirva para ambos. Hemos escrito un artículo aparte sobre cómo comparar y manejar la brecha entre las dos plataformas.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/chi-so-mobile-vs-desktop/">Lee la guía completa → Métrica 4 — Comportamiento de navegación en móvil vs. escritorio</a></p>

## Métrica 5 — Tasa de uso de la búsqueda interna

La última métrica parece no tener relación con el menú, pero en realidad es el espejo más claro de cómo le va a tu menú. La tasa de uso de la búsqueda interna es el porcentaje de clientes que usan el cuadro de búsqueda de tu sitio en lugar de navegar por el menú.

Un poco de búsqueda es normal, incluso bueno — los clientes que usan la búsqueda suelen tener mayor intención de compra, porque buscan activamente algo concreto. Pero si esta tasa se dispara, suele ser señal de que el menú no está guiando al cliente hacia donde necesita ir. Renuncian al menú porque no les sirve y recurren a escribir.

Lo que es aún más revelador es lo que ocurre después de la búsqueda. Una investigación del Baymard Institute muestra que la búsqueda interna en una gran parte de las webs de comercio electrónico rinde por debajo de un estándar aceptable. Eso significa que cuando tu menú empuja al cliente hacia el cuadro de búsqueda, estás apostando por una herramienta que también tiende a decepcionarlo.

En GA4, si activas el seguimiento de búsqueda en el sitio, puedes ver qué palabras buscan los clientes. Esa lista es oro. Si mucha gente escribe el nombre de una categoría que ya tienes en tu menú, ese elemento muy probablemente esté en el lugar equivocado o tenga un nombre difícil de encontrar.

Lee la búsqueda interna como una queja educada de tus clientes: "No pude encontrar esto en tu menú". Entramos en detalle en un artículo aparte sobre cómo usar los términos de búsqueda para remendar tu menú.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/chi-so-search-usage/">Lee la guía completa → Métrica 5 — Tasa de uso de la búsqueda interna</a></p>

## Por dónde empezar

Cinco métricas puede sonar a mucho, pero no hace falta abordarlas todas a la vez. Si recién empiezas, aquí tienes un orden sugerido:

1. Activa GA4 y habilita el seguimiento de búsqueda en el sitio — cuesta casi nada de esfuerzo y te da la métrica 5 de inmediato, además de parte de las métricas 2 y 3.
2. Instala Microsoft Clarity para los mapas de calor, que respaldan la métrica 1 y te dan un vistazo rápido al comportamiento en móvil.
3. Después de dos semanas, siéntate y revisa los números de una sola pasada, y anota dos o tres cosas que se vean raras.

No intentes optimizar todo de golpe. Elige la métrica más clara, arregla una cosa y luego espera datos frescos. Un menú es algo que se ajusta poco a poco, no algo que se configura una vez y se olvida.

Algo que conviene tener en mente al hacer cambios: cada vez que modificas el menú, no hagas la página más lenta. Según Google, los umbrales "buenos" de los Core Web Vitals son LCP por debajo de 2,5 segundos, INP por debajo de 200 milisegundos y CLS por debajo de 0,1. Un menú precioso que hace que la página se entrecorte o que desplace su disposición mientras carga hace más daño que bien.

## Reflexiones finales

Los números no están ahí para calificarte ni juzgarte. Simplemente te ayudan a ver dónde se atascan los clientes — algo que el ojo y la intuición difícilmente alcanzan a captar. Un buen menú no necesita ser perfecto desde el primer día; necesita mejorarse poco a poco a partir de lo que el cliente realmente hace.

Una sugerencia amable: revisa tu menú cada tres meses, o cada vez que añadas una categoría nueva. La forma menos estresante de empezar es activar GA4 o instalar Microsoft Clarity hoy, dejarlo dos semanas y luego volver y mirar tu menú a través de los ojos de los datos. Te sorprenderá lo que los clientes te han estado diciendo en silencio sin que tú lo escucharas.