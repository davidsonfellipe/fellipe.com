import React from 'react'
import Seo from '../components/seo'
import Title from '../components/title'
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
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
