import React from 'react';
import { PhotoCard } from 'components/ListOfPhotoCards/PhotoCard';
import { useParams } from 'react-router-dom'
import { useGetPhoto } from 'components/Hooks/useGetPhoto'

export const PhotoCardContainer = () => {
  const params = useParams();
  const { id } = params;
	const { loading, data, error } = useGetPhoto(id)

  if (loading) return <p>Loading PCC...</p>;
  if (error) return <p>Error</p>;
  if (!data?.photo) return null;

  const { photo } = data;

  return (
    <PhotoCard {...photo} />
  )
}
