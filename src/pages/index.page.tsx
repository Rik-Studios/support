import React from 'react'

import Head from 'next/head'

import AditionalInformation from '~/layout/AditionalInformation/AditionalInformation'
import Categories from '~/layout/Categories/Categories'
import Feature from '~/layout/Feature/Feature'
import Footer from '~/layout/Footer/Footer'
import Header from '~/layout/Header/Header'

import * as S from './Home.styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <Head>
        <title>🥦 Rik | Apoio</title>
        <meta property='og:url' content='https://apoio.rik.net.br/' />
        <meta property='og:type' content='tpage' />
        <meta property='og:title' content='Rik - Formas de Apoio' />
        <meta
          property='og:image'
          content='https://apoio.rik.net.br/assets/images/video/thumbnail-desktop.jpg'
        />
        <meta
          property='og:description'
          content='Saiba quais são as formas e as categorias de apoio'
        />
        <meta property='og:site_name' content='Rik' />
        <meta
          property='article:author'
          content='https://www.facebook.com/RikStudios'
        />
        <meta
          property='article:publisher'
          content='https://www.facebook.com/RikStudios'
        />
        <meta
          property='article:published_time'
          content='momento de publicação'
        />
        <meta property='article:tag' content='tag1' />
        <meta property='article:tag' content='tag2' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@RikEditor' />
        <meta name='twitter:title' content='Rik - Formas de Apoio' />
        <meta
          name='twitter:description'
          content='Saiba quais são as formas e as categorias de apoio'
        />
        <meta
          property='twitter:image:src'
          content='https://apoio.rik.net.br/assets/images/video/thumbnail-desktop.jpg'
        />
      </Head>
      <Header />
      <Feature />
      <Categories />
      <AditionalInformation />
      <Footer />
    </S.Wrapper>
  )
}

export default Home
