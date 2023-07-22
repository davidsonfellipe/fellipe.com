import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

import Hello from '../components/Hello'
import Opening from '../components/Opening'

import StyledComponentsRegistry from '../lib/registry'


export default function Home() {
  return (
    <Layout home>
      <Hello />
      <Opening />
      {/* <Head>
        <title>{siteTitle}</title>
      </Head> */}
      {/* <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
      </section> */}
    </Layout>
  )
}
