import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ProductDetailsBgContainer = styled.li`
  display: flex;
  width: 450px;
  margin: 20px;
  @media (orientation: portrait) {
    margin: 10px;
    width: 350px;
  }
`

export const ProductImage = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 15px;
  padding: 10px;
  @media (max-width: 768px) {
    width: 230px;
     height: 140px;
  }

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
  font-size: 17px;
  color: #334155;
  //   max-width: 50px;
  letter-spacing: 0.2px;
  @media (orientation: portrait) {
    flex-shrink: 1;
    font-size: 16px;
  }
`

export const ProductType = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334155;
  @media (max-width: 768px) {
    margin-top: 0px;
    font-size: 12px;
  }
`
export const StarContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    margin-top: 2px;
  }
`

export const StarImage = styled.i`
  width: 4vh;
  //   margin: 10px;
  //   margin-top: 20px;
`
export const RatingNumber = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  color: #334155;
  margin: 10px;
  margin-top: 2px;
  margin-right: 0px;
  @media (min-width: 973px) and (max-width: 1127px) {
    display: none;
  }
`

export const ProductRating = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-left: 10px;
  //   margin-bottom: 5px;
`

export const Linked = styled(Link)`
  text-decoration: none;
`

export default styled
