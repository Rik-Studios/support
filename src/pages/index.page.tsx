import React from 'react'

import AditionalInformation from '~/layout/AditionalInformation/AditionalInformation'
import Categories from '~/layout/Categories/Categories'
import Feature from '~/layout/Feature/Feature'
import Header from '~/layout/Header/Header'

import * as S from './Home.styles'

export const Home = () => {
  return (
    <S.Wrapper>
      <Header />
      <Feature />
      <Categories />
      <AditionalInformation />
    </S.Wrapper>
  )
}

export default Home
