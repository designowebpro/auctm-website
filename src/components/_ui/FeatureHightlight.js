import React, { useState } from 'react'
import styled from '@emotion/styled'
import chevron from 'images/chevron-down.svg'
import PropTypes from 'prop-types'

const FeatureHightlightContainer = styled.div`
    padding: 2rem;
    background-color: var(--light-blue);
    border-radius: 1.5rem;
    transition: all 150ms;
    display: grid;
    grid-template-columns: 6rem 1fr;
    margin-bottom: 2rem;

    & .icon {
        width: 3rem;
        padding-top: 0.5rem;
    }

    &.active {
        box-shadow: 15px 20px 20px 5px var(--color-primary-10);
    }

    &.active .feature-desc {
        max-height: 600px;
        transition: max-height 400ms ease-in;
    }

    &.active .chevron-icon {
        transform: rotate(180deg);
    }
`

const FeatureIconWrapper = styled.div`
    grid-column: 1 / 2;
`

const FeatureInfoDescription = styled.div`
    grid-column: 2 / 3;
    transition: max-height 200ms ease-out;
    max-height: 0;
    overflow: hidden;
`

const FeatureTitle = styled.p`
    margin: 0;
    font-weight: bold;
    font-size: 1.8rem;
    color: var(--text-dark);
    font-weight: bold;   
    grid-column: 2 / 3;
    display: flex;
    justify-content: space-between;
    transition: all 200ms;
    cursor: pointer;
`

export default function FeatureHightlight ({ data }) {
  const { highlightTitle, highlightDescription, highlightIcon } = data

  const [isActive, setIsActive] = useState(false)

  const setActive = () => {
    setIsActive(!isActive)
  }

  return (
    <FeatureHightlightContainer className={isActive ? 'active' : null} onClick={setActive} id={highlightTitle}>
      <FeatureIconWrapper>
        <img src={highlightIcon} alt='Feature Icon' aria-label='Feature Icon' className='icon' />
      </FeatureIconWrapper>
      <FeatureTitle className={isActive ? 'accent__line--left' : null}>
        {highlightTitle}
        <span><img src={chevron} alt='Chevron Icon' aria-label='Chevron Icon' className='chevron-icon' /></span>
      </FeatureTitle>
      <FeatureInfoDescription className='feature-desc'>
        <p>{highlightDescription}</p>
      </FeatureInfoDescription>
    </FeatureHightlightContainer>
  )
}

FeatureHightlight.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  data: PropTypes.shape({
    highlightTitle: PropTypes.string.isRequired,
    highlightDescription: PropTypes.string.isRequired,
    highlightIcon: PropTypes.string.isRequired
  })
}
