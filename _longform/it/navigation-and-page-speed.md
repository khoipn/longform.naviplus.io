---
lang: it
ref: navigation-and-page-speed
order: 5
title: "Navigazione e velocità della pagina — Come scegliere un'app menu che non danneggi i Core Web Vitals"
description: "Come scegliere un'app menu compatibile con i Core Web Vitals che non rallenti il tuo negozio Shopify: capire LCP, INP, CLS, cosa rende veloce un'app e una checklist per misurare da solo prima di installare — senza scrivere codice."
topic_tag: "Velocità"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - app menu Core Web Vitals
  - velocità di caricamento pagina
  - velocità pagina
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "Cosa sono i Core Web Vitals e perché contano per te"
    url: "/it/topic/core-web-vitals-explained/"
    desc: "LCP, INP, CLS — i tre numeri che Google guarda."
  - title: "Come un'app menu influisce sulla velocità — e come accorgersene"
    url: "/it/topic/how-menu-apps-affect-page-speed/"
    desc: "JavaScript pesante, blocco del rendering, spostamento del layout."
  - title: "Cosa rende buona un'app menu sul fronte velocità"
    url: "/it/topic/fast-menu-app-criteria/"
    desc: "Cinque cose da controllare prima di fidarti di un'app."
  - title: "Una checklist prima di installare qualsiasi app menu"
    url: "/it/topic/menu-app-installation-checklist/"
    desc: "Misura prima, misura dopo, osserva per qualche settimana."
---

Ogni app che aggiungi al tuo negozio inietta un po' di codice nelle tue pagine. Un'app menu è una delle prime cose a caricarsi, perché i clienti hanno bisogno di vedere la navigazione nell'istante in cui una pagina si apre. Quindi il rapporto tra un'**app menu** e i **Core Web Vitals** non è una preoccupazione tecnica lontana — tocca direttamente la primissima impressione del tuo cliente.

Ecco ciò che è facile trascurare: un menu bello che si carica lentamente a volte può essere peggio di niente. I clienti non vedono il codice; vedono solo una pagina che balbetta, contenuti che saltano qua e là, o un menu che toccano e che non risponde. Questo articolo raccoglie ciò che ho imparato dopo aver gestito il mio negozio e misurato le cose molte volte — non per spaventarti sul tema della velocità, ma per darti elementi sufficienti su cui basarti quando scegli un'app menu, senza sacrificare l'esperienza.

<div class="lf-key">
  <span class="lf-key-title">Lettura rapida</span>
  <ul>
    <li>Una menu app influenza la prima cosa che il cliente usa: la navigazione.</li>
    <li>Core Web Vitals mostra caricamento lento, tap lag e layout shift.</li>
    <li>Misura prima e dopo invece di fidarti delle promesse.</li>
  </ul>
</div>

## Cosa sono i Core Web Vitals e perché contano per te

I Core Web Vitals sono le tre metriche che Google usa per misurare l'esperienza reale di caricamento di una pagina. Non sono punteggi di laboratorio — sono dati raccolti dai tuoi clienti reali.

Le tre metriche sono:

- **LCP (Largest Contentful Paint)** — quanto tempo impiega a comparire l'elemento di contenuto più grande. Google considera buono un valore di 2,5 secondi o meno.
- **INP (Interaction to Next Paint)** — il ritardo quando un cliente fa clic o tocca. Buono è sotto i 200 millisecondi.
- **CLS (Cumulative Layout Shift)** — quanto i contenuti saltano mentre la pagina si carica. Buono è sotto 0,1.

Un dettaglio spesso frainteso: Google misura al 75° percentile. Significa che il 75% delle visite deve raggiungere il livello "buono" prima che una pagina venga considerata sufficiente. Una media gradevole non ti salva se un quarto dei tuoi clienti vive un'esperienza scadente.

Perché un commerciante dovrebbe preoccuparsene? Per due ragioni. La prima: è uno dei segnali di ranking di Google, anche se non il più importante. La seconda, e più rilevante: riflette come si sentono davvero i clienti. Ogni piccolo attrito in cima al funnel — incluso una pagina lenta a caricarsi — si somma.

La buona notizia è che non ti serve conoscere alcun codice per leggere questi tre numeri. Sono disponibili, gratuiti e spiegati in modo abbastanza chiaro.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/core-web-vitals-explained/">Leggi la guida completa → Cosa sono i Core Web Vitals e perché contano per te</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/core-web-vitals-menu-app.webp" alt="Core Web Vitals for a Shopify menu app showing LCP INP and CLS speed metrics" title="Core Web Vitals for menu app speed">
  <figcaption>Core Web Vitals turn loading speed into three numbers merchants can measure.</figcaption>
