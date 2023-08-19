import React from 'react'

import Seo from '../components/seo'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import PageDescription from '../components/page-description'
import Layout from '../components/layout'

import profiles from '../data/profiles'
import talks from '../data/talks'

const formatAllTalks = () =>
  talks.map((talk, index) => (
    <ListItemLink
      url={talk.url}
      key={index}
      headline={`${talk.where}`}
      headlineSecondary={`${talk.date} · ${talk.city}`}
      title={talk.title}
    />
  ))

const TalksPage = () => (
  <Layout>
    <Seo title="Talks" />
    <Section>
      <Title>Talks</Title>
      <PageDescription>
        Here you can find all of my {talks.length} talks where I share my insights related to software development.
        To access a talk, you can select one below or find them on my{' '}
        <a href={profiles.speakerdeck.url}>Speakerdeck</a> or <a href={profiles.slideshare.url}>SlideShare</a>, using
        these platforms you can browse through my presentations.
      </PageDescription>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
