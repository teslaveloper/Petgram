import { useQuery } from '@apollo/client';
import { GET_FAVORITES } from '../../graphql/queries';

export function useGetFavorites() {
  return useQuery(
    GET_FAVORITES,
    {
      fetchPolicy: "cache-and-network",
    }
  );
}
