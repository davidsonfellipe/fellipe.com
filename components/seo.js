import Head from 'next/head'
import { useRouter } from 'next/router'

const Seo = ({ title, description = '' }) => {
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  const currentPath = (router.asPath || '/').split('?')[0].split('#')[0]
  const normalizedPath =
    currentPath === '/' || currentPath === ''
      ? ''
      : currentPath.endsWith('/')
        ? currentPath
        : `${currentPath}/`
  const canonicalUrl = `${siteUrl}${normalizedPath}`
  const ogImageUrl = `${siteUrl}/images/profile.jpg`
  const ogTitle = `${title} | Davidson Fellipe`

  return (
    <Head>
      <title>{ogTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={ogTitle} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:image" content={ogImageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Head>
  )
}

export default Seo
