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

const ProjectAccountDashboardRevamp = () => (
  <Layout>
    <Seo title="Account Dashboard Revamp" />
    <Section>
      <TitleCenter>Account Dashboard Revamp</TitleCenter>
      <ListProjects>
        <ListProjectsGroup>
          <ListProjectsGroupSticky>
            Upgrade
            <br />
            — 2024
            <br />
            <br />
            Role
            <br />— Engineer
          </ListProjectsGroupSticky>
        </ListProjectsGroup>
        <ListProjectsDetails>
          <ListItemProject
            title="Project Overview"
            description={
              <>
                <div>
                  The Account Dashboard Revamp focused on enhancing the user experience by redesigning the dashboard
                  with a modular, composable React component. This project delivered more consistency, better
                  accessibility, and reusability across multiple product dashboards.
                </div>
                <div>
                  <ImageWrapper>
                    <Image src="/images/projects/dashboard.png" alt="Account Dashboard" width={225} height={400} />
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
                    Developed a modular, reusable component library to ensure UI consistency and reduce maintenance
                    overhead, promoting extensibility and efficiency across dashboards.
                  </li>
                  <li>
                    Implemented components applying Web Content Accessibility Guidelines (WCAG), making the dashboard
                    more accessible and inclusive, while adhering to accessibility standards for a broader user base.
                  </li>
                  <li>
                    Collaborated with multiple teams to align on functional and visual requirements, ensuring a seamless
                    experience across product dashboards.
                  </li>
                </ul>
              </>
            }
          />
          <ListItemProject title="Technical Stack" description="React, Styled Components, GraphQL, Jest, Storybook." />
          <ListItemProject
            title="Outcomes"
            description="The project enhanced the developer experience for creating new dashboards by introducing composable components, which were used across multiple dashboards. This significantly reduced redundancy, simplified maintenance, and improved accessibility, ultimately enhancing customer satisfaction."
          />
        </ListProjectsDetails>
      </ListProjects>
    </Section>
  </Layout>
)

export default ProjectAccountDashboardRevamp
