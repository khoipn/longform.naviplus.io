---
lang: de
ref: navigation-and-page-speed
order: 5
title: "Navigation und Seitengeschwindigkeit — Eine Menü-App wählen, die deinen Core Web Vitals nicht schadet"
description: "So wählst du eine Core-Web-Vitals-freundliche Menü-App, die deinen Shopify-Shop nicht verlangsamt: LCP, INP und CLS verstehen, erkennen, was eine App schnell macht, und eine Checkliste, um es vor der Installation selbst zu messen — ganz ohne Code."
topic_tag: "Geschwindigkeit"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - Menü-App Core Web Vitals
  - Ladegeschwindigkeit der Seite
  - Seitengeschwindigkeit
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "Was Core Web Vitals sind und warum sie für dich wichtig sind"
    url: "/de/topic/core-web-vitals-explained/"
    desc: "LCP, INP, CLS — die drei Zahlen, auf die Google schaut."
  - title: "Wie eine Menü-App die Geschwindigkeit beeinflusst — und wie du es erkennst"
    url: "/de/topic/how-menu-apps-affect-page-speed/"
    desc: "Schweres JavaScript, render-blockierend, Layout-Verschiebungen."
  - title: "Was eine Menü-App in Sachen Geschwindigkeit gut macht"
    url: "/de/topic/fast-menu-app-criteria/"
    desc: "Fünf Dinge, die du prüfen solltest, bevor du einer App vertraust."
  - title: "Eine Checkliste vor der Installation jeder Menü-App"
    url: "/de/topic/menu-app-installation-checklist/"
    desc: "Vorher messen, nachher messen, ein paar Wochen lang beobachten."
---

Jede App, die du deinem Shop hinzufügst, schleust ein wenig Code in deine Seiten ein. Eine Menü-App gehört zu den ersten Dingen, die geladen werden, denn Kundinnen und Kunden müssen die Navigation in dem Moment sehen, in dem sich eine Seite öffnet. Deshalb ist das Verhältnis zwischen einer **Menü-App** und den **Core Web Vitals** keine entfernte technische Angelegenheit — es betrifft den allerersten Eindruck deiner Kundschaft unmittelbar.

Eines wird dabei leicht übersehen: Ein schönes Menü, das langsam lädt, kann manchmal schlimmer sein als gar keins. Kunden sehen den Code nicht; sie sehen nur eine Seite, die ruckelt, Inhalte, die herumspringen, oder ein Menü, das auf ihr Antippen nicht reagiert. Dieser Artikel fasst zusammen, was ich gelernt habe, nachdem ich meinen eigenen Shop betrieben und die Dinge viele Male nachgemessen habe — nicht um dir Angst vor dem Thema Geschwindigkeit zu machen, sondern um dir genug an die Hand zu geben, damit du eine Menü-App wählen kannst, ohne das Nutzungserlebnis dafür zu opfern.

<div class="lf-key">
  <span class="lf-key-title">Kurz gelesen</span>
  <ul>
    <li>Eine Menü-App betrifft das Erste, was Kunden nutzen: Navigation.</li>
    <li>Core Web Vitals zeigen langsames Laden, Tap-Lag und Layout Shift.</li>
    <li>Miss vor und nach der Installation statt Marketing zu vertrauen.</li>
  </ul>
</div>

## Was Core Web Vitals sind und warum sie für dich wichtig sind

Core Web Vitals sind die drei Kennzahlen, mit denen Google das reale Erlebnis beim Laden einer Seite misst. Es sind keine Laborwerte — es sind Daten, die von deinen tatsächlichen Kundinnen und Kunden erhoben werden.

Die drei Kennzahlen sind:

- **LCP (Largest Contentful Paint)** — wie lange das größte Inhaltselement braucht, um zu erscheinen. Google betrachtet 2,5 Sekunden oder weniger als gut.
- **INP (Interaction to Next Paint)** — die Verzögerung, wenn jemand klickt oder tippt. Gut ist unter 200 Millisekunden.
- **CLS (Cumulative Layout Shift)** — wie sehr Inhalte beim Laden der Seite herumspringen. Gut ist unter 0,1.

