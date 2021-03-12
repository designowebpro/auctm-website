import React, { useState } from 'react'
import styled from '@emotion/styled'
// import { Parallax } from 'react-scroll-parallax'
import Button from 'components/_ui/Button'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import FeatureHighlight from './FeatureHightlight'
import FeatureHighlightsCarousel from './FeatureHighlightsCarousel'
import { BGCirleProductPage } from './BGCircle'
import { BGRectsProductPage } from './BGTwoRects'

const FeatureDetailsContainer = styled.div`
    // padding: 1rem 0;
    text-align: initial;

    @media(max-width: ${dimensions.laptop}px) {
        height: auto;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const FeatureDetailsContainerMobile = styled.div`
    display: none;
    text-align: left;
    margin-top: 6rem;

    &:first-of-type {
      margin-top: 2rem;
    }

    & > h6 {
        font-weight: bold;
    }

    & > p {
        margin-top: 3rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: block;
    }

    @media(max-width: 320px) {
        margin-top: 10rem;
    }
`

const FeatureInfo = styled.div`
    display: flex;
    align-items: start;

    & > button {
        margin: 0 auto;
    }

    @media(max-width: ${dimensions.laptop}px) {
        flex-direction: column;
    }

    @media(max-width: ${dimensions.mobile}px) {
      align-items: center;
    }
`

const FeatureImgContainer = styled.div`
    width: 60%;
    padding: 2rem 2rem 2rem 0;
    position: relative;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 2rem 0;
        width: 100%;
    }
`

const FeatureHighlightsContainer = styled.div`
    width: 40%;
    padding: 2rem 0 2rem 2rem;
    min-height: 50rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 2rem 0;
        width: 100%;
    }
`

const Img = styled.img`
    width: 100%;
    z-index: 10;
    border-radius: 10px;
    box-shadow: 10px 20px 20px 5px var(--color-primary-10);
`

export default function FeatureDetails ({ data }) {
  const [activeHighlight, setActiveHightlight] = useState(0)

  const { featureDescription, featureCtaText, featureHighlights, featureImage, featureCtaLink, featureCtaId } = data

  return (
    <FeatureDetailsContainer>
      <p>{featureDescription}</p>
      <FeatureInfo>
        <FeatureImgContainer>
          {/* <Parallax y={['-20px', '30px']}>
            <Img src={featureImage} alt={featureDescription} aria-label={featureDescription} />
          </Parallax> */}
          <BGCirleProductPage />
          <BGRectsProductPage />
        </FeatureImgContainer>
        <FeatureHighlightsContainer>
          {/* <Parallax y={['-20px', '30px']}>
            {
              featureHighlights.map((item, idx) => {
                return <FeatureHighlight
                  data={item}
                  key={idx}
                  active={idx === activeHighlight}
                  onClick={() => setActiveHightlight(idx)}
                       />
              })
            }
            <Button id={featureCtaId} type='link' to={featureCtaLink} target='_blank' rel='noopener noreferrer'>{featureCtaText}</Button>
          </Parallax>
         */}
        </FeatureHighlightsContainer>
      </FeatureInfo>
    </FeatureDetailsContainer>
  )
}

export function FeatureDetailsCard ({ data }) {
  const { featureDescription, featureHighlights, featureTitle, featureImage, featuresQueryParamTitle } = data

  return (
    <FeatureDetailsContainerMobile
      data-sal='slide-up'
      data-sal-delay='0'
      data-sal-duration='400'
      data-sal-easing='ease-in-out'
      id={featuresQueryParamTitle}
    >
      <h6 className='accent__line--left'>{featureTitle}</h6>
      <p>{featureDescription}</p>
      <FeatureInfo>
        <FeatureImgContainer>
          <Parallax y={['-40px', '10px']}>
            <Img src={featureImage} alt={featureDescription} aria-label={featureDescription} />
          </Parallax>
          <BGCirleProductPage />
          <BGRectsProductPage />
        </FeatureImgContainer>
        <FeatureHighlightsCarousel data={featureHighlights} />
        {/* <Button type='link' to={featureCtaLink} target='_blank' rel='noopener noreferrer'>{featureCtaText}</Button> */}
      </FeatureInfo>
    </FeatureDetailsContainerMobile>
  )
}

FeatureDetails.propTypes = {
  data: PropTypes.shape({
    featureDescription: PropTypes.string.isRequired,
    featureCtaText: PropTypes.string.isRequired,
    featureImage: PropTypes.string.isRequired,
    featureCtaLink: PropTypes.string.isRequired,
    featureCtaId: PropTypes.string.isRequired,
    featureHighlights: PropTypes.array
  })
}

FeatureDetailsCard.propTypes = {
  data: PropTypes.shape({
    featureDescription: PropTypes.string.isRequired,
    featureCtaText: PropTypes.string.isRequired,
    featureCtaLink: PropTypes.string.isRequired,
    featureImage: PropTypes.string.isRequired,
    featureTitle: PropTypes.string.isRequired,
    featuresQueryParamTitle: PropTypes.string.isRequired,
    featureHighlights: PropTypes.array
  })
}
