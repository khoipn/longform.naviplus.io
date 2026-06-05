---
lang: pt
ref: measuring-menu-performance
order: 3
title: "Como saber se o seu menu está funcionando — 5 métricas que valem a pena acompanhar"
description: "Meça o desempenho do menu com 5 métricas práticas: CTR, profundidade de navegação, taxa de saída, comportamento no mobile e busca interna — todas mensuráveis de graça com o GA4 e o Clarity."
topic_tag: "Medição"
hero_color: "#1c7ed6"
read_time: 7
seo_keywords:
  - medir desempenho do menu
  - GA4
  - métricas de navegação
  - analytics de menu
date: 2026-06-02
child_links:
  - title: "Métrica 1 — Taxa de cliques de cada item do menu"
    url: "/pt/topic/menu-click-through-rate/"
    desc: "Quais itens recebem cliques e quais são ignorados."
  - title: "Métrica 2 — Profundidade de navegação"
    url: "/pt/topic/navigation-depth-metric/"
    desc: "Quantos passos são necessários para chegar a um produto."
  - title: "Métrica 3 — Taxa de saída nas páginas de categoria"
    url: "/pt/topic/collection-page-exit-rate/"
    desc: "O cliente chega a uma categoria e sai sem ver nenhum produto."
  - title: "Métrica 4 — Comportamento de navegação no mobile vs. desktop"
    url: "/pt/topic/mobile-vs-desktop-navigation-behavior/"
    desc: "O mesmo menu, dois mundos bem diferentes."
  - title: "Métrica 5 — Taxa de uso da busca interna"
    url: "/pt/topic/internal-search-usage-rate/"
    desc: "Quando o cliente busca por algo que o menu deveria ter resolvido."
---

A maioria de nós avalia o próprio menu no feeling. Ele parece organizado, tem itens suficientes, ninguém reclama — então deve estar tudo bem. Mas tem uma coisa que poucos percebem: o cliente raramente reclama de um menu difícil de usar. Ele não te manda mensagem com feedback. Ele simplesmente fica um tempo procurando em silêncio, não acha o que precisa e fecha a aba.

Para saber se o seu menu está mesmo cumprindo o papel dele, intuição não basta. Você precisa olhar o que o cliente realmente faz: no que ele clica, até onde vai, onde para. É disso que se trata **medir o desempenho do menu** — em vez de adivinhar, você deixa os dados falarem. A boa notícia é que você não precisa ser especialista em analytics. As cinco métricas a seguir já são suficientes para começar, e a maioria delas já vem pronta em ferramentas gratuitas como o GA4 ou o Microsoft Clarity.

Este artigo passa por cada métrica: o que é, por que importa e como lê-la para você descobrir se o seu menu está ajudando o cliente ou atrapalhando o caminho dele.

<div class="lf-key">
  <span class="lf-key-title">Leitura rápida</span>
  <ul>
    <li>O desempenho do menu pode ser medido sem analytics complexos.</li>
    <li>As cinco métricas mostram onde clientes clicam, param ou pesquisam.</li>
    <li>Corrija um problema claro e espere novos dados.</li>
  </ul>
</div>

## Métrica 1 — Taxa de cliques de cada item do menu

A taxa de cliques (CTR) de um item do menu é a parcela das pessoas que veem aquele item e de fato clicam nele. É a métrica mais simples e, ainda assim, a que revela mais coisa, porque mostra quanta atenção cada item está atraindo.

Quando você olha o CTR do menu inteiro de uma vez, normalmente vê um cenário desigual. Alguns poucos itens recebem muitos cliques, e alguns quase nenhum. Um item com quase nenhum clique não é necessariamente inútil — ele pode estar no lugar errado, ter um nome confuso ou estar ofuscado por outros itens.

Algumas perguntas que vale a pena fazer ao ler o CTR:

- O item mais importante para o faturamento está entre os mais clicados?
- Existe algum item que você considera "secundário" e que recebe um número surpreendente de cliques? O cliente pode precisar dele mais do que você imagina.
- Existe algum item praticamente morto, mas que ainda ocupa um lugar nobre na barra do menu?

