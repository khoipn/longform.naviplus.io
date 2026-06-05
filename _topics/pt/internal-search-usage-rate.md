---
lang: pt
ref: internal-search-usage-rate
title: "Métrica 5 — Taxa de Uso da Busca Interna"
description: "O que é a taxa de uso da busca, como medi-la com o GA4 e como ler os termos mais buscados para nomear os itens do menu na linguagem dos seus clientes e reduzir a frequência com que eles precisam buscar pela loja por conta própria."
image: "/images/measuring-menu-performance/internal-search-menu-gaps.webp"
image_alt: "Métrica 5 — Taxa de Uso da Busca Interna"
parent_title: "Como Saber se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar"
parent_url: "/pt/measuring-menu-performance/"
seo_keywords:
  - taxa de uso da busca
  - view_search_results
  - termos mais buscados
date: 2026-06-02
---

De todas as métricas para medir a saúde do menu, esta é a mais frequentemente ignorada. A **taxa de uso da busca** — a fração de clientes que usam a barra de busca em vez do menu para chegar onde precisam — conta uma história que as métricas de clique no menu não conseguem contar: a parcela de clientes que silenciosamente passou por cima do seu menu.

A barra de busca e o menu parecem duas coisas separadas. Na prática, são dois lados da mesma pergunta: o cliente encontrou o que precisava, e como?

## O que é a taxa de uso da busca

Em termos simples, é a fração de sessões com pelo menos uma busca interna, dividida pelo total de sessões. Se 100 pessoas visitam a loja e 18 delas digitam algo na caixa de busca, sua taxa de uso da busca é de cerca de 18%.

Não existe um nível absolutamente "correto" para esse número. Segundo o Baymard Institute, a fração de clientes que prefere buscar a navegar pelo menu varia bastante de loja para loja e de tipo de produto para tipo de produto: uma loja de moda com algumas centenas de modelos é muito diferente de uma loja de peças eletrônicas com dezenas de milhares de SKUs.

Então não compare o seu número com um benchmark genérico. Compare-o com você mesmo ao longo do tempo e, mais importante ainda — leia *o que* os clientes estão buscando.

## Como medir a taxa de uso da busca com o GA4

Você quase não precisa fazer nada para começar. O GA4 tem a Medição Otimizada (Enhanced Measurement), que vem ativada por padrão. Quando ela está ligada, o GA4 dispara automaticamente o evento **view_search_results** toda vez que um cliente faz uma busca.

Veja como funciona: o GA4 reconhece uma busca a partir de um parâmetro na URL da página de resultados. Por padrão, ele procura pelos parâmetros `q`, `s`, `search`, `query` e `keyword`. Se a URL dos seus resultados de busca for algo como `?q=camisa-branca`, tudo funciona imediatamente.

No Shopify, a URL de busca padrão usa `?q=`, então o `view_search_results` normalmente começa a contar sem nenhum ajuste. Se a sua loja usar um parâmetro fora do comum, basta adicioná-lo às configurações do seu fluxo de dados (data stream) no GA4.

Para ver os dados, vá em Relatórios → Engajamento → Eventos e procure pelo evento **view_search_results**. Abra-o e você encontrará o parâmetro `search_term` — que é a lista de palavras-chave que os clientes digitaram. Para calcular a taxa, pegue o número de sessões com `view_search_results` e divida pelo total de sessões no mesmo período.

## Uso alto da busca não é necessariamente ruim

É aqui que fica fácil interpretar errado. Um uso alto da busca às vezes pode ser um bom sinal. Clientes que compram pela busca geralmente sabem exatamente o que querem e, segundo o Baymard Institute, esse é um grupo com alta intenção de compra. Uma barra de busca muito usada, e usada com eficiência, é um ativo.

A questão é *o que* os clientes estão buscando.

Se um cliente digita o nome de um produto bem específico, um SKU ou uma marca — isso é comportamento de busca saudável. O menu não pode, e nem deveria, listar cada item individualmente.

