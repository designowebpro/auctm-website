import React from 'react'
import styled from '@emotion/styled'
import Question from './Question'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const QuestionsWrapper = styled.div`
    & > h2 {
        text-align: left;
        font-size: 2.4rem;
        color: var(--color-primary);
        font-weight: bold;
        margin-bottom: 5rem;

        @media(max-width: ${dimensions.mobile}px) {
          font-size: 2rem;
        }
    }
`

const QuestionsListWrapper = styled.div`
    & > div:not(:last-child) {
        border-bottom: 1px solid #eee;
    }
`

export default function QuestionsList ({ data: { questionTitle, questions } }) {
  return (
    <QuestionsWrapper
      data-sal='slide-up'
      data-sal-delay='0'
      data-sal-duration='400'
      data-sal-easing='ease-in-out'
    >
      <h2 className='accent__line--left'>{questionTitle}</h2>
      <QuestionsListWrapper>
        {
          questions.map((ques) => <Question key={ques.question} data={ques} />)
        }
      </QuestionsListWrapper>
    </QuestionsWrapper>
  )
}

QuestionsList.propTypes = {
  data: PropTypes.shape({
    questionTitle: PropTypes.string,
    questions: PropTypes.array
  })
}
