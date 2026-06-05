---
lang: it
ref: fast-menu-app-criteria
title: "Come capire se un'app di menu è davvero veloce: 5 criteri"
description: "Cinque criteri per un'app di menu veloce che puoi verificare da solo: lazy loading, JavaScript leggero, nessun blocco del rendering, CDN e il badge Built for Shopify. Misurati rispetto ai Core Web Vitals."
image: "/images/navigation-and-page-speed/fast-menu-app-criteria.webp"
image_alt: "Come capire se un'app di menu è davvero veloce: 5 criteri"
parent_title: "Navigazione e velocità di pagina — scegliere un'app di menu che non danneggi i Core Web Vitals"
parent_url: "/it/navigation-and-page-speed/"
seo_keywords:
  - criteri app di menu veloce
  - lazy loading
  - CDN
  - Built for Shopify
date: 2026-06-02
---

Il menu è qualcosa che quasi ogni visitatore tocca. Per questo un'app di menu lenta fa sembrare lenta l'intera pagina. Ma "veloce" è una parola vaga. Quando si cerca un'app, sentiamo continuamente affermazioni come "ultraleggera" e "non rallenterà la tua pagina", senza un modo chiaro per verificarle.

Questo articolo raccoglie cinque **criteri per un'app di menu veloce** che puoi controllare da solo, anche senza essere una persona tecnica. Sono le cose che ho imparato dopo aver gestito un negozio per un po' di tempo e dopo aver riletto la documentazione di Google e di Shopify.

