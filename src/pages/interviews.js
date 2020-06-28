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

const InterviewsPage = () => (
  <Layout>
    <SEO title="Interviews" />
    <Section>
      <Title>INTERVIEWS</Title>
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        <em>in portuguese</em> - DNE 47 - Interview by Dev na Estrada
        <Location>apr 1, 2016</Location>
      </Link>
      <Link href="http://setup.loopinfinito.com.br/davidson-fellipe/">
        <em>in portuguese</em> - Setup Davidson Fellipe by loopinfinito.com.br
        <Location>oct 15, 2013</Location>
      </Link>
      <Link href="https://issuu.com/imasters/docs/revistaimasters5/30">
        <em>in portuguese</em> - Opinião sobre frameworks para desenvolvimento front-end by Revista iMasters #05
        <Location>feb 23, 2013</Location>
      </Link>
    </Section>
  </Layout>
)

export default InterviewsPage
