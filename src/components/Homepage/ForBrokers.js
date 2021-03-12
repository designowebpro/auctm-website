import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import Button from 'components/_ui/Button'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import FeaturePlayer from '../FeaturePlayer'
import BGShapeFBLeft from 'components/_ui/BGShapeFBLeft'
import BGShapeFBRight from 'components/_ui/BGShapeFBRight'
import BGCircle from 'components/_ui/BGCircle'
import BGTwoRects from 'components/_ui/BGTwoRects'

const MainContainer = styled.div`
    padding: 8rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 8rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 4rem 0 8rem 0;
    }

    & h1 {
        margin-bottom: 0;
    }

    & > h2 {
        margin-top: 1rem;
    }
`

const ButtonStyled = styled(Button)`
    margin-top: 10rem;

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 2rem;
    }

`

export default function ForBrokers ({ data }) {
  const { forBrokersSectionTitle, forBrokersSectionSubTitle, forBrokersFeatures, forBrokersCtaText, forBrokersCtaId } = data

  return (
    <Section style={{ position: 'relative' }}>
      <BGShapeFBLeft />
      <BGShapeFBRight />
      <BGCircle />
      <BGTwoRects />
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease'
          data-sal-mobile-disabled='true'
        >
          <h1>{forBrokersSectionTitle}</h1>
          <h2>{forBrokersSectionSubTitle}</h2>
          <FeaturePlayer data={forBrokersFeatures} />
          <ButtonStyled id={forBrokersCtaId} type='link' to='#demo' target='_blank' rel='noopener noreferrer' aria-label='For Brokers, Call to Action'>{forBrokersCtaText}</ButtonStyled>
        </MainContainer>
      </Container>
    </Section>
  )
}

ForBrokers.propTypes = {
  data: PropTypes.shape({
    forBrokersSectionTitle: PropTypes.string,
    forBrokersSectionSubTitle: PropTypes.string,
    forBrokersCtaText: PropTypes.string,
    forBrokersCtaId: PropTypes.string,
    forBrokersCtaLink: PropTypes.string,
    forBrokersFeatures: PropTypes.array
  })
}
