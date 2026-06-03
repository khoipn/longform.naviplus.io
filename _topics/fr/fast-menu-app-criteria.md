---
lang: fr
ref: fast-menu-app-criteria
title: "Comment savoir si une app de menu est vraiment rapide : 5 critères"
description: "Cinq critères d'une app de menu rapide que vous pouvez vérifier vous-même : chargement différé, JavaScript léger, pas de blocage du rendu, CDN et le badge Built for Shopify. Mesurés à l'aune des Core Web Vitals."
parent_title: "Navigation et vitesse de page — choisir une app de menu qui ne dégrade pas les Core Web Vitals"
parent_url: "/fr/navigation-and-page-speed/"
seo_keywords:
  - critères app de menu rapide
  - chargement différé
  - CDN
  - Built for Shopify
date: 2026-06-02
---

Le menu, presque chaque visiteur y touche. Une app de menu lente donne donc l'impression que toute la page est lente. Mais « rapide » est un mot vague. Quand on cherche une app, on entend sans cesse des promesses du genre « ultra-léger » ou « ne ralentira pas votre page », sans aucun moyen clair de le vérifier.

Cet article réunit cinq **critères d'une app de menu rapide** que vous pouvez vérifier vous-même, sans être un profil technique. Ce sont les choses que j'ai apprises après avoir tenu une boutique pendant un certain temps et avoir relu la documentation de Google comme celle de Shopify.

