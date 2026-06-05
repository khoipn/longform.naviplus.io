---
lang: it
ref: mobile-vs-desktop-navigation-behavior
title: "Metrica 4 — Comportamento di navigazione su mobile rispetto a desktop"
description: "Confronta la navigazione su mobile e su desktop: come misurarla in GA4, i segnali d'allarme quando le uscite da mobile sono più alte di quelle da desktop, e come differenziare il layout della Tab Bar per ciascun dispositivo."
image: "/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp"
image_alt: "Metrica 4 — Comportamento di navigazione su mobile rispetto a desktop"
parent_title: "Come capire se il tuo menu funziona — 5 metriche da monitorare"
parent_url: "/it/measuring-menu-performance/"
seo_keywords:
  - navigazione mobile rispetto a desktop
  - segmenti GA4
  - categoria di dispositivo
date: 2026-06-02
---

Questa metrica è un po' diversa dalle tre precedenti. Invece di guardare un singolo numero, guardi lo stesso numero ma suddiviso per dispositivo. È qui che confronti la **navigazione su mobile rispetto a desktop** — come le persone navigano da telefono rispetto a quando lo fanno da computer.

L'ho capito più tardi di quanto avrei dovuto. All'inizio guardavo il report combinato, vedevo che i numeri del menu sembravano a posto, e mi sentivo tranquillo. È stato solo quando ho isolato il mobile da solo che ho visto che metà dei miei visitatori stava vivendo un'esperienza completamente diversa da quella che immaginavo.

## Lo stesso menu, due storie diverse

Quando confronti la navigazione per dispositivo, ci sono tre cose che vale la pena guardare più di tutte:

- **CTR (tasso di clic sul menu):** quale percentuale di visitatori tocca davvero il menu su ciascun tipo di dispositivo.
- **Profondità (quanto navigano):** dopo aver toccato, quante pagine attraversano.
- **Tasso di uscita:** quanti visitatori se ne vanno avendo fatto quasi nulla.

Il punto chiave è che questi tre numeri di solito differiscono in modo netto tra mobile e desktop. Su desktop, il menu è spesso orizzontale e sempre visibile — un'occhiata veloce e il visitatore vede tutto. Su mobile, il menu è spesso nascosto dietro un pulsante hamburger a tre righe, e bisogna toccarlo per aprirlo.

Questa differenza non è piccola. Secondo il Nielsen Norman Group, nascondere la navigazione principale dietro un hamburger dimezza quasi la probabilità che i visitatori trovino il menu, facendoli anche impiegare più tempo e percepire il compito come più difficile. Stesso sito web, ma gli utenti desktop e gli utenti mobile attraversano in pratica due negozi diversi.

## Come misurarlo: suddividi per categoria di dispositivo in GA4

Non ti servono strumenti speciali. GA4 può fare tutto.

Il modo più semplice è aprire Esplora, creare un report a Formato libero, poi aggiungere la **categoria di dispositivo** come dimensione. Ora ogni metrica appare come tre righe: desktop, mobile, tablet. Confronti tasso di rimbalzo, coinvolgimento e pagine per sessione direttamente da una riga all'altra.

Se vuoi andare più a fondo, crea segmenti separati — un segmento "Mobile" e un segmento "Desktop" — poi applica lo stesso report a ciascuno. È utile quando vuoi aggiungere condizioni extra, per esempio guardare solo i visitatori arrivati dalle inserzioni Facebook, oppure solo i visitatori su una specifica pagina categoria.

Una nota su come GA4 definisce le cose. In GA4, una sessione conta come "rimbalzo" quando non è coinvolta — cioè il visitatore è rimasto meno di 10 secondi, ha visto una sola pagina e non ha attivato alcun evento chiave. Il tasso di rimbalzo è semplicemente l'inverso del tasso di coinvolgimento. Tienilo a mente, così i numeri non ti confondono.

Quando misuri, non concentrarti sui numeri assoluti. Guarda lo **scarto** tra mobile e desktop.

## Una configurazione che funziona su desktop può fallire su mobile

Questa è la parte che voglio sottolineare, perché è la più facile da trascurare.

Quando costruisci un menu, sei quasi certamente seduto davanti a un computer. Ne fai l'anteprima su uno schermo largo, vedi l'ordinato mega menu a più colonne, trovi tutto facile da cliccare e lo pubblichi. Il problema è che la maggior parte dei tuoi visitatori non è seduta come te.

