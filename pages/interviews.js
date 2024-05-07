import React from 'react'

import Seo from '../components/seo'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import Layout from '../components/layout'

import interviews from '../data/interviews'

const formatAllInterviews = () =>
  interviews.map((interview, index) => (
    <ListItemLink
      url={interview.url}
      key={index}
      headline={interview.date}
      headlineSecondary={`${interview.type} · ${interview.lang}`}
      title={interview.title}
    />
  ))

const InterviewsPage = () => (
  <Layout>
    <Seo title="Interviews" />
    <Section>
      <Title>Interviews</Title>
      <Subtitle>Over the years, I&apos;ve been participated in {interviews.length} podcasts and publications.</Subtitle>
      {formatAllInterviews()}
    </Section>
  </Layout>
)

export default InterviewsPage
