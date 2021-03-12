import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import rects from 'images/bg__rectangles--product.svg'

const Container = styled.div`
    position: absolute;
    top: 45%;
    left: 15%;

    @media(min-width: ${dimensions.desktop}px) {
        top: 45%;
        left: 20%;
    }

    @media(max-width: ${dimensions.laptop}px) {
        top: 30%;
        left: 0%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        display: none;
    }
`

export default function BGRects () {
  return (
    <Container>
      <svg id='Group_1551' data-name='Group 1551' xmlns='http://www.w3.org/2000/svg' width='184' height='59' viewBox='0 0 184 59'>
        <rect id='Rectangle_323' data-name='Rectangle 323' width='117' height='23' transform='translate(67)' fill='#ffefed' />
        <rect id='Rectangle_324' data-name='Rectangle 324' width='126' height='23' transform='translate(0 36)' fill='#ffefed' />
      </svg>
    </Container>
  )
}

const ContainerProductPage = styled.div`
    position: absolute;
    bottom: -20%;
    left: 20%;

    @media(max-width: ${dimensions.laptop}px) {
        display: none;
    }

    @media(max-width: ${dimensions.mobile}px) {
      bottom: -12%;
      left: 20%;
      display: block;
      
      & img {
        width: 15rem;
      }
  }
`

export const BGRectsProductPage = () => {
  return <ContainerProductPage>
    <img src={rects} alt='Background Element Rectangles' />
  </ContainerProductPage>
}
