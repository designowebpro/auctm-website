import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import Button from 'components/_ui/Button'

const MainContainer = styled.div`
    padding: 10rem 5rem;
    text-align: center;

    & h3 {
        margin: 0;
        color: white;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 10rem 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 0;
        padding: 8rem 0;
    }
`

const CTAButton = styled(Button)`
    margin-top: 5rem;
    box-shadow: none;

    &:hover {
      box-shadow: none;
    }

    & img {
        width: auto;
    }

    & img {
        @media(max-width: ${dimensions.laptop}px) {
            width: 100%;
        }
    }
`

function CTASection ({ data }) {
  // eslint-disable-next-line no-unused-vars
  const { ctaSectionText, ctaSectionCtaText, ctaSectionCtaLink, ctaSectionCtaId } = data

  return (
    <Section className='bg--gradient'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          {
            ctaSectionText.map((text, idx) => {
              const title = text.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')
              return <h3 key={idx} dangerouslySetInnerHTML={{ __html: title }} />
            })
          }
          <CTAButton id={ctaSectionCtaId} type='link' to='#demo' target='_blank' rel='noopener noreferrer'>{ctaSectionCtaText}</CTAButton>
        </MainContainer>
      </Container>
    </Section>
  )
}

CTASection.propTypes = {
  data: PropTypes.shape({
    ctaSectionText: PropTypes.string,
    ctaSectionCtaText: PropTypes.string,
    ctaSectionCtaId: PropTypes.string,
    ctaSectionCtaLink: PropTypes.string
  })
}

export default CTASection
