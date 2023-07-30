---
title: Analisando a qualidade de código JavaScript usando JSLint
author: Davidson Fellipe
layout: post
lang: pt
path: /blog/analisando-a-qualidade-de-codigo-javascript-usando-jslint/
date: "2011-03-30"
dsq_thread_id: 266772587
tags: ["blogs"]
category: articles
---

Muitas vezes temos que realizar uma análise de códigos **JavaScript**, para procurar determinados trechos que podem trazer erros, _warnings_, eliminar problemas da linguagem e _cross-browser_. Para nos auxiliar na análise de código JS, apresento-lhes uma ferramenta antiga, teve se primeiro release em 2002, mas que percebo que muita gente ainda a desconhece, essa ferramenta é o tal do **[JSLint][1]**. Ela é uma ferramenta para análise de qualidade de código [JavaScript][2] e foi criada por [Douglas Crockford][3],

[1]: https://jslint.com
[2]: https://pt.wikipedia.org/wiki/JavaScript
[3]: https://www.crockford.com/ "Site do Douglas Crockford"

O JSLint analisa um dado trecho de código e informa problemas potenciais ou erros de sintaxe. Essa ferramenta segue [recomendações criadas pelo Crockford][4] e teve como inspiração as convenções da [SUN para a linguagem JAVA][5].

[4]: https://crockford.com/code.html
[5]: http://www.oracle.com/technetwork/java/codeconv-138413.html

O [JSLint][6] é uma **ferramenta** poderosa para ser usada no dia-a-dia do programador **JavaScript**, pois ela exige do programador mais preciosismo para escrita de código nessa linguagem. Exigindo certos cuidados, tais como: **indentação** de código, tamanho da linha, declaração de variáveis, **_statements_**, declarações de **funções**, entre outros. Por exemplo, o erro comum em JavaScript que citei no artigo [Uso correto da função do parseInt em JavaScript][7], seria facilmente detectado e ele exibiria o erro “Missing radix parameter”.

[6]: https://www.jslint.com/
[7]: https://fellipe.com/blog/uso-correto-da-funcao-do-parseint-em-javascript/

Sendo assim, utilizando o **JSLint** você irá observar seus erros mais comuns e passará a adotar os hábitos essenciais para torná-lo um melhor programador na linguagem **JavaScript**.

Para usar o **JSLint**, basta acessar e colar seu código e clicar no botão JSLint. A boa prática de sempre verificar seu código nessa ferramenta poderá evitar até problemas **cross-browsers**.

O site [nettuts ][8] criou ano passado esse screencast mostrando o uso do JSLint, vale a pena dá uma conferida.

[8]: https://code.tutsplus.com/

<br />

<iframe width="880" height="500" src="https://www.youtube.com/embed/gz2mBQBp4XE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Referências:

<p><a href="https://jslint.com/" target="_blank">https://jslint.com/</a><br />
<a href="https://en.wikipedia.org/wiki/JSLint" target="_blank">https://en.wikipedia.org/wiki/JSLint</a></p>
