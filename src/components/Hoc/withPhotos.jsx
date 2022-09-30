import { graphql } from '@apollo/client/react/hoc';
import { GET_PHOTOS } from '../../graphql/queries';

export const withPhotos = graphql(GET_PHOTOS);
