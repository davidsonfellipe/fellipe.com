import React from 'react'

import Seo from '../components/seo'
import Title from '../components/title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import PageDescription from '../components/page-description'
import Layout from '../components/layout'

import projects from '../data/projects'
import profiles from '../data/profiles'

const formatAllTalks = () =>
  projects.map(project => (
    <ListItemLink
      url={project.repositoryURL}
      key={`${project.stars}+ stars on github`}
      headline={`${project.stars}+ stars on github`}
      headlineSecondary={project.status}
      rel="noreferrer"
      target="_blank"
      title={`${project.title} · ${project.description}`}
      key={project.title}
    />
  ))

const TalksPage = () => (
  <Layout>
    <Seo title="Projects" />
    <Section>
      <Title>Projects</Title>
      <PageDescription>
        Here you can find some of my projects, You can find more on my Github:{' '}
        <a href={profiles.github.url} rel="noreferrer" target="_blank">
          {profiles.github.url}
        </a>
      </PageDescription>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
