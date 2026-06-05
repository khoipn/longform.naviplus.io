---
lang: fr
ref: mobile-vs-desktop-navigation-behavior
title: "Métrique 4 — Comportement de navigation mobile vs ordinateur"
description: "Comparez la navigation mobile et sur ordinateur : comment la mesurer dans GA4, les signaux d'alerte quand les sorties mobiles dépassent celles sur ordinateur, et comment adapter votre Tab Bar à chaque appareil."
image: "/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp"
image_alt: "Métrique 4 — Comportement de navigation mobile vs ordinateur"
parent_title: "Comment savoir si votre menu fonctionne — 5 métriques à suivre"
parent_url: "/fr/measuring-menu-performance/"
seo_keywords:
  - navigation mobile vs ordinateur
  - segments GA4
  - catégorie d'appareil
date: 2026-06-02
---

Cette métrique est un peu différente des trois précédentes. Au lieu de regarder un seul chiffre, vous regardez le même chiffre, mais réparti par appareil. C'est ici que vous comparez la **navigation mobile vs ordinateur** — comment les gens naviguent sur un téléphone par rapport à un ordinateur.

J'ai compris cela plus tard que je n'aurais dû. Au début, je regardais le rapport combiné, je voyais que les chiffres du menu semblaient corrects, et je me sentais rassuré. Ce n'est qu'en isolant le mobile que j'ai vu que la moitié de mes visiteurs vivaient une expérience complètement différente de celle que j'imaginais.

## Le même menu, deux histoires différentes

Quand vous comparez la navigation par appareil, il y a trois choses qui méritent le plus votre attention :

