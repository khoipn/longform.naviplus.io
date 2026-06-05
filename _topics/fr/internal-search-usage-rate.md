---
lang: fr
ref: internal-search-usage-rate
title: "Indicateur 5 — Taux d'utilisation de la recherche interne"
description: "Ce qu'est le taux d'utilisation de la recherche, comment le mesurer avec GA4, et comment lire vos requêtes de recherche les plus fréquentes pour nommer vos rubriques de menu dans la langue de vos clients et réduire le nombre de fois où ils doivent chercher eux-mêmes dans la boutique."
image: "/images/measuring-menu-performance/internal-search-menu-gaps.webp"
image_alt: "Indicateur 5 — Taux d'utilisation de la recherche interne"
parent_title: "Comment savoir si votre menu fonctionne — 5 indicateurs à suivre"
parent_url: "/fr/measuring-menu-performance/"
seo_keywords:
  - taux d'utilisation de la recherche
  - view_search_results
  - requêtes de recherche les plus fréquentes
date: 2026-06-02
---

De tous les indicateurs permettant de juger de la santé d'un menu, c'est celui que l'on néglige le plus souvent. Le **taux d'utilisation de la recherche** — la part de clients qui utilisent la barre de recherche au lieu du menu pour arriver là où ils veulent aller — raconte une histoire que les indicateurs de clics sur le menu ne peuvent pas raconter : la proportion de clients qui ont discrètement contourné votre menu.

La barre de recherche et le menu semblent être deux choses distinctes. En réalité, ce sont les deux faces d'une même question : le client a-t-il trouvé ce qu'il cherchait, et comment ?

## Ce qu'est le taux d'utilisation de la recherche

En clair, c'est la part de sessions comportant au moins une recherche interne, divisée par le nombre total de sessions. Si 100 personnes visitent la boutique et que 18 d'entre elles tapent quelque chose dans la barre de recherche, votre taux d'utilisation de la recherche est d'environ 18 %.

Il n'existe pas de niveau « correct » dans l'absolu pour ce chiffre. Selon le Baymard Institute, la part de clients qui préfèrent la recherche à la navigation par le menu varie énormément d'une boutique à l'autre et d'un type de produit à l'autre : une boutique de mode proposant quelques centaines de modèles n'a rien à voir avec un vendeur de pièces électroniques comptant des dizaines de milliers de références.

Ne comparez donc pas votre chiffre à un benchmark général. Comparez-le à vous-même dans le temps, et surtout — lisez *ce que* les clients recherchent.

## Comment mesurer le taux d'utilisation de la recherche avec GA4

Vous n'avez presque rien à faire pour démarrer. GA4 dispose de la mesure améliorée (Enhanced Measurement), activée par défaut. Lorsqu'elle est activée, GA4 déclenche automatiquement l'événement **view_search_results** chaque fois qu'un client lance une recherche.

Voici comment cela fonctionne : GA4 reconnaît une recherche à partir d'un paramètre présent dans l'URL de la page de résultats. Par défaut, il recherche les paramètres `q`, `s`, `search`, `query` et `keyword`. Si l'URL de votre page de résultats ressemble à `?q=chemise-blanche`, tout fonctionne immédiatement.

Sur Shopify, l'URL de recherche par défaut utilise `?q=`, si bien que `view_search_results` commence généralement à compter sans aucun réglage. Si votre boutique utilise un paramètre inhabituel, il vous suffit de l'ajouter aux paramètres de votre flux de données dans GA4.

Pour consulter les données, allez dans Rapports → Engagement → Événements et cherchez l'événement **view_search_results**. Ouvrez-le et vous y trouverez le paramètre `search_term` — c'est-à-dire la liste des mots-clés tapés par les clients. Pour calculer le taux, prenez le nombre de sessions comportant un `view_search_results` et divisez-le par le nombre total de sessions sur la même période.

## Une utilisation élevée de la recherche n'est pas forcément un mauvais signe

C'est ici qu'il est facile de mal interpréter les choses. Une utilisation élevée de la recherche peut parfois être un bon signe. Les clients qui achètent via la recherche savent généralement exactement ce qu'ils veulent et, selon le Baymard Institute, il s'agit d'un groupe à forte intention d'achat. Une barre de recherche très utilisée, et utilisée efficacement, est un atout.

Le problème, c'est *ce que* les clients recherchent.

Si un client tape le nom très précis d'un produit, une référence (SKU) ou une marque — c'est un comportement de recherche sain. Le menu ne peut pas, et ne doit pas, lister chaque article un à un.

