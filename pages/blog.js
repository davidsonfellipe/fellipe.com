import fs from 'fs'
import styled from 'styled-components'
import matter from 'gray-matter'
import path from 'path'
import Layout from '../components/layout'
import { postFilePaths, POSTS_PATH } from '../lib/mdx-utils'

import Section from '../components/section'
import Title from '../components/title'
import ListItemLink from '../components/list-item-link'
import Seo from '../components/seo'

const PostsWrapper = styled.div`
  margin-bottom: 15px;
`

const SubTitle = styled(Title)`
  font-size: 2rem;
`

export default function Index({ posts }) {
  const PostsInEnglish = filterPostsByLang(posts, 'en')
  const PostsInPortuguese = filterPostsByLang(posts, 'pt')

  return (
    <Layout>
      <Seo title="Blog" />
      <Section>
        <Title>Blog</Title>
        <SubTitle as="h2">in english</SubTitle>
        <PostsWrapper>{PostsInEnglish}</PostsWrapper>
        <SubTitle as="h2">in portuguese</SubTitle>
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
      <ListItemLink key={data.path} url={data.path} headline={data.date} headlineSecondary={''} title={data.title} />
    ))
}
