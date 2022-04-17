import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Logo from './components/Logo/Logo'
import Social from './components/Social/Social'
import * as S from './Header.styles'

const Header = () => {
  return (
    <S.Wrapper>
      <Container>
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={4}>
              <Logo />
            </Grid>
            <Grid item xs={12}>
              <Social />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </S.Wrapper>
  )
}

export default Header
