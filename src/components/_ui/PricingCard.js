import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PricingIcon from 'images/pricing-card-icon.svg'
import TickIcon from 'images/svg-tick.svg'
import Button from './Button'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
    padding: 5rem 4rem 5rem 4rem;
    border-radius: 1.5rem;
    background-color: var(--color-primary);
    box-shadow: 5px 10px 20px 5px var(--color-primary-20);
    max-width: 44rem;

    & > img {
        height: 10rem;
    }

    & > button {
        width: 100%;
        box-shadow: none;
    }

    & > p {
      color: white;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 3rem 2rem 3rem 2rem;
        max-width: 33rem;
    }

    @media(max-width: 320px) {
      padding: 3rem 2rem 3rem 2rem;
      max-width: 26.5rem;
    }
`

const FeatureList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 4rem 0;
`

const FeatureListItem = styled.div`
    color: white;
    font-size: 2rem;
    margin: 1rem 0;
    display: flex;
    align-items: center;

    @media(max-width: ${dimensions.mobile}px) {
        font-size: 1.6rem;
    }

    @media(max-width: 320px) {
        font-size: 1.2rem;
    }

    & > img {
        margin-right: 3rem;
        height: 3rem;

        @media(max-width: ${dimensions.mobile}px) {
            height: 2rem;
        }
    }
`

const CTAButton = styled(Button)`
    box-shadow: none;
    width: 100%;

    &:hover {
      box-shadow: none;
    }
`

export default function PricingCard ({ features, pricingCardCtaText, pricingCardCtaLink, pricingCardTextLabel, pricingCardCtaId }) {
  return (
    <CardContainer>
      <img src={PricingIcon} alt='Pricing Illustration' aria-label='Pricing Illustration' />
      <FeatureList>
        {
          features.map((feature, idx) => {
            return <FeatureListItem key={idx}>
              <img src={TickIcon} alt='Tick Icon' aria-label='Tick Icon' />
              {feature}
                   </FeatureListItem>
          })
        }
      </FeatureList>
      <CTAButton id={pricingCardCtaId} type='link' to={pricingCardCtaLink} target='_blank' rel='noopener noreferrer'>{pricingCardCtaText}</CTAButton>
      <p>{pricingCardTextLabel}</p>
    </CardContainer>
  )
}

PricingCard.propTypes = {
  features: PropTypes.array,
  pricingCardCtaText: PropTypes.string,
  pricingCardCtaLink: PropTypes.string,
  pricingCardCtaId: PropTypes.string,
  pricingCardTextLabel: PropTypes.string
}