Mais si les clients tapent sans cesse des choses qui devraient être visibles directement dans le menu — « chemise blanche », « soldes », « nouveautés », « nouveau » — c'est le signe que le menu n'est pas assez clair. Les clients ne cherchent pas par plaisir. Ils lèvent les yeux vers le menu, n'y trouvent pas de porte d'entrée et se tournent vers la barre de recherche comme vers une issue de secours.

Le Baymard décrit précisément ce phénomène : beaucoup de requêtes portant sur un « type de produit » correspondent en réalité à des clients qui essaient d'atteindre une catégorie plus vite, ou qui le font parce qu'ils n'ont pas réussi à trouver cette catégorie via le menu principal. Autrement dit, la barre de recherche assume un travail que le menu aurait dû faire.

## Lire vos requêtes de recherche les plus fréquentes

Ne vous arrêtez pas au chiffre global. La partie la plus précieuse, ce sont vos **requêtes de recherche les plus fréquentes** — la liste des mots-clés les plus recherchés, tirée du paramètre `search_term`.

Imprimez les 30 à 50 requêtes les plus fréquentes et placez-les à côté de votre menu actuel. Puis demandez-vous, ligne par ligne : ce que le client a tapé dispose-t-il déjà d'une porte d'entrée claire dans le menu ?

Trois groupes apparaissent généralement :

- **Correspond à un nom de catégorie déjà présent dans le menu.** Le client tape « robe » alors que le menu dit « Jupes ». Le client tape « réduction » alors que le menu dit « Outlet ». C'est le signal le plus clair : la catégorie *existe*, mais son nom dans le menu ne correspond pas au langage des clients, qui ne la reconnaissent donc pas et doivent la taper à la main.
- **Quelque chose que vous proposez mais que le menu ne mentionne jamais.** Les clients tapent « cadeaux », « grandes tailles », « ensembles assortis » — vous avez du stock pour ce groupe mais vous n'en avez pas fait une rubrique à part entière. C'est une invitation à ajouter une nouvelle catégorie ou un filtre.
- **Quelque chose que vous ne vendez pas.** Les clients tapent le nom d'un produit que vous n'avez pas référencé. Ce groupe n'a rien à voir avec le menu, mais ce sont des données précieuses pour vos achats.

Le premier groupe est celui qu'il vaut la peine de corriger immédiatement. Chaque requête qui correspond à un nom de catégorie représente un client contraint à une étape supplémentaire dont il aurait dû être dispensé.

## Nommez votre menu dans la langue de vos clients

La conclusion est très simple : renommez vos rubriques de menu comme les clients en parlent, et non comme vous — le marchand — en parlez.

Les marchands ont tendance à nommer leurs menus dans leur propre langage interne : « Collection Printemps/Été », « Gamme Premium », « Groupe A ». Cela nous paraît limpide parce que nous vivons à l'intérieur de cette manière de catégoriser. Pas les clients. Les clients tapent ce qu'ils ont en tête : « chemise manches courtes », « haut de gamme », « pas cher ».

La règle qui s'en dégage : vos requêtes de recherche les plus fréquentes sont le dictionnaire que vos clients ont écrit pour vous. Si beaucoup de gens tapent « soldes », envisagez une rubrique nommée simplement « Soldes » plutôt que « Outlet » ou « Bons plans ». Si beaucoup de gens tapent « robe », mettez « Robes » en premier, ou utilisez ce terme à la place de « Jupes ».

Le test est tout aussi doux : changez quelques libellés, puis observez au cours des semaines suivantes si l'utilisation de la recherche pour ces requêtes précises diminue. Si les clients n'ont plus besoin de chercher quelque chose qui figure désormais directement dans le menu, vous savez que vous avez corrigé le bon point.

Le plus difficile n'est pas technique — c'est d'accepter de changer les libellés. Renommer un menu paraît anodin, mais cela touche à la façon dont nous définissons notre propre boutique. Un outil en glisser-déposer comme [Navi+](https://naviplus.io) atténue une partie de cet inconfort — vous modifiez les libellés, réorganisez et essayez de nouvelles dispositions sur un Mega Menu ou une Tab Bar sans code et sans craindre de casser votre thème. Quand changer un libellé ne coûte presque rien, vous serez plus enclin à écouter vos clients.

Le taux d'utilisation de la recherche, lu de la bonne façon, est la voix des clients qui ont essayé le menu et l'ont trouvé insuffisant. Ils sont restés et ont cherché quand même. Notre travail consiste à entendre ce qu'ils nous disent.

---

Cet article fait partie du guide plus large sur [Comment savoir si votre menu fonctionne — 5 indicateurs à suivre](/fr/measuring-menu-performance/).