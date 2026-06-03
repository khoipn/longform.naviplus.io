---
lang: es
ref: tieu-chi-app-menu-nhanh
title: "Cómo saber si una app de menú es realmente rápida: 5 criterios"
description: "Cinco criterios de una app de menú rápida que puedes comprobar tú mismo: carga diferida, JavaScript ligero, sin bloqueo del renderizado, CDN y la insignia Built for Shopify. Medidos según Core Web Vitals."
parent_title: "Navegación y velocidad de página — cómo elegir una app de menú que no perjudique los Core Web Vitals"
parent_url: "/es/navigation-toc-do-tai-trang/"
seo_keywords:
  - criterios de app de menú rápida
  - carga diferida
  - CDN
  - Built for Shopify
date: 2026-06-02
---

El menú es algo que casi todos los visitantes tocan. Por eso, una app de menú lenta hace que toda la página se sienta lenta. Pero "rápida" es una palabra vaga. Cuando uno busca una app, no deja de escuchar afirmaciones como "ultraligera" y "no ralentizará tu página", sin forma clara de verificar nada de ello.

Este artículo reúne cinco **criterios de una app de menú rápida** que puedes comprobar tú mismo, sin ser una persona técnica. Son las cosas que aprendí tras llevar una tienda durante un tiempo y repasar la documentación tanto de Google como de Shopify.

