import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import bgRightProduct from 'images/bgRightProduct.svg'
import bgRightPricing from 'images/bg-right-pricing.svg'

const Container = styled.div`
    position: absolute;
    top: 30%;
    right: 0;

    @media(max-width: ${dimensions.laptop}px) {
        display: none;
    }
`

export default function BGShapeFBRight () {
  return (
    <Container>
      <svg xmlns='http://www.w3.org/2000/svg' width='164.053' height='553.81' viewBox='0 0 164.053 553.81'>
        <path id='Path_1167' data-name='Path 1167' d='M1574.279,2057c-88.418,79.443-320.078,18.3,0,553.81C1574.368,2610.674,1574.279,2057,1574.279,2057Z' transform='translate(-1410.265 -2057)' fill='#fafbff' />
      </svg>
    </Container>
  )
}

const ProductPageContainer = styled.div`
    position: absolute;
    top: 30rem;
    right: 0;

    @media(max-width: ${dimensions.laptop}px) {
        display: none;
    }
`

export const BGShapeRightProduct = () => {
  return (
    <ProductPageContainer>
      <img src={bgRightProduct} alt='Background Element Product Page Right' aria-label='Background Element Product Page Right' />
    </ProductPageContainer>
  )
}

const PricingPageContainer = styled.div`
    position: absolute;
    top: 20rem;
    right: 0;

    & img {
      height: 30rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        display: none;
    }
`

export const BGShapeRightPricing = () => {
  return (
    <PricingPageContainer>
      <img src={bgRightPricing} alt='Background Element Pricing Page Right' aria-label='Background Element Pricing Page Right' />
    </PricingPageContainer>
  )
}
