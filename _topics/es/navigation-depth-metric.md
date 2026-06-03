---
lang: es
ref: navigation-depth-metric
title: "Métrica 2 — Profundidad de navegación"
description: "La profundidad de navegación mide el número de pasos desde la página de inicio hasta un producto. Cómo medirla en GA4, el punto de referencia de 2-3 pasos y cómo usar un mega menú y una Tab Bar para acortar el camino hacia la compra."
parent_title: "Cómo saber si tu menú está funcionando — 5 métricas que conviene seguir"
parent_url: "/es/measuring-menu-performance/"
seo_keywords:
  - profundidad de navegación
  - embudo en GA4
  - profundidad de clics
date: 2026-06-02
---

La primera métrica te dice si los compradores *hacen clic* en tu menú siquiera. La segunda responde a una pregunta distinta: una vez que han hecho clic, ¿cuánto tienen que recorrer para llegar a lo que quieren comprar?

Eso es la **profundidad de navegación**. Dicho de forma sencilla, es el número promedio de pasos que una persona tiene que dar desde la página de inicio hasta una página de producto. Cuantos menos pasos, más corto es el camino hacia el carrito. Cuantos más pasos, más lugares hay para que el comprador se canse, se distraiga y cierre la pestaña.

Una vez tuve una tienda donde yo —la persona que la había construido— todavía tenía que hacer clic cuatro veces para encontrar un producto popular. Ese fue el momento en que lo entendí: si el dueño de la tienda se pierde, ¿cómo no se va a perder alguien que la visita por primera vez?

## Qué es la profundidad de navegación y en qué se diferencia de "cuántas páginas ve un comprador"

Hay dos cosas que es fácil confundir, y conviene mantenerlas separadas.

Una son las *páginas por sesión* — el total de páginas que ve un comprador, incluyendo el tiempo que pasa navegando, comparando y leyendo reseñas. Un número alto aquí no es necesariamente malo.

La otra es la **profundidad de navegación**, o **profundidad de clics** — el número de pasos *necesarios* para ir del punto A (la página de inicio, o una categoría de nivel superior) al punto B (una página de producto). Este es el coste estructural que impones a los compradores, les guste o no.

Un camino típico en una tienda grande suele verse así: Inicio → Categoría → Subcategoría → Subcategoría más profunda → Producto. Cuatro pasos. Cada paso añadido es una vez más que el comprador tiene que leer, entender, decidir y esperar a que cargue una página.

## Cómo medir la profundidad de navegación en GA4

No tienes que adivinar. GA4 te permite ver directamente el camino real que toman tus compradores.

Hay dos enfoques habituales:

- **User Explorer**: ver el recorrido de un usuario concreto, paso a paso. Útil para examinar unos pocos casos representativos y hacerte una idea de por dónde andan deambulando los compradores.
- **Path Exploration** (o construir un Funnel Exploration): ver la secuencia en la que los compradores se mueven de inicio → categoría → producto → añadir al carrito. Más importante que el número, te muestra los *puntos de abandono* — el paso en el que más compradores se quedan en el camino.

Path Exploration dibuja un diagrama tipo Sankey: las ramas que se ensanchan son por donde pasa mucha gente, y las ramas que se estrechan son callejones sin salida. Unos minutos mirándolo y verás enseguida qué camino toman los compradores reales, y si coincide con el camino que *suponías* que tomarían.

Un consejo: no mires solo el número promedio. Desglósalo por dispositivo. El móvil y el escritorio suelen tener profundidades muy distintas, porque los menús móviles tienden a obligar a los compradores a tocar más veces para abrir cada capa.

## Un punto de referencia — y una salvedad importante

Como regla general, el camino hacia tus productos principales debería caber en **2-3 pasos**. Cuando los caminos llegan habitualmente a cinco pasos o más, es probable que tu estructura sea demasiado profunda.

Pero aquí tengo que ser honesto. La famosa "regla de los tres clics" es en realidad un mito. Nielsen Norman Group señala que nunca estuvo respaldada por ningún dato, y en los estudios que citan, la tasa de abandono no aumentó cuando una tarea superaba los tres pasos, ni tampoco bajó la satisfacción. Lo que cansa a un comprador no es el número de clics.