</figure>

## Come un'app menu influisce sulla velocità — e come accorgersene

La maggior parte delle app su Shopify funziona iniettando JavaScript nello storefront. Un'app menu non fa eccezione. Questo di per sé non è un male — il problema è come quel codice viene caricato e quando viene eseguito.

Quando uno script viene caricato in modo che blocca il rendering, il browser deve scaricarlo, leggerlo e finire di eseguirlo prima di poter costruire il resto della pagina. Un'app menu rientra in pieno nel gruppo che con buona probabilità causa problemi, perché deve comparire presto, proprio in cima alla pagina.

Ci sono tre modi in cui un'app menu può rallentare le cose o peggiorare l'esperienza:

- **Spingere l'LCP più in alto** quando il menu è una parte ampia di ciò che sta in cima alla pagina e deve aspettare che lo script finisca prima di mostrarsi.
- **Alzare l'INP** quando ogni tocco sul menu deve aspettare che il JavaScript lo elabori, facendolo sembrare lento.
- **Aumentare il CLS** quando il menu (specialmente una barra superiore o una tab bar in basso) compare in ritardo e spinge altri contenuti fuori posto.

Segnali che puoi cogliere a occhio nudo, senza alcuno strumento:

- Il menu compare visibilmente più tardi rispetto al corpo della pagina.
- La pagina si sposta o sobbalza nell'istante in cui il menu compare.
- Tocchi il menu e devi aspettare un attimo prima che si apra.
- Su mobile, la tab bar in basso lampeggia o cambia posizione durante il caricamento.

Vedere questi segnali non significa che l'app menu sia l'unica responsabile — ma vale la pena misurare prima e dopo averla rimossa.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/how-menu-apps-affect-page-speed/">Leggi la guida completa → Come un'app menu influisce sulla velocità — e come accorgersene</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-speed-impact.webp" alt="Menu app speed impact showing delayed navigation tap lag and layout shift" title="How menu apps affect page speed">
  <figcaption>A menu app can hurt speed when scripts delay the menu, lag taps, or shift layout.</figcaption>
</figure>

## Cosa rende buona un'app menu sul fronte velocità

Una volta capito come un'app menu influisce sulle cose, sceglierne una diventa più facile. Qui sotto trovi i criteri che secondo me vale la pena pesare, più o meno in ordine di importanza.

**Si carica leggera e non blocca il rendering.** Un'app dovrebbe caricare il suo codice con defer o async, così che il menu non costringa la pagina ad aspettare. Non puoi verificarlo direttamente, ma il risultato emerge nei tuoi punteggi di velocità prima e dopo l'installazione.

**Riserva uno spazio stabile e non causa spostamenti del layout.** Una buona app menu dovrebbe mettere da parte in anticipo lo spazio per il menu, così il CLS non aumenta. È un aspetto molto spesso trascurato, soprattutto con tab bar fisse e barre di navigazione sticky in cima.

**Ha il badge Built for Shopify.** È un segnale affidabile. Per ottenere il badge **Built for Shopify**, un'app non deve far calare il punteggio Lighthouse dello storefront di più di dieci punti, secondo i requisiti pubblicati da Shopify. Non è una garanzia di perfezione, ma dimostra che l'app ha superato una soglia minima sul fronte della velocità.

**Configurazione separata per mobile e desktop.** Un menu leggero usato nel contesto sbagliato non è comunque una buona cosa. Poter impostare una tab bar per il mobile e un mega menu per il desktop significa non dover comprimere tutto in un unico design.

**Resta stabile quando cambi tema.** Se il menu è archiviato indipendentemente dal tema, non devi ricostruirlo ogni volta che cambi design — ed eviti il rischio che si accumuli codice residuo durante il passaggio.

Un rapido confronto tra una tipica app menu "pesante" e una ottimizzata:

| Aspetto | App che ignora la velocità | App ottimizzata per la velocità |
|---|---|---|
| Come si carica il codice | Blocca il rendering | Defer / async |
| Effetto sul CLS | Spesso sposta il layout | Riserva uno spazio stabile |
| Built for Shopify | Di solito assente | Ha il badge |
| Configurazione per dispositivo | Un unico design condiviso | Mobile e desktop separati |

