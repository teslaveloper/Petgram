import { graphql } from '@apollo/client/react/hoc';
import { GET_PHOTOS } from '../../queries';

export const withPhotos = graphql(GET_PHOTOS);
