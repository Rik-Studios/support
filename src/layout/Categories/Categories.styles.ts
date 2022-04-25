import Container from '@mui/material/Container'
import styled from 'styled-components'

export const Title = styled.h2`
  font-size: 25px;
  line-height: calc(25px * 1.5);
  font-weight: 700;
  color: var(--white);
  letter-spacing: 1px;
  text-align: center;
  background-image: linear-gradient(to bottom, var(--white), var(--white));
  background-size: 5% 1px;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding-bottom: 10px;
  margin-bottom: 15px;
  text-transform: uppercase;
`

export const WrapperSlide = styled(Container)`
  .slick-slide {
    min-height: 593px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    & > div {
      width: 100%;
    }
  }
  .slick-dots {
    button {
      background-color: var(--white);
      border: 2px solid var(--purpleLigther);
      font-size: 0;
      border-radius: 100%;
      &:before {
        content: none;
      }
    }
    .slick-active {
      button {
        background-color: var(--purpleLigther);
        border-color: var(--white);
      }
    }
  }
`
