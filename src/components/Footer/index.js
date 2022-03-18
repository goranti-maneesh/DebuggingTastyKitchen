import {FaPinterestSquare, FaTwitter} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImFacebook2} from 'react-icons/im'
import {
  FooterBgContainer,
  FooterSubBg,
  FooterImage,
  FooterName,
  FooterDescription,
  FooterIcons,
} from './StyledComponents'

const Footer = () => (
  <FooterBgContainer>
    <FooterSubBg>
      <FooterImage src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1633187021/Tasty%20Kitchen%20Images/FooterCap_uabxf1.png" />
      <FooterName>Tasty Kitchen</FooterName>
    </FooterSubBg>
    <FooterDescription>
      The only thing we are serious about is food
    </FooterDescription>
    <FooterSubBg>
      <FooterIcons>
        <FaPinterestSquare color="#ffffff" size="28" />
      </FooterIcons>
      <FooterIcons>
        <FiInstagram color="#ffffff" size="28" />
      </FooterIcons>
      <FooterIcons>
        <FaTwitter color="#ffffff" size="28" />
      </FooterIcons>
      <FooterIcons>
        <ImFacebook2 color="#ffffff" size="24" />
      </FooterIcons>
    </FooterSubBg>
  </FooterBgContainer>
)

export default Footer
