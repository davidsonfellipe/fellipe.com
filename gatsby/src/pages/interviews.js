import React from 'react'

import Title from 'components/Title'
import Section from 'components/Section'
import ListItemLink from 'components/ListItemLink'
import Layout from 'components/Layout'
import PageDescription from 'components/PageDescription'
import SEO from 'components/SEO'

import interviews from 'data/interviews'

const formatAllInterviews = () =>
  interviews.map(interview => (
    <ListItemLink
      url={interview.url}
      headline={`${interview.type} · ${interview.date}`}
      headlineSecondary={interview.lang}
      title={interview.title}
    />
  ))

const InterviewsPage = () => (
  <Layout>
    <SEO title="Interviews" />
    <Section>
      <Title>Interviews</Title>
      <PageDescription>Here is a list of my participations in podcasts.</PageDescription>
      {formatAllInterviews()}
    </Section>
  </Layout>
)

export default InterviewsPage
