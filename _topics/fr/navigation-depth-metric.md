---
lang: fr
ref: navigation-depth-metric
title: "Indicateur 2 — Profondeur de navigation"
description: "La profondeur de navigation mesure le nombre d'étapes entre la page d'accueil et un produit. Comment la mesurer dans GA4, le repère des 2-3 étapes, et comment utiliser un mega menu et une Tab Bar pour raccourcir le chemin vers l'achat."
image: "/images/measuring-menu-performance/navigation-depth-click-path.webp"
image_alt: "Indicateur 2 — Profondeur de navigation"
parent_title: "Comment savoir si votre menu fonctionne — 5 indicateurs à suivre"
parent_url: "/fr/measuring-menu-performance/"
seo_keywords:
  - profondeur de navigation
  - entonnoir GA4
  - profondeur de clic
date: 2026-06-02
---

Le premier indicateur vous dit si les acheteurs *cliquent* dans votre menu, tout simplement. Le second répond à une autre question : une fois qu'ils ont cliqué, quelle distance doivent-ils parcourir pour atteindre l'article qu'ils veulent acheter ?

C'est la **profondeur de navigation**. En clair, c'est le nombre moyen d'étapes qu'une personne doit franchir entre la page d'accueil et une fiche produit. Moins il y a d'étapes, plus le chemin vers le panier est court. Plus il y a d'étapes, plus il existe d'endroits où un acheteur peut se lasser, se laisser distraire et fermer l'onglet.

J'ai eu un jour une boutique où moi-même — la personne qui l'avait construite — devais encore cliquer quatre fois pour trouver un produit phare. C'est à ce moment-là que j'ai compris : si le propriétaire de la boutique se perd, comment un visiteur qui arrive pour la première fois pourrait-il ne pas se perdre ?

## Ce qu'est la profondeur de navigation, et en quoi elle diffère du « nombre de pages vues par un acheteur »

Il y a deux notions faciles à confondre, et il faut bien les distinguer.

L'une est le *nombre de pages par session* — le total des pages qu'un acheteur consulte, y compris le temps passé à parcourir, comparer et lire des avis. Un chiffre élevé ici n'est pas forcément mauvais.

