---
title: Analyzing JavaScript Code Quality using JSLint
author: Davidson Fellipe
layout: post
lang: en
path: /blog/analyzing-javascript-code-quality-using-jslint/
date: "2011-03-30"
tags: ["blogs"]
category: articles
---

Often we need to perform an analysis of JavaScript code to search for specific sections that may cause errors, warnings, eliminate language problems, and ensure cross-browser compatibility. To assist us in the analysis of JS code, I present to you an old tool that had its first release in 2002, but I notice that many people still don't know about it. This tool is called [JSLint][1]. It is a code quality analysis tool for JavaScript created by [Douglas Crockford][3].

[1]: https://jslint.com
[3]: https://www.crockford.com/

JSLint analyzes a given piece of code and identifies potential issues or syntax errors. This tool follows recommendations created by [Crockford][4] and takes inspiration from SUN code standards for the [Java language][5].

[4]: https://crockford.com/code.html
[5]: http://www.oracle.com/technetwork/java/codeconv-138413.html

[JSLint][6] is a powerful tool for everyday use by JavaScript programmers, as it demands greater precision in code writing for this language. It requires certain considerations, such as code indentation, line length, variable declaration, statements, and function declarations, among others. For example, the common JavaScript error mentioned in the article [Correct Usage of the parseInt Function in JavaScript][7] would be easily detected, and it would display the error "Missing radix parameter."

[6]: https://www.jslint.com/
[7]: https://fellipe.com/blog/uso-correto-da-funcao-do-parseint-em-javascript/

Therefore, by using JSLint, you will be able to identify your most common errors and start adopting essential habits to become a better programmer in the JavaScript language. To use JSLint, simply access the website, paste your code, and click on the JSLint button. The good practice of always checking your code in this tool can even prevent cross-browser issues.

The website [nettuts][8] created a screencast last year demonstrating the use of JSLint, it's worth checking out.

[8]: https://code.tutsplus.com/

<br />

<iframe width="880" height="500" src="https://www.youtube.com/embed/gz2mBQBp4XE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## References:
- [https://jslint.com/](https://jslint.com/)