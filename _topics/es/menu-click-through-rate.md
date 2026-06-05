---
lang: es
ref: menu-click-through-rate
title: "Métrica 1 — Tasa de clics de cada elemento del menú"
description: "El CTR de cada elemento del menú muestra qué opciones reciben clics y cuáles se ignoran. Cómo medirlo con GA4 y Clarity, cómo interpretarlo y cómo ajustar tu menú para mejorar la tasa de clics."
image: "/images/measuring-menu-performance/menu-click-through-rate.webp"
image_alt: "Métrica 1 — Tasa de clics de cada elemento del menú"
parent_title: "Cómo saber si tu menú está funcionando bien — 5 métricas que conviene medir"
parent_url: "/es/measuring-menu-performance/"
seo_keywords:
  - CTR de elemento de menú
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

El CTR de cada elemento del menú es el primer número que miro cada vez que quiero saber si un menú está cumpliendo su función. Dicho de forma sencilla, te indica qué proporción de las personas que ven el menú realmente hacen clic en un elemento concreto. Un elemento que mucha gente ve pero pocos clican suele estar diciéndote algo — solo tienes que saber leerlo correctamente.

Este artículo profundiza en una sola métrica: el CTR de cada elemento del menú. Cómo medirlo, cómo interpretarlo y, lo más importante, qué hacer una vez que lo has interpretado.

## Qué es el CTR de un elemento del menú

El CTR (tasa de clics, del inglés *click-through rate*) de un elemento del menú es la relación entre la cantidad de veces que se hace clic en ese elemento y la cantidad de veces que se muestra el menú. Por ejemplo, si el menú se muestra 1000 veces en una semana y se hace clic 80 veces en el elemento "Novedades", entonces el CTR de ese elemento es de alrededor del 8 %.

Lo bueno es que no miras un único número global. Miras cada elemento, uno al lado del otro. Cuánto para "Inicio", cuánto para "Rebajas", cuánto para "Contacto". Lo que vale la pena observar es la diferencia entre los elementos, no la cifra absoluta.

No me preocupo demasiado por qué CTR "cuenta como bueno". Cada tienda es distinta, cada público es distinto. Lo que me importa es el orden: qué elementos se usan mucho y cuáles casi nadie toca.

## Cómo medir el CTR de cada elemento

Hay varias maneras, desde lo preciso hasta lo visual. No necesitas las tres — elige la que mejor te convenga.

### Medir con GA4

GA4 (Google Analytics 4) es el enfoque cuantitativo más claro. De forma predeterminada, la Medición mejorada solo captura los clics que llevan fuera de tu dominio; no detecta automáticamente cuándo se ha hecho clic en un elemento de tu barra de navegación interna.

Para capturar los clics en el menú, lo habitual es usar Google Tag Manager: crear un activador para los clics en enlaces dentro del área de navegación y luego enviar a GA4 un evento dedicado (mucha gente lo llama `menu_click`), junto con un parámetro que contenga el nombre del elemento sobre el que se hizo clic. Después, en el informe Interacción > Eventos, verás cada elemento con su recuento de clics por separado.

Un apunte por experiencia: tras configurar esto, los datos suelen tardar uno o dos días en aparecer del todo en los informes, así que no te apresures a sacar conclusiones el primer día. Y necesitas conocer el "número de personas que vieron el menú" para calcular la tasa — esto suele aproximarse con el número de vistas de página que contienen el menú.

### Medir con Hotjar o Clarity

Si prefieres no tocar etiquetas ni código, Hotjar o Microsoft Clarity te dan la respuesta de forma visual. Ambos tienen un mapa de calor de clics — un mapa que muestra dónde se hace mucho clic y dónde la cosa está fría.

Microsoft Clarity es gratuito y fácil de empezar a usar. Añades un fragmento de código y, unos días después, abres el mapa de calor y ves qué zonas del menú están iluminadas y cuáles oscuras. Para los menús móviles, Clarity puede mostrar también el estado del menú desplegado, de modo que puedes ver los elementos dentro de un slide menu, no solo la parte visible de inmediato.

Algo que Clarity hace bien y GA4 no: distinguir entre "clics muertos" (*dead clicks*) y "clics de furia" (*rage clicks*). Un clic muerto se da cuando un visitante hace clic en algo que parece clicable pero no ocurre nada. Un clic de furia se da cuando un visitante hace clic repetidamente en un mismo punto por frustración. Si un elemento del menú recibe muchos clics muertos, es muy probable que parezca un botón pero en realidad no lleve a ningún sitio — eso es un problema que hay que arreglar, no simplemente un caso de CTR bajo.

