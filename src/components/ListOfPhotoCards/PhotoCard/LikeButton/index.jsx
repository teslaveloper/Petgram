import React from 'react';
import PropTypes from 'prop-types';
import {
  MdFavoriteBorder, MdFavorite
} from 'react-icons/md'
import { Button } from './styles'

export const LikeButton = ({
	liked,
	likes,
	onClick
}) => {
	const LikeIcon = liked === true ? <MdFavorite size='32px' /> : <MdFavoriteBorder size='32px' />

	return (
		<Button onClick={onClick}>
	    {LikeIcon}
	    {likes} likes!
	  </Button>
	)
}

LikeButton.propTypes = {
  liked: PropTypes.bool.isRequired,
	likes: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}