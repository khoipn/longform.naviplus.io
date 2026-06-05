---
lang: pt
ref: menu-click-through-rate
title: "Métrica 1 — Taxa de cliques de cada item do menu"
description: "A CTR dos itens do menu mostra quais itens recebem cliques e quais são ignorados. Como medir com GA4 e Clarity, como interpretar e como ajustar seu menu para elevar a taxa de cliques."
image: "/images/measuring-menu-performance/menu-click-through-rate.webp"
image_alt: "Métrica 1 — Taxa de cliques de cada item do menu"
parent_title: "Como saber se o seu menu está funcionando bem — 5 métricas para acompanhar"
parent_url: "/pt/measuring-menu-performance/"
seo_keywords:
  - CTR dos itens do menu
  - GA4
  - Hotjar
  - Clarity
date: 2026-06-02
---

A CTR dos itens do menu é o primeiro número que eu olho sempre que quero saber se um menu está cumprindo seu papel. Em termos simples, ela diz, entre as pessoas que veem o menu, qual a proporção que de fato clica em um item específico. Um item que muita gente vê mas poucos clicam normalmente está te dizendo alguma coisa — você só precisa interpretar do jeito certo.

Este artigo se aprofunda em uma única métrica: a CTR de cada item do menu. Como medir, como interpretar e, o mais importante, o que fazer depois que você interpretou.

## O que é a CTR dos itens do menu

A CTR (taxa de cliques) de um item do menu é a razão entre quantas vezes esse item é clicado e quantas vezes o menu é exibido. Por exemplo, se o menu é exibido 1.000 vezes em uma semana e o item "Novidades" é clicado 80 vezes, então a CTR desse item é de cerca de 8%.

A parte boa é que você não olha um número geral. Você olha cada item, lado a lado. Quanto para "Início", quanto para "Promoção", quanto para "Contato". É a diferença entre os itens que vale a pena reparar, não o valor absoluto.

Eu não me preocupo muito com o que "conta como uma boa CTR". Cada loja é diferente, cada público é diferente. O que me interessa é a ordem: quais itens são muito usados e quais quase ninguém toca.

## Como medir a CTR de cada item

Existem algumas formas, da mais precisa à mais visual. Você não precisa das três — escolha a que combina com você.

### Medindo com o GA4

O GA4 (Google Analytics 4) é a abordagem quantitativa mais clara. Por padrão, a Medição Aprimorada captura apenas os cliques que levam para fora do seu domínio; ela não sabe automaticamente quando um item da sua barra de navegação interna foi clicado.

Para capturar os cliques no menu, a abordagem comum é usar o Google Tag Manager: criar um acionador para cliques em links dentro da área de navegação e enviar ao GA4 um evento dedicado (muita gente o chama de `menu_click`), junto com um parâmetro que guarda o nome do item que foi clicado. Depois disso, no relatório Engajamento > Eventos, você verá cada item com sua contagem de cliques listada separadamente.

Uma observação que vem da experiência: depois de configurar isso, os dados costumam levar um ou dois dias para aparecer por completo nos relatórios, então não se apresse para tirar conclusões no primeiro dia. E você precisa saber o "número de pessoas que viram o menu" para calcular a taxa — isso normalmente é aproximado pelo número de visualizações de página que contêm o menu.

### Medindo com Hotjar ou Clarity

Se você prefere não mexer com tags e código, o Hotjar ou o Microsoft Clarity te dão a resposta de forma visual. Os dois têm mapa de calor de cliques — um mapa de calor mostrando onde há muito clique e onde as coisas estão frias.

O Microsoft Clarity é gratuito e fácil de começar. Você adiciona um snippet e, alguns dias depois, abre o mapa de calor e vê quais áreas do menu estão acesas e quais estão escuras. Para menus de celular, o Clarity também consegue mostrar o estado do menu expandido, então dá para ver os itens dentro de um slide menu, não só a parte visível de imediato.

Uma coisa que o Clarity faz bem e o GA4 não: distinguir entre "cliques mortos" (dead clicks) e "cliques de raiva" (rage clicks). Um clique morto é quando o visitante clica em algo que parece clicável mas nada acontece. Um clique de raiva é quando o visitante clica repetidamente no mesmo ponto por frustração. Se um item do menu recebe muitos cliques mortos, é bem provável que ele pareça um botão mas não leve a lugar nenhum de verdade — isso é um problema a corrigir, não simplesmente um caso de CTR baixa.

