import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import Seo from '../components/seo'
import PageTitle from '../components/page-title'
import Section from '../components/section'
import ListItemLink from '../components/list-item-link'
import Layout from '../components/layout'
import {
  IconMapPin,
  IconPresentationAnalytics,
  IconExternalLink,
  IconWorld,
  IconCategory,
  IconHeadphones,
  IconVideo,
  IconMail,
  IconArticle,
  IconNews,
  IconPhoto,
} from '@tabler/icons-react'
import { screen } from '../styles/screen'
import talks from '../data/talks'
import interviews from '../data/interviews'
import { getYear } from '../lib/format-date'
import { formatViews } from '../lib/format-views'

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

const FeaturedRow = styled.div`
  display: flex;
  align-items: stretch;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  gap: 16px;
  padding-bottom: 16px;
  scrollbar-width: none;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  ${screen.lg} {
    gap: 24px;
    overflow-x: auto;
  }
`

const FeaturedRowWrapper = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`

const FeaturedCard = styled.a`
  display: flex;
  flex-direction: column;
  border: 2px solid #eee;
  overflow: hidden;
  text-decoration: none;
  color: var(--color-primary);
  background: #fff;
  padding: 16px 12px;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -moz-box-shadow: none !important;
  transition: border-color 100ms linear;

  &:hover,
  &:focus {
    border-color: var(--color-tertiary);
    box-shadow: none !important;
    -webkit-box-shadow: none !important;
    -moz-box-shadow: none !important;
  }

  flex: 0 0 auto;
  width: 218px;
  min-width: 218px;
  max-width: 218px;
  scroll-snap-align: start;

  ${screen.lg} {
    flex: 0 0 auto;
    width: 288px;
    min-width: 288px;
    max-width: 288px;
    padding: 24px 20px;
  }
`

const FeaturedCardTitle = styled.span`
  flex: 1;
  min-height: 0;
  font-size: 1rem;
  font-family: var(--font-title);
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-primary);
  line-height: 1.3;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const FeaturedCardMeta = styled.span`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-family: var(--font-text);
  font-weight: 400;
  color: var(--color-gray);
  min-width: 0;

  ${screen.lg} {
    font-size: 0.875rem;
    gap: 8px;
  }
`

const FeaturedCardMetaViews = styled.span`
  flex-shrink: 0;
  min-width: 4.75em;

  ${screen.lg} {
    min-width: 6.5em;
  }
`

const FeaturedCardMetaPresentations = styled.span`
  flex-shrink: 0;
`

const FeaturedCardCta = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  background: var(--color-tertiary);
  padding: 4px;
  transition: opacity 100ms linear;
`

const HighlightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 48px;

  ${screen.lg} {
    flex-direction: row;
    align-items: flex-start;
    gap: 40px;
  }
`

const WatchMoreSection = styled.div`
  flex-shrink: 0;

  ${screen.lg} {
    width: 240px;
    padding-top: 0;
  }
`

const WatchMoreHeading = styled.h2`
  font-size: 1.25rem;
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 12px 0;
`

const WatchMoreText = styled.p`
  font-size: 0.9375rem;
  font-family: var(--font-text);
  font-weight: 400;
  color: var(--color-gray);
  line-height: 1.5;
  margin: 0 0 20px 0;
  max-width: 560px;
`

const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`

const YearGroup = styled.div`
  margin-top: 48px;
`

const YearHeaderBase = styled.h3`
  font-size: 1.25rem;
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 12px 0;
`

const YearCountMuted = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-gray);
  margin-left: 8px;
`

const YearHeader = ({ year, count }) => {
  const n = Number(count)
  return (
    <YearHeaderBase>
      {year}
      <YearCountMuted>
        {' '}
        · {n} {n === 1 ? 'record' : 'records'}
      </YearCountMuted>
    </YearHeaderBase>
  )
}

const FilterButton = styled.button`
  font-size: 0.875rem;
  font-family: var(--font-title);
  font-weight: 700;
  color: var(--color-primary);
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 8px 12px 12px;
  cursor: pointer;
  text-transform: uppercase;
  border-bottom: ${p => (p.$active ? '3px solid var(--color-tertiary)' : '1px solid #e0e0e0')};
  transition: border-color 100ms ease;

  &:hover {
    border-bottom-color: ${p => (p.$active ? 'var(--color-tertiary)' : '#bbb')};
  }
`

const WatchMoreButton = styled.a`
  display: inline-block;
  font-size: 0.9375rem;
  font-family: var(--font-title);
  font-weight: 600;
  color: #fff;
  background: var(--color-primary);
  padding: 10px 20px;
  border-radius: 24px;
  text-decoration: none;
  transition: opacity 100ms linear;

  &:hover {
    opacity: 0.9;
  }
`

