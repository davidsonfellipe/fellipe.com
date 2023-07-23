import { ThemeProvider, DefaultTheme } from 'styled-components'
import ResetStyles from '../styles/resetStyles'

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
        <ResetStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
