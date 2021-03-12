import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import PricingCard from 'components/_ui/PricingCard'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import PricingBG from 'components/_ui/PricingBG'
// import { Parallax } from 'react-scroll-parallax'

const HeroContainer = styled.div`
    padding: 0 12rem 0 12rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(min-width: ${dimensions.desktop}px) {
      padding: 5rem 12rem 0 12rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 0;
    }
`

const HeadingContainer = styled(HeadingsContainer)`
    padding: 0 15rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 1.5rem;
    }
`

const HeroImgContainer = styled.div`
    margin-top: 2rem;
    z-index: 5;

    @media(min-width: ${dimensions.desktop}px) {
      margin-top: 5rem;
    }
`

function HeroSection ({ data: { heroSectionTitle, pricingCardFeatures, pricingCardCtaText, pricingCardCtaId, pricingCardCtaLink, pricingCardTextLabel } }) {
  const title = heroSectionTitle.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')

  return (
    <Section style={{ position: 'relative' }}>
      <PricingBG />
      <Container>
        <HeroContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingContainer>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </HeadingContainer>
          <HeroImgContainer>
            {/* <Parallax y={['-40px', '40px']}> */}
              <PricingCard
                features={pricingCardFeatures}
                pricingCardCtaText={pricingCardCtaText}
                pricingCardCtaId={pricingCardCtaId}
                pricingCardCtaLink={pricingCardCtaLink}
                pricingCardTextLabel={pricingCardTextLabel}
              />
            {/* </Parallax> */}
          </HeroImgContainer>
        </HeroContainer>
      </Container>
    </Section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    heroSectionTitle: PropTypes.string,
    pricingCardCtaText: PropTypes.string,
    pricingCardCtaId: PropTypes.string,
    pricingCardCtaLink: PropTypes.string,
    pricingCardTextLabel: PropTypes.string,
    pricingCardFeatures: PropTypes.array
  })
}

export default HeroSection
