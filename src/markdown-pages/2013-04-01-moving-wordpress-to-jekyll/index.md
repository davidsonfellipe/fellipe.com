---
title: Moving Wordpress to Jekyll
author: Davidson Fellipe
layout: post
lang: en
path: /blog/moving-wordpress-to-jekyll/
date: "2013-04-01"
tags: ['wordpress', 'jekyll']
---

![jekyll](./jekyll.png)

##Why migrate?

I just wanted to learn a new tool and improving the design of the website.

##Motivation

Almost 3 years this website was powered using Wordpress. Since the beginning of the year, I was thinking about how to convert this blog for a static site generator tool.


##I had 2 options

Docpad?

DocPad is a framework that allowing for content management via the file system, this tool offer support to plugins that are used for rendering, and has static site generation. It's built with Node and Express.js.

Jekyll-bootstrap?

[Jekyll-bootstrap](http://jekyllbootstrap.com/) is very simple, has a minimal structure for blogs, and a static site generator. I chose this one.

##New version

Their version isn't a dependency on server-side, it's just server delivery static files. Other services that I use are Google Analytics (for statistics about users), Disqus (for comments), GitHub (version control).

##biggest problems for migration

* Keep the previous content
* Keep the same URLs
* Keep path of Images
* Comments
* Convert content for english

##Keep the previous content

I migrate all posts from Wordpress, using [Wordpress to Jekyll exporter](https://github.com/benbalter/wordpress-to-jekyll-exporter). This tool is a WordPress plugin that converts all posts, pages, taxonomies, metadata, and settings to Markdown and YAML which can be dropped into Jekyll. Thanks [Ben Balter](https://github.com/benbalter) for this nice job.

##Keep the same URLs

I think about a simple navigation tree, with support for multiple languages, which in the end is like this:

* Home
* Blog
  * Posts (english and portuguese, on the same page)
* Talks (english and portugues, on the same page)
* About

##Comments

I wanted to keep current comments from Disqus, for this a will to continue using this tool. Jekyll-bootstrap has this feature.

##Benefits

More simplicity for changes in code, more simplicity for users to read my blog, and the website load faster. This is due to in the fact all my posts are static assets now. Now I write the posts using Markdown + HTML.
