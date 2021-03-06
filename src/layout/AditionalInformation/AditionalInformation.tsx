import React from 'react'

import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import * as S from './AditionalInformation.styles'

const AditionalInformation = () => {
  return (
    <Container>
      <Box>
        <Grid container spacing={2} justifyContent='center' alignItems='center'>
          <Grid item xs={12}>
            <S.Title>Informações Complementares</S.Title>
          </Grid>
          <Grid item xs={12}>
            <S.WrapperList>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Videos Antecipados:
                </S.Strong>{' '}
                Acesso aos videos antecipados dos canais Rik e Vamos Falar De...
              </S.WrapperItem>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Reacts Exclusívos Nível 1:
                </S.Strong>{' '}
                Caso tenham dois reacts no mês, receberá apenas um, e tambem
                terá o acesso aos reacts antigos.
              </S.WrapperItem>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Reacts Exclusívos Nível 2:
                </S.Strong>{' '}
                Acesso a todos os reacts já lançados.
              </S.WrapperItem>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Sessões de idéias para Reacts:
                </S.Strong>{' '}
                Ocorre a cada 15 dias, atrásves do
                <S.Link target={'_blank'} href='http://riscord.rikstudios.live'>
                  Riscord
                </S.Link>
                .
              </S.WrapperItem>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Brocoday:
                </S.Strong>{' '}
                Evento com apoiadores que ocorre a cada 2 meses, para saber se
                será gravado ou ao vivo, ficar atendo no{' '}
                <S.Link target={'_blank'} href='http://riscord.rikstudios.live'>
                  Riscord
                </S.Link>
                .
              </S.WrapperItem>
              <S.WrapperItem>
                <S.Strong>
                  <S.WrapperIconItem>
                    <ErrorOutlineIcon />
                  </S.WrapperIconItem>
                  Vamos Falar De.. Ao Vivo:
                </S.Strong>{' '}
                Acontece no
                <S.Link target={'_blank'} href='http://riscord.rikstudios.live'>
                  Riscord
                </S.Link>
                , agendado préviamente.
              </S.WrapperItem>
            </S.WrapperList>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default AditionalInformation
