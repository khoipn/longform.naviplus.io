---
lang: es
ref: chi-so-mobile-vs-desktop
title: "Métrica 4 — Comportamiento de navegación: móvil vs. escritorio"
description: "Compara la navegación en móvil y escritorio: cómo medirla en GA4, las señales de alarma cuando las salidas en móvil superan a las de escritorio y cómo dividir el diseño de tu Tab Bar para cada dispositivo."
parent_title: "Cómo saber si tu menú funciona — 5 métricas que debes seguir"
parent_url: "/es/do-luong-hieu-qua-menu/"
seo_keywords:
  - navegación móvil vs escritorio
  - segmentos de GA4
  - categoría de dispositivo
date: 2026-06-02
---

Esta métrica es un poco distinta de las tres anteriores. En lugar de mirar un solo número, miras el mismo número pero dividido por dispositivo. Aquí es donde comparas la **navegación en móvil frente a la de escritorio**: cómo navega la gente desde el teléfono en comparación con un ordenador.

Me di cuenta de esto más tarde de lo que debería. Al principio miraba el informe combinado, veía que las cifras del menú se veían bien y me quedaba tranquilo. Solo cuando separé el móvil por su cuenta vi que la mitad de mis visitantes tenían una experiencia completamente distinta de la que yo imaginaba.

## El mismo menú, dos historias diferentes

Cuando comparas la navegación por dispositivo, hay tres cosas que conviene mirar sobre todo:

- **CTR (tasa de clics en el menú):** qué porcentaje de visitantes toca realmente el menú en cada tipo de dispositivo.
- **Profundidad (cuánto navegan):** después de tocar, por cuántas páginas pasan.
- **Tasa de salida:** cuántos visitantes se van sin haber hecho casi nada.

Lo clave es que estos tres números suelen diferir con claridad entre móvil y escritorio. En escritorio, el menú suele ser horizontal y siempre visible: un vistazo rápido y el visitante lo ve todo. En móvil, el menú suele estar oculto detrás de un botón de hamburguesa de tres líneas, y hay que tocarlo para abrirlo.

Esta diferencia no es pequeña. Según el Nielsen Norman Group, ocultar la navegación principal detrás de una hamburguesa reduce casi a la mitad la probabilidad de que los visitantes encuentren el menú, además de hacer que dediquen más tiempo y perciban la tarea como más difícil. El mismo sitio web, pero los usuarios de escritorio y los de móvil prácticamente recorren dos tiendas distintas.

## Cómo medirlo: divide por categoría de dispositivo en GA4

No necesitas herramientas especiales. GA4 puede hacerlo todo.

La forma más sencilla es abrir Explorar, crear un informe de Formato libre y luego añadir **categoría de dispositivo** como dimensión. Ahora cada métrica aparece en tres filas: escritorio, móvil y tablet. Comparas la tasa de rebote, la interacción y las páginas por sesión directamente entre las filas.

Si quieres profundizar más, crea segmentos separados —un segmento "Móvil" y otro "Escritorio"— y aplica el mismo informe a cada uno. Esto resulta útil cuando quieres añadir condiciones extra, por ejemplo mirar solo a los visitantes que llegaron desde anuncios de Facebook, o solo a los visitantes de una página de categoría concreta.

Una nota sobre cómo define GA4 las cosas. En GA4, una sesión cuenta como "rebote" cuando no tiene interacción, es decir, cuando el visitante se quedó menos de 10 segundos, vio una sola página y no activó ningún evento clave. La tasa de rebote es simplemente lo inverso de la tasa de interacción. Tenlo en cuenta para que los números no te confundan.

Cuando midas, no te centres en los números absolutos. Fíjate en la **diferencia** entre móvil y escritorio.

## Una configuración que funciona en escritorio puede fallar en móvil

Esta es la parte que quiero recalcar, porque es la más fácil de pasar por alto.

Cuando construyes un menú, casi seguro estás sentado frente a un ordenador. Lo previsualizas en una pantalla ancha, ves el ordenado mega menú de varias columnas, te resulta todo fácil de hacer clic y lo publicas. El problema es que la mayoría de tus visitantes no están sentados como tú.

En móvil, todo cambia. La pantalla es estrecha, los dedos son más grandes que el cursor del ratón y los visitantes suelen tocar con un pulgar mientras sostienen el teléfono con una mano. Según la investigación sobre la zona del pulgar de Steven Hoober, la mayoría de las interacciones en un teléfono se hacen con el pulgar, y el área más fácil de alcanzar es la mitad inferior de la pantalla. Un menú apretujado en la esquina superior, con texto pequeño y elementos muy juntos: bien en escritorio, difícil de tocar en móvil.