Un punto de referencia antes de empezar. Google mide la experiencia de carga de la página con el conjunto Core Web Vitals, donde los umbrales considerados "buenos" son un LCP por debajo de 2,5 segundos, un INP por debajo de 200 milisegundos y un CLS por debajo de 0,1 ([web.dev](https://web.dev/articles/vitals)). Una buena app de menú es la que no empeora estas cifras.

## 1. Carga diferida: cargar solo cuando hace falta

La carga diferida (lazy loading) significa que la app no carga todo en el instante en que se abre la página. Lo que aún no se necesita queda en espera, y solo se carga cuando el visitante pasa el cursor o hace clic.

Un mega menú de escritorio puede contener decenas de elementos, junto con iconos y miniaturas. Si la app intenta cargarlo todo de entrada, compite por recursos con el contenido principal que el visitante realmente quiere ver, como las imágenes y los precios de los productos. Con la carga diferida, la capa del submenú solo aparece cuando el visitante pasa de verdad el cursor sobre ella.

Cómo comprobarlo: abre la página en un ordenador y fíjate en si el menú titubea un instante al desplegarse. Una pequeña pausa en el primer hover suele ser señal de que la app carga en el momento adecuado, en lugar de meterlo todo desde el principio. Esto importa sobre todo en tiendas con muchas categorías, como tiendas generalistas o de moda con muchas líneas de producto.

## 2. JavaScript ligero

Este es el criterio más difícil de juzgar a simple vista, pero vale la pena preguntárselo al proveedor. La idea es sencilla: un menú no debería arrastrar todo un framework pesado solo para mostrar unos cuantos enlaces.

JavaScript es la parte "en ejecución" de la app. Cuanto más grande es el paquete de JavaScript, más tiempo dedica el navegador a cargarlo y procesarlo, lo cual afecta directamente al INP, la capacidad de respuesta cuando un visitante hace clic. Una app de menú escrita de forma ligera lleva solo el código que necesita para abrir y cerrar el menú, nada más.

No hace falta saber leer código para juzgar esto. Pasa la página por [PageSpeed Insights](https://pagespeed.web.dev/) de Google y mira la sección de JavaScript sin usar. Si esta parte crece de forma notable tras instalar la app de menú, es una señal para pensárselo dos veces.

Por esto mismo, una app que hace una cosa bien suele ser más ligera que una app que intenta hacer una docena de cosas. Cuanto más metes dentro, más difícil es mantener ligero el paquete de JavaScript.

## 3. Sin bloqueo del renderizado

El bloqueo del renderizado (render-blocking) ocurre cuando el script de la app impide que el navegador dibuje el contenido principal en la pantalla. El visitante tiene que esperar a que la app de menú termine de cargar antes de que aparezca el resto de la página.

Según la documentación de Google, un script cargado de la forma predeterminada bloqueará el análisis y la visualización de la página por parte del navegador hasta que ese script haya terminado de cargarse, leerse y ejecutarse ([web.dev](https://web.dev/articles/render-blocking-resources)). Esto retrasa hitos como el First Contentful Paint y el LCP. En otras palabras, una app de menú colocada en el lugar equivocado puede dejar la pantalla en blanco durante más tiempo, aunque el menú en sí no tenga nada de complicado.

Una app bien construida carga su script de forma asíncrona (async o defer), de modo que la página muestra primero su contenido principal y el menú se incorpora después con un retraso que el visitante apenas nota. Este punto es difícil de comprobar por uno mismo, pero PageSpeed Insights tiene una advertencia específica sobre "recursos que bloquean el renderizado", y puedes comparar la puntuación antes y después de instalar la app.

## 4. Recursos servidos a través de una CDN

Una CDN es una red de servidores repartidos por muchos lugares del mundo. Cuando los iconos, las imágenes y los archivos del menú se sirven a través de una CDN, se traen desde el servidor más cercano al visitante, de modo que cargan rápido y de forma pareja en todas las regiones.

Esto es práctico para los comerciantes que tienen como objetivo clientes internacionales. Si los archivos del menú están en un único servidor situado lejos, los visitantes en Europa o Estados Unidos esperarán más por cada pequeño icono. Con una CDN, esa distancia se acorta.

También es fácil preguntárselo al proveedor: ¿desde dónde se sirven los iconos y las imágenes del menú? Una app seria sabrá responder, y a menudo mencionará su uso de una CDN como un punto a favor. En Shopify, la mayoría de los recursos pasan por la infraestructura de CDN integrada, pero aun así vale la pena revisar las imágenes y los iconos que carga la propia app de menú.

## 5. La insignia "Built for Shopify"

Si usas Shopify y prefieres no comprobar tú mismo cada criterio técnico anterior, la insignia **Built for Shopify** es un atajo fiable. Es una etiqueta que Shopify concede a las apps que cumplen sus estándares de calidad, y Shopify las revisa con bastante rigor.

Lo destacable es que este conjunto de criterios incluye una parte de rendimiento, tomada directamente de los Core Web Vitals. Según la [documentación de Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements), una app debe alcanzar un LCP de 2,5 segundos o menos, un CLS de 0,1 o menos y un INP de 200 milisegundos o menos, medidos en el percentil 75 de las cargas. Además, la app no debe reducir en más de 10 puntos la puntuación de rendimiento de Lighthouse del escaparate.

Dicho de otro modo, una app con esta insignia significa que ya ha superado una parte de la verificación técnica que de otra forma tendrías que hacer tú mismo. La insignia no sustituye a medir en tu propia tienda, pero acota la lista de candidatos muy rápido.

Entre las apps de menú, [Navi+](https://naviplus.io) tiene la insignia "Built for Shopify" y está optimizada según los criterios anteriores: carga ligera, no bloquea el renderizado y evita desplazar el diseño cuando aparece el menú. Navi+ puede crear una Tab Bar inferior para móvil, un Mega Menu, un Slide Menu, un FAB y un Grid Menu, con configuraciones separadas para móvil y escritorio, sin necesidad de código. La menciono aquí porque es un ejemplo cercano de los cinco puntos que acabamos de tratar, no para decir que sea la única opción.

## Reuniéndolo todo en un hábito de comprobación

Los cinco criterios anteriores se reducen a unas pocas cosas pequeñas que puedes hacer en diez minutos:

- Pasa el cursor sobre el menú y observa si titubea por cargarlo todo de golpe (carga diferida).
- Ejecuta PageSpeed Insights antes y después de instalar la app, y compara el JavaScript sin usar y las advertencias de bloqueo del renderizado.
- Pregunta al proveedor por una CDN para los iconos y las imágenes.
- Prefiere las apps con la insignia "Built for Shopify" si vendes en Shopify.

Una tienda suele instalar muchas apps, y cada una añade un poco a la velocidad general. Como el menú aparece en casi todas las páginas, es un punto en el que vale la pena ser un poco más exigente. Elegir bien desde el principio te ahorra tener que desinstalar y reinstalar más adelante.

Este artículo forma parte de la guía más amplia sobre [Navegación y velocidad de página — cómo elegir una app de menú que no perjudique los Core Web Vitals](/es/navigation-toc-do-tai-trang/).