---
lang: it
ref: collection-page-exit-rate
title: "Metrica 3 — Tasso di uscita dalla pagina di collezione"
description: "Un alto tasso di uscita dalla pagina di collezione deriva spesso da etichette del menu che non corrispondono a ciò che la pagina mostra. Come misurarlo con le Esplorazioni di GA4 e come rivedere e correggere il menu per non perdere i clienti."
image: "/images/measuring-menu-performance/category-page-exit-rate.webp"
image_alt: "Metrica 3 — Tasso di uscita dalla pagina di collezione"
parent_title: "Come capire se il tuo menu funziona — 5 metriche da tenere d'occhio"
parent_url: "/it/measuring-menu-performance/"
seo_keywords:
  - tasso di uscita pagina di collezione
  - pagina di collezione
  - GA4
date: 2026-06-02
---

Questa è la terza metrica della serie di cinque e racconta una storia molto diversa dalle prime due. Prima ci chiedevamo: "il cliente ha cliccato sul menu?". Ora la domanda è: dopo aver cliccato ed essere arrivato sulla pagina di collezione, prosegue oppure abbandona il sito?

Misurare il **tasso di uscita dalla pagina di collezione** ti permette di vedere con precisione dove si verifica la rottura. Quando un cliente si prende la briga di raggiungere una pagina di collezione e poi se ne va comunque, di solito non è perché ha perso interesse all'acquisto. Di solito è perché ciò che vede non corrisponde a ciò che si aspettava quando ha cliccato sul menu. E molto spesso la causa di fondo è il modo in cui abbiamo nominato la voce di menu.

## Che cos'è il tasso di uscita dalla pagina di collezione

Il tasso di uscita è la percentuale di sessioni che terminano su una determinata pagina, calcolata come numero di uscite diviso il numero di visualizzazioni di quella pagina. Qualsiasi pagina in cui un cliente guarda e poi abbandona il sito senza visualizzare un'altra pagina conta come uscita.

Applicato alla pagina di collezione, il significato è molto concreto. Un cliente arriva su una pagina di collezione — diciamo "Giacche da uomo" o "Accessori da cucina" — poi non clicca su alcun prodotto, non applica alcun filtro, non passa ad altre categorie e chiude la scheda. Questa è un'uscita dalla pagina di collezione.

È utile distinguerlo dalla frequenza di rimbalzo. Un rimbalzo è un cliente che entra e se ne va senza interagire affatto, di solito conteggiato sulla prima pagina da cui è entrato. L'uscita è un concetto più ampio: il cliente potrebbe aver già visto qualche pagina, ma la pagina di collezione è l'ultima che ha visto prima di andarsene. Per la pagina di collezione, il tasso di uscita è il dato più interessante, perché ti dice che il cliente si è "bloccato" mentre navigava e non è riuscito a proseguire verso un prodotto.

## Come misurare il tasso di uscita dalla pagina di collezione in GA4

C'è un piccolo intoppo che vale la pena segnalare subito. In GA4, Google ha nascosto le metriche Uscite e Tasso di uscita dai Report standard. Se apri direttamente il report Pagine e schermate, non troverai più lì una colonna Tasso di uscita. Questo è diverso dal vecchio Universal Analytics, quindi molti la cercano senza mai trovarla.

Il modo per ottenerla è usare le Esplorazioni, con questi brevi passaggi:

- Vai su **Esplora** nella barra laterale sinistra e scegli un report **Formato libero**.
- Aggiungi la dimensione **Percorso pagina e classe schermata**.
- Aggiungi due metriche: **Visualizzazioni** e **Uscite**.
- Filtra il percorso sulla porzione di URL delle tue pagine di collezione. Su Shopify, le pagine di collezione di solito hanno l'aspetto `/collections/...`, quindi filtra il percorso pagina in modo che contenga `/collections/`.

GA4 non include una colonna Tasso di uscita in questa tabella per impostazione predefinita, quindi lo calcoli da solo dividendo le Uscite per le Visualizzazioni di ogni pagina. Una categoria con 1.000 visualizzazioni e 300 uscite ha un tasso di uscita del 30%. Il modo più rapido è esportare in Google Sheets e aggiungere una colonna di divisione.

Non fissarti sul numero assoluto, perché ogni settore è diverso. Un esercizio più utile è confrontare le tue categorie tra loro e con la media del tuo stesso store. La categoria il cui tasso di uscita si distingue chiaramente dalle altre è quella da esaminare.

## Come leggerlo: perché le uscite sono alte sulla pagina di collezione

Quando una pagina di collezione ha un tasso di uscita insolitamente alto, la causa rientra di solito in uno di due gruppi.

**Primo gruppo — il cliente è atterrato nel posto sbagliato.** Ha cliccato su una voce di menu aspettandosi di vedere A, ma la pagina mostra B. Per esempio, il menu dice "Saldi" ma cliccandoci non si vede altro che merce a prezzo pieno. Oppure il menu dice "Nuovi arrivi" mentre la pagina mostra ancora gli stili della stagione passata. Il cliente non ha torto; è semplicemente deluso e se ne va. In questo caso la pagina di collezione si prende la colpa di una voce di menu etichettata male.

