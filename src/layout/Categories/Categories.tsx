import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Card from '~/components/Card/Card'

import { CategoriesList } from './Categories.static'
import * as S from './Categories.styles'

const Categories = () => {
  return (
    <>
      <Container>
        <Box>
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            <Grid item xs={12}>
              <S.Title> Categorias</S.Title>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                spacing={2}
                justifyContent='space-evenly'
                alignItems='center'
              >
                {CategoriesList.map(
                  ({ title, emoj, price, benefits, isFeature }) => (
                    <Grid item xs={12} md={4} key={title}>
                      <Card {...{ title, emoj, price, benefits, isFeature }} />
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Categories
