import styled from 'styled-components'

export const CarouselImage = styled.img`
  width: 70%;
  height: 20%;
  @media (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`

export const BgImageContainer = styled.div`
  display: flex;
  justify-content: center;
`

export default styled
