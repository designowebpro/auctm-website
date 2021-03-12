import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import HubspotMeetingEmbed from 'components/_ui/HubspotMeetingEmbed'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 4rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 8rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 2rem 0 2rem 0;
    }

    & h1 {
        margin-bottom: 0;
    }

    & > p {
        margin-top: 1rem;
    }
`

export default function BookDemo ({ data, showBg = true }) {
  const { bookDemoSectionTitle, bookDemoSectionSubTitle } = data

  return (
    <Section className={showBg ? 'bg--light-blue' : null} id='demo'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingsContainer>
            <h1>{bookDemoSectionTitle}</h1>
            <p>{bookDemoSectionSubTitle}</p>
          </HeadingsContainer>
          <HubspotMeetingEmbed />
        </MainContainer>
      </Container>
    </Section>
  )
}

BookDemo.propTypes = {
  data: PropTypes.shape({
    bookDemoSectionTitle: PropTypes.string,
    bookDemoSectionSubTitle: PropTypes.string
  }),
  showBg: PropTypes.bool
}
