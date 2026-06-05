---
lang: fr
ref: navigation-and-page-speed
order: 5
title: "Navigation et vitesse de page — Choisir une application de menu qui ne pénalise pas les Core Web Vitals"
description: "Comment choisir une application de menu respectueuse des Core Web Vitals qui ne ralentira pas votre boutique Shopify : comprendre le LCP, l'INP, le CLS, ce qui rend une application rapide, et une liste de contrôle à mesurer vous-même avant d'installer — sans aucun code."
topic_tag: "Vitesse"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - application de menu Core Web Vitals
  - vitesse de chargement de page
  - vitesse de page
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "Ce que sont les Core Web Vitals et pourquoi ils comptent pour vous"
    url: "/fr/topic/core-web-vitals-explained/"
    desc: "LCP, INP, CLS — les trois chiffres que Google regarde."
  - title: "Comment une application de menu influe sur la vitesse — et comment le repérer"
    url: "/fr/topic/how-menu-apps-affect-page-speed/"
    desc: "JavaScript lourd, blocage du rendu, décalage de mise en page."
  - title: "Ce qui fait une bonne application de menu côté vitesse"
    url: "/fr/topic/fast-menu-app-criteria/"
    desc: "Cinq points à vérifier avant de faire confiance à une application."
  - title: "Une liste de contrôle avant d'installer toute application de menu"
    url: "/fr/topic/menu-app-installation-checklist/"
    desc: "Mesurer avant, mesurer après, surveiller pendant quelques semaines."
---

Chaque application que vous ajoutez à votre boutique injecte un peu de code dans vos pages. Une application de menu fait partie des premiers éléments à se charger, car les clients ont besoin de voir la navigation dès qu'une page s'ouvre. Le lien entre une **application de menu** et les **Core Web Vitals** n'est donc pas une préoccupation technique lointaine — il touche directement la toute première impression de votre client.

Voici ce qu'on oublie facilement : un menu superbe mais lent à charger peut parfois être pire que rien du tout. Les clients ne voient pas le code ; ils voient seulement une page qui saccade, un contenu qui se déplace dans tous les sens, ou un menu sur lequel ils tapent sans réponse. Cet article rassemble ce que j'ai appris après avoir géré ma propre boutique et mesuré les choses de nombreuses fois — non pas pour vous effrayer au sujet de la vitesse, mais pour vous donner de quoi vous orienter dans le choix d'une application de menu sans sacrifier l'expérience.

<div class="lf-key">
  <span class="lf-key-title">Lecture rapide</span>
  <ul>
    <li>Une app de menu touche la première interaction du client: la navigation.</li>
    <li>Core Web Vitals révèle lenteur, tap lag et décalage de mise en page.</li>
    <li>Mesurez avant et après installation au lieu de croire les promesses.</li>
  </ul>
</div>

## Ce que sont les Core Web Vitals et pourquoi ils comptent pour vous

Les Core Web Vitals sont les trois indicateurs que Google utilise pour mesurer l'expérience réelle du chargement d'une page. Ce ne sont pas des scores de laboratoire — ce sont des données collectées auprès de vos vrais clients.

Les trois indicateurs sont :

- **LCP (Largest Contentful Paint)** — le temps que met le plus grand élément de contenu à apparaître. Google considère que 2,5 secondes ou moins est bon.
- **INP (Interaction to Next Paint)** — le délai lorsqu'un client clique ou tape. Un bon score est inférieur à 200 millisecondes.
- **CLS (Cumulative Layout Shift)** — l'ampleur des déplacements du contenu pendant le chargement de la page. Un bon score est inférieur à 0,1.

Un détail souvent mal compris : Google mesure au 75e centile. Cela signifie que 75 % des visites doivent atteindre le niveau « bon » pour qu'une page soit considérée comme réussie. Une jolie moyenne ne vous sauvera pas si un quart de vos clients vit une mauvaise expérience.

Pourquoi un marchand devrait-il s'en soucier ? Pour deux raisons. D'abord, c'est l'un des signaux de classement de Google, même s'il n'est pas le plus important. Ensuite, et c'est plus essentiel, cela reflète ce que les clients ressentent vraiment. Chaque petite friction en haut du tunnel de conversion — y compris une page lente à charger — finit par compter.

La bonne nouvelle, c'est que vous n'avez besoin d'aucune connaissance en code pour lire ces trois chiffres. Ils sont accessibles, gratuits et expliqués assez clairement.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/core-web-vitals-explained/">Lire le guide complet → Ce que sont les Core Web Vitals et pourquoi ils comptent pour vous</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/core-web-vitals-menu-app.webp" alt="Core Web Vitals for a Shopify menu app showing LCP INP and CLS speed metrics" title="Core Web Vitals for menu app speed">
  <figcaption>Core Web Vitals turn loading speed into three numbers merchants can measure.</figcaption>
