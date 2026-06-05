---
lang: es
ref: navigation-and-page-speed
order: 5
title: "Navegación y velocidad de página — Cómo elegir una app de menú que no perjudique tus Core Web Vitals"
description: "Cómo elegir una app de menú compatible con los Core Web Vitals que no ralentice tu tienda Shopify: entiende LCP, INP y CLS, qué hace que una app sea rápida y una lista de comprobación para medirlo tú mismo antes de instalarla — sin necesidad de código."
topic_tag: "Velocidad"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - app de menú Core Web Vitals
  - velocidad de carga de página
  - velocidad de página
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "Qué son los Core Web Vitals y por qué te importan"
    url: "/es/topic/core-web-vitals-explained/"
    desc: "LCP, INP, CLS — las tres cifras en las que Google se fija."
  - title: "Cómo afecta una app de menú a la velocidad — y cómo detectarlo"
    url: "/es/topic/how-menu-apps-affect-page-speed/"
    desc: "JavaScript pesado, bloqueo del renderizado, desplazamiento de diseño."
  - title: "Qué hace que una app de menú sea buena en velocidad"
    url: "/es/topic/fast-menu-app-criteria/"
    desc: "Cinco cosas que comprobar antes de confiar en una app."
  - title: "Una lista de comprobación antes de instalar cualquier app de menú"
    url: "/es/topic/menu-app-installation-checklist/"
    desc: "Mide antes, mide después y obsérvalo durante unas semanas."
---

Cada app que añades a tu tienda inyecta un poco de código en tus páginas. Una app de menú es una de las primeras cosas que se cargan, porque los clientes necesitan ver la navegación en el momento en que se abre una página. Por eso la relación entre una **app de menú** y los **Core Web Vitals** no es una preocupación técnica lejana — toca directamente la primera impresión de tu cliente.

Esto es lo que resulta fácil pasar por alto: un menú precioso que carga despacio a veces puede ser peor que no tener nada. Los clientes no ven el código; solo ven una página que se entrecorta, contenido que salta de un lado a otro o un menú que tocan y no responde. Este artículo recoge lo que he aprendido tras llevar mi propia tienda y medir las cosas muchas veces — no para asustarte con la velocidad, sino para darte lo suficiente con qué orientarte al elegir una app de menú sin sacrificar la experiencia.

<div class="lf-key">
  <span class="lf-key-title">Lectura rápida</span>
  <ul>
    <li>Una app de menú afecta lo primero que toca el cliente: la navegación.</li>
    <li>Core Web Vitals muestra carga lenta, retraso al tocar y cambios de layout.</li>
    <li>Mide antes y después en lugar de confiar en promesas.</li>
  </ul>
</div>

## Qué son los Core Web Vitals y por qué te importan

Los Core Web Vitals son las tres métricas que Google usa para medir la experiencia real de carga de una página. No son puntuaciones de laboratorio — son datos recogidos de tus clientes reales.

Las tres métricas son:

- **LCP (Largest Contentful Paint)** — cuánto tarda en aparecer el mayor elemento de contenido. Google considera bueno 2,5 segundos o menos.
- **INP (Interaction to Next Paint)** — el retraso cuando un cliente hace clic o toca. Bueno es por debajo de 200 milisegundos.
- **CLS (Cumulative Layout Shift)** — cuánto salta el contenido mientras la página se carga. Bueno es por debajo de 0,1.

Un detalle que se malinterpreta a menudo: Google mide en el percentil 75. Eso significa que el 75 % de las visitas tienen que alcanzar el nivel "bueno" para que una página cuente como aprobada. Un buen promedio no te salvará si una cuarta parte de tus clientes tiene una mala experiencia.

¿Por qué debería importarle a un comerciante? Por dos razones. Primero, es una de las señales de posicionamiento de Google, aunque no sea la más importante. Segundo, y más importante aún, refleja cómo se sienten realmente los clientes. Cada pequeña fricción al principio del embudo — incluida una página que carga despacio — se va sumando.

La buena noticia es que no necesitas saber nada de código para leer estas tres cifras. Están disponibles, son gratuitas y se explican con bastante claridad.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/core-web-vitals-explained/">Lee la guía completa → Qué son los Core Web Vitals y por qué te importan</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/core-web-vitals-menu-app.webp" alt="Core Web Vitals for a Shopify menu app showing LCP INP and CLS speed metrics" title="Core Web Vitals for menu app speed">
  <figcaption>Core Web Vitals turn loading speed into three numbers merchants can measure.</figcaption>
</figure>

