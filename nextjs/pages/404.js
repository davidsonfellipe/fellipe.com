import Seo from '../components/seo'
import Layout from '../components/layout'

export default function Custom404() {
    return (
      <Layout>
        <Seo title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    );
}