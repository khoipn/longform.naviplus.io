---
lang: pt
ref: collection-page-exit-rate
title: "Métrica 3 — Taxa de saída na página de coleção"
description: "Uma taxa de saída alta na página de coleção costuma vir de rótulos de menu que não correspondem ao que a página mostra. Como medir isso com as Explorações do GA4 e como revisar e ajustar seu menu para reter clientes."
image: "/images/measuring-menu-performance/category-page-exit-rate.webp"
image_alt: "Métrica 3 — Taxa de saída na página de coleção"
parent_title: "Como saber se o seu menu está funcionando — 5 métricas que vale a pena acompanhar"
parent_url: "/pt/measuring-menu-performance/"
seo_keywords:
  - taxa de saída da página de coleção
  - página de coleção
  - GA4
date: 2026-06-02
---

Esta é a terceira métrica da série de cinco, e ela conta uma história bem diferente das duas primeiras. Antes a pergunta era: "o cliente clicou no menu?" Agora a pergunta é: depois de clicar e chegar à página de coleção, ele continua navegando ou abandona o site?

Medir a **taxa de saída na página de coleção** permite ver exatamente onde está a ruptura. Quando um cliente faz o esforço de chegar a uma página de coleção e ainda assim sai, normalmente não é porque perdeu o interesse em comprar. Costuma ser porque o que ele vê não corresponde ao que esperava quando clicou no menu. E, muitas vezes, a causa raiz está em como nomeamos o item do menu.

## O que é a taxa de saída na página de coleção

A taxa de saída é a proporção de sessões que terminam em uma determinada página, calculada como o número de saídas dividido pelo número de visualizações dessa página. Qualquer página em que o cliente olha e depois deixa o site sem ver outra página conta como uma saída.

Aplicado à página de coleção, o significado fica bem concreto. Um cliente chega a uma página de coleção — digamos "Jaquetas masculinas" ou "Acessórios de cozinha" —, não clica em nenhum produto, não aplica nenhum filtro, não vai para nenhuma outra categoria e fecha a aba. Isso é uma saída na página de coleção.

Vale separar isso da taxa de rejeição. Uma rejeição é um cliente que entra e sai sem nenhuma interação, geralmente contada na primeira página por onde ele entrou. A saída é mais ampla: o cliente pode até já ter visto algumas páginas, mas a página de coleção é a última que ele viu antes de sair. Para a página de coleção, a taxa de saída é o número mais interessante, porque mostra que o cliente "travou" durante a navegação e não conseguiu avançar até um produto.

## Como medir a taxa de saída na página de coleção no GA4

Há um pequeno detalhe que vale mencionar primeiro. No GA4, o Google ocultou as métricas Saídas e Taxa de saída dos Relatórios padrão. Se você abrir o relatório de Páginas e telas diretamente, não vai encontrar mais a coluna de Taxa de saída lá. Isso é diferente do antigo Universal Analytics, então muita gente procura e nunca acha.

A forma de obter isso é usar as Explorações, com estes passos curtos:

- Vá até **Explorar** na barra lateral esquerda e escolha um relatório de **Formato livre**.
- Adicione a dimensão **Caminho da página e classe de tela**.
- Adicione duas métricas: **Visualizações** e **Saídas**.
- Filtre o caminho para a parte da URL das suas páginas de coleção. No Shopify, as páginas de coleção normalmente têm o formato `/collections/...`, então filtre o caminho da página para conter `/collections/`.

O GA4 não inclui uma coluna de Taxa de saída nessa tabela por padrão, então você mesmo calcula dividindo as Saídas pelas Visualizações de cada página. Uma categoria com 1.000 visualizações e 300 saídas tem uma taxa de saída de 30%. O jeito rápido é exportar para o Google Sheets e adicionar uma coluna de divisão.

Não fique fixado no número absoluto, porque cada setor é diferente. Um exercício mais útil é comparar suas categorias entre si e com a média da sua própria loja. A categoria cuja taxa de saída se destaca claramente das demais — essa é a que você deve examinar.

## Como interpretar: por que as saídas são altas na página de coleção

Quando uma página de coleção tem uma taxa de saída anormalmente alta, a causa costuma cair em um de dois grupos.

**Grupo um — o cliente chegou ao lugar errado.** Ele clicou em um item de menu esperando ver A, mas a página mostra B. Por exemplo, o menu diz "Promoção", mas ao clicar aparecem apenas produtos com preço cheio. Ou o menu diz "Novidades" e a página ainda mostra os modelos da temporada passada. O cliente não está errado; ele simplesmente se frustra e sai. Nesse caso, a página de coleção leva a culpa por um item de menu mal rotulado.