## Cómo afecta una app de menú a la velocidad — y cómo detectarlo

La mayoría de las apps en Shopify funcionan inyectando JavaScript en la tienda. Una app de menú no es diferente. Eso no es malo en sí mismo — el problema es cómo se carga ese código y cuándo se ejecuta.

Cuando un script se carga de forma que bloquea el renderizado, el navegador tiene que descargarlo, leerlo y terminar de ejecutarlo antes de poder construir el resto de la página. Una app de menú entra de lleno en el grupo que probablemente cause problemas, porque necesita aparecer pronto, justo en la parte superior de la página.

Hay tres formas en que una app de menú puede ralentizar las cosas o perjudicar la experiencia:

- **Empujar el LCP hacia arriba** cuando el menú es una parte grande de lo que hay en la parte superior de la página y tiene que esperar a que el script termine antes de mostrarse.
- **Elevar el INP** cuando cada toque en el menú tiene que esperar a que JavaScript lo procese, haciendo que se sienta lento.
- **Aumentar el CLS** cuando el menú (especialmente una barra superior o una barra de pestañas inferior) aparece tarde y empuja al resto del contenido fuera de su sitio.

Señales que puedes detectar a simple vista, sin necesidad de herramientas:

- El menú aparece notablemente más tarde que el cuerpo de la página.
- La página se mueve o da un tirón en el instante en que aparece el menú.
- Tocas el menú y luego tienes que esperar un momento antes de que se abra.
- En móvil, la barra de pestañas inferior parpadea o salta de posición mientras carga.

Ver estas señales no significa que la app de menú sea la única culpable — pero vale la pena medir antes y después de quitarla.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/how-menu-apps-affect-page-speed/">Lee la guía completa → Cómo afecta una app de menú a la velocidad — y cómo detectarlo</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-speed-impact.webp" alt="Menu app speed impact showing delayed navigation tap lag and layout shift" title="How menu apps affect page speed">
  <figcaption>A menu app can hurt speed when scripts delay the menu, lag taps, or shift layout.</figcaption>
</figure>

## Qué hace que una app de menú sea buena en velocidad

Una vez que entiendes cómo afecta una app de menú a las cosas, elegir una resulta más fácil. A continuación están los criterios que considero que vale la pena sopesar, más o menos en orden de importancia.

**Carga ligera y no bloquea el renderizado.** Una app debería cargar su código con defer o async, para que el menú no obligue a la página a esperar. No puedes comprobarlo directamente, pero el resultado se ve en tus puntuaciones de velocidad antes y después de instalarla.

**Reserva un espacio estable y no provoca desplazamiento de diseño.** Una buena app de menú debería apartar de antemano el espacio para el menú, de modo que el CLS no suba. Este es un punto que muy a menudo se pasa por alto, sobre todo con barras de pestañas fijas y barras de navegación adheridas en la parte superior.

**Tiene la insignia Built for Shopify.** Es una señal de confianza. Para obtener la insignia **Built for Shopify**, una app no debe reducir la puntuación Lighthouse de la tienda en más de diez puntos, según los requisitos publicados por Shopify. No es garantía de perfección, pero demuestra que la app ha superado un mínimo en velocidad de página.

**Configuración separada para móvil y escritorio.** Un menú ligero usado en el contexto equivocado tampoco es bueno. Poder configurar una barra de pestañas para móvil y un mega menú para escritorio significa que no tienes que meterlo todo en un único diseño.

**Se mantiene estable cuando cambias de tema.** Si el menú se almacena de forma independiente del tema, no tienes que reconstruirlo cada vez que cambias de diseño — y evitas el riesgo de que se acumule código residual durante el cambio.

Una comparación rápida entre una típica app de menú "pesada" y una optimizada:

| Aspecto | App que ignora la velocidad | App optimizada para la velocidad |
|---|---|---|
| Cómo carga el código | Bloquea el renderizado | Defer / async |
| Efecto sobre el CLS | A menudo desplaza el diseño | Reserva un espacio estable |
| Built for Shopify | Normalmente ninguna | Tiene la insignia |
| Configuración por dispositivo | Un único diseño compartido | Móvil y escritorio por separado |

