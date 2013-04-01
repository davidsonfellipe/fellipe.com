---
title: Novidades do Firebug 1.6.0
author: Davidson Fellipe
layout: post
lang: pt
permalink: /blog/novidades-do-firebug-1-6-0/
dsq_thread_id:
  - 261154530
categories:
  - desenvolvimento
---
Para quem não conhece, o Firebug é um plugin desenvolvido originalmente para o  navegador* * Firefox. Foi criado com o intuito de auxiliar o desenvolvimento de aplicações web.  Dentre suas principais funcionalidades se pode destacar: depurar Javascript,  analisar requisições feitas pela página, manipulação de DOM. Ele possui várias extensões importantes, tais como: YSlow, Page Speed e Pixel Perfect.

Nesta última segunda-feira, 26 de novembro, o Firebug Working Group disponibilizou a versão 1.6.0 do Firebug. Essa ferramenta que já se tornou essencial no dia-a-dia dos desenvolvedores web, ganhou as seguintes funcionalidades…

Para quem não conhece, o Firebug é um plugin desenvolvido originalmente para o  navegador* * Firefox. Foi criado com o intuito de auxiliar o desenvolvimento de aplicações web.  Dentre suas principais funcionalidades se pode destacar: depurar Javascript,  analisar requisições feitas pela página, manipulação de DOM. Ele possui várias extensões importantes, tais como: YSlow, Page Speed e Pixel Perfect.

Nesta última segunda-feira, 26 de novembro, o Firebug Working Group disponibilizou a versão 1.6.0 do Firebug. Essa ferramenta que já se tornou essencial no dia-a-dia dos desenvolvedores web, ganhou as seguintes funcionalidades…

##Console e Linha de Comando
*   Linha de comando disponibilizado em todos os painéis
*   Nova API para o objeto console: console.table()
*   Melhoria nos recursos de auto-complete
*   Log de eventos cortar, copiar e colar
*   Suporte a log do console de XPath
*   Cores de fundo descritivas para mensagens do console

##HTML 
*   Suporte à expandir tudo através de um menu de contexto
*   Agora quando o XPath é copiado, o namespace também é incluído
*   Melhorada exibição de iframes
*   DOCTYPE agora é exibido
*   Breadcrumbs possuem rolagem

##CSS 
*   CSS autocomplete
*   Suporte para copiar declarações CSS
*   Agrupamento de estilos já computados
*   Autocomplete para “!important”

##Script 
*   Possibilidade de desativar a opção de pará no próximo erro
*   Melhorado o painel lateral Watch
*   Possibilidade de salvar e restaurar sessões do FirefoxDOM

##Miscelânea 
*   Quando o Firebug é instalado, uma página de Primeira Execução é mostrada
*   Página de problemas conhecidos
*   Novo ícone do Firebug
*   Melhorias nas configurações do editor


Agora vamos entender algumas dessas melhorias, destaquei as seguintes:

## Linha de comando disponível em todos os painéis

Agora temos a possibilidade de utilizar a linha de comando em outros painéis, além do Console Panel. Conforme destacado na imagem abaixo:

![][1]

 [1]: http://fellipe.com/wp-content/uploads/2010/12/cmdOnScriptPanel.png "cmdOnScriptPanel"

Na imagem acima podemos visualizar o novo botão da linha de comando na aba ***Script***. Após clicar nele veremos a linha de comando, conforme apontado pela seta.

## Possibilidade de rolagem nos Breadcrumbs

Agora é possível visualizar a hierarquia completa do objeto selecionado no DOM. Conforme apresentado na figura abaixo:

![][2]

 [2]: /assets/img/html1.png "html1"

Os caras trabalharam bem na usabilidade dessa funcionalidade. Agora para navegar basta clicar nas setas apontadas na imagem, ou usar a rolagem do mouse, ou ainda fazer uso das setas de seu teclado.

## Navegação do histórico de troca de painéis

Agora temos de botões: um para avançar e outro para voltar. Eles são utilizados para navegar entre os painéis no histórico dos visitados. Você pode visualizar esses botões na imagem abaixo.

![][3]

 [3]: /assets/img/navigation-buttons.jpg "navigation-buttons"

Na imagem apresentada, podemos visualizar 4 itens, logo abaixo do botão de avançar a navegação. Essa lista com todos os itens do histórico pode ser habilitada clicando com o botão direito do mouse em um dos dois botões. Na imagem podemos observar que a aba atual é ***Net* **, foi utilizada duas abas de ***Script*** anteriormente a essa, e logo após o uso da aba ***Net*** o usuário foi para aba ***Cookies***.

## Logs tabulares

Essa foi a funcionalidade que mais me agradou, agora temos um novo método o ***console.table***, com ele  poderemos apresentar *logs* tabulares no console. Um simples exemplo de uso, pode ser dado da seguinte forma:

console.groupCollapsed(“This is my table”);

console.table(table1);

console.groupEnd();

![][4]

 [4]: /assets/img/console-table2.jpg "console-table2"

Para mais detalhes sobre essa funcionalidade acesse: 

[http://www.softwareishard.com/blog/firebug/tabular-logs-in-firebug/](http://www.softwareishard.com/blog/firebug/tabular-logs-in-firebug/)


## Mais sobre…

Firebug 1.6.0 é para o Firefox 3.6 e no próximo anos será lançada versão 1.7 que esta sendo implementada para o Firefox 4.0. Não atualizou seu firebug ainda? Baixe-o agora:

[http://getfirebug.com/releases/firebug/1.6X/](http://getfirebug.com/releases/firebug/1.6X/)

## Referências
*   [https://addons.mozilla.org/pt-br/firefox/addon/1843/](https://addons.mozilla.org/pt-br/firefox/addon/1843/)
*   [http://www.softwareishard.com/blog/](http://www.softwareishard.com/blog/)