---
lang: fr
ref: menu-click-through-rate
title: "Indicateur 1 — Taux de clic de chaque élément de menu"
description: "Le taux de clic d'un élément de menu révèle ceux qui sont cliqués et ceux qui sont ignorés. Comment le mesurer avec GA4 et Clarity, comment le lire et comment ajuster votre menu pour augmenter les clics."
parent_title: "Comment savoir si votre menu fonctionne bien — 5 indicateurs à suivre"
parent_url: "/fr/measuring-menu-performance/"
seo_keywords:
  - taux de clic des éléments de menu
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

Le taux de clic d'un élément de menu est le premier chiffre que je regarde dès que je veux savoir si un menu fait son travail. Pour le dire simplement, il vous indique, parmi les personnes qui voient le menu, quelle proportion clique réellement sur un élément précis. Un élément que beaucoup de gens voient mais que peu cliquent vous dit généralement quelque chose — encore faut-il le lire correctement.

Cet article approfondit un seul indicateur : le taux de clic de chaque élément de menu. Comment le mesurer, comment le lire et, surtout, quoi faire une fois que vous l'avez lu.

## Ce qu'est le taux de clic d'un élément de menu

Le CTR (click-through rate, ou taux de clic) d'un élément de menu est le rapport entre le nombre de fois où cet élément est cliqué et le nombre de fois où le menu est affiché. Par exemple, si le menu est affiché 1 000 fois en une semaine et que l'élément « Nouveautés » est cliqué 80 fois, alors le taux de clic de cet élément est d'environ 8 %.

Ce qui est appréciable, c'est que vous ne regardez pas un seul chiffre global. Vous regardez chaque élément, côte à côte. Combien pour « Accueil », combien pour « Soldes », combien pour « Contact ». C'est l'écart entre les éléments qui mérite l'attention, pas la valeur absolue.

Je ne me préoccupe pas trop de savoir quel CTR « est considéré comme bon ». Chaque boutique est différente, chaque audience est différente. Ce qui m'importe, c'est l'ordre : quels éléments sont beaucoup utilisés et lesquels ne sont presque jamais touchés.

## Comment mesurer le CTR de chaque élément

Il existe plusieurs méthodes, du précis au visuel. Vous n'avez pas besoin des trois — choisissez celle qui vous convient.

### Mesurer avec GA4

GA4 (Google Analytics 4) est l'approche quantitative la plus claire. Par défaut, la mesure améliorée (Enhanced Measurement) ne capture que les clics qui mènent hors de votre domaine ; elle ne sait pas automatiquement quand un élément de votre barre de navigation interne a été cliqué.

Pour capter les clics sur le menu, l'approche courante consiste à utiliser Google Tag Manager : créez un déclencheur pour les clics sur les liens à l'intérieur de la zone de navigation, puis envoyez à GA4 un événement dédié (beaucoup le nomment `menu_click`), accompagné d'un paramètre contenant le nom de l'élément cliqué. Ensuite, dans le rapport Engagement > Événements, vous verrez chaque élément avec son nombre de clics listé séparément.

Une remarque tirée de l'expérience : après cette mise en place, les données mettent généralement un jour ou deux à apparaître pleinement dans les rapports, alors ne tirez pas de conclusions hâtives dès le premier jour. Et il vous faut le « nombre de personnes ayant vu le menu » pour calculer le taux — on l'approxime généralement par le nombre de pages vues qui contiennent le menu.

### Mesurer avec Hotjar ou Clarity

Si vous préférez ne pas toucher aux balises et au code, Hotjar ou Microsoft Clarity vous donnent la réponse de façon visuelle. Tous deux proposent une carte de chaleur des clics (click heatmap) — une carte qui montre où l'on clique beaucoup et où c'est froid.

Microsoft Clarity est gratuit et facile à démarrer. Vous ajoutez un extrait de code, et quelques jours plus tard vous ouvrez la carte de chaleur et voyez quelles zones du menu sont lumineuses et lesquelles sont sombres. Pour les menus mobiles, Clarity peut aussi montrer l'état déployé du menu, ce qui vous permet de voir les éléments à l'intérieur d'un slide menu, et pas seulement la partie visible d'emblée.

Une chose que Clarity fait bien et que GA4 ne fait pas : distinguer les « clics morts » (dead clicks) des « clics de rage » (rage clicks). Un clic mort, c'est quand un visiteur clique sur quelque chose qui semble cliquable mais où rien ne se passe. Un clic de rage, c'est quand un visiteur clique plusieurs fois au même endroit par frustration. Si un élément de menu reçoit beaucoup de clics morts, il a très probablement l'air d'un bouton mais ne mène en réalité nulle part — c'est un problème à corriger, et pas simplement un cas de CTR faible.