Eu costumo combinar os dois: o GA4 para os números, para comparar ao longo do tempo, e o Clarity ou o Hotjar para entender o "porquê" por trás dos números.

## Como ler a tabela de CTR

Quando você alinha os itens lado a lado, o quadro normalmente cai num formato conhecido: alguns itens com CTR muito alta, um grupo no meio e alguns perto de zero.

Um item perto de zero não é automaticamente um item ruim. Ele pode se encaixar em um de dois grupos:

- Um item redundante: o cliente realmente não precisa dele. Por exemplo, um item "Notícias" quando a loja não publicou nada o ano inteiro.
- Um item com nome mal interpretado: o cliente precisa daquele conteúdo mas não percebe que esse item leva até lá. O nome é criativo demais, ou usa um jargão interno com o qual o cliente não está familiarizado.

A forma de diferenciar esses dois grupos é olhar se o conteúdo por trás dele é alcançado por outro caminho. Se a página "Promoções" tem muitas visualizações mas o item de menu "Ofertas loucas" tem CTR baixa, o problema está muito provavelmente no nome, não no conteúdo.

### Quando um item importante tem uma CTR estranhamente baixa

Esse é o caso em que vale a pena pausar por mais tempo. Itens como "Promoção" ou "Novidades" deveriam atrair cliques. Quem visita uma loja de varejo costuma estar curioso para ver o que está com desconto e o que é novo. Se esses itens têm uma CTR estranhamente baixa, raramente é porque os clientes não têm interesse — normalmente é uma questão de onde eles estão posicionados.

O item pode estar lá no fim do menu, fora do campo de visão. Pesquisas de rastreamento ocular do Nielsen Norman Group mostram que os usuários tendem a varrer uma página num padrão em formato de F — passando os olhos na horizontal no topo, depois descendo pela borda esquerda, pulando boa parte do meio e da parte de baixo. Um item valioso colocado num canto escondido facilmente escapa do olhar do cliente.

No celular, o problema é ainda mais acentuado. Se o item "Promoção" está enterrado bem no fundo do menu hambúrguer, o cliente precisa tocar para abrir o menu e depois rolar para encontrá-lo. Cada passo a mais é mais um ponto onde as pessoas desistem. É por isso que muitas lojas colocam "Promoção" direto na Tab Bar, na parte de baixo da tela — sempre visível, sem precisar abrir nada.

## O que fazer depois de interpretar

Se você interpreta e não muda nada, o número continua sendo só um número. Eu costumo agrupar isso em três ações.

Primeiro, enxugue os itens raramente usados. Quanto mais longo o menu, mais diluído fica cada item e mais difícil é para o cliente escolher. Se um item fica perto de uma CTR zero por muitas semanas e o conteúdo por trás dele também recebe poucos visitantes, pode remover ou mesclar a outro lugar. Um menu mais enxuto ajuda os itens restantes a se destacarem mais.

Segundo, renomeie os itens pouco claros. Essa é a mudança mais barata, e o efeito muitas vezes aparece na hora. Use as palavras que os clientes usam, não as palavras que você gosta: "Coleção" poderia virar "Produtos", "Ofertas loucas" virar "Promoções". Depois de renomear, acompanhe a CTR de novo por algumas semanas para confirmar.

Terceiro, mova os itens importantes para um lugar de destaque. Se "Promoção" deveria ser forte mas está fraca no momento, mova para o começo do menu no desktop, ou coloque na Tab Bar no celular. Mudar a posição costuma ter um impacto maior do que as pessoas esperam.

Essa construção e essas mudanças não exigem necessariamente um desenvolvedor. Com uma ferramenta como o [Navi+](https://naviplus.io), você arrasta e solta para reordenar os itens, renomeá-los ou separar um item para a Tab Bar na parte de baixo no celular — as configurações de celular e desktop são separadas, então dá para deixar "Promoção" em destaque no telefone sem poluir o menu do desktop. Assim, o ciclo de "ler os números e ajustar o menu" acontece rápido, e você consegue continuar testando e medindo de novo.

Uma última observação: mude uma coisa de cada vez. Se você renomear, reposicionar e cortar um item tudo de uma vez, depois não vai saber qual mudança provocou a variação da CTR. Mude uma coisa, espere os dados, depois passe para a próxima.

Este artigo faz parte do guia maior sobre [Como saber se o seu menu está funcionando bem — 5 métricas para acompanhar](/pt/measuring-menu-performance/).