Ein Detail, das oft missverstanden wird: Google misst beim 75. Perzentil. Das heißt, 75 % der Besuche müssen den Wert „gut" erreichen, bevor eine Seite als bestanden gilt. Ein schöner Durchschnitt rettet dich nicht, wenn ein Viertel deiner Kundschaft eine schlechte Erfahrung macht.

Warum sollte dich das als Händlerin oder Händler interessieren? Aus zwei Gründen. Erstens ist dies eines von Googles Ranking-Signalen, auch wenn es nicht das größte ist. Zweitens, und wichtiger noch, spiegelt es wider, wie sich Kunden tatsächlich fühlen. Jedes kleine bisschen Reibung am oberen Ende des Funnels — auch eine langsam ladende Seite — summiert sich.

Die gute Nachricht ist, dass du keinerlei Code kennen musst, um diese drei Zahlen zu lesen. Sie sind verfügbar, kostenlos und recht verständlich erklärt.

<p class="lf-readmore"><span class="lf-readmore-kicker">Zum Vertiefen</span><a href="/de/topic/core-web-vitals-explained/">Den vollständigen Leitfaden lesen → Was Core Web Vitals sind und warum sie für dich wichtig sind</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/core-web-vitals-menu-app.webp" alt="Core Web Vitals for a Shopify menu app showing LCP INP and CLS speed metrics" title="Core Web Vitals for menu app speed">
  <figcaption>Core Web Vitals turn loading speed into three numbers merchants can measure.</figcaption>
</figure>

## Wie eine Menü-App die Geschwindigkeit beeinflusst — und wie du es erkennst

Die meisten Apps auf Shopify funktionieren, indem sie JavaScript in den Storefront einschleusen. Eine Menü-App bildet da keine Ausnahme. Das ist für sich genommen nichts Schlechtes — das Problem liegt darin, wie dieser Code geladen wird und wann er ausgeführt wird.

Wenn ein Skript render-blockierend geladen wird, muss der Browser es herunterladen, einlesen und vollständig ausführen, bevor er den Rest der Seite aufbauen kann. Eine Menü-App fällt genau in die Gruppe, die voraussichtlich Probleme verursacht, weil sie früh erscheinen muss, ganz oben auf der Seite.

Es gibt drei Wege, auf denen eine Menü-App die Dinge verlangsamen oder das Erlebnis beeinträchtigen kann:

- **Den LCP nach oben treiben**, wenn das Menü einen großen Teil dessen ausmacht, was oben auf der Seite steht, und warten muss, bis das Skript fertig ist, bevor es sich zeigt.
- **Den INP erhöhen**, wenn jeder Tipp auf das Menü erst von JavaScript verarbeitet werden muss, sodass es träge wirkt.
- **Den CLS steigern**, wenn das Menü (besonders eine obere Leiste oder eine untere Tab Bar) spät erscheint und andere Inhalte aus ihrer Position drängt.

Anzeichen, die du mit bloßem Auge erkennen kannst, ganz ohne Werkzeuge:

- Das Menü erscheint deutlich später als der Hauptteil der Seite.
- Die Seite stößt oder ruckt in dem Moment, in dem das Menü auftaucht.
- Du tippst auf das Menü und musst dann einen Augenblick warten, bis es sich öffnet.
- Auf dem Smartphone flackert die untere Tab Bar oder springt beim Laden in ihrer Position.

Diese Anzeichen zu sehen bedeutet nicht, dass die Menü-App der einzige Übeltäter ist — aber es lohnt sich, vor und nach dem Entfernen zu messen.

<p class="lf-readmore"><span class="lf-readmore-kicker">Zum Vertiefen</span><a href="/de/topic/how-menu-apps-affect-page-speed/">Den vollständigen Leitfaden lesen → Wie eine Menü-App die Geschwindigkeit beeinflusst — und wie du es erkennst</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-speed-impact.webp" alt="Menu app speed impact showing delayed navigation tap lag and layout shift" title="How menu apps affect page speed">
  <figcaption>A menu app can hurt speed when scripts delay the menu, lag taps, or shift layout.</figcaption>
</figure>

## Was eine Menü-App in Sachen Geschwindigkeit gut macht

Sobald du verstehst, wie eine Menü-App die Dinge beeinflusst, fällt die Auswahl leichter. Im Folgenden findest du die Kriterien, die meiner Ansicht nach eine Abwägung wert sind, in etwa nach Wichtigkeit geordnet.

