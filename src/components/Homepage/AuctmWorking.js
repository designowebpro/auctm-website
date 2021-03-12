import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import HeadingsContainer from 'components/_ui/HeadingsContainer'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const MainContainer = styled.div`
    padding: 8rem 0;
    text-align: center;

    @media(max-width: ${dimensions.tablet}px) {
        padding: 8rem 0;
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

const Video = styled.video`
    width: 100%;
    margin-top: 2rem;
    padding 0 2rem;
    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const VideoMobile = styled.video`
    display: none;
    text-align: center;
    width: 100%;
    margin-top: 2rem;
    @media(max-width: ${dimensions.mobile}px) {
        display: block;
    }
`

export default function AuctmWorking ({ data }) {
  const { auctmWorkingSectionTitle, auctmWorkingSectionSubTitle, auctmWorkingDesktopPoster, auctmWorkingDesktopVideo, auctmWorkingMobilePoster, auctmWorkingMobileVideo } = data

  return (
    <Section className='bg--light-blue'>
      <Container>
        <MainContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <HeadingsContainer>
            <h1>{auctmWorkingSectionTitle}</h1>
            <p>{auctmWorkingSectionSubTitle}</p>
          </HeadingsContainer>
          <Video
            src={auctmWorkingDesktopVideo}
            poster={auctmWorkingDesktopPoster}
            data-src={auctmWorkingDesktopVideo}
            muted
            loop
            playsInline
            autoPlay
          />
          <VideoMobile
            src={auctmWorkingMobileVideo}
            poster={auctmWorkingMobilePoster}
            data-src={auctmWorkingMobileVideo}
            muted
            loop
            playsInline
            autoPlay
          />
        </MainContainer>
      </Container>
    </Section>
  )
}

AuctmWorking.propTypes = {
  data: PropTypes.shape({
    auctmWorkingSectionTitle: PropTypes.string,
    auctmWorkingSectionSubTitle: PropTypes.string,
    auctmWorkingDesktopPoster: PropTypes.string,
    auctmWorkingDesktopVideo: PropTypes.string,
    auctmWorkingMobilePoster: PropTypes.string,
    auctmWorkingMobileVideo: PropTypes.string
  })
}
