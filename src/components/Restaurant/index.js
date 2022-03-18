import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillStar} from 'react-icons/ai'
import RestaurantDetails from '../RestaurantDetails'
import Header from '../Header'
import {
  ProductBgContainer,
  ProductContainer,
  RestaurantDetailBg,
  ProductMainBgContainer,
  RestaurantDetailsViewBg,
  RestaurantDetailsViewSubBg,
  RestaurantDetailsViewImage,
  RestaurantName,
  RestaurantCuisine,
  StarContainer,
  ProductRating,
  StarMainContainer,
  PipeLine,
  ProductSubBgContainer,
  LoaderContainer,
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
  RestaurantLocation,
  RestaurantLocationSm,
} from './StyledComponents'
import Footer from '../Footer'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Restaurant extends Component {
  state = {
    productDetailData: [],
    similarProductsData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getProductData()
  }

  getProductData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      const updatedDetailData = {
        name: data.name,
        rating: data.rating,
        imageUrl: data.image_url,
        cuisine: data.cuisine,
        location: data.location,
        reviewsCount: data.reviews_count,
        costForTwo: data.cost_for_two,
      }

      const updatedSimilarData = data.food_items.map(eachProduct => ({
        cost: eachProduct.cost,
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        name: eachProduct.name,
        count: 0,
      }))

      this.setState({
        productDetailData: updatedDetailData,
        similarProductsData: updatedSimilarData,
        apiStatus: apiStatusConstants.success,
      })
    } else if (response.status === 400) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onClickIncrementButton = () => {}

  onClickDecrementButton = () => {}

  renderLoader = () => (
    <LoaderContainer>
      <Loader type="dots" color="#f7931e" height="50" width="50" />
    </LoaderContainer>
  )

  renderNotFound = () => (
    <NotFoundBgContainer>
      <NotFoundImage
        src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1634880629/Tasty%20Kitchen%20Images/notFound_oulxmc.png"
        alt="not-found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found
      </NotFoundDescription>
      <NotFoundDescription>Please go back to the homepage</NotFoundDescription>
      <Link to="/">
        <NotFoundButton>Go to home page</NotFoundButton>
      </Link>
    </NotFoundBgContainer>
  )

  renderDetailView = () => {
    const {productDetailData, similarProductsData} = this.state

    const {
      rating,
      imageUrl,
      name,
      cuisine,
      location,
      reviewsCount,
      costForTwo,
    } = productDetailData

    const locationLength = location.length === 15
    //  localStorage.setItem('cartData', JSON.stringify(similarProductsData))

    return (
      <ProductSubBgContainer>
        <RestaurantDetailBg>
          <RestaurantDetailsViewBg>
            <RestaurantDetailsViewImage src={imageUrl} alt="Food" />
            <RestaurantDetailsViewSubBg>
              <RestaurantName>{name}</RestaurantName>
              <RestaurantCuisine>{cuisine}</RestaurantCuisine>
              <RestaurantLocation>{location}</RestaurantLocation>
              {locationLength ? (
                <RestaurantLocationSm>{location}</RestaurantLocationSm>
              ) : (
                <RestaurantLocationSm title={location}>
                  {location.slice(0, 15)}
                </RestaurantLocationSm>
              )}
              <StarContainer>
                <StarMainContainer>
                  <StarContainer>
                    <AiFillStar size="20" color="white" />
                    <ProductRating>{rating}</ProductRating>
                  </StarContainer>
                  <ProductRating>{reviewsCount}+Ratings</ProductRating>
                </StarMainContainer>
                <PipeLine />
                <StarMainContainer>
                  <ProductRating>{costForTwo}</ProductRating>
                  <ProductRating>Cost of two</ProductRating>
                </StarMainContainer>
              </StarContainer>
            </RestaurantDetailsViewSubBg>
          </RestaurantDetailsViewBg>
        </RestaurantDetailBg>
        <ProductContainer>
          {similarProductsData.map(product => (
            <RestaurantDetails
              eachRestaurantDetails={product}
              key={product.id}
            />
          ))}
        </ProductContainer>
        <Footer />
      </ProductSubBgContainer>
    )
  }

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDetailView()
      case apiStatusConstants.failure:
        return this.renderNotFound()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ProductMainBgContainer>
        <ProductBgContainer>
          <Header />
          {this.renderAllProducts()}
        </ProductBgContainer>
      </ProductMainBgContainer>
    )
  }
}

export default Restaurant
