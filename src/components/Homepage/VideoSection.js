import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import WistiaVideo from 'components/_ui/WistiaEmbed'
import { useInView } from 'react-intersection-observer'

const MainContainer = styled.div`
    padding: 8rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 15rem 0;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 4rem 0 8rem 0;
    }

    & h1 {
        margin-bottom: 0;
    }

    & > p {
        margin-top: 1rem;
    }
`

const VideoContainer = styled.div`
    width: 60%;
    margin: 0 auto;

    @media(max-width: ${dimensions.tablet}px) {
      width: auto;
    }
`

const plugins = {}

export default function ForBrokers ({ data }) {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const { videoSectionTitle } = data
  return (
    <Section style={{ position: 'relative' }}>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingsContainer className='margin-bottom-5'>
            <h1>{videoSectionTitle}</h1>
            {/* <p>{videoSectionSubTitle}</p> */}
          </HeadingsContainer>
          <VideoContainer ref={ref}>
            {
              inView
                ? <WistiaVideo hashedId='qhhpuo2rho' fullscreenButton={false} playerColor='#FF838D' plugin={plugins} /> : null
            }
          </VideoContainer>
        </MainContainer>
      </Container>
    </Section>
  )
}

ForBrokers.propTypes = {
  data: PropTypes.shape({
    videoSectionTitle: PropTypes.string,
    videoSectionSubTitle: PropTypes.string
  })
}
