import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import bgLeftProduct from 'images/bgLeftProduct.svg'
import bgLeftPricing from 'images/bg-left-pricing.svg'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    @media(max-width: ${dimensions.laptop}px) {
        display: none;
    }
`

export default function BGShapeFBLeft () {
  return (
    <Container>
      <svg xmlns='http://www.w3.org/2000/svg' width='198.376' height='474.484' viewBox='0 0 198.376 474.484'>
        <path id='Path_1463' data-name='Path 1463' d='M1410.3,2531.484c94.8-202.48,195.4-56.774,198.3-221.447,2.488-141.513-107.065-205.506-198.3-253.037C1410.22,2057.116,1410.3,2531.484,1410.3,2531.484Z' transform='translate(-1410.265 -2057)' fill='#fafbff' />
      </svg>
    </Container>
  )
}

const ProductPageContainer = styled.div`
    position: absolute;
    top: 70rem;
    left: 0;

    @media(max-width: ${dimensions.tablet}px) {
        display: none;
    }
`

export const BGShapeLeftProduct = () => {
  return (
    <ProductPageContainer>
      <img src={bgLeftProduct} alt='Background Element Product Page Left' aria-label='Background Element Product Page Left' />
    </ProductPageContainer>
  )
}

const PricingPageContainer = styled.div`
    position: absolute;
    top: -5rem;
    left: 0;

    & img {
      height: 30rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        display: none;
    }
`

export const BGShapeLeftPricing = () => {
  return (
    <PricingPageContainer>
      <img src={bgLeftPricing} alt='Background Element Pricing Page Left' aria-label='Background Element Pricing Page Left' />
    </PricingPageContainer>
  )
}
