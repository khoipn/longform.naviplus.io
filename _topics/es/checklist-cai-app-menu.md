---
lang: es
ref: checklist-cai-app-menu
title: "Una lista de verificación para hacer antes de instalar cualquier app de menú"
description: "Lista de verificación para instalar una app de menú en tiendas Shopify: cuatro pasos para medir PageSpeed y los Core Web Vitals antes y después de instalar, para que elijas una app que no ralentice tus páginas en móvil ni en escritorio."
parent_title: "Navegación y velocidad de página: cómo elegir una app de menú que no perjudique los Core Web Vitals"
parent_url: "/es/navigation-toc-do-tai-trang/"
seo_keywords:
  - lista de verificación para instalar app de menú
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

Antes de hacer clic en "Añadir app" para cualquier app de menú, hay una pequeña cosa que vale la pena hacer: anota qué tan rápida es tu tienda en este momento. Suena simple, pero esta es justo la parte que la mayoría se salta, y luego, unas semanas después, notan que el sitio se siente más lento sin saber qué app lo causó.

Esta es una breve **lista de verificación para instalar una app de menú** que puedes seguir de inmediato, basada en la experiencia de gestionar tiendas reales. Nada complicado: solo unas cuantas mediciones antes y después, para que no instales un menú precioso y, sin darte cuenta, sacrifiques velocidad a cambio. Cuantas más apps instales, más rinde este hábito, porque cada app que añades puede afectar la velocidad de tu página.

## Por qué vale la pena preocuparse por la velocidad

Los compradores en línea se van con facilidad de por sí. Según el Baymard Institute, la tasa media de abandono del carrito ronda el 70%, y esa cifra apenas se ha movido en más de una década. Cada segundo extra de carga, cada salto en el diseño mientras la página se carga, es un motivo más para que un cliente se vaya.

Google también considera la velocidad y la estabilidad de la página como parte de la experiencia, agrupadas en un conjunto de métricas llamado Core Web Vitals. Las tres cifras principales, según Google:

- LCP (Largest Contentful Paint): bueno cuando está por debajo de 2,5 segundos.
- INP (Interaction to Next Paint): bueno cuando está por debajo de 200 milisegundos.
- CLS (Cumulative Layout Shift, es decir, si la página da saltos): bueno cuando está por debajo de 0,1.

No necesitas memorizar esto. Solo recuerda: una app de menú bien construida no empeorará notablemente estas tres cifras. La lista de verificación que sigue te ayuda a confirmarlo con datos, en lugar de con una corazonada.

## Lista de verificación para instalar una app de menú: cuatro pasos, mide antes y después

Este es el corazón del artículo. Cuatro pasos, en orden.

### Paso 1: Mide la puntuación de PageSpeed de tu tienda antes de instalar

