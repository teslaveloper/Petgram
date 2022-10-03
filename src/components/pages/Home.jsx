import React, { memo } from 'react'
import { ListOfCategories } from 'components/ListOfCategories'
import { ListOfPhotoCardsContainer } from 'containers/ListOfPhotoCardsContainer'
import { useParams } from 'react-router-dom'
import { Layout } from 'components/Layout';

const Home = () => {
	const params = useParams();
	const { id } = params;

	return (
		<Layout
      title="Home"
      subtitle=''
    >
		  <ListOfCategories />
		  <ListOfPhotoCardsContainer categoryId={id} />
		</Layout>)
}

export default Home