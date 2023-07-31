---
title: Uso correto da função do parseInt em Javascript
author: Davidson Fellipe
layout: post
lang: pt
path: /blog/uso-correto-da-funcao-do-parseint-em-javascript/
date: "2011-02-22"
dsq_thread_id: 261154714
tags: ["blogs"]
---

Irei comentar sobre um dos **erros** mais comuns em códigos **JavaScript**, que é o uso correto da função **parseInt**. Essa função converte uma string em um inteiro e possui a seguinte sintaxe:

```javascript
parseInt(string, base)
```

##STRING

corresponde ao conjunto de caracteres que deseja converter para inteiro;

**BASE**

usada para especificar qual o sistema de numeração que deseja converter a string. Podendo receber valores de 2 a 36, dentre os mais utilizados podemos destacar 10 (**decimal**), 2 (binário), 16 (hexadecimal) e 8 (octal). **É opcional !** É justamente no fato do paramento base ser opcional é que mora o perigo. Pois, caso o mesmo não seja informado, o interpretador JavaScript irá se comportar das seguintes formas:

-   Começando com caractere que não pode ser convertido para um número, retorna NaN (not a number)
-   Quando um string começa com “0x” é analisada implicitamente com base 16 (hexadecimal)
-   Começando com caractere que não pode ser convertido para um número, retorna NaN (not a number)
-   Quando uma string começa com “0″, é analisada implicitamente com base 8  (octal)
-   Começando com caractere que não pode ser convertido para um número, retorna NaN (not a number)
-   Quando uma string começa com qualquer outro valor, é base 10 (decimal)
-   Começando com caractere que não pode ser convertido para um número, retorna NaN (not a number)

## Exemplos

```javascript
parseInt("01"); //retorna 1
parseInt("02"); //retorna 2
parseInt("03"); //retorna 3
parseInt("04"); //retorna 4
parseInt("05"); //retorna 5
parseInt("06"); //retorna 6
parseInt("07"); //retorna 7
parseInt("08"); //retorna 0
parseInt("09"); //retorna 0
parseInt("10"); //retorna 10
parseInt("-222"); //retorna -222
parseInt(" 122"); //retorna 122
parseInt("fellipe1234"); //retorna NaN
```

Essa forma de interpretação tem causado muitos problemas, sendo assim a nova versão da linguagem padrão, **[ECMAScript 5][1]**, teve esse comportamento modificado e essa **detecção implícita de octal foi removida** do **parseInt**.

[1]: http://ecma262-5.com/ELS5_HTML.htm#Section_15.1.2.2

**Solução**

Quando necessitar fazer o uso da função **parseInt**, informe para qual sistema de numeração que a string deverá ser convertida.

```javascript
parseInt ("08", 10); //retorna 8
parseInt ("09", 10); //retorna 9
```