A menudo combino ambos: GA4 para los números que comparar a lo largo del tiempo, y Clarity o Hotjar para entender el "porqué" detrás de los números.

## Cómo leer la tabla de CTR

Cuando alineas los elementos uno al lado del otro, la imagen suele adoptar una forma conocida: unos pocos elementos con un CTR muy alto, un grupo en la zona media y unos pocos cerca de cero.

Un elemento cercano a cero no es automáticamente un mal elemento. Puede caer en uno de dos grupos:

- Un elemento redundante: los clientes realmente no lo necesitan. Por ejemplo, un elemento "Noticias" cuando la tienda no ha publicado nada en todo el año.
- Un elemento con un nombre mal interpretado: los clientes necesitan ese contenido pero no se dan cuenta de que ese elemento lleva hasta él. El nombre es demasiado creativo, o usa jerga interna que los clientes no conocen.

La forma de distinguir estos dos grupos es fijarse en si al contenido que hay detrás se llega por otra ruta. Si la página "Promociones" tiene muchas vistas pero el elemento del menú "Ofertas locas" tiene un CTR bajo, lo más probable es que el problema esté en el nombre, no en el contenido.

### Cuando un elemento importante tiene un CTR inusualmente bajo

Este es el caso en el que vale la pena detenerse más tiempo. Elementos como "Rebajas" o "Novedades" deberían atraer clics. Quien visita una tienda minorista suele tener curiosidad por ver qué hay con descuento y qué hay nuevo. Si estos elementos tienen un CTR inusualmente bajo, rara vez es porque los clientes no estén interesados — normalmente tiene que ver con dónde están colocados.

El elemento podría estar al final del menú, fuera de la vista. La investigación de seguimiento ocular del Nielsen Norman Group muestra que los usuarios tienden a recorrer una página con un patrón en forma de F — barriendo horizontalmente por la parte superior y luego bajando por el borde izquierdo, saltándose buena parte del centro y de la zona inferior. Un elemento valioso colocado en un rincón escondido puede pasar fácilmente desapercibido al ojo del cliente.

En móvil, el problema es aún más acusado. Si el elemento "Rebajas" está enterrado en lo más profundo del menú hamburguesa, el cliente tiene que tocar para abrir el menú y luego desplazarse para encontrarlo. Cada paso adicional es otro punto en el que la gente abandona. Por eso muchas tiendas colocan "Rebajas" directamente en la Tab Bar, en la parte inferior de la pantalla — siempre visible, sin necesidad de abrir nada.

## Qué hacer después de leerlo

Si lo lees y no cambias nada, el número se queda en un simple número. Yo suelo agruparlo en tres acciones.

Primero, recorta los elementos que apenas se usan. Cuanto más largo es el menú, más se diluye cada elemento y más difícil le resulta al cliente elegir. Si un elemento se mantiene cerca de un CTR cero durante muchas semanas y el contenido que hay detrás también recibe pocas visitas, adelante: elimínalo o fusiónalo con otro. Un menú más ligero ayuda a que los elementos restantes destaquen más.

Segundo, renombra los elementos poco claros. Este es el cambio más barato, y el efecto suele verse de inmediato. Usa las palabras que usan los clientes, no las que te gustan a ti: "Colección" podría convertirse en "Productos", "Ofertas locas" en "Promociones". Después de renombrar, vigila de nuevo el CTR durante unas semanas para confirmarlo.

Tercero, mueve los elementos importantes a un lugar destacado. Si "Rebajas" debería ser fuerte pero ahora mismo es débil, muévelo al principio del menú de escritorio o ponlo en la Tab Bar en móvil. Cambiar la posición suele tener más impacto del que la gente espera.

Construir y cambiar todo esto no requiere necesariamente un desarrollador. Con una herramienta como [Navi+](https://naviplus.io), arrastras y sueltas para reordenar los elementos, renombrarlos o sacar un elemento a la Tab Bar de la parte inferior en móvil — las configuraciones de móvil y escritorio son independientes, así que puedes hacer que "Rebajas" destaque en el teléfono sin recargar el menú de escritorio. De ese modo, el ciclo de "leer los números y luego ajustar el menú" ocurre rápido, y puedes seguir probando y volviendo a medir.

Una última observación: cambia una cosa a la vez. Si renombras, reposicionas y eliminas un elemento todo de golpe, después no sabrás qué cambio provocó la variación del CTR. Cambia una cosa, espera a los datos y luego pasa al siguiente.

Este artículo forma parte de la guía más amplia sobre [Cómo saber si tu menú está funcionando bien — 5 métricas que conviene medir](/es/measuring-menu-performance/).