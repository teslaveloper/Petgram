import React from 'react';
import { ListOfFavorites } from 'components/ListOfFavorites';
import { useGetFavorites } from 'components/Hooks/useGetFavorites'

export const Favorites = () => {
  const { loading, data, error } = useGetFavorites()

  if (loading) return <p>Loading Favorites...</p>;
  if (error) return <p>Error</p>;
  if (!data?.favs) return null;

  const { favs } = data;

  return (
    <ListOfFavorites favs={favs} />
  );
}
