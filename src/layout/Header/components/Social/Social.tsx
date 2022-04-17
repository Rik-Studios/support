import React from 'react'

import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'

import * as S from './Social.styles'

const Social = () => {
  return (
    <S.Wrapper>
      <S.Link
        href='http://facebook.com/RikStudios'
        title='Acesse a minha página no Facebook'
        target={'_blank'}
      >
        <FacebookIcon />
      </S.Link>
      <S.Link
        href='http://instagram.com/RikEditor'
        title='Acesso os Instagram e veja as fotos'
        target={'_blank'}
      >
        <InstagramIcon />
      </S.Link>
      <S.Link
        href='http://twitter.com/RikEditor'
        title='Siga o meu perfil no Twitter.'
        target={'_blank'}
      >
        <TwitterIcon />
      </S.Link>
      <S.Link
        href='http://youtube.com/livesdorik'
        title='Está afim de ver algunas lives ? Acesso o canal Lives do Rik'
        target={'_blank'}
      >
        <YouTubeIcon />
      </S.Link>
    </S.Wrapper>
  )
}

export default Social
