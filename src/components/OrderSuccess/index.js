import {Component} from 'react'
import {IoIosCheckmarkCircle} from 'react-icons/io'

import Header from '../Header'
import {
  SuccessMainBgContainer,
  SuccessBgContainer,
  SuccessHeading,
  SuccessParagraph,
  SuccessButton,
  SuccessSubBgContainer,
} from './StyledComponents'

class OrderSuccess extends Component {
  goToMenu = () => {
    const {history} = this.props
    history.replace('')
  }

  render() {
    return (
      <SuccessMainBgContainer>
        <SuccessBgContainer>
          <Header />
          <SuccessSubBgContainer>
            <IoIosCheckmarkCircle size="100" color="green" />
            <SuccessHeading>Payment Successful</SuccessHeading>
            <SuccessParagraph>Thank you for Ordering</SuccessParagraph>
            <SuccessParagraph>
              Your Payment is successfully completed
            </SuccessParagraph>
            <SuccessButton type="button" onClick={this.goToMenu}>
              Go to Home page
            </SuccessButton>
          </SuccessSubBgContainer>
        </SuccessBgContainer>
      </SuccessMainBgContainer>
    )
  }
}

export default OrderSuccess
