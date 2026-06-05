---
lang: it
ref: menu-click-through-rate
title: "Metrica 1 — Tasso di clic di ogni voce di menu"
description: "Il CTR delle voci di menu mostra quali voci vengono cliccate e quali ignorate. Come misurarlo con GA4 e Clarity, come leggerlo e come modificare il menu per aumentare i clic."
image: "/images/measuring-menu-performance/menu-click-through-rate.webp"
image_alt: "Metrica 1 — Tasso di clic di ogni voce di menu"
parent_title: "Come capire se il tuo menu funziona bene — 5 metriche da monitorare"
parent_url: "/it/measuring-menu-performance/"
seo_keywords:
  - CTR voce di menu
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

Il CTR delle voci di menu è il primo numero che guardo ogni volta che voglio sapere se un menu sta facendo il suo lavoro. In parole semplici, ti dice quale quota delle persone che vedono il menu clicca effettivamente su una voce specifica. Una voce che molti vedono ma che pochi cliccano di solito ti sta dicendo qualcosa — devi solo saperla leggere correttamente.

Questo articolo approfondisce una sola metrica: il CTR di ogni voce di menu. Come misurarlo, come leggerlo e, soprattutto, cosa fare una volta che l'hai letto.

## Cos'è il CTR di una voce di menu

Il CTR (click-through rate, tasso di clic) di una voce di menu è il rapporto tra quante volte quella voce viene cliccata e quante volte il menu viene mostrato. Per esempio, se in una settimana il menu viene mostrato 1.000 volte e la voce "Nuovi arrivi" viene cliccata 80 volte, allora il CTR di quella voce è circa l'8%.

La parte interessante è che non guardi un unico numero complessivo. Guardi ogni voce, una accanto all'altra. Quanto fa "Home", quanto fa "Saldi", quanto fa "Contatti". È il divario tra le voci che vale la pena notare, non il dato assoluto.

Non mi preoccupo troppo di quale CTR sia "considerato buono". Ogni negozio è diverso, ogni pubblico è diverso. Quello che mi interessa è l'ordine: quali voci vengono usate molto e quali quasi nessuno tocca.

## Come misurare il CTR di ogni voce

Ci sono diversi modi, dal più preciso al più visivo. Non ti servono tutti e tre — scegli quello che fa al caso tuo.

### Misurare con GA4

GA4 (Google Analytics 4) è l'approccio quantitativo più chiaro. Per impostazione predefinita, l'Enhanced Measurement registra solo i clic che portano fuori dal tuo dominio; non sa automaticamente quando una voce della tua barra di navigazione interna è stata cliccata.

Per registrare i clic sul menu, l'approccio più comune è usare Google Tag Manager: crei un trigger per i clic sui link all'interno dell'area di navigazione, poi invii a GA4 un evento dedicato (molti lo chiamano `menu_click`), insieme a un parametro che contiene il nome della voce cliccata. Dopodiché, nel report Engagement > Eventi, vedrai ogni voce con il suo conteggio di clic elencata separatamente.

Una nota dall'esperienza: dopo aver impostato tutto, i dati di solito impiegano un giorno o due per comparire completamente nei report, quindi non avere fretta di trarre conclusioni il primo giorno. E ti serve sapere il "numero di persone che hanno visto il menu" per calcolare il tasso — di solito lo si approssima con il numero di visualizzazioni delle pagine che contengono il menu.

### Misurare con Hotjar o Clarity

Se preferisci non mettere le mani su tag e codice, Hotjar o Microsoft Clarity ti danno la risposta in modo visivo. Entrambi hanno una click heatmap — una mappa di calore che mostra dove si clicca molto e dove invece le cose restano fredde.

Microsoft Clarity è gratuito e facile da avviare. Aggiungi uno snippet e, qualche giorno dopo, apri la heatmap e vedi quali aree del menu sono luminose e quali scure. Per i menu mobile, Clarity può mostrare anche lo stato del menu espanso, così puoi vedere le voci all'interno di uno slide menu, non solo la parte visibile subito.

Una cosa che Clarity fa bene e che GA4 non fa: distinguere tra "dead click" e "rage click". Un dead click è quando un visitatore clicca su qualcosa che sembra cliccabile ma non succede nulla. Un rage click è quando un visitatore clicca ripetutamente nello stesso punto per frustrazione. Se una voce di menu riceve molti dead click, molto probabilmente sembra un pulsante ma in realtà non porta da nessuna parte — è un problema da risolvere, non semplicemente un caso di CTR basso.

