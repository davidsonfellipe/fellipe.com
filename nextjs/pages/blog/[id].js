import Seo from '../../components/seo'
import Title from '../../components/title'
import PostDate from '../../components/post-date'
import PostContent from '../../components/post-content'
import PostFooter from '../../components/post-footer'
import Date from '../../components/date'
import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'
import calculateReadingTime from '../../lib/calculate-reading-time'

export default function Post({ postData }) {
  return (
    <Layout>
      <Seo title={postData.title} />

      <Title>{postData.title}</Title>

      {/* Display date and time to read */}
      <PostDate>
        <Date dateString={postData.date} />- {calculateReadingTime(postData.contentHtml)}
      </PostDate>

      <PostContent>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </PostContent>
      <PostFooter />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData,
    },
  }
}
