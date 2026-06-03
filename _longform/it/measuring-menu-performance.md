---
lang: it
ref: measuring-menu-performance
order: 3
title: "Come capire se il tuo menu funziona — 5 metriche che vale la pena monitorare"
description: "Misura le prestazioni del menu con 5 metriche pratiche: CTR, profondità di navigazione, tasso di uscita, comportamento su mobile e ricerca interna — tutte misurabili gratuitamente con GA4 e Clarity."
topic_tag: "Misurazione"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - misurare le prestazioni del menu
  - GA4
  - metriche di navigazione
  - analisi del menu
date: 2026-06-02
child_links:
  - title: "Metrica 1 — Tasso di clic di ogni voce del menu"
    url: "/it/topic/menu-click-through-rate/"
    desc: "Quali voci ricevono clic e quali vengono ignorate."
  - title: "Metrica 2 — Profondità di navigazione"
    url: "/it/topic/navigation-depth-metric/"
    desc: "Quanti passaggi servono per raggiungere un prodotto."
  - title: "Metrica 3 — Tasso di uscita dalle pagine di categoria"
    url: "/it/topic/collection-page-exit-rate/"
    desc: "I clienti arrivano a una categoria e poi se ne vanno senza vedere un prodotto."
  - title: "Metrica 4 — Comportamento di navigazione: mobile vs. desktop"
    url: "/it/topic/mobile-vs-desktop-navigation-behavior/"
    desc: "Lo stesso menu, due mondi molto diversi."
  - title: "Metrica 5 — Tasso di utilizzo della ricerca interna"
    url: "/it/topic/internal-search-usage-rate/"
    desc: "Quando i clienti cercano ciò di cui il menu avrebbe dovuto occuparsi."
---

Molti di noi giudicano il proprio menu a sensazione. Sembra ordinato, ha abbastanza voci, nessuno si lamenta — quindi deve andare bene. Ma c'è una cosa che in pochi notano: i clienti raramente si lamentano di un menu difficile da usare. Non ti scrivono per darti un feedback. Semplicemente cercano in silenzio per un po', non trovano ciò che gli serve e chiudono la scheda.

Per sapere se il tuo menu sta davvero facendo il suo lavoro, l'istinto non basta. Devi guardare a ciò che i clienti fanno realmente: su cosa cliccano, quanto in profondità si spingono, dove si fermano. È questo che significa **misurare le prestazioni del menu** — invece di tirare a indovinare, lasci parlare i dati. La buona notizia è che non devi essere un esperto di analisi. Le cinque metriche qui sotto bastano per iniziare, e la maggior parte di esse è già integrata in strumenti gratuiti come GA4 o Microsoft Clarity.

Questo articolo passa in rassegna ogni metrica: cos'è, perché conta e come leggerla per capire se il tuo menu sta aiutando i clienti o gli sta intralciando il cammino.

## Metrica 1 — Tasso di clic di ogni voce del menu

Il tasso di clic (CTR) di una voce del menu è la percentuale di persone che vedono quella voce e ci cliccano davvero. È la metrica più semplice, eppure è quella che rivela di più, perché ti dice quanta attenzione attira ciascuna voce.

Quando guardi il CTR dell'intero menu nel suo complesso, di solito vedi un quadro disomogeneo. Alcune voci ricevono molti clic, altre quasi nessuno. Una voce con pochissimi clic non è necessariamente inutile — potrebbe essere nel posto sbagliato, avere un nome poco chiaro o essere messa in ombra da altre voci.

Alcune domande che vale la pena porsi leggendo il CTR:

- La voce più importante per il fatturato è tra quelle che ricevono clic frequenti?
- C'è una voce che consideri "secondaria" e che invece riceve sorprendentemente molti clic? I clienti potrebbero averne bisogno più di quanto pensi.
- C'è una voce praticamente morta che però occupa ancora una posizione di rilievo nella barra del menu?

In GA4 puoi monitorare questo dato con eventi di clic associati a ogni link del menu. Se l'aspetto tecnico ti spaventa, Microsoft Clarity offre mappe di calore che mostrano dove le persone cliccano usando soltanto il colore.

Il CTR è anche un buon modo per fare esperimenti. Rinomina una voce, cambia l'ordine o unisci due voci — poi osserva come si spostano i numeri dopo una o due settimane. In un articolo a parte spieghiamo più nel dettaglio come leggere e interpretare il CTR in situazioni specifiche.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/menu-click-through-rate/">Leggi la guida completa → Metrica 1 — Tasso di clic di ogni voce del menu</a></p>

## Metrica 2 — Profondità di navigazione

La profondità di navigazione misura quanti clic servono a un cliente per raggiungere ciò di cui ha bisogno. Un prodotto che si trova a un clic dalla homepage è facile da trovare. Uno che si trova a quattro clic di distanza è un prodotto che la maggior parte dei clienti abbandona prima ancora di arrivarci.

