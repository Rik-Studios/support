import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Slider from 'react-slick'

import Card from '~/components/Card/Card'

import { CategoriesList } from './Categories.static'
import * as S from './Categories.styles'

const Categories = () => {
  const theme = useTheme()
  const displayMenu = useMediaQuery(theme.breakpoints.down('md'))

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  const cardItems = CategoriesList.map(
    ({ title, emoj, price, benefits, isFeature }) => (
      <Grid item xs={12} md={4} key={title}>
        <Card {...{ title, emoj, price, benefits, isFeature }} />
      </Grid>
    )
  )

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
          </Grid>
        </Box>
      </Container>
      <S.WrapperSlide>
        {displayMenu ? (
          <Slider {...settings}>{cardItems}</Slider>
        ) : (
          <Grid
            container
            spacing={2}
            justifyContent='center'
            alignItems='center'
          >
            {cardItems}
          </Grid>
        )}
      </S.WrapperSlide>
    </>
  )
}

export default Categories
