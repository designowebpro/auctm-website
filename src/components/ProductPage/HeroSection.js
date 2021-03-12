import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import AuctmIllustration from 'images/auctm-product.svg'
import AuctmIllustrationMobile from 'images/auctm-product-mobile.svg'
import WaveBG from 'components/_ui/WaveBG'

const HeroContainer = styled.div`
    padding: 5rem 12rem 0 12rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 0;
    }
`

const HeadingContainer = styled(HeadingsContainer)`
    padding: 0 15rem;

    & h1 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    & h2 {
      margin-top: 0;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 0;
    }
`

const HeroImgContainer = styled.div`
    margin-top: 5rem;
    z-index: 5;
    padding-bottom: 2rem;
    min-height: 62rem;

    @media(min-width: ${dimensions.desktop}px) {
      margin-top: 5rem;
    }

    @media(min-width: ${dimensions.tablet}px) {
      min-height: 40rem;
    }

    & img.desktop-illustration {
      height: 55rem;

      @media(min-width: ${dimensions.desktop}px) {
        height: auto;
      }

      @media(max-width: ${dimensions.laptop}px) {
          height: 50rem;
      }
  
      @media(max-width: ${dimensions.phablet}px) {
          height: 45rem;
      }
  
      @media(max-width: ${dimensions.tablet}px) {
          height: 40rem;
      }

      @media(max-width: ${dimensions.mobile}px) {
          display: none;
      }
    }

    & img.mobile-illustration {
      display: none;
      max-width: 99vw;

      @media(max-width: ${dimensions.mobile}px) {
        display: block;
      }

      @media(max-width: 320px) {
        height: 60rem;
      }
    }

`

function HeroSection ({ data: { heroSectionTitle } }) {
  const title = heroSectionTitle.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')

  return (
    <Section style={{ position: 'relative' }}>
      <WaveBG />
      <Container>
        <HeroContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingContainer>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            {/* <h2>{heroSectionSubTitle}</h2> */}
          </HeadingContainer>
          <HeroImgContainer>
            <img width='100%' height='720' src={AuctmIllustration} className='desktop-illustration' alt='Auctm Product' aria-label='Auctm Product' />
            <img width='100%' height='810' src={AuctmIllustrationMobile} className='mobile-illustration' alt='Auctm Product' aria-label='Auctm Product' />
          </HeroImgContainer>
        </HeroContainer>
      </Container>
    </Section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    heroSectionTitle: PropTypes.string.isRequired,
    heroSectionSubTitle: PropTypes.string.isRequired
  })
}

export default HeroSection
