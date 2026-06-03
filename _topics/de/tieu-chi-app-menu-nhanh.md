---
lang: de
ref: tieu-chi-app-menu-nhanh
title: "Woran man erkennt, ob eine Menü-App wirklich schnell ist: 5 Kriterien"
description: "Fünf Kriterien für eine schnelle Menü-App, die Sie selbst prüfen können: Lazy Loading, schlankes JavaScript, kein Render-Blocking, CDN und das Built-for-Shopify-Abzeichen. Gemessen an den Core Web Vitals."
parent_title: "Navigation und Seitengeschwindigkeit — eine Menü-App wählen, die die Core Web Vitals nicht verschlechtert"
parent_url: "/de/navigation-toc-do-tai-trang/"
seo_keywords:
  - Kriterien schnelle Menü-App
  - Lazy Loading
  - CDN
  - Built for Shopify
date: 2026-06-02
---

Das Menü ist etwas, das nahezu jeder Besucher berührt. Eine langsame Menü-App lässt deshalb die ganze Seite langsam wirken. Aber "schnell" ist ein vages Wort. Bei der Suche nach einer App hört man ständig Behauptungen wie "ultraleicht" und "verlangsamt Ihre Seite nicht", ohne dass man irgendeine Möglichkeit hätte, das nachzuprüfen.

Dieser Artikel fasst fünf **Kriterien für eine schnelle Menü-App** zusammen, die Sie selbst prüfen können, ohne ein technischer Mensch zu sein. Das sind die Dinge, die ich gelernt habe, nachdem ich eine Weile einen Shop betrieben und mich noch einmal durch die Dokumentation von Google und Shopify gearbeitet habe.

