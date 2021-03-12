import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import TestimonialCarousel from 'components/_ui/TestimonialCarousel'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 5rem 0 10rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 8rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 2rem 0 10rem 0;
    }

    & h1 {
        margin-bottom: 0;
    }

    & > h2 {
        margin-top: 1rem;
    }
`

export default function Tesimonials ({ data }) {
  const { testimonialsSectionTitle, testimonialsSectionSubTitle, testimonials } = data

  return (
    <Section className='bg--light-blue'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingsContainer>
            <h1>{testimonialsSectionTitle}</h1>
            <h2>{testimonialsSectionSubTitle}</h2>
          </HeadingsContainer>
          <TestimonialCarousel data={testimonials} />
        </MainContainer>
      </Container>
    </Section>
  )
}

Tesimonials.propTypes = {
  data: PropTypes.shape({
    testimonialsSectionTitle: PropTypes.string,
    testimonialsSectionSubTitle: PropTypes.string,
    testimonials: PropTypes.array
  })
}
