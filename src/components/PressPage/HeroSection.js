import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const HeroContainer = styled.div`
    padding: 5rem 0 0 0;
    text-align: center;
    height: 60rem;

    & h1 {
      font-size: 4.5rem;
    }

    & h2 {
      font-size: 2.5rem;
    }

    @media(min-width: ${dimensions.desktop}px) {
        padding: 5rem 0 0 0;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 0 0 0;
        height: 60rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 5rem 0 0 0;
        height: 60rem;

        & h1 {
          font-size: 3.5rem;
        }

        & h2 {
          font-size: 2rem;
        }
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 4rem 0 0 0;
        height: 20rem;

        & h1 {
          font-size: 2.5rem;
        }

        & h2 {
          font-size: 1.6rem;
        }
    }
`

const HeadingContainer = styled(HeadingsContainer)`
    padding: 5rem 15rem;

    & h1 {
      margin-top: 0;
      margin-bottom: 1rem;
    }

    & p {
      margin-top: 0;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 5rem 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 0;
    }
`

function HeroSection ({ data: { heroSectionTitle } }) {
  const title = heroSectionTitle.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')

  return (
    <Section style={{ position: 'relative' }}>
      <Container
        data-sal='slide-up'
        data-sal-delay='0'
        data-sal-duration='400'
        data-sal-easing='ease'
      >
        <HeroContainer>
          <HeadingContainer>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
          </HeadingContainer>
        </HeroContainer>
      </Container>
    </Section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    heroSectionTitle: PropTypes.string,
    heroSectionSubTitle: PropTypes.string,
    heroSectionCtaText: PropTypes.string,
    heroSectionCtaLink: PropTypes.string
  })
}

export default HeroSection