Je combine souvent les deux : GA4 pour les chiffres à comparer dans le temps, et Clarity ou Hotjar pour comprendre le « pourquoi » derrière les chiffres.

## Comment lire le tableau des CTR

Quand vous alignez les éléments côte à côte, l'image prend généralement une forme familière : quelques éléments au CTR très élevé, un groupe au milieu et quelques-uns proches de zéro.

Un élément proche de zéro n'est pas automatiquement un mauvais élément. Il peut relever de l'un de deux cas :

- Un élément superflu : les clients n'en ont vraiment pas besoin. Par exemple, un élément « Actualités » alors que la boutique n'a rien publié de toute l'année.
- Un élément au nom mal interprété : les clients ont besoin de ce contenu mais ne réalisent pas que cet élément y mène. Le nom est trop original, ou il emploie un jargon interne que les clients ne connaissent pas.

Pour distinguer ces deux cas, regardez si le contenu situé derrière est atteint par un autre chemin. Si la page « Promotions » a beaucoup de vues mais que l'élément de menu « Bons plans de folie » a un CTR faible, c'est très probablement le nom qui pose problème, pas le contenu.

### Quand un élément important a un CTR anormalement bas

C'est le cas sur lequel il vaut la peine de s'attarder le plus longtemps. Des éléments comme « Soldes » ou « Nouveautés » devraient attirer les clics. Les personnes qui visitent une boutique de détail sont généralement curieuses de voir ce qui est en réduction et ce qui est nouveau. Si ces éléments ont un CTR anormalement bas, c'est rarement parce que les clients ne sont pas intéressés — c'est généralement une question d'emplacement.

L'élément se trouve peut-être en bas du menu, hors de vue. Les recherches en oculométrie du Nielsen Norman Group montrent que les utilisateurs ont tendance à parcourir une page selon un schéma en forme de F — en survolant horizontalement le haut, puis en descendant le long du bord gauche, en sautant une grande partie du milieu et du bas. Un élément précieux placé dans un coin caché peut facilement échapper au regard du client.

Sur mobile, le problème est encore plus marqué. Si l'élément « Soldes » est enfoui au fond du menu hamburger, le client doit toucher pour ouvrir le menu puis faire défiler pour le trouver. Chaque étape supplémentaire est un point où l'on perd des gens. C'est pourquoi de nombreuses boutiques placent « Soldes » directement sur la Tab Bar en bas de l'écran — toujours visible, sans ouverture nécessaire.

## Quoi faire après la lecture

Si vous lisez le chiffre sans rien changer, il reste un simple chiffre. Je le décline généralement en trois actions.

D'abord, élaguer les éléments rarement utilisés. Plus le menu est long, plus chaque élément est dilué et plus il est difficile pour les clients de choisir. Si un élément reste proche d'un CTR nul pendant plusieurs semaines et que le contenu situé derrière reçoit lui aussi peu de visiteurs, n'hésitez pas à le supprimer ou à le fusionner ailleurs. Un menu plus épuré aide les éléments restants à mieux ressortir.

Ensuite, renommer les éléments peu clairs. C'est le changement le moins coûteux, et l'effet est souvent visible tout de suite. Utilisez les mots qu'emploient les clients, pas ceux que vous aimez : « Collection » pourrait devenir « Produits », « Bons plans de folie » devenir « Promotions ». Après avoir renommé, surveillez à nouveau le CTR pendant quelques semaines pour confirmer.

Enfin, déplacer les éléments importants vers un emplacement bien visible. Si « Soldes » devrait être fort mais reste actuellement faible, déplacez-le au début du menu sur ordinateur, ou placez-le sur la Tab Bar sur mobile. Changer l'emplacement a souvent un impact plus grand qu'on ne le pense.

Cette construction et ces ajustements ne nécessitent pas forcément un développeur. Avec un outil comme [Navi+](https://naviplus.io), vous réorganisez les éléments par glisser-déposer, vous les renommez ou vous détachez un élément vers la Tab Bar en bas sur mobile — les configurations mobile et bureau sont distinctes, vous pouvez donc rendre « Soldes » bien visible sur le téléphone sans encombrer le menu de bureau. Ainsi, la boucle « lire les chiffres, puis ajuster le menu » se fait rapidement, et vous pouvez continuer à tester et à remesurer.

Une dernière remarque : ne changez qu'une chose à la fois. Si vous renommez, repositionnez et supprimez un élément tout en même temps, vous ne saurez pas ensuite quel changement a fait évoluer le CTR. Changez une chose, attendez les données, puis passez à la suivante.

Cet article fait partie du guide plus large sur [Comment savoir si votre menu fonctionne bien — 5 indicateurs à suivre](/fr/measuring-menu-performance/).