Abre [PageSpeed Insights](https://pagespeed.web.dev) de Google, pega la URL de tu página de inicio y la de una página de producto representativa, y ejecuta la prueba. Anota las puntuaciones: haz una captura de pantalla o guárdalas en un pequeño archivo.

¿Por qué guardarlas? Porque sin una instantánea del "antes" no tienes nada con qué comparar. Unas semanas después, cuando el sitio se sienta lento, no sabrás si es la app de menú, la nueva app de reseñas que instalaste o el lote de imágenes de producto que acabas de añadir.

PageSpeed Insights te ofrece dos tipos de datos. La sección superior son datos de campo de usuarios reales (recopilados del Chrome User Experience Report); la sección inferior son datos de laboratorio (la máquina de Google simulando una sola carga de página). En este paso, solo anota la puntuación general más las tres cifras de LCP, INP y CLS.

### Paso 2: Instala la app, vuelve a medir, compara

Instala la app de menú que piensas usar y, luego, configúrala exactamente como lo harás de verdad. Eso significa activar los tipos de menú que vas a usar: una Tab Bar en la parte inferior en móvil, un Mega Menu para escritorio o un Slide Menu, en lugar de medir con la configuración predeterminada.

Después, vuelve a ejecutar PageSpeed Insights en las mismas URL del Paso 1. Pon los dos resultados uno al lado del otro.

Una nota: justo después de instalar, los datos de campo (sección superior) normalmente aún no han cambiado, porque agrupan los últimos 28 días. Lo que puedes comparar de inmediato son los datos de laboratorio. No te alarmes si la puntuación de laboratorio baja unos pocos puntos: lo que importa es cuánto. Una caída de 2 o 3 puntos suele no ser preocupante; una caída grande, o un CLS que de repente se dispara (la página dando un tirón cuando aparece el menú), merece una segunda mirada.

### Paso 3: Revisa los Core Web Vitals en Search Console al cabo de 1 o 2 semanas

Este es el paso que te da las cifras reales, porque mide la experiencia de clientes reales. Abre [Google Search Console](https://search.google.com/search-console) y ve a Core Web Vitals (Experiencia en la página). Este informe usa datos de campo de tus propios usuarios.

¿Por qué esperar 1 o 2 semanas? Los datos de campo se calculan sobre una ventana móvil de 28 días. Después de unas dos semanas, una parte significativa de esa ventana son datos nuevos, suficientes para que veas una tendencia. En Search Console, fíjate en las URL que pasan de "Bueno" a "Necesita mejorar" o "Deficiente". Si el grupo de URL que fallan se dispara justo después de instalar la app de menú, eso es una señal.

Si tu tienda todavía recibe pocas visitas, puede que Search Console no tenga suficientes datos para mostrar el informe. En ese caso, apóyate en PageSpeed Insights y en los datos de laboratorio.

### Paso 4: Si las puntuaciones bajan notablemente, cambia de app o ajusta la configuración

Si, tras medir, las métricas están claramente peor, tienes dos opciones.

Una es optimizar la configuración: desactivar animaciones innecesarias, reducir la cantidad de elementos en un Mega Menu sobredimensionado, eliminar las imágenes pesadas amontonadas dentro del menú. A menudo el problema no es la app, sino lo ambicioso que construimos el menú.

La otra es cambiar de app, si la propia app es pesada y no hay forma de controlarla. Una buena app de menú debería asumir la velocidad como responsabilidad propia, no trasladarte ese trabajo a ti.

## No olvides medir en móvil

La mayoría de los comerciantes reciben más tráfico desde el teléfono que desde el escritorio: clientes navegando por Facebook, tocando un enlace, abriendo la tienda directamente en su móvil.

Las puntuaciones en móvil casi siempre son más bajas que en escritorio, porque los teléfonos son menos potentes y las redes móviles son menos estables que el wifi. En PageSpeed Insights, recuerda cambiar a la pestaña Móvil para medir: no te quedes solo con la puntuación de Escritorio porque se ve más bonita.

Esto importa especialmente para el menú móvil. Una Tab Bar mal construida en la parte inferior de la pantalla o un Slide Menu pueden hacer que la página dé un tirón (subiendo el CLS) justo cuando un cliente abre la tienda. Prueba a abrir tu tienda en tu propio teléfono y observa si algo salta o se entrecorta mientras la página se carga. Tus propios ojos suelen captar cosas que la puntuación todavía no refleja.

## Un recordatorio amable

La lista de verificación de arriba no pretende ahuyentarte de las apps de menú: una buena navegación ayuda a los clientes a encontrar productos más rápido, y en eso vale la pena invertir. La idea es simplemente esta: elige una app que sea consciente de la velocidad.

[Navi+](https://naviplus.io) fue construido justo con ese espíritu: un creador de menús sin código y de arrastrar y soltar para Tab Bars, Mega Menus, Slide Menus, FABs y Grid Menus; con configuraciones separadas para móvil y escritorio; y ajustado para que no arrastre hacia abajo tus Core Web Vitals. Aun así, el consejo honesto sigue en pie: ejecuta los cuatro pasos de medición de arriba con cualquier app, Navi+ incluido, para que puedas darte tranquilidad con las cifras de tu propia tienda.

Este artículo forma parte de la guía más amplia sobre [Navegación y velocidad de página: cómo elegir una app de menú que no perjudique los Core Web Vitals](/es/navigation-toc-do-tai-trang/).
