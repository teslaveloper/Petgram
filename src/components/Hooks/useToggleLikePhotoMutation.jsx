import React from 'react';
import { useMutation } from '@apollo/client';
import { LIKE_PHOTO_MUTATION } from '../../graphql/queries';

export const useToggleLikePhotoMutation = (id) => {
  // Pass mutation to useMutation
  return useMutation(
    LIKE_PHOTO_MUTATION,
    { variables: { input: id } }
  );
  // const [mutateFunction, { data, loading, error }] =
}