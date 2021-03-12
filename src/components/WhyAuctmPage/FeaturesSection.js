import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import BGLeftOne from 'images/bg-why-auctm-1.svg'
import BGRightTwo from 'images/bg-why-auctm-2.svg'
import BGLeftThree from 'images/bg-why-auctm-3.svg'
import IllustrationLeftOne from 'images/illustration-why-auctm-1.svg'
import IllustrationRightTwo from 'images/illustration-why-auctm-2.svg'
import IllustrationLeftThree from 'images/illustration-why-auctm-3.svg'
// import { Parallax } from 'react-scroll-parallax'
import PropTypes from 'prop-types'

const SectionContainer = styled.div`
    padding: 2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    &.reverse {
        flex-direction: row-reverse;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 5rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        flex-direction: column-reverse;
        padding: 2rem 0 5rem 0;
        margin-bottom: 5rem;

        &.reverse {
            flex-direction: column-reverse;;
        }
    }
`

const MainContainer = styled.div`
    padding: 0 0;

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0;
    }
`

const BGLeft = styled.img`
    position: absolute;
    bottom: -15%;
    left: 0;
    z-index: -1;
    width: 50rem;

    @media(min-width: ${dimensions.desktop}px) {
        width: 70rem;
        bottom: -35%;
    }

    @media(max-width: ${dimensions.laptop}px) {
        width: 50rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 30rem;
        bottom: 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 30rem;
        bottom: 0;
    }
`

const BGLeftSecond = styled(BGLeft)`
    bottom: -5%;

    @media(min-width: ${dimensions.desktop}px) {
      bottom: -15%;
    }
`

const BGRight = styled.img`
    position: absolute;
    bottom: -5%;
    right: 0;
    z-index: -1;
    width: 50rem;

    @media(min-width: ${dimensions.desktop}px) {
        width: 70rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        width: 50rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 30rem;
        bottom: 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 30rem;
    }
`

const ImgContainer = styled.div`

    & img {
        width: 40rem;
        margin-left: auto;

        @media(min-width: ${dimensions.desktop}px) {
          width: 50rem;
        }

        &.right {
            @media(min-width: ${dimensions.desktop}px) {
                margin-left: 0;
                margin-right: 0;
            }

            @media(max-width: ${dimensions.tablet}px) {
                margin-left: 5rem;
            }

            @media(max-width: ${dimensions.mobile}px) {
                margin-left: 0;
            }
        }

        @media(min-width: ${dimensions.desktop}px) {
            width: auto;
        }

        @media(max-width: ${dimensions.tablet}px) {
            width: 25rem;
            margin-left: auto;
            margin-right: 8rem;
        }

        @media(max-width: ${dimensions.mobile}px) {
            width: 100%;
            margin-left: 0;
            margin-right: 0;
        }
    }

`

const TextContainer = styled.div`

    width: 45%;

    & p {
        font-size: 2rem;
        color: var(--text-dark);
        line-height: 1.5;
        font-weight: bold;
    }

    & h3 {
        color: var(--color-accent);
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 100%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 100%;
        margin: 2rem 0;

        & p {
            font-size: 1.6rem;
        }
    }

`

export default function FeaturesSection ({ data }) {
  const { featureCauseOne, featureCauseTwo, featureCauseThree } = data

  return (
    <MainContainer>
      <Section className='position-relative'>
        <BGLeft src={BGLeftOne} alt='Why Auctm - Background Element Left' aria-label='Why Auctm - Background Element Left' />
        <Container>
          <SectionContainer>
            {/* <Parallax y={['-20px', '20px']}> */}
              <ImgContainer
                data-sal='slide-right'
                data-sal-delay='0'
                data-sal-duration='400'
                data-sal-easing='ease-in-out'
                data-sal-mobile-disabled='true'
              >
                <img src={IllustrationLeftOne} alt='Why Auctm - Illustration Confused' aria-label='Why Auctm - Illustration Confused' />
              </ImgContainer>
            {/* </Parallax> */}
            <TextContainer
              data-sal='slide-left'
              data-sal-delay='0'
              data-sal-duration='400'
              data-sal-easing='ease-in-out'
              data-sal-mobile-disabled='true'
            >
              {
                featureCauseOne.featureCauseHighlight
                  ? <h3>{featureCauseOne.featureCauseHighlight}</h3> : null
              }
              {
                featureCauseOne.featureCauseText.map((text, idx) => <p key={idx}>{text}</p>)
              }
            </TextContainer>
          </SectionContainer>
        </Container>
      </Section>
      <Section className='position-relative'>
        <BGRight src={BGRightTwo} alt='Why Auctm - Background Element Right' aria-label='Why Auctm - Background Element Right' />
        <Container>
          <SectionContainer className='reverse'>
            {/* <Parallax y={['-20px', '20px']}> */}
              <ImgContainer
                data-sal='slide-left'
                data-sal-delay='0'
                data-sal-duration='400'
                data-sal-easing='ease-in-out'
                data-sal-mobile-disabled='true'
              >
                <img className='right' src={IllustrationRightTwo} alt='Why Auctm - Illustration Dashboard' aria-label='Why Auctm - Illustration Dashboard' />
              </ImgContainer>
            {/* </Parallax> */}
            <TextContainer
              data-sal='slide-right'
              data-sal-delay='0'
              data-sal-duration='400'
              data-sal-easing='ease-in-out'
              data-sal-mobile-disabled='true'
            >
              {
                featureCauseTwo.featureCauseHighlight
                  ? <h3>{featureCauseTwo.featureCauseHighlight}</h3> : null
              }
              {
                featureCauseTwo.featureCauseText.map((text, idx) => <p key={idx}>{text}</p>)
              }
            </TextContainer>
          </SectionContainer>
        </Container>
      </Section>
      <Section className='position-relative'>
        <BGLeftSecond src={BGLeftThree} alt='Why Auctm - Background Element Left' aria-label='Why Auctm - Background Element Left' />
        <Container>
          <SectionContainer>
            {/* <Parallax y={['-20px', '20px']}> */}
              <ImgContainer
                data-sal='slide-right'
                data-sal-delay='0'
                data-sal-duration='400'
                data-sal-easing='ease-in-out'
                data-sal-mobile-disabled='true'
              >
                <img src={IllustrationLeftThree} alt='Why Auctm - Illustration Rocket' aria-label='Why Auctm - Illustration Rocket' />
              </ImgContainer>
            {/* </Parallax> */}
            <TextContainer
              data-sal='slide-left'
              data-sal-delay='0'
              data-sal-duration='400'
              data-sal-easing='ease-in-out'
              data-sal-mobile-disabled='true'
            >
              {
                featureCauseThree.featureCauseHighlight
                  ? <h3>{featureCauseThree.featureCauseHighlight}</h3> : null
              }
              {
                featureCauseThree.featureCauseText.map((text, idx) => <p key={idx}>{text}</p>)
              }
            </TextContainer>
          </SectionContainer>
        </Container>
      </Section>
    </MainContainer>
  )
}

FeaturesSection.propTypes = {
  data: PropTypes.shape({
    featureCauseOne: PropTypes.any,
    featureCauseTwo: PropTypes.any,
    featureCauseThree: PropTypes.any
  })
}
