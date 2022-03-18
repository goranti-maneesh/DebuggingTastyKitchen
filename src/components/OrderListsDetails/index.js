/* eslint-disable no-unused-vars */
import {CgRemove} from 'react-icons/cg'

import ToggleChanges from '../../Context/ToggleChanges'

import {
  OrderListContainer,
  OrderListImage,
  OrderListSubContainer,
  OrderListName,
  OrderListPrice,
  OrderListSm,
  OrderListBg,
  OrderListImageSm,
  OrderListSubContainerSm,
  CountButton,
  CountContainer,
  CountNumber,
  CountButtonSm,
  CountContainerSm,
  CountNumberSm,
  OrderListNameSm,
  OrderListPriceSm,
  RemoveContainer,
} from './StyledComponents'

const OrderListsDetails = props => (
  <ToggleChanges.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value
      const {eachOrderList, onUpdatedCount} = props

      // console.log(props, 'props')

      const {id, imageUrl, name, count, cost} = eachOrderList
      const nameLength = name.length === 15

      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }

      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const onRemoveItem = () => {
        removeCartItem(id)
      }

      return (
        <OrderListBg>
          <OrderListContainer>
            <OrderListSubContainer>
              <OrderListImage src={imageUrl} alt="orderImage" />

              {nameLength ? (
                <OrderListName title={name}>{name}</OrderListName>
              ) : (
                <OrderListName title={name}>
                  {name.slice(0, 15)}...
                </OrderListName>
              )}
            </OrderListSubContainer>
            <CountContainer>
              <CountButton type="button" onClick={onClickDecrement}>
                -
              </CountButton>
              <CountNumber>{count}</CountNumber>
              <CountButton type="button" onClick={onClickIncrement}>
                +
              </CountButton>
            </CountContainer>
            {console.log(cost, count, cost * count)}
            <OrderListPrice>₹{cost * count}.00</OrderListPrice>
            <RemoveContainer type="button" onClick={onRemoveItem}>
              <CgRemove size="20" color="red" />
            </RemoveContainer>
          </OrderListContainer>

          <OrderListSubContainerSm>
            <OrderListImageSm src={imageUrl} alt="orderImage" />
            <OrderListSm>
              <OrderListNameSm>{name}</OrderListNameSm>
              <CountContainerSm>
                <CountButtonSm type="button" onClick={onClickDecrement}>
                  -
                </CountButtonSm>
                <CountNumberSm>{count}</CountNumberSm>
                <CountButtonSm type="button" onClick={onClickIncrement}>
                  +
                </CountButtonSm>
              </CountContainerSm>
              <OrderListPriceSm>₹{cost * count}.00</OrderListPriceSm>
            </OrderListSm>
          </OrderListSubContainerSm>
        </OrderListBg>
      )
    }}
  </ToggleChanges.Consumer>
)

export default OrderListsDetails
