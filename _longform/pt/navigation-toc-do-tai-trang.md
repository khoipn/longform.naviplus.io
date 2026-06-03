---
lang: pt
ref: navigation-toc-do-tai-trang
order: 5
title: "Navegação e velocidade de página — escolhendo um app de menu que não prejudique os Core Web Vitals"
description: "Como escolher um app de menu compatível com os Core Web Vitals que não deixe sua loja Shopify mais lenta: entenda LCP, INP e CLS, o que torna um app rápido e um checklist para você mesmo medir antes de instalar — sem precisar de código."
topic_tag: "Velocidade"
hero_color: "#9c36b5"
read_time: 6
seo_keywords:
  - app de menu Core Web Vitals
  - velocidade de carregamento de página
  - velocidade de página
  - Built for Shopify
date: 2026-06-02
child_links:
  - title: "O que são os Core Web Vitals e por que importam para você"
    url: "/pt/topic/core-web-vitals-la-gi/"
    desc: "LCP, INP, CLS — os três números que o Google observa."
  - title: "Como um app de menu afeta a velocidade — e como perceber isso"
    url: "/pt/topic/app-menu-anh-huong-toc-do/"
    desc: "JavaScript pesado, bloqueio de renderização, deslocamento de layout."
  - title: "O que torna um app de menu bom em velocidade"
    url: "/pt/topic/tieu-chi-app-menu-nhanh/"
    desc: "Cinco pontos para verificar antes de confiar em um app."
  - title: "Um checklist antes de instalar qualquer app de menu"
    url: "/pt/topic/checklist-cai-app-menu/"
    desc: "Meça antes, meça depois e acompanhe por algumas semanas."
---

Cada app que você adiciona à sua loja injeta um pouco de código nas suas páginas. Um app de menu é uma das primeiras coisas a carregar, porque o cliente precisa ver a navegação no momento em que a página abre. Então a relação entre um **app de menu** e os **Core Web Vitals** não é uma preocupação técnica distante — ela toca diretamente a primeiríssima impressão do seu cliente.

Eis o que é fácil deixar passar: um menu bonito que carrega devagar pode, às vezes, ser pior do que nada. O cliente não enxerga o código; ele só vê uma página que trava, conteúdo que pula de lugar ou um menu que ele toca e não responde. Este artigo reúne o que aprendi depois de tocar minha própria loja e medir tudo várias vezes — não para te assustar com velocidade, mas para te dar base suficiente na hora de escolher um app de menu sem abrir mão da experiência.

## O que são os Core Web Vitals e por que importam para você

Os Core Web Vitals são as três métricas que o Google usa para medir a experiência real de carregamento de uma página. Não são notas de laboratório — são dados coletados dos seus clientes de verdade.

As três métricas são:

- **LCP (Largest Contentful Paint)** — quanto tempo o maior elemento de conteúdo leva para aparecer. O Google considera bom 2,5 segundos ou menos.
- **INP (Interaction to Next Paint)** — o atraso quando o cliente clica ou toca. Bom é abaixo de 200 milissegundos.
- **CLS (Cumulative Layout Shift)** — o quanto o conteúdo pula de lugar enquanto a página carrega. Bom é abaixo de 0,1.

Um detalhe que costuma ser mal compreendido: o Google mede no percentil 75. Isso quer dizer que 75% das visitas precisam atingir o nível "bom" antes de uma página ser considerada aprovada. Uma média bonita não te salva se um quarto dos seus clientes tem uma experiência ruim.

Por que um lojista deveria se importar? Por dois motivos. Primeiro, este é um dos sinais de ranqueamento do Google, mesmo que não seja o maior deles. Segundo, e mais importante, ele reflete como o cliente realmente se sente. Cada pequeno atrito no topo do funil — inclusive uma página lenta — vai se somando.

A boa notícia é que você não precisa saber nada de código para ler esses três números. Eles estão disponíveis, são gratuitos e explicados de forma bastante clara.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/core-web-vitals-la-gi/">Leia o guia completo → O que são os Core Web Vitals e por que importam para você</a></p>

## Como um app de menu afeta a velocidade — e como perceber isso

A maioria dos apps na Shopify funciona injetando JavaScript na vitrine. Um app de menu não é diferente. Isso não é ruim em si — o problema é como esse código é carregado e quando ele roda.

Quando um script é carregado de forma que bloqueia a renderização, o navegador precisa baixar, ler e terminar de executar esse script antes de conseguir montar o resto da página. Um app de menu cai bem no grupo dos que tendem a causar problemas, porque ele precisa aparecer cedo, logo no topo da página.

Há três formas pelas quais um app de menu pode deixar tudo mais lento ou prejudicar a experiência:

- **Empurrar o LCP para cima** quando o menu é uma parte grande do que está no topo da página e precisa esperar o script terminar para ser exibido.
- **Aumentar o INP** quando cada toque no menu precisa esperar o JavaScript processá-lo, deixando a sensação de lentidão.
- **Aumentar o CLS** quando o menu (especialmente uma barra superior ou uma tab bar inferior) aparece tarde e empurra outros conteúdos para fora do lugar.

Sinais que você consegue perceber a olho nu, sem nenhuma ferramenta:

- O menu aparece visivelmente depois do corpo da página.
- A página dá um solavanco no instante em que o menu aparece.
- Você toca no menu e precisa esperar um momento até ele abrir.
- No celular, a tab bar inferior pisca ou muda de posição enquanto carrega.

Ver esses sinais não significa que o app de menu seja o único culpado — mas vale a pena medir antes e depois de removê-lo.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/app-menu-anh-huong-toc-do/">Leia o guia completo → Como um app de menu afeta a velocidade — e como perceber isso</a></p>

