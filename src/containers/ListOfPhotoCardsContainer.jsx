import { memo} from 'react';
import { withPhotos } from 'components/Hoc/withPhotos'
import { ListOfPhotoCardsComponent } from 'components/ListOfPhotoCards'

const ListOfPhotoCardsMemorized = withPhotos(ListOfPhotoCardsComponent)

const comparingProps = (prevProps, props) => {
  return prevProps.categoryId === props.categoryId;

}
export const ListOfPhotoCardsContainer = memo(ListOfPhotoCardsMemorized, comparingProps)

