import React from 'react'
import { UnsplashDataProps } from '../../features/feed'
import { AlbumCover, AlbumContainer } from './UserAlbum.styled'

interface UserAlbumProps {
  item: UnsplashDataProps
}

const UserAlbum = ({item}: UserAlbumProps) => {
  return (
      <AlbumContainer>
        <AlbumCover src={item.cover_photo?.urls.regular}/>
        <p>{item.title}</p>
      </AlbumContainer>
  )
}

export default UserAlbum