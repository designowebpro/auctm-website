import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import Button from 'components/_ui/Button'

const HeroContainer = styled.div`
    padding: 5rem 0 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    // width: 100%;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 0;
    }
`

const HeadingContainer = styled(HeadingsContainer)`
    padding: 0;
    margin-top: 8rem;
    margin-right: 2rem;
    width: 50%;

    & h1 {
      margin: 0;
    }

    @media(min-width: ${dimensions.desktop}px) {
        margin-top: 18rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0;
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 100%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 0;
        margin-right: 0;
    }
`

const ButtonCTA = styled(Button)`
    margin-top: 5rem;

    @media(max-width: ${dimensions.tablet}px) {
      margin-top: 2rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
      margin-top: 0;
    }
`

function HeroSection ({ data: { heroSectionTitle, heroSectionSubTitle, heroSectionCtaText, heroSectionCtaId } }) {
  const title = heroSectionTitle.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')

  return (
    <Section style={{ position: 'relative' }}>
      <Container>
        <HeroContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingContainer>
            <h1 dangerouslySetInnerHTML={{ __html: title }} />
            <h2>{heroSectionSubTitle}</h2>
            <ButtonCTA id={heroSectionCtaId} type='link' to='#demo' target='_blank' rel='noopener noreferrer'>{heroSectionCtaText}</ButtonCTA>
          </HeadingContainer>
        </HeroContainer>
      </Container>
    </Section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    heroSectionTitle: PropTypes.string.isRequired,
    heroSectionSubTitle: PropTypes.string.isRequired,
    heroSectionCtaText: PropTypes.string.isRequired,
    heroSectionCtaId: PropTypes.string.isRequired,
    heroSectionCtaLink: PropTypes.string.isRequired
  })
}

export default HeroSection