L'autre est la **profondeur de navigation**, ou **profondeur de clic** — le nombre d'étapes *nécessaires* pour aller du point A (la page d'accueil, ou une catégorie de premier niveau) au point B (une fiche produit). C'est le coût structurel que vous imposez aux acheteurs, qu'ils le veuillent ou non.

Sur une grande boutique, un parcours typique ressemble souvent à ceci : Page d'accueil → Catégorie → Sous-catégorie → Sous-catégorie plus fine → Produit. Quatre étapes. Chaque étape supplémentaire est une fois de plus où l'acheteur doit lire, comprendre, décider et attendre le chargement d'une page.

## Comment mesurer la profondeur de navigation dans GA4

Vous n'avez pas à deviner. GA4 vous permet de regarder directement le parcours réel de vos acheteurs.

Il existe deux approches courantes :

- **Exploration des utilisateurs (User Explorer)** : suivre le parcours d'un utilisateur précis, étape par étape. Utile pour examiner quelques cas représentatifs et sentir où les acheteurs errent.
- **Exploration de parcours (Path Exploration)** (ou la construction d'une exploration d'entonnoir, Funnel Exploration) : voir la séquence selon laquelle les acheteurs passent de la page d'accueil → catégorie → produit → ajout au panier. Plus important que le chiffre, cela vous montre les *points d'abandon* — l'étape où le plus grand nombre d'acheteurs décroche.

L'exploration de parcours dessine un diagramme de type Sankey : les branches qui s'élargissent sont celles où beaucoup de gens passent, et les branches qui se rétrécissent sont des impasses. Quelques minutes d'observation et vous verrez tout de suite quel chemin empruntent les vrais acheteurs, et s'il correspond à celui que vous *supposiez* qu'ils prendraient.

Un conseil : ne vous contentez pas de regarder le chiffre moyen. Décomposez-le par appareil. Le mobile et le bureau présentent souvent des profondeurs très différentes, parce que les menus mobiles obligent généralement les acheteurs à taper plus de fois pour ouvrir chaque niveau.

## Un repère — et une mise en garde importante

En règle générale, le chemin vers vos produits principaux devrait tenir en **2-3 étapes**. Lorsque les parcours atteignent régulièrement cinq étapes ou plus, votre structure est probablement trop profonde.

Mais c'est ici que je dois être honnête. La fameuse « règle des trois clics » est en réalité un mythe. Le Nielsen Norman Group souligne qu'elle n'a jamais été étayée par la moindre donnée, et que dans les études qu'ils citent, le taux d'abandon n'augmentait pas lorsqu'une tâche dépassait trois étapes, et la satisfaction ne baissait pas non plus. Ce qui fatigue un acheteur, ce n'est pas le nombre de clics.

Ce qui fatigue un acheteur, c'est l'*effort* de chaque clic. Une étape avec un libellé clair, qui mène exactement là où l'acheteur s'y attend, est presque gratuite. Une étape vague, qui oblige l'acheteur à s'arrêter et à deviner où cliquer, voilà celle qui coûte cher.

Considérez donc le repère des 2-3 étapes comme un signal d'alerte, pas comme une loi stricte. Une profondeur élevée est une invitation à aller chercher *pourquoi* c'est profond — pas un chiffre à faire baisser à tout prix.

## Pourquoi les menus deviennent profonds

Quand je pars enquêter, je trouve généralement trois coupables.

**Trop de niveaux de hiérarchie.** Vous ajoutez une sous-catégorie, puis une sous-sous-catégorie, puis une sous-sous-sous-catégorie. Chaque niveau avait du sens au moment où vous l'avez ajouté, mais ensemble ils forment un labyrinthe. Selon le Baymard Institute, jusqu'à 37 % des sites e-commerce entassent l'intégralité de leur catalogue dans un seul élément de menu (quelque chose comme « Boutique » ou « Produits ») — une structure qui crée toutes sortes de problèmes quand les acheteurs essaient de creuser.

**Aucun raccourci.** Il n'y a aucun raccourci vers vos catégories les plus vendeuses. Un acheteur qui veut « Chaussures Homme » doit passer par « Mode » → « Homme » → « Chaussures » → « Chaussures Homme » à la suite, alors que l'essentiel de votre chiffre d'affaires se trouve précisément là.

**Aucun bloc en vedette dans le mega menu.** Votre mega menu se contente d'aligner des noms de catégories nus, sans aucun bloc menant directement à une collection tendance, aux nouveautés ou à l'offre de la semaine. Les acheteurs doivent se débrouiller seuls au lieu d'être invités à entrer.

## La solution : laissez les acheteurs « sauter par-dessus »

La bonne nouvelle : corriger la profondeur n'est pas difficile, et cela ne nécessite généralement pas de toucher à votre catalogue.

**Aplatissez la structure.** Fusionnez les niveaux presque identiques. Posez à chaque niveau une seule question : ce niveau aide-t-il vraiment l'acheteur à affiner ses choix, ou n'est-il qu'une porte de plus à ouvrir ? Si c'est le second cas, supprimez-le.

**Servez-vous du mega menu pour sauter par-dessus.** C'est le point clé. Un bon mega menu déploie la hiérarchie à plat devant l'acheteur, pour qu'il puisse *sauter directement* à la catégorie dont il a besoin au lieu d'avancer étape par étape. Le Nielsen Norman Group note que les mega menus fonctionnent bien pour la navigation parce qu'ils permettent aux acheteurs de *voir* leurs options au lieu de devoir les mémoriser. Baymard montre aussi que le mega menu est le style de navigation le plus répandu sur les grands sites de vente au détail, parce qu'il est rapide et facile à parcourir des yeux.

Pour rendre la chose concrète pour les marchands : au lieu d'obliger les acheteurs à traverser quatre niveaux pour atteindre « T-shirts Homme », placez « T-shirts », « Jeans », « Nouveautés » et « -50 % » directement dans le mega menu sur bureau. Sur mobile, une **Tab Bar** en bas de l'écran vous permet d'ancrer vos 4-5 raccourcis les plus importants, toujours à portée de pouce — une tape et l'acheteur y est, sans avoir à ouvrir le menu hamburger et à creuser.

C'est exactement ce pour quoi [Navi+](https://naviplus.io) a été conçu : créer un Mega Menu, une Tab Bar et un Slide Menu par glisser-déposer, sans code, configurer séparément le mobile et le bureau, et vous laisser attacher un bloc de collection en vedette qui mène droit à une collection best-seller. L'objectif n'est pas un menu plus joli — c'est un chemin plus court de la page d'accueil au bouton « Acheter ».

Une dernière remarque, pour ne pas tomber dans l'excès : ne vous obsédez pas tellement à supprimer des étapes que vous finissez par tout entasser sur un seul écran surchargé. Chaque raccourci que vous ajoutez doit avoir un libellé clair et correspondre à ce que veulent les acheteurs. Moins d'effort, pas seulement moins de clics — c'est là le véritable esprit de cet indicateur.

---

Cet article fait partie du guide plus complet sur [Comment savoir si votre menu fonctionne — 5 indicateurs à suivre](/fr/measuring-menu-performance/).
