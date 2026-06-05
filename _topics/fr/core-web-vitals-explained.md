---
lang: fr
ref: core-web-vitals-explained
title: "Qu'est-ce que les Core Web Vitals et pourquoi vous devez vous en soucier"
description: "Qu'est-ce que les Core Web Vitals ? Une explication en langage clair du LCP, du CLS et de l'INP, avec les seuils « bons » de Google et la raison pour laquelle ces trois métriques influencent le référencement et le chiffre d'affaires de votre boutique."
image: "/images/navigation-and-page-speed/core-web-vitals-menu-app.webp"
image_alt: "Qu'est-ce que les Core Web Vitals et pourquoi vous devez vous en soucier"
parent_title: "Navigation et vitesse de chargement — choisir une application de menu qui ne nuit pas aux Core Web Vitals"
parent_url: "/fr/navigation-and-page-speed/"
seo_keywords:
  - Core Web Vitals
  - LCP
  - INP
  - CLS
  - SEO
date: 2026-06-02
---

Quand j'ai commencé à vendre en ligne, je pensais que la vitesse de chargement était un problème de développeur. Jusqu'au jour où ma boutique a reculé dans les résultats de recherche alors que le contenu n'avait pas changé. C'est là que je me suis assis pour apprendre la chose à partir de zéro. Il s'avère que Google dispose d'un ensemble de trois métriques qui mesurent l'expérience réelle de vos clients : les **Core Web Vitals**. Comprendre ces trois chiffres n'est pas compliqué, et cela vous dit si votre boutique paraît rapide ou lente aux yeux de vos clients — et de Google.

Dans cet article, je vais expliquer les trois métriques en langage simple, avec les seuils « bons » publiés par Google, puis parler de la raison pour laquelle elles comptent pour votre positionnement et votre chiffre d'affaires.

## Que sont les Core Web Vitals

En clair, les Core Web Vitals sont trois mesures que Google utilise pour évaluer la rapidité et la fluidité d'une page web lorsque de vraies personnes l'utilisent. Elles ne sont pas mesurées sur une machine de laboratoire idéale, mais sur les téléphones et les réseaux réels des personnes qui visitent votre boutique.

Les trois métriques sont le LCP (la page apparaît-elle vite), le CLS (la mise en page saute-t-elle) et l'INP (réagit-elle immédiatement quand on tape). Chacune correspond à une sensation précise ressentie par le client lorsqu'il ouvre la page.

Google attribue son score sur la base du 75e centile — c'est-à-dire 75 % des visites — et sépare le mobile du bureau. Pour le dire simplement : il faut que la majorité de vos clients trouvent la page acceptable pour qu'elle soit comptée comme « bonne », et pas seulement quelques visites chanceuses.

## LCP — La page apparaît-elle vite ou lentement

Le LCP, c'est le Largest Contentful Paint, le moment où le plus grand élément à l'écran apparaît. Il s'agit le plus souvent de l'image de bannière en haut de la page, de l'image principale d'un produit ou d'un grand bloc de titre. Lorsque le client voit cet élément, il a le sentiment que la page a fini de charger.

D'après Google, le bon seuil est inférieur à 2,5 secondes. Au-delà de 4 secondes, c'est considéré comme mauvais. Tout ce qui se situe entre les deux est « à améliorer ».

Imaginez un client qui tape sur un lien produit depuis une publicité Facebook, debout au milieu de la rue, à attendre devant un écran blanc et vide. Chaque seconde qui passe est une part de la probabilité qu'il s'en aille. Pour les boutiques de mode ou de cosmétiques — où les images sont généralement lourdes — le LCP est l'endroit le plus facile à voir ralentir.

Ce qui fait généralement chuter le LCP : des images trop lourdes et non compressées, trop d'applications qui tournent en arrière-plan à l'ouverture de la page, ou un thème qui charge toutes sortes de choses inutiles avant d'afficher le contenu principal.

## CLS — La mise en page saute-t-elle

Le CLS, c'est le Cumulative Layout Shift, qui mesure à quel point les éléments bougent pendant le chargement. D'après Google, le bon seuil est inférieur à 0,1.

C'est l'agacement que tout le monde a déjà connu. Vous êtes sur le point de taper « Ajouter au panier », et voilà qu'une bannière ou une image lente à charger se glisse, repousse le bouton vers le bas, et votre doigt tape par erreur ailleurs. Parfois, vous tapez sur une publicité sans le vouloir. C'est exactement cela, un décalage de mise en page.

Le menu est un coupable familier. Si la barre de navigation se charge après le contenu, elle peut repousser tout ce qui se trouve en dessous au moment précis où le client est en train de lire ou de taper. Le client ne saurait pas nommer cette sensation, mais il voit une page désordonnée et perd confiance.