Navi+ está construida siguiendo estas líneas: crear menús sin código, configuración separada para móvil y escritorio, menús que se mantienen en su sitio cuando cambias de tema, y la app cuenta con la insignia Built for Shopify. Puedes echar un vistazo en [naviplus.io](https://naviplus.io). Aun así, te animaría a medir en tu propia tienda en lugar de fiarte del marketing — incluido el nuestro.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/fast-menu-app-criteria/">Lee la guía completa → Qué hace que una app de menú sea buena en velocidad</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-menu-app-criteria.webp" alt="Fast Shopify menu app criteria including defer code stable layout and Built for Shopify badge" title="Fast menu app criteria for Shopify">
  <figcaption>A speed-friendly menu app loads light, reserves stable space, and supports each device separately.</figcaption>
</figure>

## Una lista de comprobación antes de instalar cualquier app de menú

Esta parte es un conjunto de pasos prácticos que puedes hacer en unos quince minutos, sin conocimientos técnicos.

1. **Mide primero tu línea base.** Abre PageSpeed Insights, pega la URL de tu página de inicio y de una página de producto, y anota tus valores actuales de LCP, INP y CLS. Este es tu punto de referencia para comparar.
2. **Instala la app de menú en modo de prueba.** La mayoría de las apps tienen una prueba gratuita. Crea el menú tal como realmente piensas usarlo — no lo configures a medias.
3. **Mide de nuevo esas mismas páginas.** Compara las tres métricas con tu línea base. Las diferencias pequeñas son normales; una diferencia grande en CLS o LCP es una señal para volver a mirar.
4. **Comprueba a simple vista en un teléfono real.** Carga la página con 4G si puedes. Observa si el menú aparece tarde, desplaza el diseño o se retrasa cuando lo tocas.
5. **Fíjate en la insignia y en las reseñas.** Da preferencia a las apps con Built for Shopify y a las reseñas que mencionen la velocidad en términos concretos.
6. **Quítala limpiamente si no la conservas.** Si decides no quedártela, asegúrate de que la app elimina todo el código que inyectó, y luego vuelve a medir para confirmar que tus puntuaciones regresan a la línea base.

Una nota sobre los hábitos: no instales varias apps de menú a la vez para compararlas. Su código puede solaparse y distorsionar tus mediciones. Pruébalas de una en una, quitando cada una limpiamente antes de probar la siguiente.

<p class="lf-readmore"><span class="lf-readmore-kicker">En profundidad</span><a href="/es/topic/menu-app-installation-checklist/">Lee la guía completa → Una lista de comprobación antes de instalar cualquier app de menú</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-installation-checklist.webp" alt="Menu app installation checklist for measuring PageSpeed before and after install" title="Menu app installation speed checklist">
  <figcaption>Measure before and after installation so a menu app cannot hide its speed cost.</figcaption>
</figure>

## Unas palabras sobre la navegación, no solo la velocidad

La velocidad importa, pero sirve a un objetivo mayor: ayudar a los clientes a encontrar lo que necesitan. Un menú rápido que oculta toda la navegación no resuelve nada.

Un estudio de Nielsen Norman Group con 179 usuarios encontró que ocultar la navegación reducía la descubribilidad casi a la mitad, además de hacer que los clientes actuaran más despacio y que encontrar cosas resultara más difícil. La lección es bastante simple: si no tienes que ocultarla, no lo hagas.

Por eso, en móvil, una barra de pestañas inferior tiende a funcionar mejor que un simple menú de hamburguesa — los elementos principales están siempre al alcance, sin tener que abrir nada para verlos. La velocidad y una buena navegación van de la mano; elegir una app de menú significa elegir ambas a la vez.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-findable-navigation.webp" alt="Fast and findable mobile navigation comparing hidden hamburger menu with visible tab bar" title="Fast navigation also needs discoverability">
  <figcaption>A fast menu still has to keep important paths visible and easy to reach.</figcaption>
</figure>
## Por dónde empezar

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/pagespeed-baseline-menu-app.webp" alt="PageSpeed baseline comparison before and after installing a Shopify menu app" title="PageSpeed baseline before menu app install">
  <figcaption>A baseline makes it clear whether a new menu app improved or hurt the experience.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Primero baseline</span>Guarda los puntajes PageSpeed antes de instalar y compara las mismas páginas después.</p>

La velocidad no es un problema solo para desarrolladores. Como comerciante, eres perfectamente capaz de comprobarla tú mismo y tomar una decisión bien fundamentada. No necesitas leer ni una sola línea de código para saber si una app de menú está ralentizando tu tienda — solo necesitas saber dónde mirar.

Una herramienta gratuita como PageSpeed Insights basta para empezar. Mide hoy las puntuaciones de tu tienda, guárdalas como línea base y luego compara después de probar una nueva app de menú. Las cifras te dirán más que cualquier afirmación de marketing — incluidas las de quien escribió este artículo.