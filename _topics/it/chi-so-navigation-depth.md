---
lang: it
ref: chi-so-navigation-depth
title: "Metrica 2 — Profondità di navigazione"
description: "La profondità di navigazione misura il numero di passaggi dalla homepage a un prodotto. Come misurarla in GA4, il benchmark dei 2-3 passaggi e come usare un mega menu e la Tab Bar per accorciare il percorso d'acquisto."
parent_title: "Come capire se il tuo menu funziona — 5 metriche da monitorare"
parent_url: "/it/do-luong-hieu-qua-menu/"
seo_keywords:
  - profondità di navigazione
  - funnel GA4
  - profondità di click
date: 2026-06-02
---

La prima metrica ti dice se gli acquirenti *cliccano* davvero sul tuo menu. La seconda risponde a una domanda diversa: una volta cliccato, quanta strada devono percorrere per arrivare alla cosa che vogliono comprare?

È la **profondità di navigazione**. In parole semplici, è il numero medio di passaggi che una persona deve compiere dalla homepage fino a una pagina prodotto. Meno passaggi ci sono, più breve è il percorso verso il carrello. Più passaggi ci sono, più sono i punti in cui un acquirente può stancarsi, distrarsi e chiudere la scheda.

Una volta avevo uno store in cui io — la persona che lo aveva costruito — dovevo ancora cliccare quattro volte per trovare un prodotto di punta. È stato in quel momento che ho capito: se si perde il proprietario del negozio, come può non perdersi un visitatore alla prima visita?

## Cos'è la profondità di navigazione e come si distingue da "quante pagine vede un acquirente"

Ci sono due cose facili da confondere, e vanno tenute ben separate.

Una è il *numero di pagine per sessione* — il totale delle pagine che un acquirente visualizza, incluso il tempo che dedica a navigare, confrontare e leggere le recensioni. Un numero alto qui non è necessariamente un male.

L'altra è la **profondità di navigazione**, o **profondità di click** — il numero di passaggi *necessari* per andare dal punto A (la homepage, o una categoria di primo livello) al punto B (una pagina prodotto). È il costo strutturale che imponi agli acquirenti, che a loro piaccia o no.

Un percorso tipico su uno store di grandi dimensioni spesso ha questo aspetto: Homepage → Categoria → Sottocategoria → Sottocategoria più profonda → Prodotto. Quattro passaggi. Ogni passaggio aggiunto è una volta in più in cui l'acquirente deve leggere, capire, decidere e aspettare che una pagina si carichi.

## Come misurare la profondità di navigazione in GA4

Non devi tirare a indovinare. GA4 ti permette di guardare direttamente il percorso reale che compiono i tuoi acquirenti.

Ci sono due approcci comuni:

- **User Explorer**: vedi il percorso di un utente specifico, passo dopo passo. Utile per esaminare alcuni casi rappresentativi e farti un'idea di dove gli acquirenti vagano.
- **Path Exploration** (oppure la creazione di una Funnel Exploration): vedi la sequenza con cui gli acquirenti si spostano da homepage → categoria → prodotto → aggiunta al carrello. Più importante del numero, ti mostra i *punti di abbandono* — il passaggio in cui il maggior numero di acquirenti si perde.

La Path Exploration disegna un diagramma in stile Sankey: i rami che si ingrossano sono quelli attraversati da molte persone, mentre i rami che si assottigliano sono vicoli ciechi. Bastano pochi minuti di osservazione e vedrai subito quale percorso compiono gli acquirenti reali, e se corrisponde al percorso che *avevi dato per scontato* avrebbero seguito.

Un consiglio: non limitarti a guardare il numero medio. Scomponilo per dispositivo. Mobile e desktop hanno spesso profondità molto diverse, perché i menu su mobile tendono a costringere gli acquirenti a toccare più volte per aprire ogni livello.

## Un benchmark — e un'avvertenza importante

Come regola generale, il percorso verso i tuoi prodotti principali dovrebbe rientrare in **2-3 passaggi**. Quando i percorsi arrivano regolarmente a cinque passaggi o più, la tua struttura è probabilmente troppo profonda.

Ma qui devo essere onesto. La famosa "regola dei tre click" è in realtà un mito. Il Nielsen Norman Group sottolinea che non è mai stata sostenuta da alcun dato, e negli studi che citano il tasso di abbandono non è aumentato quando un compito superava i tre passaggi, né la soddisfazione è diminuita. Ciò che stanca un acquirente non è il numero di click.

