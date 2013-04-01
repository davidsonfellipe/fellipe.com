---
title: Uso de fontes personalizadas em websites utilizando Cufón
author: Davidson Fellipe
layout: post
lang: pt
permalink: /blog/uso-de-fontes-personalizadas-em-websites-utilizando-cufon/
dsq_thread_id:
  - 458906594
categories:
  - desenvolvimento
---
Em 2003, uma técnica para utilização de fontes não comuns aos sistemas operacionais, foi popularizada e foi batizada de Fahrner Image Replacement (FIR), onde sua finalidade era combinar alta-fidelidade do design e atender requisitos de melhorias de acessibilidade. O texto mais antigo sobre image replacement, que conheço, é o [artigo do Douglas Bowman][1], porém essa técnica teve uma melhoria significativa em termos de acessibilidade com o [artigo do Dave Shea][2]. Uma grande desvantagem dessa técnica é a impossibilidade de utilização em textos dinâmicos. Sendo assim, apresento-lhes os prós e contras, de uma das técnicas para utilizar textos dinâmicos, o Cufón.

 [1]: http://stopdesign.com/archive/2003/03/07/replace-text.html
 [2]: http://www.mezzoblue.com/archives/2003/12/12/accessible_i/

## Atualização
Não vale a pena usar Cufón em seus projetos, pois retarda bastante o tempo de renderização da página.

## Cufón

Cufon foi criado pelo [Simo Kinnunen][3], apartir da necessidade de utilização de fontes personalizadas, apartir de arquivos TTF, OTF ou PFB, sem a necessidade de utilizar flash ou font-face. O engine de renderização do Cufón, foi desenvolvido em JavaScript e faz uso do VML (Vector Markup Language) quando renderizado no Internet Explorer, e faz o uso do elemento  em outros navegadores. É bem fácil de configurar e seu processo de configuração é feito na seguinte ordem:

 [3]: https://github.com/sorccu

1.  Acesse  e faça o upload dos arquivos da fonte que deseja utilizar, ou se preferir baixe o código fonte no [github do projeto][4].
2.  Esse script gerado, por padrão virá algo como nomedafonte.font.js e será necessário para renderizar a fonte escolhida;
3.  Ao inserir o *script* na sua página em basta associa-lo a algum elemento, class ou ID, tal como Cufon.replace(‘h1, h2′) ou Cufon.replace(‘.classX’);.

 [4]: http://github.com/sorccu/cufon

Linha da engine do cufon

##JS geradora da fonte

Chamadas no javascript para renderização do Cufón

    //Chamada da renderização do Cufón para elementos
    Cufon.replace('h1, h2');
    //Chamada da renderização do Cufón para classes
    Cufon.replace('.classX');

Para trabalhar com mais de uma fonte, utilize da seguinte forma:  

    Cufon.replace('h2', { fontFamily: 'Helvetica' });
    Cufon.replace('h3', { fontFamily: 'Myriad Pro' });


Para mais detalhes sobre como implementar o Cufón, veja a sua [Documentação][5] e o [FAQ][6]. Neste [link][7] você pode conhecer 40 exemplos do uso dessa técnica.

 [5]: http://github.com/sorccu/cufon/wiki
 [6]: http://github.com/sorccu/cufon/wiki/faq
 [7]: http://spyrestudios.com/cufon-font-replacement/

## Direitos autorais

Após gerar arquivos Cufón, você deve restringir o uso apenas para o domínio do projeto. Na própria [página geradora da fonte][8] você pode fazer isso, caso não faça isso, qualquer um poderá obter o seu javascript renderizador de fontes e utiliza-lo em outros sites. Há fontes que possuem em sua licença, proibições de uso via scripts, ou seja, nunca utilize Cufón para essas fontes.

 [8]: http://cufon.shoqolate.com/generate/

## Seleção de Texto com Cufón?

Muito se discute sobre o suporte a seleção do conteúdo com o Cufón. Foi desenvolvida, pelo Steven Noble, uma forma, onde é possivel permitir a seleção de textos com o Cufón, [confira nesse link][9].

 [9]: http://blog.noblemail.ca/2009/03/two-partial-fixes-for-cufon-select-and.html

## Conclusão

Hoje, o Cufón, **NÃO** é minha técnica preferida para renderização de fontes, caso queira utilizar a mesma, seja moderado em grandes partes de texto. Pois irá **comprometer bastante o tempos de renderização da página.** É de grande importancia, a preocupação de não utilizar fontes que possuam alguma proibição dessa técnica. Caso queira sabe quais são [as fontes mais comuns em todos os sistemas operacionais, acesse esse link][10]. Desde já fico devendo um post falando sobre o font-face.

 [10]: http://www.codestyle.org/css/font-family/sampler-CombinedResults.shtml