**Grupo dois — a página de coleção é pouco atraente ou difícil de usar.** É a categoria certa, mas dentro dela há só um punhado de produtos, as fotos são ruins, não há como filtrar por tamanho ou preço, ou a página carrega devagar. O cliente fica preso no nível da categoria e não consegue avançar até uma página de produto — talvez porque os produtos estejam organizados de forma confusa ou o layout da página esteja poluído.

Esses dois grupos exigem soluções diferentes. O grupo dois é tarefa da página de coleção: reorganizar os produtos, adicionar filtros, deixar a página mais leve. O grupo um — que é muito comum e costuma passar despercebido — é tarefa do menu. É aí que eu quero me deter um pouco mais.

## A ligação com o menu: rótulos que não correspondem à página

Uma página de coleção raramente atrai tráfego sozinha. A maior parte das visitas a uma página de coleção vem de um único clique no menu. Isso significa que o rótulo do menu é a primeira promessa que você faz ao cliente. A página de coleção é onde você cumpre ou quebra essa promessa.

A distância entre a promessa e a realidade é onde nascem as saídas. Algumas situações comuns para lojistas brasileiros:

- O menu diz "50% de desconto", o cliente clica esperando descontos grandes, mas a página mistura itens com 10% de desconto e itens com preço cheio.
- O menu ainda tem "Coleção de Natal" pendurado lá depois do Natal; ao clicar, ele leva a uma página quase vazia.
- O menu do desktop e o menu do celular levam a duas páginas diferentes, uma com estoque e outra esgotada.
- O rótulo usa um termo interno ("Coleção S/S") enquanto os clientes estão acostumados a procurar por "Vestidos" ou "Camisas".

Em todos os casos, o cliente não fez nada de errado. Ele confiou nas palavras do menu, clicou, viu que não era aquilo e saiu. A taxa de saída daquela página de coleção sobe, e é fácil para nós interpretarmos errado como "a página de coleção tem um problema" e consertarmos a coisa errada.

Vale acrescentar: essa saída precoce acontece antes mesmo do carrinho. As pessoas tendem a se preocupar com o abandono de carrinho — segundo o Baymard Institute, em média cerca de 70% dos carrinhos são abandonados. Mas, no nível da categoria, o cliente sai antes mesmo de ter olhado um produto. Essa é uma etapa anterior, que menos gente acompanha, e corrigi-la costuma ser barato e rápido.

## Ação: revise os rótulos do menu comparando com o conteúdo da página de coleção

O que você deve fazer é bem simples e não precisa de ferramentas complicadas. Abra o GA4, filtre a lista de páginas de coleção, ordene pela taxa de saída em ordem decrescente e separe as primeiras categorias.

Para cada categoria com saída alta, percorra a jornada do próprio cliente:

- O que o item de menu que leva a essa página realmente diz?
- Quando você clica, a página que aparece corresponde ao que o rótulo prometia?
- Há produtos suficientes para o cliente sentir que tem "algo para ver"?
- No celular, onde esse item de menu fica, e clicar nele leva à mesma página que no desktop?

Se o rótulo do menu e o conteúdo da página não combinam, há duas formas de corrigir: renomear o item para corresponder ao que a página de fato mostra, ou manter o nome e ajustar a página para atender à expectativa. Qual caminho escolher depende da sua intenção de negócio, mas os dois precisam combinar.

Uma pequena dica: nomeie os itens na linguagem do cliente, não na sua linguagem interna. Os clientes digitam "air fryer", poucos procuram por "coleção de eletrodomésticos premium". Quanto mais próximo o rótulo estiver das palavras que os clientes realmente usam, mais fácil é alinhar as expectativas e menor é a saída.

O trabalho de editar o menu pode ser tedioso se você tiver que mexer no código do tema. É por isso que muitas lojas usam o [Navi+](https://naviplus.io) para criar e editar menus arrastando e soltando, sem código — renomear um item, reordenar ou apontar um item para a página de coleção certa leva só alguns minutos. O Navi+ permite configurar celular e desktop separadamente, então você evita o bug em que os dois lados levam a páginas diferentes, e o menu permanece intacto mesmo quando você troca de tema. O resto — decidir qual nome combina com qual página — continua sendo seu, porque só você entende os seus próprios produtos.

Em resumo, uma taxa de saída alta na página de coleção nem sempre é culpa da página de coleção. Muitas vezes ela começa com um rótulo de menu que promete uma coisa e entrega outra. Fazer os dois combinarem costuma ser o caminho mais rápido para manter os clientes por perto tempo suficiente para realmente ver um produto.

Este artigo faz parte do guia maior sobre [Como saber se o seu menu está funcionando — 5 métricas que vale a pena acompanhar](/pt/measuring-menu-performance/).
