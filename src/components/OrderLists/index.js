import {Component} from 'react'
import {
  OrderListMainBgContainer,
  OrderListBgContainer,
  OrderListSubBgContainer,
  OrderListName,
  Quantity,
  OrderListContainer,
  OrderListPrice,
  Hr,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
  OrderNowButton,
  CostContainer,
  TotalCostHeading,
  TotalCostPrize,
  TotalCostHeadingSm,
  TotalCostPrizeSm,
  RemoveAllButton,
} from './StyledComponents'
import ToggleChanges from '../../Context/ToggleChanges'
import OrderListsDetails from '../OrderListsDetails'
import Footer from '../Footer'
import Header from '../Header'

class OrderLists extends Component {
  //   cartList = []

  sumOrder = cost => {
    this.setState(prevState => ({
      totalCost: prevState.totalCost + cost,
    }))
  }

  goToMenu = () => {
    const {history} = this.props
    history.replace('')
  }

  render() {
    return (
      <ToggleChanges.Consumer>
        {value => {
          const {SavedList} = value

          let cartItems = []
          const CartItem = localStorage.getItem('cartData')

          if (CartItem !== null) {
            cartItems = JSON.parse(CartItem)
          }

          let totalCost = 0
          SavedList.forEach(eachCartItem => {
            totalCost += eachCartItem.cost * eachCartItem.count
          })

          const removeCartList = () => {
            const {history} = this.props
            history.replace('/order')
            SavedList.length = 0
          }

          const goToOrderSuccessPage = () => {
            const {history} = this.props
            history.replace('/orderSuccess')
            SavedList.length = 0
          }
          // console.log(cartItems.length, 'length')
          const CartLength = cartItems.length === 0

          return (
            <OrderListMainBgContainer>
              {CartLength ? (
                <OrderListBgContainer>
                  <Header />
                  <NotFoundImage
                    src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1634880623/Tasty%20Kitchen%20Images/cooking_1_t0enyz.png"
                    alt="Cooking"
                  />
                  <NotFoundHeading>No Cart Items Found</NotFoundHeading>
                  <NotFoundDescription>
                    Your cart is empty. Please add something from the menu
                  </NotFoundDescription>
                  <NotFoundButton type="button" onClick={this.goToMenu}>
                    Order Now
                  </NotFoundButton>
                  <Footer />
                </OrderListBgContainer>
              ) : (
                <OrderListBgContainer>
                  <Header />

                  <OrderListSubBgContainer>
                    <OrderListContainer>
                      <OrderListName>Item</OrderListName>
                      <Quantity>Quantity</Quantity>
                      <OrderListPrice>Price</OrderListPrice>
                      <RemoveAllButton type="button" onClick={removeCartList}>
                        Remove All
                      </RemoveAllButton>
                    </OrderListContainer>
                    {cartItems.map(eachOne => (
                      <OrderListsDetails
                        key={eachOne.id}
                        eachOrderList={eachOne}
                        cost={eachOne.cost}
                        id={eachOne.id}
                      />
                    ))}
                    <Hr />
                    <CostContainer>
                      <TotalCostHeading>Total Cost:</TotalCostHeading>
                      <TotalCostPrize>₹{totalCost}.00</TotalCostPrize>
                      <TotalCostHeadingSm>Total Cost:</TotalCostHeadingSm>
                      <TotalCostPrizeSm>₹{totalCost}.00</TotalCostPrizeSm>
                    </CostContainer>
                    <OrderNowButton
                      type="button"
                      onClick={goToOrderSuccessPage}
                    >
                      Place Order
                    </OrderNowButton>
                  </OrderListSubBgContainer>
                  <Footer />
                </OrderListBgContainer>
              )}
            </OrderListMainBgContainer>
          )
        }}
      </ToggleChanges.Consumer>
    )
  }
}

export default OrderLists
