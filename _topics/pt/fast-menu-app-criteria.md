---
lang: pt
ref: fast-menu-app-criteria
title: "Como saber se um app de menu é realmente rápido: 5 critérios"
description: "Cinco critérios de um app de menu rápido que você mesmo pode verificar: lazy loading, JavaScript enxuto, sem bloqueio de renderização, CDN e o selo Built for Shopify. Medidos pelas Core Web Vitals."
image: "/images/navigation-and-page-speed/fast-menu-app-criteria.webp"
image_alt: "Como saber se um app de menu é realmente rápido: 5 critérios"
parent_title: "Navegação e velocidade de página — escolhendo um app de menu que não prejudique as Core Web Vitals"
parent_url: "/pt/navigation-and-page-speed/"
seo_keywords:
  - critérios de app de menu rápido
  - lazy loading
  - CDN
  - Built for Shopify
date: 2026-06-02
---

O menu é algo que quase todo visitante toca. Por isso, um app de menu lento faz a página inteira parecer lenta. Só que "rápido" é uma palavra vaga. Na hora de procurar um app, a gente vive ouvindo promessas como "ultraleve" e "não vai deixar sua página lenta", sem nenhuma forma clara de comprovar nada disso.

Este artigo reúne cinco **critérios de um app de menu rápido** que você mesmo pode verificar, mesmo sem ser uma pessoa técnica. São as coisas que aprendi depois de tocar uma loja por um tempo e de revisitar a documentação tanto do Google quanto da Shopify.

