import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
    padding: 3rem 10rem;
    text-align: center;
    border-radius: 1.5rem;
    box-shadow: 0 20px 40px 10px var(--color-primary-10);
    margin: 4rem 0;

    & h2 {
        margin: 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 1rem 2rem;
    }
`

export default function InfoCard ({ children }) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  )
}

InfoCard.propTypes = {
  children: PropTypes.any
}
