import Head from 'next/head'

const Seo = ({ title, description }) => {
  return (
    <Head>
      <title>{`${title} | Davidson Fellipe`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
    </Head>
  )
}

export default Seo
