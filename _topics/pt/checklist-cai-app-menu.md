---
lang: pt
ref: checklist-cai-app-menu
title: "Um checklist para seguir antes de instalar qualquer app de menu"
description: "Um checklist de instalação de app de menu para lojas Shopify: quatro passos para medir o PageSpeed e os Core Web Vitals antes e depois de instalar, para que você escolha um app que não vai deixar suas páginas lentas no celular nem no computador."
parent_title: "Navegação e velocidade de página — escolhendo um app de menu que não prejudique os Core Web Vitals"
parent_url: "/pt/navigation-toc-do-tai-trang/"
seo_keywords:
  - checklist de instalação de app de menu
  - PageSpeed Insights
  - Search Console
date: 2026-06-02
---

Antes de clicar em "Adicionar app" para qualquer aplicativo de menu, há uma coisinha que vale a pena fazer: anotar quão rápida está a sua loja agora. Parece simples, mas essa é a parte que a maioria das pessoas pula — e aí, algumas semanas depois, percebem que o site parece mais lento sem saber qual app foi o culpado.

Este é um **checklist de instalação de app de menu** curto que você pode seguir agora mesmo, tirado da experiência de tocar lojas de verdade. Nada complicado — apenas algumas medições antes e depois, para que você não instale um menu lindo e troque, sem perceber, velocidade por ele. Quanto mais apps você instala, mais esse hábito compensa, porque cada app que você adiciona pode mexer na velocidade da sua página.

## Por que vale a pena se importar com a velocidade

Os compradores online já abandonam o carrinho com facilidade. Segundo o Baymard Institute, a taxa média de abandono de carrinho gira em torno de 70%, e esse número quase não mudou em mais de uma década. Cada segundo a mais de carregamento, cada salto no layout enquanto a página carrega, é mais um motivo para o cliente desistir.

O Google também trata a velocidade e a estabilidade da página como parte da experiência, reunidas em um conjunto de métricas chamado Core Web Vitals. Os três números principais, segundo o Google:

- LCP (Largest Contentful Paint): bom quando está abaixo de 2,5 segundos.
- INP (Interaction to Next Paint): bom quando está abaixo de 200 milissegundos.
- CLS (Cumulative Layout Shift — a página fica pulando?): bom quando está abaixo de 0,1.

Você não precisa decorar isso. Basta lembrar: um app de menu bem construído não vai piorar esses três números de forma perceptível. O checklist abaixo ajuda você a confirmar isso com dados, em vez de no feeling.

## Checklist de instalação de app de menu: quatro passos, meça antes e depois

Este é o coração do artigo. Quatro passos, em ordem.

### Passo 1: Meça a pontuação de PageSpeed da sua loja antes de instalar

