import React from 'react'

import Seo from '../components/seo'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import Layout from '../components/layout'

import talks from '../data/talks'

const formatAllTalks = () =>
  talks.map((talk, index) => (
    <ListItemLink
      url={talk.url}
      key={index}
      headline={`${talk.where} - ${talk.city}`}
      headlineSecondary={`${talk.date}`}
      title={talk.title}
    />
  ))

const TalksPage = () => (
  <Layout>
    <Seo title="Talks" />
    <Section>
      <Title>Talks</Title>
      <Subtitle>
        Here you can find all of my {talks.length} talks where I share my insights related to software development.
      </Subtitle>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
