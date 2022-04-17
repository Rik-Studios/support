import React from 'react'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import Video from '~/components/Video/Video'

const Feature = () => {
  return (
    <Container>
      <Box>
        <Grid container>
          <Grid item xs={12}>
            <Video
              id='tB9zK8Va1_g'
              title='Tutorial para apoiar o Rik em 2022'
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default Feature
