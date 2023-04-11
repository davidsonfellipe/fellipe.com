import React from 'react'

import Title from 'components/Title'
import Section from 'components/Section'
import ListItemLink from 'components/ListItemLink'
import PageDescription from 'components/PageDescription'
import Layout from 'components/Layout'
import SEO from 'components/SEO'

import projects from 'data/projects'
import profiles from 'data/profiles'

const formatAllTalks = () =>
  projects.map(project => (
    <ListItemLink
      url={project.repositoryURL}
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
    <SEO title="Projects" />
    <Section>
      <Title>Projects</Title>
      <PageDescription>
        Here you can find some of my projects, You can find more on my Github:{' '}
        <a href={profiles.github.url} rel="noopener" target="_blank">
          {profiles.github.url}
        </a>
      </PageDescription>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
