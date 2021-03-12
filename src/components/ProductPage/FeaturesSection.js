import React, { useState, useEffect } from 'react'
import Section from 'components/_ui/Section'
import Button from 'components/_ui/Button'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import FeatureDetails, { FeatureDetailsCard } from 'components/_ui/FeatureDetails'
import { BGShapeLeftProduct } from 'components/_ui/BGShapeFBLeft.js'
import { BGShapeRightProduct } from 'components/_ui/BGShapeFBRight.js'
import { useQueryParam, StringParam } from 'use-query-params'

const MainContainer = styled.div`
    padding: 5rem 14rem 0 14rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 2rem;
    }

    @media(max-width: 320px) {
      padding: 0;
  }
`

const HeadingContainer = styled.div`
    padding: 0 15rem;

    & h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 5rem 0 0 0;
    }
`

const FeaturesList = styled.div`
    display: flex;

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const FeaturesListItem = styled.div`
    padding: 1.5rem 2.5rem;
    text-align: center;
    flex: 1;
    cursor: pointer;
    transition: all 200ms;
    border-top-right-radius: 1.5rem;
    border-top-left-radius: 1.5rem;
    border-bottom: 3px solid var(--color-primary-20);
    position: relative;

    @media(min-width: ${dimensions.desktop}px) {
      padding: 2.5rem 3rem;
    }

    & h3 {
        font-weight: bold;
        font-size: 2rem;
        color: var(--text-dark);
        margin: 0;
    }

    &:after {
        content: "";
        width: 8px;
        height: 8px;
        background-color: var(--light-blue);
        border-right: 3px solid var(--color-primary);
        border-bottom: 3px solid var(--color-primary);
        border-top: 3px solid transparent;
        border-left: 3px solid transparent;
        transform: rotate(45deg) translateX(50%);
        position: absolute;
        bottom: -2px;
        right: 50%;
        opacity: 0;
        transition: all 150ms;
    }

    &.active {
        background-color: var(--light-blue);
        border-bottom: 3px solid var(--color-primary);
        color: var(--color-primary);
    }

    &.active {
        &:after {
            opacity: 1;
        }
    }

    &:hover {
        background-color: var(--light-blue);
        border-bottom: 3px solid var(--color-primary);
        color: var(--color-primary);

        &:after {
            opacity: 1;
        }
    }
`

const FeaturesMobile = styled.div`
    display: none;

    @media(max-width: ${dimensions.mobile}px) {
      display: block;
    }
`

export default function ProductFeatures ({ data }) {
  const { dynamicFeaturesTitle, dynamicFeaturesSubTitle, dynamicFeatures, dynamicFeaturesMobileCtaText, dynamicFeaturesMobileCtaLink, dynamicFeaturesMobileCtaId } = data
  const [activeFeature, setActiveFeature] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [queryFeature, setQueryFeature] = useQueryParam('feature', StringParam)

  const setFeatureActive = (id) => {
    setActiveFeature(id)
    // parked for later
    // setQueryFeature(dynamicFeatures[id].featuresQueryParamTitle);
  }

  useEffect(() => {
    dynamicFeatures.forEach((dynamicFeature, idx) => {
      if (dynamicFeature.featuresQueryParamTitle === queryFeature) {
        setActiveFeature(idx)
      }
    })
  }, [])

  return (
    <Section style={{ position: 'relative' }} id='df'>
      <BGShapeLeftProduct />
      <BGShapeRightProduct />
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
          data-sal-mobile-disabled='true'
        >
          <HeadingContainer
            data-sal='slide-up'
            data-sal-delay='0'
            data-sal-duration='400'
            data-sal-easing='ease-in-out'
          >
            <h1>{dynamicFeaturesTitle}</h1>
            <p>{dynamicFeaturesSubTitle}</p>
          </HeadingContainer>
          <div>
            {/* Desktop View */}
            {/* Features List */}
            <FeaturesList>
              {
                dynamicFeatures.map((item, idx) => {
                  return <FeaturesListItem onClick={() => setFeatureActive(idx)} key={idx} className={idx === activeFeature ? 'active' : null}>
                    <h3>{item.featureTitle}</h3>
                         </FeaturesListItem>
                })
              }
            </FeaturesList>
            {/* Feature Details */}
            <FeatureDetails data={dynamicFeatures[activeFeature]} />
            {/* Mobile View */}
            <FeaturesMobile>
              {
                dynamicFeatures.map((item, idx) => <FeatureDetailsCard data={item} key={idx} />)
              }
              <Button id={dynamicFeaturesMobileCtaId} type='link' to={dynamicFeaturesMobileCtaLink} target='_blank' rel='noopener noreferrer'>{dynamicFeaturesMobileCtaText}</Button>
            </FeaturesMobile>
          </div>
        </MainContainer>
      </Container>
    </Section>
  )
}

ProductFeatures.propTypes = {
  data: PropTypes.shape({
    dynamicFeaturesTitle: PropTypes.string.isRequired,
    dynamicFeaturesSubTitle: PropTypes.string.isRequired,
    dynamicFeaturesMobileCtaText: PropTypes.string.isRequired,
    dynamicFeaturesMobileCtaId: PropTypes.string.isRequired,
    dynamicFeaturesMobileCtaLink: PropTypes.string.isRequired,
    dynamicFeatures: PropTypes.array
  })
}
