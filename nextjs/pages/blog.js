import Link from 'next/link'

import Seo from '../components/seo'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Seo title="Blog" />
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
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
