import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import circleImg from 'images/shape_fb-circle.svg'

const Container = styled.div`
    position: absolute;
    top: 15%;
    right: 25%;

    @media(min-width: ${dimensions.desktop}px) {
        top: 17%;
        right: 28%;
    }

    @media(max-width: ${dimensions.laptop}px) {
        top: 12%;
        right: 10%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: 10%;
        right: 2%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

export default function BGCircle () {
  return (
    <Container>
      <svg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'>
        <circle id='Ellipse_42' data-name='Ellipse 42' cx='76' cy='76' r='76' fill='#ff6355' opacity='0.1' />
      </svg>
    </Container>
  )
}

const ProductPageContainer = styled.div`
    position: absolute;
    top: -5%;
    right: 0;
    z-index: -1;

    @media(max-width: ${dimensions.laptop}px) {
      right: -5%;
    }

    @media(max-width: ${dimensions.tablet}px) {
      right: -3%;
    }

    @media(max-width: ${dimensions.mobile}px) {
      right: -8%;
      & img {
        width: 10rem;
      }
    }


    @media(max-width: 320px) {
      right: -3%;
    }
`

export const BGCirleProductPage = () => {
  return <ProductPageContainer>
    <img src={circleImg} alt='Background Circle' aria-label='Background Circle' />
         </ProductPageContainer>
}
