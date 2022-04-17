import React from 'react'

import * as S from './Logo.styles'

const Logo = () => {
  return (
    <>
      <S.WrapperSVG
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 460 225'
        className='header__svg'
      >
        <path
          d='M47.4 3L-.2 225H61L98.6 46.6s29.9-6.9 28.7 20.4-22.7 29.8-31 30l-9.8 45 33.5 83h65l-40.8-94.3c6.1-2.7 23.3-11.1 34.6-30.8 14.7-25.6 8.3-51.1 6.9-56.3-1.8-5.9-4.9-13.3-10.6-20.4C156.7.6 127.1-.1 121.8-.1H48.2L47.4 3z'
          className='st0'
        ></path>
        <path
          d='M212 0h61l-47.2 225H191l-17.2-38.7M323 135.7l-14 8.5-16 80.8h-61.1L279.8 0h59.8c-6.4 31-12.9 62-19.3 93 23.2-31 46.5-62 69.7-93h70l-83.7 104 41.3 121H350l-27-89.3z'
          className='st0'
        ></path>
      </S.WrapperSVG>
    </>
  )
}

export default Logo
