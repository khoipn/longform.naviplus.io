---
lang: de
ref: internal-search-usage-rate
title: "Kennzahl 5 — Nutzungsrate der internen Suche"
description: "Was die Suchnutzungsrate ist, wie du sie mit GA4 misst und wie du deine häufigsten Suchanfragen liest, damit du Menüpunkte in der Sprache deiner Kundschaft benennen und seltener machen kannst, dass sie den Shop selbst durchsuchen müssen."
parent_title: "So erkennst du, ob dein Menü funktioniert — 5 Kennzahlen, die du verfolgen solltest"
parent_url: "/de/measuring-menu-performance/"
seo_keywords:
  - Nutzungsrate der internen Suche
  - view_search_results
  - häufigste Suchanfragen
date: 2026-06-02
---

Von allen Kennzahlen zur Beurteilung der Menügesundheit wird diese am häufigsten übersehen. Die **Suchnutzungsrate** — der Anteil der Kundschaft, der die Suchleiste statt des Menüs nutzt, um ans Ziel zu kommen — erzählt dir eine Geschichte, die Menü-Klickkennzahlen nicht erzählen können: den Anteil der Kundschaft, der dein Menü still und leise umgangen hat.

Suchleiste und Menü klingen nach zwei getrennten Dingen. In Wirklichkeit sind sie zwei Seiten derselben Frage: Hat die Kundin gefunden, was sie brauchte — und wie?

## Was die Suchnutzungsrate ist

Einfach gesagt ist es der Anteil der Sitzungen mit mindestens einer internen Suche, geteilt durch die Gesamtzahl der Sitzungen. Wenn 100 Personen den Shop besuchen und 18 davon ins Suchfeld tippen, liegt deine Suchnutzungsrate bei etwa 18 %.

Es gibt keinen absoluten „richtigen" Wert für diese Zahl. Laut dem Baymard Institute schwankt der Anteil der Kundschaft, der das Suchen dem Durchstöbern des Menüs vorzieht, stark — je nach Shop und Produktart: Ein Modeshop mit ein paar hundert Modellen ist etwas ganz anderes als ein Shop für Elektronikteile mit Zehntausenden von SKUs.

Vergleiche deine Zahl also nicht mit einem allgemeinen Benchmark. Vergleiche sie über die Zeit mit dir selbst — und, noch wichtiger: lies, *wonach* die Kundschaft sucht.

## Wie du die Suchnutzungsrate mit GA4 misst

Für den Einstieg musst du kaum etwas tun. GA4 verfügt über die optimierte Analyse (Enhanced Measurement), die standardmäßig aktiv ist. Wenn sie eingeschaltet ist, löst GA4 automatisch das Ereignis **view_search_results** aus, sobald eine Kundin eine Suche durchführt.

So funktioniert es: GA4 erkennt eine Suche an einem Parameter in der URL der Ergebnisseite. Standardmäßig sucht es nach den Parametern `q`, `s`, `search`, `query` und `keyword`. Wenn deine Suchergebnis-URL etwa `?q=weisses-hemd` lautet, funktioniert alles sofort.

Bei Shopify nutzt die Standard-Such-URL `?q=`, sodass `view_search_results` in der Regel ohne jede Anpassung zu zählen beginnt. Falls dein Shop einen ungewöhnlichen Parameter verwendet, musst du ihn nur in den Einstellungen deines Datenstroms in GA4 hinzufügen.

Um die Daten zu sehen, gehst du zu Berichte → Engagement → Ereignisse und suchst nach dem Ereignis **view_search_results**. Öffnest du es, findest du den Parameter `search_term` — das ist die Liste der Suchbegriffe, die die Kundschaft eingetippt hat. Um die Rate zu berechnen, nimmst du die Anzahl der Sitzungen mit `view_search_results` und teilst sie durch die Gesamtzahl der Sitzungen im selben Zeitraum.

## Eine hohe Suchnutzung ist nicht zwangsläufig schlecht

Hier kommt es leicht zu Fehldeutungen. Eine hohe Suchnutzung kann manchmal ein gutes Zeichen sein. Kundschaft, die über die Suche kauft, weiß meist genau, was sie will, und laut dem Baymard Institute ist das eine Gruppe mit hoher Kaufabsicht. Eine Suchleiste, die viel und effektiv genutzt wird, ist ein Pluspunkt.

Das Problem ist, *wonach* die Kundschaft sucht.

Wenn jemand einen sehr konkreten Produktnamen, eine SKU oder eine Marke eintippt — dann ist das gesundes Suchverhalten. Das Menü kann und sollte nicht jeden einzelnen Artikel auflisten.

Aber wenn Kundschaft immer wieder Dinge eintippt, die direkt im Menü sichtbar sein sollten — „weißes Hemd", „Sale", „Neuheiten", „neu" — dann ist das ein Signal, dass das Menü nicht klar genug ist. Die Kundschaft sucht nicht, weil ihr das Suchen Spaß macht. Sie blickt zum Menü hinauf, findet keinen Einstieg und greift zum Suchfeld als Notausgang.

