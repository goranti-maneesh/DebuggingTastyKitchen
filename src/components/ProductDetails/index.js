import {AiFillStar} from 'react-icons/ai'
import {
  ProductDetailsBgContainer,
  ProductDetailsSubBg,
  ProductName,
  ProductImage,
  ProductType,
  StarContainer,
  ProductRating,
  Linked,
} from './StyledComponents'

const ProductDetails = props => {
  const {eachProductDetails} = props
  const {rating, menuType, id, imageUrl, name} = eachProductDetails
  const nameLength = name.length === 15

  return (
    <Linked to={`/${id}`}>
      <ProductDetailsBgContainer>
        <ProductImage src={imageUrl} alt={name} />
        <ProductDetailsSubBg>
          {nameLength ? (
            <ProductName title={name}>{name}</ProductName>
          ) : (
            <ProductName title={name}>{name.slice(0, 15)}...</ProductName>
          )}
          {/* <ProductName>{name}</ProductName> */}

          <ProductType>{menuType}</ProductType>
          <StarContainer>
            <AiFillStar size="20" color="#FFCC00" />
            <ProductRating>{rating}</ProductRating>
          </StarContainer>
        </ProductDetailsSubBg>
      </ProductDetailsBgContainer>
    </Linked>
  )
}

export default ProductDetails
