import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import QuestionsList from 'components/_ui/QuestionsList'
import { BGShapeLeftPricing } from 'components/_ui/BGShapeFBLeft'
import { BGShapeRightPricing } from 'components/_ui/BGShapeFBRight'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 5rem 6rem 4rem 6rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 4rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 4rem 6rem 4rem 6rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 6rem 4rem 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0;
        margin-top: 0;
        padding-bottom: 2rem;
    }
`

const HeadingContainer = styled.div`
    padding: 0 15rem;

    @media(max-width: ${dimensions.laptop}px) {
        padding: 0 10rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 0 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        text-align: left;
        padding: 5rem 0 0 0;
    }
`

const QuestionsListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;

    @media(max-width: ${dimensions.mobile}px) {
        flex-direction: column;
    }
`

export default function FaqSection ({ data: { questionsData } }) {
  return (
    <Section style={{ position: 'relative' }}>
      <BGShapeLeftPricing />
      <BGShapeRightPricing />
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
          data-sal-mobile-disabled='true'
        >
          <HeadingContainer>
            <h1>Frequently Asked Questions</h1>
          </HeadingContainer>
          <QuestionsListContainer>
            {
              questionsData.map((questionData, idx) => <QuestionsList key={idx} data={questionData} />)
            }
          </QuestionsListContainer>
        </MainContainer>
      </Container>
    </Section>
  )
}

FaqSection.propTypes = {
  data: PropTypes.shape({
    questionsData: PropTypes.array
  })
}
