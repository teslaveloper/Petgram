import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../queries';


export function useGetCategories() {
  return useQuery(GET_CATEGORIES);
}
