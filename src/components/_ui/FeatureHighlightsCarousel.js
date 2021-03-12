import React from 'react'
import { Carousel as CarouselOG } from 'react-responsive-carousel'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const CarouselContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 4rem auto 4rem auto;
    position: relative;
    width: 28rem;
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

const FeatureHighlightCard = styled.div`
    width: 80%;
    height: 100%;
    background-color: var(--light-blue);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem;
    transition: all 150ms;
    text-align: left;
    margin: 0 auto;
 `

const FeatureIconWrapper = styled.div`
    width: 4rem;
`

const FeatureInfoDescription = styled.div`
    margin-top: 2rem;

    & p {
        line-height: 1.5;
    }
`

const FeatureTitle = styled.h6`
    margin-top: 2rem;
    font-weight: bold;
    text-align: left;
`

const renderIndicator = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <IndicatorSelected
        // style={{ ...indicatorStyles, background: '#FF0000' }}
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    )
  }
  return (
    <Indicator
      // style={indicatorStyles}
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

export default function FeatureHighlightsCarousel ({ data }) {
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
          data.map((item, idx) => {
            return <FeatureHighlightCard key={idx}>
              <FeatureIconWrapper>
                <img src={item.highlightIcon} alt='Feature Icon' aria-label='Feature Icon' className='icon' />
              </FeatureIconWrapper>
              <FeatureTitle className='accent__line--left'>
                {item.highlightTitle}
              </FeatureTitle>
              <FeatureInfoDescription>
                <p>{item.highlightDescription}</p>
              </FeatureInfoDescription>
                   </FeatureHighlightCard>
          })
        }
      </Carousel>
    </CarouselContainer>
  )
}

FeatureHighlightsCarousel.propTypes = {
  data: PropTypes.array
}
