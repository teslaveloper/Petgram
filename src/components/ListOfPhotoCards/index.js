import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useGetPhotos } from '../Hooks/useGetPhotos'

export const ListOfPhotoCards = () => {
  const { photos, loading } = useGetPhotos()

  if (loading) return 'loading'

  return (
    <ul>
      {
        photos.map(photo =>
          <PhotoCard key={photo.id} {...photo} />
        )
      }
    </ul>
  )
}