- **CTR (taux de clic sur le menu) :** quel pourcentage de visiteurs touchent réellement le menu sur chaque type d'appareil.
- **Profondeur (jusqu'où ils naviguent) :** après avoir touché le menu, combien de pages ils parcourent.
- **Taux de sortie :** combien de visiteurs repartent sans presque rien avoir fait.

Le point essentiel, c'est que ces trois chiffres diffèrent en général nettement entre mobile et ordinateur. Sur ordinateur, le menu est souvent horizontal et toujours visible — un coup d'œil rapide et le visiteur voit tout. Sur mobile, le menu est souvent caché derrière un bouton hamburger à trois lignes, et il faut le toucher pour l'ouvrir.

Cette différence n'est pas anodine. Selon le Nielsen Norman Group, cacher votre navigation principale derrière un hamburger réduit de près de moitié la probabilité que les visiteurs trouvent le menu, tout en leur faisant passer plus de temps et en rendant la tâche plus difficile. Même site, mais les utilisateurs sur ordinateur et ceux sur mobile traversent en pratique deux magasins différents.

## Comment la mesurer : répartir par catégorie d'appareil dans GA4

Vous n'avez besoin d'aucun outil particulier. GA4 fait tout cela.

La méthode la plus simple consiste à ouvrir Explore, à créer un rapport au format Libre, puis à ajouter la **catégorie d'appareil** comme dimension. Chaque métrique apparaît alors sur trois lignes : ordinateur, mobile, tablette. Vous comparez directement le taux de rebond, l'engagement et les pages par session d'une ligne à l'autre.

Si vous voulez aller plus loin, créez des segments distincts — un segment « Mobile » et un segment « Ordinateur » — puis appliquez le même rapport à chacun. C'est pratique quand vous voulez ajouter des conditions supplémentaires, par exemple ne regarder que les visiteurs venus des publicités Facebook, ou uniquement les visiteurs d'une page catégorie précise.

Une précision sur la façon dont GA4 définit les choses. Dans GA4, une session est comptée comme un « rebond » lorsqu'elle n'est pas engagée — c'est-à-dire que le visiteur est resté moins de 10 secondes, n'a vu qu'une seule page et n'a déclenché aucun événement clé. Le taux de rebond est simplement l'inverse du taux d'engagement. Gardez cela en tête pour que les chiffres ne vous induisent pas en erreur.

Quand vous mesurez, ne vous concentrez pas sur les valeurs absolues. Regardez l'**écart** entre le mobile et l'ordinateur.

## Une configuration qui fonctionne sur ordinateur peut échouer sur mobile

C'est la partie que je veux souligner, parce que c'est la plus facile à négliger.

Quand vous construisez un menu, vous êtes presque certainement assis devant un ordinateur. Vous le prévisualisez sur un grand écran, vous voyez le joli méga menu multicolonnes, vous trouvez tout facile à cliquer, et vous le mettez en ligne. Le problème, c'est que la plupart de vos visiteurs ne sont pas installés comme vous.

Sur mobile, tout change. L'écran est étroit, les doigts sont plus gros qu'un curseur de souris, et les visiteurs touchent en général l'écran d'un seul pouce tout en tenant le téléphone d'une main. Selon les recherches de Steven Hoober sur la zone du pouce, la plupart des interactions sur un téléphone se font avec le pouce, et la zone la plus facile à atteindre est la moitié inférieure de l'écran. Un menu entassé dans le coin supérieur, avec un texte minuscule et des éléments serrés les uns contre les autres — parfait sur ordinateur, difficile à atteindre sur mobile.

Un exemple familier : une boutique de mode met tout son catalogue dans un méga menu d'ordinateur très détaillé — hauts, bas, robes, accessoires, par saison, par taille. Magnifique. Mais sur mobile, tout cela se retrouve compressé dans une longue liste interminable à l'intérieur du hamburger. Le visiteur doit toucher pour l'ouvrir, faire défiler, chercher, et seulement ensuite atteindre l'élément à toucher. Chaque étape supplémentaire est une occasion de plus pour le visiteur de partir.

C'est pourquoi vous devriez configurer la navigation séparément pour chaque appareil. Pour le mobile, beaucoup de boutiques basculent vers une Tab Bar — une barre de navigation fixe ancrée en bas de l'écran, en plein dans la zone du pouce — pour les 3 à 5 éléments les plus importants comme Accueil, Catégories, Recherche et Panier. Sur ordinateur, elles conservent le méga menu complet. Deux mises en page pour deux contextes.

## Signal d'alerte : des sorties mobiles nettement plus élevées que sur ordinateur

Le signe le plus clair est facile à repérer : le taux de rebond sur mobile est sensiblement plus élevé que sur ordinateur.

Pour être honnête, un taux de sortie un peu plus élevé sur mobile que sur ordinateur est normal partout, pas seulement chez vous. Selon les benchmarks du secteur, les sessions mobiles ont tendance à rebondir autour de 50 %, tandis que l'ordinateur est plus bas — l'écart moyen est d'environ 10 points de pourcentage, et il reste assez stable depuis des années. Ne paniquez donc pas simplement parce que le mobile est plus élevé.

Ce qui mérite vraiment votre attention, c'est lorsque cet écart est anormalement grand. Si, sur les mêmes pages, le mobile sort 20 points plus haut que l'ordinateur ou plus, c'est le signal que votre expérience mobile a un problème — et la navigation est l'un des premiers suspects.

Quelques autres signaux à surveiller en même temps :

- CTR du menu sur mobile bien plus bas que sur ordinateur : les visiteurs ne le trouvent pas ou hésitent à le toucher.
- Profondeur plus faible sur mobile : les visiteurs arrivent sur une page et la ferment, sans naviguer plus loin.
- Pages qui chargent lentement sur mobile : un menu ou une application lourde ralentit tout, et les visiteurs perdent patience. Google recommande un LCP sous 2,5 secondes, un INP sous 200 ms et un CLS sous 0,1 ; c'est généralement sur mobile que ces métriques sont les pires.

Rappelez-vous que le taux moyen d'abandon de panier est déjà d'environ 70 % selon le Baymard Institute. Une navigation mobile difficile à utiliser ne fait qu'aggraver ce chiffre.

## Action : séparez le mobile et l'ordinateur en deux configurations distinctes

Ce que vous devez faire tient en une phrase : ne forcez pas un seul menu à servir les deux mondes.

Concrètement, après avoir examiné les chiffres dans GA4 :

1. Répartissez le rapport par catégorie d'appareil, et trouvez les pages où le mobile sort anormalement plus haut que l'ordinateur.
2. Ouvrez ces pages précises sur votre propre téléphone, et essayez de toucher le menu d'un seul pouce comme le ferait un client. Vous constaterez la friction par vous-même.
3. Concevez une mise en page mobile distincte — privilégiez une Tab Bar en bas pour les éléments principaux, allégez la liste à l'intérieur du hamburger, et faites des boutons assez grands pour être touchés.
4. Conservez l'ordinateur avec le méga menu complet. Deux configurations, pas une seule.

C'est exactement pour cela que [Navi+](https://naviplus.io) a été conçu. Vous configurez le mobile et l'ordinateur séparément : une Tab Bar en bas pour le mobile, un Mega Menu pour l'ordinateur, chacun avec sa propre mise en page, sans toucher au moindre code. Le menu est optimisé pour ne pas plomber vos Core Web Vitals, et il reste en place quand vous changez de thème. Tout se fait par glisser-déposer.

Ce que j'en ai retenu au final est assez simple. Vous n'avez pas besoin d'un menu parfait. Vous avez seulement besoin d'arrêter de juger l'expérience mobile avec les yeux de quelqu'un assis devant un ordinateur. Répartissez les chiffres par appareil une seule fois, et il y a de fortes chances que vous voyiez ce qui vous échappait depuis le début.

Cet article fait partie du guide plus complet sur [Comment savoir si votre menu fonctionne — 5 métriques à suivre](/fr/measuring-menu-performance/).