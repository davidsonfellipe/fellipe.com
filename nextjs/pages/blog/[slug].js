import fs from 'fs'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'

import Seo from '../../components/seo'

import path from 'path'
import { postFilePaths, POSTS_PATH } from '../../lib/mdx-utils'

import Layout from '../../components/layout'
import Title from '../../components/title'
import PostDate from '../../components/post-date'
import PostContent from '../../components/post-content'
import PostFooter from '../../components/post-footer'
import Date from '../../components/date'

export default function PostPage({ source, frontMatter }) {
  return (
    <Layout>
      <Seo title={frontMatter.title} />
      <Title>{frontMatter.title}</Title>

      <PostDate>
        <Date dateString={frontMatter.date} />
      </PostDate>

      <PostContent>
        <MDXRemote {...source} />
      </PostContent>

      <PostFooter />
    </Layout>
  )
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.md`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
