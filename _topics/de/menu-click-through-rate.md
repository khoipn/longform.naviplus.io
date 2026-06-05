---
lang: de
ref: menu-click-through-rate
title: "Kennzahl 1 — Klickrate jedes Menüpunkts"
description: "Die CTR pro Menüpunkt zeigt, welche Menüpunkte geklickt und welche übersprungen werden. Wie man sie mit GA4 und Clarity misst, wie man sie liest und wie man das Menü anpasst, um die Klickraten zu steigern."
image: "/images/measuring-menu-performance/menu-click-through-rate.webp"
image_alt: "Kennzahl 1 — Klickrate jedes Menüpunkts"
parent_title: "Wie Sie erkennen, ob Ihr Menü gut funktioniert — 5 Kennzahlen, die Sie im Blick behalten sollten"
parent_url: "/de/measuring-menu-performance/"
seo_keywords:
  - CTR pro Menüpunkt
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

Die CTR pro Menüpunkt ist die erste Zahl, auf die ich schaue, wann immer ich wissen will, ob ein Menü seine Aufgabe erfüllt. Einfach gesagt verrät sie Ihnen, welcher Anteil der Personen, die das Menü sehen, tatsächlich auf einen bestimmten Punkt klickt. Ein Punkt, den viele Leute sehen, aber nur wenige anklicken, sagt Ihnen in der Regel etwas — Sie müssen es nur richtig deuten.

Dieser Artikel geht tief auf eine einzige Kennzahl ein: die CTR jedes einzelnen Menüpunkts. Wie man sie misst, wie man sie liest und vor allem, was man tut, wenn man sie gelesen hat.

## Was die CTR pro Menüpunkt ist

Die CTR (Click-Through-Rate, also Klickrate) eines Menüpunkts ist das Verhältnis zwischen der Häufigkeit, mit der dieser Punkt angeklickt wird, und der Häufigkeit, mit der das Menü angezeigt wird. Wird das Menü in einer Woche zum Beispiel 1.000 Mal angezeigt und der Punkt „Neuheiten" 80 Mal angeklickt, dann liegt die CTR dieses Punkts bei rund 8 %.

Das Schöne daran ist, dass Sie sich nicht eine einzige Gesamtzahl ansehen. Sie betrachten jeden Punkt einzeln, nebeneinander. Wie viel für „Startseite", wie viel für „Sale", wie viel für „Kontakt". Es ist der Abstand zwischen den Punkten, der Beachtung verdient, nicht der absolute Wert.

Ich mache mir nicht allzu viele Gedanken darüber, welche CTR als „gut" gilt. Jeder Shop ist anders, jedes Publikum ist anders. Mich interessiert die Reihenfolge: Welche Punkte werden viel genutzt und welche rührt fast niemand an.

## Wie man die CTR jedes Punkts misst

Es gibt einige Wege, von präzise bis visuell. Sie brauchen nicht alle drei — wählen Sie den, der zu Ihnen passt.

### Messen mit GA4

GA4 (Google Analytics 4) ist der klarste quantitative Ansatz. Standardmäßig erfasst Enhanced Measurement nur Klicks, die von Ihrer Domain wegführen; es weiß nicht automatisch, wann ein Punkt in Ihrer internen Navigationsleiste angeklickt wurde.

Um Klicks auf das Menü zu erfassen, ist der übliche Weg, den Google Tag Manager zu verwenden: Sie erstellen einen Trigger für Link-Klicks innerhalb des Navigationsbereichs und senden GA4 dann ein eigenes Event (viele nennen es `menu_click`), zusammen mit einem Parameter, der den Namen des angeklickten Punkts enthält. Danach sehen Sie im Bericht „Engagement > Ereignisse" jeden Punkt mit seiner Klickzahl separat aufgeführt.

Ein Hinweis aus Erfahrung: Nachdem Sie das eingerichtet haben, dauert es meist ein bis zwei Tage, bis die Daten in den Berichten vollständig erscheinen — ziehen Sie also nicht schon am ersten Tag voreilige Schlüsse. Und um die Rate zu berechnen, müssen Sie die „Zahl der Personen, die das Menü gesehen haben" kennen — diese wird üblicherweise durch die Zahl der Seitenaufrufe angenähert, die das Menü enthalten.

### Messen mit Hotjar oder Clarity

Wenn Sie lieber nicht an Tags und Code rühren möchten, liefern Hotjar oder Microsoft Clarity Ihnen die Antwort visuell. Beide bieten eine Klick-Heatmap — eine Wärmekarte, die zeigt, wo viel geklickt wird und wo es kalt bleibt.

Microsoft Clarity ist kostenlos und einfach zu starten. Sie fügen ein Snippet ein, und ein paar Tage später öffnen Sie die Heatmap und sehen, welche Menübereiche hell und welche dunkel sind. Bei mobilen Menüs kann Clarity auch den ausgeklappten Zustand des Menüs darstellen, sodass Sie die Punkte innerhalb eines Slide Menus sehen und nicht nur den sofort sichtbaren Teil.

Eine Sache macht Clarity gut, die GA4 nicht kann: die Unterscheidung zwischen „Dead Clicks" und „Rage Clicks". Ein Dead Click ist, wenn ein Besucher auf etwas klickt, das anklickbar aussieht, aber nichts passiert. Ein Rage Click ist, wenn ein Besucher aus Frust wiederholt auf dieselbe Stelle klickt. Bekommt ein Menüpunkt viele Dead Clicks, sieht er sehr wahrscheinlich wie ein Button aus, führt aber tatsächlich nirgendwohin — das ist ein Problem, das behoben werden muss, und nicht einfach ein Fall niedriger CTR.