Un punto di riferimento prima di iniziare. Google misura l'esperienza di caricamento della pagina con l'insieme dei Core Web Vitals, dove le soglie "buone" sono LCP sotto i 2,5 secondi, INP sotto i 200 millisecondi e CLS sotto lo 0,1 ([web.dev](https://web.dev/articles/vitals)). Una buona app di menu è quella che non peggiora questi numeri.

## 1. Lazy loading: caricare solo quando serve

Il lazy loading significa che l'app non carica tutto nel momento in cui la pagina si apre. Tutto ciò che non serve ancora resta in attesa e si carica solo quando un visitatore passa con il mouse o fa clic.

Un mega menu da desktop può contenere decine di voci, insieme a icone e miniature. Se l'app prova a caricare tutto in anticipo, entra in competizione per le risorse con il contenuto principale che il visitatore vuole davvero vedere, come immagini di prodotto e prezzi. Con il lazy loading, il livello del sottomenu compare solo quando il visitatore ci passa effettivamente sopra con il mouse.

Come verificarlo: apri la pagina su un computer e nota se il menu esita per un istante quando si apre. Una piccola pausa al primo passaggio del mouse è di solito segno che l'app si carica al momento giusto, invece di ammassare tutto fin dall'inizio. Questo conta soprattutto per i negozi con molte categorie, come i negozi generalisti o i negozi di moda con molte linee di prodotto.

## 2. JavaScript leggero

È il criterio più difficile da giudicare a occhio, ma vale la pena chiederlo al fornitore. L'idea è semplice: un menu non dovrebbe trascinarsi dietro un intero framework pesante solo per mostrare qualche link.

JavaScript è la parte "in esecuzione" dell'app. Più grande è il bundle JavaScript, più tempo il browser impiega a caricarlo ed elaborarlo, cosa che incide direttamente sull'INP, ovvero la reattività quando un visitatore fa clic. Un'app di menu scritta in modo leggero porta con sé solo il codice necessario per aprire e chiudere il menu, niente di più.

Non serve leggere il codice per giudicarlo. Fai analizzare la pagina con [PageSpeed Insights](https://pagespeed.web.dev/) di Google e guarda la sezione del JavaScript inutilizzato. Se questa parte si gonfia in modo evidente dopo aver installato l'app di menu, è un segnale per pensarci due volte.

È anche il motivo per cui un'app che fa bene una cosa sola è di solito più leggera di un'app che cerca di farne una dozzina. Più cose ci infili dentro, più è difficile mantenere leggero il bundle JavaScript.

## 3. Nessun blocco del rendering

Il blocco del rendering si verifica quando lo script dell'app impedisce al browser di disegnare il contenuto principale sullo schermo. Il visitatore deve aspettare che l'app di menu finisca di caricarsi prima che il resto della pagina compaia.

Secondo la documentazione di Google, uno script caricato nel modo predefinito impedirà al browser di analizzare e visualizzare la pagina finché quello script non avrà finito di caricarsi, essere letto ed eseguito ([web.dev](https://web.dev/articles/render-blocking-resources)). Questo posticipa traguardi come il First Contentful Paint e l'LCP. In altre parole, un'app di menu collocata nel punto sbagliato può lasciare lo schermo vuoto più a lungo, anche se il menu in sé non è nulla di complicato.

Un'app ben costruita carica il suo script in modo asincrono (async o defer), così la pagina mostra prima il contenuto principale e il menu si aggancia dopo, con un ritardo che il visitatore quasi non percepisce. Questo punto è difficile da verificare da soli, ma PageSpeed Insights ha un avviso specifico sulle "risorse che bloccano il rendering", e puoi confrontare il punteggio prima e dopo aver installato l'app.

## 4. Risorse servite tramite CDN

Una CDN è una rete di server distribuiti in molti luoghi del mondo. Quando le icone, le immagini e i file del menu vengono serviti tramite una CDN, sono prelevati dal server più vicino al visitatore, così si caricano in modo rapido e uniforme in ogni regione.

È un aspetto concreto per i commercianti vietnamiti che puntano a clienti internazionali. Se i file del menu si trovano su un unico server collocato lontano, i visitatori in Europa o negli Stati Uniti aspetteranno più a lungo per ogni piccola icona. Con una CDN, quella distanza si accorcia.

È anche facile da chiedere al fornitore: da dove vengono servite le icone e le immagini del menu? Un'app seria saprà rispondere, e spesso porterà come punto a favore l'uso di una CDN. Su Shopify la maggior parte delle risorse passa attraverso l'infrastruttura CDN integrata, ma vale comunque la pena controllare le immagini e le icone che l'app di menu stessa carica.

## 5. Il badge "Built for Shopify"

Se usi Shopify e preferisci non controllare da solo ogni criterio tecnico qui sopra, il badge **Built for Shopify** è una scorciatoia affidabile. È un'etichetta che Shopify assegna alle app che soddisfano i suoi standard di qualità, e Shopify valuta in modo piuttosto rigoroso.

Ciò che colpisce è che questo insieme di criteri include una parte sulle prestazioni, ricavata direttamente dai Core Web Vitals. Secondo la [documentazione di Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements), un'app deve raggiungere un LCP di 2,5 secondi o meno, un CLS di 0,1 o meno e un INP di 200 millisecondi o meno, misurati al 75° percentile dei caricamenti. Oltre a questo, l'app non deve abbassare il punteggio prestazionale Lighthouse del negozio di più di 10 punti.

In altre parole, un'app con questo badge significa che ha già superato una parte della verifica tecnica che altrimenti dovresti fare tu stesso. Il badge non sostituisce la misurazione sul tuo negozio, ma restringe la rosa molto in fretta.

Tra le app di menu, [Navi+](https://naviplus.io) ha il badge "Built for Shopify" ed è ottimizzata secondo i criteri qui sopra: si carica in modo leggero, non blocca il rendering ed evita di spostare il layout quando il menu compare. Navi+ può creare una Tab Bar in basso per il mobile, un Mega Menu, uno Slide Menu, un FAB e un Grid Menu, con configurazioni separate per mobile e desktop, senza bisogno di codice. La cito qui perché è un esempio vicino ai cinque punti appena discussi, non per dire che sia l'unica opzione.

## Riunire tutto in un'abitudine di verifica

I cinque criteri qui sopra si riducono a poche piccole cose che puoi fare in dieci minuti:

- Passa il mouse sul menu e osserva se esita perché carica tutto in una volta (lazy loading).
- Esegui PageSpeed Insights prima e dopo aver installato l'app, e confronta il JavaScript inutilizzato e gli avvisi sul blocco del rendering.
- Chiedi al fornitore se usa una CDN per icone e immagini.
- Preferisci le app con il badge "Built for Shopify" se vendi su Shopify.

Un negozio di solito installa molte app, e ognuna aggiunge un po' alla velocità complessiva. Poiché il menu compare su quasi ogni pagina, è un punto su cui vale la pena essere un po' più esigenti. Scegliere bene fin dall'inizio ti risparmia di dover disinstallare e reinstallare in seguito.

Questo articolo fa parte della guida più ampia su [Navigazione e velocità di pagina — scegliere un'app di menu che non danneggi i Core Web Vitals](/it/navigation-and-page-speed/).