È qui che un menu danneggia silenziosamente le tue vendite. Potresti avere esattamente il prodotto che il cliente desidera, a un buon prezzo, con foto bellissime — ma se è sepolto troppo in profondità, il cliente non lo vede mai. Ogni livello di clic in più è un'altra occasione perché il cliente si distragga, cambi idea o chiuda la pagina.

Nei report sui percorsi di GA4 puoi vedere i tragitti più comuni che le persone seguono a partire dalla homepage. Se i clienti devono fare diversi passaggi tortuosi per arrivare alla pagina di una categoria principale, è un segnale che il tuo menu li sta facendo faticare troppo.

Un consiglio pratico: elenca le cinque pagine più importanti per il fatturato, poi raggiungi ciascuna di esse dalla homepage cliccando e conta i passaggi. Se ne servono più di tre, forse le stai nascondendo troppo bene. Tipi di menu come il Mega Menu su desktop o la Tab Bar in fondo allo schermo su mobile esistono proprio per accorciare questo tragitto — portando le voci importanti a portata di mano del cliente. In un articolo a parte parliamo di come misurare la profondità e ridurla in modo sensato.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/navigation-depth-metric/">Leggi la guida completa → Metrica 2 — Profondità di navigazione</a></p>

## Metrica 3 — Tasso di uscita dalle pagine di categoria

Il tasso di uscita ti dice la percentuale di sessioni che si concludono su una pagina specifica, indipendentemente da come il cliente ci è arrivato. A differenza della frequenza di rimbalzo (che conta solo la prima pagina di una sessione), il tasso di uscita si applica a ogni pagina di una sessione — il che lo rende ideale per esaminare le pagine di categoria.

Perché le pagine di categoria contano? Perché arrivarci significa che il cliente ha già un'intenzione. Ha cliccato "Scarpe da uomo" o "Articoli da cucina" perché voleva vedere quel gruppo. Se la maggior parte di loro se ne va proprio lì senza vedere un solo prodotto, c'è qualcosa che non corrisponde tra ciò che si aspettava e ciò che ha visto.

Alcuni motivi comuni di un tasso di uscita elevato sulle pagine di categoria:

- Il nome della voce del menu promette una cosa, ma la pagina ne offre un'altra.
- La pagina mostra troppo e i clienti non sanno dove guardare.
- Non ci sono filtri, quindi i clienti non possono restringere le loro scelte.
- La pagina si carica lentamente. Secondo Google, la soglia "buona" per il tempo che impiega il contenuto principale a comparire (LCP) è inferiore a 2,5 secondi; molto più lenta di così, e i clienti se ne vanno prima ancora che la pagina finisca di caricarsi.

Una nota nel leggere questo dato: un tasso di uscita elevato non è sempre negativo. Alcune pagine sono punti di arrivo naturali. Ma per una pagina di categoria — dove il cliente dovrebbe proseguire verso i prodotti — un numero alto merita di solito un secondo sguardo. In un articolo a parte approfondiamo come distinguere un tasso di uscita "normale" da uno "allarmante".

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/collection-page-exit-rate/">Leggi la guida completa → Metrica 3 — Tasso di uscita dalle pagine di categoria</a></p>

## Metrica 4 — Comportamento di navigazione: mobile vs. desktop

È la metrica che molti saltano, e spesso ne pagano le conseguenze. Il motivo è semplice: ormai la maggior parte dei clienti arriva da uno smartphone. I dati di settore mostrano che i dispositivi mobili rappresentano la maggioranza del traffico verso i siti di ecommerce — il numero esatto varia parecchio a seconda della fonte e della regione, ma il mobile ha superato il desktop da tempo.

Il problema è che un menu che appare perfetto su uno schermo di laptop può risultare difficilissimo da usare su uno smartphone. Un Mega Menu a più colonne non può essere stipato intero in uno schermo verticale. Un menu hamburger nasconde tutto dietro un'icona — i clienti devono toccarla per vedere. Il Nielsen Norman Group ha dimostrato che i contenuti nascosti dietro un hamburger vengono scoperti e usati meno rispetto a quando rimangono visibili: nascondere la navigazione principale riduce di quasi la metà la probabilità che i clienti la trovino.

Il modo più semplice di leggere questo dato è suddividere i tuoi numeri per dispositivo. In GA4 puoi confrontare i due gruppi fianco a fianco:

| Cosa confrontare | La domanda che solleva |
| --- | --- |
| CTR del menu mobile vs. desktop | Per la stessa voce, viene cliccata molto meno su mobile? |
| Profondità di navigazione | I clienti mobile devono cliccare di più per raggiungere il loro obiettivo? |
| Tasso di conversione per dispositivo | Dove il mobile resta nettamente indietro rispetto al desktop? |

