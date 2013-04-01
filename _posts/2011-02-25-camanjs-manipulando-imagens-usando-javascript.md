---
title: 'Camanjs &#8211; Manipulando imagens usando javascript'
author: Davidson Fellipe
layout: post
lang: pt
permalink: /blog/camanjs-manipulando-imagens-usando-javascript/
dsq_thread_id:
  - 261155023
categories:
  - desenvolvimento
tags:
  - Caman.js
  - javascript
  - js
---
[CamanJS][1], a sigla vem de **Ca**nvas **Man**ipulation em Javascript, ele trás uma interface simplificada para fazer a manipulação de imagens dinamicamente utilizando a linguagem Javascript. A intenção inicial do trabalho de [Ryan LeFevre][2] foi replicar os efeitos do [Instagram][3] apenas utilizando **Javascript**.

[1]: http://camanjs.com/
[2]: http://twitter.com/MeltingIce
[3]: http://instagr.am/

Após observar os demos você perceberá que o CamanJS ainda exige muito processamento, acabei realizando um teste aplicando o efeito de Vintage no [DEMOS PRESETS][4] , um dos *cores* de minha maquina ficou em 100% por uns 10 segundos. Esse fato é porque a ferramenta percorre todos os pixels da imagem representada por um canvas, realiza alguma manipulação no pixel, caso seja necessário, e por fim atualiza o **CANVAS**.

 [4]: http://camanjs.com/examples/presets

## Como utilizar?

O uso do CamanJS é simples, e não requer nenhuma outra dependência. Podemos acessar todas as funcionalidades pela função Caman( ). Mas, **devido a restrições de segurança do navegador, o CamanJS só poderá modificar imagens que vêm do mesmo domínio que a página se encontra**, caso queria utiliza-lo com imagens é necessário você especificar um proxy. O CamanJS já vem um proxy escrito em PHP, mas nada impede que você desenvolva um semelhante em outra linguagem, para maiores informações acesse a [documentação do CamanJS][5].

 [5]: http://camanjs.com/docs

Agora vamos a um exemplo de uso, irei aplicar efeitos que faça com que a imagem da esquerda fique com a aparência da imagem a direita:

![][6]

 [6]: /assets/img/rio_usando_camanjs_3.png "rio_usando_camanjs_3"

Primeiramente vamos incluir os arquivos da biblioteca Caman.js, optei por inclui-la via CDN disponibilizada no site do projeto:

    <script src="http://ajax.cdnjs.com/ajax/libs/camanjs/2.0/caman.full.min.js"></script>


Primeiramente vamos incluir os arquivos da biblioteca Caman.js, optei por inclui-la pelo link da CDN disponibilizada no site do projeto:

    Caman("rio_usando_camanjs.jpg",
          "#example-canvas",
          function () {

            this.brightness(10)
              .contrast(100)
              .sepia(40)
              .saturation(5);

            this.render(function () {
                console.log("Finished!");
            });
    });

Projetos como esse são de grande utilidade para aqueles que desejam incorporar manipulações rápidas em imagens em suas apps. O crescimento do HTML5, atrelado ao crescimento de ferramentas utilizando javascript esta se tornando cada vez mais prevalente. [Veja resultado da demonstração][7].

 [7]: http://fellipe.com/demos/camanjs/index.html

## saiba mais

O CamanJS ainda precisa melhorar sua performance, caso tenha interesse em contribuir para melhorar a ferramenta, fork o projeto no [github][8].

 [8]: https://github.com/meltingice/CamanJS