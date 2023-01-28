import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Link from 'components/Link'
import ItemDate from 'components/ItemDate'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { screen } from 'styles/screen'

const Type = styled(ItemDate)`
  display: block;

  ${screen.md} {
    display: inline-block;
    font-size: 14px;
    margin-right: 10px;
  }
`

const Date = styled(ItemDate)`
  ${screen.lg} {
    margin-right: 15px;
    position: absolute;
    right: 0;
    top: 15px;
    display: inline-block;
  }
`

const InterviewsPage = () => (
  <Layout>
    <SEO title="Interviews" />
    <Section>
      <Title>INTERVIEWS</Title>
      <Link href="https://www.devsemfronteiras.tech/episode/vida-e-trabalho-nas-costas-leste-e-oeste-dos-eua-dev-sem-fronteiras-31/">
        <Type>Podcast</Type>Vida e trabalho nas costas Leste e Oeste dos EUA @ Dev Sem Fronteiras
        <Date>apr 13, 2022 · in portuguese</Date>
      </Link>
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        <Type>Podcast</Type>Trabalhando com gestão em tecnologia fora do Brasil @ Tech Leadership Rocks
        <Date>mar 21, 2021 · in portuguese</Date>
      </Link>
      <Link href="https://www.youtube.com/watch?v=dg2p6Bgajkg&list=PLx7GnPMAl5iyrSditXMSUlSq_uSmUxdl0">
        <Type>Youtube</Type>Chat with expats about careers outside Brazil @ Fellyph Cintra
        <Date>jul 08, 2020 · in portuguese</Date>
      </Link>
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        <Type>Podcast</Type>Interview about my career for Devnaestrada
        {/* My career path from college to 2016, through academic experience, adaptation in a new city and beginning of my life in the USA. */}
        <Date>apr 1, 2016 · in portuguese</Date>
      </Link>
      <Link href="http://setup.loopinfinito.com.br/davidson-fellipe/">
        <Type>Blog</Type>Interview about my career for Setup by loopinfinito.com.br
        <Date>oct 15, 2013 · in portuguese</Date>
      </Link>
      <Link href="https://fellipe.com/files/estado-de-minas.pdf">
        <Type>Newspaper</Type>Interview about Front in BH Conference for Estado de Minas (brazilian newspaper)
        <Date>jul 23, 2013 · in portuguese</Date>
      </Link>
      <Link href="https://issuu.com/imasters/docs/revistaimasters5/30">
        <Type>Magazine</Type>Interview about Frameworks for front-end development - Revista iMasters
        <Date>feb 23, 2013 · in portuguese</Date>
      </Link>
    </Section>
  </Layout>
)

export default InterviewsPage
