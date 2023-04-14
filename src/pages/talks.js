import React from 'react'

import Title from 'components/Title'
import Section from 'components/Section'
import ListItemLink from 'components/ListItemLink'
import PageDescription from 'components/PageDescription'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

import profiles from 'data/profiles'
import talks from 'data/talks'

const formatAllTalks = () =>
  talks.map(talk => (
    <ListItemLink
      url={talk.url}
      headline={`${talk.where} · ${talk.date}`}
      headlineSecondary={talk.city}
      title={talk.title}
    />
  ))

const TalksPage = () => (
  <Layout>
    <SEO title="Talks" />
    <Section>
      <Title>Talks</Title>
      <PageDescription>
        Here you can find all of my talks where I share my insights related to software development with you through my
        presentations. To access a talk, you can select one below or find them on my{' '}
        <a href={profiles.speakerdeck.url}>Speakerdeck</a> or <a href={profiles.slideshare.url}>SlideShare</a>, using
        these platforms you can browse through my presentations.
      </PageDescription>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
