import React, {
  useEffect, useRef, useState
} from 'react'
import {
  Article, ImgWrapper, Img, Button
} from './styles'
import {
  MdFavoriteBorder, MdFavorite
} from 'react-icons/md'

import { useStorage } from '../Hooks/useStorage'

const DEFAULT_SRC = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({
  id, likes = 0, src = DEFAULT_SRC
}) => {
  const keyStorage = `like-${id}`
  const { setStorage, getStorage } = useStorage(keyStorage)
  const [show, setShow] = useState(false)
  const [liked, setLiked] = useState(getStorage())
  const refArticle = useRef(null)

  useEffect(function () {
    // cargar si esta disponible el pollifyl
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // observar el elemento referrenciado para hacer un lazy load
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        } else {
          setShow(false)
        }
      })

      observer.observe(refArticle.current)
    })
  }, [refArticle])

  const LikeIcon = liked === true ? <MdFavorite size='32px' /> : <MdFavoriteBorder size='32px' />

  return (
    <Article ref={refArticle}>
      {show &&
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>

          <Button onClick={() => setLiked(setStorage(!liked))}>
            {LikeIcon}
            {likes} likes!
          </Button>
        </>}
    </Article>
  )
}
