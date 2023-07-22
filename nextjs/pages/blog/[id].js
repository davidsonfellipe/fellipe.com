import Head from 'next/head';

import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Post({ postData }) {
    return (
      <Layout>
        {/* Add this <Head> tag */}
        <Head>
          <title>{postData.title}</title>
        </Head>
        
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Layout>
    );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
      props: {
        postData,
      },
    };
}