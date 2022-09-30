import { useQuery } from '@apollo/client';
import { GET_PHOTO } from '../../graphql/queries';


export function useGetPhoto(id) {
  // console.log('hook useGetPhoto id', id);
  return useQuery(
    GET_PHOTO,
    { variables: { id: id } }
  );
}
