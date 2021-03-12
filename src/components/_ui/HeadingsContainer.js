import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const HeadingContainer = styled.div`
    padding: 0 15rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 15rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 1.5rem;
    }
`

export default function HeadingsContainer ({ children, className }) {
  return (
    <HeadingContainer className={className}>
      {children}
    </HeadingContainer>
  )
}

HeadingsContainer.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

const HeadingContainerPolicy = styled.div`
    padding: 0 10rem;
    text-align: center;

    & h1 {
      font-size: 5rem;
      color: white;
  
      @media(max-width: ${dimensions.tablet}px) {
        font-size: 4rem;
      }
  
      @media(max-width: ${dimensions.mobile}px) {
        font-size: 3rem;
      }
    }

    @media(min-width: ${dimensions.desktop}px) {
      padding: 0 15rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 1.5rem;
    }
`

export const HeadingsContainerPolicyPages = ({ children, className }) => {
  return (
    <HeadingContainerPolicy className={className}>
      {children}
    </HeadingContainerPolicy>
  )
}

HeadingsContainerPolicyPages.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}
