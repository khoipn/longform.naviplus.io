---
lang: fr
ref: menu-app-installation-checklist
title: "Une checklist à dérouler avant d'installer une app de menu"
description: "Une checklist d'installation d'app de menu pour les boutiques Shopify : quatre étapes pour mesurer PageSpeed et les Core Web Vitals avant et après l'installation, afin de choisir une app qui ne ralentira pas vos pages sur mobile ou sur ordinateur."
parent_title: "Navigation et vitesse de chargement — choisir une app de menu qui n'abîme pas les Core Web Vitals"
parent_url: "/fr/navigation-and-page-speed/"
seo_keywords:
  - checklist d'installation d'app de menu
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

Avant de cliquer sur « Ajouter l'app » pour n'importe quelle app de menu, il y a une petite chose qui vaut la peine d'être faite : noter la vitesse actuelle de votre boutique. Cela paraît simple, mais c'est justement l'étape que la plupart des gens sautent — et quelques semaines plus tard, ils remarquent que le site semble plus lent sans savoir quelle app en est la cause.

Voici une courte **checklist d'installation d'app de menu** que vous pouvez suivre dès maintenant, tirée de la gestion de vraies boutiques. Rien de compliqué — juste quelques mesures avant/après, pour ne pas installer un beau menu en échangeant discrètement de la vitesse contre lui. Plus vous installez d'apps, plus cette habitude est payante, car chaque app que vous ajoutez peut toucher à la vitesse de vos pages.

## Pourquoi la vitesse mérite qu'on s'en soucie

Les acheteurs en ligne partent déjà facilement. Selon le Baymard Institute, le taux moyen d'abandon de panier tourne autour de 70 %, et ce chiffre a à peine bougé en plus de dix ans. Chaque seconde de chargement en plus, chaque saut de mise en page pendant que la page se charge, est une raison supplémentaire pour un client de rebondir.

Google considère lui aussi la vitesse et la stabilité des pages comme une part de l'expérience, regroupées dans un ensemble d'indicateurs appelé Core Web Vitals. Les trois principaux chiffres, selon Google :

- LCP (Largest Contentful Paint) : bon en dessous de 2,5 secondes.
- INP (Interaction to Next Paint) : bon en dessous de 200 millisecondes.
- CLS (Cumulative Layout Shift — est-ce que la page bouge dans tous les sens) : bon en dessous de 0,1.

Inutile de les mémoriser. Retenez simplement ceci : une app de menu soigneusement conçue ne dégradera pas notablement ces trois chiffres. La checklist ci-dessous vous aide à le confirmer avec des données, plutôt qu'avec une impression.

## Checklist d'installation d'app de menu : quatre étapes, mesurer avant et après

C'est le cœur de l'article. Quatre étapes, dans l'ordre.

### Étape 1 : Mesurer le score PageSpeed de votre boutique avant l'installation

