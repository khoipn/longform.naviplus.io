---
lang: de
ref: collection-page-exit-rate
title: "Kennzahl 3 — Ausstiegsrate auf der Kategorieseite"
description: "Eine hohe Ausstiegsrate auf der Kategorieseite hat oft ihren Ursprung in Menübezeichnungen, die nicht zu dem passen, was die Seite zeigt. So messen Sie sie mit GA4-Explorationen und so prüfen und korrigieren Sie Ihr Menü, um Kunden zu halten."
image: "/images/measuring-menu-performance/category-page-exit-rate.webp"
image_alt: "Kennzahl 3 — Ausstiegsrate auf der Kategorieseite"
parent_title: "So erkennen Sie, ob Ihr Menü funktioniert — 5 Kennzahlen, die sich lohnen"
parent_url: "/de/measuring-menu-performance/"
seo_keywords:
  - Ausstiegsrate Kategorieseite
  - Kategorieseite
  - GA4
date: 2026-06-02
---

Dies ist die dritte Kennzahl in der Reihe von fünf, und sie erzählt eine ganz andere Geschichte als die ersten beiden. Vorhin fragten wir: „Hat der Kunde das Menü angeklickt?" Jetzt lautet die Frage: Nachdem er durchgeklickt hat und auf der Kategorieseite gelandet ist — geht er weiter oder verlässt er die Website?

Wenn Sie die **Ausstiegsrate auf der Kategorieseite** messen, sehen Sie genau, wo der Bruch entsteht. Wenn ein Kunde sich die Mühe macht, eine Kategorieseite zu erreichen, und trotzdem geht, dann liegt das meist nicht daran, dass er das Interesse am Kauf verloren hat. Es liegt meist daran, dass das, was er sieht, nicht dem entspricht, was er beim Klick auf das Menü erwartet hat. Und sehr häufig ist die eigentliche Ursache, wie wir den Menüpunkt benannt haben.

## Was die Ausstiegsrate auf der Kategorieseite ist

Die Ausstiegsrate ist der Anteil der Sitzungen, die auf einer bestimmten Seite enden. Sie wird berechnet als Anzahl der Ausstiege geteilt durch die Anzahl der Aufrufe dieser Seite. Jede Seite, auf die ein Kunde schaut und die Website dann verlässt, ohne eine weitere Seite anzusehen, zählt als Ausstieg.

Auf die Kategorieseite bezogen ist die Bedeutung sehr konkret. Ein Kunde landet auf einer Kategorieseite — sagen wir „Herrenjacken" oder „Küchenzubehör" —, klickt dann auf kein Produkt, wendet keinen Filter an, wechselt zu keiner anderen Kategorie und schließt den Tab. Das ist ein Ausstieg auf der Kategorieseite.

Es hilft, dies von der Absprungrate zu unterscheiden. Ein Absprung ist ein Kunde, der hereinkommt und geht, ohne überhaupt zu interagieren, üblicherweise gezählt für die erste Seite, auf der er eingestiegen ist. Der Ausstieg ist umfassender: Der Kunde hat vielleicht schon ein paar Seiten angesehen, aber die Kategorieseite ist die letzte, die er vor dem Verlassen gesehen hat. Für die Kategorieseite ist die Ausstiegsrate die interessantere Zahl, denn sie sagt Ihnen, dass der Kunde beim Stöbern „hängen geblieben" ist und nicht zu einem Produkt weiterkam.

## So messen Sie die Ausstiegsrate auf der Kategorieseite in GA4

Es gibt zuerst einen kleinen Haken, der erwähnenswert ist. In GA4 hat Google die Kennzahlen Ausstiege und Ausstiegsrate aus den Standardberichten ausgeblendet. Wenn Sie den Bericht „Seiten und Bildschirme" direkt öffnen, finden Sie dort keine Spalte „Ausstiegsrate" mehr. Das unterscheidet sich vom alten Universal Analytics, weshalb viele Leute suchen und nie fündig werden.

Der Weg dorthin führt über die Explorationen, mit diesen kurzen Schritten:

- Gehen Sie in der linken Seitenleiste auf **Explorativ** und wählen Sie einen Bericht vom Typ **Leere Vorlage**.
- Fügen Sie die Dimension **Seitenpfad und Bildschirmklasse** hinzu.
- Fügen Sie zwei Kennzahlen hinzu: **Aufrufe** und **Ausstiege**.
- Filtern Sie den Pfad auf den URL-Teil Ihrer Kategorieseiten. Bei Shopify sehen Kategorieseiten üblicherweise wie `/collections/...` aus, filtern Sie den Seitenpfad also so, dass er `/collections/` enthält.

GA4 enthält in dieser Tabelle standardmäßig keine Spalte „Ausstiegsrate", Sie berechnen sie also selbst, indem Sie für jede Seite die Ausstiege durch die Aufrufe teilen. Eine Kategorie mit 1.000 Aufrufen und 300 Ausstiegen hat eine Ausstiegsrate von 30 %. Am schnellsten geht es, indem Sie nach Google Sheets exportieren und eine Spalte für die Division hinzufügen.

Versteifen Sie sich nicht auf den absoluten Wert, denn jede Branche ist anders. Sinnvoller ist es, Ihre Kategorien untereinander und mit dem Durchschnitt Ihres eigenen Shops zu vergleichen. Die Kategorie, deren Ausstiegsrate sich deutlich vom Rest abhebt — die sollten Sie sich genauer ansehen.

## So lesen Sie die Zahl: Warum die Ausstiege auf der Kategorieseite hoch sind

Wenn eine Kategorieseite eine ungewöhnlich hohe Ausstiegsrate hat, fällt die Ursache meist in eine von zwei Gruppen.

**Gruppe eins — der Kunde ist am falschen Ort gelandet.** Er hat einen Menüpunkt angeklickt und erwartet, A zu sehen, aber die Seite zeigt B. Zum Beispiel sagt das Menü „Sale", doch der Klick darauf zeigt nichts als Ware zum vollen Preis. Oder das Menü sagt „Neuheiten", während die Seite immer noch die Stücke der letzten Saison zeigt. Der Kunde hat nicht unrecht; er ist einfach enttäuscht und geht. In diesem Fall trägt die Kategorieseite die Schuld für einen falsch beschrifteten Menüpunkt.

**Gruppe zwei — die Kategorieseite ist unattraktiv oder schwer zu bedienen.** Es ist die richtige Kategorie, aber darin gibt es nur eine Handvoll Produkte, die Fotos sind schlecht, es gibt keine Möglichkeit, nach Größe oder Preis zu filtern, oder die Seite lädt langsam. Der Kunde bleibt auf der Kategorieebene hängen und kommt nicht tiefer zu einer Produktseite — vielleicht weil die Produkte unordentlich angeordnet sind oder das Seitenlayout überladen ist.

Diese beiden Gruppen erfordern unterschiedliche Lösungen. Gruppe zwei ist eine Aufgabe für die Kategorieseite: die Produkte neu anordnen, Filter hinzufügen, die Seite schlanker machen. Gruppe eins — die sehr häufig vorkommt und oft übersehen wird — ist eine Aufgabe für das Menü. Dabei möchte ich etwas länger verweilen.

## Die Menüverbindung: Bezeichnungen, die nicht zur Seite passen

Eine Kategorieseite zieht selten von sich aus Traffic an. Die meisten Besuche einer Kategorieseite kommen von einem einzigen Klick im Menü. Das bedeutet: Die Menübezeichnung ist das erste Versprechen, das Sie dem Kunden geben. Die Kategorieseite ist der Ort, an dem Sie dieses Versprechen entweder halten oder brechen.

Die Lücke zwischen Versprechen und Wirklichkeit ist der Ort, an dem Ausstiege entstehen. Ein paar Situationen, die Händlern vertraut sind:

