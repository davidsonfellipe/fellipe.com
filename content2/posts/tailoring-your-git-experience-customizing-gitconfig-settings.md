---
title: "Tailoring your Git experience: customizing .gitconfig settings"
author: Davidson Fellipe
layout: post
lang: en
path: /blog/tailoring-your-git-experience-customizing-gitconfig-settings/
date: "2011-02-16"
dsq_thread_id: 261154568
tags: ["blogs"]
---

**Git** is a free software used for version control, with an emphasis on its distributed architecture and optimized design that enables fast operations. It was created by Linus Torvalds to be used in the development of the **Linux** kernel. To install the tool, simply access its [official website][1].

[1]: https://git-scm.com/download

I started using Git in September 2010 and, over time, I found it to be a robust version control tool. In my first project using Git, I encountered some difficulties in understanding it, but as time went on, I sought solutions to common problems like conflicts, and now I'm well adapted to using it.

My goal is to share some useful configurations that have enhanced my day-to-day Git workflow via the MacOS terminal. Once you have Git installed, you can locate the .gitconfig file, which is usually found in your user's home directory, such as _/Users/fellipe/.gitconfig_. To customize this file, you have two options: either directly edit it using a text editor or modify it through the command-line interface (CLI).

```bash
git config --global
```

## User Definitions

To set up your basic user configurations and email, simply execute the following commands, replacing the values "davidson" and "davidson@yourdomain.com" with your own information:


```bash
git config --global user.name "davidson"
git config --global user.email "davidson@yourdomain.com"
```

## Default Text Editor Settings

Now, configure the default text editor used by Git by executing the following command:

```bash
git config --global core.editor "code --wait"
```

## Aliases Definitions

It is highly useful to define some aliases to avoid typing the full command name. Instead of typing "git checkout filename.extension," you can simply type "git co filename.extension." These definitions greatly facilitate the everyday use of Git in your workflow. Here are some example alias definitions:

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

Specifying colors for Git responses greatly enhances the tool's usability in your day-to-day workflow, as it makes it easier to handle situations such as identifying what has been added to a commit, the current branch, or even modified files. Let's go through the commands:

```bash
git config --global color.branch auto
git config --global color.diff auto
git config --global color.grep auto
git config --global color.interactive auto
git config --global color.status auto
```

## Defining your Merge tool

A common situation we encounter in software development is dealing with conflict resolution. For cases where Git cannot resolve conflicts automatically, you can define the tool that you are most familiar with to handle merges. To set it up, simply use the command below:

```bash
git config --global merge.tool "YOUR_MERGE_TOOL"
```

## Final File:

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

You can find this and other settings I use in my local environment in my dotfiles: [https://github.com/davidsonfellipe/dotfiles](https://github.com/davidsonfellipe/dotfiles)