**Lädt leichtgewichtig und blockiert das Rendering nicht.** Eine App sollte ihren Code mit defer oder async laden, damit das Menü die Seite nicht zum Warten zwingt. Du kannst das nicht direkt überprüfen, aber das Ergebnis zeigt sich in deinen Geschwindigkeitswerten vor und nach der Installation.

**Reserviert stabilen Platz und verursacht keine Layout-Verschiebung.** Eine gute Menü-App sollte vorab Raum für das Menü freihalten, damit der CLS nicht steigt. Dieser Punkt wird sehr oft übersehen, vor allem bei fixierten Tab Bars und sticky Navigationsleisten am oberen Rand.

**Trägt ein Built-for-Shopify-Abzeichen.** Das ist ein vertrauenswürdiges Signal. Um das **Built for Shopify**-Abzeichen zu erhalten, darf eine App den Lighthouse-Wert des Storefronts laut Shopifys veröffentlichten Anforderungen um nicht mehr als zehn Punkte senken. Das ist keine Garantie für Perfektion, zeigt aber, dass die App eine Mindesthürde bei der Seitengeschwindigkeit genommen hat.

**Getrennte Konfiguration für Mobil und Desktop.** Ein leichtgewichtiges Menü, das im falschen Kontext eingesetzt wird, ist trotzdem nicht gut. Wenn du eine Tab Bar für mobil und ein Mega Menu für Desktop festlegen kannst, musst du nicht alles in ein einziges Design zwängen.

**Bleibt stabil, wenn du das Theme wechselst.** Wenn das Menü unabhängig vom Theme gespeichert ist, musst du es nicht jedes Mal neu aufbauen, wenn du das Design wechselst — und du vermeidest das Risiko, dass sich beim Wechsel übrig gebliebener Code ansammelt.

Ein kurzer Vergleich zwischen einer typischen „schweren" Menü-App und einer optimierten:

| Aspekt | App, die Geschwindigkeit ignoriert | App, die auf Geschwindigkeit optimiert ist |
|---|---|---|
| Wie der Code lädt | Render-blockierend | Defer / async |
| Auswirkung auf CLS | Verschiebt oft das Layout | Reserviert stabilen Platz |
| Built for Shopify | Meist keins | Hat das Abzeichen |
| Geräte-Konfiguration | Ein gemeinsames Design | Getrennt für Mobil und Desktop |

