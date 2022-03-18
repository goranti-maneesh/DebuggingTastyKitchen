import styled from 'styled-components'

export const ProductBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1127px) {
    width: 100%;
  }
`

export const ProductContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  //   margin-left: 100px;
  //   margin-right: 100px;

  @media (max-width: 1200px;) {
    justify-content: flex-start;
    margin-left: 20px;
    margin-right: 0px;
  }
`

export const ProductHeaderMainBgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15vh;
`

export const ProductHeaderBgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media (orientation: portrait) {
    width: 90%;
  }
`

export const ProductHeaderSubBgContainer = styled.div`
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

export const PrevButton = styled.button`
  border: 2px solid #183b56;
  background-color: transparent;
  padding: 5px;
  margin: 15px;
  padding: 8px;
`

export const NextButton = styled.button`
  border: 2px solid #183b56;
  background-color: transparent;
  padding: 5px;
  margin: 15px;
  padding: 8px;
`

export const PagesNumbers = styled.p`
  font-family: Bree Serif;
  font-weight: 400;
  font-size: 20px;
  color: #183b56;
`

export const ProductsContainer = styled.div``

export const Hr = styled.hr`
  border: none;
  border-bottom: 2px solid #183b56;
  border-width: 80%;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`

export const Input = styled.input`
  width: 30vh;
  height: 3vh;
  outline: none;
  margin-left: 17vh;
`

export const NotFoundMainBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

export const NotFoundBgContainer = styled.div`
  background-color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
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

export default styled
