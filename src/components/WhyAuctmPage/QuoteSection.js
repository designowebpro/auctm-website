import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 12rem 5rem;
    text-align: center;

    & h3 {
        margin: 0;
        color: var(--color-primary);
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 10rem 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 0;
        padding: 8rem 2rem;
    }
`

function QuoteSection ({ data }) {
  const { bannerSectionText } = data

  return (
    <Section className='bg--light-blue'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          {
            bannerSectionText.map((text, idx) => {
              const title = text.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')
              return <h3 key={idx} dangerouslySetInnerHTML={{ __html: title }} />
            })
          }
        </MainContainer>
      </Container>
    </Section>
  )
}

QuoteSection.propTypes = {
  data: PropTypes.shape({
    bannerSectionText: PropTypes.array
  })
}

export default QuoteSection
