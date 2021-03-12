import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 1rem 0 2rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 8rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 2rem 0;
    }

    & h1 {
      font-size: 3rem;
    }
`

const NumbersContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    margin-top: 4rem;
    padding: 0 10rem;

    @media(max-width: ${dimensions.mobile}px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 0;
    }
`

const NumberItem = styled.div`
    text-align: center;
    width: 24rem;

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 1rem;
    }
    
    & h2 {
        font-size: 5.2rem;
        color: var(--color-primary);
        font-weight: 900;
        position: relative;
        display: inline-block;
        z-index: 10;
        margin-bottom: 1rem;

        @media(max-width: ${dimensions.tablet}px) {
            font-size: 3.5rem;
        }

        &::after {
            content: "";
            position: absolute;
            width: 12rem;
            height: 12rem;
            border-radius: 50%;
            top: -30%;
            left: -8px;
            background-color: var(--color-accent);
            opacity: 0.1;
            z-index: -1;
            animation: pulse 3000ms infinite;

            @media(max-width: ${dimensions.tablet}px) {
                width: 9rem;
                height: 9rem;
            }
        }

        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.1);
            }
            100% {
                transform: scale(1);
            }
        }
    }
`

export default function NumberSection ({ data: { numberSectionTitle, numberSectionNumbers = [] }, showBg = true }) {
  return (
    <Section className={showBg ? 'bg--light-blue' : null}>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease'
        >
          <HeadingContainer>
            <h1>{numberSectionTitle}</h1>
          </HeadingContainer>
          <NumbersContainer>
            {
              numberSectionNumbers.map((item, idx) => {
                return <NumberItem key={idx}>
                  <h2>{item.value}%</h2>
                  <p>{item.text}</p>
                </NumberItem>
              })
            }
          </NumbersContainer>
        </MainContainer>
      </Container>
    </Section>
  )
}

NumberSection.propTypes = {
  data: PropTypes.shape({
    numberSectionTitle: PropTypes.string.isRequired,
    numberSectionNumbers: PropTypes.array.isRequired
  }),
  showBg: PropTypes.bool
}
