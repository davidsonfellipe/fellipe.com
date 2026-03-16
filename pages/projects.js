import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBriefcase } from '@tabler/icons-react'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import Layout from '../components/layout'
import projects from '../data/projects'
import { screen } from '../styles/screen'

const FILTER_ALL = 'all'

const FILTER_ORDER = ['Upgrade', 'Salesforce', 'Loadsmart', 'Pet Projects']
const companies = FILTER_ORDER.filter(c => projects.some(p => p.company === c))

const getFilteredProjects = filter => {
  if (filter === FILTER_ALL) return projects
  return projects.filter(p => p.company === filter)
}

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 24px;

  ${screen.md} {
    gap: 8px;
  }
`

const FilterButton = styled.button`
  font-size: 0.75rem;
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-primary);
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 6px 8px 8px;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: ${p => (p.$active ? '3px solid var(--color-tertiary)' : '1px solid #e0e0e0')};
  transition: border-color 100ms ease;

  &:hover {
    border-bottom-color: ${p => (p.$active ? 'var(--color-tertiary)' : '#bbb')};
  }

  ${screen.md} {
    font-size: 0.875rem;
    padding: 8px 12px 12px;
  }
`

const ProjectsPage = () => {
  const [filter, setFilter] = useState(FILTER_ALL)
  const filteredProjects = getFilteredProjects(filter)

  return (
    <Layout>
      <Seo title="Projects" />
      <Section>
        <PageTitle>Projects</PageTitle>
        <FilterRow>
          <FilterButton
            $active={filter === FILTER_ALL}
            onClick={() => setFilter(FILTER_ALL)}
            aria-current={filter === FILTER_ALL ? 'true' : undefined}
          >
            All
          </FilterButton>
          {companies.map(company => (
            <FilterButton
              key={company}
              $active={filter === company}
              onClick={() => setFilter(company)}
              aria-current={filter === company ? 'true' : undefined}
            >
              {company}
            </FilterButton>
          ))}
        </FilterRow>
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            {filteredProjects?.map(project => {
              const url = project.demoURL || project.repositoryURL || ''
              return (
                <ListItemLink
                  key={project.title}
                  categoryIcon={<IconBriefcase size={20} />}
                  headline={`${project.company} · ${project.year}`}
                  title={project.title}
                  description={project.description}
                  showViewMore={!!url}
                  url={url}
                  target={url.startsWith('http') ? '_blank' : undefined}
                  rel={url.startsWith('http') ? 'noopener noreferrer' : undefined}
                />
              )
            })}
          </motion.div>
        </AnimatePresence>
      </Section>
    </Layout>
  )
}

export default ProjectsPage
