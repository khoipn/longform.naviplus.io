---
lang: pt
ref: navigation-depth-metric
title: "Métrica 2 — Profundidade de Navegação"
description: "A profundidade de navegação mede o número de passos da página inicial até um produto. Como medi-la no GA4, o benchmark de 2-3 passos e como usar um mega menu e a Tab Bar para encurtar o caminho até a compra."
image: "/images/measuring-menu-performance/navigation-depth-click-path.webp"
image_alt: "Métrica 2 — Profundidade de Navegação"
parent_title: "Como Saber se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar"
parent_url: "/pt/measuring-menu-performance/"
seo_keywords:
  - profundidade de navegação
  - funil no GA4
  - profundidade de cliques
date: 2026-06-02
---

A primeira métrica mostra se os compradores *clicam* no seu menu, afinal. A segunda responde a uma pergunta diferente: depois que eles clicaram, qual a distância que precisam percorrer para chegar até aquilo que querem comprar?

Isso é a **profundidade de navegação**. De forma simples, é o número médio de passos que uma pessoa precisa dar da página inicial até uma página de produto. Quanto menos passos, mais curto o caminho até o carrinho. Quanto mais passos, mais lugares para o comprador cansar, se distrair e fechar a aba.

Eu já tive uma loja onde eu mesmo — a pessoa que a construiu — ainda precisava clicar quatro vezes para encontrar um produto que vendia bem. Foi nesse momento que a ficha caiu: se o dono da loja se perde, como é que um visitante de primeira viagem não se perderia?

## O que é profundidade de navegação e como ela se difere de "quantas páginas um comprador vê"

Há duas coisas fáceis de confundir, e que precisam ser mantidas separadas.

Uma é o *número de páginas por sessão* — o total de páginas que um comprador vê, incluindo o tempo que passa navegando, comparando e lendo avaliações. Um número alto aqui não é necessariamente ruim.

A outra é a **profundidade de navegação**, ou **profundidade de cliques** — o número de passos *necessários* para ir do ponto A (a página inicial, ou uma categoria de nível superior) ao ponto B (uma página de produto). Esse é o custo estrutural que você impõe aos compradores, queiram eles ou não.

Um caminho típico numa loja grande costuma ser assim: Página inicial → Categoria → Subcategoria → Subcategoria mais profunda → Produto. Quatro passos. Cada passo adicional é mais uma vez que o comprador tem que ler, entender, decidir e esperar uma página carregar.

## Como medir a profundidade de navegação no GA4

Você não precisa adivinhar. O GA4 permite que você veja diretamente o caminho real que seus compradores percorrem.

Há duas abordagens comuns:

- **Explorador de usuários (User Explorer)**: ver a jornada de um usuário específico, passo a passo. Bom para examinar alguns casos representativos e ter uma noção de onde os compradores estão se perdendo.
- **Exploração de caminhos (Path Exploration)** (ou montar uma Exploração de funil): ver a sequência em que os compradores se movem da página inicial → categoria → produto → adicionar ao carrinho. Mais importante do que o número, isso mostra os *pontos de abandono* — o passo em que mais compradores desistem.

A Exploração de caminhos desenha um diagrama no estilo Sankey: os ramos que engrossam são por onde muita gente passa, e os ramos que afinam são becos sem saída. Alguns minutos olhando e você vai enxergar na hora qual caminho os compradores reais percorrem, e se ele corresponde ao caminho que você *imaginava* que eles fariam.

Uma dica: não olhe apenas o número médio. Separe por dispositivo. Mobile e desktop costumam ter profundidades bem diferentes, porque os menus mobile tendem a forçar os compradores a tocar mais vezes para abrir cada camada.

## Um benchmark — e uma ressalva importante

Como regra geral, o caminho até seus principais produtos deveria caber dentro de **2-3 passos**. Quando os caminhos costumam chegar a cinco passos ou mais, sua estrutura provavelmente está profunda demais.