- Das Menü sagt „50 % Rabatt", der Kunde klickt und erwartet kräftige Nachlässe, aber die Seite mischt Artikel mit 10 % Rabatt unter solche zum vollen Preis.
- Das Menü zeigt nach der Saison immer noch die „Tet-Kollektion"; der Klick darauf führt zu einer fast leeren Seite.
- Das Desktop-Menü und das Mobil-Menü führen zu zwei verschiedenen Seiten, einer mit Vorrat und einer ausverkauften.
- Die Bezeichnung verwendet internes Vokabular („S/S Collection"), während Kunden gewohnt sind, nach „Kleidern" oder „Hemden" zu suchen.

In jedem Fall hat der Kunde nichts falsch gemacht. Er hat den Worten im Menü vertraut, geklickt, festgestellt, dass es nicht stimmte, und ist gegangen. Die Ausstiegsrate dieser Kategorieseite steigt, und es ist leicht, das als „die Kategorieseite hat ein Problem" misszuverstehen und das Falsche zu reparieren.

Erwähnenswert: Dieser frühe Ausstieg geschieht sogar vor dem Warenkorb. Man neigt dazu, sich über Warenkorbabbrüche Sorgen zu machen — laut Baymard Institute werden im Durchschnitt rund 70 % der Warenkörbe zurückgelassen. Doch auf der Kategorieebene geht der Kunde, bevor er überhaupt ein Produkt angesehen hat. Das ist eine frühere Phase, die weniger Leute beobachten, und sie zu beheben ist meist günstig und schnell.

## Maßnahme: Menübezeichnungen gegen den Inhalt der Kategorieseite prüfen

Was Sie tun sollten, ist sehr einfach und erfordert keine komplizierten Werkzeuge. Öffnen Sie GA4, filtern Sie die Liste der Kategorieseiten, sortieren Sie absteigend nach Ausstiegsrate und ziehen Sie die obersten Kategorien heraus.

Gehen Sie für jede Kategorie mit hoher Ausstiegsrate den Weg des Kunden selbst durch:

- Was sagt der Menüpunkt, der zu dieser Seite führt, eigentlich aus?
- Passt die Seite, die erscheint, wenn Sie klicken, zu dem, was die Bezeichnung versprochen hat?
- Gibt es genug Produkte, damit der Kunde das Gefühl hat, dass es „etwas zu sehen" gibt?
- Wo sitzt dieser Menüpunkt auf dem Smartphone, und führt der Klick darauf zur selben Seite wie auf dem Desktop?

Wenn Menübezeichnung und Seiteninhalt nicht zusammenpassen, gibt es zwei Möglichkeiten zur Korrektur: den Punkt umbenennen, sodass er zu dem passt, was die Seite tatsächlich zeigt, oder den Namen beibehalten und die Seite an die Erwartung anpassen. Welchen Weg Sie wählen, hängt von Ihrer geschäftlichen Absicht ab, aber die beiden müssen übereinstimmen.

Ein kleiner Tipp: Benennen Sie die Punkte in der Sprache des Kunden, nicht in Ihrer internen. Kunden tippen „Heißluftfritteuse", nur wenige suchen nach „Premium-Haushaltsgeräte-Kollektion". Je näher die Bezeichnung an den Worten ist, die Kunden tatsächlich verwenden, desto leichter lassen sich die Erwartungen erfüllen und desto geringer sind die Ausstiege.

Das Bearbeiten des Menüs kann mühsam sein, wenn Sie dafür den Theme-Code anfassen müssen. Deshalb nutzen viele Shops [Navi+](https://naviplus.io), um Menüs per Drag-and-drop und ohne Code zu erstellen und zu bearbeiten — einen Punkt umbenennen, neu anordnen oder auf die richtige Kategorieseite verweisen lassen dauert nur ein paar Minuten. Mit Navi+ können Sie Mobil und Desktop getrennt konfigurieren, sodass Sie den Fehler vermeiden, dass beide Seiten zu unterschiedlichen Seiten führen, und das Menü bleibt selbst beim Themenwechsel erhalten. Der Rest — zu entscheiden, welcher Name zu welcher Seite passt — bleibt Ihnen, denn nur Sie verstehen Ihre eigenen Produkte.

Kurz gesagt: Eine hohe Ausstiegsrate auf der Kategorieseite ist nicht immer die Schuld der Kategorieseite. Sehr oft beginnt sie mit einer Menübezeichnung, die das eine verspricht und das andere liefert. Die beiden in Einklang zu bringen ist meist der schnellste Weg, Kunden lange genug zu halten, damit sie tatsächlich ein Produkt sehen.

Dieser Artikel ist Teil des umfassenderen Leitfadens [So erkennen Sie, ob Ihr Menü funktioniert — 5 Kennzahlen, die sich lohnen](/de/measuring-menu-performance/).
