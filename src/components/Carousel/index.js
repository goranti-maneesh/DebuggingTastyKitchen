import {Component} from 'react'
import Slider from 'react-slick'
import Cookies from 'js-cookie'
import CarouselDetails from '../CarouselDetails'

class Carousel extends Component {
  state = {carouselList: []}

  componentDidMount() {
    this.getCarousel()
  }

  getCarousel = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/restaurants-list/offers'

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    const data = await response.json()

    const updatedData = await data.offers.map(eachCarousel => ({
      id: eachCarousel.id,
      imageUrl: eachCarousel.image_url,
    }))
    this.setState({carouselList: updatedData})
  }

  render() {
    const {carouselList} = this.state
    const settings = {
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 4000,
      arrows: false,
    }
    return (
      <Slider {...settings}>
        {carouselList.map(eachone => (
          <CarouselDetails eachCarouselDetails={eachone} key={eachone.id} />
        ))}
      </Slider>
    )
  }
}

export default Carousel
