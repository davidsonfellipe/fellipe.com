import React from 'react'

import Seo from '../components/seo'
import Title from '../components/title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import PageDescription from '../components/page-description'
import Layout from '../components/layout'

import interviews from '../data/interviews'

const formatAllInterviews = () =>
  interviews.map(interview => (
    <ListItemLink
      url={interview.url}
      key={`${interview.type} · ${interview.date}`}
      headline={`${interview.type} · ${interview.date}`}
      headlineSecondary={interview.lang}
      title={interview.title}
    />
  ))

const InterviewsPage = () => (
  <Layout>
    <Seo title="Interviews" />
    <Section>
      <Title>Interviews</Title>
      <PageDescription>Here is a list of my participations in podcasts.</PageDescription>
      {formatAllInterviews()}
    </Section>
  </Layout>
)

export default InterviewsPage
