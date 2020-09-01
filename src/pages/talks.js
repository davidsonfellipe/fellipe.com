import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Link from 'components/Link'
import ItemDate from 'components/ItemDate'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { screen } from 'styles/screen'

const Location = styled(ItemDate)`
  display: none;
  margin-right: 15px;
  position: absolute;
  right: 0;
  top: 15px;

  ${screen.md} {
    display: inline-block;
  }
`

const TalksPage = () => (
  <Layout>
    <SEO title="Talks" />
    <Section>
      <Title>TALKS</Title>
      <Link href="https://speakerdeck.com/fellipe/adventures-from-enzyme-to-react-testing-library">
        Adventures from Enzyme to React Testing Library @ QueensJS
        <Location>New York City, USA · nov 28, 2019</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias">
        Guia do Front-end das Galáxias @ Front in Cuiabá
        <Location>Cuiabá, Brazil · mar 28, 2015</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/o-melhor-da-monitoracao-de-web-performance">
        O melhor da monitoração de Web Performance @ Front in Poa
        <Location>Porto Alegre, Brazil · nov 8, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/workflow-para-desenvolvimento-mobile-usando-gruntjs/">
        Workflow para desenvolvimento web &amp; mobile usando Grunt.JS @ VI FSLDC
        <Location>Duque de Caxias, Brazil · oct 25, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias">
        Guia do Front-end das Galáxias @ Rupy Natal
        <Location>Natal, Brazil · oct 18, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias">
        Guia do Front-end das Galáxias @ Frontend Carioca
        <Location>Rio de Janeiro, Brazil · sep 27, 2014</Location>
      </Link>
      <Link href="https://github.com/almirfilho/grunt-workshop">
        Workshop about Grunt.js @ Web.br by W3C
        <Location>São Paulo, Brazil · sep 26, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/workflow-para-desenvolvimento-mobile-usando-gruntjs">
        Workflow para desenvolvimento web &amp; mobile usando Grunt.JS @ Front Interior
        <Location>Bauru, Brazil · aug 30, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias">
        Guia do Front-end das galáxias @ Front in Aracaju
        <Location>Aracaju, Brazil · aug 2, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/workflow-para-desenvolvimento-mobile-usando-gruntjs">
        Workflow para desenvolvimento mobile usando Grunt.JS @ Mobile Conf 2014
        <Location>Rio de Janeiro, Brazil · may 31, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/como-e-trabalhar-na-globocom">
        Como é trabalhar na globo.com? @ UERJ
        <Location>Rio de Janeiro, Brazil · may 15, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/practical-guide-for-frontend-development-for-django-devs">
        Practical guide for front-end development for django devs @ Python Nordeste 2014
        <Location>Salvador, Brazil · may 3, 2014</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/guia-pratico-de-desenvolvimento-front-end-para-django-devs">
        Guia prático de Desenvolvimento Front-end para Django Devs @ Python Nordeste 2014
        <Location>Salvador, Brazil · may 3, 2014</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/esse-cara-e-o-grunt">
        Esse cara é o Grunt @ Front in Recife
        <Location>Recife, Brazil · dec 14, 2013</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/its-javascript-time">
        It's Javascript Time @ Joomla Day Rio 2013
        <Location>Rio de Janeiro, Brazil · nov 16, 2013</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/frontend-engineers-passado-presente-e-futuro">
        Front-end Engineers: passado, presente e futuro @ Convescote XL
        <Location>Rio de Janeiro, Brazil · aug 28, 2013</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/turbinando-seu-workflow-para-o-desenvolvimento-de-webapps">
        Workflow Open Source para Frontend Developers @ Front in Bahia
        <Location>Salvador, Brazil · jul 27, 2013</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/workflow-open-source-para-frontend-developers">
        Workflow Open Source para Frontend Developers @ V FSLDC
        <Location>Duque de Caxias, Brazil · jul 20, 2013</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/os-segredos-dos-front-end-engineers">
        Os Segredos dos Front-end Engineers @ Semana Acadêmica ICET 2013 - Feevale
        <Location>Novo Hamburgo, Brazil · apr 13, 2013</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/jqueryperf">
        Performance em JQuery apps @ PHP n'Rio
        <Location>Rio de Janeiro, Brazil · nov 10, 2012</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/javascript-cross-browser">
        Javascript Cross-browser @ Workshop Front-end Globo.com
        <Location>Rio de Janeiro, Brazil · oct 1, 2012</Location>
      </Link>
      <Link href="https://fellipe.com/slides/performance-javascript/">
        Alta Performance em Aplicações JavaScript @ BrazilJS
        <Location>Porto Alegre, Brazil · aug 31, 2012</Location>
      </Link>
      <Link href="https://fellipe.com/slides/fluent2012/pt/">
        Fluent Conference - Highlights @ 6º Rio.JS
        <Location>Rio de Janeiro, Brazil · jul 21, 2012</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/jqueryperf">
        Performance em JQuery apps @ IV FSLDC
        <Location>Duque de Caxias, Brazil · jun 30, 2012</Location>
      </Link>
      <Link href="https://fellipe.com/slides/fluent2012/pt/">
        Fluent Conference - Highlights @ Globo.com Weekly Talk
        <Location>Rio de Janeiro, Brazil · jun 12, 2012</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/javascript-cross-browser">
        Javascript Cross-browser @ PernambucoJS
        <Location>Recife, Brazil · apr 21, 2012</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/jqueryperf">
        Performance em JQuery apps @ BeagaJS
        <Location>Belo Horizonte, Brazil · jan 13, 2012</Location>
      </Link>
      <Link href="https://fellipe.com/slides/jqueryfn">
        Jquery.fn @ Sampa.JS
        <Location>São Paulo, Brazil · nov 19, 2011</Location>
      </Link>
      <Link href="https://fellipe.com/slides/jqueryfn">
        Jquery.fn @ Workshop Globo.com
        <Location>Rio de Jan, Brazil · oct 27, 2011</Location>
      </Link>
      <Link href="https://fellipe.com/slides/jqueryfn">
        Jquery.fn @ Rio.JS
        <Location>Rio de Jan, Brazil · oct 8, 2011</Location>
      </Link>
      <Link href="https://fellipe.com/slides/html5/">
        HTML5 &amp; CSS3 @ II EATI
        <Location>Frederico Westphalen, Brazil · aug 26, 2011</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/canvas-vs-svg">
        Canvas vs. SVG @ Front in Rio
        <Location>Rio de Jan, Brazil · jun 18, 2011</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/canvas-element">
        Canvas Element @ BrazilJS
        <Location>Fortaleza, Brazil · may 14, 2011</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/frontendretirante-nordestino">
        Frontend, Retirante Nordestino @ Frontend Global
        <Location>Recife, Brazil · jan 15, 2011</Location>
      </Link>
      <Link href="https://speakerdeck.com/fellipe/front-end-engineer-and-designer">
        Front-end engineer  &amp; designer @ Frontend-br Meetup
        <Location>Recife, Brazil · mar 9, 2009</Location>
      </Link>
      <Link href="https://fellipe.com/slides/rdfs">
        RDFS @ PUC-Rio
        <Location>Rio de Janeiro, Brazil</Location>
      </Link>
      <Link href="https://www.slideshare.net/davidsonfellipe/sistema-de-comunicao-bluetooth-usando-microcontrolado-pic">
        Sistema De Comunicação Bluetooth Usando Microcontrolador PIC @ University of Pernambuco (Completion of Course
        Work)
        <Location>Recife, Brazil</Location>
      </Link>
    </Section>
  </Layout>
)

export default TalksPage
