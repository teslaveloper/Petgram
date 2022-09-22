import { gql } from '@apollo/client'

export const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const GET_PHOTO = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const GET_CATEGORIES= gql`
  query getCategories {
    categories {
      id
      name
      emoji
      cover
      path
    }
  }
`


// MUTATIONS

export const LIKE_PHOTO_MUTATION = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!){
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`;