No GA4, você acompanha isso com eventos de clique vinculados a cada link do menu. Se a parte técnica parecer intimidadora, o Microsoft Clarity oferece mapas de calor que mostram onde as pessoas clicam usando apenas cores.

O CTR também é uma ótima forma de fazer experimentos. Renomeie um item, mude a ordem ou junte dois itens — e acompanhe como os números mudam depois de uma ou duas semanas. Mostramos como ler e interpretar o CTR para situações específicas com mais detalhes em um artigo à parte.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/menu-click-through-rate/">Leia o guia completo → Métrica 1 — Taxa de cliques de cada item do menu</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-click-through-rate.webp" alt="Menu click-through rate heatmap showing which ecommerce navigation items shoppers use" title="Menu click-through rate for ecommerce navigation">
  <figcaption>CTR shows which menu items pull attention and which ones quietly get ignored.</figcaption>
</figure>

## Métrica 2 — Profundidade de navegação

A profundidade de navegação mede quantos cliques o cliente precisa dar para chegar ao que ele quer. Um produto que fica a um clique da página inicial é fácil de achar. Um que fica a quatro cliques de distância é, para a maioria dos clientes, um produto que eles abandonam antes mesmo de chegar.

É aqui que o menu prejudica suas vendas em silêncio. Você pode ter exatamente o produto que o cliente quer, com um bom preço e ótimas fotos — mas se ele estiver enterrado fundo demais, o cliente nunca o vê. Cada camada extra de clique é mais uma chance de o cliente se distrair, mudar de ideia ou fechar a página.

Nos relatórios de jornada do GA4, você consegue ver os caminhos mais comuns que as pessoas fazem a partir da página inicial. Se o cliente precisa dar vários passos tortuosos para chegar à página de uma categoria principal, isso é um sinal de que o seu menu está fazendo ele trabalhar demais.

Uma dica prática: liste as cinco páginas mais importantes para o faturamento e, partindo da página inicial, clique até chegar a cada uma delas, contando os passos. Se levar mais de três, talvez você esteja escondendo essas páginas bem demais. Tipos de menu como o Mega Menu no desktop ou a Tab Bar na parte de baixo da tela do celular existem justamente para encurtar esse caminho — trazendo os itens importantes para perto do alcance do cliente. Falamos sobre como medir a profundidade e reduzi-la com bom senso em um artigo à parte.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/navigation-depth-metric/">Leia o guia completo → Métrica 2 — Profundidade de navegação</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/navigation-depth-click-path.webp" alt="Navigation depth click path showing how many steps shoppers need to reach products" title="Navigation depth click path metric">
  <figcaption>Navigation depth reveals how many clicks stand between shoppers and the products they want.</figcaption>
</figure>

## Métrica 3 — Taxa de saída nas páginas de categoria

A taxa de saída mostra a parcela de sessões que terminam em uma página específica, não importa como o cliente chegou até ela. Diferente da taxa de rejeição (que conta apenas a primeira página de uma sessão), a taxa de saída se aplica a todas as páginas de uma sessão — o que a torna ideal para analisar páginas de categoria.

Por que as páginas de categoria importam? Porque chegar a uma delas significa que o cliente já tem intenção. Ele clicou em "Calçados masculinos" ou "Utensílios de cozinha" porque queria ver aquele grupo. Se a maioria deles sai logo ali, sem ver um único produto, alguma coisa não bate entre o que ele esperava e o que viu.

Alguns motivos comuns para uma taxa de saída alta em páginas de categoria:

- O nome do item do menu promete uma coisa, mas a página entrega outra.
- A página exibe coisas demais, e o cliente não sabe para onde olhar.
- Não há filtros, então o cliente não consegue refinar as opções.
- A página carrega devagar. Segundo o Google, o limite "bom" para o tempo que o conteúdo principal leva para aparecer (LCP) é abaixo de 2,5 segundos; muito mais lento que isso, e o cliente sai antes mesmo de a página terminar de carregar.

