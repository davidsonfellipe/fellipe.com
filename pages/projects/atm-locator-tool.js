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
              <>
                <ul>
                  <li>
                    Micro-frontend Architecture: Built the locator as a lightweight, standalone micro-frontend
                    seamlessly integrated with the company&apos;s web app, landing pages, and mobile applications.
                  </li>
                  <li>
                    Interactive Map Integration: Built a responsive, user-friendly map interface using the API to
                    display ATM locations, along with search, search by area, and filtering features for location-based
                    queries.
                  </li>
                  <li>
                    Mobile & Web Parity: Ensured feature parity and consistent user experience across web and mobile
                    platforms through responsive design techniques.
                  </li>
                </ul>
              </>
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