Mas se os clientes ficam digitando coisas que deveriam estar visíveis logo no menu — "camisa branca", "promoção", "novidades", "novo" — isso é um sinal de que o menu não está claro o suficiente. Os clientes não buscam porque gostam de buscar. Eles olham para cima, para o menu, não encontram um caminho de entrada e recorrem à caixa de busca como uma saída de emergência.

O Baymard descreve esse fenômeno com precisão: muitas buscas por "tipo de produto" são, na verdade, clientes tentando chegar a uma categoria mais rápido, ou fazendo isso porque não conseguiram encontrar aquela categoria pelo menu principal. Em outras palavras, a barra de busca está carregando um trabalho que deveria ter sido feito pelo menu.

## Lendo os seus termos mais buscados

Não pare no número total. A parte mais valiosa são os seus **termos mais buscados** — a lista das palavras-chave mais procuradas, extraída do parâmetro `search_term`.

Imprima as 30 a 50 buscas mais frequentes e coloque-as lado a lado com o seu menu atual. Depois, pergunte a si mesmo, linha por linha: aquilo que o cliente digitou já tem um caminho de entrada claro no menu?

Normalmente, três grupos aparecem:

- **Corresponde a um nome de categoria que já está no menu.** O cliente digita "vestido" enquanto o menu diz "Saias". O cliente digita "desconto" enquanto o menu diz "Outlet". Esse é o sinal mais claro: a categoria *existe*, mas o nome dela no menu não combina com a linguagem que os clientes usam, então eles não a reconhecem e precisam digitá-la na mão.
- **Algo que você tem, mas que o menu nunca menciona.** Os clientes digitam "presentes", "plus size", "conjuntos combinando" — você tem estoque para esse grupo, mas não transformou isso em uma seção própria. Isso é uma dica para adicionar uma nova categoria ou filtro.
- **Algo que você não vende.** Os clientes digitam o nome de um produto que você não trouxe para o catálogo. Esse grupo não tem nada a ver com o menu, mas é um dado valioso para as compras.

O primeiro grupo é o que vale a pena corrigir de imediato. Cada busca que corresponde a um nome de categoria é um cliente que teve de dar um passo a mais que não deveria ter sido necessário.

## Nomeie o seu menu na linguagem dos seus clientes

A conclusão é bem simples: renomeie os itens do menu do jeito que os clientes se referem a eles, e não do jeito que você — o lojista — se refere.

Os lojistas tendem a nomear os menus na própria linguagem interna: "Coleção Primavera/Verão", "Linha Premium", "Grupo A". Para nós, isso soa perfeito, porque vivemos dentro dessa forma de categorizar. Os clientes não. Os clientes digitam o que está na cabeça deles: "camisa de manga curta", "top de linha", "barato".

A regra que surge daí: os seus termos mais buscados são o dicionário que os seus clientes escreveram para você. Se muita gente digita "promoção", considere um item de menu chamado simplesmente "Promoção" em vez de "Outlet" ou "Ofertas". Se muita gente digita "vestido", coloque "Vestidos" em primeiro lugar, ou use no lugar de "Saias".

O teste também é tranquilo: mude alguns rótulos e depois acompanhe, ao longo das semanas seguintes, se o uso da busca para aquelas buscas específicas cai. Se os clientes deixarem de precisar buscar algo que agora está logo no menu, você sabe que corrigiu a coisa certa.

A parte difícil não é técnica — é estar disposto a mudar os rótulos. Renomear um menu parece algo pequeno, mas mexe com a forma como definimos nossa própria loja. Uma ferramenta de arrastar e soltar como o [Navi+](https://naviplus.io) tira um pouco do desconforto disso — você edita rótulos, reordena e experimenta novos layouts em um Mega Menu ou Tab Bar sem código e sem medo de quebrar o seu tema. Quando mudar um rótulo é barato, você fica mais disposto a ouvir os seus clientes.

A taxa de uso da busca, lida da maneira certa, é a voz dos clientes que tentaram usar o menu e o acharam insuficiente. Eles ficaram e buscaram mesmo assim. Nosso trabalho é ouvir o que eles estão nos dizendo.

---

Este artigo faz parte do guia maior sobre [Como Saber se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar](/pt/measuring-menu-performance/).