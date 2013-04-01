---
layout: default
title: Hi!
tagline: front-end engineer na globo.com | rio de janeiro, brasil
---
{% include JB/setup %}
<header class="aboutme">
    <h2 class="name"><span class="hi">hi!</span><br>i'm Davidson Fellipe</h2>
    <h3 class="job">
                    front-end engineer at <a href="http://opensource.globo.com">globo.com</a>,
                    m.sc. student at PUC-Rio,
                    co-founder at <a href="braziljs.org">braziljs.org</a>
                    <br>
                    curator <a href="riojs.org">rio.js</a>,
                            <a href="pernambucojs.com">pernambuco.js</a>,
                            <a href="http://frontinbh.com.br">frontinbh</a>,
                            <a href="frontinmaceio.com.br">frontinmaceio</a>
                    <br>
                    lives in rio de janeiro
    </h3>
</header>

<ul class="button-list">
    <li class="button-list-item">
        <a href="{{ BASE_PATH }}blog/" class="button icon-rss">blog</a>
    </li>
    <li class="button-list-item">
        <a href="{{ BASE_PATH }}talks/" class="button icon-bullhorn">
            <span class="label">talks</span>
        </a>
    </li>
    <li class="button-list-item">
        <a href="{{ BASE_PATH }}projects/" class="button icon-bullhorn">
            <span class="label">project</span>
        </a>
    </li>
    <li class="button-list-item">
        <a href="https://github.com/davidsonfellipe" class="button icon-github">
            <span class="label">github</span>
        </a>
    </li>
    <li class="button-list-item">
        <a href="http://www.linkedin.com/in/fellipe" class="button icon-linkedin-sign">
            <span class="label">linkedin</span>
        </a>
    </li>
    <li class="button-list-item">
        <a href="https://www.facebook.com/fellipe" class="button icon-facebook-sign">
            <span class="label">facebook</span>
        </a>
    </li>
    <li class="button-list-item">
        <a href="https://twitter.com/davidsonfellipe" class="button icon-twitter-sign">
            <span class="label">twitter</span>
        </a>
    </li>
</ul>

<script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-2123552-1']);
    _gaq.push(['_trackPageview']);

    (function() {

        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);

    })();
</script>