Baymard beschreibt genau dieses Phänomen: Viele „Produkttyp"-Anfragen sind in Wahrheit Kundschaft, die versucht, schneller zu einer Kategorie zu gelangen — oder die das tut, weil sie diese Kategorie über das Hauptmenü nicht gefunden hat. Mit anderen Worten: Die Suchleiste übernimmt Arbeit, die das Menü hätte leisten sollen.

## Deine häufigsten Suchanfragen lesen

Bleib nicht bei der Gesamtzahl stehen. Am wertvollsten sind deine **häufigsten Suchanfragen** — die Liste der meistgesuchten Begriffe, die aus dem Parameter `search_term` stammt.

Druck die Top-30 bis -50-Anfragen aus und leg sie neben dein aktuelles Menü. Frag dich dann Zeile für Zeile: Hat das, was die Kundin eingetippt hat, bereits einen klaren Einstieg im Menü?

Meist tauchen drei Gruppen auf:

- **Entspricht einem Kategorienamen, der bereits im Menü steht.** Die Kundin tippt „Kleid", während das Menü „Röcke" sagt. Sie tippt „Rabatt", während das Menü „Outlet" sagt. Das ist das deutlichste Signal: Die Kategorie *existiert*, aber ihr Name im Menü passt nicht zur Sprache der Kundschaft, sodass sie ihn nicht wiedererkennt und ihn von Hand eintippen muss.
- **Etwas, das du führst, das Menü aber nie erwähnt.** Kundschaft tippt „Geschenke", „große Größen", „Sets" — du hast Ware für diese Gruppe, hast sie aber nicht zu einem eigenen Bereich gemacht. Das ist ein Hinweis, eine neue Kategorie oder einen Filter hinzuzufügen.
- **Etwas, das du nicht verkaufst.** Kundschaft tippt den Namen eines Produkts ein, das du nicht ins Sortiment aufgenommen hast. Diese Gruppe hat nichts mit dem Menü zu tun, ist aber wertvolle Information für den Einkauf.

Die erste Gruppe ist die, die du sofort angehen solltest. Jede Anfrage, die einem Kategorienamen entspricht, steht für eine Kundin, die einen zusätzlichen Schritt machen musste, der gar nicht nötig gewesen wäre.

## Benenne dein Menü in der Sprache deiner Kundschaft

Die Schlussfolgerung ist ganz einfach: Benenne deine Menüpunkte so, wie die Kundschaft darüber spricht, nicht so, wie du — als Händler — es tust.

Händler neigen dazu, Menüs in ihrer eigenen internen Sprache zu benennen: „Frühjahr-/Sommerkollektion", „Premium-Linie", „Gruppe A". Für uns klingt das einleuchtend, weil wir in genau dieser Art zu kategorisieren leben. Die Kundschaft tut das nicht. Sie tippt das ein, was ihr im Kopf herumgeht: „Kurzarmhemd", „hochwertig", „günstig".

Daraus ergibt sich die Regel: Deine häufigsten Suchanfragen sind das Wörterbuch, das deine Kundschaft für dich geschrieben hat. Wenn viele „Sale" eintippen, denk über einen Menüpunkt nach, der schlicht „Sale" heißt — statt „Outlet" oder „Angebote". Wenn viele „Kleid" eintippen, stell „Kleider" nach vorne oder setze es an die Stelle von „Röcke".

Auch das Testen ist behutsam: Ändere ein paar Bezeichnungen und beobachte über die nächsten Wochen, ob die Suchnutzung für genau diese Anfragen zurückgeht. Wenn die Kundschaft etwas nicht mehr suchen muss, das jetzt direkt im Menü steht, weißt du, dass du das Richtige behoben hast.

Der schwierige Teil ist nicht technisch — es geht darum, bereit zu sein, die Bezeichnungen zu ändern. Ein Menü umzubenennen klingt nach einer Kleinigkeit, doch es berührt, wie wir unseren eigenen Shop definieren. Ein Drag-and-drop-Werkzeug wie [Navi+](https://naviplus.io) nimmt diesem Schritt etwas von seinem Unbehagen — du bearbeitest Bezeichnungen, ordnest neu und probierst neue Layouts auf einem Mega Menu oder einer Tab Bar aus, ohne Code und ohne Angst, dein Theme zu beschädigen. Wenn das Ändern einer Bezeichnung günstig ist, hörst du eher auf deine Kundschaft.

Die Suchnutzungsrate ist, richtig gelesen, die Stimme der Kundschaft, die das Menü ausprobiert und für unzureichend befunden hat. Sie ist trotzdem geblieben und hat gesucht. Unsere Aufgabe ist es, zu hören, was sie uns sagt.

---

Dieser Artikel ist Teil des größeren Leitfadens [So erkennst du, ob dein Menü funktioniert — 5 Kennzahlen, die du verfolgen solltest](/de/measuring-menu-performance/).