---
lang: fr
ref: chi-so-exit-rate-danh-muc
title: "Métrique 3 — Le taux de sortie sur la page de collection"
description: "Un taux de sortie élevé sur la page de collection vient souvent de libellés de menu qui ne correspondent pas à ce que montre la page. Comment le mesurer avec les Explorations GA4, et comment revoir et corriger votre menu pour garder vos clients."
parent_title: "Comment savoir si votre menu fonctionne — 5 métriques à suivre"
parent_url: "/fr/do-luong-hieu-qua-menu/"
seo_keywords:
  - taux de sortie page de collection
  - page de collection
  - GA4
date: 2026-06-02
---

C'est la troisième métrique de cette série de cinq, et elle raconte une histoire très différente des deux premières. Plus tôt, nous nous demandions : « le client a-t-il cliqué sur le menu ? » Maintenant la question est : après avoir cliqué et atterri sur la page de collection, continue-t-il son chemin ou quitte-t-il le site ?

Mesurer le **taux de sortie sur la page de collection** vous permet de voir exactement où se produit la rupture. Quand un client se donne la peine d'arriver jusqu'à une page de collection et qu'il part malgré tout, ce n'est généralement pas parce qu'il a perdu l'envie d'acheter. C'est généralement parce que ce qu'il voit ne correspond pas à ce qu'il attendait en cliquant sur le menu. Et très souvent, la cause profonde tient à la façon dont nous avons nommé l'élément de menu.

## Ce qu'est le taux de sortie sur la page de collection

Le taux de sortie est la part des sessions qui se terminent sur une page donnée, calculée comme le nombre de sorties divisé par le nombre de vues de cette page. Toute page sur laquelle un client jette un œil, puis quitte le site sans consulter une autre page, compte comme une sortie.

Appliqué à la page de collection, le sens est très concret. Un client atterrit sur une page de collection — disons « Vestes homme » ou « Accessoires de cuisine » — puis ne clique sur aucun produit, n'applique aucun filtre, ne passe à aucune autre catégorie, et ferme l'onglet. C'est une sortie sur la page de collection.

Il est utile de distinguer cela du taux de rebond. Un rebond, c'est un client qui arrive et repart sans aucune interaction, généralement comptabilisé pour la première page par laquelle il est entré. La sortie est plus large : le client a peut-être déjà consulté quelques pages, mais la page de collection est la dernière qu'il a vue avant de partir. Pour la page de collection, le taux de sortie est le chiffre le plus intéressant, car il indique que le client est resté « bloqué » pendant sa navigation et n'a pas pu avancer jusqu'à un produit.

## Comment mesurer le taux de sortie sur la page de collection dans GA4

Il y a d'abord un petit obstacle qui mérite d'être signalé. Dans GA4, Google a masqué les métriques Sorties et Taux de sortie des Rapports standards. Si vous ouvrez directement le rapport Pages et écrans, vous n'y trouverez plus de colonne Taux de sortie. C'est différent de l'ancien Universal Analytics, et beaucoup de gens cherchent sans jamais la trouver.

La façon de l'obtenir est d'utiliser les Explorations, en suivant ces quelques étapes :

- Allez dans **Explorer** dans la barre latérale gauche et choisissez un rapport **Format libre**.
- Ajoutez la dimension **Chemin de page et classe d'écran**.
- Ajoutez deux métriques : **Vues** et **Sorties**.
- Filtrez le chemin sur la partie URL de vos pages de collection. Sur Shopify, les pages de collection ressemblent généralement à `/collections/...`, alors filtrez le chemin de page pour qu'il contienne `/collections/`.

GA4 n'inclut pas de colonne Taux de sortie dans ce tableau par défaut, vous le calculez donc vous-même en divisant les Sorties par les Vues pour chaque page. Une catégorie avec 1 000 vues et 300 sorties a un taux de sortie de 30 %. La méthode rapide consiste à exporter vers Google Sheets et à ajouter une colonne de division.

Ne vous fixez pas sur le chiffre absolu, car chaque secteur diffère. Un exercice plus utile consiste à comparer vos catégories les unes aux autres et à la moyenne de votre propre boutique. La catégorie dont le taux de sortie se détache nettement du reste — c'est celle qu'il faut examiner.

## Comment l'interpréter : pourquoi les sorties sont élevées sur la page de collection

Quand une page de collection présente un taux de sortie anormalement élevé, la cause tombe généralement dans l'un de deux cas.

**Premier cas — le client a atterri au mauvais endroit.** Il a cliqué sur un élément de menu en s'attendant à voir A, mais la page montre B. Par exemple, le menu dit « Soldes » mais en cliquant on ne voit que des articles au prix fort. Ou le menu dit « Nouveautés » alors que la page affiche encore les modèles de la saison passée. Le client n'a pas tort ; il est simplement déçu et il part. Dans ce cas, la page de collection porte le chapeau d'un élément de menu mal libellé.