**Secondo gruppo — la pagina di collezione è poco invitante o difficile da usare.** È la categoria giusta, ma all'interno ci sono solo una manciata di prodotti, le foto sono di scarsa qualità, non c'è modo di filtrare per taglia o prezzo, oppure la pagina si carica lentamente. Il cliente resta bloccato a livello di categoria e non riesce a scendere più in profondità verso una pagina prodotto — magari perché i prodotti sono organizzati in modo disordinato o il layout della pagina è confuso.

Questi due gruppi richiedono correzioni diverse. Il secondo gruppo è un lavoro per la pagina di collezione: riorganizzare i prodotti, aggiungere filtri, alleggerire la pagina. Il primo gruppo — molto comune e spesso trascurato — è un lavoro per il menu. Ed è qui che voglio soffermarmi un po' più a lungo.

## Il legame con il menu: etichette che non corrispondono alla pagina

Una pagina di collezione raramente attira traffico da sola. La maggior parte delle visite a una pagina di collezione arriva da un singolo clic sul menu. Questo significa che l'etichetta del menu è la prima promessa che fai al cliente. La pagina di collezione è il punto in cui mantieni quella promessa oppure la tradisci.

Il divario tra la promessa e la realtà è dove nascono le uscite. Alcune situazioni familiari ai commercianti:

- Il menu dice "Sconto 50%", il cliente clicca aspettandosi forti ribassi, ma la pagina mescola articoli scontati del 10% con altri a prezzo pieno.
- Il menu ha ancora "Collezione di Natale" lì appesa dopo le feste; cliccandoci si arriva a una pagina quasi vuota.
- Il menu desktop e il menu mobile portano a due pagine diverse, una con prodotti disponibili e una esaurita.
- L'etichetta usa termini interni ("Collezione P/E") mentre i clienti sono abituati a cercare "Vestiti" o "Camicie".

In ogni caso, il cliente non ha fatto nulla di sbagliato. Si è fidato delle parole sul menu, ha cliccato, ha scoperto che non era quello che cercava e se ne è andato. Il tasso di uscita di quella pagina di collezione sale, ed è facile per noi interpretarlo male come "la pagina di collezione ha un problema" e correggere la cosa sbagliata.

Vale la pena aggiungere: questa uscita precoce avviene ancora prima del carrello. Si tende a preoccuparsi dell'abbandono del carrello — secondo il Baymard Institute, in media circa il 70% dei carrelli viene abbandonato. Ma a livello di categoria, il cliente se ne va prima ancora di aver guardato un prodotto. Si tratta di una fase precedente, che meno persone monitorano, e correggerla è di solito economico e veloce.

## Azione: confronta le etichette del menu con il contenuto della pagina di collezione

Quello che dovresti fare è molto semplice, senza bisogno di strumenti complicati. Apri GA4, filtra l'elenco delle pagine di collezione, ordina per tasso di uscita decrescente ed estrai le prime categorie.

Per ogni categoria con uscite elevate, ripercorri il viaggio del cliente:

- Che cosa dice esattamente la voce di menu che porta a questa pagina?
- Quando ci clicchi, la pagina che appare corrisponde a ciò che l'etichetta prometteva?
- Ci sono abbastanza prodotti perché il cliente senta che c'è "qualcosa da vedere"?
- Su mobile, dove si trova questa voce di menu, e cliccandoci si arriva alla stessa pagina del desktop?

Se l'etichetta del menu e il contenuto della pagina non coincidono, ci sono due modi per correggerlo: rinominare la voce in modo che corrisponda a ciò che la pagina mostra davvero, oppure mantenere il nome e adattare la pagina all'aspettativa. Quale strada scegliere dipende dalla tua intenzione commerciale, ma le due cose devono corrispondere.

Un piccolo consiglio: nomina le voci nel linguaggio del cliente, non in quello interno. I clienti scrivono "friggitrice ad aria", in pochi cercano "collezione di elettrodomestici premium per la casa". Più l'etichetta è vicina alle parole che i clienti usano davvero, più è facile far corrispondere le aspettative e più basse sono le uscite.

Il lavoro di modifica del menu può diventare noioso se devi mettere mano al codice del tema. Per questo molti store usano [Navi+](https://naviplus.io) per costruire e modificare i menu con il drag-and-drop, senza codice — rinominare una voce, riordinare o puntare una voce alla pagina di collezione giusta richiede solo pochi minuti. Navi+ ti permette di configurare mobile e desktop separatamente, così eviti il bug in cui i due lati portano a pagine diverse, e il menu resta intatto anche quando cambi tema. Il resto — decidere quale nome corrisponde a quale pagina — resta a te, perché solo tu conosci davvero i tuoi prodotti.

In breve, un alto tasso di uscita dalla pagina di collezione non è sempre colpa della pagina di collezione. Molto spesso parte da un'etichetta del menu che promette una cosa e ne consegna un'altra. Far corrispondere le due cose è di solito il modo più rapido per trattenere i clienti abbastanza a lungo da vedere davvero un prodotto.

Questo articolo fa parte della guida più ampia su [Come capire se il tuo menu funziona — 5 metriche da tenere d'occhio](/it/measuring-menu-performance/).
