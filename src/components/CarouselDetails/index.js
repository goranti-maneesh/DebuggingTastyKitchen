import {CarouselImage, BgImageContainer} from './StyledComponents'

const CarouselDetails = props => {
  const {eachCarouselDetails} = props
  const {imageUrl} = eachCarouselDetails

  return (
    <BgImageContainer>
      <CarouselImage src={imageUrl} alt="Image" />
    </BgImageContainer>
  )
}

export default CarouselDetails
