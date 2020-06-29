import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Link from 'components/Link'
import ItemDate from 'components/ItemDate'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import { screen } from 'styles/screen'

const Date = styled(ItemDate)`
  ${screen.md} {
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
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        DNE 47 - Interview by Dev na Estrada
        <Date>in portuguese · apr 1, 2016</Date>
      </Link>
      <Link href="http://setup.loopinfinito.com.br/davidson-fellipe/">
        Setup Davidson Fellipe by loopinfinito.com.br
        <Date>in portuguese · oct 15, 2013</Date>
      </Link>
      <Link href="https://fellipe.com/files/estado-de-minas.pdf">
        Interview about Front in BH Conference by Estado de Minas (brazilian newspaper)
        <Date>in portuguese · jul 23, 2013</Date>
      </Link>
      <Link href="https://issuu.com/imasters/docs/revistaimasters5/30">
        Frameworks para desenvolvimento front-end by Revista iMasters #05
        <Date>in portuguese · feb 23, 2013</Date>
      </Link>
    </Section>
  </Layout>
)

export default InterviewsPage