Uma observação ao ler esse número: uma taxa de saída alta nem sempre é ruim. Algumas páginas são pontos de parada naturais. Mas, para uma página de categoria — onde o cliente deveria estar avançando rumo aos produtos —, um número alto costuma merecer um segundo olhar. Nos aprofundamos em como distinguir uma taxa de saída "normal" de uma "preocupante" em um artigo à parte.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/collection-page-exit-rate/">Leia o guia completo → Métrica 3 — Taxa de saída nas páginas de categoria</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/category-page-exit-rate.webp" alt="Category page exit rate showing shoppers leaving before viewing ecommerce products" title="Category page exit rate for menu performance">
  <figcaption>High category exits warn that shoppers reached a section but did not continue to products.</figcaption>
</figure>

## Métrica 4 — Comportamento de navegação no mobile vs. desktop

Esta é a métrica que muita gente pula, e que costuma cobrar o preço depois. O motivo é simples: hoje a maioria dos clientes chega pelo celular. Os números do setor mostram que os dispositivos móveis representam a maior parte do tráfego dos sites de e-commerce — o número exato varia bastante conforme a fonte e a região, mas o mobile passou o desktop há muito tempo.

O problema é que um menu que parece ótimo na tela de um notebook pode ser muito difícil de usar no celular. Um Mega Menu de várias colunas não cabe inteiro numa tela vertical. Um menu hambúrguer esconde tudo atrás de um único ícone — o cliente precisa tocar para ver. O Nielsen Norman Group mostrou que o conteúdo escondido atrás de um hambúrguer é descoberto e usado menos do que quando fica visível: esconder a sua navegação principal corta quase pela metade a chance de o cliente encontrá-la.

A forma mais fácil de ler isso é separar seus números por dispositivo. No GA4, você consegue comparar os dois grupos lado a lado:

| O que comparar | A pergunta que isso levanta |
| --- | --- |
| CTR do menu no mobile vs. desktop | Para o mesmo item, ele é bem menos clicado no mobile? |
| Profundidade de navegação | O cliente no mobile precisa clicar mais para chegar ao objetivo? |
| Taxa de conversão por dispositivo | Onde o mobile fica bem atrás do desktop? |

