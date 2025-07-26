---
title: Moving WordPress to Jekyll
author: Davidson Fellipe
layout: post
lang: en
path: /blog/moving-wordpress-to-jekyll/
date: "2013-04-01"
tags: ['wordpress', 'jekyll']
---

![jekyll](/img-posts/jekyll-1x.png)

## Why Migrate in 2013?
Web technologies are always evolving, and it’s important to acquire new skills and enhance the design of the website. I recently decided to give my blog a fresh start for two main reasons: to learn some new skills and make the site look and perform better. This site had been running on WordPress for almost three years. But as the new year rolled around, I started thinking about switching to a static site generator. Why? I wanted to try out new tools and make the site faster and easier to maintain. After reviewing several options, I selected these two:

### DocPad
DocPad lets you manage content through the file system and supports plugins for rendering. It’s built on Node.js and Express.js and can handle static site generation. Pretty versatile. This tool provides support for plugins, which aid in rendering, and offers static site generation capabilities. Built with Node.js and Express.js, DocPad is an excellent choice for managing and transforming website content.

### Jekyll-bootstrap
Jekyll-bootstrap, available at [https://github.com/robertlove/jekyll-bootstrap](https://github.com/robertlove/jekyll-bootstrap) is a user-friendly and lightweight option that combines the benefits of Jekyll, a static site generator, with a minimalistic structure designed specifically for blogs. After careful consideration, I made the decision to opt for Jekyll-bootstrap due to its simplicity and suitability for my project.

### The Winner?
I went with Jekyll-bootstrap because it’s simple and fit my project perfectly.

## New version

The new version I'm working on is designed to minimize server-side dependencies, focusing instead on delivering static files. This approach allows for efficient and streamlined server delivery. In addition to this, I utilize various external services to enhance the website's functionality. These services include Google Analytics for user statistics, Disqus for comments, and GitHub for version control. By leveraging these services, I can optimize the performance and user experience of the website while maintaining a scalable and efficient infrastructure.

## Major Challenges for Migration

During the migration process, I ran into a few challenges that needed some considerations:

* Keeping Old Content
* Handling Image Paths
* Maintaining Consistent URLs
* Managing Comments

### Keeping Old Content

It was crucial to ensure the seamless transfer of all existing content to the new website. This involved transferring blog posts, pages, and any associated media files while maintaining their integrity. I migrate all posts from Wordpress, using [WordPress to Jekyll exporter](https://github.com/benbalter/wordpress-to-jekyll-exporter). This tool is a WordPress plugin that converts all posts, pages, taxonomies, metadata, and settings to Markdown and YAML which can be dropped into Jekyll. Thanks [Ben Balter](https://github.com/benbalter) for this nice job.

### Handling Image Paths

One thing I paid close attention to was making sure the images from the old site kept their original paths. It was really important to avoid broken links and keep everything looking right. I made sure to double-check that all the image references pointed to the correct places on the new site so everything would load smoothly without any issues.

### Maintaining Consistent URLs

When migrating content, one of my top priorities was keeping the same URLs intact to avoid any disruptions to SEO efforts and ensure a smooth user experience. Nobody wants to click on a familiar link and land on a 404 page, right? To make this work, I had to set up redirects and carefully map out the paths so that all existing links stayed valid. While doing this, I thought how to create a simple navigation structure that would support both English and Portuguese content seamlessly. In the end, I landed on a clean, intuitive setup that looked like this:

* Home
* Blog
  * Posts (English and Portuguese on the same page)
* Talks (English and Portuguese on the same page)
* About

### Managing Comments
Migrating the comments was a bit tricky, but I needed to find a smooth way to export and import them without breaking any links or associations. Since I was using Disqus, I wanted to stick with it for continuity. Thankfully, Jekyll-bootstrap had a feature that supported exporting and importing comments, which made the process much easier.

I exported the Disqus comments in a structured format and mapped them to the right blog posts on the new site. This ensured that, once the migration was done, all comments appeared under the correct posts, preserving the user experience and SEO value. It took some time, but it was worth it to keep everything in place.

## Benefits

The latest changes implemented offer increased simplicity in code modifications, improved readability for blog readers, and faster site loading times. These improvements are a result of transforming all my posts into static assets. By adopting this approach, I now write my posts using a combination of Markdown and HTML.

This streamlined approach enhances the overall user experience, as it reduces the complexity of the code and ensures faster page rendering. This whole migration has given the blog a much-needed refresh. It’s faster, cleaner, and ready for whatever comes next.