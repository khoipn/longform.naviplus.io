---
lang: de
ref: mobile-vs-desktop-navigation-behavior
title: "Kennzahl 4 — Navigationsverhalten auf Mobil vs. Desktop"
description: "Navigation auf Mobil und Desktop im Vergleich: Wie du sie in GA4 misst, woran du erkennst, dass die Absprünge auf dem Smartphone höher liegen als am Desktop, und wie du dein Tab-Bar-Layout für jedes Gerät getrennt aufsetzt."
image: "/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp"
image_alt: "Kennzahl 4 — Navigationsverhalten auf Mobil vs. Desktop"
parent_title: "So erkennst du, ob dein Menü funktioniert — 5 Kennzahlen, die du verfolgen solltest"
parent_url: "/de/measuring-menu-performance/"
seo_keywords:
  - Navigation Mobil vs. Desktop
  - GA4-Segmente
  - Gerätekategorie
date: 2026-06-02
---

Diese Kennzahl unterscheidet sich ein wenig von den drei vorherigen. Statt auf eine einzelne Zahl zu schauen, betrachtest du dieselbe Zahl, aber aufgeteilt nach Gerät. Hier vergleichst du die **Navigation auf Mobil und Desktop** — wie Menschen auf dem Smartphone surfen im Vergleich zum Computer.

Ich bin später darauf gekommen, als ich es eigentlich hätte sein sollen. Anfangs schaute ich nur auf den zusammengefassten Bericht, sah, dass die Menü-Zahlen in Ordnung wirkten, und war beruhigt. Erst als ich Mobil für sich allein herausfilterte, sah ich, dass die Hälfte meiner Besucher ein völlig anderes Erlebnis hatte als das, das ich mir vorgestellt hatte.

## Dasselbe Menü, zwei verschiedene Geschichten

Wenn du die Navigation nach Gerät vergleichst, lohnt es sich vor allem, auf drei Dinge zu achten:

- **CTR (Klickrate des Menüs):** Wie viel Prozent der Besucher das Menü auf dem jeweiligen Gerätetyp tatsächlich antippen.
- **Tiefe (wie weit sie surfen):** Wie viele Seiten sie nach dem Antippen durchgehen.
- **Absprungrate:** Wie viele Besucher wieder gehen, ohne fast etwas getan zu haben.

Der entscheidende Punkt ist, dass sich diese drei Zahlen zwischen Mobil und Desktop in der Regel deutlich unterscheiden. Am Desktop ist das Menü oft horizontal und immer sichtbar — ein kurzer Blick, und der Besucher sieht alles. Auf dem Smartphone steckt das Menü oft hinter einem Hamburger-Button mit drei Strichen, und man muss erst antippen, um es zu öffnen.

Dieser Unterschied ist nicht klein. Laut der Nielsen Norman Group halbiert es nahezu die Chance, dass Besucher das Menü finden, wenn man die Hauptnavigation hinter einem Hamburger versteckt — und gleichzeitig brauchen sie mehr Zeit und empfinden die Aufgabe als schwieriger. Dieselbe Website, aber Desktop- und Mobilnutzer gehen praktisch durch zwei verschiedene Läden.

## So misst du es: Aufteilung nach Gerätekategorie in GA4

Du brauchst dafür keine besonderen Werkzeuge. GA4 kann das alles.

Am einfachsten ist es, Explorativ zu öffnen, einen Bericht im freien Format zu erstellen und dann **Gerätekategorie** als Dimension hinzuzufügen. Jetzt erscheint jede Kennzahl als drei Zeilen: Desktop, Mobil, Tablet. Du vergleichst Absprungrate, Interaktion und Seiten pro Sitzung direkt über die Zeilen hinweg.

Wenn du tiefer einsteigen willst, erstelle separate Segmente — ein Segment „Mobil" und ein Segment „Desktop" — und wende dann denselben Bericht auf jedes an. Das ist praktisch, wenn du zusätzliche Bedingungen ergänzen möchtest, etwa nur Besucher anzuschauen, die über Facebook-Anzeigen kamen, oder nur Besucher auf einer bestimmten Kategorieseite.

Ein Hinweis dazu, wie GA4 die Dinge definiert. In GA4 zählt eine Sitzung als „Absprung", wenn sie nicht interaktiv ist — das heißt, der Besucher blieb weniger als 10 Sekunden, sah nur eine Seite an und löste kein wichtiges Ereignis aus. Die Absprungrate ist schlicht der Kehrwert der Interaktionsrate. Behalte das im Kopf, damit dich die Zahlen nicht verwirren.

Konzentriere dich beim Messen nicht auf die absoluten Zahlen. Schau auf den **Abstand** zwischen Mobil und Desktop.

## Ein Aufbau, der am Desktop funktioniert, kann auf dem Smartphone scheitern

Diesen Teil möchte ich betonen, denn er wird am leichtesten übersehen.

Wenn du ein Menü baust, sitzt du mit ziemlicher Sicherheit vor einem Computer. Du betrachtest die Vorschau auf einem breiten Bildschirm, siehst das aufgeräumte mehrspaltige Mega Menu, findest alles leicht anklickbar und gehst online. Das Problem ist, dass die meisten deiner Besucher nicht so sitzen wie du.