Se il mobile è chiaramente in ritardo, è molto probabile che i pulsanti siano troppo piccoli, si trovino fuori dalla portata del pollice, o che le voci importanti siano sepolte in profondità dietro un menu a scomparsa. Ecco perché molti negozi usano una Tab Bar fissa in fondo allo schermo per il mobile e un Mega Menu per il desktop — due layout diversi per due modi diversi di usare il sito. Uno strumento come [Navi+](https://naviplus.io) ti permette di configurare mobile e desktop separatamente senza codice, così non devi forzare un unico design ad adattarsi a entrambi. Abbiamo scritto un articolo a parte su come confrontare e gestire il divario tra le due piattaforme.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/mobile-vs-desktop-navigation-behavior/">Leggi la guida completa → Metrica 4 — Comportamento di navigazione: mobile vs. desktop</a></p>

## Metrica 5 — Tasso di utilizzo della ricerca interna

L'ultima metrica sembra non avere nulla a che fare con il menu, ma in realtà è lo specchio più fedele di come sta andando il tuo menu. Il tasso di utilizzo della ricerca interna è la percentuale di clienti che usano la casella di ricerca del tuo sito invece di navigare cliccando nel menu.

Un po' di ricerca è normale, anzi positivo — i clienti che usano la ricerca hanno spesso un'intenzione d'acquisto più alta, perché stanno cercando attivamente qualcosa di specifico. Ma se questo tasso si impenna, di solito è il segno che il menu non sta guidando i clienti dove devono andare. Rinunciano al menu perché non li aiuta e si mettono a digitare.

Ancora più rivelatore è ciò che accade dopo la ricerca. Una ricerca del Baymard Institute mostra che la ricerca interna su una larga parte dei siti di ecommerce rende al di sotto di uno standard accettabile. Questo significa che, quando il tuo menu spinge i clienti verso la casella di ricerca, stai scommettendo su uno strumento che tende anch'esso a deluderli.

In GA4, se attivi il monitoraggio della ricerca sul sito, puoi vedere quali parole cercano i clienti. Quella lista è oro. Se molte persone digitano il nome di una categoria che hai già nel menu, quella voce è molto probabilmente nel posto sbagliato o ha un nome difficile da trovare.

Leggi la ricerca interna come un reclamo cortese da parte dei tuoi clienti: "Non sono riuscito a trovarlo nel tuo menu". In un articolo a parte entriamo nel dettaglio su come usare i termini di ricerca per rattoppare il tuo menu.

<p class="lf-readmore"><span class="lf-readmore-kicker">Approfondimento</span><a href="/it/topic/internal-search-usage-rate/">Leggi la guida completa → Metrica 5 — Tasso di utilizzo della ricerca interna</a></p>

## Da dove iniziare

Cinque metriche possono sembrare tante, ma non devi affrontarle tutte in una volta. Se stai appena cominciando, ecco un ordine suggerito:

1. Attiva GA4 e abilita il monitoraggio della ricerca sul sito — richiede pochissimo sforzo e ti dà subito la metrica 5, oltre a una parte delle metriche 2 e 3.
2. Installa Microsoft Clarity per le mappe di calore, che supportano la metrica 1 e ti offrono uno sguardo rapido sul comportamento mobile.
3. Dopo due settimane, siediti e rivedi i numeri in un'unica passata, annotando due o tre cose che sembrano fuori posto.

Non cercare di ottimizzare tutto in un colpo solo. Scegli la metrica più chiara, correggi una cosa, poi aspetta dati freschi. Un menu è qualcosa che si regola gradualmente, non qualcosa che si imposta una volta e si dimentica.

Una cosa da tenere a mente mentre apporti modifiche: ogni volta che cambi il menu, non rendere la pagina più lenta. Secondo Google, le soglie "buone" dei Core Web Vitals sono LCP sotto i 2,5 secondi, INP sotto i 200 millisecondi e CLS sotto 0,1. Un menu bellissimo che fa scattare la pagina o ne sposta il layout durante il caricamento fa più male che bene.

## Riflessioni finali

I numeri non servono a darti un voto o a giudicarti. Servono semplicemente a farti vedere dove i clienti si bloccano — qualcosa che l'occhio e l'istinto faticano a cogliere. Un buon menu non deve essere perfetto fin dal primo giorno; deve essere migliorato gradualmente in base a ciò che i clienti fanno realmente.

Un suggerimento garbato: rivedi il tuo menu ogni tre mesi, oppure ogni volta che aggiungi una nuova categoria. Il modo meno stressante per cominciare è attivare GA4 o installare Microsoft Clarity oggi, lasciarlo lavorare per due settimane, poi tornare a guardare il tuo menu attraverso gli occhi dei dati. Rimarrai sorpreso da ciò che i clienti ti hanno detto in silenzio senza che tu lo abbia mai sentito.