Ciò che stanca un acquirente è lo *sforzo* di ogni click. Un passaggio con un'etichetta chiara, che porta esattamente dove l'acquirente si aspetta, è quasi gratuito. Un passaggio vago, che costringe l'acquirente a fermarsi e a indovinare dove cliccare, è quello costoso.

Quindi tratta il benchmark dei 2-3 passaggi come un segnale d'allarme, non come una legge inviolabile. Una profondità elevata è un invito ad andare a indagare *perché* è profonda — non un numero da abbassare a tutti i costi.

## Perché i menu diventano profondi

Quando vado a indagare, di solito trovo tre colpevoli.

**Troppi livelli di gerarchia.** Aggiungi una sottocategoria, poi una sotto-sottocategoria, poi una sotto-sotto-sottocategoria. Ogni livello aveva senso quando l'hai aggiunto, ma insieme formano un labirinto. Secondo il Baymard Institute, addirittura il 37% dei siti e-commerce stipa l'intero catalogo dentro un'unica voce di menu (qualcosa come "Shop" o "Prodotti") — una struttura che crea ogni sorta di problema quando gli acquirenti cercano di andare in profondità.

**Nessuna scorciatoia.** Non ci sono scorciatoie verso le tue categorie più vendute. Un acquirente che vuole "Scarpe da uomo" deve passare in ordine per "Moda" → "Uomo" → "Calzature" → "Scarpe da uomo", anche se la maggior parte del tuo fatturato è proprio lì.

**Nessun blocco in evidenza nel mega menu.** Il tuo mega menu si limita a elencare nomi di categoria spogli, senza alcun blocco che porti direttamente a una collezione di tendenza, ai nuovi arrivi o all'offerta della settimana. Gli acquirenti devono arrangiarsi da soli invece di essere invitati a entrare.

## La soluzione: lascia che gli acquirenti facciano un "salto"

La buona notizia: sistemare la profondità non è difficile, e di solito non richiede di toccare il catalogo.

**Appiattisci la struttura.** Unisci i livelli quasi identici. Fai a ogni livello una domanda: questo livello aiuta davvero l'acquirente a restringere le sue scelte, oppure è solo un'altra porta da aprire? Se è la seconda, eliminalo.

**Usa il mega menu per fare un salto.** Questo è il punto chiave. Un buon mega menu dispiega la gerarchia in modo piatto davanti all'acquirente, così che possa *saltare direttamente* alla categoria di cui ha bisogno invece di procedere passo dopo passo. Il Nielsen Norman Group osserva che i mega menu funzionano bene per la navigazione perché permettono agli acquirenti di *vedere* le proprie opzioni invece di doverle ricordare. Baymard mostra inoltre che il mega menu è lo stile di navigazione più comune sui grandi siti retail, perché è veloce e facile da scorrere con lo sguardo.

Per renderlo concreto per i venditori: invece di costringere gli acquirenti a guadare quattro livelli per arrivare a "T-shirt da uomo", metti "T-shirt", "Jeans", "Nuovi arrivi" e "50% di sconto" direttamente nel mega menu desktop. Su mobile, una **Tab Bar** in fondo allo schermo ti permette di ancorare le tue 4-5 scorciatoie più importanti sempre a portata di pollice — un tocco e l'acquirente è arrivato, senza dover aprire l'hamburger e scavare in profondità.

È esattamente questo lo scopo per cui è stato creato [Navi+](https://naviplus.io): creare un Mega Menu, una Tab Bar e uno Slide Menu con il drag-and-drop, senza codice, configurare mobile e desktop separatamente e permetterti di agganciare un blocco con una collezione in evidenza che porta dritto a una collezione tra le più vendute. L'obiettivo non è un menu più bello — è un percorso più breve dalla homepage al pulsante "Acquista".

Un'ultima nota, per non esagerare: non farti ossessionare dal tagliare i passaggi al punto da ammassare tutto in un'unica schermata disordinata. Ogni scorciatoia che aggiungi deve avere un'etichetta chiara e corrispondere a ciò che gli acquirenti vogliono. Meno sforzo, non solo meno click — è questo il vero spirito di questa metrica.

---

Questo articolo fa parte della guida più ampia su [Come capire se il tuo menu funziona — 5 metriche da monitorare](/it/do-luong-hieu-qua-menu/).
