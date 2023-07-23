import ResetStyles from '../styles/resetStyles'

import StyledComponentsRegistry from '../lib/registry';

export default function App({ Component, pageProps }) {
  return (
  <StyledComponentsRegistry>
    <ResetStyles />
    <Component {...pageProps} />
  </StyledComponentsRegistry>
  )
}

