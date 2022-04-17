import React from 'react'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

import * as S from './Card.style'

type CardInfo = {
  emoj: string
  title: string
  benefits: string[]
  price: string
  isFeature?: boolean
}

const Card = ({ emoj, title, benefits, price, isFeature }: CardInfo) => {
  return (
    <S.Wrapper>
      {isFeature && <S.WrapperFeature>Melhores Benefícios</S.WrapperFeature>}

      {!isFeature ? (
        <S.WrapperIcon>{emoj}</S.WrapperIcon>
      ) : (
        <S.WrapperIconFeature>{emoj}</S.WrapperIconFeature>
      )}

      <S.Title>{title}</S.Title>
      <S.WrapperList>
        {benefits &&
          benefits.map(benefit => (
            <S.WrapperItem key={benefit}>
              <S.WrapperIconItem>
                <CheckCircleOutlineIcon />
              </S.WrapperIconItem>
              {benefit}
            </S.WrapperItem>
          ))}
      </S.WrapperList>
      <S.Price>
        <S.PriceMinnor>R$</S.PriceMinnor> {price}
        <S.PriceMinnor>/mês</S.PriceMinnor>
      </S.Price>
      <S.YouTubeLink
        target={'_blank'}
        href='https://www.youtube.com/rikstudios/sponsor'
      >
        Assinar {title} pelo YouTube
      </S.YouTubeLink>
      <S.Link
        target={'_blank'}
        href='https://www.streamar.com.br/rikstudios/assinar'
      >
        Assinar {title} pelo Streamar
      </S.Link>
    </S.Wrapper>
  )
}

export default Card
