import React from 'react'
import styled from 'styled-components'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import Layout from '../components/layout'
import { IconMapPin, IconPresentationAnalytics, IconCalendar } from '@tabler/icons-react'
import talks from '../data/talks'

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 16px;
`

const DetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 4px;

  ${IconWrapper}:last-child {
    margin-right: 0;
  }
`

const formatAllTalks = () =>
  talks.map((talk, index) => (
    <ListItemLink
      url={talk.url}
      key={index}
      headline={
        <DetailsContainer>
          <IconWrapper>
            <IconPresentationAnalytics size={14} />
            {talk.where}
          </IconWrapper>
          <IconWrapper>
            <IconMapPin size={14} />
            {talk.city}
          </IconWrapper>
          <IconWrapper>
            <IconCalendar size={14} />
            {talk.date}
          </IconWrapper>
        </DetailsContainer>
      }
      title={talk.title}
    />
  ))

const TalksPage = () => (
  <Layout>
    <Seo title="Talks" />
    <Section>
      <PageTitle>Talks</PageTitle>
      {formatAllTalks()}
    </Section>
  </Layout>
)

export default TalksPage