const parseDate = dateStr => {
  const d = new Date(dateStr)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

const formatDisplayLang = lang => {
  const map = { 'pt-BR': 'PT', 'en-US': 'EN', pt: 'PT', en: 'EN', portuguese: 'PT', english: 'EN' }
  return map[lang] ?? lang
}

const CategoryIcon = ({ type, size = 20 }) => {
  const icons = {
    Talk: IconCategory,
    Podcast: IconHeadphones,
    Youtube: IconVideo,
    Newsletter: IconMail,
    Blog: IconArticle,
    Newspaper: IconNews,
    Magazine: IconPhoto,
  }
  const Icon = icons[type] ?? IconCategory
  return <Icon size={size} />
}

const allItems = [
  ...talks.map(t => ({ kind: 'talk', ...t })),
  ...interviews.map(i => ({ kind: 'interview', mediaType: i.type, ...i })),
].sort((a, b) => parseDate(b.date) - parseDate(a.date))

const formatListItem = (item, index) => {
  if (item.kind === 'talk') {
    return (
      <ListItemLink
        url={item.url}
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        categoryIcon={<CategoryIcon type="Talk" size={20} />}
        categoryLabel="Talk"
        headline={
          <DetailsContainer>
            <IconWrapper>
              <IconPresentationAnalytics size={14} />
              {item.where}
            </IconWrapper>
            <IconWrapper>
              <IconMapPin size={14} />
              {item.city}
            </IconWrapper>
            <IconWrapper>
              <IconWorld size={14} />
              {formatDisplayLang(item.lang)}
            </IconWrapper>
          </DetailsContainer>
        }
        title={item.title}
      />
    )
  }
  return (
    <ListItemLink
      url={item.url}
      key={index}
      target="_blank"
      rel="noopener noreferrer"
      categoryIcon={<CategoryIcon type={item.mediaType} size={20} />}
      categoryLabel={item.mediaType}
      headline={
        <DetailsContainer>
          <IconWrapper>
            <IconWorld size={14} />
            {formatDisplayLang(item.lang)}
          </IconWrapper>
        </DetailsContainer>
      }
      title={item.title}
    />
  )
}

const featuredTalks = talks.filter(talk => talk.featured)

const FeaturedRowWithFade = ({ children }) => (
  <FeaturedRowWrapper>
    <FeaturedRow>{children}</FeaturedRow>
  </FeaturedRowWrapper>
)

const FeaturedTalkCard = ({ talk }) => (
  <FeaturedCard href={talk.url} target="_blank" rel="noopener noreferrer">
    <FeaturedCardTitle>{talk.title}</FeaturedCardTitle>
    <FeaturedCardMeta>
      <FeaturedCardMetaViews>{formatViews(talk.views ?? 0)}</FeaturedCardMetaViews>
      <span> · </span>
      <FeaturedCardMetaPresentations>
        {talk.eventCount} {talk.eventCount === 1 ? 'presentation' : 'presentations'}
      </FeaturedCardMetaPresentations>
      <FeaturedCardCta>
        <IconExternalLink size={14} />
      </FeaturedCardCta>
    </FeaturedCardMeta>
  </FeaturedCard>
)

const FILTER_ALL = 'all'
const FILTER_TALKS = 'talks'
const FILTER_INTERVIEWS = 'interviews'
const FILTER_VIDEOS = 'videos'

const groupItemsByYear = items => {
  const groups = {}
  items.forEach(item => {
    const year = getYear(item.date)
    if (year) {
      if (!groups[year]) groups[year] = []
      groups[year].push(item)
    }
  })
  return Object.entries(groups)
    .sort(([a], [b]) => Number(b) - Number(a))
    .map(([year, yearItems]) => ({ year, items: yearItems }))
}

const getFilteredItems = filter => {
  if (filter === FILTER_ALL) return allItems
  if (filter === FILTER_TALKS) return allItems.filter(i => i.kind === 'talk')
  if (filter === FILTER_INTERVIEWS) return allItems.filter(i => i.kind === 'interview')
  if (filter === FILTER_VIDEOS) return allItems.filter(i => i.kind === 'interview' && i.mediaType === 'Youtube')
  return allItems
}

const TalksPage = () => {
  const [filter, setFilter] = useState(FILTER_ALL)
  const filteredItems = getFilteredItems(filter)

  return (
    <Layout>
      <Seo title="Talks" />
      <Section>
        <PageTitle>Talks</PageTitle>
        <HighlightsWrapper>
          <WatchMoreSection>
            <WatchMoreHeading>Highlights</WatchMoreHeading>
            <WatchMoreText>
              Over a decade of talks, from 2009 to today. Explore all {talks.length} presentations and{' '}
              {interviews.length} interviews below.
            </WatchMoreText>
          </WatchMoreSection>
          <FeaturedRowWithFade>
            {featuredTalks.map((talk, index) => (
              <FeaturedTalkCard key={`featured-${index}`} talk={talk} />
            ))}
          </FeaturedRowWithFade>
        </HighlightsWrapper>
        <FilterRow>
          <FilterButton
            $active={filter === FILTER_ALL}
            onClick={() => setFilter(FILTER_ALL)}
            aria-current={filter === FILTER_ALL ? 'true' : undefined}
          >
            All
          </FilterButton>
          <FilterButton
            $active={filter === FILTER_TALKS}
            onClick={() => setFilter(FILTER_TALKS)}
            aria-current={filter === FILTER_TALKS ? 'true' : undefined}
          >
            Talks
          </FilterButton>
          <FilterButton
            $active={filter === FILTER_INTERVIEWS}
            onClick={() => setFilter(FILTER_INTERVIEWS)}
            aria-current={filter === FILTER_INTERVIEWS ? 'true' : undefined}
          >
            Interviews
          </FilterButton>
          <FilterButton
            $active={filter === FILTER_VIDEOS}
            onClick={() => setFilter(FILTER_VIDEOS)}
            aria-current={filter === FILTER_VIDEOS ? 'true' : undefined}
          >
            Videos
          </FilterButton>
        </FilterRow>
        <div id="all-talks">
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              {groupItemsByYear(filteredItems).map(({ year, items }, groupIndex) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: groupIndex * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <YearGroup>
                    <YearHeader year={year} count={items.length} />
                    {items.map((item, index) => formatListItem(item, `${year}-${index}`))}
                  </YearGroup>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>
    </Layout>
  )
}

export default TalksPage