Su mobile, tutto cambia. Lo schermo è stretto, le dita sono più grandi del cursore del mouse, e i visitatori di solito toccano con un pollice mentre tengono il telefono in una mano. Secondo la ricerca sulla zona del pollice di Steven Hoober, la maggior parte delle interazioni su un telefono avviene con il pollice, e l'area più facile da raggiungere è la metà inferiore dello schermo. Un menu stipato nell'angolo in alto, con testo piccolo ed elementi ammassati l'uno vicino all'altro — va bene su desktop, difficile da centrare su mobile.

Un esempio noto: un negozio di moda inserisce l'intero catalogo in un mega menu desktop molto dettagliato — sopra, sotto, abiti, accessori, per stagione, per taglia. Bellissimo. Ma su mobile, tutto questo viene compresso in un'unica lista lunga e infinita dentro l'hamburger. Il visitatore deve toccare per aprirlo, scorrere verso il basso, cercare, e solo allora arrivare al tocco. Ogni passaggio in più è un'altra occasione perché il visitatore se ne vada.

Ecco perché dovresti configurare la navigazione separatamente per ciascun dispositivo. Per il mobile, molti negozi passano a una Tab Bar — una barra di navigazione fissa ancorata in fondo allo schermo, proprio nella zona del pollice — per i 3-5 elementi più importanti come Home, Categorie, Ricerca e Carrello. Su desktop, mantengono il mega menu completo. Due layout per due contesti.

## Segnale d'allarme: uscite da mobile nettamente più alte che da desktop

Il segnale più chiaro è facile da individuare: il tasso di rimbalzo su mobile è sensibilmente più alto che su desktop.

Per essere onesti, il fatto che il mobile rimbalzi un po' di più del desktop è normale ovunque, non solo da te. Secondo i benchmark di settore, le sessioni mobile tendono a rimbalzare intorno al 50%, mentre il desktop è più basso — lo scarto medio è di circa 10 punti percentuali, ed è rimasto abbastanza stabile per anni. Quindi non farti prendere dal panico solo perché il mobile è più alto.

Ciò di cui vale la pena preoccuparsi è quando quello scarto è insolitamente ampio. Se, sulle stesse pagine, il mobile esce con 20 punti in più rispetto al desktop o oltre, è un segnale che la tua esperienza mobile ha un problema — e la navigazione è uno dei primi sospettati.

Alcuni altri segnali da tenere d'occhio allo stesso tempo:

- CTR del menu su mobile molto più basso che su desktop: i visitatori non riescono a trovarlo o esitano a toccarlo.
- Profondità più superficiale su mobile: i visitatori arrivano su una pagina e la chiudono, senza navigare più a fondo.
- Pagine che si caricano lentamente su mobile: un menu o un'app pesante rallenta tutto, e i visitatori perdono la pazienza. Google raccomanda LCP sotto i 2,5 secondi, INP sotto i 200ms e CLS sotto 0,1; è di solito su mobile che queste metriche sono peggiori.

Ricorda che il tasso medio di abbandono del carrello è già intorno al 70% secondo il Baymard Institute. Una navigazione mobile difficile da usare non fa che peggiorare quel numero.

## Azione: separa mobile e desktop in due configurazioni distinte

Ciò che devi fare sta in una frase: non costringere un unico menu a servire entrambi i mondi.

Nello specifico, dopo aver guardato i numeri in GA4:

1. Suddividi il report per categoria di dispositivo e trova le pagine in cui il mobile esce in modo insolitamente più alto del desktop.
2. Apri proprio quelle pagine sul tuo telefono reale e prova a toccare il menu con un pollice come farebbe un cliente. Vedrai l'attrito con i tuoi occhi.
3. Progetta un layout mobile separato — dai priorità a una Tab Bar in basso per gli elementi principali, snellisci la lista dentro l'hamburger e rendi i pulsanti abbastanza grandi da toccare.
4. Mantieni il desktop con il mega menu completo. Due configurazioni, non una.

È esattamente per questo che è stato creato [Navi+](https://naviplus.io). Configuri mobile e desktop separatamente: una Tab Bar in basso per il mobile, un Mega Menu per il desktop, ciascuno con il proprio layout, senza toccare alcun codice. Il menu è ottimizzato in modo da non penalizzare i tuoi Core Web Vitals, e resta al suo posto quando cambi tema. È tutto drag-and-drop.

Quello che alla fine ho portato via con me è piuttosto semplice. Non ti serve un menu perfetto. Ti serve solo smettere di giudicare l'esperienza mobile con gli occhi di chi è seduto a un desktop. Suddividi i numeri per dispositivo una volta, e c'è una buona probabilità che tu veda quello che ti è sfuggito da sempre.

Questo articolo fa parte della guida più ampia su [Come capire se il tuo menu funziona — 5 metriche da monitorare](/it/measuring-menu-performance/).