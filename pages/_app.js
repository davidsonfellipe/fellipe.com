import Script from 'next/script'
import { ThemeProvider } from 'styled-components'
import { Analytics } from '@vercel/analytics/react'

const theme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-EV10PWT7QL" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-EV10PWT7QL');
        `}
      </Script>
    </>
  )
}
