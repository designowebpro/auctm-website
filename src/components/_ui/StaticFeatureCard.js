import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const FeaturesListItem = styled.div`
    padding: 5rem 2.5rem 2.5rem 3rem;
    text-align: center;
    flex: 1;
    transition: all 200ms;
    border-radius: 1.5rem;
    position: relative;
    background-color: var(--light-blue);
    margin: 0 1rem;
    box-shadow: 5px 10px 20px 10px var(--color-primary-10);
    display: flex;
    flex-direction: column;

    @media(max-width: ${dimensions.laptop}px) {
        margin-bottom: 2rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        height: 90%;
        width: 80%;
        padding: 3rem 2rem;
        margin: 0 auto;
    }

    & img {
        margin-bottom: 2rem;
        height: 8rem;
    }

    & h6 {
        font-weight: bold;

        @media(max-width: ${dimensions.mobile}px) {
            padding: 0 4rem;
        }

        @media(max-width: 320px) {
          padding: 0 2rem;
        }
    }
`

const StaticFeatureCard = ({ data }) => {
  const { featureIcon, featureTitle, featureDescription } = data
  return <FeaturesListItem>
    <img src={featureIcon} alt='Feature Icon' aria-label='Feature Icon' className='icon' />
    <h6 className='accent__line--center'>{featureTitle}</h6>
    <p>{featureDescription}</p>
         </FeaturesListItem>
}

StaticFeatureCard.propTypes = {
  data: PropTypes.shape({
    featureTitle: PropTypes.string.isRequired,
    featureDescription: PropTypes.string.isRequired,
    featureIcon: PropTypes.string.isRequired
  })
}

export default StaticFeatureCard