Ouvrez [PageSpeed Insights](https://pagespeed.web.dev) de Google, collez l'URL de votre page d'accueil et celle d'une page produit représentative, puis lancez le test. Notez les scores — faites une capture d'écran ou enregistrez-les dans un petit fichier.

Pourquoi les conserver ? Parce que sans un instantané « avant », vous n'avez rien à quoi comparer. Quelques semaines plus tard, quand le site semblera lent, vous ne saurez pas si c'est l'app de menu, la nouvelle app d'avis que vous avez installée, ou le lot d'images produit que vous venez d'ajouter.

PageSpeed Insights vous donne deux types de données. La section du haut, ce sont les données de terrain issues de vrais utilisateurs (collectées via le Chrome User Experience Report) ; la section du bas, ce sont les données de laboratoire (la machine de Google qui simule un seul chargement de page). À cette étape, contentez-vous de noter le score global et les trois chiffres LCP, INP et CLS.

### Étape 2 : Installer l'app, mesurer à nouveau, comparer

Installez l'app de menu que vous comptez utiliser, puis configurez-la exactement comme vous le ferez réellement — c'est-à-dire en activant les types de menu que vous utiliserez : une Tab Bar en bas sur mobile, un Mega Menu pour l'ordinateur, ou un Slide Menu — plutôt que de mesurer avec les réglages par défaut.

Relancez ensuite PageSpeed Insights sur les mêmes URL qu'à l'étape 1. Mettez les deux résultats côte à côte.

Une remarque : juste après l'installation, les données de terrain (section du haut) n'ont généralement pas encore changé, car elles agrègent les 28 derniers jours. Ce que vous pouvez comparer tout de suite, ce sont les données de laboratoire. Ne paniquez pas si le score de labo perd quelques points — ce qui compte, c'est l'ampleur. Une baisse de 2 à 3 points n'est généralement pas inquiétante ; une chute importante, ou un CLS qui s'envole soudain (la page qui sursaute quand le menu apparaît), mérite un second regard.

### Étape 3 : Vérifier les Core Web Vitals dans Search Console après 1 à 2 semaines

C'est l'étape qui vous donne les vrais chiffres, car elle mesure l'expérience de vrais clients. Ouvrez [Google Search Console](https://search.google.com/search-console) et allez dans Core Web Vitals (Expérience sur la page). Ce rapport s'appuie sur les données de terrain de vos propres utilisateurs.

Pourquoi attendre 1 à 2 semaines ? Les données de terrain sont calculées sur une fenêtre glissante de 28 jours. Au bout d'environ deux semaines, une part significative de cette fenêtre correspond à de nouvelles données — assez pour que vous voyiez une tendance. Dans Search Console, surveillez les URL qui passent de « Bon » à « À améliorer » ou « Médiocre ». Si le groupe d'URL en échec gonfle juste après l'installation de l'app de menu, c'est un signal.

Si votre boutique reçoit encore peu de visites, Search Console peut ne pas avoir assez de données pour afficher le rapport. Dans ce cas, appuyez-vous plutôt sur PageSpeed Insights et les données de laboratoire.

### Étape 4 : Si les scores chutent nettement, changer d'app ou ajuster la configuration

Si, après mesure, les indicateurs sont clairement moins bons, vous avez deux options.

La première est d'optimiser la configuration : désactiver les animations superflues, réduire le nombre d'éléments dans un Mega Menu surdimensionné, retirer les images lourdes entassées dans le menu. Souvent, le problème ne vient pas de l'app mais de la gourmandise avec laquelle nous avons construit le menu.

La seconde est de changer d'app, si l'app elle-même est lourde et qu'il n'y a aucun moyen de la maîtriser. Une bonne app de menu devrait considérer la vitesse comme sa propre responsabilité, et non rejeter ce travail sur vous.

## N'oubliez pas de mesurer sur mobile

La plupart des marchands reçoivent plus de trafic depuis le téléphone que depuis l'ordinateur — des clients qui font défiler Facebook, tapent sur un lien, ouvrent la boutique directement sur leur mobile.

Les scores sur mobile sont presque toujours plus bas que sur ordinateur, parce que les téléphones sont moins puissants et que les réseaux mobiles sont moins stables que le wifi. Dans PageSpeed Insights, pensez à basculer sur l'onglet Mobile pour mesurer — ne vous fiez pas seulement au score Desktop parce qu'il est plus flatteur.

C'est particulièrement vrai pour le menu mobile. Une Tab Bar bâclée en bas de l'écran ou un Slide Menu peut faire sursauter la page (faisant grimper le CLS) au moment précis où un client ouvre la boutique. Essayez d'ouvrir votre boutique sur votre propre téléphone et observez si quelque chose saute ou saccade pendant le chargement de la page. Vos propres yeux repèrent souvent des choses que le score n'a pas encore reflétées.

## Un petit rappel bienveillant

La checklist ci-dessus n'a pas pour but de vous détourner des apps de menu — une bonne navigation aide les clients à trouver les produits plus vite, et cela vaut la peine d'investir. L'idée est simplement celle-ci : choisissez une app soucieuse de la vitesse.

[Navi+](https://naviplus.io) a été conçu exactement dans cet esprit : un constructeur de menu no-code, par glisser-déposer, pour les Tab Bars, Mega Menus, Slide Menus, FABs et Grid Menus ; avec des configurations distinctes pour mobile et ordinateur ; et réglé pour ne pas plomber vos Core Web Vitals. Cela dit, le conseil honnête tient toujours : déroulez les quatre étapes de mesure ci-dessus avec n'importe quelle app, Navi+ compris, pour vous rassurer avec les chiffres de votre propre boutique.

Cet article fait partie du guide plus large sur [Navigation et vitesse de chargement — choisir une app de menu qui n'abîme pas les Core Web Vitals](/fr/navigation-and-page-speed/).
