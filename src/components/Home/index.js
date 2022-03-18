import {HomeBgContainer} from './StyledComponents'
import Header from '../Header'
import Product from '../Product'
import Carousel from '../Carousel'
import Footer from '../Footer'

const Home = () => (
  <HomeBgContainer>
    <Header />
    <Carousel />
    <Product />
    <Footer />
  </HomeBgContainer>
)

export default Home
