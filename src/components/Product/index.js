import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {GrPrevious, GrNext} from 'react-icons/gr'
import ProductDetails from '../ProductDetails'
import {
  ProductBgContainer,
  ProductContainer,
  PagesContainer,
  PrevButton,
  NextButton,
  PagesNumbers,
  ProductsContainer,
  LoaderContainer,
} from './StyledComponents'
import ProductHeader from '../ProductHeader'
import ToggleChanges from '../../Context/ToggleChanges'

class Product extends Component {
  state = {
    ProductsList: [],
    activeRating: '',
    offset: 1,
    inProgress: false,
  }

  componentDidMount() {
    this.getProductList()
  }

  getProductList = async () => {
    this.setState({inProgress: true})
    const {activeRating, offset} = this.state

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=9&sort_by_rating=${activeRating}`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()

    const updatedData = data.restaurants.map(eachProduct => ({
      id: eachProduct.id,
      name: eachProduct.name,
      imageUrl: eachProduct.image_url,
      menuType: eachProduct.menu_type,
      rating: eachProduct.user_rating.rating,
    }))
    this.setState({ProductsList: updatedData, inProgress: false})
  }

  onDecreaseLimit = () => {
    const {offset} = this.state
    if (offset !== 1) {
      this.setState(
        prevState => ({
          offset: prevState.offset - 8,
        }),
        this.getProductList,
      )
    }
  }

  onIncreaseLimit = () => {
    const {offset} = this.state
    if (offset <= 24) {
      this.setState(
        prevState => ({
          offset: prevState.offset + 8,
        }),
        this.getProductList,
      )
    }
  }

  changeActiveRating = activeRating => {
    this.setState({activeRating}, this.getProductList)
  }

  renderLoader = () => (
    <LoaderContainer>
      <div className="products-loader-container">
        <Loader type="ThreeDots" color="red" height="50" width="50" />
      </div>
    </LoaderContainer>
  )

  render() {
    const {ProductsList, activeRating, offset, inProgress} = this.state
    return (
      <ToggleChanges.Provider
        value={{activeRating, changeActiveRating: this.changeActiveRating}}
      >
        <ProductBgContainer>
          {inProgress ? (
            this.renderLoader()
          ) : (
            <ProductsContainer>
              <ProductHeader />
              <ProductContainer>
                {ProductsList.map(eachone => (
                  <ProductDetails
                    eachProductDetails={eachone}
                    key={eachone.id}
                  />
                ))}
              </ProductContainer>
              <PagesContainer>
                <PrevButton type="button" onClick={this.onDecreaseLimit}>
                  <GrPrevious size="20" />
                </PrevButton>
                <PagesNumbers>{offset}</PagesNumbers>
                <PagesNumbers> to </PagesNumbers>
                <PagesNumbers>30</PagesNumbers>
                <NextButton type="button" onClick={this.onIncreaseLimit}>
                  <GrNext size="20" />
                </NextButton>
              </PagesContainer>
            </ProductsContainer>
          )}
        </ProductBgContainer>
      </ToggleChanges.Provider>
    )
  }
}

export default Product
