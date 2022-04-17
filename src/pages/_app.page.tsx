import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'

import GlobalStyle from '~/styles/GlobalStyle'
import Theme from '~/styles/Theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
