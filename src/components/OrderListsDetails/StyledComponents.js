import styled from 'styled-components'

export const OrderListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-right: 100px;
  @media (max-width: 780px) {
    display: none;
  }
`

export const OrderListSubContainer = styled.div`
  display: flex;
  align-items: center;
`
export const OrderListBg = styled.div``

export const OrderListImage = styled.img`
  width: 18vh;
  height: 13vh;
  border-radius: 5px;
  margin: 15px;
  @media (max-width: 780px) {
    display: none;
  }
`
export const OrderListImageSm = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 5px;
  margin: 15px;
  @media (min-width: 780px) {
    display: none;
  }
`

export const OrderListName = styled.h1`
  font-size: 20px;
  color: #183b56;
  font-weight: bold;
  font-family: DM Sans;
  //margin-right: 5vh;
  width: 70px;
  @media (max-width: 780px) {
    display: none;
  }
`

export const OrderListPrice = styled.h1`
  font-size: 18px;
  color: #ffa412;
  font-weight: bold;
  font-family: DM Sans;

  @media (max-width: 780px) {
    display: none;
  }
`
export const RemoveContainer = styled.div`
  @media (max-width: 780px) {
    display: none;
  }
`

export const Quantity = styled.div`
  margin-right: 10vh;
  @media (max-width: 780px) {
    display: none;
  }
`

export const OrderListSm = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 780px) {
    display: none;
  }
`
export const OrderListSubContainerSm = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 780px) {
    display: none;
  }
`
export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 780px) {
    display: none;
  }
`

export const CountButton = styled.button`
  color: #475569;
  border: 1px solid #475569;
  background-color: transparent;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
  @media (max-width: 780px) {
    display: none;
  }
`

export const CountNumber = styled.h1`
  color: #475569;
  font-size: 10px;
  margin: 7px;
  margin-top: 0px;
  align-self: center;
  @media (max-width: 780px) {
    display: none;
  }
`

// export const CountContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 780px) {
//     display: none;
//   }
// `

// export const CountButton = styled.button`
//   color: #475569;
//   border: 1px solid #475569;
//   background-color: transparent;
//   padding: 0.2px;
//   width: 2vh;
//   height: 2vh;
//   @media (max-width: 780px) {
//     display: none;
//   }
// `

// export const CountNumber = styled.h1`
//   color: #475569;
//   font-size: 10px;
//   margin: 7px;
//   margin-top: 0px;
//   @media (max-width: 780px) {
//     display: none;
//   }
// `

export const CountContainerSm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (min-width: 780px) {
    display: none;
  }
`

export const CountButtonSm = styled.button`
  color: #475569;
  border: 1px solid #475569;
  background-color: transparent;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 8px;
  padding-right: 8px;
  @media (min-width: 780px) {
    display: none;
  }
`

export const CountNumberSm = styled.h1`
  color: #475569;
  font-size: 12px;
  margin: 7px;
  margin-top: 0px;
  align-self: center;
  @media (min-width: 780px) {
    display: none;
  }
`

export const OrderListNameSm = styled.h1`
  font-size: 20px;
  color: #183b56;
  font-weight: bold;
  font-family: DM Sans;
  margin-right: 5vh;

  @media (min-width: 780px) {
    display: none;
  }
`

export const OrderListPriceSm = styled.h1`
  font-size: 20px;
  color: #ffa412;
  font-weight: bold;
  font-family: DM Sans;
  //margin-right: 10vh;
  @media (min-width: 780px) {
    display: none;
  }
`
export default styled
