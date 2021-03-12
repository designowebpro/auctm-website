import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import StaticFeaturesCarousel from 'components/_ui/StaticFeaturesCarousel'
import StaticFeatureCard from 'components/_ui/StaticFeatureCard'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
// import { Parallax } from 'react-scroll-parallax'

const MainContainer = styled.div`
    padding: 5rem 8rem 10rem 8rem;
    text-align: center;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 2rem 0 2rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 2rem;
    }

    @media(max-width: 320px) {
        padding: 4rem 0;
    }
`

const HeadingContainer = styled.div`
    padding: 0 15rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 5rem 0 0 0;
    }
`

const FeaturesList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 5rem;


    @media(max-width: ${dimensions.laptop}px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

export default function StaticProductFeatures ({ data }) {
  const { staticFeaturesTitle, staticFeatures } = data

  return (
    <Section style={{ position: 'relative' }} className='bg--light-blue margin-top-5'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingContainer>
            <h1>{staticFeaturesTitle}</h1>
            {/* <p>{staticFeaturesSubTitle}</p> */}
          </HeadingContainer>
          {/* <Parallax y={['-30px', '30px']}> */}
            <FeaturesList>
              {
                staticFeatures.map((item, idx) => <StaticFeatureCard key={idx} data={item} />)
              }
            </FeaturesList>
          {/* </Parallax>
          <Parallax y={['-30px', '30px']}> */}
            <StaticFeaturesCarousel data={staticFeatures} />
          {/* </Parallax> */}
        </MainContainer>
      </Container>
    </Section>
  )
}

StaticProductFeatures.propTypes = {
  data: PropTypes.shape({
    staticFeaturesTitle: PropTypes.string.isRequired,
    staticFeaturesSubTitle: PropTypes.string.isRequired,
    staticFeatures: PropTypes.array
  })
}