Um ponto de referência antes de começar. O Google mede a experiência de carregamento da página com o conjunto das Core Web Vitals, em que os limites considerados "bons" são LCP abaixo de 2,5 segundos, INP abaixo de 200 milissegundos e CLS abaixo de 0,1 ([web.dev](https://web.dev/articles/vitals)). Um bom app de menu é aquele que não piora esses números.

## 1. Lazy loading: carregar só quando preciso

Lazy loading significa que o app não carrega tudo no instante em que a página abre. Tudo o que ainda não é necessário fica em espera e só carrega quando o visitante passa o mouse ou clica.

Um mega menu de desktop pode conter dezenas de itens, junto com ícones e miniaturas. Se o app tentar carregar tudo isso de cara, ele disputa recursos com o conteúdo principal que o visitante de fato quer ver, como imagens e preços de produtos. Com lazy loading, a camada de submenu só aparece quando o visitante realmente passa o mouse sobre ela.

Como verificar: abra a página no computador e repare se o menu hesita por um instante ao abrir. Uma pequena pausa no primeiro hover costuma ser sinal de que o app está carregando no momento certo, em vez de empurrar tudo desde o começo. Isso importa principalmente em lojas com muitas categorias, como lojas de variedades ou lojas de moda com muitas linhas de produto.

## 2. JavaScript enxuto

Este é o critério mais difícil de julgar a olho nu, mas vale perguntar ao fornecedor. A ideia é simples: um menu não deveria carregar um framework pesado inteiro só para mostrar alguns links.

O JavaScript é a parte que "roda" do app. Quanto maior o pacote de JavaScript, mais tempo o navegador gasta carregando e processando, o que afeta diretamente o INP, a capacidade de resposta quando o visitante clica. Um app de menu escrito de forma enxuta carrega apenas o código necessário para abrir e fechar o menu, e nada além disso.

Você não precisa ler código para julgar isso. Rode a página no [PageSpeed Insights](https://pagespeed.web.dev/) do Google e olhe a seção de JavaScript não utilizado. Se essa parte inchar de forma perceptível depois de instalar o app de menu, é um sinal para pensar duas vezes.

É também por isso que um app que faz uma coisa bem feita costuma ser mais leve do que um app que tenta fazer uma dúzia de coisas. Quanto mais você enfia ali dentro, mais difícil fica manter o pacote de JavaScript enxuto.

## 3. Sem bloqueio de renderização

Bloqueio de renderização é quando o script do app impede o navegador de desenhar o conteúdo principal na tela. O visitante precisa esperar o app de menu terminar de carregar antes que o resto da página apareça.

Segundo a documentação do Google, um script carregado da forma padrão bloqueia o navegador de analisar e exibir a página até que esse script tenha terminado de carregar, ler e executar ([web.dev](https://web.dev/articles/render-blocking-resources)). Isso adia marcos como o First Contentful Paint e o LCP. Em outras palavras, um app de menu colocado no lugar errado pode deixar a tela em branco por mais tempo, mesmo que o menu em si não tenha nada de complicado.

Um app bem construído carrega seu script de forma assíncrona (async ou defer), de modo que a página mostra primeiro o conteúdo principal, e o menu se conecta depois, com um atraso que o visitante mal percebe. Esse ponto é difícil de verificar por conta própria, mas o PageSpeed Insights tem um aviso específico sobre "recursos que bloqueiam a renderização", e você pode comparar a pontuação antes e depois de instalar o app.

## 4. Arquivos servidos por uma CDN

Uma CDN é uma rede de servidores espalhados por vários lugares do mundo. Quando os ícones, imagens e arquivos do menu são servidos por uma CDN, eles vêm do servidor mais próximo do visitante, então carregam rápido e de forma uniforme em qualquer região.

Isso é prático para lojistas que atendem clientes internacionais. Se os arquivos do menu ficam em um único servidor localizado longe, visitantes na Europa ou nos EUA vão esperar mais por cada pequeno ícone. Com uma CDN, essa distância encurta.

Também é fácil perguntar ao fornecedor: de onde são servidos os ícones e as imagens do menu? Um app sério vai saber responder, e muitas vezes vai destacar o uso de uma CDN como ponto positivo. Na Shopify, a maior parte dos arquivos passa pela infraestrutura de CDN integrada, mas ainda assim vale conferir as imagens e os ícones que o próprio app de menu carrega.

## 5. O selo "Built for Shopify"

Se você usa a Shopify e prefere não verificar você mesmo cada critério técnico acima, o selo **Built for Shopify** é um atalho confiável. É um rótulo que a Shopify concede a apps que atendem aos padrões de qualidade dela, e a Shopify avalia de forma bastante rigorosa.

O que chama atenção é que esse conjunto de critérios inclui uma parte de desempenho, tirada diretamente das Core Web Vitals. De acordo com a [documentação da Shopify](https://shopify.dev/docs/apps/launch/built-for-shopify/requirements), um app precisa atingir LCP de 2,5 segundos ou menos, CLS de 0,1 ou menos e INP de 200 milissegundos ou menos, medidos no percentil 75 dos carregamentos. Além disso, o app não pode derrubar a pontuação de desempenho do Lighthouse da loja em mais de 10 pontos.

Em outras palavras, um app com esse selo significa que ele já passou por uma parte da avaliação técnica que você teria de fazer sozinho de outra forma. O selo não substitui medir na sua própria loja, mas reduz a lista de candidatos muito rápido.

Entre os apps de menu, o [Navi+](https://naviplus.io) tem o selo "Built for Shopify" e é otimizado segundo os critérios acima: carrega de forma enxuta, não bloqueia a renderização e evita deslocar o layout quando o menu aparece. O Navi+ consegue montar uma Tab Bar inferior para mobile, um Mega Menu, Slide Menu, FAB e Grid Menu, com configurações separadas para mobile e desktop, sem precisar de código. Menciono isso aqui porque é um exemplo próximo dos cinco pontos que acabamos de discutir, não para dizer que é a única opção.

## Juntando tudo num hábito de verificação

Os cinco critérios acima se resumem a algumas coisinhas que você consegue fazer em dez minutos:

- Passe o mouse sobre o menu e veja se ele hesita por carregar tudo de uma vez (lazy loading).
- Rode o PageSpeed Insights antes e depois de instalar o app, e compare o JavaScript não utilizado e os avisos de bloqueio de renderização.
- Pergunte ao fornecedor sobre uma CDN para ícones e imagens.
- Prefira apps com o selo "Built for Shopify" se você vende na Shopify.

Uma loja costuma instalar vários apps, e cada um soma um pouquinho ao tempo total. Como o menu aparece em quase toda página, esse é um ponto em que vale ser um pouco mais exigente. Escolher certo desde o começo poupa você de ter que desinstalar e reinstalar depois.

Este artigo faz parte do guia maior sobre [Navegação e velocidade de página — escolhendo um app de menu que não prejudique as Core Web Vitals](/pt/navigation-and-page-speed/).