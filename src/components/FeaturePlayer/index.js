import React, { useRef, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import LinkCustom from '../_ui/Link'
// import TextRotator from '../_ui/TextRotator'
import { Parallax } from 'react-scroll-parallax'
import ArrowWhite from 'images/arrow_white.svg'
import { useInView } from 'react-intersection-observer'

const Video = styled.video`
    height: 30rem;
    box-shadow: 10px 10px 20px 0px var(--color-primary-10);
    margin-top: 0;
    position: relative;

    @media(min-width: ${dimensions.desktop}px) {
      height: 40rem;
      margin-top: 3rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        height: 35rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        height: 18rem;
        margin: 0 auto;
        margin-top: 3rem;
    }

    @media(max-width: 320px) {
        height: 16rem;
    }

    &::after {
        content: "";
        position: absolute;
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        top: -5%;
        right: -15%;
        background-color: var(--color-accent);
        opacity: 1;
        z-index: 0;

        @media(max-width: ${dimensions.tablet}px) {
            width: 9rem;
            height: 9rem;
        }
    }
`

const FeatureContainer = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: ${dimensions.laptop}px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media(max-width: ${dimensions.mobile}px) {
        grid-template-columns: 1fr;
    }
`

const FeatureCard = styled.div`
    width: 25rem;
    padding: 1rem 2rem;
    text-align: left;
    border-radius: 15px;
    opacity: 0.7;
    transition: all 300ms;
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 100%;
    cursor: pointer;

    @media(min-width: ${dimensions.desktop}px) {
      width: 28rem;
      padding: 2rem 3rem;
    }

    @media(max-width: ${dimensions.laptop}px) {
        width: auto;
        height: 25rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        height: auto;
        padding: 2rem 0;
        opacity: 1;
    }

    &:hover {
        opacity: 1;
    }

    & h3 {
        font-weight: bold;
        position: relative;
        margin-bottom: 2rem;
        font-size: 2rem;
        margin-top: 0;

        &:after {
            content: '';
            display: inline-block;
            width: 50px;
            border-radius: 3px;
            height: 3px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            bottom: -10px;
            transition: .3s ease-in-out;
        }
    }

    & a {
        margin-top: auto;
    }
`

const FeatureVideoProgress = styled.div`
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: var(--color-accent-20);
    margin: 1rem 0;
    box-shadow: 10px 10px 20px 0px var(--color-primary-10);
    position: relative;

    &:after {
        content: "";
        top: 0;
        left: 0;
        position: absolute;
        height: 4px;
        width: 0;
        border-radius: 10px;
        background-color: var(--color-accent);
        animation: ${props => props.animate ? 'progress linear;' : ';'}
        animation-duration: ${props => props.duration || 0}s;
    }

    @keyframes progress {
        0% {
            width: 0;
        }
        100% {
            width: 100%;
        }
    }
`

const FeatureCardWrapper = styled.div`
    margin: 0 1rem;
    position: relative;
    &.active ${FeatureCard} {
        box-shadow: 10px 10px 20px 0px var(--color-primary-10);
        background-color: var(--light-blue);
        opacity: 1;
    }

    @media(max-width: ${dimensions.laptop}px) {
        margin: 4rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin: 0;
        margin-bottom: 3rem;

        &:not(:last-child) {
            border-bottom: 1px solid #eee;
        }
    }

    &::before {
        content: "";
        display: none;
        position: absolute;
        width: 8rem;
        height: 8rem;
        border-radius: 50%;
        top: -2%;
        right: -3%;
        background-color: var(--color-accent);
        opacity: 0.1;
        z-index: 0;

        @media(max-width: ${dimensions.mobile}px) {
            display: inline-block;
        }
    }
`

const SpecialTextContainer = styled.div`
    margin: 2rem 0;
`

const FeaturePlayer = styled.div`
    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const FeaturePlayerMobile = styled.div`

    display: none;

    @media(max-width: ${dimensions.mobile}px) {
        display: block;
    }
`

const LinkStyled = styled.a`
    color: var(--color-accent);
    display: inline-block;
    text-decoration: none;
    text-align: center;
    transition: all 200ms;
    font-size: 1.6rem;

    &:hover img {
        transform: translateX(8px);
    }
    
    @media(max-width: ${dimensions.mobile}px) {
        padding: 1.2rem 3rem 1.2rem 0;
        font-size: 1.6rem;
    }

    & img {
        margin-left: 1rem;
        transition: all 200ms;
    }
`

export default function VideoPlayer ({ data }) {
  const videoRef = useRef(null)

  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const [activeVideo, setActiveVideo] = useState(0)
  const [startAnimation, setStartAnimation] = useState(false)

  const onVideoEnd = () => {
    const videoIdx = (activeVideo + 1) % 4
    setActiveVideo(videoIdx)
  }

  useEffect(() => {
    if (inView) {
      setStartAnimation(true)
    }
  }, [inView])

  return (
    <>

      <FeaturePlayer ref={ref}>
        <Parallax y={['-20px', '20px']}>
          {
            data.map((item, idx) => {
              if (idx === activeVideo) {
                return <Video
                  key={idx}
                  ref={videoRef}
                  poster={item.posterUrl}
                  data-src={item.videoUrl}
                  muted
                  playsInline
                  autoPlay
                  src={item.videoUrl}
                  onEnded={onVideoEnd}
                       >
                       </Video>
              } else {
                return null
              }
            })
          }
        </Parallax>
        <SpecialTextContainer>
          {/* {
            data.map((item, idx) => {
              if (idx === activeVideo) {
                return <TextRotator
                  key={idx}
                  content={item.highlights}
                  time={3300}
                  startDelay={100}
                  transitionTime={100}
                />
              } else {
                return null
              }
            })
          } */}
          <div className='special--text'>
            {
              data[activeVideo].highlights[0]
            }
          </div>
        </SpecialTextContainer>
        <FeatureContainer>
          {
            data.map((item, idx) => {
              return <FeatureCardWrapper key={idx} className={idx === activeVideo ? 'active' : null}>
                <FeatureVideoProgress animate={idx === activeVideo && startAnimation} duration={videoRef?.current?.duration || item.videoDuration} />
                <FeatureCard data-idx={idx}>
                  <div onClick={() => setActiveVideo(idx)}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <LinkStyled href={`/product/?feature=${item.link}#df`} data-scroll>
                    Learn More
                    <img style={{ fill: 'red' }} src={ArrowWhite} className='btn_arrow' alt='Icon Arrow' />
                  </LinkStyled>
                </FeatureCard>
              </FeatureCardWrapper>
            })
          }
        </FeatureContainer>
      </FeaturePlayer>
      <FeaturePlayerMobile>
        {
          data.map((item, idx) => {
            return <FeatureCardWrapper
              key={idx}
              data-sal='slide-up'
              data-sal-delay='50'
              data-sal-duration='400'
              data-sal-easing='ease-in-out'
            >
              <Parallax y={['-20px', '20px']}>
                <Video
                  key={idx}
                  ref={videoRef}
                  poster={item.posterUrl}
                  data-src={item.videoUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                  src={item.videoUrl}
                />
                <SpecialTextContainer>
                  {/* <TextRotator
                    content={item.highlights}
                    time={(item.videoDuration * 1000) / item.highlights.length}
                    startDelay={0}
                  /> */}
                  <div className='special--text'>
                    {
                      item.highlights[0]
                    }
                  </div>
                </SpecialTextContainer>
                <FeatureCard>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <LinkCustom showArrow href='/product/#df'>Learn More</LinkCustom>
                </FeatureCard>
              </Parallax>
            </FeatureCardWrapper>
          })
        }
      </FeaturePlayerMobile>
    </>
  )
}

VideoPlayer.propTypes = {
  data: PropTypes.array
}
