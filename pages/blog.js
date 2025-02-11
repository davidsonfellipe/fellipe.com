import fs from 'fs'
import styled from 'styled-components'
import matter from 'gray-matter'
import path from 'path'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../lib/mdx-utils'
import Section from '../components/section'
import PageTitle from '../components/page-title'
import ListItemLink from '../components/list-item-link'
import Seo from '../components/seo'
import { formatDateToMonthDayYear } from '../lib/format-date-to-month-day-year'

const PostsWrapper = styled.div`
  margin-bottom: 15px;
`

export default function Index({ posts }) {
  const PostsInEnglish = filterPostsByLang(posts, 'en')
  const PostsInPortuguese = filterPostsByLang(posts, 'pt')

  return (
    <Layout>
      <Seo title="Blog" />
      <Section>
        <PageTitle>Blog</PageTitle>
        <PostsWrapper>{PostsInEnglish}</PostsWrapper>
        <PostsWrapper>{PostsInPortuguese}</PostsWrapper>
      </Section>
    </Layout>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data } = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  return { props: { posts } }
}

const filterPostsByLang = (allPostsData, lang) => {
  return allPostsData
    .filter(({ data }) => {
      return !!data.date && data.lang === lang
    })
    .sort((postA, postB) => new Date(postB.data.date) - new Date(postA.data.date))
    .map(({ data }) => (
      <ListItemLink
        key={data.path}
        url={data.path}
        headline={formatDateToMonthDayYear(data.date)}
        headlineSecondary={''}
        title={data.title}
      />
    ))
}
