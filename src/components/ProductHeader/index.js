import {MdSort} from 'react-icons/md'
import ToggleChanges from '../../Context/ToggleChanges'
import {
  ProductHeaderMainBgContainer,
  ProductHeaderBgContainer,
  ProductHeaderSubBgContainer,
  ProductHeaderName,
  ProductHeaderDescription,
  ProductHeaderContainer,
  ProductHeaderSelect,
  ProductHeaderOption,
  Hr,
} from './StyledComponents'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const ProductHeader = () => (
  <ToggleChanges.Consumer>
    {value => {
      const {activeRating, changeActiveRating} = value

      const onChangeActiveRating = event => {
        changeActiveRating(event.target.value)
      }

      return (
        <ProductHeaderMainBgContainer>
          <ProductHeaderBgContainer>
            <ProductHeaderSubBgContainer>
              <ProductHeaderName>Popular Restaurants</ProductHeaderName>
              <ProductHeaderDescription>
                Select your favorite restaurant dish and make your day happy...
              </ProductHeaderDescription>
            </ProductHeaderSubBgContainer>
            <ProductHeaderContainer>
              <MdSort size="23" />
              <ProductHeaderDescription>Sort by</ProductHeaderDescription>
              <ProductHeaderSelect
                value={activeRating}
                onChange={onChangeActiveRating}
              >
                {sortByOptions.map(eachOption => (
                  <ProductHeaderOption
                    key={eachOption.id}
                    value={eachOption.value}
                  >
                    {eachOption.displayText}
                  </ProductHeaderOption>
                ))}
              </ProductHeaderSelect>
            </ProductHeaderContainer>
          </ProductHeaderBgContainer>
          <Hr />
        </ProductHeaderMainBgContainer>
      )
    }}
  </ToggleChanges.Consumer>
)

export default ProductHeader