Navi+ è costruito proprio secondo queste linee: creare menu senza codice, configurazione separata per mobile e desktop, menu che restano al loro posto quando cambi tema, e l'app possiede un badge Built for Shopify. Puoi dare un'occhiata a [naviplus.io](https://naviplus.io). Anche così, ti incoraggio comunque a misurare sul tuo negozio invece di fidarti del marketing — incluso il nostro.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/fast-menu-app-criteria/">Leggi la guida completa → Cosa rende buona un'app menu sul fronte velocità</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-menu-app-criteria.webp" alt="Fast Shopify menu app criteria including defer code stable layout and Built for Shopify badge" title="Fast menu app criteria for Shopify">
  <figcaption>A speed-friendly menu app loads light, reserves stable space, and supports each device separately.</figcaption>
</figure>

## Una checklist prima di installare qualsiasi app menu

Questa parte è un insieme di passi pratici che puoi compiere in circa quindici minuti, senza competenze tecniche.

1. **Misura prima il tuo punto di partenza.** Apri PageSpeed Insights, incolla l'URL della tua homepage e di una pagina prodotto, e annota i tuoi attuali LCP, INP e CLS. Questo è il tuo punto di riferimento per il confronto.
2. **Installa l'app menu in modalità di prova.** La maggior parte delle app offre un periodo di prova. Costruisci il menu nel modo in cui intendi davvero usarlo — non configurarlo a metà.
3. **Misura di nuovo le stesse pagine.** Confronta le tre metriche con il tuo punto di partenza. Piccole differenze sono normali; una grande differenza in CLS o LCP è un segnale per guardarci una seconda volta.
4. **Controlla a occhio su un telefono vero.** Carica la pagina su 4G se puoi. Osserva se il menu compare in ritardo, sposta il layout o reagisce con un attimo di ritardo quando lo tocchi.
5. **Guarda il badge e le recensioni.** Prediligi app con Built for Shopify e recensioni che parlano di velocità in termini concreti.
6. **Rimuovila in modo pulito se non la tieni.** Se decidi di non tenerla, assicurati che l'app rimuova tutto il codice che ha iniettato, poi misura di nuovo per confermare che i tuoi punteggi tornino al punto di partenza.

Una nota sulle abitudini: non installare più app menu insieme per confrontarle. Il loro codice può sovrapporsi e falsare le tue misurazioni. Provale una alla volta, rimuovendo ciascuna in modo pulito prima di testare la successiva.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/menu-app-installation-checklist/">Leggi la guida completa → Una checklist prima di installare qualsiasi app menu</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/menu-app-installation-checklist.webp" alt="Menu app installation checklist for measuring PageSpeed before and after install" title="Menu app installation speed checklist">
  <figcaption>Measure before and after installation so a menu app cannot hide its speed cost.</figcaption>
</figure>

## Una parola sulla navigazione, non solo sulla velocità

La velocità conta, ma serve un obiettivo più grande: aiutare i clienti a trovare ciò di cui hanno bisogno. Un menu veloce che nasconde tutta la navigazione non risolve nulla.

Uno studio del Nielsen Norman Group con 179 utenti ha rilevato che nascondere la navigazione riduceva la rilevabilità quasi della metà, rendendo al contempo i clienti più lenti ad agire e facendo sembrare più difficile trovare le cose. La lezione è abbastanza semplice: se non sei obbligato a nasconderla, non farlo.

È per questo che, su mobile, una tab bar in basso tende a funzionare meglio di un semplice menu hamburger — le voci principali sono sempre a portata di mano, senza dover aprire nulla per vederle. Velocità e buona navigazione vanno insieme; scegliere un'app menu significa scegliere entrambe nello stesso momento.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/fast-findable-navigation.webp" alt="Fast and findable mobile navigation comparing hidden hamburger menu with visible tab bar" title="Fast navigation also needs discoverability">
  <figcaption>A fast menu still has to keep important paths visible and easy to reach.</figcaption>
</figure>
## Da dove cominciare

<figure>
  <img src="https://cdn.naviplus.app/longform/images/navigation-and-page-speed/pagespeed-baseline-menu-app.webp" alt="PageSpeed baseline comparison before and after installing a Shopify menu app" title="PageSpeed baseline before menu app install">
  <figcaption>A baseline makes it clear whether a new menu app improved or hurt the experience.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Prima baseline</span>Salva i punteggi PageSpeed prima dell’app e confronta le stesse pagine dopo.</p>

La velocità non è un problema solo per gli sviluppatori. Come commerciante, sei perfettamente in grado di verificarla da solo e prendere una decisione ben fondata. Non hai bisogno di leggere una sola riga di codice per sapere se un'app menu sta rallentando il tuo negozio — devi solo sapere dove guardare.

Uno strumento gratuito come PageSpeed Insights è sufficiente per partire. Misura oggi i punteggi del tuo negozio, salvali come punto di partenza, poi confronta dopo aver provato una nuova app menu. I numeri ti diranno più di qualsiasi affermazione di marketing — incluse quelle di chi ha scritto questo articolo.
