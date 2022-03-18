import styled from 'styled-components'

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
  width: 30vh;
  height: 30vh;
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