Spesso combino entrambi: GA4 per i numeri da confrontare nel tempo, e Clarity o Hotjar per capire il "perché" dietro ai numeri.

## Come leggere la tabella del CTR

Quando metti le voci una accanto all'altra, il quadro di solito assume una forma familiare: poche voci con un CTR molto alto, un gruppo nel mezzo e alcune vicine allo zero.

Una voce vicina allo zero non è automaticamente una voce sbagliata. Può rientrare in uno di due gruppi:

- Una voce ridondante: i clienti non ne hanno davvero bisogno. Per esempio, una voce "News" quando il negozio non pubblica nulla da un anno.
- Una voce con un nome mal interpretato: i clienti hanno bisogno di quel contenuto ma non si rendono conto che questa voce ci porta. Il nome è troppo creativo, oppure usa un gergo interno che i clienti non conoscono.

Il modo per distinguere questi due gruppi è guardare se il contenuto dietro la voce viene raggiunto attraverso un altro percorso. Se la pagina "Promozioni" ha molte visualizzazioni ma la voce di menu "Affari pazzeschi" ha un CTR basso, è molto probabile che il problema sia nel nome, non nel contenuto.

### Quando una voce importante ha un CTR insolitamente basso

Questo è il caso su cui vale la pena soffermarsi più a lungo. Voci come "Saldi" o "Novità" dovrebbero attirare clic. Chi visita un negozio retail è di solito curioso di vedere cosa è in sconto e cosa è nuovo. Se queste voci hanno un CTR insolitamente basso, raramente è perché i clienti non sono interessati — di solito dipende da dove sono collocate.

La voce potrebbe trovarsi in fondo al menu, fuori dalla vista. Le ricerche di eye-tracking del Nielsen Norman Group mostrano che gli utenti tendono a scorrere una pagina secondo uno schema a forma di F — scorrendo orizzontalmente in alto, poi scendendo lungo il bordo sinistro, saltando gran parte del centro e del fondo. Una voce di valore collocata in un angolo nascosto può facilmente sfuggire all'occhio del cliente.

Su mobile, il problema è ancora più marcato. Se la voce "Saldi" è sepolta in profondità nel menu hamburger, il cliente deve toccare per aprire il menu e poi scorrere per trovarla. Ogni passaggio in più è un altro punto in cui le persone abbandonano. Ecco perché molti negozi mettono "Saldi" direttamente sulla Tab Bar in fondo allo schermo — sempre visibile, senza bisogno di aprire nulla.

## Cosa fare dopo aver letto

Se leggi e non cambi nulla, il numero resta solo un numero. Di solito lo traduco in tre azioni.

Primo, snellisci le voci usate raramente. Più lungo è il menu, più ogni voce si diluisce e più è difficile per i clienti scegliere. Se una voce resta vicina a un CTR pari a zero per molte settimane e anche il contenuto dietro di essa riceve pochi visitatori, vai pure avanti e rimuovila o uniscila a un'altra. Un menu più snello aiuta le voci rimanenti a risaltare di più.

Secondo, rinomina le voci poco chiare. È la modifica più economica, e l'effetto è spesso visibile subito. Usa le parole che usano i clienti, non quelle che piacciono a te: "Collezione" potrebbe diventare "Prodotti", "Affari pazzeschi" diventare "Promozioni". Dopo aver rinominato, osserva di nuovo il CTR per qualche settimana per avere conferma.

Terzo, sposta le voci importanti in un punto in evidenza. Se "Saldi" dovrebbe essere forte ma al momento è debole, spostala all'inizio del menu desktop, oppure mettila sulla Tab Bar su mobile. Cambiare posizione ha spesso un impatto maggiore di quanto ci si aspetti.

Questo lavoro di costruzione e modifica non richiede necessariamente uno sviluppatore. Con uno strumento come [Navi+](https://naviplus.io), trascini e rilasci per riordinare le voci, rinominarle o estrarne una verso la Tab Bar in basso su mobile — le configurazioni mobile e desktop sono separate, così puoi rendere "Saldi" ben visibile sul telefono senza ingombrare il menu desktop. In questo modo il ciclo "leggi i numeri, poi modifica il menu" avviene rapidamente, e puoi continuare a testare e a rimisurare.

Un'ultima nota: cambia una cosa per volta. Se rinomini, riposizioni e tagli una voce tutto in una volta, dopo non saprai quale modifica ha determinato la variazione del CTR. Cambia una cosa, aspetta i dati, poi passa alla successiva.

Questo articolo fa parte della guida più ampia su [Come capire se il tuo menu funziona bene — 5 metriche da monitorare](/it/measuring-menu-performance/).