La manière habituelle de réduire le CLS consiste à réserver l'espace à l'avance pour les images, les bannières et les menus, afin qu'au moment de leur chargement ils viennent remplir l'emplacement déjà prévu sans bousculer le reste. Au moment de choisir une application de menu, préférez-en une qui ne fait pas sauter le contenu lorsqu'elle apparaît.

## INP — Réagit-elle immédiatement quand on tape

L'INP, c'est l'Interaction to Next Paint, qui mesure le délai entre le moment où un client interagit (tap, toucher, frappe) et le moment où l'écran répond. D'après Google, le bon seuil est inférieur à 200 millisecondes.

Un détail à retenir : l'INP a officiellement remplacé le FID (First Input Delay) dans l'ensemble des Core Web Vitals le 12 mars 2024, selon Google. La raison est que le FID ne mesurait que la première interaction, tandis que l'INP suit toutes les interactions sur l'ensemble de la session — ce qui est plus proche de la réalité. Si vous lisez une documentation plus ancienne qui mentionne encore le FID, le chiffre qui compte désormais est l'INP.

L'INP est étroitement lié à l'impression que « cette page rame ». Un client ouvre le menu hamburger sur son téléphone, tape une fois, et une demi-seconde plus tard le menu finit par s'ouvrir. Pendant cette demi-seconde, il pense que l'appareil a planté, tape de nouveau, puis s'agace. Plus un menu exécute de code en arrière-plan, plus ce délai s'aggrave.

C'est à ce moment-là que j'ai commencé à prêter attention à l'application de menu que j'avais installée. Je suis passé à Navi+ ([naviplus.io](https://naviplus.io)) en partie parce qu'elle est optimisée pour ne pas ralentir la page. Avec un menu Tab Bar en bas sur mobile ou un Slide Menu, la réactivité ressentie lorsqu'un client tape directement influe sur l'INP ; une application légère rend donc ce chiffre plus facile à maîtriser.

## Pourquoi vous devez vous soucier des Core Web Vitals : SEO et chiffre d'affaires

La question franche : ces trois chiffres valent-ils la peine qu'on s'en préoccupe, ou ne sont-ils qu'une affaire technique ?

Ils valent la peine. Google a confirmé que l'expérience de page, qui inclut les Core Web Vitals, est un facteur de positionnement. Ce n'est pas le facteur le plus important — un bon contenu reste la base — mais lorsque deux pages ont un contenu aussi bon l'un que l'autre, la vitesse peut être le critère qui aide Google à choisir laquelle placer en tête. Une boutique lente peut facilement perdre face à une page plus rapide sur les mots-clés mêmes pour lesquels vous êtes en concurrence.

L'effet en cascade est assez simple : une boutique lente se positionne moins bien, un moins bon positionnement signifie moins de trafic organique, et moins de trafic signifie moins de commandes. Pour les vendeurs qui s'appuient fortement sur le référencement plutôt que sur la publicité, c'est une source gratuite de clients que vous ne voulez pas laisser fuir.

La vitesse n'affecte pas seulement le positionnement, elle affecte aussi le taux de conversion. Le taux moyen d'abandon de panier dans le e-commerce avoisine les 70 %, selon le Baymard Institute (un chiffre compilé à partir de 50 études). Les causes sont nombreuses, mais une page qui charge lentement ou qui saccade n'aide certainement pas. Lorsqu'un client est déjà arrivé au panier et doit encore attendre, ou qu'il tape au mauvais endroit parce que la mise en page a sauté, les chances qu'il s'en aille augmentent.

Le côté rassurant, c'est que ces trois métriques sont mesurables et améliorables. Vous n'avez pas à deviner. Rendez-vous dans Google Search Console ou PageSpeed Insights, saisissez l'URL de votre boutique, et l'outil vous montrera où en sont le LCP, l'INP et le CLS, et où ils sont dans le rouge.

Un ordre de priorité pratique pour ceux qui manquent de temps :

- Vérifiez si les images sont trop lourdes (cela affecte le LCP).
- Passez en revue les applications que vous avez installées, en repérant celles qui exécutent beaucoup de code en arrière-plan (cela affecte l'INP).
- Vérifiez si les menus et les bannières font sauter le contenu lors de leur chargement (cela affecte le CLS).

Beaucoup de boutiques accumulent les applications au fil du temps, et le menu apparaît sur chaque page — une application de navigation légère qui ne bouscule pas la mise en page est donc un investissement à envisager.

Vous n'avez pas besoin de vous transformer en ingénieur. Il vous suffit de comprendre ce que ces trois chiffres disent de ce que ressentent vos clients, de les vérifier régulièrement, et au moment de choisir vos outils — en particulier une application de menu qui apparaît sur chaque page — de faire attention à ce qu'elle ne ralentisse pas votre boutique.

Cet article fait partie du guide plus complet sur [Navigation et vitesse de chargement — choisir une application de menu qui ne nuit pas aux Core Web Vitals](/fr/navigation-and-page-speed/).
