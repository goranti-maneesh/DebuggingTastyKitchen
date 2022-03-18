import styled from 'styled-components'

export const LoginMainBgContainer = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    background-color: transparent;
  }
`

export const LoginBgContainer = styled.div`
  background-color: '';
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 40vh;
  }
`

export const LoginContainer = styled.div`
  background-color: #eeeeee;
  width: 650px;
  height: 900px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  margin-left: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 70vh;
    margin-left: 0px;
    margin-top: 8vh;
  }
`

export const LoginSubBgContainer = styled.form`
  background-color: #ffffff;
  width: 430px;
  padding-top: 20px;
  padding-bottom: 50px;
  box-shadow: 0px 10px 40px rgba(7, 7, 7, 0.08);
  margin-left: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30vh;
  padding: 30px;
  padding-left: 40px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-right: 30vh;
  }
`

export const LoginImage = styled.img`
  width: 650px;
  height: 900px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LoginSmImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-left: 10vh;
  @media (min-width: 769px) {
    display: none;
  }
`

export const LoginSubImage = styled.img`
  width: 53px;
  height: 43px;
  align-self: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LoginImageName = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bold;
  font-size: 22px;
  color: #f7931e;
  align-self: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const LoginHeading = styled.h1`
  font-family: DM Sans;
  font-style: italic;
  font-weight: bolder;
  font-size: 30px;
  align-self: center;
  @media (max-width: 768px) {
    align-self: flex-start;
    font-size: 25px;
  }
`

export const LoginInput = styled.input`
  width: 100%;
  height: 4vh;
  border: none;
  background-color: #e2e8f0;
  outline: none;
  border-radius: 2px;
  @media (max-width: 768px) {
    width: 100%;
    height: 4.5vh;
  }
`

export const LoginLabel = styled.label`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  color: #475569;
  margin-top: 20px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
    font-weight: 100;
  }
`

export const LoginButton = styled.button`
  width: 100%;
  height: 4vh;
  background-color: #f7931e;
  border: none;
  outline: none;
  font-size: 15px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 30px;
  font-family: DM Sans;
  @media (max-width: 768px) {
    width: 100%;
    height: 4.5vh;
  }
`

export const ErrorMsg = styled.p`
  color: red;
  font-size: 15px;
  font-weight: 500;
`

export default styled
