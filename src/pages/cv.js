import React from 'react'
import styled from 'styled-components'

import Title from 'components/Title'
import Section from 'components/Section'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import PageDescription from 'components/PageDescription'
import SocialMediaLinks from 'components/SocialMediaLinks'
import profile from 'images/profile.jpg'

import { screen } from 'styles/screen'
import { colors } from 'styles/theme'

import profiles from 'data/profiles'

const Subtitle = styled.h2`
  color: #333;
  line-height: 1em;
  margin: 50px 0 20px 0;
  font-size: 1em;
  font-style: italic;
  position: relative;

  ${screen.md} {
    margin: 20px 0 20px 0;
  }

  &:after {
    border-top: 1px solid ${colors.tertiary};
    content: ' ';
    display: inline-block;
    position: absolute;
    top: 50%;
    right: 0;
    width: 25%;

    ${screen.lg} {
      width: 30%;
    }
  }
`

const Experience = styled.section`
  font-size: 0.75rem;
  line-height: 1em;
  margin: 1rem 0 0rem 0;
`

const ImageProfile = styled.img`
  float: left;
  margin: 0 1rem 0 0;
  box-shadow: 0.25rem 0.25rem ${colors.tertiary};
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  column-gap: 1.5rem;

  h2 {
    font-size: 1rem;
  }
  h3 {
    font-size: 0.7rem;
  }

  p,
  li {
    font-size: 0.75rem;
  }
`

