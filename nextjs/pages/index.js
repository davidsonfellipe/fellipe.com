import Layout from '../components/layout'

import Seo from '../components/seo'
import Hello from '../components/hello'
import Opening from '../components/opening'

export default function Home() {
  return (
    <Layout home>
      <Seo title="Home" />
      <Hello />
      <Opening />
    </Layout>
  )
}
