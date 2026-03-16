import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IconBriefcase } from '@tabler/icons-react'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import FilterBar from '../components/filter-bar'
import Layout from '../components/layout'
import projects from '../data/projects'

const FILTER_ALL = 'all'

const FILTER_ORDER = ['Upgrade', 'Salesforce', 'Loadsmart', 'Personal']
const companies = FILTER_ORDER.filter(c => projects.some(p => p.company === c))

const getFilteredProjects = filter => {
  if (filter === FILTER_ALL) return projects
  return projects.filter(p => p.company === filter)
}

const filterOptions = [{ value: FILTER_ALL, label: 'All' }, ...companies.map(c => ({ value: c, label: c }))]

const ProjectsPage = () => {
  const [filter, setFilter] = useState(FILTER_ALL)
  const filteredProjects = getFilteredProjects(filter)

  return (
    <Layout>
      <Seo title="Projects" />
      <Section>
        <PageTitle>Projects</PageTitle>
        <FilterBar options={filterOptions} value={filter} onChange={setFilter} />
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
