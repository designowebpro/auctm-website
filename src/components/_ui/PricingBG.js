import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import BGPricing from 'images/bg-pricing.svg'

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    margin-bottom: 8rem;

    & img {
        width: 100%;
        z-index: 0;
    }

    & img.wave-desktop {
        @media(max-width: ${dimensions.mobile}px) {
            display: none;
        }
    }

    & img.wave-mobile {
        display: none;
  
        @media(max-width: ${dimensions.mobile}px) {
          display: block;
        }
    }
`

export default function PricingBG () {
  return (
    <Container>
      <img src={BGPricing} className='wave-desktop' alt='Pricing Background Pricing Page' aria-label='Pricing Background Pricing Page' />
    </Container>
  )
}
