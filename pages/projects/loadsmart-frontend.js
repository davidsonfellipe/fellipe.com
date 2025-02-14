import React from 'react'
import Seo from '../../components/seo'
import Section from '../../components/section'
import Layout from '../../components/layout'
import {
  TitleCenter,
  ListItemProject,
  ListProjects,
  ListProjectsGroup,
  ListProjectsGroupSticky,
  ListProjectsDetails,
  VideoWrapper,
} from '../../components/project-demo-styles'

const ProjectLoadsmartFrontend = () => (
  <Layout>
    <Seo title="Loadsmart Frontend" />
    <Section>
      <TitleCenter>Loadsmart Frontend</TitleCenter>
      <ListProjects>
        <ListProjectsGroup>
          <ListProjectsGroupSticky>
            Loadsmart
            <br />
            — 2015-2021
            <br />
            <br />
            Role
            <br />— From founding Engineer to Tech Lead Manager, and later Engineering Manager
          </ListProjectsGroupSticky>
        </ListProjectsGroup>
        <ListProjectsDetails>
          <ListItemProject
            title="Overview"
            description={
              <>
                <div>
                  Joined as the first front-end engineer in a fast-paced startup environment, responsible for building
                  key features like quotes, payments, and load management. Where I led the front-end engineering team,
                  fostering quality, maintainability, and performance. Expanded the number of contributors to the
                  front-end codebase from just me to 25+, fostering collaboration and knowledge sharing through
                  documentation, mentoring, and UI meetings. Introduced and advocated for front-end best practices,
                  including observability with Datadog Synthetics, end-to-end testing with Cypress, component library
                  implementation, and standardized code guidelines.
                </div>
                <div>
                  <VideoWrapper>
                    <video loop muted autoPlay={true} controls>
                      <source src="/images/projects/quote.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </VideoWrapper>
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
                    Led project of a reusable component library with Styled Components and Storybook, ensuring UI
                    consistency and reducing duplication.
                  </li>
                  <li>
                    Built and maintained first versions of the core front-end features such as the Quote & Book flow,
                    Live Loads dashboard, and shipment tracking using first Angular, and later, React, Redux, Webpack.
                  </li>
                  <li>
                    Implemented robust CI/CD pipelines, automated testing strategies with Jest and Cypress, and
                    integrated performance monitoring using Datadog RUM.
                  </li>
                  <li>
                    Migrated of Landing pages from an Assemble.io to Next.js + Migrated from an AngularJS frontend to a
                    modular React for SPA, improving performance, maintainability, and developer experience.
                  </li>
                </ul>
              </>
            }
          />
          <ListItemProject
            title="Technical Stack"
            description="React, Next.js, TypeScript, Angular, Redux, Styled Components, Jest, Cypress, Webpack, Datadog Synthetics, NewRelic."
          />
          <ListItemProject
            title="Outcomes"
            description="Built the front-end team that supported the company's growth from seed round to pre-series D. Here, I evolved as a leader, learning through wins and mistakes while successfully navigating technical complexities, scaling products and the design system, and improving processes to contribute the company's hyper-growth."
          />
        </ListProjectsDetails>
      </ListProjects>
    </Section>
  </Layout>
)

export default ProjectLoadsmartFrontend
