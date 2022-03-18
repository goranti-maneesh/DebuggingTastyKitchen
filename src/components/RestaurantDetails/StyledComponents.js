import styled from 'styled-components'

export const ProductDetailsBgContainer = styled.li`
  display: flex;
  width: 450px;
  margin: 20px;
  @media (orientation: portrait) {
    margin: 10px;
  }
`

export const ProductImage = styled.img`
  width: 270px;
  height: 170px;
  border-radius: 18px;
  padding: 10px;
  @media (max-width: 754px;) {
    width: 230px;
    height: 100px;
  }
`

export const ProductDetailsSubBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ProductName = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
  @media (max-width: 754px;) {
    font-size: 18px;
    font-weight: 300;
  }
`

export const ProductCost = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334155;
`
export const StarContainer = styled.div`
  display: flex;
`

export const StarImage = styled.i`
  width: 4vh;
`

export const ProductRating = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
`

export const AddButton = styled.button`
  color: #ffa412;
  border: 2px solid #ffa412;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding: 5px;

  &:hover {
    background-color: #ffa412;
    color: white;
    box-shadow: 0px 5px 10px 0px;
  }
`

export const CountContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CountButton = styled.button`
  color: #475569;
  border: 1px solid #475569;
  background-color: transparent;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 6px;
  padding-right: 6px;
`

export const CountNumber = styled.h1`
  color: #475569;
  font-size: 10px;
  margin: 7px;
  margin-top: 0px;
  align-self: center;
`

export default styled
