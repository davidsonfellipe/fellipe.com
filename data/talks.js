const slides = [
  {
    id: 'adventures-enzyme',
    url: 'https://speakerdeck.com/fellipe/adventures-from-enzyme-to-react-testing-library',
    title: 'Adventures from Enzyme to React Testing Library',
    views: 360,
    lang: 'en-US',
  },
  {
    id: 'guia-galaxias',
    url: 'https://www.slideshare.net/davidsonfellipe/guia-do-front-end-das-galaxias',
    title: 'Guia do Front-end das Galáxias',
    views: 17817,
    lang: 'pt-BR',
  },
  {
    id: 'monitoracao-web-perf',
    url: 'https://www.slideshare.net/davidsonfellipe/o-melhor-da-monitoracao-de-web-performance',
    title: 'O melhor da monitoração de Web Performance',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'workflow-grunt',
    url: 'https://www.slideshare.net/davidsonfellipe/workflow-para-desenvolvimento-mobile-usando-gruntjs',
    title: 'Workflow para desenvolvimento web & mobile usando Grunt.JS',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'grunt-workshop',
    url: 'https://github.com/davidsonfellipe/grunt-workshop',
    title: 'Workshop about Grunt.js',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'como-globocom',
    url: 'https://www.slideshare.net/davidsonfellipe/como-e-trabalhar-na-globocom',
    title: 'Como é trabalhar na globo.com?',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'practical-guide-django',
    url: 'https://www.slideshare.net/davidsonfellipe/practical-guide-for-frontend-development-for-django-devs',
    title: 'Practical guide for front-end development for django devs',
    views: 2160,
    lang: 'en-US',
  },
  {
    id: 'guia-pratico-django',
    url: 'https://www.slideshare.net/davidsonfellipe/guia-pratico-de-desenvolvimento-front-end-para-django-devs',
    title: 'Guia prático de Desenvolvimento Front-end para Django Devs',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'esse-cara-grunt',
    url: 'https://speakerdeck.com/fellipe/esse-cara-e-o-grunt',
    title: 'Esse cara é o Grunt',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'its-javascript-time',
    url: 'https://speakerdeck.com/fellipe/its-javascript-time',
    title: "It's Javascript Time",
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'frontend-engineers',
    url: 'https://speakerdeck.com/fellipe/frontend-engineers-passado-presente-e-futuro',
    title: 'Front-end Engineers: passado, presente e futuro',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'workflow-turbinando',
    url: 'https://speakerdeck.com/fellipe/turbinando-seu-workflow-para-o-desenvolvimento-de-webapps',
    title: 'Workflow Open Source para Frontend Developers',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'workflow-open-source',
    url: 'https://speakerdeck.com/fellipe/workflow-open-source-para-frontend-developers',
    title: 'Workflow Open Source para Frontend Developers',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'os-segredos',
    url: 'https://speakerdeck.com/fellipe/os-segredos-dos-front-end-engineers',
    title: 'Os Segredos dos Front-end Engineers',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'jqueryperf',
    url: 'https://www.slideshare.net/davidsonfellipe/jqueryperf',
    title: 'Performance em JQuery apps',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'javascript-cross-browser',
    url: 'https://www.slideshare.net/davidsonfellipe/javascript-cross-browser',
    title: 'Javascript Cross-browser',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'performance-javascript',
    url: 'https://fellipe.com/slides/performance-javascript/',
    title: 'Alta Performance em Aplicações JavaScript',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'fluent2012',
    url: 'https://fellipe.com/slides/fluent2012/pt/',
    title: 'Fluent Conference - Highlights',
    views: 0,
    lang: 'pt-BR',
  },
  { id: 'jqueryfn', url: 'https://fellipe.com/slides/jqueryfn', title: 'Jquery.fn', views: 0, lang: 'pt-BR' },
  { id: 'html5', url: 'https://fellipe.com/slides/html5/', title: 'HTML5 & CSS3', views: 0, lang: 'pt-BR' },
  {
    id: 'canvas-vs-svg',
    url: 'https://www.slideshare.net/davidsonfellipe/canvas-vs-svg',
    title: 'Canvas vs. SVG',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'canvas-element',
    url: 'https://www.slideshare.net/davidsonfellipe/canvas-element',
    title: 'Canvas Element',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'frontend-retirante',
    url: 'https://www.slideshare.net/davidsonfellipe/frontendretirante-nordestino',
    title: 'Frontend, Retirante Nordestino',
    views: 0,
    lang: 'pt-BR',
  },
  {
    id: 'front-end-engineer',
    url: 'https://speakerdeck.com/fellipe/front-end-engineer-and-designer',
    title: 'Front-end engineer & designer',
    views: 0,
    lang: 'pt-BR',
  },
  { id: 'rdfs', url: 'https://fellipe.com/slides/rdfs', title: 'RDFS', views: 0, lang: 'pt-BR' },
  {
    id: 'bluetooth-pic',
    url: 'https://www.slideshare.net/davidsonfellipe/sistema-de-comunicao-bluetooth-usando-microcontrolado-pic',
    title: 'Sistema De Comunicação Bluetooth Usando Microcontrolador PIC (Completion of Course)',
    views: 0,
    lang: 'pt-BR',
  },
]

