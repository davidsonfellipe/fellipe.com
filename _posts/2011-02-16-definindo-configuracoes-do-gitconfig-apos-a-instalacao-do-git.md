---
title: Definindo configurações do .gitconfig após a instalação do GIT
author: Davidson Fellipe
layout: post
lang: pt
permalink: /blog/definindo-configuracoes-do-gitconfig-apos-a-instalacao-do-git/
dsq_thread_id:
  - 261154568
categories:
  - desenvolvimento
tags:
  - .gitconfig
  - controle de versão
  - git
---
**GIT** é um Software Livre utilizado para controle de versão, é distribuído, com enfase em rapidez. Foi inicialmente criado por **Linus Torvalds **para ser utilizado no desenvolvimento do kernel **Linux**. Para instalar a ferramenta para basta acessar seu [site oficial][1].

[1]: http://git-scm.com/download

Comecei a usar git em setembro de 2010. Hoje, acho o GIT uma ferramenta robusta para o controle de versão. No meu primeiro projeto que utilizava o GIT, tive um pouco de dificuldade para entender, mas com o tempo fui procurando soluções como se resolvia alguns problemas comuns de conflitos e já estou bem adaptado a seu uso.


Enfim, irei apenas apresentar algumas definições que me ajuda a trabalhar no dia-a-dia com o GIT via terminal do MacOS.  Com o GIT instalado localize o arquivo **.gitconfig**, que normalmente fica no diretório *home* de seu usuário, ex: */Users/fellipe/.gitconfig*.


Você pode editar esse arquivo utilizando um editor de texto ou utilizar o comando “*git config –global*” via Terminal. Primeiramente apresentarei via Terminal e no [final do post tem o resultado de como o arquivo .gitconfig ficará][2], esse resultado apresentado no final pode ser usado para quem deseja editar via editor de texto.

[2]: #arquivo_gitconfig






## Definições de Usuário

Para definir as configurações básicas de seu usuário e email, basta executar os seguintes comandos, claro que substituindo os valores “davidson” e “email@fellipe.com” por suas informações:

    git config --global user.name "davidson"
    git config --global user.email "email@fellipe.com"

## Definições do editor de texto padrão

Agora configure o editor de texto padrão utilizado pelo git, utilizando o seguinte comando:

    git config --global core.editor "mate -w"

## Definições de Alias

É de grande utilidade definir alguns aliases, para evitar digitar o nome completo do comando. Ou seja, ao invés de digitar “git checkout nomedoarquivo.extensao”, você pode digitar “git co nomedoarquivo.extensao”. Essas definições irão facilitam bastante, o uso do GIT no seu dia-a-dia de trabalho. Seguem as algumas definições de uso:

    git config --global alias.st status
    git config --global alias.co checkout
    git config --global alias.br branch
    git config --global alias.df diff
    git config --global alias.dfs "diff --stat"
    git config --global alias.ci commit
    git config --global alias.pom "pull origin master"
    git config --global alias.pl pull
    git config --global alias.ps push

## Color

Especificar as cores das respostas do GIT, facilita bastante no uso da ferramenta em seu dia-a-dia, pois deixa mais fácil lidar com algumas situações como: O quê foi adicionado ao commit, branch atual ou até arquivos que foram alterados, vamos aos comandos:

    git config --global color.branch auto
    git config --global color.diff auto
    git config --global color.grep auto
    git config --global color.interactive auto
    git config --global color.status auto

## Merge

Situação bem comum que lidamos no desenvolvimento de software é a questão da resolução de conflitos, para casos que o GIT não pode resolver automaticamente você pode definir a ferramenta que você tem mais familiaridade para fazer uso do merge. Para defini-la basta utilizar o comando abaixo:

    git config --global merge.tool "SUA_FERRAMENTA_DE_MERGE"



## Resultado final do arquivo:

    [user]
    name = davidson
    email = email@fellipe.com

    [color]
    diff = auto
    grep = auto
    interactive = auto
    status = auto
    branch = auto
    status = auto

    [core]
    editor = mate -w

    [alias]
    st = status
    ci = commit
    br = branch
    df = diff
    lg = log -pgit ps
    co = checkout
    pom = pull origin master
    ps = push
    pl = pull