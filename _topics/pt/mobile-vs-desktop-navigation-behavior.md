---
lang: pt
ref: mobile-vs-desktop-navigation-behavior
title: "Métrica 4 — Comportamento de Navegação no Mobile vs. Desktop"
description: "Compare a navegação no mobile e no desktop: como medir isso no GA4, os sinais de alerta quando as saídas no mobile ficam mais altas que no desktop e como dividir o layout do seu Tab Bar para cada dispositivo."
parent_title: "Como Saber Se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar"
parent_url: "/pt/measuring-menu-performance/"
seo_keywords:
  - navegação mobile vs desktop
  - segmentos do GA4
  - categoria de dispositivo
date: 2026-06-02
---

Esta métrica é um pouco diferente das três anteriores. Em vez de olhar para um único número, você olha para o mesmo número, mas separado por dispositivo. É aqui que você compara a **navegação no mobile vs. desktop** — como as pessoas navegam no celular versus no computador.

Eu descobri isso mais tarde do que deveria. No começo, eu olhava o relatório combinado, via que os números do menu pareciam bons e ficava tranquilo. Foi só quando separei o mobile sozinho que percebi que metade dos meus visitantes estava tendo uma experiência completamente diferente daquela que eu imaginava.

## O mesmo menu, duas histórias diferentes

Quando você compara a navegação por dispositivo, há três coisas que valem mais a pena observar:

- **CTR (taxa de cliques no menu):** que porcentagem de visitantes realmente toca no menu em cada tipo de dispositivo.
- **Profundidade (até onde eles navegam):** depois de tocar, por quantas páginas eles passam.
- **Taxa de saída:** quantos visitantes vão embora tendo feito quase nada.

O ponto principal é que esses três números costumam diferir claramente entre mobile e desktop. No desktop, o menu costuma ser horizontal e estar sempre visível — uma olhada rápida e o visitante vê tudo. No mobile, o menu costuma ficar escondido atrás de um botão hambúrguer de três linhas, e a pessoa precisa tocar para abrir.

Essa diferença não é pequena. Segundo o Nielsen Norman Group, esconder a sua navegação principal atrás de um hambúrguer quase reduz pela metade a chance de os visitantes encontrarem o menu, além de fazê-los gastar mais tempo e achar a tarefa mais difícil. É o mesmo site, mas os usuários de desktop e os de mobile estão praticamente andando por duas lojas diferentes.

## Como medir: separe por categoria de dispositivo no GA4

Você não precisa de nenhuma ferramenta especial. O GA4 consegue fazer tudo.

A maneira mais simples é abrir o Explorar, criar um relatório de Formato livre e então adicionar **categoria de dispositivo** como dimensão. Agora cada métrica aparece em três linhas: desktop, mobile e tablet. Você compara taxa de rejeição, engajamento e páginas por sessão diretamente entre as linhas.

Se quiser ir mais fundo, crie segmentos separados — um segmento "Mobile" e um segmento "Desktop" — e aplique o mesmo relatório a cada um. Isso é útil quando você quer acrescentar condições extras, por exemplo, olhar apenas os visitantes que vieram de anúncios do Facebook, ou apenas os visitantes em uma página de categoria específica.

Uma observação sobre como o GA4 define as coisas. No GA4, uma sessão conta como "rejeição" quando não é engajada — ou seja, o visitante ficou menos de 10 segundos, viu apenas uma página e não disparou nenhum evento-chave. A taxa de rejeição é simplesmente o inverso da taxa de engajamento. Tenha isso em mente para os números não te confundirem.

Quando for medir, não foque nos números absolutos. Olhe para a **diferença** entre mobile e desktop.

## Uma configuração que funciona no desktop pode falhar no mobile

Esta é a parte que quero enfatizar, porque é a mais fácil de deixar passar.

Quando você monta um menu, está quase certamente sentado em frente a um computador. Você visualiza em uma tela larga, vê o mega menu organizado em várias colunas, acha tudo fácil de clicar e publica. O problema é que a maioria dos seus visitantes não está sentada do jeito que você está.

No mobile, tudo muda. A tela é estreita, os dedos são maiores que o cursor do mouse, e os visitantes geralmente tocam com um polegar enquanto seguram o celular com uma mão só. Segundo a pesquisa sobre zona do polegar de Steven Hoober, a maioria das interações no celular é feita com o polegar, e a área mais fácil de alcançar é a metade de baixo da tela. Um menu espremido no canto superior, com texto pequeno e itens bem juntinhos — ótimo no desktop, difícil de acertar no mobile.

