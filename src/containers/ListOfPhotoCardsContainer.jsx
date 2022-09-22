import { withPhotos } from 'components/Hoc/withPhotos'
import { ListOfPhotoCardsComponent } from 'components/ListOfPhotoCards'

export const ListOfPhotoCardsContainer = withPhotos(ListOfPhotoCardsComponent)
