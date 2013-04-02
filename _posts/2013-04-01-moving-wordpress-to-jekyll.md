---
title: Moving Wordpress to Jekyll
author: Davidson Fellipe
layout: post
lang: en
permalink: /blog/moving-wordpress-to-jekyll/
Hide SexyBookmarks:
  - 0
Hide OgTags:
  - 0
dsq_thread_id:
  - 1003744646
---
![][jekyll]

[jekyll]: /assets/img/jekyll.png


##Why migrate?

I just wanted to learn a new tool and improving design of website.

##Motivation

For almost 3 years this website was powered using the publishing platform called Wordpress. Since beginning of the year I was thinking about convert this blog, from WordPress to [Jekyll](http://jekyllrb.com/). So, on last weekend I put hands on editor for finish this project.


##I thought of 2 options

Docpad?

DocPad is a framework that allowing for content management via the file system, this tool offer support to plugins that are used for rendering, and has static site generation. It's built with Node and Express.js.

Jekyll-bootstrap?

[Jekyll-bootstrap](http://jekyllbootstrap.com/) is very simple, have a minimal structure for blogs, and a static site generator. I chose this one.

##New version

There version isn't dependency on server-side, only server delivery static files. Other services that I use are: Google Analytics (for statitistics about users), Disqus (for comments), GitHub (Versin code).

##biggest problems for migration

* Keep the previous content
* Keep the same URLs
* Keep path of Images
* Comments
* Convert content for english

##Keep the previous content

I migrate all Wordpress's posts, using [Wordpress to Jekyll exporter](https://github.com/benbalter/wordpress-to-jekyll-exporter). This tool is a WordPress plugin that converts all posts, pages, taxonomies, metadata, and settings to Markdown and YAML which can be dropped into Jekyll. Thanks [Ben Balter](https://github.com/benbalter) for this nice job.

##Keep the same URLs

I think about a simple navigation tree, with support for multiple languages, which in the end is like this:

* Home
* Blog
  * Posts (english and portuguese, on the sema page)
* Talks (english and portugues, on the same page)
* About

##Comments

I wanted to keep current comments from Disqus, for this a will to continue use this tool. Jekyll-bootstrap has this feature.

##Benefits

More simplicity for changes on code, more simplicity for users to read my blog, and the website is with a better speed. This is due to in the fact all my posts are static assets now. Now I write the posts using Markdown + HTML.