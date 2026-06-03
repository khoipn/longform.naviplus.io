---
lang: fr
ref: do-luong-hieu-qua-menu
order: 3
title: "Comment savoir si votre menu fonctionne — 5 indicateurs à suivre"
description: "Mesurez la performance de votre menu avec 5 indicateurs concrets : CTR, profondeur de navigation, taux de sortie, comportement mobile et recherche interne — tous mesurables gratuitement avec GA4 et Clarity."
topic_tag: "Mesure"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - mesurer la performance du menu
  - GA4
  - indicateurs de navigation
  - analyse du menu
date: 2026-06-02
child_links:
  - title: "Indicateur 1 — Taux de clic de chaque élément du menu"
    url: "/fr/topic/chi-so-ctr-menu/"
    desc: "Quels éléments sont cliqués, et lesquels sont ignorés."
  - title: "Indicateur 2 — Profondeur de navigation"
    url: "/fr/topic/chi-so-navigation-depth/"
    desc: "Combien d'étapes faut-il pour atteindre un produit."
  - title: "Indicateur 3 — Taux de sortie sur les pages de catégorie"
    url: "/fr/topic/chi-so-exit-rate-danh-muc/"
    desc: "Le client atteint une catégorie, puis repart sans voir un seul produit."
  - title: "Indicateur 4 — Comportement de navigation mobile vs. ordinateur"
    url: "/fr/topic/chi-so-mobile-vs-desktop/"
    desc: "Le même menu, deux mondes très différents."
  - title: "Indicateur 5 — Taux d'utilisation de la recherche interne"
    url: "/fr/topic/chi-so-search-usage/"
    desc: "Quand les clients cherchent ce que le menu aurait dû gérer."
---

La plupart d'entre nous jugent leur menu au feeling. Il a l'air propre, il contient assez d'éléments, personne ne se plaint — donc il doit être bien. Mais voici une chose que peu de gens remarquent : les clients se plaignent rarement d'un menu difficile à utiliser. Ils ne vous envoient pas de retour. Ils cherchent simplement un moment, en silence, ne trouvent pas ce qu'ils veulent, et ferment l'onglet.

Pour savoir si votre menu fait vraiment son travail, une intuition ne suffit pas. Vous devez observer ce que les clients font réellement : ce qu'ils cliquent, jusqu'où ils vont, où ils s'arrêtent. C'est cela, **mesurer la performance d'un menu** — au lieu de deviner, vous laissez les données parler. La bonne nouvelle, c'est que vous n'avez pas besoin d'être un expert en analyse. Les cinq indicateurs ci-dessous suffisent pour commencer, et la plupart sont intégrés à des outils gratuits comme GA4 ou Microsoft Clarity.

Cet article passe en revue chaque indicateur : ce qu'il est, pourquoi il compte, et comment le lire pour savoir si votre menu aide les clients ou leur met des bâtons dans les roues.

## Indicateur 1 — Taux de clic de chaque élément du menu

Le taux de clic (CTR) d'un élément du menu, c'est la part des personnes qui voient cet élément et le cliquent réellement. C'est l'indicateur le plus simple, et pourtant celui qui en dit le plus, car il vous montre quelle attention chaque élément capte.

Quand vous regardez le CTR de l'ensemble de votre menu d'un coup, le tableau est généralement inégal. Quelques éléments sont beaucoup cliqués, et d'autres ne reçoivent presque aucun clic. Un élément qui ne reçoit quasiment pas de clics n'est pas forcément inutile — il est peut-être mal placé, nommé de façon confuse, ou éclipsé par d'autres éléments.

Quelques questions à se poser en lisant le CTR :

- L'élément le plus important pour le chiffre d'affaires fait-il partie de ceux qui sont souvent cliqués ?
- Y a-t-il un élément que vous considérez comme « secondaire » mais qui est cliqué étonnamment souvent ? Les clients en ont peut-être plus besoin que vous ne le pensez.
- Y a-t-il un élément presque mort, mais qui occupe toujours une place de choix dans la barre de menu ?

Dans GA4, vous suivez cela avec des événements de clic associés à chaque lien du menu. Si le côté technique vous semble intimidant, Microsoft Clarity propose des cartes de chaleur (heatmaps) qui montrent où les gens cliquent, rien qu'avec des couleurs.

Le CTR est aussi un bon moyen de mener des expériences. Renommez un élément, changez l'ordre, ou fusionnez deux éléments — puis observez comment les chiffres évoluent après une semaine ou deux. Nous expliquons plus en détail comment lire et interpréter le CTR selon les situations dans un article séparé.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/chi-so-ctr-menu/">Lire le guide complet → Indicateur 1 — Taux de clic de chaque élément du menu</a></p>

## Indicateur 2 — Profondeur de navigation

La profondeur de navigation mesure combien de clics il faut à un client pour atteindre ce dont il a besoin. Un produit situé à un clic de la page d'accueil est facile à trouver. Un produit situé à quatre clics est un produit que la plupart des clients abandonnent avant même d'y arriver.

