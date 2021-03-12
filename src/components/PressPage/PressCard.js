import React from 'react'
import Section from 'components/_ui/Section'
import WistiaVideo from 'components/_ui/WistiaEmbed'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import Button from 'components/_ui/Button'
import ReactMarkdown from 'react-markdown'
import PropTypes from 'prop-types'

const Container = styled.div`
    margin: 0 auto;
    margin-top: -25rem;
    width: 70rem;
    padding: 5rem 0;
    background-color: white;
    box-shadow: 0px 4px 10px 0px var(--color-primary-20);
    border-radius: 3rem;
    margin-bottom: 10rem;
    position: relative;

    @media(max-width: ${dimensions.tablet}px) {
        width: 60rem;
        margin-top: -30rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 100%;
        padding: 3rem 0;
        margin-top: 0;
        margin-bottom: 0;
    }

    &::after {
      display: none;
      z-index: -1;
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 3rem;
      width: 100%;
      background-color: var(--color-primary);

      @media(max-width: ${dimensions.mobile}px) {
        display: block;
      }
    }

`

const Wrapper = styled.div`
    padding: 0 5rem;

    @media(max-width: ${dimensions.mobile}px) {
      padding: 0 3rem;
    }

    & h4 {
      margin-bottom: 0.5rem;
    }

    & ul {
      padding: 0;
      list-style: none;
    }

    & ul li {
      font-size: 1.8rem;
      text-decoration: underline;
      color: var(--text-light);
    }

    & ul p {
      margin-top: 0.5rem;
    }
`

const QuoteSection = styled.div`
    padding: 2rem 5rem;
    text-align: center;

    @media(max-width: ${dimensions.mobile}px) {
      padding: 3rem;
    }

    & p {
      font-style: italic;
    }

    & span {
      font-size: 1.8rem;
      color: var(--text-light);
    }
`

const VideoWrapper = styled.div`
    border-radius: 3rem;
    padding: 0 5rem;

    @media(max-width: ${dimensions.mobile}px) {
      padding: 0 3rem;
    }
`

const CTAWrapper = styled.div`
    text-align: center;

    & h5 {
      color: var(--text-light);
      margin-bottom: 1.5rem;
    }
`

const plugins = {}

export default function PressCard ({ data }) {
  const { sectionOneData, sectionTwoData, quoteSectionData, quoteSectionBy, quoteSectionCtaHeader, quoteSectionCtaText, quoteSectionCtaLink, quoteSectionCtaId } = data

  return (
    <Section>
      <Container>
        <VideoWrapper>
          <WistiaVideo hashedId='uxzuonodsj' fullscreenButton={false} playerColor='#FF838D' plugin={plugins} />
        </VideoWrapper>
        <Wrapper>
          <ReactMarkdown source={sectionOneData} />
        </Wrapper>
        <QuoteSection className='bg--light-blue'>
          <p>“{quoteSectionData}”</p>
          <span>- {quoteSectionBy}</span>
        </QuoteSection>
        <Wrapper>
          <ReactMarkdown source={sectionTwoData} />
        </Wrapper>
        <CTAWrapper>
          <h5>{quoteSectionCtaHeader}</h5>
          <Button id={quoteSectionCtaId} type='link' to={quoteSectionCtaLink} target='_blank' rel='noopener noreferrer'>{quoteSectionCtaText}</Button>
        </CTAWrapper>
      </Container>
    </Section>
  )
}

PressCard.propTypes = {
  data: PropTypes.shape({
    sectionOneData: PropTypes.string,
    sectionTwoData: PropTypes.string,
    quoteSectionData: PropTypes.string,
    quoteSectionBy: PropTypes.string,
    quoteSectionCtaHeader: PropTypes.string,
    quoteSectionCtaText: PropTypes.string,
    quoteSectionCtaId: PropTypes.string,
    quoteSectionCtaLink: PropTypes.string
  })
}
