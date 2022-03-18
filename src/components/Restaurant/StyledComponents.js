import styled from 'styled-components'

export const ProductMainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const ProductBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: white;
`

export const ProductSubBgContainer = styled.div`
  //   overflow-y: scroll;
`

export const ProductContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-left: 0px;
  @media (max-width: 754px;) {
    justify-content: center;
  }
  @media (max-width: 754px;) and (max-width: 930px) {
    padding-left: 0px;
    justify-content: flex-start;
  }
`

export const RestaurantDetailBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://res.cloudinary.com/dpzasrsyq/image/upload/v1633424967/Tasty%20Kitchen%20Images/RestaurantsDetails_p0hteo.png');
  width: 100%;
  padding: 40px;
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding: 0px;
    height: 35vh;
  }
`

export const RestaurantDetailSubBg = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductHeaderName = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 25px;
  color: #183b56;
  margin-left: 0px;
`

export const ProductHeaderDescription = styled.p`
  font-family: DM Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  color: #183b56;
  margin: 0px;
`

export const ProductHeaderContainer = styled.div`
  display: flex;
  align-self: flex-end;
`

export const ProductHeaderSelect = styled.select`
  border: 2px solid white;
  background-color: transparent;
  outline: none;
`

export const ProductHeaderOption = styled.option`
  font-family: DM Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 18px;
  color: #183b56;
`

export const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`

export const RestaurantDetailsViewBg = styled.div`
  display: flex;
`

export const RestaurantDetailsViewSubBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const RestaurantDetailsViewImage = styled.img`
  width: 445px;
  height: 250px;
  border-radius: 18px;
  padding: 15px;
  @media (max-width: 768px) {
    width: 30vh;
    height: 30vh;
    border-radius: 30vh;
    margin-bottom: 15vh;
    margin-right: 0px;
    padding-left: 0px;
  }
`

export const RestaurantName = styled.div`
  color: white;
  font-size: 23px;
  font-weight: 500;
  margin-top: 30px;
`
export const RestaurantCuisine = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
`

export const RestaurantLocation = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 768px) {
    display: none;
  }
`

export const RestaurantLocationSm = styled.h1`
  color: white;
  font-size: 16px;
  font-weight: 400;
  @media (min-width: 768px) {
    display: none;
  }
`

export const StarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
`

export const StarContainer = styled.div`
  display: flex;
  margin-top: 5px;
  @media (max-width: 500px) {
    display: none;
  }
`

export const StarImage = styled.i`
  width: 4vh;
  margin: 10px;
  margin-left: 30px;
`

export const ProductRating = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-left: 10px;
  color: white;
  @media (max-width: 500px) {
    display: none;
  }
`

export const PipeLine = styled.hr`
  border-left-width: 1px;
  height: 40px;
  margin: 30px;
  margin-top: 10px;
`

export const ProductDetailsBgContainer = styled.li`
  display: flex;
  margin: 20px;
  width: 40vh;
`

export const ProductImage = styled.img`
  width: 250px;
  height: 180px;
  border-radius: 18px;
  padding: 15px;
`

export const ProductDetailsSubBg = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductName = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-top: 15px;
`

export const ProductCost = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #334155;
  margin: 8px;
  margin-top: 10px;
`
export const StarContainerSub = styled.div`
  display: flex;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const StarImageSub = styled.i`
  width: 4vh;
  margin: 10px;
`

export const ProductRatingSub = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #334155;
  letter-spacing: 0.2px;
  margin: 0px;
  margin-left: 10px;
`

export const AddButton = styled.button`
  color: #ffa412;
  border: 2px solid #ffa412;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  padding: 5px;
  width: 7vh;
`

export const NotFoundBgContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NotFoundImage = styled.img`
  width: 20vh;
  height: 20vh;
`

export const NotFoundHeading = styled.h1`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  color: #1e293b;
  margin: 0px;
`

export const NotFoundDescription = styled.p`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 48px;
  color: #475569;
  margin: 0px;
`

export const NotFoundButton = styled.button`
  background-color: #f7931e;
  border: none;
  border-radius: 12px;
  padding: 20px;
  color: white;
  font-size: 15px;
  margin: 10px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default styled