Noch ein Bezugspunkt, bevor wir anfangen. Google misst das Ladeerlebnis einer Seite mit den Core Web Vitals, deren "gute" Schwellenwerte bei einem LCP unter 2,5 Sekunden, einem INP unter 200 Millisekunden und einem CLS unter 0,1 liegen ([web.dev](https://web.dev/articles/vitals)). Eine gute Menü-App ist eine, die diese Werte nicht verschlechtert.

## 1. Lazy Loading: nur laden, wenn nötig

Lazy Loading bedeutet, dass die App nicht alles in dem Moment lädt, in dem die Seite geöffnet wird. Was noch nicht gebraucht wird, bleibt in Wartestellung und wird erst geladen, wenn ein Besucher darüberfährt oder klickt.

Ein Desktop-Mega-Menü kann Dutzende von Einträgen enthalten, dazu Icons und Vorschaubilder. Wenn die App versucht, all das vorab zu laden, konkurriert sie um Ressourcen mit dem eigentlichen Hauptinhalt, den der Besucher sehen möchte, etwa Produktbildern und Preisen. Mit Lazy Loading erscheint die Untermenü-Ebene erst, wenn der Besucher tatsächlich darüberfährt.

So prüfen Sie es: Öffnen Sie die Seite auf einem Computer und achten Sie darauf, ob das Menü beim Aufklappen einen winzigen Moment zögert. Eine kleine Pause beim ersten Überfahren ist meist ein Zeichen dafür, dass die App im richtigen Augenblick lädt, anstatt von Anfang an alles hineinzustopfen. Das ist besonders wichtig für Shops mit vielen Kategorien, etwa Gemischtwarenläden oder Modegeschäfte mit vielen Produktlinien.

## 2. Schlankes JavaScript

Das ist das Kriterium, das sich am schwersten mit bloßem Auge beurteilen lässt, aber es lohnt sich, beim Anbieter danach zu fragen. Die Idee ist einfach: Ein Menü sollte nicht ein ganzes schweres Framework heranziehen, nur um ein paar Links anzuzeigen.

JavaScript ist der "laufende" Teil der App. Je größer das JavaScript-Bundle, desto mehr Zeit verbringt der Browser mit dem Laden und Verarbeiten, was sich direkt auf den INP auswirkt, also auf die Reaktionsschnelligkeit, wenn ein Besucher klickt. Eine schlank geschriebene Menü-App trägt nur den Code mit sich, den sie zum Öffnen und Schließen des Menüs braucht, nicht mehr.

Sie müssen keinen Code lesen, um das zu beurteilen. Lassen Sie die Seite durch Googles [PageSpeed Insights](https://pagespeed.web.dev/) laufen und schauen Sie sich den Abschnitt zum ungenutzten JavaScript an. Wenn dieser Teil nach der Installation der Menü-App merklich anschwillt, ist das ein Signal, noch einmal nachzudenken.

Das ist auch der Grund, warum eine App, die eine Sache gut macht, in der Regel leichter ist als eine App, die ein Dutzend Dinge auf einmal versucht. Je mehr man hineinpackt, desto schwieriger ist es, das JavaScript-Bundle schlank zu halten.

## 3. Kein Render-Blocking

Render-Blocking liegt vor, wenn das Skript der App den Browser daran hindert, den Hauptinhalt auf den Bildschirm zu zeichnen. Der Besucher muss warten, bis die Menü-App fertig geladen hat, bevor der Rest der Seite erscheint.

Laut Googles Dokumentation blockiert ein auf die Standardweise geladenes Skript den Browser daran, die Seite zu parsen und anzuzeigen, bis dieses Skript fertig geladen, gelesen und ausgeführt wurde ([web.dev](https://web.dev/articles/render-blocking-resources)). Das verschiebt Meilensteine wie First Contentful Paint und LCP nach hinten. Mit anderen Worten: Eine an der falschen Stelle platzierte Menü-App kann den Bildschirm länger leer lassen, selbst wenn das Menü selbst nichts Kompliziertes ist.

Eine gut gebaute App lädt ihr Skript asynchron (async oder defer), sodass die Seite zuerst ihren Hauptinhalt zeigt und das Menü danach mit einer Verzögerung andockt, die der Besucher kaum bemerkt. Diesen Punkt selbst zu prüfen ist schwierig, aber PageSpeed Insights hat eine eigene Warnung zu "render-blocking resources", und Sie können den Wert vor und nach der Installation der App vergleichen.

## 4. Assets über ein CDN ausgeliefert

Ein CDN ist ein Netzwerk von Servern, das über viele Orte rund um die Welt verteilt ist. Wenn die Icons, Bilder und Dateien des Menüs über ein CDN ausgeliefert werden, werden sie vom Server geladen, der dem Besucher am nächsten ist, sodass sie in jeder Region schnell und gleichmäßig laden.

Das ist praktisch für vietnamesische Händler, die internationale Kunden ansprechen. Wenn die Menü-Dateien auf einem einzigen, weit entfernten Server liegen, warten Besucher in Europa oder den USA länger auf jedes kleine Icon. Mit einem CDN verkürzt sich diese Distanz.

Auch das lässt sich leicht beim Anbieter erfragen: Woher werden die Icons und Bilder im Menü ausgeliefert? Eine seriöse App wird das beantworten können und führt ihre Nutzung eines CDN oft sogar als Pluspunkt an. Bei Shopify laufen die meisten Assets über die eingebaute CDN-Infrastruktur, aber es lohnt sich trotzdem, die Bilder und Icons zu prüfen, die die Menü-App selbst lädt.

## 5. Das "Built for Shopify"-Abzeichen

Wenn Sie Shopify nutzen und nicht jedes der oben genannten technischen Kriterien selbst prüfen möchten, ist das **Built for Shopify**-Abzeichen eine verlässliche Abkürzung. Es ist eine Auszeichnung, die Shopify an Apps vergibt, die ihre Qualitätsstandards erfüllen, und Shopify prüft dabei recht streng.

Bemerkenswert ist, dass dieser Kriterienkatalog auch einen Performance-Teil enthält, der direkt aus den Core Web Vitals stammt. Laut [Shopifys Dokumentation](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements) muss eine App einen LCP von 2,5 Sekunden oder weniger, einen CLS von 0,1 oder weniger und einen INP von 200 Millisekunden oder weniger erreichen, gemessen am 75. Perzentil der Ladevorgänge. Darüber hinaus darf die App den Lighthouse-Performance-Score des Storefronts um nicht mehr als 10 Punkte senken.

Mit anderen Worten: Eine App mit diesem Abzeichen hat bereits einen Teil der technischen Prüfung bestanden, die Sie sonst selbst durchführen müssten. Das Abzeichen ersetzt nicht das Messen im eigenen Shop, aber es engt die engere Auswahl sehr schnell ein.

Unter den Menü-Apps trägt [Navi+](https://naviplus.io) das "Built for Shopify"-Abzeichen und ist entlang der oben genannten Kriterien optimiert: Es lädt schlank, blockiert das Rendering nicht und vermeidet es, das Layout zu verschieben, wenn das Menü erscheint. Navi+ kann eine untere Tab Bar für Mobilgeräte, ein Mega Menu, Slide Menu, FAB und Grid Menu erstellen, mit getrennten Konfigurationen für Mobil und Desktop, ganz ohne Code. Ich erwähne es hier, weil es ein gutes Beispiel für die soeben besprochenen fünf Punkte ist, nicht um zu behaupten, es sei die einzige Option.

## Daraus eine Prüfgewohnheit machen

Die fünf Kriterien oben lassen sich auf ein paar kleine Dinge herunterbrechen, die Sie in zehn Minuten erledigen können:

- Fahren Sie über das Menü und beobachten Sie, ob es davon zögert, alles auf einmal zu laden (Lazy Loading).
- Lassen Sie PageSpeed Insights vor und nach der Installation der App laufen und vergleichen Sie das ungenutzte JavaScript und die Render-Blocking-Warnungen.
- Fragen Sie den Anbieter nach einem CDN für Icons und Bilder.
- Bevorzugen Sie Apps mit dem "Built for Shopify"-Abzeichen, wenn Sie über Shopify verkaufen.

Ein Shop installiert in der Regel viele Apps, und jede einzelne trägt ein wenig zur Gesamtgeschwindigkeit bei. Da das Menü auf nahezu jeder Seite erscheint, ist das eine Stelle, bei der man ruhig etwas anspruchsvoller sein darf. Von Anfang an richtig zu wählen erspart Ihnen, später deinstallieren und neu installieren zu müssen.

Dieser Artikel ist Teil des umfassenderen Leitfadens zu [Navigation und Seitengeschwindigkeit — eine Menü-App wählen, die die Core Web Vitals nicht verschlechtert](/de/navigation-toc-do-tai-trang/).