</figure>

## Comment une application de menu influe sur la vitesse — et comment le repérer

La plupart des applications sur Shopify fonctionnent en injectant du JavaScript dans la vitrine. Une application de menu ne fait pas exception. Ce n'est pas mauvais en soi — le problème, c'est la façon dont ce code est chargé et le moment où il s'exécute.

Quand un script est chargé de manière à bloquer le rendu, le navigateur doit le télécharger, le lire et finir de l'exécuter avant de pouvoir construire le reste de la page. Une application de menu entre clairement dans la catégorie susceptible de poser problème, car elle doit apparaître tôt, tout en haut de la page.

Il y a trois façons pour une application de menu de ralentir les choses ou de nuire à l'expérience :

- **Faire grimper le LCP** lorsque le menu représente une grande partie de ce qui se trouve en haut de la page et doit attendre la fin du script avant de s'afficher.
- **Augmenter l'INP** lorsque chaque tap sur le menu doit attendre que le JavaScript le traite, ce qui donne une impression de lenteur.
- **Augmenter le CLS** lorsque le menu (en particulier une barre supérieure ou une barre d'onglets en bas) apparaît tardivement et pousse les autres contenus hors de leur place.

Des signes que vous pouvez repérer à l'œil nu, sans aucun outil :

- Le menu apparaît nettement plus tard que le corps de la page.
- La page tressaute ou sursaute à l'instant où le menu apparaît.
- Vous tapez sur le menu et devez attendre un instant avant qu'il ne s'ouvre.
- Sur mobile, la barre d'onglets en bas scintille ou change de position pendant le chargement.

Repérer ces signes ne veut pas dire que l'application de menu est la seule coupable — mais cela vaut la peine de mesurer avant et après l'avoir retirée.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/how-menu-apps-affect-page-speed/">Lire le guide complet → Comment une application de menu influe sur la vitesse — et comment le repérer</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-speed-impact.webp" alt="Menu app speed impact showing delayed navigation tap lag and layout shift" title="How menu apps affect page speed">
  <figcaption>A menu app can hurt speed when scripts delay the menu, lag taps, or shift layout.</figcaption>
</figure>

## Ce qui fait une bonne application de menu côté vitesse

Une fois que vous comprenez comment une application de menu agit sur les choses, le choix devient plus facile. Voici les critères qui me semblent valoir la peine d'être pesés, à peu près par ordre d'importance.

**Se charge léger et ne bloque pas le rendu.** Une application devrait charger son code avec defer ou async, pour que le menu n'oblige pas la page à attendre. Vous ne pouvez pas le vérifier directement, mais le résultat apparaît dans vos scores de vitesse avant et après l'installation.

**Réserve un espace stable et ne provoque pas de décalage de mise en page.** Une bonne application de menu devrait réserver à l'avance la place du menu pour que le CLS ne grimpe pas. C'est un point très souvent négligé, en particulier avec les barres d'onglets fixes et les barres de navigation collantes en haut.

**Dispose d'un badge Built for Shopify.** C'est un signal de confiance. Pour obtenir le badge **Built for Shopify**, une application ne doit pas faire baisser le score Lighthouse de la vitrine de plus de dix points, selon les exigences publiées par Shopify. Ce n'est pas une garantie de perfection, mais cela montre que l'application a franchi un seuil minimal en matière de vitesse de page.

**Configuration mobile et desktop distincte.** Un menu léger utilisé dans le mauvais contexte n'est toujours pas une bonne chose. Pouvoir définir une barre d'onglets pour mobile et un mega menu pour desktop signifie que vous n'avez pas à tout faire tenir dans un seul design.

**Reste stable quand vous changez de thème.** Si le menu est stocké indépendamment du thème, vous n'avez pas à le reconstruire à chaque changement de design — et vous évitez le risque de voir du code résiduel s'accumuler pendant la transition.

Une comparaison rapide entre une application de menu typique « lourde » et une application optimisée :

| Aspect | Application qui ignore la vitesse | Application optimisée pour la vitesse |
|---|---|---|
| Mode de chargement du code | Bloque le rendu | Defer / async |
| Effet sur le CLS | Décale souvent la mise en page | Réserve un espace stable |
| Built for Shopify | Généralement aucun | Possède le badge |
| Configuration par appareil | Un seul design partagé | Mobile et desktop distincts |

Navi+ est conçu dans cet esprit : créer des menus sans code, configuration mobile et desktop distincte, des menus qui restent en place quand vous changez de thème, et l'application détient un badge Built for Shopify. Vous pouvez y jeter un œil sur [naviplus.io](https://naviplus.io). Cela dit, je vous encouragerais quand même à mesurer sur votre propre boutique plutôt qu'à faire confiance au marketing — y compris le nôtre.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/fast-menu-app-criteria/">Lire le guide complet → Ce qui fait une bonne application de menu côté vitesse</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-menu-app-criteria.webp" alt="Fast Shopify menu app criteria including defer code stable layout and Built for Shopify badge" title="Fast menu app criteria for Shopify">
  <figcaption>A speed-friendly menu app loads light, reserves stable space, and supports each device separately.</figcaption>
</figure>

## Une liste de contrôle avant d'installer toute application de menu

Cette partie est un ensemble d'étapes pratiques que vous pouvez réaliser en une quinzaine de minutes, sans compétences techniques.

1. **Mesurez d'abord votre point de référence.** Ouvrez PageSpeed Insights, collez l'URL de votre page d'accueil et celle d'une page produit, et notez vos valeurs actuelles de LCP, d'INP et de CLS. C'est votre point de comparaison.
2. **Installez l'application de menu en mode essai.** La plupart des applications proposent un essai. Construisez le menu tel que vous comptez réellement l'utiliser — ne le configurez pas à moitié.
3. **Mesurez à nouveau les mêmes pages.** Comparez les trois indicateurs à votre point de référence. De petites différences sont normales ; un gros écart sur le CLS ou le LCP est un signal qui mérite un deuxième examen.
4. **Vérifiez à l'œil sur un vrai téléphone.** Chargez la page en 4G si possible. Observez si le menu apparaît tardivement, décale la mise en page ou traîne quand vous tapez dessus.
5. **Regardez le badge et les avis.** Privilégiez les applications avec Built for Shopify et des avis qui parlent de vitesse en termes concrets.
6. **Retirez-la proprement si vous ne la gardez pas.** Si vous décidez de ne pas la conserver, assurez-vous que l'application supprime tout le code qu'elle a injecté, puis mesurez à nouveau pour confirmer que vos scores reviennent à leur point de référence.

Une remarque sur les habitudes : n'installez pas plusieurs applications de menu en même temps pour les comparer. Leur code peut se chevaucher et fausser vos mesures. Essayez-les une par une, en retirant chacune proprement avant de tester la suivante.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/menu-app-installation-checklist/">Lire le guide complet → Une liste de contrôle avant d'installer toute application de menu</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-installation-checklist.webp" alt="Menu app installation checklist for measuring PageSpeed before and after install" title="Menu app installation speed checklist">
  <figcaption>Measure before and after installation so a menu app cannot hide its speed cost.</figcaption>
</figure>

## Un mot sur la navigation, pas seulement la vitesse

La vitesse compte, mais elle sert un objectif plus large : aider les clients à trouver ce dont ils ont besoin. Un menu rapide qui cache toute la navigation ne résout rien.

Une étude du Nielsen Norman Group menée auprès de 179 utilisateurs a constaté que cacher la navigation réduisait la découvrabilité de près de moitié, tout en ralentissant les clients dans leurs actions et en rendant la recherche d'éléments plus difficile à vivre. La leçon est assez simple : si vous n'êtes pas obligé de la cacher, ne le faites pas.

C'est pourquoi, sur mobile, une barre d'onglets en bas fonctionne généralement mieux qu'un simple menu hamburger — les éléments principaux sont toujours à portée de main, sans avoir à ouvrir quoi que ce soit pour les voir. Vitesse et bonne navigation vont de pair ; choisir une application de menu, c'est choisir les deux à la fois.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-findable-navigation.webp" alt="Fast and findable mobile navigation comparing hidden hamburger menu with visible tab bar" title="Fast navigation also needs discoverability">
  <figcaption>A fast menu still has to keep important paths visible and easy to reach.</figcaption>
</figure>
## Par où commencer

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/pagespeed-baseline-menu-app.webp" alt="PageSpeed baseline comparison before and after installing a Shopify menu app" title="PageSpeed baseline before menu app install">
  <figcaption>A baseline makes it clear whether a new menu app improved or hurt the experience.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Baseline d’abord</span>Enregistrez les scores PageSpeed avant l’app, puis comparez les mêmes pages après configuration.</p>

La vitesse n'est pas un problème réservé aux développeurs. En tant que marchand, vous êtes tout à fait capable de la vérifier vous-même et de prendre une décision bien fondée. Vous n'avez pas besoin de lire une seule ligne de code pour savoir si une application de menu ralentit votre boutique — il vous suffit de savoir où regarder.

Un outil gratuit comme PageSpeed Insights suffit pour démarrer. Mesurez les scores de votre boutique dès aujourd'hui, conservez-les comme point de référence, puis comparez après avoir essayé une nouvelle application de menu. Les chiffres vous en diront plus que n'importe quelle promesse marketing — y compris les promesses de celui qui a écrit cet article.
