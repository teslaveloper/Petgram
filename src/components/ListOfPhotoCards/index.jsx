import React from 'react';
import { PhotoCard } from 'components/ListOfPhotoCards/PhotoCard';

export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return photos.map(photo => (
    <PhotoCard key={photo.id} {...photo} />
  ));
}