const Top = styled.div`
  p {
    font-size: 0.75rem;
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="CV" />
    <Section>
      <Top>
        <Title>
          {/* <ImageProfile src={profile} alt="profile" width={100} height={100} /> */}
          Davidson Fellipe - CV
        </Title>
        <p>
          Brazilian based in Brooklyn since 2015, he has over fifteen years of experience in the Software Industry and
          has worked for some large and small companies in the US and Brazil. He worked as an Engineering Manager at
          Salesforce, also in the US, he joined Loadsmart at an early stage and worked for nearly seven years, was the
          first front-end engineer, led the area, and was an engineering manager. In Brazil, he worked for five years
          building high scalable front-end applications for globo.com, and a few more years in projects related to web
          development, e-learning platforms, and mentoring in coding bootcamp-like programs. He is highly interested in
          building teams, Agile software development, Front-end development, Web Performance, Tests, and Web standards.
        </p>
      </Top>
      <Wrapper>
        <div>
          <Subtitle>Work Experience</Subtitle>
          <Experience>
            <h2>Salesforce</h2>
            <h3>Software Engineering Manager, Search Experience for Commerce</h3>
            <ul>
              <li>
                Managed the Search Experience team, which was responsible for a variety of projects and features for
                Search in Salesforce Commerce Cloud. The Search Experience team was fully remote and distributed across
                the US, with face-to-face meetings 3 times a year for planning.
              </li>
              <li>
                Took ownership to create dashboards for Commerce Search teams to notify and have a better overview of
                the sprint progress, key release dates, tracking of bugs and investigations, as well as other internal
                indicators that needed to be tracked, thus facilitating tracking and visibility reports to the team to
                best drive team success.
              </li>
              <li>
                Feature delivered so customers can be able to index their stores incrementally, reducing re-indexing
                time by 80%.
              </li>
              <li>Coordinated an Auditing of Search Commerce Cloud components for Accessibility standards.</li>
              <li>Coordinated the onboarding of 3 new engineers.</li>
              <li>
                Coordinated with product, engineering, design for planning, prioritization of the team's Roadmap,
                Backlog, and Sprint.
              </li>
              <li>
                Our mission was to simplify the user journey, instrumentation, and performance of reusable building
                block components based on Lightning and Aura web components for Commerce Search.
              </li>
            </ul>
            <h3>Lead Software Engineer, Front-end, Search Experience for Commerce</h3>
            <ul>
              <li>Worked as Lead Software Engineer for B2B Commerce Search Team.</li>
              <li>
                Led planning, execution, and release of the integration of Commerce Search instrumentation for activity
                tracking capturing browser-based, real-time customer activities on the storefront. Full documentation
                here: https://help.salesforce.com/s/articleView?id=sf.comm_einstein_activity_tracking_top.htm&type=5
              </li>
              <li>
                Coordinated the onboarding of a new Intern, and the organization of technical interviews for this
                position.
              </li>
            </ul>
          </Experience>
          <Experience>
            <h2>Loadsmart</h2>
            <h3>Software Engineering Manager, Shipper Experience & RFPguide.com</h3>
            <ul>
              <li>
                Managed 2 Full stack remote teams: Shipper Experience and RFPGuide (Now Shipperguide), spread across 3
                timezones - USA, Mexico, and Brazil.
              </li>
              <li>Managed 11 people: 9 Engineers, and 2 Tech Leads ~ One of them in transition to management.</li>
              <li>
                We delivered a variety of projects and features for shippers, focusing on simplifying the user journey
                and improving performance, and metrics for our Freight management tool, helping shippers to move loads
                more efficiently and grow their business.
              </li>
              <li>Responsibilities as a manager:</li>
              <li>- Coordinated with product managers, engineering, and design for planning</li>
              <li>- Work in partnership to prioritize the Roadmap, Backlog, and Sprint.</li>
              <li>
                - Perform management tasks for a diverse engineering team, including mentoring, performance reviews, and
                career growth conversations.
              </li>
              <li></li>
              <li>- Collaborate with engineers to identify pain points and solutions.</li>
              <li>- Sometimes, writing code on React, Styled Components, Jest, Webpack, and Python.</li>
              <li></li>
              <li>My Cross-team initiatives:</li>
              <li>
                - Co-Led with the Director of Design, the creation of our UI Design System, which we initially started
                by coordinating efforts across multiple teams, and then working towards hiring a dedicated team to run
                the project.
              </li>
              <li>
                - Led the UI meeting – organizing a biweekly meeting to share knowledge about UI development and follow
                the meeting's action items for about 30 engineers, which included front-ends, designers, and full-stack
                engineers.
              </li>
              <li>
                - Led the restructuring of the Hiring process on the engineering side to coordinate with hiring managers
                the standardization of the process for different roles and levels:
                Front-end/Back-end/Full-Stack/Data/Security engineer, Data Science, and SRE.
              </li>
              <li>- Led the migration of the engineering Hiring process to HackerRank.</li>
              <li>
                - Co-led with the VP of Engineering the creation of our Engineering blog, which was a valuable tool for
                showcasing our open source libraries, tips for engineering interviews, and attracting new talents.
              </li>
            </ul>
            <h3>Senior Software Engineer, Front-end - Dec 2014 - May 2017 (2 years 6 months)</h3>
            <ul>
              <li>
                I was the First Front-end Engineer hired, and I hired and mentored the next ones who joined the company
                until 2017.
              </li>
              <li>
                Responsible for front-end development in products related to Loadsmart.com using React, Angular, SASS,
                Jest, Webpack, Grunt.
              </li>
              <li></li>
              <li></li>
            </ul>
          </Experience>
          <Experience>
            <h2>Globo.com</h2>
            <h3>Senior Software Engineer, Front-end - Jun 2014 - May 2015 (1 year)</h3>
            <ul>
              <li>
                Responsible for front-end development in products related to sports, high scalable applications for
                globoesporte.com, my focus was on Front-end development. Analysis and implementation of new features at
                globoesporte.com. Coding using JavaScript, SASS, CSS, HTML, Performance Tools, Jasmine, SEO, Compass. In
                most projects were developed using Python or Ruby, with version control using GIT, and a long time ago,
                SVN. I taught 3 internal trainings about best practices related to front-end technologies, and I help in
                recruiting software engineers and interns. Projects Davidson Fellipe - page 3 -
                http://globoesporte.globo.com/eu-atleta/ - http://futpedia.globo.com/ - http://globoesporte.globo.com/ -
                http://sportv.globo.com/site/ - https://opensource.globo.com/ Globo.com is the internet brand of the
                largest media conglomerate in Latin America (Grupo Globo).
              </li>
            </ul>
            <h3>Software Engineer, Front-end - Jul 2010 - Jun 2014 (4 years)</h3>
            <ul>
              <li>
                Responsible for front-end development in products related to sports, creating new features for SporTV,
                Eu Atleta, Futpédia, and Globoesporte.com (the most accessed website about sports in Brazil), around 20
                million unique users daily.
              </li>
            </ul>
          </Experience>
          <Experience>
            <h2>CESAR</h2>
            <h3>Tutor and Systems Engineer, Mobile</h3>
            <ul>
              <li>
                Responsible for mentoring 7 students in a software residency program, with a user-centered development
                process for developing mobile applications, in partnership with SAMSUNG. Also part-time, as a Systems
                Engineer developing mobile applications for low-cost phones. CESAR is amongst the top IT innovation
                institutes in Brazil.
              </li>
            </ul>
          </Experience>

          {/* <Experience>
            ✋ Hi there! I'm a Brazilian who has been living in Brooklyn since 2015. With over fifteen years of
            experience in the software development industry, I've had the opportunity to work for large and small
            companies in the US and Brazil. <br />
            <br />
            During my time in the US, I worked as an Engineering Manager at Salesforce Commerce Cloud for Commerce
            Search team until 2023. In 2014, I joined Loadsmart in its early stages and was the first front-end
            engineer, leading the area for five years. I was responsible for maintaining and evolving the engineering
            recruitment process and also worked as an engineering manager, managing teams, roadmap, backlog and
            supporting the career growth of two engineering teams.
            <br />
            <br />
            During my time in Brazil, I had the opportunity to work on some exciting projects. For five years, I worked
            on the design, development, and maintenance of highly scalable front-end applications for Globo.com,
            ge.globo.com, and sportv.globo.com. Globo is the largest media company in Latin America, and it was a
            fantastic experience to work with such a significant player in the industry.
            <br />
            <br />
            Before working at Globo.com, I spent almost three years working on various web development projects,
            e-learning platforms, and mentoring in coding bootcamp-like programs. It was fulfilling to work on these
            programs and help others develop their skills in the industry.
            <br />
            <br />
            I have already spoken at over 30 conferences about software development. In addition, I was a former
            co-organizer of some conferences for developers, including Front in BH, Front in Recife, PernambucoJS, and
            Rio.JS.
            <br />
            <br /> I am highly interested in building teams, Agile software development, Front-end development, Web
            Performance, Tests, and Web standards. I hold an MSc in Web Performance from PUC-Rio and a BSc in Computer
            Engineering from University of Pernambuco. In my spare time, I enjoy traveling, visit coffeeshops and
            talking about travel.
          </Experience> */}
        </div>
        <div>
          <Subtitle>Contact</Subtitle>
          <Experience>
            <ul>
              <li>email@fellipe.com</li>
              <li>+1 347.272.4608</li>
              <li>https://www.linkedin.com/in/fellipe/</li>
              <li>https://github.com/davidsonfellipe</li>
            </ul>
          </Experience>

          <Subtitle>Skills</Subtitle>
          <Experience>
            <ul>
              <li>Framework: Gatsby</li>
              <li>Styling: Styled components</li>
              <li>Deployment: Vercel</li>
              <li>
                <a href="https://github.com/davidsonfellipe/fellipe.com">Source code on github</a>
              </li>
            </ul>
          </Experience>

          <Subtitle>Education</Subtitle>
          <Experience>
            <p>
              <strong>Master's degree | 2012 - 2015</strong>
              <br />
              <span>PUC-Rio</span>
              <br />
              <span>Computer Science, Web performance</span>
              <br />
            </p>
            <p>
              <strong>Bachelor's degree | 2005 - 2009</strong>
              <br />
              <span>Universidade de Pernambuco</span>
              <br />
              <span>Computer Engineering</span>
              <br />
            </p>
          </Experience>
        </div>
      </Wrapper>

      <PageDescription>
        You can find more on my Linkedin: <a href={profiles.linkedin.url}>{profiles.linkedin.url}</a>
      </PageDescription>
    </Section>
  </Layout>
)

export default AboutPage
