import ResetStyles from '../styles/resetStyles'

export default function App({ Component, pageProps }) {
  return <>
  <ResetStyles />
  <Component {...pageProps} />
  </>
}
