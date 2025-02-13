import React from 'react'
import Seo from '../../components/seo'
import Section from '../../components/section'
import Layout from '../../components/layout'
import {
  TitleCenter,
  ListItemProject,
  ImageWrapper,
  ListProjects,
  ListProjectsGroup,
  ListProjectsGroupSticky,
  ListProjectsDetails,
} from '../../components/project-demo-styles'
import Image from 'next/image'

const ProjectDesignSystem = () => (
  <Layout>
    <Seo title="Loadsmart Design System" />
    <Section>
      <TitleCenter>Loadsmart Design System</TitleCenter>
      <ListProjects>
        <ListProjectsGroup>
          <ListProjectsGroupSticky>
            Loadsmart
            <br />
            2020 — 2021
            <br />
            <br />
            Role
            <br />— Engineering Manager, Front-end
          </ListProjectsGroupSticky>
        </ListProjectsGroup>
        <ListProjectsDetails>
          <ListItemProject
            title="Project Overview"
            description={
              <>
                <div>
                  The Loadsmart Design System was created to provide a unified UI foundation across two products.
                  Inspired by Google Material and atomic design principles to enable faster prototyping and development
                  with reusable components.
                </div>
                <div>
                  <ImageWrapper>
                    <a href="/images/projects/design-system.jpg" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="/images/projects/design-system.jpg"
                        alt="Loadsmart Design System"
                        width={768}
                        height={481}
                      />
                    </a>
                  </ImageWrapper>
                </div>
              </>
            }
          />
          <ListItemProject
            title="Challenges & Solutions"
            description={
              <>
                <ul>
                  <li>
                    Established a scalable design system with reusable components, improving design and development
                    consistency.
                  </li>
                  <li>
                    Developed two distinct design systems: one for internal tools (high-density UI) and another for
                    customer-facing applications.
                  </li>
                  <li>
                    Implemented a structured process for component creation, including design critiques, developer
                    testing, and documentation in Storybook.
                  </li>
                </ul>
              </>
            }
          />
          <ListItemProject title="Technical Stack" description="React, Styled Components, Jest, Webpack, Storybook." />
          <ListItemProject
            title="Outcomes"
            description="The design system streamlined UI development by providing a single source of truth, reducing design inconsistencies, 
            and enabling faster prototyping. It improved engineering efficiency and product consistency across Loadsmart’s platforms."
          />
        </ListProjectsDetails>
      </ListProjects>
    </Section>
  </Layout>
)

export default ProjectDesignSystem
