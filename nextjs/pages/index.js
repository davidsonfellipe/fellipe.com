import Head from 'next/head'
import Layout from '../components/layout'

import Hello from '../components/hello'
import Opening from '../components/opening'

export default function Home() {
  return (
    <Layout home>
      <Hello />
      <Opening />
    </Layout>
  )
}
