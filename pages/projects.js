import React from 'react'
import styled from 'styled-components'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Section from '../components/section'
import Layout from '../components/layout'
import projects from '../data/projects'
import { screen } from '../styles/screen'

const ProjectsPage = () => {
  return (
    <Layout>
      <Seo title="Projects" />
      <Section>
        <PageTitle>Projects</PageTitle>
        {projects?.map(project => (
          <ProjectItem project={project} key={project.title} />
        ))}
      </Section>
    </Layout>
  )
}

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const ProjectCategory = styled.div`
  padding-top: var(--spacing-md);
  width: 20%;

  ${screen.md} {
    width: 15%;
  }
`

const ProjectsDetails = styled.div`
  text-decoration: none;
  transition:
    border-color 100ms linear,
    transform 100ms linear;
  width: 80%;
  will-change: transform, opacity, border-color;

  ${screen.md} {
    opacity: 0.95;
    width: 85%;

    &:hover,
    &:focus {
      border-color: var(--color-tertiary);
      opacity: 1;
      transform: scale(1.005);
    }
  }
`

const ProjectTitle = styled.h3`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  padding-top: var(--spacing-md);

  ${screen.md} {
    font-size: 1.25rem;
  }
`

const ProjectDescription = styled.p`
  margin: 0;
  padding: 10px 0 15px 0;
`

const Wrapper = styled.div`
  border-bottom: 3px solid #efefef;
  display: block;
  font-size: 1rem;
  color: var(--color-primary);
  line-height: 1.5em;
  position: relative;
  text-decoration: none;
  transition: border-color 500ms linear;

  &:hover {
    border-color: var(--color-tertiary);
  }
`

const ViewProject = styled.span`
  display: block;
  font-size: 0.5rem;
  margin: 10px 0 20px 0;
  text-align: right;
  text-decoration: none;
  width: 100%;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;

  ${screen.md} {
    margin-top: 0;
    text-align: right;
    padding: 0 10px;
    opacity: 0.9;
  }
`

const ProjectItem = ({ project }) => {
  const url = project.demoURL || project.repositoryURL
  const isExternal = url && url.startsWith('http')

  return (
    <ProjectWrapper>
      <ProjectCategory>
        {project.company}
        <br />
        {project.year}
      </ProjectCategory>
      <ProjectsDetails
        as={url ? 'a' : 'div'}
        href={url}
        target={isExternal ? '_blank' : '_self'}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        <Wrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>
            {project.description} {url ? <ViewProject>View more →</ViewProject> : null}
          </ProjectDescription>
        </Wrapper>
      </ProjectsDetails>
    </ProjectWrapper>
  )
}

export default ProjectsPage
