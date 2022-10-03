import React from 'react';
import { Grid, Image, Link } from './styles';
import PropTypes from 'prop-types';

export const ListOfFavorites = ({favs = []}) => {
  return <Grid>
    {
      favs.map(fav =>
        <Link key={fav.id}  to={`/photo/${fav.id}`}>
          <Image  src={fav.src} />
        </Link>
      )
    }
  </Grid>
}

ListOfFavorites.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      src: PropTypes.string
    })
  )
}