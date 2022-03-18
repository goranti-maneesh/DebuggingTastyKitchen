import {Component} from 'react'
import {AiFillStar} from 'react-icons/ai'
import {
  ProductDetailsBgContainer,
  ProductDetailsSubBg,
  ProductName,
  ProductImage,
  ProductCost,
  StarContainer,
  ProductRating,
  AddButton,
  CountButton,
  CountContainer,
  CountNumber,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'

const cartData = []
class RestaurantDetails extends Component {
  state = {count: 0}

  render() {
    return (
      <ToggleChanges.Consumer>
        {value => {
          const {
            addToSavedList,
            onUpdatedCount,
            decrementCartItemQuantity,
          } = value
          const {eachRestaurantDetails} = this.props
          const {count} = this.state

          const {imageUrl, name, cost} = eachRestaurantDetails
          const addToCart = count === 0
          const nameLength = name.length === 15

          const onAddToList = () => {
            const newCount = 1
            addToSavedList({...eachRestaurantDetails, count: newCount})

            this.setState(prevState => ({
              count: prevState.count + 1,
            }))
          }

          const onIncrement = () => {
            this.setState(prevState => ({
              count: prevState.count + 1,
            }))

            cartData.push({...eachRestaurantDetails, count})
            // console.log({...eachRestaurantDetails, count}, cartData, 'cartData')
            /* localStorage.setItem('cartData', JSON.stringify(cartData)) */

            addToSavedList({...eachRestaurantDetails, count})
            onUpdatedCount(count)
          }

          const onDecrement = () => {
            if (count > 0) {
              this.setState(prevState => ({
                count: prevState.count - 1,
              }))
              /* localStorage.setItem('cartData', JSON.stringify(cartData))
              addToSavedList({...eachRestaurantDetails, count})
               */

              decrementCartItemQuantity(eachRestaurantDetails.id)
              onUpdatedCount(count)
            }
          }

          return (
            <ProductDetailsBgContainer>
              <ProductImage src={imageUrl} alt={name} />
              <ProductDetailsSubBg>
                {nameLength ? (
                  <ProductName title={name}>{name}</ProductName>
                ) : (
                  <ProductName title={name}>{name.slice(0, 15)}...</ProductName>
                )}
                {/* <ProductName>{name}</ProductName> */}
                <ProductCost>₹{cost}.00</ProductCost>
                <StarContainer>
                  <AiFillStar size="20" color="#FFCC00" />
                  <ProductRating>4.4</ProductRating>
                </StarContainer>
                {addToCart ? (
                  <div>
                    <AddButton type="button" onClick={onAddToList}>
                      ADD
                    </AddButton>
                  </div>
                ) : (
                  <CountContainer>
                    <CountButton type="button" onClick={onDecrement}>
                      -
                    </CountButton>
                    <CountNumber>{count}</CountNumber>
                    <CountButton type="button" onClick={onIncrement}>
                      +
                    </CountButton>
                  </CountContainer>
                )}
              </ProductDetailsSubBg>
            </ProductDetailsBgContainer>
          )
        }}
      </ToggleChanges.Consumer>
    )
  }
}

export default RestaurantDetails
