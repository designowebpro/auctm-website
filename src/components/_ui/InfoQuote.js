import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const CardContainer = styled.div`
    text-align: center;
    margin: 4rem 0;

    & h3 {
        margin: 0;
    }

    & p {
        color: var(--color-accent);
        font-size: 1.6rem;
        display: inline-block;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: -3rem;
            width: 1rem;
            height: 2px;
            background-color: var(--color-accent);
        }

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            right: -3rem;
            width: 1rem;
            height: 2px;
            background-color: var(--color-accent);
        }
    }

    @media(max-width: ${dimensions.mobile}px) {
      padding: 1rem 2rem;
    }
`

export default function InfoQuote ({ text: allTexts, by }) {
  return (
    <CardContainer>
      {
        allTexts.map((text, idx) => <h3 key={idx}>{text}</h3>)
      }
      <p>{by}</p>
    </CardContainer>
  )
}

InfoQuote.propTypes = {
  text: PropTypes.array,
  by: PropTypes.string
}
