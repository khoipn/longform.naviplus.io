---
lang: de
ref: navigation-depth-metric
title: "Kennzahl 2 — Navigationstiefe"
description: "Die Navigationstiefe misst die Anzahl der Schritte von der Startseite bis zu einem Produkt. So messen Sie sie in GA4, der 2-3-Schritte-Richtwert und wie Sie mit einem Mega Menu und einer Tab Bar den Weg bis zum Kauf verkürzen."
parent_title: "So erkennen Sie, ob Ihr Menü funktioniert — 5 Kennzahlen, die Sie verfolgen sollten"
parent_url: "/de/measuring-menu-performance/"
seo_keywords:
  - Navigationstiefe
  - GA4-Funnel
  - Klicktiefe
date: 2026-06-02
---

Die erste Kennzahl sagt Ihnen, ob Kundinnen und Kunden überhaupt in Ihr Menü *klicken*. Die zweite beantwortet eine andere Frage: Wie weit müssen sie reisen, nachdem sie geklickt haben, um zu dem zu gelangen, was sie kaufen wollen?

Das ist die **Navigationstiefe**. Einfach gesagt: Es ist die durchschnittliche Anzahl der Schritte, die eine Person von der Startseite bis zu einer Produktseite zurücklegen muss. Je weniger Schritte, desto kürzer der Weg zum Warenkorb. Je mehr Schritte, desto mehr Gelegenheiten, dass jemand ermüdet, sich ablenken lässt und den Tab schließt.

Ich hatte einmal einen Shop, in dem ich — die Person, die ihn gebaut hat — immer noch viermal klicken musste, um ein gefragtes Produkt zu finden. In dem Moment wurde mir klar: Wenn sich schon der Shop-Besitzer verirrt, wie sollte sich dann ein Erstbesucher zurechtfinden?

## Was die Navigationstiefe ist und worin sie sich von "wie viele Seiten ein Kunde ansieht" unterscheidet

Es gibt zwei Dinge, die man leicht verwechselt und die man auseinanderhalten muss.

Das eine ist *Seiten pro Sitzung* — die Gesamtzahl der Seiten, die ein Kunde ansieht, einschließlich der Zeit, die er mit Stöbern, Vergleichen und dem Lesen von Bewertungen verbringt. Eine hohe Zahl ist hier nicht zwangsläufig schlecht.

Das andere ist die **Navigationstiefe** oder **Klicktiefe** — die Anzahl der Schritte, die *erforderlich* sind, um von Punkt A (der Startseite oder einer obersten Kategorie) zu Punkt B (einer Produktseite) zu gelangen. Das sind die strukturellen Kosten, die Sie Ihren Kunden auferlegen, ob es ihnen gefällt oder nicht.

Ein typischer Pfad in einem großen Shop sieht oft so aus: Startseite → Kategorie → Unterkategorie → tiefere Unterkategorie → Produkt. Vier Schritte. Jeder zusätzliche Schritt ist ein weiteres Mal, bei dem der Kunde lesen, verstehen, entscheiden und auf das Laden einer Seite warten muss.

## So messen Sie die Navigationstiefe in GA4

Sie müssen nicht raten. GA4 lässt Sie direkt den echten Pfad betrachten, den Ihre Kunden nehmen.

Es gibt zwei gängige Ansätze:

- **User Explorer**: Sehen Sie die Reise eines bestimmten Nutzers, Schritt für Schritt. Gut, um einige repräsentative Fälle zu untersuchen und ein Gefühl dafür zu bekommen, wo Kunden umherirren.
- **Path Exploration** (oder das Erstellen einer Funnel Exploration): Sehen Sie die Reihenfolge, in der sich Kunden von Startseite → Kategorie → Produkt → in den Warenkorb bewegen. Wichtiger als die Zahl zeigt es Ihnen die *Absprungpunkte* — den Schritt, an dem die meisten Kunden abspringen.

Path Exploration zeichnet ein Diagramm im Sankey-Stil: Die Zweige, die anschwellen, sind die Stellen, durch die viele Menschen gehen, und die Zweige, die schrumpfen, sind Sackgassen. Ein paar Minuten Betrachten und Sie sehen sofort, welchen Pfad echte Kunden nehmen — und ob er mit dem Pfad übereinstimmt, von dem Sie *angenommen* hatten, dass sie ihn nehmen würden.

Ein Tipp: Schauen Sie nicht nur auf den Durchschnittswert. Schlüsseln Sie ihn nach Gerät auf. Mobil und Desktop haben oft sehr unterschiedliche Tiefen, weil mobile Menüs Kunden tendenziell dazu zwingen, häufiger zu tippen, um jede Ebene zu öffnen.

## Ein Richtwert — und ein wichtiger Vorbehalt

Als allgemeine Faustregel sollte der Weg zu Ihren Hauptprodukten innerhalb von **2-3 Schritten** liegen. Wenn Pfade regelmäßig fünf Schritte oder mehr umfassen, ist Ihre Struktur wahrscheinlich zu tief.

Aber hier muss ich ehrlich sein. Die berühmte "Drei-Klick-Regel" ist in Wirklichkeit ein Mythos. Die Nielsen Norman Group weist darauf hin, dass sie nie durch Daten gestützt war, und in den von ihr zitierten Studien stieg die Abbruchrate nicht, wenn eine Aufgabe mehr als drei Schritte umfasste, noch sank die Zufriedenheit. Was einen Kunden ermüdet, ist nicht die Anzahl der Klicks.

