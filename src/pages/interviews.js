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
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        Trabalhando com gestão em tecnologia fora do Brasil @ Tech Leadership Rocks
        <Date>mar 21, 2021 · in portuguese</Date>
      </Link>
      <Link href="https://www.youtube.com/watch?v=dg2p6Bgajkg&list=PLx7GnPMAl5iyrSditXMSUlSq_uSmUxdl0">
        IT Carrer Abroad @ Fellyph Cintra (YouTube Channel)
        <Date>jul 08, 2020 · in portuguese</Date>
      </Link>
      <Link href="https://devnaestrada.com.br/2016/04/01/devnaestrada-entrevista-davidson-fellipe.html">
        My career path (ep #47) @ Devnaestrada
        {/* My career path from college to 2016, through academic experience, adaptation in a new city and beginning of my life in the USA. */}
        <Date>apr 1, 2016 · in portuguese</Date>
      </Link>
      <Link href="https://www.youtube.com/watch?v=6Odt8ztbwNk">
        Quick chat in Front in Aracaju
        <Date>aug 02, 2014 · in portuguese</Date>
      </Link>
      <Link href="http://setup.loopinfinito.com.br/davidson-fellipe/">
        Setup by loopinfinito.com.br - My career path (#4)
        <Date>oct 15, 2013 · in portuguese</Date>
      </Link>
      <Link href="https://fellipe.com/files/estado-de-minas.pdf">
      Estado de Minas (brazilian newspaper) - Interview about Front in BH Conference
        <Date>jul 23, 2013 · in portuguese</Date>
      </Link>
      <Link href="https://issuu.com/imasters/docs/revistaimasters5/30">
        Revista iMasters #05 - Frameworks para desenvolvimento front-end
        <Date>feb 23, 2013 · in portuguese</Date>
      </Link>
    </Section>
  </Layout>
)

export default InterviewsPage
