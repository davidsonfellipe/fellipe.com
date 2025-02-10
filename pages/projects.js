import React from 'react'
import styled from 'styled-components'
import Seo from '../components/seo'
import Title from '../components/title'
import Section from '../components/section'
import Layout from '../components/layout'
import projects from '../data/projects'
import { screen } from '../styles/screen'

const ProjectsPage = () => (
  <Layout>
    <Seo title="Projects" />
    <Section>
      <Title>Projects</Title>
      {projects?.map(project => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </Section>
  </Layout>
)

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`

const ProjectCategory = styled.div`
  width: 20%;

  ${screen.md} {
    width: 15%;
  }
`

const ProjectsDetails = styled.div`
  padding: 0 0 20px;
  text-decoration: none;
  transition:
    border-color 100ms linear,
    transform 100ms linear;
  width: 80%;

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
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-family: var(--font-title);
  font-weight: 700;

  ${screen.md} {
    font-size: 2rem;
    display: inline-block;
  }
`

const ProjectDescription = styled.p`
  margin-top: 10px;
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
  opacity: 0.95;

  &:hover {
    opacity: 1;
    border-color: var(--color-tertiary);
  }
`

const ViewProject = styled.a`
  display: block;
  font-size: 0.75rem;
  margin: 10px 0 20px 0;
  text-align: right;
  text-decoration: none;
  width: 100%;

  ${screen.md} {
    margin-top: 0;
    text-align: left;
    display: inline-block;
    max-width: 100px;
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
      <ProjectsDetails as={url ? 'a' : 'div'} href={url} target={isExternal ? '_blank' : 'dsa'} rel="noreferrer">
        <Wrapper>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>
            {project.description} {url ? <ViewProject href={project.repositoryURL}>View more →</ViewProject> : null}
          </ProjectDescription>
        </Wrapper>
      </ProjectsDetails>
    </ProjectWrapper>
  )
}

export default ProjectsPage