## O que torna um app de menu bom em velocidade

Quando você entende como um app de menu afeta as coisas, escolher um fica mais fácil. Abaixo estão os critérios que considero válidos avaliar, mais ou menos em ordem de importância.

**Carrega leve e não bloqueia a renderização.** Um app deveria carregar seu código com defer ou async, para que o menu não force a página a esperar. Você não consegue verificar isso diretamente, mas o resultado aparece nas suas notas de velocidade antes e depois de instalar.

**Reserva um espaço estável e não causa deslocamento de layout.** Um bom app de menu deveria reservar espaço para o menu de antemão, para que o CLS não suba. Esse é um ponto que muitas vezes passa despercebido, sobretudo com tab bars fixas e barras de navegação fixas no topo.

**Tem o selo Built for Shopify.** Esse é um sinal confiável. Para conquistar o selo **Built for Shopify**, um app não pode derrubar a nota do Lighthouse da vitrine em mais de dez pontos, conforme os requisitos publicados pela Shopify. Não é garantia de perfeição, mas mostra que o app passou de um patamar mínimo de velocidade de página.

**Configuração separada para mobile e desktop.** Um menu leve usado no contexto errado ainda não é bom. Poder definir uma tab bar para o mobile e um mega menu para o desktop significa que você não precisa espremer tudo em um único design.

**Permanece estável quando você troca de tema.** Se o menu fica armazenado de forma independente do tema, você não precisa reconstruí-lo toda vez que muda de design — e evita o risco de código residual se acumular durante a troca.

Uma comparação rápida entre um app de menu "pesado" típico e um otimizado:

| Aspecto | App que ignora a velocidade | App otimizado para velocidade |
|---|---|---|
| Como o código carrega | Bloqueia a renderização | Defer / async |
| Efeito no CLS | Costuma deslocar o layout | Reserva espaço estável |
| Built for Shopify | Geralmente não tem | Tem o selo |
| Configuração por dispositivo | Um único design compartilhado | Mobile e desktop separados |

O Navi+ é construído seguindo essas linhas: montar menus sem código, configuração separada para mobile e desktop, menus que permanecem no lugar quando você troca de tema, e o app possui o selo Built for Shopify. Você pode dar uma olhada em [naviplus.io](https://naviplus.io). Mesmo assim, eu ainda recomendaria que você meça na sua própria loja em vez de confiar no marketing — inclusive no nosso.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/tieu-chi-app-menu-nhanh/">Leia o guia completo → O que torna um app de menu bom em velocidade</a></p>

## Um checklist antes de instalar qualquer app de menu

Esta parte é um conjunto de passos práticos que você consegue fazer em uns quinze minutos, sem conhecimento técnico.

1. **Meça sua base primeiro.** Abra o PageSpeed Insights, cole a URL da sua página inicial e de uma página de produto e anote seus valores atuais de LCP, INP e CLS. Esse é o seu ponto de referência para comparar.
2. **Instale o app de menu em modo de teste.** A maioria dos apps tem um período de teste. Monte o menu da forma como você realmente pretende usá-lo — não configure pela metade.
3. **Meça essas mesmas páginas de novo.** Compare as três métricas com a sua base. Pequenas diferenças são normais; uma diferença grande no CLS ou no LCP é um sinal para olhar com mais atenção.
4. **Verifique a olho nu num celular real.** Carregue a página em 4G, se der. Observe se o menu aparece tarde, desloca o layout ou trava quando você toca.
5. **Olhe o selo e as avaliações.** Prefira apps com Built for Shopify e avaliações que mencionem velocidade em termos concretos.
6. **Remova com cuidado se não for ficar com ele.** Se decidir não manter, certifique-se de que o app remove todo o código que injetou e meça de novo para confirmar que suas notas voltam à base.

Uma observação sobre hábitos: não instale vários apps de menu ao mesmo tempo para compará-los. O código deles pode se sobrepor e distorcer suas medições. Teste um de cada vez, removendo cada um com cuidado antes de testar o próximo.

<p class="lf-readmore"><span class="lf-readmore-kicker">Aprofunde-se</span><a href="/pt/topic/checklist-cai-app-menu/">Leia o guia completo → Um checklist antes de instalar qualquer app de menu</a></p>

## Uma palavra sobre navegação, não só sobre velocidade

A velocidade importa, mas serve a um objetivo maior: ajudar o cliente a encontrar o que precisa. Um menu rápido que esconde toda a navegação não resolve nada.

Um estudo do Nielsen Norman Group com 179 usuários descobriu que esconder a navegação reduziu a descoberta de conteúdo quase pela metade, além de deixar os clientes mais lentos para agir e fazer com que encontrar as coisas parecesse mais difícil. A lição é bem simples: se você não precisa esconder, não esconda.

É por isso que, no celular, uma tab bar inferior tende a funcionar melhor do que um menu hambúrguer simples — os itens principais estão sempre ao alcance, sem precisar abrir nada para vê-los. Velocidade e boa navegação andam juntas; escolher um app de menu significa escolher as duas coisas de uma vez.

## Por onde começar

Velocidade não é um problema só para desenvolvedores. Como lojista, você é perfeitamente capaz de verificar isso por conta própria e tomar uma decisão bem fundamentada. Você não precisa ler uma única linha de código para saber se um app de menu está deixando sua loja mais lenta — basta saber onde olhar.

Uma ferramenta gratuita como o PageSpeed Insights já é suficiente para começar. Meça as notas da sua loja hoje, guarde-as como base e depois compare após experimentar um novo app de menu. Os números vão te dizer mais do que qualquer promessa de marketing — inclusive as promessas de quem escreveu este artigo.
