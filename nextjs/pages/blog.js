import Link from 'next/link'
import styled from 'styled-components'

import Seo from '../components/seo'
import Section from '../components/section'
import Title from '../components/title'
import ListItemLink from '../components/list-item-link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

const PostsWrapper = styled.div`
  margin-bottom: 15px;
`
const SubTitle = styled(Title)`
  font-size: 2rem;
`

const filterPostsByLang = (allPostsData, lang) => {
  return allPostsData
    .filter(allPostsData => !!allPostsData.date && allPostsData.lang === lang)
    .map(postData => (
      <ListItemLink
        url={`/blog/${postData.id}`}
        headline={postData.date}
        headlineSecondary={''}
        title={postData.title}
      />
    ))
}

export default function Blog({ allPostsData }) {
  const PostsInEnglish = filterPostsByLang(allPostsData, 'en')
  const PostsInPortuguese = filterPostsByLang(allPostsData, 'pt')

  return (
    <Layout>
      <Seo title="Blog" />
      <Section>
        <Title>Blog</Title>
        <SubTitle>articles in english</SubTitle>
        <PostsWrapper>{PostsInEnglish}</PostsWrapper>
        <SubTitle>articles in portuguese</SubTitle>
        <PostsWrapper>{PostsInPortuguese}</PostsWrapper>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
