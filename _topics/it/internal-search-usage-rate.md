---
lang: it
ref: internal-search-usage-rate
title: "Metrica 5 — Tasso di utilizzo della ricerca interna"
description: "Cos'è il tasso di utilizzo della ricerca, come misurarlo con GA4 e come leggere le query di ricerca più frequenti per dare ai voci del menu il nome che usano i tuoi clienti e ridurre quante volte devono cercare da soli nel negozio."
image: "/images/measuring-menu-performance/internal-search-menu-gaps.webp"
image_alt: "Metrica 5 — Tasso di utilizzo della ricerca interna"
parent_title: "Come capire se il tuo menu funziona — 5 metriche da monitorare"
parent_url: "/it/measuring-menu-performance/"
seo_keywords:
  - tasso di utilizzo della ricerca
  - view_search_results
  - query di ricerca più frequenti
date: 2026-06-02
---

Di tutte le metriche per valutare la salute di un menu, questa è quella che si tende a trascurare di più. Il **tasso di utilizzo della ricerca** — la quota di clienti che usa la barra di ricerca invece del menu per arrivare dove ha bisogno — racconta una storia che le metriche sui clic del menu non possono raccontare: la porzione di clienti che ha silenziosamente aggirato il tuo menu.

La barra di ricerca e il menu sembrano due cose distinte. In realtà sono due facce della stessa domanda: il cliente ha trovato ciò che cercava, e in che modo?

## Cos'è il tasso di utilizzo della ricerca

In parole semplici, è la quota di sessioni con almeno una ricerca interna, divisa per il totale delle sessioni. Se 100 persone visitano il negozio e 18 di esse digitano nella casella di ricerca, il tuo tasso di utilizzo della ricerca è intorno al 18%.

Non esiste un livello "corretto" in assoluto per questo numero. Secondo il Baymard Institute, la quota di clienti che preferisce cercare piuttosto che navigare nel menu varia moltissimo a seconda del negozio e del tipo di prodotto: un negozio di moda con poche centinaia di modelli è ben diverso da un negozio di componentistica elettronica con decine di migliaia di SKU.

Quindi non confrontare il tuo numero con un benchmark generale. Confrontalo con te stesso nel tempo e, cosa più importante, leggi *cosa* cercano i clienti.

## Come misurare il tasso di utilizzo della ricerca con GA4

Per iniziare non devi fare quasi nulla. GA4 dispone della Misurazione avanzata, attiva per impostazione predefinita. Quando è abilitata, GA4 attiva automaticamente l'evento **view_search_results** ogni volta che un cliente effettua una ricerca.

Ecco come funziona: GA4 riconosce una ricerca da un parametro nell'URL della pagina dei risultati. Per impostazione predefinita cerca i parametri `q`, `s`, `search`, `query` e `keyword`. Se l'URL dei tuoi risultati di ricerca è del tipo `?q=camicia-bianca`, tutto funziona da subito.

Su Shopify, l'URL di ricerca predefinito usa `?q=`, quindi `view_search_results` di solito inizia a contare senza alcuna modifica. Se il tuo negozio usa un parametro insolito, ti basta aggiungerlo alle impostazioni del flusso di dati in GA4.

Per vedere i dati, vai su Report → Coinvolgimento → Eventi e cerca l'evento **view_search_results**. Aprilo e troverai il parametro `search_term`, ovvero l'elenco delle parole chiave digitate dai clienti. Per calcolare il tasso, prendi il numero di sessioni con `view_search_results` e dividilo per il totale delle sessioni nello stesso periodo.

## Un utilizzo elevato della ricerca non è necessariamente un male

È qui che è facile interpretare male le cose. Un utilizzo elevato della ricerca può talvolta essere un buon segno. I clienti che acquistano tramite ricerca di solito sanno esattamente cosa vogliono e, secondo il Baymard Institute, è un gruppo con un'alta intenzione d'acquisto. Una barra di ricerca usata molto, e usata in modo efficace, è una risorsa.

Il punto è *cosa* cercano i clienti.

Se un cliente digita il nome molto specifico di un prodotto, uno SKU o un marchio, è un comportamento di ricerca sano. Il menu non può, e non deve, elencare ogni singolo articolo.