Un point de repère avant de commencer. Google mesure l'expérience de chargement des pages avec l'ensemble des Core Web Vitals, dont les seuils « bons » sont un LCP inférieur à 2,5 secondes, un INP inférieur à 200 millisecondes et un CLS inférieur à 0,1 ([web.dev](https://web.dev/articles/vitals)). Une bonne app de menu est celle qui ne dégrade pas ces chiffres.

## 1. Le chargement différé : ne charger qu'au besoin

Le chargement différé (lazy loading) signifie que l'app ne charge pas tout au moment où la page s'ouvre. Tout ce qui n'est pas encore nécessaire reste en attente, et ne se charge que lorsqu'un visiteur survole ou clique.

Un mega menu de bureau peut contenir des dizaines d'éléments, ainsi que des icônes et des vignettes. Si l'app tente de tout charger d'emblée, elle entre en concurrence pour les ressources avec le contenu principal que le visiteur veut réellement voir, comme les images produits et les prix. Avec le chargement différé, le sous-menu n'apparaît que lorsque le visiteur le survole vraiment.

Comment vérifier : ouvrez la page sur un ordinateur et observez si le menu marque un léger temps d'arrêt au moment où il se déploie. Une petite pause au premier survol est généralement le signe que l'app charge au bon moment, plutôt que d'entasser tout dès le départ. Cela compte surtout pour les boutiques aux nombreuses catégories, comme les magasins généralistes ou les boutiques de mode aux multiples gammes de produits.

## 2. Un JavaScript léger

C'est le critère le plus difficile à juger à l'œil nu, mais il vaut la peine d'interroger le fournisseur à ce sujet. L'idée est simple : un menu ne devrait pas embarquer tout un framework lourd juste pour afficher quelques liens.

Le JavaScript est la partie « en marche » de l'app. Plus le bundle JavaScript est gros, plus le navigateur passe de temps à le charger et à le traiter, ce qui affecte directement l'INP, c'est-à-dire la réactivité quand un visiteur clique. Une app de menu écrite avec sobriété ne transporte que le code dont elle a besoin pour ouvrir et fermer le menu, rien de plus.

Pas besoin de lire du code pour en juger. Passez la page dans [PageSpeed Insights](https://pagespeed.web.dev/) de Google et regardez la section du JavaScript inutilisé. Si cette partie enfle nettement après l'installation de l'app de menu, c'est un signal qui invite à réfléchir à deux fois.

C'est aussi pourquoi une app qui fait bien une seule chose est généralement plus légère qu'une app qui essaie d'en faire une dizaine. Plus on entasse de fonctionnalités, plus il est difficile de garder le bundle JavaScript léger.

## 3. Pas de blocage du rendu

Le blocage du rendu (render-blocking), c'est quand le script de l'app empêche le navigateur de dessiner le contenu principal à l'écran. Le visiteur doit attendre que l'app de menu finisse de charger avant que le reste de la page n'apparaisse.

Selon la documentation de Google, un script chargé de la manière par défaut empêchera le navigateur d'analyser et d'afficher la page tant que ce script n'a pas fini d'être chargé, lu et exécuté ([web.dev](https://web.dev/articles/render-blocking-resources)). Cela repousse des jalons comme le First Contentful Paint et le LCP. Autrement dit, une app de menu placée au mauvais endroit peut laisser l'écran vide plus longtemps, même si le menu lui-même n'a rien de compliqué.

Une app bien conçue charge son script de façon asynchrone (async ou defer), de sorte que la page affiche d'abord son contenu principal, puis le menu s'y attache avec un délai que le visiteur remarque à peine. Ce point est difficile à vérifier soi-même, mais PageSpeed Insights affiche un avertissement spécifique concernant les « ressources qui bloquent le rendu », et vous pouvez comparer le score avant et après l'installation de l'app.

## 4. Des ressources servies via un CDN

Un CDN est un réseau de serveurs répartis en de nombreux endroits du monde. Quand les icônes, images et fichiers du menu sont servis via un CDN, ils sont tirés du serveur le plus proche du visiteur, et se chargent donc rapidement et de façon homogène dans toutes les régions.

C'est concret pour les marchands qui visent une clientèle internationale. Si les fichiers du menu se trouvent sur un unique serveur situé loin, les visiteurs en Europe ou aux États-Unis attendront plus longtemps pour chaque petite icône. Avec un CDN, cette distance est raccourcie.

Il est aussi facile de demander au fournisseur : d'où sont servies les icônes et les images du menu ? Une app sérieuse saura répondre, et mettra souvent en avant son recours à un CDN comme un atout. Sur Shopify, la plupart des ressources passent par l'infrastructure CDN intégrée, mais il vaut tout de même la peine de vérifier les images et icônes que l'app de menu elle-même charge.

## 5. Le badge « Built for Shopify »

Si vous utilisez Shopify et préférez ne pas vérifier vous-même chaque critère technique ci-dessus, le badge **Built for Shopify** est un raccourci fiable. C'est un label que Shopify accorde aux apps qui satisfont à ses standards de qualité, et Shopify les examine d'assez près.

Ce qui est notable, c'est que cet ensemble de critères comprend un volet performance, tiré directement des Core Web Vitals. Selon la [documentation de Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements), une app doit atteindre un LCP de 2,5 secondes ou moins, un CLS de 0,1 ou moins et un INP de 200 millisecondes ou moins, mesurés au 75e centile des chargements. De plus, l'app ne doit pas faire baisser le score de performance Lighthouse de la vitrine de plus de 10 points.

Autrement dit, une app porteuse de ce badge a déjà passé une partie de la vérification technique que vous auriez sinon à faire vous-même. Le badge ne remplace pas une mesure sur votre propre boutique, mais il resserre la liste de candidats très vite.

Parmi les apps de menu, [Navi+](https://naviplus.io) possède le badge « Built for Shopify » et est optimisée selon les critères ci-dessus : elle charge léger, ne bloque pas le rendu et évite de décaler la mise en page quand le menu apparaît. Navi+ peut construire une Tab Bar en bas d'écran pour le mobile, un Mega Menu, un Slide Menu, un FAB et un Grid Menu, avec des configurations distinctes pour le mobile et le bureau, sans aucun code. Je la mentionne ici parce qu'elle illustre de près les cinq points qu'on vient d'évoquer, et non pour dire que c'est la seule option.

## En faire une habitude de vérification

Les cinq critères ci-dessus se résument à quelques petites choses que vous pouvez faire en dix minutes :

- Survolez le menu et regardez s'il marque un temps d'arrêt parce qu'il charge tout d'un coup (chargement différé).
- Lancez PageSpeed Insights avant et après l'installation de l'app, et comparez le JavaScript inutilisé et les avertissements de blocage du rendu.
- Interrogez le fournisseur sur l'usage d'un CDN pour les icônes et les images.
- Privilégiez les apps porteuses du badge « Built for Shopify » si vous vendez sur Shopify.

Une boutique installe en général de nombreuses apps, et chacune ajoute un peu à la vitesse globale. Comme le menu apparaît sur presque toutes les pages, c'est un endroit où il vaut la peine d'être un peu plus exigeant. Bien choisir dès le départ vous évite d'avoir à désinstaller et réinstaller plus tard.

Cet article fait partie du guide plus large sur la [Navigation et vitesse de page — choisir une app de menu qui ne dégrade pas les Core Web Vitals](/fr/navigation-and-page-speed/).