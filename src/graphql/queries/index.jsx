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

export const GET_FAVORITES = gql`
  query getFav {
    favs {
      id
      categoryId
      src
      liked
      likes
      userId
    }
  }
`

// MUTATIONS
export const LIKE_PHOTO_MUTATION = gql`
  mutation likePhoto($input: LikePhoto!){
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const SIGN_UP = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`

export const SIGN_IN = gql`
  mutation signin($input: UserCredentials!) {
    login(input: $input)
  }
`
