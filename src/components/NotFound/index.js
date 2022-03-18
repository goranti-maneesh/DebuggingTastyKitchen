import {Link} from 'react-router-dom'
import {
  NotFoundBgContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
  NotFoundButton,
} from './StyledComponent'

const NotFound = () => (
  <NotFoundBgContainer>
    <NotFoundImage
      src="https://res.cloudinary.com/dpzasrsyq/image/upload/v1634880629/Tasty%20Kitchen%20Images/notFound_oulxmc.png"
      alt="not-found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
    <NotFoundDescription>Please go back to the homepage</NotFoundDescription>
    <Link to="/">
      <NotFoundButton>Go to home page</NotFoundButton>
    </Link>
  </NotFoundBgContainer>
)

export default NotFound