**Deuxième cas — la page de collection est peu attrayante ou difficile à utiliser.** C'est la bonne catégorie, mais à l'intérieur il n'y a qu'une poignée de produits, les photos sont mauvaises, il n'y a aucun moyen de filtrer par taille ou par prix, ou la page se charge lentement. Le client reste bloqué au niveau de la catégorie et ne peut pas descendre jusqu'à une fiche produit — peut-être parce que les produits sont mal organisés ou que la mise en page est encombrée.

Ces deux cas appellent des corrections différentes. Le deuxième cas relève de la page de collection : réorganiser les produits, ajouter des filtres, alléger la page. Le premier cas — très fréquent et souvent négligé — relève du menu. C'est là que je veux m'attarder un peu plus longtemps.

## Le lien avec le menu : des libellés qui ne correspondent pas à la page

Une page de collection attire rarement du trafic par elle-même. La plupart des visites d'une page de collection viennent d'un seul clic sur le menu. Cela signifie que le libellé du menu est la première promesse que vous faites au client. La page de collection est l'endroit où vous tenez cette promesse ou la trahissez.

L'écart entre la promesse et la réalité, c'est là que naissent les sorties. Quelques situations familières aux commerçants :

- Le menu dit « -50 % », le client clique en s'attendant à de fortes remises, mais la page mélange des articles à -10 % et d'autres au prix fort.
- Le menu garde « Collection du Têt » affichée bien après le Têt ; en cliquant on arrive sur une page presque vide.
- Le menu sur ordinateur et le menu sur mobile mènent à deux pages différentes, l'une en stock et l'autre épuisée.
- Le libellé utilise un vocabulaire interne (« Collection P/É ») alors que les clients ont l'habitude de chercher « Robes » ou « Chemises ».

Dans tous les cas, le client n'a rien fait de mal. Il a fait confiance aux mots du menu, a cliqué, a constaté que ce n'était pas le bon endroit, et il est parti. Le taux de sortie de cette page de collection grimpe, et il est facile pour nous de le mal interpréter comme « la page de collection a un problème » et de corriger la mauvaise chose.

À ajouter : cette sortie précoce se produit avant même le panier. On a tendance à se préoccuper de l'abandon de panier — selon le Baymard Institute, environ 70 % des paniers sont abandonnés en moyenne. Mais au niveau de la catégorie, le client part avant même d'avoir regardé un produit. C'est une étape plus précoce, que moins de gens surveillent, et la corriger est généralement peu coûteux et rapide.

## Action : confronter les libellés du menu au contenu de la page de collection

Ce que vous devez faire est très simple, sans besoin d'outils compliqués. Ouvrez GA4, filtrez la liste des pages de collection, triez par taux de sortie décroissant, et sortez les quelques premières catégories.

Pour chaque catégorie à forte sortie, refaites le parcours du client lui-même :

- Que dit réellement l'élément de menu qui mène à cette page ?
- Quand vous cliquez dessus, la page qui apparaît correspond-elle à ce que le libellé promettait ?
- Y a-t-il assez de produits pour que le client ait le sentiment qu'« il y a quelque chose à regarder » ?
- Sur mobile, où se situe cet élément de menu, et un clic mène-t-il à la même page que sur ordinateur ?

Si le libellé du menu et le contenu de la page ne s'alignent pas, il y a deux façons de corriger : renommer l'élément pour qu'il corresponde à ce que la page montre réellement, ou garder le nom et ajuster la page pour répondre à l'attente. Le choix dépend de votre intention commerciale, mais les deux doivent correspondre.

Un petit conseil : nommez les éléments dans la langue du client, pas dans votre jargon interne. Les clients tapent « friteuse sans huile », rares sont ceux qui cherchent « collection d'appareils électroménagers premium ». Plus le libellé est proche des mots que les clients utilisent réellement, plus il est facile de faire correspondre les attentes, et plus les sorties baissent.

Le travail d'édition du menu peut être fastidieux s'il faut toucher au code du thème. C'est pourquoi de nombreuses boutiques utilisent [Navi+](https://naviplus.io) pour construire et modifier leurs menus par glisser-déposer, sans code — renommer un élément, le réordonner, ou le pointer vers la bonne page de collection ne prend que quelques minutes. Navi+ vous permet de configurer le mobile et l'ordinateur séparément, ce qui vous évite le bug où les deux côtés mènent à des pages différentes, et le menu reste intact même lorsque vous changez de thème. Le reste — décider quel nom correspond à quelle page — reste votre affaire, car vous seul comprenez vos propres produits.

En bref, un taux de sortie élevé sur la page de collection n'est pas toujours la faute de la page de collection. Très souvent, tout commence par un libellé de menu qui promet une chose et en livre une autre. Les faire correspondre est généralement le moyen le plus rapide de garder les clients assez longtemps pour qu'ils voient réellement un produit.

Cet article fait partie du guide plus large sur [Comment savoir si votre menu fonctionne — 5 métriques à suivre](/fr/do-luong-hieu-qua-menu/).