Abra o [PageSpeed Insights](https://pagespeed.web.dev) do Google, cole a URL da sua página inicial e a de uma página de produto representativa, e rode o teste. Anote as pontuações — tire um print ou salve em um arquivinho.

Por que salvar? Porque, sem um retrato do "antes", você não tem nada com que comparar. Algumas semanas depois, quando o site parecer lento, você não vai saber se foi o app de menu, o novo app de avaliações que você instalou ou aquele lote de imagens de produto que você acabou de adicionar.

O PageSpeed Insights te dá dois tipos de dado. A parte de cima são os dados de campo (field data) de usuários reais (coletados do Chrome User Experience Report); a parte de baixo são os dados de laboratório (lab data) (a máquina do Google simulando um único carregamento de página). Neste passo, anote só a pontuação geral mais os três números de LCP, INP e CLS.

### Passo 2: Instale o app, meça de novo, compare

Instale o app de menu que você pretende usar e configure-o exatamente como você realmente vai usá-lo — ou seja, ative os tipos de menu que você vai usar: um Tab Bar embaixo no celular, um Mega Menu para o desktop, ou um Slide Menu — em vez de medir com as configurações padrão.

Depois, rode o PageSpeed Insights de novo nas mesmas URLs do Passo 1. Coloque os dois resultados lado a lado.

Uma observação: logo depois de instalar, os dados de campo (parte de cima) geralmente ainda não mudaram, porque eles agrupam os últimos 28 dias. O que você consegue comparar na hora são os dados de laboratório. Não se desespere se a pontuação de laboratório cair alguns pontos — o que importa é quanto. Uma queda de 2 a 3 pontos costuma não ser motivo de preocupação; uma queda grande, ou o CLS disparando de repente (a página dando um solavanco quando o menu aparece), merece um segundo olhar.

### Passo 3: Verifique os Core Web Vitals no Search Console depois de 1-2 semanas

Este é o passo que te dá os números reais, porque mede a experiência de clientes de verdade. Abra o [Google Search Console](https://search.google.com/search-console) e vá em Core Web Vitals (Experiência na página). Esse relatório usa dados de campo dos seus próprios usuários.

Por que esperar 1-2 semanas? Os dados de campo são calculados sobre uma janela móvel de 28 dias. Depois de cerca de duas semanas, uma parte relevante dessa janela já é dado novo — o suficiente para você ver uma tendência. No Search Console, fique de olho nas URLs que passam de "Bom" para "Precisa de melhorias" ou "Ruim". Se o grupo de URLs com problema inchar logo depois de você instalar o app de menu, isso é um sinal.

Se a sua loja ainda recebe poucas visitas, o Search Console pode não ter dados suficientes para mostrar o relatório. Nesse caso, apoie-se no PageSpeed Insights e nos dados de laboratório.

### Passo 4: Se as pontuações caírem de forma perceptível, troque de app ou ajuste a configuração

Se, depois de medir, as métricas estiverem claramente piores, você tem duas opções.

Uma é otimizar a configuração: desligar animações desnecessárias, reduzir a quantidade de itens em um Mega Menu grande demais, tirar as imagens pesadas amontoadas no menu. Muitas vezes o problema não é o app, e sim a forma gananciosa como construímos o menu.

A outra é trocar de app, se o próprio app for pesado e não houver jeito de contê-lo. Um bom app de menu deveria tratar a velocidade como responsabilidade dele mesmo, sem empurrar esse trabalho para você.

## Não se esqueça de medir no celular

A maioria dos lojistas recebe mais tráfego do celular do que do computador — clientes rolando o Facebook, tocando num link, abrindo a loja direto no aparelho.

As pontuações no celular quase sempre são mais baixas que as do desktop, porque os celulares têm menos potência e as redes móveis são menos estáveis que o wifi. No PageSpeed Insights, lembre-se de mudar para a aba Mobile para medir — não fique só na pontuação de Desktop só porque ela parece mais bonita.

Isso vale especialmente para o menu do celular. Um Tab Bar mal construído na base da tela ou um Slide Menu podem fazer a página dar um solavanco (empurrando o CLS para cima) bem na hora em que o cliente abre a loja. Experimente abrir a sua loja no seu próprio celular e observe se algo pula ou trava enquanto a página carrega. Seus próprios olhos costumam pegar coisas que a pontuação ainda não refletiu.

## Um lembrete tranquilo

O checklist acima não tem a intenção de assustar você e afastá-lo dos apps de menu — uma boa navegação ajuda os clientes a encontrar produtos mais rápido, e isso vale o investimento. A ideia é simplesmente esta: escolha um app que seja cuidadoso com a velocidade.

O [Navi+](https://naviplus.io) foi construído exatamente nesse espírito: um construtor de menus no-code, de arrastar e soltar, para Tab Bars, Mega Menus, Slide Menus, FABs e Grid Menus; com configurações separadas para celular e computador; e ajustado para não arrastar para baixo os seus Core Web Vitals. Mesmo assim, o conselho honesto continua valendo: rode os quatro passos de medição acima com qualquer app, incluindo o Navi+, para que você possa se tranquilizar com os números da sua própria loja.

Este artigo faz parte do guia maior sobre [Navegação e velocidade de página — escolhendo um app de menu que não prejudique os Core Web Vitals](/pt/navigation-toc-do-tai-trang/).