Se o mobile claramente fica para trás, é bem provável que os botões estejam pequenos demais, fiquem fora do alcance do polegar ou que itens importantes estejam enterrados fundo atrás de um menu deslizante. É por isso que muitas lojas usam uma Tab Bar fixa na parte de baixo da tela no mobile e um Mega Menu no desktop — dois layouts diferentes para duas formas diferentes de usar o site. Uma ferramenta como o [Navi+](https://naviplus.io) permite configurar mobile e desktop separadamente sem código, então você não precisa forçar um único design a servir para os dois. Escrevemos um artigo à parte sobre como comparar e lidar com a diferença entre as duas plataformas.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/mobile-vs-desktop-navigation-behavior/">Leia o guia completo → Métrica 4 — Comportamento de navegação no mobile vs. desktop</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/mobile-desktop-navigation-behavior.webp" alt="Mobile and desktop navigation behavior comparison for ecommerce menu performance" title="Mobile versus desktop navigation behavior">
  <figcaption>Mobile and desktop shoppers often need different navigation layouts and separate measurement.</figcaption>
</figure>

## Métrica 5 — Taxa de uso da busca interna

A última métrica parece não ter relação com o menu, mas na verdade é o espelho mais claro de como ele está indo. A taxa de uso da busca interna é a porcentagem de clientes que usam a caixa de busca do seu site em vez de clicar pelo menu.

Buscar um pouco é normal, e até bom — clientes que usam a busca costumam ter intenção de compra mais alta, porque estão procurando ativamente por algo específico. Mas se essa taxa dispara, geralmente é sinal de que o menu não está guiando o cliente até onde ele precisa ir. Ele desiste do menu porque não ajuda e parte para a digitação.

O que diz ainda mais é o que acontece depois da busca. Uma pesquisa do Baymard Institute mostra que a busca interna numa grande parcela dos sites de e-commerce tem desempenho abaixo de um padrão aceitável. Ou seja, quando o seu menu empurra o cliente para a caixa de busca, você está apostando numa ferramenta que também tende a decepcioná-lo.

No GA4, se você ativar o rastreamento de busca no site, consegue ver quais palavras os clientes buscam. Essa lista é ouro. Se muita gente digita o nome de uma categoria que você já tem no menu, é bem provável que esse item esteja no lugar errado ou tenha um nome difícil de encontrar.

Leia a busca interna como uma reclamação educada dos seus clientes: "Não consegui achar isto no seu menu." Detalhamos em um artigo à parte como usar os termos de busca para remendar o seu menu.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/internal-search-usage-rate/">Leia o guia completo → Métrica 5 — Taxa de uso da busca interna</a></p>
<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/internal-search-menu-gaps.webp" alt="Internal search usage rate revealing ecommerce menu gaps and missing categories" title="Internal search usage reveals menu gaps">
  <figcaption>Search terms act like quiet complaints about categories shoppers could not find in the menu.</figcaption>
</figure>

## Por onde começar

Cinco métricas podem parecer muita coisa, mas você não precisa fazer todas de uma vez. Se você está só começando, aqui vai uma ordem sugerida:

1. Ative o GA4 e habilite o rastreamento de busca no site — dá quase nenhum trabalho e te entrega a métrica 5 na hora, além de parte das métricas 2 e 3.
2. Instale o Microsoft Clarity para os mapas de calor, que apoiam a métrica 1 e dão uma olhada rápida no comportamento no mobile.
3. Depois de duas semanas, sente-se e revise os números de uma só vez, anotando duas ou três coisas que parecem estranhas.

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-starting-checklist.webp" alt="Menu performance starting checklist with GA4 heatmaps and two week review" title="Menu performance starting checklist">
  <figcaption>GA4, heatmaps, and a two-week review are enough to start improving menu performance.</figcaption>
</figure>

<p class="lf-note"><span class="lf-note-title">Comece pequeno</span>Ative a busca interna no GA4, adicione heatmaps e revise os números depois de duas semanas.</p>

Não tente otimizar tudo de uma vez. Escolha a única métrica mais clara, conserte uma coisa e depois espere por dados novos. Um menu é algo que você ajusta aos poucos, não algo que você configura uma vez e esquece.

Uma coisa para ter em mente enquanto faz as mudanças: cada vez que você mexer no menu, não deixe a página mais lenta. Segundo o Google, os limites "bons" do Core Web Vitals são LCP abaixo de 2,5 segundos, INP abaixo de 200 milissegundos e CLS abaixo de 0,1. Um menu bonito que faz a página engasgar ou deslocar o layout durante o carregamento causa mais mal do que bem.

## Considerações finais

<figure>
  <img src="https://cdn.naviplus.app/longform/images/measuring-menu-performance/menu-performance-quarterly-review.webp" alt="Quarterly ecommerce menu performance review with fresh shopper behavior data" title="Quarterly menu performance review">
  <figcaption>A quarterly review keeps the menu aligned with new categories and real shopper behavior.</figcaption>
</figure>
Os números não estão aí para te dar nota nem te julgar. Eles só ajudam você a ver onde o cliente trava — algo que o olho nu e a intuição têm dificuldade de captar. Um bom menu não precisa ser perfeito desde o primeiro dia; ele precisa ser melhorado aos poucos, com base no que o cliente realmente faz.

Uma sugestão tranquila: revise o seu menu a cada três meses, ou sempre que adicionar uma nova categoria. A forma menos estressante de começar é ativar o GA4 ou instalar o Microsoft Clarity hoje, deixar rodando por duas semanas e depois voltar para olhar o seu menu pelos olhos dos dados. Você vai se surpreender com o que o cliente vinha te dizendo em silêncio e você nunca tinha ouvido.