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
