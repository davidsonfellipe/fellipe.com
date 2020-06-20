import React from 'react'

import Layout from 'components/Layout'
import SEO from 'components/SEO'
import Hello from 'components/Hello'
import Opening from 'components/Opening'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hello />
    <Opening />
  </Layout>
)

export default IndexPage
