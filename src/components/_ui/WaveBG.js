import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import wave from 'images/product-page-bg.svg'
import wavePress from 'images/bg-press.svg'
import waveMobile from 'images/product-page-bg-mobile.svg'
import waveWhyAuctm from 'images/bg-whyauctm-wave.svg'
import AuctmIllustration from 'images/why-auctm-illustration.svg'
import pressParty from 'images/bg-press-party.svg'

const Container = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: -1;

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

export default function WaveBG () {
  return (
    <Container>
      <img src={wave} className='wave-desktop' alt='Wave Background Product Page Desktop' aria-label='Wave Background Product Page Desktop' />
      <img src={waveMobile} className='wave-mobile' alt='Wave Background Product Page Mobile' aria-label='Wave Background Product Page Mobile' />
    </Container>
  )
}

const ContainerWhyAuctm = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    height: 95rem;

    & img.bg {
      position: absolute;
      top: 0;
      right: 0;
      width: 90rem;
      z-index: -1;
    }

    & img.illustration {
      width: 70rem;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    @media(min-width: ${dimensions.desktop}px) {

      height: 130rem;

      & img.bg {
        width: 120rem;
      }

      & img.illustration {
        width: 95rem;
      }
    }

    @media(max-width: ${dimensions.laptop}px) {
      height: 75rem;

      & img.bg {
        width: 70rem;
      }

      & img.illustration {
        width: 50rem;
      }
    }

    @media(max-width: ${dimensions.tablet}px) {
      height: 120rem;

      & img.bg {
        display: none;
      }

      & img.illustration {
        width: 65rem;
      }
    }

    @media(max-width: ${dimensions.mobile}px) {
      height: 80rem;

      & img.illustration {
        margin-top: 5rem;
        width: calc(100vw - 2rem);
      }
    }

    @media(max-width: 320px) {
      height: 80rem;
      & img.illustration {
        width: 30rem;
      }
    }
`

export const WaveBGWhyAuctm = () => {
  return <ContainerWhyAuctm>
    <img
      data-sal='slide-up'
      data-sal-delay='0'
      data-sal-duration='400'
      data-sal-easing='ease-in-out' className='illustration' src={AuctmIllustration} alt='Why Auctm Illustration' aria-label='Why Auctm Illustration'
    />
    <img className='bg' src={waveWhyAuctm} alt='Wave Background Why Auctm Page Desktop' aria-label='Wave Background Why Auctm Page Desktop' />
  </ContainerWhyAuctm>
}

const ContainerPricingPage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    height: 60rem;

    & div.img {
      background-image: url(${pressParty});
      background-size: cover;
      background-position: 5rem -2rem;
      width: 100%;
      height: 60rem;

      @media(max-width: ${dimensions.mobile}px) {
        height: 50rem;
      }
    }

    & div.bg {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -2;
      background-image: url(${wavePress});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: 0 0;
      width: 100%;
      height: 65rem;

      @media(max-width: ${dimensions.mobile}px) {
        height: 50rem;
      }
    }

    & img {
        width: 100%;
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;

        @media(max-width: ${dimensions.mobile}px) {
          left: -30%;
        }
    }

    & img.bg {
      z-index: -2;

      @media(max-width: ${dimensions.mobile}px) {
        height: 10rem;
      }
    }

    & img.party {
      z-index: -1;
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

export const WaveBGPricing = () => {
  return <ContainerPricingPage>
    <div className='img' />
    <div className='bg' />
    {/* <img className='party' src={pressParty} alt='Pricing Party' aria-label='Pricing Party' /> */}
    {/* <img className='bg' src={wavePress} alt='Wave Background Press Page' aria-label='Wave Background Why Auctm Page' /> */}
  </ContainerPricingPage>
}
