---
title: Definindo configurações do .gitconfig após a instalação do Git
author: Davidson Fellipe
layout: post
lang: pt
path: /blog/definindo-configuracoes-do-gitconfig-apos-a-instalacao-do-git/
date: "2011-02-16"
dsq_thread_id: 261154568
tags: ["blogs"]
---

**GIT** é um Software Livre utilizado para controle de versão, é distribuído, com enfase em rapidez. Foi inicialmente criado por Linus Torvalds para ser utilizado no desenvolvimento do kernel **Linux**. Para instalar a ferramenta para basta acessar seu [site oficial][1].

[1]: https://git-scm.com/download

Comecei a usar o Git em setembro de 2010 e, ao longo do tempo, que é uma ferramenta robusta para controle de versão. No meu primeiro projeto utilizando o Git, enfrentei algumas dificuldades para compreendê-lo, mas com o passar do tempo fui buscando soluções para resolver problemas comuns, como conflitos, e agora estou bem adaptado ao seu uso.

Enfim, irei apenas apresentar algumas definições que me ajuda a trabalhar no dia-a-dia com o GIT via terminal do MacOS.  Com o GIT instalado localize o arquivo **.gitconfig**, que normalmente fica no diretório _home_ de seu usuário, ex: _/Users/fellipe/.gitconfig_.

Você pode editar esse arquivo utilizando um editor de texto ou utilizar o comando “_git config –global_” via Terminal. Primeiramente apresentarei via Terminal e no [final do post tem o resultado de como o arquivo .gitconfig ficará][2], esse resultado apresentado no final pode ser usado para quem deseja editar via editor de texto.

[2]: #arquivo_gitconfig

## Definições de Usuário

Para definir as configurações básicas de seu usuário e email, basta executar os seguintes comandos, claro que substituindo os valores "davidson" e "davidson@yourdomain.com" por suas informações:

```bash
git config --global user.name "davidson"
git config --global user.email "davidson@yourdomain.com"
```

## Definições do editor de texto padrão

Agora configure o editor de texto padrão utilizado pelo git, utilizando o seguinte comando:

```bash
git config --global core.editor "code --wait"
```

## Definições de Alias

É de grande utilidade definir alguns aliases, para evitar digitar o nome completo do comando. Ou seja, ao invés de digitar “git checkout nomedoarquivo.extensao”, você pode digitar “git co nomedoarquivo.extensao”. Essas definições irão facilitam bastante, o uso do GIT no seu dia-a-dia de trabalho. Seguem as algumas definições de uso:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.df diff
git config --global alias.dfs "diff --stat"
git config --global alias.ci commit
git config --global alias.pom "pull origin master"
git config --global alias.pl pull
git config --global alias.ps push
```

## Color

Especificar as cores das respostas do GIT, facilita bastante no uso da ferramenta em seu dia-a-dia, pois deixa mais fácil lidar com algumas situações como: O quê foi adicionado ao commit, branch atual ou até arquivos que foram alterados, vamos aos comandos:

```bash
git config --global color.branch auto
git config --global color.diff auto
git config --global color.grep auto
git config --global color.interactive auto
git config --global color.status auto
```

## Merge

Situação bem comum que lidamos no desenvolvimento de software é a questão da resolução de conflitos, para casos que o GIT não pode resolver automaticamente você pode definir a ferramenta que você tem mais familiaridade para fazer uso do merge. Para defini-la basta utilizar o comando abaixo:

```bash
git config --global merge.tool "SUA_FERRAMENTA_DE_MERGE"
```

## Resultado final do arquivo:

```bash
[user]
name = davidson
email = davidson@yourdomain.com

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
```
