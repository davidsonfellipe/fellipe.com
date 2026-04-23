import Head from 'next/head'
import { useRouter } from 'next/router'

const Seo = ({ title, description = '' }) => {
  const router = useRouter()
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fellipe.com').replace(/\/$/, '')
  const currentPath = (router.asPath || '/').split('?')[0].split('#')[0]
  const normalizedPath = currentPath === '/' ? '' : currentPath.replace(/\/$/, '')
  const canonicalUrl = `${siteUrl}${normalizedPath}`

  return (
    <Head>
      <title>{`${title} | Davidson Fellipe`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/images/profile.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  )
}

export default Seo