Lo que cansa a un comprador es el *esfuerzo* de cada clic. Un paso con una etiqueta clara, que lleva exactamente adonde el comprador espera, es casi gratis. Un paso ambiguo, que hace que el comprador se detenga y adivine dónde hacer clic, es el caro.

Así que trata el punto de referencia de 2-3 pasos como una señal de advertencia, no como una ley rígida. Una profundidad alta es una pista para que vayas a investigar *por qué* es profunda — no un número que haya que forzar a la baja a toda costa.

## Por qué los menús se vuelven profundos

Cuando voy a investigar, suelo encontrar tres culpables.

**Demasiados niveles de jerarquía.** Añades una subcategoría, luego una sub-subcategoría, luego una sub-sub-subcategoría. Cada capa tenía sentido cuando la añadiste, pero juntas forman un laberinto. Según el Baymard Institute, hasta un 37% de los sitios de comercio electrónico meten todo su catálogo en un único elemento de menú (algo como "Tienda" o "Productos") — una estructura que causa todo tipo de problemas cuando los compradores intentan profundizar.

**Sin atajos.** No hay atajos hacia tus categorías más vendidas. Un comprador que quiere "Zapatos de hombre" tiene que pasar por "Moda" → "Hombre" → "Calzado" → "Zapatos de hombre" uno por uno, aunque la mayor parte de tus ingresos esté justo ahí.

**Sin bloques destacados en el mega menú.** Tu mega menú simplemente enumera nombres de categorías a secas, sin ningún bloque que lleve directo a una colección de tendencia, novedades o la oferta de la semana. Los compradores tienen que arreglárselas solos en lugar de ser invitados a entrar.

## La solución: deja que los compradores "salten por encima"

La buena noticia: arreglar la profundidad no es difícil, y normalmente no requiere tocar tu catálogo.

**Aplana la estructura.** Fusiona las capas que son casi idénticas. Hazle a cada capa una pregunta: ¿esta capa ayuda de verdad al comprador a acotar sus opciones, o es solo una puerta más que abrir? Si es lo segundo, elimínala.

**Usa el mega menú para saltar por encima.** Este es el punto clave. Un buen mega menú despliega la jerarquía plana ante el comprador, de modo que pueda *saltar directamente* a la categoría que necesita en lugar de ir paso a paso. Nielsen Norman Group señala que los mega menús funcionan bien para la navegación porque dejan que los compradores *vean* sus opciones en lugar de tener que recordarlas. Baymard también muestra que el mega menú es el estilo de navegación más común en los grandes sitios de retail, porque es rápido y fácil de escanear.

Para hacerlo concreto para quienes venden: en lugar de hacer que los compradores se abran paso por cuatro capas para llegar a "Camisetas de hombre", pon "Camisetas", "Vaqueros", "Novedades" y "50% de descuento" directamente en el mega menú de escritorio. En móvil, una **Tab Bar** en la parte inferior de la pantalla te permite anclar tus 4-5 atajos más importantes siempre al alcance del pulgar — un toque y el comprador ya está ahí, sin necesidad de abrir el menú hamburguesa y excavar hacia abajo.

Esto es exactamente para lo que se creó [Navi+](https://naviplus.io): crear un Mega Menu, una Tab Bar y un Slide Menu arrastrando y soltando, sin código, configurar móvil y escritorio por separado, y permitirte adjuntar un bloque de colección destacada que lleve directo a una colección de mayor venta. El objetivo no es un menú más bonito — es un camino más corto desde la página de inicio hasta el botón de "Comprar".

Una última nota, para que no te pases: no te obsesiones tanto con recortar pasos que acabes amontonando todo en una sola pantalla abarrotada. Cada atajo que añadas debería tener una etiqueta clara y coincidir con lo que quieren los compradores. Menos esfuerzo, no solo menos clics — ese es el verdadero espíritu de esta métrica.

---

Este artículo forma parte de la guía más amplia sobre [Cómo saber si tu menú está funcionando — 5 métricas que conviene seguir](/es/measuring-menu-performance/).