Um exemplo conhecido: uma loja de moda coloca todo o catálogo em um mega menu de desktop bem detalhado — partes de cima, partes de baixo, vestidos, acessórios, por estação, por tamanho. Lindo. Mas no mobile, tudo isso é comprimido em uma lista longa e sem fim dentro do hambúrguer. O visitante precisa tocar para abrir, rolar para baixo, procurar e só então chegar ao toque. Cada passo a mais é mais uma chance de o visitante ir embora.

É por isso que você deve configurar a navegação separadamente para cada dispositivo. Para o mobile, muitas lojas trocam para um Tab Bar — uma barra de navegação fixa, presa na parte de baixo da tela, bem na zona do polegar — com os 3 a 5 itens mais importantes, como Início, Categorias, Busca e Carrinho. No desktop, elas mantêm o mega menu completo. Dois layouts para dois contextos.

## Sinal de alerta: saídas no mobile claramente maiores que no desktop

O sinal mais claro é fácil de notar: a taxa de rejeição no mobile é visivelmente maior do que no desktop.

Para ser justo, o mobile rejeitar um pouco mais que o desktop é normal em todo lugar, não só com você. Segundo benchmarks do setor, as sessões de mobile tendem a rejeitar em torno de 50%, enquanto o desktop fica mais baixo — a diferença média gira em torno de 10 pontos percentuais, e tem se mantido bastante estável por anos. Então não entre em pânico só porque o mobile está mais alto.

O que vale a preocupação é quando essa diferença é incomumente grande. Se, nas mesmas páginas, o mobile sai 20 pontos a mais que o desktop ou mais, esse é um sinal de que a sua experiência mobile tem um problema — e a navegação é uma das primeiras suspeitas.

Alguns outros sinais que vale observar ao mesmo tempo:

- CTR do menu no mobile muito menor que no desktop: os visitantes não encontram ou hesitam em tocar.
- Profundidade mais rasa no mobile: os visitantes chegam a uma página e fecham, sem navegar mais a fundo.
- Páginas carregando devagar no mobile: um menu ou app pesado deixa tudo lento, e os visitantes perdem a paciência. O Google recomenda LCP abaixo de 2,5 segundos, INP abaixo de 200ms e CLS abaixo de 0,1; o mobile costuma ser onde essas métricas ficam piores.

Lembre-se de que a taxa média de abandono de carrinho já está em torno de 70%, segundo o Baymard Institute. Uma navegação mobile difícil de usar só piora esse número.

## Ação: separe mobile e desktop em duas configurações distintas

O que você precisa fazer cabe em uma frase: não force um único menu a servir aos dois mundos.

Especificamente, depois de olhar os números no GA4:

1. Separe o relatório por categoria de dispositivo e encontre as páginas em que o mobile sai incomumente mais que o desktop.
2. Abra exatamente essas páginas no seu próprio celular de verdade e tente tocar no menu com um polegar só, como um cliente faria. Você vai sentir o atrito na pele.
3. Desenhe um layout mobile separado — priorize um Tab Bar na parte de baixo para os itens principais, enxugue a lista dentro do hambúrguer e deixe os botões grandes o suficiente para tocar.
4. Mantenha o desktop com o mega menu completo. Duas configurações, não uma.

Foi exatamente para isso que o [Navi+](https://naviplus.io) foi criado. Você configura mobile e desktop separadamente: um Tab Bar na parte de baixo para o mobile, um Mega Menu para o desktop, cada um com o seu próprio layout, sem mexer em nenhum código. O menu é otimizado para não derrubar os seus Core Web Vitals e permanece no lugar quando você troca de tema. É tudo arrastar e soltar.

O que eu tirei de tudo isso no fim é bem simples. Você não precisa de um menu perfeito. Você só precisa parar de julgar a experiência mobile com os olhos de quem está sentado em um desktop. Separe os números por dispositivo uma vez, e há uma boa chance de você enxergar o que vinha deixando passar esse tempo todo.

Este artigo faz parte do guia maior sobre [Como Saber Se o Seu Menu Está Funcionando — 5 Métricas para Acompanhar](/pt/measuring-menu-performance/).