Navi+ ist nach diesen Prinzipien gebaut: Menüs ohne Code erstellen, getrennte Konfiguration für Mobil und Desktop, Menüs, die beim Theme-Wechsel an ihrem Platz bleiben, und die App trägt ein Built-for-Shopify-Abzeichen. Du kannst dir das gern unter [naviplus.io](https://naviplus.io) ansehen. Trotzdem möchte ich dich ermutigen, in deinem eigenen Shop selbst zu messen, statt der Werbung zu vertrauen — auch unserer nicht.

<p class="lf-readmore"><span class="lf-readmore-kicker">Zum Vertiefen</span><a href="/de/topic/fast-menu-app-criteria/">Den vollständigen Leitfaden lesen → Was eine Menü-App in Sachen Geschwindigkeit gut macht</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-menu-app-criteria.webp" alt="Fast Shopify menu app criteria including defer code stable layout and Built for Shopify badge" title="Fast menu app criteria for Shopify">
  <figcaption>A speed-friendly menu app loads light, reserves stable space, and supports each device separately.</figcaption>
</figure>

## Eine Checkliste vor der Installation jeder Menü-App

Dieser Teil ist eine Reihe praktischer Schritte, die du in etwa fünfzehn Minuten erledigen kannst, ohne technische Kenntnisse.

1. **Miss zuerst deinen Ausgangswert.** Öffne PageSpeed Insights, füge die URL deiner Startseite und einer Produktseite ein und notiere deine aktuellen Werte für LCP, INP und CLS. Das ist dein Referenzpunkt für den Vergleich.
2. **Installiere die Menü-App im Testmodus.** Die meisten Apps haben eine Testphase. Baue das Menü so, wie du es tatsächlich nutzen willst — richte es nicht halbherzig ein.
3. **Miss dieselben Seiten erneut.** Vergleiche die drei Kennzahlen mit deinem Ausgangswert. Kleine Unterschiede sind normal; ein großer Unterschied bei CLS oder LCP ist ein Signal, genauer hinzusehen.
4. **Prüfe mit bloßem Auge auf einem echten Smartphone.** Lade die Seite wenn möglich über 4G. Achte darauf, ob das Menü spät erscheint, das Layout verschiebt oder beim Antippen hängt.
5. **Schau dir das Abzeichen und die Bewertungen an.** Bevorzuge Apps mit Built for Shopify und Bewertungen, die konkret von Geschwindigkeit sprechen.
6. **Entferne sie sauber, wenn du sie nicht behältst.** Wenn du dich gegen die App entscheidest, stelle sicher, dass sie allen eingeschleusten Code entfernt, und miss dann erneut, um zu bestätigen, dass deine Werte auf den Ausgangswert zurückkehren.

Ein Hinweis zur Vorgehensweise: Installiere nicht mehrere Menü-Apps gleichzeitig, um sie zu vergleichen. Ihr Code kann sich überschneiden und deine Messungen verfälschen. Probiere sie eine nach der anderen aus und entferne jede sauber, bevor du die nächste testest.

<p class="lf-readmore"><span class="lf-readmore-kicker">Zum Vertiefen</span><a href="/de/topic/menu-app-installation-checklist/">Den vollständigen Leitfaden lesen → Eine Checkliste vor der Installation jeder Menü-App</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-installation-checklist.webp" alt="Menu app installation checklist for measuring PageSpeed before and after install" title="Menu app installation speed checklist">
  <figcaption>Measure before and after installation so a menu app cannot hide its speed cost.</figcaption>
</figure>

## Ein Wort zur Navigation, nicht nur zur Geschwindigkeit

Geschwindigkeit ist wichtig, aber sie dient einem größeren Ziel: Kundinnen und Kunden dabei zu helfen, das zu finden, was sie brauchen. Ein schnelles Menü, das die gesamte Navigation versteckt, löst gar nichts.

Eine Studie der Nielsen Norman Group mit 179 Nutzerinnen und Nutzern ergab, dass das Verstecken der Navigation die Auffindbarkeit nahezu halbierte, während Kunden zugleich langsamer handelten und das Finden von Dingen als schwerer empfanden. Die Lehre ist einfach genug: Wenn du es nicht verstecken musst, dann tu es nicht.

Deshalb funktioniert auf dem Smartphone eine untere Tab Bar tendenziell besser als ein schlichtes Hamburger-Menü — die wichtigsten Punkte sind immer in Reichweite, ohne dass man etwas öffnen muss, um sie zu sehen. Geschwindigkeit und gute Navigation gehören zusammen; eine Menü-App zu wählen heißt, beides zugleich zu wählen.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-findable-navigation.webp" alt="Fast and findable mobile navigation comparing hidden hamburger menu with visible tab bar" title="Fast navigation also needs discoverability">
  <figcaption>A fast menu still has to keep important paths visible and easy to reach.</figcaption>
</figure>
## Wo du anfangen solltest

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/pagespeed-baseline-menu-app.webp" alt="PageSpeed baseline comparison before and after installing a Shopify menu app" title="PageSpeed baseline before menu app install">
  <figcaption>A baseline makes it clear whether a new menu app improved or hurt the experience.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Erst Baseline</span>Speichere PageSpeed-Werte vor der Installation und vergleiche dieselben Seiten danach.</p>

Geschwindigkeit ist nicht nur ein Problem für Entwickler. Als Händlerin oder Händler kannst du sie ohne Weiteres selbst überprüfen und eine fundierte Entscheidung treffen. Du musst keine einzige Zeile Code lesen, um zu wissen, ob eine Menü-App deinen Shop verlangsamt — du musst nur wissen, wo du hinschauen musst.

Ein kostenloses Werkzeug wie PageSpeed Insights reicht, um loszulegen. Miss die Werte deines Shops noch heute, halte sie als Ausgangswert fest und vergleiche sie dann, nachdem du eine neue Menü-App ausprobiert hast. Die Zahlen sagen dir mehr als jedes Werbeversprechen — auch mehr als die Versprechen desjenigen, der diesen Artikel geschrieben hat.