Auf dem Smartphone ändert sich alles. Der Bildschirm ist schmal, Finger sind größer als ein Mauszeiger, und Besucher tippen meist mit einem Daumen, während sie das Telefon in einer Hand halten. Laut Steven Hoobers Forschung zur Daumenzone werden die meisten Interaktionen auf dem Telefon mit dem Daumen ausgeführt, und der am leichtesten erreichbare Bereich ist die untere Hälfte des Bildschirms. Ein Menü, das in die obere Ecke gequetscht ist, mit kleiner Schrift und dicht gedrängten Einträgen — am Desktop in Ordnung, auf dem Smartphone schwer zu treffen.

Ein vertrautes Beispiel: Ein Modeladen packt seinen gesamten Katalog in ein sehr detailliertes Desktop-Mega-Menu — Oberteile, Hosen, Kleider, Accessoires, nach Saison, nach Größe. Wunderschön. Doch auf dem Smartphone wird das alles in eine einzige, endlos lange Liste innerhalb des Hamburgers gequetscht. Der Besucher muss antippen, um sie zu öffnen, nach unten scrollen, suchen und erst dann das Antippen erreichen. Jeder zusätzliche Schritt ist eine weitere Gelegenheit für den Besucher zu gehen.

Deshalb solltest du die Navigation für jedes Gerät getrennt einrichten. Für Mobil wechseln viele Shops zu einer Tab Bar — einer festen Navigationsleiste, die am unteren Rand des Bildschirms verankert ist, genau in der Daumenzone — für die 3 bis 5 wichtigsten Einträge wie Startseite, Kategorien, Suche und Warenkorb. Am Desktop behalten sie das vollständige Mega Menu. Zwei Layouts für zwei Kontexte.

## Warnsignal: Mobil-Absprünge deutlich höher als am Desktop

Das deutlichste Zeichen ist leicht zu erkennen: Die Absprungrate auf dem Smartphone liegt spürbar höher als am Desktop.

Fairerweise muss man sagen, dass es überall normal ist, dass Mobil etwas höher abspringt als Desktop — nicht nur bei dir. Laut Branchen-Benchmarks springen mobile Sitzungen tendenziell bei rund 50 % ab, während Desktop niedriger liegt — der durchschnittliche Abstand beträgt etwa 10 Prozentpunkte und ist seit Jahren ziemlich stabil. Gerate also nicht in Panik, nur weil Mobil höher ist.

Worüber du dir Sorgen machen solltest, ist, wenn dieser Abstand ungewöhnlich groß ist. Wenn Mobil auf denselben Seiten 20 Punkte höher abspringt als Desktop oder mehr, ist das ein Signal, dass dein mobiles Erlebnis ein Problem hat — und die Navigation ist einer der ersten Verdächtigen.

Ein paar weitere Signale, die du zugleich im Auge behalten solltest:

- Menü-CTR auf dem Smartphone deutlich niedriger als am Desktop: Besucher finden es nicht oder zögern, es anzutippen.
- Geringere Tiefe auf dem Smartphone: Besucher landen auf einer Seite und schließen sie, ohne tiefer zu surfen.
- Seiten laden auf dem Smartphone langsam: Ein schweres Menü oder eine schwere App bremst alles, und Besucher verlieren die Geduld. Google empfiehlt LCP unter 2,5 Sekunden, INP unter 200 ms und CLS unter 0,1; auf dem Smartphone sind diese Kennzahlen meist am schlechtesten.

Denk daran, dass die durchschnittliche Warenkorbabbruchrate laut dem Baymard Institute bereits bei rund 70 % liegt. Eine schwer bedienbare mobile Navigation macht diese Zahl nur noch schlimmer.

## Maßnahme: Mobil und Desktop in zwei getrennte Setups aufteilen

Was du tun musst, passt in einen Satz: Zwinge nicht ein Menü dazu, beiden Welten zu dienen.

Konkret, nachdem du die Zahlen in GA4 angeschaut hast:

1. Teile den Bericht nach Gerätekategorie auf und finde die Seiten, auf denen Mobil ungewöhnlich höher abspringt als Desktop.
2. Öffne genau diese Seiten auf deinem eigenen echten Smartphone und versuche, das Menü mit einem Daumen anzutippen, wie es ein Kunde tun würde. Du wirst die Reibung selbst spüren.
3. Gestalte ein eigenes mobiles Layout — priorisiere eine Tab Bar am unteren Rand für die Haupteinträge, kürze die Liste im Hamburger und mache die Buttons groß genug zum Antippen.
4. Behalte am Desktop das vollständige Mega Menu. Zwei Setups, nicht eines.

Genau dafür wurde [Navi+](https://naviplus.io) gebaut. Du richtest Mobil und Desktop getrennt ein: eine Tab Bar am unteren Rand für Mobil, ein Mega Menu für Desktop, jeweils mit eigenem Layout, ohne dass du Code anfassen musst. Das Menü ist so optimiert, dass es deine Core Web Vitals nicht nach unten zieht, und es bleibt an Ort und Stelle, wenn du das Theme wechselst. Alles per Drag-and-drop.

Was ich am Ende mitgenommen habe, ist ziemlich einfach. Du brauchst kein perfektes Menü. Du musst nur aufhören, das mobile Erlebnis durch die Augen von jemandem zu beurteilen, der an einem Desktop sitzt. Teile die Zahlen einmal nach Gerät auf, und mit ziemlicher Sicherheit siehst du, was dir die ganze Zeit entgangen ist.

Dieser Artikel ist Teil des größeren Leitfadens [So erkennst du, ob dein Menü funktioniert — 5 Kennzahlen, die du verfolgen solltest](/de/measuring-menu-performance/).