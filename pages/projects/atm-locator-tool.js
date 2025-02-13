import React from 'react'
import Seo from '../../components/seo'
import Section from '../../components/section'
import Layout from '../../components/layout'
import {
  TitleCenter,
  ListItemProject,
  VideoWrapper,
  ListProjects,
  ListProjectsGroup,
  ListProjectsGroupSticky,
  ListProjectsDetails,
} from '../../components/project-demo-styles'

const ProjectATMLocatorTool = () => (
  <Layout>
    <Seo title="ATM Locator Tool" />
    <Section>
      <TitleCenter>ATM Locator Tool</TitleCenter>
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
            title="Introduction"
            description={
              <>
                To enhance the customer experience and reduce operational costs, the ATM Locator Tool enabled users to
                find over 50,000 ATMs across the USA directly through web or mobile platforms.
                <VideoWrapper>
                  <video loop muted autoPlay={true} controls>
                    <source src="/images/projects/atm-desktop2.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </VideoWrapper>
              </>
            }
          />
          <ListItemProject
            title="Challenge"
            description={
              <ul>
                <li>
                  Developed a standalone ATM locator as a micro-frontend to be integrated into the company&apos;s web
                  app, landing pages, and mobile applications. This required collaboration with multiple teams to ensure
                  compatibility across different projects while maintaining a consistent user experience.
                </li>
                <li>
                  This interactive and responsive map interface uses the Google Maps API, enabling users to locate ATMs.
                  The implementation included custom markers and smooth animations to enhance navigation.
                </li>
                <li>
                  Also provide search capabilities with autocomplete, geolocation-based, radius-based and area-based
                  filtering to improve usubility.
                </li>
                <li>
                  Addressed performance challenges by optimizing API calls, and data-fetching strategies to ensure fast
                  load times and a seamless experience, even on mobile networks with limited bandwidth.
                </li>
              </ul>
            }
          />
          <ListItemProject
            title="Technical Stack"
            description="React, Styled Components, GraphQL, Apollo Client, Jest, Storybook, Vite"
          />
          <ListItemProject
            title="Takeaways"
            description="The ATM Locator Tool was an enhancement for enabling users to access fee-free ATMs conveniently. This project not only improved the customer experience but also contributed to increased transaction volume and cost savings by reducing operational support demands."
          />
        </ListProjectsDetails>
      </ListProjects>
    </Section>
  </Layout>
)

export default ProjectATMLocatorTool