Mas aqui preciso ser honesto. A famosa "regra dos três cliques" é, na verdade, um mito. O Nielsen Norman Group ressalta que ela nunca foi sustentada por nenhum dado, e nos estudos que eles citam, a taxa de abandono não aumentou quando uma tarefa ultrapassava três passos, nem a satisfação caiu. O que cansa um comprador não é o número de cliques.

O que cansa um comprador é o *esforço* de cada clique. Um passo com um rótulo claro, que leva exatamente para onde o comprador espera, é quase gratuito. Um passo vago, que faz o comprador parar e adivinhar onde clicar, é o caro.

Então trate o benchmark de 2-3 passos como um sinal de alerta, não como uma lei rígida. Profundidade alta é um indício para você ir investigar *por que* ela é profunda — não um número a ser forçado para baixo a qualquer custo.

## Por que os menus ficam profundos

Quando vou investigar, costumo encontrar três culpados.

**Camadas demais de hierarquia.** Você adiciona uma subcategoria, depois uma sub-subcategoria, depois uma sub-sub-subcategoria. Cada camada fazia sentido na hora em que você a adicionou, mas juntas elas formam um labirinto. Segundo o Baymard Institute, até 37% dos sites de e-commerce espremem todo o catálogo dentro de um único item de menu (algo como "Loja" ou "Produtos") — uma estrutura que causa todo tipo de problema quando os compradores tentam se aprofundar.

**Sem atalhos.** Não há atalhos para suas categorias campeãs de vendas. Um comprador que quer "Calçados Masculinos" precisa passar por "Moda" → "Masculino" → "Calçados" → "Calçados Masculinos" um por um, mesmo que a maior parte da sua receita esteja bem ali.

**Sem blocos em destaque no mega menu.** Seu mega menu apenas lista nomes de categorias secos, sem nenhum bloco que leve direto para uma coleção em alta, novidades ou a oferta da semana. Os compradores têm que se virar sozinhos, em vez de serem convidados a entrar.

## A solução: deixe os compradores "saltar etapas"

A boa notícia: corrigir a profundidade não é difícil, e geralmente não exige mexer no seu catálogo.

**Achate a estrutura.** Una camadas que são quase idênticas. Faça a cada camada uma pergunta: essa camada realmente ajuda o comprador a estreitar suas escolhas, ou é só mais uma porta para abrir? Se for a segunda opção, remova.

**Use o mega menu para saltar etapas.** Esse é o ponto-chave. Um bom mega menu coloca a hierarquia achatada diante do comprador, para que ele possa *pular direto* para a categoria de que precisa em vez de ir passo a passo. O Nielsen Norman Group observa que os mega menus funcionam bem para navegação porque permitem que os compradores *vejam* suas opções em vez de ter que lembrá-las. O Baymard também mostra que o mega menu é o estilo de navegação mais comum em grandes sites de varejo, porque é rápido e fácil de escanear.

Para deixar concreto para quem vende: em vez de fazer os compradores atravessarem quatro camadas para chegar a "Camisetas Masculinas", coloque "Camisetas", "Jeans", "Novidades" e "50% Off" direto no mega menu do desktop. No mobile, uma **Tab Bar** na parte inferior da tela permite fixar seus 4-5 atalhos mais importantes sempre ao alcance do polegar — um toque e o comprador já está lá, sem precisar abrir o menu hambúrguer e se aprofundar.

É exatamente para isso que o [Navi+](https://naviplus.io) foi criado: montar um Mega Menu, uma Tab Bar e um Slide Menu por arrastar e soltar, sem código, configurar mobile e desktop separadamente e permitir que você anexe um bloco de coleção em destaque que leva direto para uma coleção campeã de vendas. O objetivo não é um menu mais bonito — é um caminho mais curto da página inicial até o botão "Comprar".

Uma última observação, para você não exagerar: não fique tão obcecado em cortar passos a ponto de espremer tudo numa única tela bagunçada. Cada atalho que você adicionar deve ter um rótulo claro e corresponder ao que os compradores querem. Menos esforço, não apenas menos cliques — esse é o verdadeiro espírito dessa métrica.

---

Este artigo faz parte do guia maior sobre [Como Saber se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar](/pt/measuring-menu-performance/).
