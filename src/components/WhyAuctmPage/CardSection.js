import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import InfoQuote from 'components/_ui/InfoQuote'
import CompetitionIllustration from 'images/why-auctm-comp.svg'
import WorkingIllustration from 'images/why-auctm-working.svg'

const MainContainer = styled.div`
    padding: 5rem 10rem 0 10rem;
    margin-top: 25rem;

    @media(min-width: ${dimensions.desktop}px) {
      margin-top: 35rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
      margin-top: 15rem;
      padding: 5rem 10rem 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        margin-top: 70rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 40rem;
        padding: 5rem 0 0 0;
    }
`

const QuoteContainer = styled.div`
    margin: 10rem 0;
    text-align: center;

    & img {
        width: 70rem;
    }

    & img {
        @media(max-width: ${dimensions.laptop}px) {
            width: 100%;
        }
    }
`

function CardSection ({ data }) {
  const { factSectionTextOne, factSectionFromOne, factSectionTextTwo, factSectionFromTwo } = data

  return (
    <Section style={{ position: 'relative' }}>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <QuoteContainer>
            <InfoQuote text={factSectionTextTwo} by={factSectionFromTwo} />
            <img src={CompetitionIllustration} alt='Why Auctm - Competition Illustration' aria-label='Why Auctm - Competition Illustration' />
          </QuoteContainer>
          <QuoteContainer>
            <InfoQuote text={factSectionTextOne} by={factSectionFromOne} />
            <img src={WorkingIllustration} alt='Why Auctm - Competition Illustration' aria-label='Why Auctm - Competition Illustration' />
          </QuoteContainer>
        </MainContainer>
      </Container>
    </Section>
  )
}

CardSection.propTypes = {
  data: PropTypes.shape({
    cardsData: PropTypes.array,
    factSectionTextOne: PropTypes.array,
    factSectionFromOne: PropTypes.string,
    factSectionTextTwo: PropTypes.array,
    factSectionFromTwo: PropTypes.string
  })
}

export default CardSection
