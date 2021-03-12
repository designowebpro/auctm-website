import React from 'react'
import { Carousel as CarouselOG } from 'react-responsive-carousel'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import StaticFeatureCard from './StaticFeatureCard'

const CarouselContainer = styled.div`
    display: none;
    justify-content: center;
    margin: 4rem auto 4rem auto;
    position: relative;
    width: 28rem;

    @media(max-width: ${dimensions.mobile}px) {
        display: flex;
    }
`

const Carousel = styled(CarouselOG)`
    width: 100vw;
    margin: 0 auto;
    position: relative;

    .carousel.carousel-slider .control-dots {
        bottom -5rem !important;
    }

    .carousel .slider-wrapper {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
`

const Indicator = styled.li`
    background: var(--color-primary);
    opacity: 0.25;
    width: 1rem;
    height: 1rem;
    display: inline-block;
    margin: 0 8px;
    border-radius: 50%;
`

const IndicatorSelected = styled(Indicator)`
    opacity: 1;
    width: 2rem;
    border-radius: 10px;
`

const renderIndicator = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <IndicatorSelected
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    )
  }
  return (
    <Indicator
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role='button'
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  )
}

export default function StaticFeaturesCarousel ({ data }) {
  return (
    <CarouselContainer>
      <Carousel
        renderIndicator={renderIndicator}
        showArrows={false}
        showStatus={false}
        emulateTouch
        swipeable
      >
        {
          data.map((item, idx) => <StaticFeatureCard key={idx} data={item} />)
        }
      </Carousel>
    </CarouselContainer>
  )
}

StaticFeaturesCarousel.propTypes = {
  data: PropTypes.array
}
