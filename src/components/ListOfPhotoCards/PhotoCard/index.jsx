import React from 'react';
import {
  Article, ImgWrapper, Img
} from 'components/ListOfPhotoCards/PhotoCard/styles';
import { useStorage } from 'components/Hooks/useStorage';
import { useNearScreen } from 'components/Hooks/useNearScreen';
import { useToggleLikePhotoMutation } from 'components/Hooks/useToggleLikePhotoMutation';
import { LikeButton } from 'components/ListOfPhotoCards/PhotoCard/LikeButton';
import { Link } from 'react-router-dom';

const DEFAULT_SRC = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_SRC
}) => {
  const keyStorage = `like-${id}`;
  const [ liked, setLiked ] = useStorage(keyStorage, false);
  const { show, refElement } = useNearScreen();
  const [ likePhoto, { data, loading, error }] = useToggleLikePhotoMutation();

  const handleLikeButtonClick = () => {
    !liked && likePhoto({ variables: { input: {id: id} } });
    setLiked(!liked);
  };

  return (
    <Article ref={refElement}>
      {show &&
        <>
          <Link to={`/photo/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <LikeButton
            liked={liked}
            likes={likes}
            onClick={handleLikeButtonClick}
          >{loading && '...'}
          </LikeButton>
        </>}
    </Article>
  );
}