Ich kombiniere oft beides: GA4 für die Zahlen, um sie über die Zeit zu vergleichen, und Clarity oder Hotjar, um das „Warum" hinter den Zahlen zu verstehen.

## Wie man die CTR-Tabelle liest

Wenn Sie die Punkte nebeneinander aufreihen, ergibt sich meist ein vertrautes Bild: ein paar Punkte mit sehr hoher CTR, eine Gruppe im Mittelfeld und ein paar nahe null.

Ein Punkt nahe null ist nicht automatisch ein schlechter Punkt. Er kann in eine von zwei Gruppen fallen:

- Ein überflüssiger Punkt: Kunden brauchen ihn wirklich nicht. Zum Beispiel ein Punkt „News", wenn der Shop das ganze Jahr über nichts gepostet hat.
- Ein Punkt mit missverstandenem Namen: Kunden brauchen diesen Inhalt, merken aber nicht, dass dieser Punkt dorthin führt. Der Name ist zu kreativ oder verwendet internen Fachjargon, mit dem Kunden nicht vertraut sind.

Diese beiden Gruppen unterscheiden Sie, indem Sie prüfen, ob der dahinterliegende Inhalt über einen anderen Weg erreicht wird. Wenn die Seite „Aktionen" viele Aufrufe hat, der Menüpunkt „Verrückte Deals" aber eine niedrige CTR, dann hat höchstwahrscheinlich der Name ein Problem, nicht der Inhalt.

### Wenn ein wichtiger Punkt eine ungewöhnlich niedrige CTR hat

Das ist der Fall, bei dem es sich am längsten innezuhalten lohnt. Punkte wie „Sale" oder „Neu da" sollten Klicks anziehen. Wer einen Einzelhandelsshop besucht, ist meist neugierig zu sehen, was reduziert ist und was es Neues gibt. Haben diese Punkte eine ungewöhnlich niedrige CTR, liegt das selten daran, dass Kunden kein Interesse haben — es geht meist darum, wo sie platziert sind.

Der Punkt sitzt vielleicht ganz unten im Menü, außer Sichtweite. Eye-Tracking-Forschung der Nielsen Norman Group zeigt, dass Nutzer eine Seite tendenziell in einem F-förmigen Muster überfliegen — sie scannen horizontal über den oberen Bereich, fahren dann am linken Rand hinunter und überspringen einen Großteil der Mitte und des unteren Bereichs. Ein wertvoller Punkt in einer versteckten Ecke kann dem Auge des Kunden leicht entgehen.

Auf dem Smartphone ist das Problem noch ausgeprägter. Liegt der Punkt „Sale" tief im Hamburger-Menü vergraben, muss der Kunde tippen, um das Menü zu öffnen, und dann scrollen, um ihn zu finden. Jeder zusätzliche Schritt ist ein weiterer Punkt, an dem Leute abspringen. Deshalb setzen viele Shops „Sale" direkt in die Tab Bar am unteren Bildschirmrand — immer sichtbar, ohne dass man etwas öffnen muss.

## Was nach dem Lesen zu tun ist

Wenn Sie sie lesen und nichts ändern, bleibt die Zahl nur eine Zahl. Ich fasse das meist in drei Maßnahmen zusammen.

Erstens: die selten genutzten Punkte ausdünnen. Je länger das Menü, desto verwässerter wird jeder einzelne Punkt und desto schwerer fällt Kunden die Wahl. Sitzt ein Punkt über viele Wochen nahe einer CTR von null und bekommt auch der dahinterliegende Inhalt wenige Besucher, dann entfernen Sie ihn ruhig oder führen ihn mit etwas anderem zusammen. Ein schlankeres Menü hilft den verbleibenden Punkten, stärker hervorzustechen.

Zweitens: unklare Punkte umbenennen. Das ist die günstigste Änderung, und die Wirkung ist oft sofort sichtbar. Verwenden Sie die Worte, die Kunden verwenden, nicht die Worte, die Ihnen gefallen: Aus „Kollektion" könnte „Produkte" werden, aus „Verrückte Deals" könnte „Aktionen" werden. Beobachten Sie nach dem Umbenennen die CTR noch ein paar Wochen, um es zu bestätigen.

Drittens: wichtige Punkte an eine prominente Stelle verschieben. Wenn „Sale" stark sein sollte, aktuell aber schwach ist, verschieben Sie ihn an den Anfang des Desktop-Menüs oder setzen ihn auf dem Smartphone in die Tab Bar. Eine Positionsänderung hat oft größere Wirkung, als man erwartet.

Dieses Bauen und Verändern erfordert nicht zwangsläufig einen Entwickler. Mit einem Werkzeug wie [Navi+](https://naviplus.io) ordnen Sie Punkte per Drag-and-drop neu an, benennen sie um oder lagern einen Punkt auf dem Smartphone in die Tab Bar am unteren Rand aus — die mobile und die Desktop-Konfiguration sind getrennt, sodass Sie „Sale" auf dem Handy prominent machen können, ohne das Desktop-Menü zu überladen. So läuft die Schleife aus „Zahlen lesen, dann Menü anpassen" schnell ab, und Sie können fortlaufend testen und neu messen.

Ein letzter Hinweis: ändern Sie immer nur eine Sache auf einmal. Wenn Sie einen Punkt gleichzeitig umbenennen, umpositionieren und kürzen, wissen Sie hinterher nicht, welche Änderung die Verschiebung der CTR ausgelöst hat. Ändern Sie eine Sache, warten Sie auf Daten und gehen Sie dann zur nächsten über.

Dieser Artikel ist Teil des umfassenderen Leitfadens [Wie Sie erkennen, ob Ihr Menü gut funktioniert — 5 Kennzahlen, die Sie im Blick behalten sollten](/de/measuring-menu-performance/).
