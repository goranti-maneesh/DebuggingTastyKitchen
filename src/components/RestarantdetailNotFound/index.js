import {
  NotFoundMainBgContainer,
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
} from './StyledComponents'
import Header from '../Header'

const NotFound = () => (
  <NotFoundMainBgContainer>
    <NotFoundBgContainer>
      <Header />
      <NotFoundImage
        src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1634880629/Tasty%20Kitchen%20Images/notFound_oulxmc.png"
        alt="not-found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescription>
        We are sorry, the page you requested could not be found
      </NotFoundDescription>
      <NotFoundDescription>Please go back to the homepage</NotFoundDescription>
      <NotFoundButton>Go to home page</NotFoundButton>
    </NotFoundBgContainer>
  </NotFoundMainBgContainer>
)

export default NotFound
