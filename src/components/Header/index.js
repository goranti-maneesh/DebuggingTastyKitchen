import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseCircleFill} from 'react-icons/ri'
import {
  HeaderBgContainer,
  HeaderSubBg,
  HeaderImage,
  HeaderName,
  HeaderPageNames,
  Linked,
  LogoutButton,
  MenuIcon,
  SmBgContainer,
  SmMainBgContainer,
} from './StyledComponents'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <HeaderBgContainer>
        <Linked to="/">
          <HeaderSubBg>
            <HeaderImage src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1633002399/Tasty%20Kitchen%20Images/Login1_oud4ou.png" />
            <HeaderName>Tasty Kitchen</HeaderName>
          </HeaderSubBg>
        </Linked>
        <HeaderSubBg>
          <Linked to="/">
            <HeaderPageNames>Home</HeaderPageNames>
          </Linked>
          <Linked to="/order">
            <HeaderPageNames>Cart</HeaderPageNames>
          </Linked>
          <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
        </HeaderSubBg>

        <Popup
          trigger={
            <MenuIcon type="button">
              <GiHamburgerMenu size="25" color="#231F20" />
            </MenuIcon>
          }
          modal
          nested
          closeOnDocumentClick="false"
          position="top"
          on="click"
        >
          {close => (
            <SmMainBgContainer>
              <SmBgContainer>
                <HeaderSubBg>
                  <Linked to="/">
                    <h1 className="pages-name">Home</h1>
                  </Linked>
                  <Linked to="/order">
                    <h1 className="pages-name">Cart</h1>
                  </Linked>
                  <button
                    className="logout-button"
                    type="button"
                    onClick={onClickLogout}
                  >
                    Logout
                  </button>
                  <MenuIcon type="button" onClick={() => close()}>
                    <RiCloseCircleFill size="28" color="#231F20" />
                  </MenuIcon>
                </HeaderSubBg>
              </SmBgContainer>
            </SmMainBgContainer>
          )}
        </Popup>
      </HeaderBgContainer>
    </>
  )
}

export default withRouter(Header)