C'est là qu'un menu nuit discrètement à vos ventes. Vous avez peut-être exactement le produit que veut un client, à un bon prix, avec de belles photos — mais s'il est enterré trop profondément, le client ne le voit jamais. Chaque niveau de clic supplémentaire est une occasion de plus pour le client de se déconcentrer, de changer d'avis, ou de fermer la page.

Dans les rapports de parcours de GA4, vous pouvez voir les chemins les plus fréquents empruntés depuis la page d'accueil. Si les clients doivent passer par plusieurs détours pour atteindre une page de catégorie principale, c'est le signe que votre menu les fait trop travailler.

Un conseil pratique : listez les cinq pages les plus importantes pour le chiffre d'affaires, puis cliquez pour atteindre chacune d'elles depuis la page d'accueil en comptant les étapes. S'il en faut plus de trois, vous les cachez peut-être un peu trop bien. Des types de menus comme le Mega Menu sur ordinateur ou le Tab Bar en bas d'un écran mobile existent précisément pour raccourcir ce chemin — en mettant les éléments importants à portée du client. Nous abordons dans un article séparé comment mesurer la profondeur et la réduire intelligemment.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/chi-so-navigation-depth/">Lire le guide complet → Indicateur 2 — Profondeur de navigation</a></p>

## Indicateur 3 — Taux de sortie sur les pages de catégorie

