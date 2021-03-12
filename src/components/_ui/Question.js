import React, { useState } from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import chevron from 'images/chevron-down-orange.svg'

const QuestionIcon = styled.div`
    position: relative;
    grid-column: 1 / 2;
    cursor: pointer;
    padding-top: 0.8rem;

    & img {
      width: 1.6rem;

      transform: rotate(${props => props.active ? '180deg' : '0deg'});
    }


    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 

    // &:before {
    //     content: '';
    //     position: absolute;
    //     top: 1.6rem;
    //     left: 30%;
    //     transform: translate(-50%, -50%);
    //     border-radius: 20px;
    //     width: 3px;
    //     height: 1.5rem;
    //     background-color: var(--color-accent);
    // }

    // &:after {
    //     content: '';
    //     position: absolute;
    //     top: 1.6rem;
    //     left: 30%;
    //     transform: translate(-50%, -50%);
    //     border-radius: 20px;
    //     width: 1.5rem;
    //     height: 3px;
    //     background-color: var(--color-accent);
    // }
`

const QuestionText = styled.h3`
    font-size: 2rem;
    font-weight: bold;
    color: var(--text-dark);
    grid-column: 2 / 3;
    text-align: left;
    margin: 0;

    @media(max-width: ${dimensions.mobile}px) {
      font-size: 1.8rem;
    }
`

const QuestionAnswer = styled.p`
    font-size: 1.8rem;
    color: var(--text-light);
    grid-column: 2 / 3;
    text-align: left;
    padding-left: 2rem;
    position: relative;
    margin: 0;
    transition: max-height 200ms ease-out;
    max-height: 0;
    overflow: hidden;
    
    & p {
      margin-top: 0;
    }

    &:before {
        content: '';
        position: absolute;
        top: 1rem;
        left: 0;
        height: 7rem;
        width: 3px;
        border-radius: 20px;
        background-color: var(--color-accent-10);
    }
`

const QuestionWrapper = styled.div`
    display: grid;
    grid-template-columns: 3rem 1fr;
    grid-row-gap: 1rem;
    margin: 1rem 0 1rem 0;

    &.active ${QuestionIcon} {
        &:before {
            display: none;
        }
    }

    &.active ${QuestionAnswer} {
        max-height: 600px;
        transition: max-height 400ms ease-in;
    }

    width: 32rem;

    @media(min-width: ${dimensions.desktop}px) {
        width: 35rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 30rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 35rem;
    }

    @media(max-width: 320px) {
        width: 28rem;
    }
`

export default function Question ({ data: { question, answer } }) {
  const [active, setActive] = useState(false)

  return (
    <QuestionWrapper className={active ? 'active' : null}>
      <QuestionIcon onClick={() => setActive(!active)} active={active}>
        <img src={chevron} alt='Open Question Icon' aria-label='Open Question Icon' />
      </QuestionIcon>
      <QuestionText>
        {question}
      </QuestionText>
      <QuestionAnswer>
        {answer}
      </QuestionAnswer>
    </QuestionWrapper>
  )
}

Question.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string
  })
}
