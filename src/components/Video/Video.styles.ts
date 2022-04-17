import styled from 'styled-components'

import media from '~/styles/styledMedia'

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const WrapperVideo = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1;

  &:after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
`

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0 35px;
  border: 10px solid #3c2861;
  border-radius: var(--borderRadius);
`

export const WrapperThumbnail = styled.picture`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--borderRadius);
  overflow: hidden;
`

export const WrapperImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const WrapperPlay = styled.button`
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 0;

  & > svg {
    font-size: 38px;
    fill: var(--white);

    ${media.greaterThan('desktop')`
      font-size: 78px;
    `}
  }
`