Le taux de sortie vous indique la part des sessions qui se terminent sur une page précise, peu importe comment le client y est arrivé. Contrairement au taux de rebond (qui ne compte que la première page d'une session), le taux de sortie s'applique à chaque page d'une session — ce qui le rend idéal pour examiner les pages de catégorie.

Pourquoi les pages de catégorie comptent-elles ? Parce qu'atteindre une catégorie signifie que le client a déjà une intention. Il a cliqué sur « Chaussures pour hommes » ou « Ustensiles de cuisine » parce qu'il voulait voir ce groupe. Si la plupart d'entre eux repartent alors aussitôt sans voir un seul produit, c'est qu'il y a un décalage entre ce qu'ils attendaient et ce qu'ils ont vu.

Quelques raisons fréquentes d'un taux de sortie élevé sur les pages de catégorie :

- Le nom de l'élément du menu promet une chose, mais la page en livre une autre.
- La page affiche trop de choses, et les clients ne savent pas où regarder.
- Il n'y a aucun filtre, donc les clients ne peuvent pas affiner leurs choix.
- La page se charge lentement. Selon Google, le seuil « bon » pour le temps d'apparition du contenu principal (LCP) est inférieur à 2,5 secondes ; bien plus lent que cela, et les clients partent avant même que la page ait fini de se charger.

Une remarque en lisant cet indicateur : un taux de sortie élevé n'est pas toujours mauvais. Certaines pages sont des points d'arrêt naturels. Mais pour une page de catégorie — où le client devrait continuer vers des produits — un chiffre élevé mérite généralement un second regard. Nous creusons dans un article séparé comment distinguer un taux de sortie « normal » d'un taux « alarmant ».

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/chi-so-exit-rate-danh-muc/">Lire le guide complet → Indicateur 3 — Taux de sortie sur les pages de catégorie</a></p>

## Indicateur 4 — Comportement de navigation mobile vs. ordinateur

C'est l'indicateur que beaucoup de gens ignorent, et ils le paient souvent. La raison est simple : la plupart des clients arrivent désormais sur un téléphone. Les chiffres du secteur montrent que les appareils mobiles représentent la majorité du trafic vers les sites e-commerce — le chiffre exact varie pas mal selon la source et la région, mais le mobile a dépassé l'ordinateur depuis longtemps.

Le problème, c'est qu'un menu qui paraît très bien sur un écran d'ordinateur portable peut être très difficile à utiliser sur un téléphone. Un Mega Menu à plusieurs colonnes ne peut pas être tassé entier dans un écran vertical. Un menu hamburger cache tout derrière une seule icône — les clients doivent appuyer pour le voir. Le Nielsen Norman Group a montré que le contenu caché derrière un hamburger est découvert et utilisé moins souvent que lorsqu'il reste visible : cacher votre navigation principale réduit de près de moitié la probabilité que les clients la trouvent.

La façon la plus simple de lire cela est de séparer vos chiffres par appareil. Dans GA4, vous pouvez comparer les deux groupes côte à côte :

| Ce qu'il faut comparer | La question que cela soulève |
| --- | --- |
| CTR du menu mobile vs. ordinateur | Pour le même élément, est-il bien moins cliqué sur mobile ? |
| Profondeur de navigation | Les clients mobiles doivent-ils cliquer davantage pour atteindre leur but ? |
| Taux de conversion par appareil | Où le mobile est-il nettement en retard sur l'ordinateur ? |

Si le mobile est clairement à la traîne, il est très probable que les boutons soient trop petits, hors de portée du pouce, ou que des éléments importants soient enterrés au fond d'un menu coulissant. C'est pourquoi de nombreuses boutiques utilisent un Tab Bar fixe en bas de l'écran pour le mobile et un Mega Menu pour l'ordinateur — deux mises en page différentes pour deux façons différentes d'utiliser le site. Un outil comme [Navi+](https://naviplus.io) vous permet de configurer le mobile et l'ordinateur séparément sans code, pour ne pas avoir à forcer un seul design à convenir aux deux. Nous avons écrit un article séparé sur la façon de comparer et de combler l'écart entre les deux plateformes.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/chi-so-mobile-vs-desktop/">Lire le guide complet → Indicateur 4 — Comportement de navigation mobile vs. ordinateur</a></p>

## Indicateur 5 — Taux d'utilisation de la recherche interne

Le dernier indicateur semble sans rapport avec le menu, mais il est en réalité le miroir le plus clair de l'état de votre menu. Le taux d'utilisation de la recherche interne, c'est le pourcentage de clients qui utilisent la barre de recherche de votre site au lieu de naviguer dans le menu.

Un peu de recherche est normal, voire bénéfique — les clients qui utilisent la recherche ont souvent une intention d'achat plus forte, car ils cherchent activement quelque chose de précis. Mais si ce taux grimpe en flèche, c'est généralement le signe que le menu ne guide pas les clients là où ils doivent aller. Ils abandonnent le menu parce qu'il ne les aide pas, et se mettent à taper à la place.

Ce qui est encore plus révélateur, c'est ce qui se passe après la recherche. Une étude du Baymard Institute montre que la recherche interne sur une grande part des sites e-commerce fonctionne en dessous d'un niveau acceptable. Cela signifie que lorsque votre menu pousse les clients vers la barre de recherche, vous misez sur un outil qui tend lui aussi à les décevoir.

Dans GA4, si vous activez le suivi de la recherche sur le site, vous pouvez voir quels mots les clients recherchent. Cette liste vaut de l'or. Si beaucoup de gens tapent le nom d'une catégorie que vous avez déjà dans votre menu, cet élément est très probablement mal placé ou nommé d'une façon difficile à trouver.

Lisez la recherche interne comme une plainte polie de vos clients : « Je n'ai pas réussi à trouver ça dans votre menu. » Nous détaillons dans un article séparé comment utiliser les termes de recherche pour réparer votre menu.

<p class="lf-readmore"><span class="lf-readmore-kicker">Pour aller plus loin</span><a href="/fr/topic/chi-so-search-usage/">Lire le guide complet → Indicateur 5 — Taux d'utilisation de la recherche interne</a></p>

## Par où commencer

Cinq indicateurs, cela peut sembler beaucoup, mais vous n'avez pas besoin de tout faire d'un coup. Si vous débutez, voici un ordre suggéré :

1. Activez GA4 et le suivi de la recherche sur le site — cela ne demande presque aucun effort et vous donne immédiatement l'indicateur 5, ainsi qu'une partie des indicateurs 2 et 3.
2. Installez Microsoft Clarity pour les cartes de chaleur, qui alimentent l'indicateur 1 et vous donnent un aperçu rapide du comportement mobile.
3. Après deux semaines, prenez le temps de passer en revue les chiffres d'un seul coup, et notez deux ou trois choses qui semblent clocher.

N'essayez pas de tout optimiser en une fois. Choisissez l'indicateur le plus clair, corrigez une seule chose, puis attendez de nouvelles données. Un menu, c'est quelque chose que l'on ajuste progressivement, pas quelque chose que l'on règle une fois pour toutes.

Une chose à garder en tête en apportant des changements : à chaque modification du menu, ne ralentissez pas la page. Selon Google, les seuils « bons » des Core Web Vitals sont un LCP inférieur à 2,5 secondes, un INP inférieur à 200 millisecondes et un CLS inférieur à 0,1. Un beau menu qui fait saccader la page ou décaler sa mise en page pendant le chargement fait plus de mal que de bien.

## En conclusion

Les chiffres ne sont pas là pour vous noter ou vous juger. Ils vous aident simplement à voir où les clients se bloquent — quelque chose que l'œil nu et l'intuition peinent à percevoir. Un bon menu n'a pas besoin d'être parfait dès le premier jour ; il a besoin d'être amélioré progressivement, à partir de ce que les clients font réellement.

Une suggestion en douceur : revoyez votre menu tous les trois mois, ou chaque fois que vous ajoutez une nouvelle catégorie. La façon la moins stressante de commencer est d'activer GA4 ou d'installer Microsoft Clarity dès aujourd'hui, de le laisser tourner deux semaines, puis de revenir regarder votre menu à travers les yeux des données. Vous serez surpris de découvrir ce que les clients vous disaient tout bas, sans que vous l'ayez jamais entendu.