const events = [
  { slideId: 'adventures-enzyme', where: 'QueensJS', city: 'New York City, USA', date: '2019-11-28', featured: true },
  { slideId: 'guia-galaxias', where: 'Front in Cuiabá', city: 'Cuiabá, Brazil', date: '2015-03-28', featured: true },
  { slideId: 'monitoracao-web-perf', where: 'Front in Poa', city: 'Porto Alegre, Brazil', date: '2014-11-08' },
  { slideId: 'workflow-grunt', where: 'VI FSLDC', city: 'Duque de Caxias, Brazil', date: '2014-10-25' },
  { slideId: 'guia-galaxias', where: 'Rupy Natal', city: 'Natal, Brazil', date: '2014-10-18' },
  { slideId: 'guia-galaxias', where: 'Frontend Carioca', city: 'Rio de Janeiro, Brazil', date: '2014-09-27' },
  { slideId: 'grunt-workshop', where: 'Web.br by W3C', city: 'São Paulo, Brazil', date: '2014-09-26' },
  { slideId: 'workflow-grunt', where: 'Front Interior', city: 'Bauru, Brazil', date: '2014-08-30' },
  { slideId: 'guia-galaxias', where: 'Front in Aracaju', city: 'Aracaju, Brazil', date: '2014-08-02' },
  { slideId: 'workflow-grunt', where: 'Mobile Conf', city: 'Rio de Janeiro, Brazil', date: '2014-05-31' },
  { slideId: 'como-globocom', where: 'UERJ', city: 'Rio de Janeiro, Brazil', date: '2014-05-15' },
  {
    slideId: 'practical-guide-django',
    where: 'Python Nordeste',
    city: 'Salvador, Brazil',
    date: '2014-05-03',
    featured: true,
  },
  { slideId: 'guia-pratico-django', where: 'Python Nordeste', city: 'Salvador, Brazil', date: '2014-05-03' },
  { slideId: 'esse-cara-grunt', where: 'Front in Recife', city: 'Recife, Brazil', date: '2013-12-14' },
  { slideId: 'its-javascript-time', where: 'Joomla Day Rio', city: 'Rio de Janeiro, Brazil', date: '2013-11-16' },
  { slideId: 'frontend-engineers', where: 'Convescote XL', city: 'Rio de Janeiro, Brazil', date: '2013-08-28' },
  { slideId: 'workflow-turbinando', where: 'Front in Bahia', city: 'Salvador, Brazil', date: '2013-07-27' },
  { slideId: 'workflow-open-source', where: 'V FSLDC', city: 'Duque de Caxias, Brazil', date: '2013-07-20' },
  {
    slideId: 'os-segredos',
    where: 'Semana Acadêmica ICET 2013 - Feevale',
    city: 'Novo Hamburgo, Brazil',
    date: '2013-04-13',
  },
  { slideId: 'jqueryperf', where: "PHP n'Rio", city: 'Rio de Janeiro, Brazil', date: '2012-11-10' },
  {
    slideId: 'javascript-cross-browser',
    where: 'Workshop Front-end Globo.com',
    city: 'Rio de Janeiro, Brazil',
    date: '2012-10-01',
  },
  { slideId: 'performance-javascript', where: 'BrazilJS', city: 'Porto Alegre, Brazil', date: '2012-08-31' },
  { slideId: 'fluent2012', where: '6º Rio.JS', city: 'Rio de Janeiro, Brazil', date: '2012-07-21' },
  { slideId: 'jqueryperf', where: 'IV FSLDC', city: 'Duque de Caxias, Brazil', date: '2012-06-30' },
  { slideId: 'fluent2012', where: 'Globo.com Weekly Talk', city: 'Rio de Janeiro, Brazil', date: '2012-06-12' },
  { slideId: 'javascript-cross-browser', where: 'PernambucoJS', city: 'Recife, Brazil', date: '2012-04-21' },
  { slideId: 'jqueryperf', where: 'BeagaJS', city: 'Belo Horizonte, Brazil', date: '2012-01-13' },
  { slideId: 'jqueryfn', where: 'Sampa.JS', city: 'São Paulo, Brazil', date: '2011-11-19' },
  { slideId: 'jqueryfn', where: 'Workshop Globo.com', city: 'Rio de Janeiro, Brazil', date: '2011-10-27' },
  { slideId: 'jqueryfn', where: 'Rio.JS', city: 'Rio de Janeiro, Brazil', date: '2011-10-08' },
  { slideId: 'html5', where: 'II EATI', city: 'Frederico Westphalen, Brazil', date: '2011-08-26' },
  { slideId: 'canvas-vs-svg', where: 'Front in Rio', city: 'Rio de Janeiro, Brazil', date: '2011-06-18' },
  { slideId: 'canvas-element', where: 'BrazilJS', city: 'Fortaleza, Brazil', date: '2011-05-14' },
  { slideId: 'frontend-retirante', where: 'Frontend Global', city: 'Recife, Brazil', date: '2011-01-15' },
  { slideId: 'front-end-engineer', where: 'Frontend-br Meetup', city: 'Recife, Brazil', date: '2009-03-09' },
  { slideId: 'rdfs', where: 'PUC-Rio', city: 'Rio de Janeiro, Brazil', date: '2012-08-28' },
  { slideId: 'bluetooth-pic', where: 'University of Pernambuco', city: 'Recife, Brazil', date: '2009-12-11' },
]

const slidesById = Object.fromEntries(slides.map(s => [s.id, s]))

const eventCountBySlideId = events.reduce((acc, e) => {
  acc[e.slideId] = (acc[e.slideId] ?? 0) + 1
  return acc
}, {})

export const getTalks = () =>
  events.map(event => {
    const slide = slidesById[event.slideId]
    return {
      url: slide.url,
      title: slide.title,
      views: slide.views,
      lang: slide.lang,
      eventCount: eventCountBySlideId[event.slideId],
      where: event.where,
      city: event.city,
      date: event.date,
      featured: event.featured,
    }
  })

const talks = getTalks()

export default talks
export { slides, events }
