---
title: Moving Wordpress to Jekyll
author: Davidson Fellipe
layout: post
lang: en
path: /blog/moving-wordpress-to-jekyll/
date: "2013-04-01"
tags: ['wordpress', 'jekyll']
---

![jekyll](/img-posts/jekyll-1x.png)

## Why migrate?
I decided to undertake a migration for two primary reasons: to acquire new skills and enhance the design of the website.

## Motivation
For nearly three years, this website has been running on WordPress. However, at the start of this year, I began contemplating the conversion of this blog into a static site generator tool. This decision stemmed from my desire to learn and explore new tools, as well as my intention to improve the overall design of the site.

## I had two options to consider:

### Option 1: DocPad

DocPad is a framework that facilitates content management through the file system. This  tool provides support for plugins, which aid in rendering, and offers static site generation capabilities. Built with Node.js and Express.js, DocPad is an excellent choice for managing and transforming website content.

### Option 2: Jekyll-bootstrap

Jekyll-bootstrap, available at [https://github.com/robertlove/jekyll-bootstrap](https://github.com/robertlove/jekyll-bootstrap)  is a user-friendly and lightweight option that combines the benefits of Jekyll, a static site generator, with a minimalistic structure designed specifically for blogs. After careful consideration, I made the decision to opt for Jekyll-bootstrap due to its simplicity and suitability for my project.

## New version

The new version I'm working on is designed to minimize server-side dependencies, focusing instead on delivering static files. This approach allows for efficient and streamlined server delivery. In addition to this, I utilize various external services to enhance the website's functionality. These services include Google Analytics for user statistics, Disqus for comments, and GitHub for version control. By leveraging these services, I can optimize the performance and user experience of the website while maintaining a scalable and efficient infrastructure.

## Major Challenges for Migration

During the migration process, we encountered several significant challenges that required careful consideration and planning:

* Preserving Previous Content
* Handling Image Paths
* Maintaining Consistent URLs
* Managing Comments

### Preserving Previous Content

It was crucial to ensure the seamless transfer of all existing content to the new website. This involved transferring blog posts, pages, and any associated media files while maintaining their integrity. I migrate all posts from Wordpress, using [WordPress to Jekyll exporter](https://github.com/benbalter/wordpress-to-jekyll-exporter). This tool is a WordPress plugin that converts all posts, pages, taxonomies, metadata, and settings to Markdown and YAML which can be dropped into Jekyll.

Thanks [Ben Balter](https://github.com/benbalter) for this nice job.

### Handling Image Paths

Ensuring that images used in the previous version of the site retained their paths was another critical consideration. We had to ensure that images were correctly referenced and accessible in the new website to prevent any broken image links.

### Maintaining Consistent URLs

To prevent disruption to SEO efforts and maintain a positive user experience, it was essential to retain the same URLs for the migrated content. This required implementing redirects or mapping mechanisms to ensure that existing links remained valid. I think about a simple navigation tree, with support for multiple languages, which in the end is like this:

* Home
* Blog
  * Posts (english and portuguese, on the same page)
* Talks (english and portugues, on the same page)
* About

### Managing Comments

I had to identify a suitable method or tool to export and import the comments seamlessly, ensuring they were associated with the appropriate blog posts or pages. I wanted to keep current comments from Disqus, for this a will to continue using this tool. Jekyll-bootstrap has this feature.

## Benefits

The latest changes implemented offer increased simplicity in code modifications, improved readability for blog readers, and faster site loading times. These improvements are a result of transforming all my posts into static assets. By adopting this approach, I now write my posts using a combination of Markdown and HTML.

This streamlined approach enhances the overall user experience, as it reduces the complexity of the code and ensures faster page rendering.