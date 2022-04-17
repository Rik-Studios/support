import React from 'react'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

import * as S from './Video.styles'

type VideoProps = {
  id: string
  title: string
}

const Video = ({ id, title }: VideoProps) => {
  const [isOpen, setOpen] = React.useState(false)

  const openVideo = () => {
    setOpen(true)
  }

  return (
    <S.Wrapper>
      {isOpen ? (
        <S.WrapperVideo>
          <S.Video
            width='560'
            height='315'
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&amp;controls=0&amp;showinfo=0`}
            title={title}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></S.Video>
        </S.WrapperVideo>
      ) : (
        <S.WrapperThumbnail>
          <S.WrapperPlay onClick={openVideo}>
            <PlayCircleOutlineIcon />
          </S.WrapperPlay>
          <source
            srcSet='./assets/images/video/thumbnail-desktop.jpg'
            media='(min-width: 769px)'
          />
          <source
            srcSet='./assets/images/video/thumbnail-mobile.png'
            media='(max-width: 768px)'
          />
          <S.WrapperImage src='./assets/images/video/thumbnail-desktop.jpg' />
        </S.WrapperThumbnail>
      )}
    </S.Wrapper>
  )
}

export default Video
