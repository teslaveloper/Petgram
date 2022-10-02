import React from 'react'
import { Favorites } from 'containers/Favorites'
import { Layout } from 'components/Layout';

const Favs = () => {
	return (
    <Layout
      title="Your Favorite Pets"
      subtitle='Here you will find your favourite pets'>
      <Favorites />
    </Layout>
  )
}

export default Favs