Ma se i clienti continuano a digitare cose che dovrebbero essere visibili direttamente nel menu — "camicia bianca", "saldi", "nuovi arrivi", "novità" — è un segnale che il menu non è abbastanza chiaro. I clienti non cercano perché gli piace cercare. Alzano lo sguardo verso il menu, non trovano un punto d'accesso e ripiegano sulla casella di ricerca come via di fuga.

Baymard descrive proprio questo fenomeno: molte query relative al "tipo di prodotto" sono in realtà clienti che cercano di raggiungere una categoria più velocemente, oppure lo fanno perché non sono riusciti a trovare quella categoria attraverso il menu principale. In altre parole, la barra di ricerca sta svolgendo un lavoro che avrebbe dovuto fare il menu.

## Leggere le query di ricerca più frequenti

Non fermarti al numero complessivo. La parte più preziosa sono le tue **query di ricerca più frequenti** — l'elenco delle parole chiave più cercate, ricavato dal parametro `search_term`.

Stampa le 30-50 query più frequenti e mettile accanto al tuo menu attuale. Poi chiediti, riga per riga: ciò che il cliente ha digitato ha già un punto d'accesso chiaro nel menu?

Di solito emergono tre gruppi:

- **Corrisponde al nome di una categoria già presente nel menu.** Il cliente digita "vestito" mentre il menu dice "Gonne". Il cliente digita "sconto" mentre il menu dice "Outlet". Questo è il segnale più chiaro: la categoria *esiste*, ma il suo nome nel menu non corrisponde al linguaggio usato dai clienti, quindi non la riconoscono e devono digitarla a mano.
- **Qualcosa che vendi ma che il menu non menziona mai.** I clienti digitano "regali", "taglie forti", "completi coordinati" — hai merce per questo gruppo ma non ne hai fatto una sezione a sé. È un suggerimento ad aggiungere una nuova categoria o un filtro.
- **Qualcosa che non vendi.** I clienti digitano il nome di un prodotto che non hai inserito a catalogo. Questo gruppo non ha nulla a che fare con il menu, ma è un dato prezioso per gli acquisti.

Il primo gruppo è quello da sistemare subito. Ogni query che corrisponde al nome di una categoria è un cliente che ha dovuto compiere un passaggio in più di cui non avrebbe avuto bisogno.

## Dai al tuo menu il nome nel linguaggio dei clienti

La conclusione è molto semplice: rinomina le voci del menu nel modo in cui le chiamano i clienti, non nel modo in cui le chiami tu, il commerciante.

I commercianti tendono a dare ai menu il nome del loro linguaggio interno: "Collezione Primavera/Estate", "Linea Premium", "Gruppo A". A noi suona bene perché viviamo dentro quel modo di categorizzare. I clienti no. I clienti digitano ciò che hanno in testa: "camicia a maniche corte", "di fascia alta", "economico".

Ne emerge una regola: le tue query di ricerca più frequenti sono il dizionario che i tuoi clienti hanno scritto per te. Se molte persone digitano "saldi", valuta una voce di menu chiamata semplicemente "Saldi" invece di "Outlet" o "Offerte". Se molte persone digitano "vestito", metti "Vestiti" per primo, o usalo al posto di "Gonne".

Anche la verifica è delicata: cambia qualche etichetta, poi osserva nelle settimane successive se l'utilizzo della ricerca per quelle precise query cala. Se i clienti smettono di dover cercare qualcosa che ora si trova direttamente nel menu, sai di aver risolto la cosa giusta.

La parte difficile non è tecnica — è la disponibilità a cambiare le etichette. Rinominare un menu sembra una cosa da poco, ma tocca il modo in cui definiamo il nostro stesso negozio. Uno strumento drag-and-drop come [Navi+](https://naviplus.io) toglie parte di questo disagio: modifichi le etichette, riordini e provi nuovi layout su un Mega Menu o una Tab Bar senza codice e senza paura di rompere il tema. Quando cambiare un'etichetta costa poco, sarai più disposto ad ascoltare i tuoi clienti.

Il tasso di utilizzo della ricerca, letto nel modo giusto, è la voce dei clienti che hanno provato il menu e l'hanno trovato carente. Sono rimasti e hanno cercato comunque. Il nostro compito è ascoltare ciò che ci stanno dicendo.

---

Questo articolo fa parte della guida più ampia su [Come capire se il tuo menu funziona — 5 metriche da monitorare](/it/measuring-menu-performance/).