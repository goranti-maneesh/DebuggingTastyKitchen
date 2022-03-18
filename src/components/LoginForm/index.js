import {Component} from 'react'
import Cookies from 'js-cookie'
import {
  LoginMainBgContainer,
  LoginBgContainer,
  LoginContainer,
  LoginImage,
  LoginSubBgContainer,
  LoginSubImage,
  LoginLabel,
  LoginInput,
  LoginImageName,
  LoginHeading,
  LoginButton,
  ErrorMsg,
  LoginSmImage,
} from './StyledComponents'

class LoginForm extends Component {
  state = {username: '', password: '', errorMsg: '', showErrorMsg: false}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <LoginMainBgContainer>
        <LoginBgContainer>
          <LoginContainer>
            <LoginSubBgContainer onSubmit={this.onSubmitForm}>
              <LoginSubImage src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1633002399/Tasty%20Kitchen%20Images/Login1_oud4ou.png" />
              <LoginSmImage src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1633002234/Tasty%20Kitchen%20Images/SwiggyLogin_s7riq5.png" />
              <LoginImageName>Tasty Kitchens</LoginImageName>
              <LoginHeading>Login</LoginHeading>
              <LoginLabel htmlFor="username">USERNAME</LoginLabel>
              <LoginInput
                id="username"
                onChange={this.onChangeUsername}
                placeholder="username"
              />
              <LoginLabel htmlFor="password">PASSWORD</LoginLabel>
              <LoginInput
                onChange={this.onChangePassword}
                id="password"
                placeholder="password"
                type="password"
              />
              <LoginButton type="submit">Login</LoginButton>
              {showErrorMsg ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
            </LoginSubBgContainer>
          </LoginContainer>
          <LoginImage
            src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1633002234/Tasty%20Kitchen%20Images/SwiggyLogin_s7riq5.png"
            alt="tasty kitchen"
          />
        </LoginBgContainer>
      </LoginMainBgContainer>
    )
  }
}

export default LoginForm