Un ejemplo conocido: una tienda de moda mete todo su catálogo en un mega menú de escritorio muy detallado —tops, pantalones, vestidos, accesorios, por temporada, por talla—. Precioso. Pero en móvil, todo eso se comprime en una larga lista interminable dentro de la hamburguesa. El visitante tiene que tocar para abrirla, desplazarse hacia abajo, buscar y solo entonces llegar a tocar. Cada paso extra es una oportunidad más para que el visitante se vaya.

Por eso deberías configurar la navegación por separado para cada dispositivo. Para móvil, muchas tiendas cambian a una Tab Bar —una barra de navegación fija anclada en la parte inferior de la pantalla, justo en la zona del pulgar— para los 3-5 elementos más importantes, como Inicio, Categorías, Buscar y Carrito. En escritorio, mantienen el mega menú completo. Dos diseños para dos contextos.

## Señal de alarma: las salidas en móvil claramente más altas que en escritorio

La señal más clara es fácil de detectar: la tasa de rebote en móvil es notablemente más alta que en escritorio.

Para ser justos, que el móvil tenga un poco más de salidas que el escritorio es algo normal en todas partes, no solo en tu caso. Según los referentes del sector, las sesiones móviles tienden a rebotar en torno al 50 %, mientras que el escritorio es más bajo: la diferencia media es de aproximadamente 10 puntos porcentuales, y se ha mantenido bastante estable durante años. Así que no te alarmes solo porque el móvil sea más alto.

Lo que sí merece preocupación es cuando esa diferencia es inusualmente grande. Si, en las mismas páginas, el móvil tiene 20 puntos más de salidas que el escritorio o más, esa es una señal de que tu experiencia móvil tiene un problema, y la navegación es uno de los primeros sospechosos.

Algunas otras señales que conviene vigilar al mismo tiempo:

- CTR del menú en móvil mucho más bajo que en escritorio: los visitantes no lo encuentran o dudan en tocarlo.
- Profundidad más superficial en móvil: los visitantes llegan a una página y la cierran, sin navegar más a fondo.
- Páginas que cargan despacio en móvil: un menú o una app pesados ralentizan las cosas, y los visitantes pierden la paciencia. Google recomienda un LCP por debajo de 2,5 segundos, un INP por debajo de 200 ms y un CLS por debajo de 0,1; el móvil suele ser donde estas métricas están peor.

Recuerda que la tasa media de abandono del carrito ya ronda el 70 % según el Baymard Institute. Una navegación móvil difícil de usar solo empeora ese número.

## Acción: divide móvil y escritorio en dos configuraciones separadas

Lo que tienes que hacer cabe en una sola frase: no obligues a un único menú a servir a ambos mundos.

En concreto, después de mirar los números en GA4:

1. Divide el informe por categoría de dispositivo y encuentra las páginas donde el móvil tiene salidas inusualmente más altas que el escritorio.
2. Abre esas mismas páginas en tu propio teléfono real e intenta tocar el menú con un pulgar como lo haría un cliente. Verás la fricción por ti mismo.
3. Diseña un diseño móvil separado: prioriza una Tab Bar en la parte inferior para los elementos principales, recorta la lista dentro de la hamburguesa y haz los botones lo bastante grandes para tocarlos.
4. Mantén el escritorio con el mega menú completo. Dos configuraciones, no una.

Para esto exactamente se creó [Navi+](https://naviplus.io). Configuras móvil y escritorio por separado: una Tab Bar abajo para móvil, un Mega Menu para escritorio, cada uno con su propio diseño, sin tocar nada de código. El menú está optimizado para que no perjudique tus Core Web Vitals, y se mantiene en su sitio cuando cambias de tema. Todo es arrastrar y soltar.

Lo que me llevé al final es bastante sencillo. No necesitas un menú perfecto. Solo necesitas dejar de juzgar la experiencia móvil con los ojos de alguien sentado frente a un escritorio. Divide los números por dispositivo una vez, y hay muchas probabilidades de que veas lo que llevabas tiempo sin notar.

Este artículo forma parte de la guía más amplia sobre [Cómo saber si tu menú funciona — 5 métricas que debes seguir](/es/do-luong-hieu-qua-menu/).