Was einen Kunden ermüdet, ist der *Aufwand* jedes einzelnen Klicks. Ein Schritt mit einer klaren Beschriftung, der genau dorthin führt, wo der Kunde es erwartet, ist nahezu kostenlos. Ein vager Schritt, der den Kunden innehalten und raten lässt, wohin er klicken soll, ist der teure.

Betrachten Sie den 2-3-Schritte-Richtwert also als Warnsignal, nicht als hartes Gesetz. Eine hohe Tiefe ist ein Anlass für Sie, zu untersuchen, *warum* es tief ist — keine Zahl, die man um jeden Preis nach unten drücken muss.

## Warum Menüs tief werden

Wenn ich auf Spurensuche gehe, finde ich meist drei Übeltäter.

**Zu viele Hierarchieebenen.** Sie fügen eine Unterkategorie hinzu, dann eine Unter-Unterkategorie, dann eine Unter-Unter-Unterkategorie. Jede Ebene ergab Sinn, als Sie sie hinzufügten, aber zusammen bilden sie ein Labyrinth. Laut dem Baymard Institute pressen bis zu 37 % der E-Commerce-Websites ihren gesamten Katalog in einen einzigen Menüpunkt (etwas wie "Shop" oder "Produkte") — eine Struktur, die allerlei Probleme verursacht, wenn Kunden versuchen, sich nach unten zu graben.

**Keine Abkürzungen.** Es gibt keine Abkürzungen zu Ihren meistverkauften Kategorien. Ein Kunde, der "Herrenschuhe" möchte, muss der Reihe nach durch "Mode" → "Herren" → "Schuhe" → "Herrenschuhe", obwohl der Großteil Ihres Umsatzes genau dort liegt.

**Keine hervorgehobenen Blöcke im Mega Menu.** Ihr Mega Menu listet nur nackte Kategorienamen auf, ohne einen Block, der direkt zu einer angesagten Kollektion, zu Neuheiten oder zum Angebot der Woche führt. Kunden müssen sich allein durchschlagen, anstatt eingeladen zu werden.

## Die Lösung: Lassen Sie Kunden "Sprünge machen"

Die gute Nachricht: Die Tiefe zu beheben ist nicht schwer und erfordert in der Regel keinen Eingriff in Ihren Katalog.

**Flachen Sie die Struktur ab.** Führen Sie Ebenen zusammen, die nahezu identisch sind. Stellen Sie jeder Ebene eine Frage: Hilft diese Ebene dem Kunden wirklich dabei, seine Auswahl einzugrenzen, oder ist sie nur eine weitere Tür zum Öffnen? Wenn Letzteres, entfernen Sie sie.

**Nutzen Sie das Mega Menu, um Sprünge zu ermöglichen.** Das ist der entscheidende Punkt. Ein gutes Mega Menu legt die Hierarchie flach vor dem Kunden aus, sodass er *direkt* zu der benötigten Kategorie *springen* kann, anstatt Schritt für Schritt zu gehen. Die Nielsen Norman Group merkt an, dass Mega Menus gut für die Navigation funktionieren, weil sie Kunden ihre Optionen *sehen* lassen, statt sie sich merken zu müssen. Baymard zeigt außerdem, dass das Mega Menu der häufigste Navigationsstil auf großen Handelsseiten ist, weil es schnell und leicht zu überfliegen ist.

Um es für Verkäufer greifbar zu machen: Statt Kunden durch vier Ebenen waten zu lassen, um zu "Herren-T-Shirts" zu gelangen, platzieren Sie "T-Shirts", "Jeans", "Neuheiten" und "50 % Rabatt" direkt im Desktop-Mega-Menu. Auf dem Smartphone können Sie mit einer **Tab Bar** am unteren Bildschirmrand Ihre 4-5 wichtigsten Abkürzungen stets in Daumenreichweite verankern — ein Tipp und der Kunde ist da, ohne das Hamburger-Menü öffnen und sich nach unten graben zu müssen.

Genau dafür wurde [Navi+](https://naviplus.io) gebaut: ein Mega Menu, eine Tab Bar und ein Slide Menu per Drag-and-drop erstellen, ohne Code, Mobil und Desktop separat konfigurieren und einen hervorgehobenen Kollektionsblock anhängen, der direkt zu einer meistverkauften Kollektion führt. Das Ziel ist kein hübscheres Menü — es ist ein kürzerer Weg von der Startseite bis zum "Kaufen"-Button.

Ein letzter Hinweis, damit Sie es nicht übertreiben: Verbeißen Sie sich nicht so sehr darin, Schritte zu kürzen, dass Sie alles auf einen überladenen Bildschirm pressen. Jede Abkürzung, die Sie hinzufügen, sollte eine klare Beschriftung haben und dem entsprechen, was Kunden wollen. Weniger Aufwand, nicht nur weniger Klicks — das ist der wahre Geist dieser Kennzahl.

---

Dieser Artikel ist Teil des umfassenderen Leitfadens [So erkennen Sie, ob Ihr Menü funktioniert — 5 Kennzahlen, die Sie verfolgen sollten](/de/measuring-menu-performance/).
