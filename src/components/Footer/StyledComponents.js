import styled from 'styled-components'

export const FooterBgContainer = styled.div`
  background: #0f172a;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FooterImage = styled.img`
  width: 50px;
  height: 40px;
  align-self: center;
  margin-right: 20px;
  margin-left: 50px;
`

export const FooterName = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 22px;
  color: #ffffff;
  align-self: center;
  margin-right: 30px;
`

export const FooterSubBg = styled.div`
  display: flex;
`

export const FooterDescription = styled.p`
  font-family: DM Sans;
  font-style: italic;
  font-weight: normal;
  font-size: 15px;
  color: #ffffff;
  align-self: center;
`

export const FooterIcons = styled.i`
  margin: 20px;
`

export default styled
