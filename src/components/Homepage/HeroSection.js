import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import styled from '@emotion/styled'
import HomepageUserCarousel from 'components/_ui/HomepageUserCarousel'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import agentsArrow1 from '../../images/agents-arrow1.png'
import agentsArrow2 from '../../images/agents-arrow2.png'
import agentsArrow3 from '../../images/agents-arrow3.png'
import agentsText1 from '../../images/agents-text1.png'
import agentsText2 from '../../images/agents-text2.png'
import agentsText3 from '../../images/agents-text3.png'

const HeroContainer = styled.div`
    padding: 5rem 12rem 0 12rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    & > h1 {
        margin-top: 0;
    }

    @media(min-width: ${dimensions.desktop}px) {
        padding: 10rem 12rem 0 12rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 0 2rem;

        & > h1 {
            margin-top: 0;
        }
    }

    @keyframes arrow {
        from {
            width: 0;
        }
        to {
            width: auto;
        }
    }

    @keyframes dance {
        0% {
            transform: scale(1);
            width: auto;
        }
        50% {
            transform: scale(1.04);
            width: auto;
        }
        100% {
            transform: scale(1);
            width: auto;
        }
    }
`

const ImgContainer = styled.div`
    align-items: center;
    margin-top: 18rem;
    position: relative;

    @media(min-width: ${dimensions.desktop}px) {
        margin-top: 20rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        margin-top: 12rem;
        display: none;
    }
`

const UserImg = styled.div`

    width: 100rem;

    & .mobile-img {
        display: none;
    }

    @media(max-width: ${dimensions.laptop}px) {
        width: 80rem;
    }

    @media(max-width: ${dimensions.tablet}px) {
        width: 60rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 34rem;

        & .mobile-img {
            display: block;
        }

        & .desktop-img {
            display: none;
        }
    }

    @media(max-width: 320px) {
        width: 28rem;
    }
`

const Arrow1 = styled.img`
    position: absolute;
    top: -2%;
    left: 4%;
    width: 0;
    animation: arrow forwards 1000ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: -5%;
        left: 2%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: -10%;
        left: -2%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const AgentsText1 = styled.img`
    position: absolute;
    top: -20%;
    left: -2%;
    width: 0;
    animation: arrow forwards 1500ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: -30%;
        left: -10%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: -40%;
        left: -15%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const Arrow2 = styled.img`
    position: absolute;
    top: -12%;
    left: 52%;
    width: 0;
    animation: arrow forwards 2500ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: -15%;
        left: 50%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: -35%;
        left: 45%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        top: -5%;
        left: 60%;
        animation: none;
        width: auto;
    }

    @media(max-width: 320px) {
        top: -10%;
        left: 55%;
    }
`

const AgentsText2 = styled.img`
    position: absolute;
    top: -30%;
    left: 30%;
    width: 0;
    animation: arrow forwards 3000ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: -40%;
        left: 30%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: -70%;
        left: 17%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        top: -25%;
        left: -5%;
        animation: none;
        width: auto;
    }

    @media(max-width: 320px) {
        top: -35%;
        left: 0;
        height: 8rem;
    }
`

const Arrow3 = styled.img`
    position: absolute;
    top: 5%;
    right: 2%;
    width: 0;
    animation: arrow forwards 4000ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: 15%;
        right: -5%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: 5%;
        right: -5%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

const AgentsText3 = styled.img`
    position: absolute;
    top: -20%;
    right: -10%;
    width: 0;
    animation: arrow forwards 4500ms ease-in;

    @media(max-width: ${dimensions.laptop}px) {
        top: -15%;
        right: -15%;
    }

    @media(max-width: ${dimensions.tablet}px) {
        top: -30%;
        right: -15%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }
`

function HeroSection ({ data: { heroTitleMain }, images }) {
  HeroSection.defaultProps = {
    data: {
      heroTitleMain: 'The Ultimate Business Management and Productivity Solution for',
      heroTitleAccent: 'Real Estate Teams',
      heroCTAText: 'Click Me'
    }
  }

  const title = heroTitleMain.replace('#^', '<span class=\'color--accent\'>').replace('^#', '</span>')

  return (
    <Section>
      <Container>
        <HeroContainer
          data-sal='slide-up'
          data-sal-delay='0'
          data-sal-duration='400'
          data-sal-easing='ease-in-out'
        >
          <h1 dangerouslySetInnerHTML={{ __html: title }} />
          <ImgContainer>
            <Arrow1 src={agentsArrow1} alt='agent arrow 1' aria-label='agent arrow 1' />
            <AgentsText1 src={agentsText1} alt='Broker: Are we on track for our revenue goals?' />
            <Arrow2 src={agentsArrow2} alt='agent arrow 2' aria-label='agent arrow 2' />
            <AgentsText2 src={agentsText2} alt="Team Leader: Who's behind on their calls and follow-ups?" />
            <Arrow3 src={agentsArrow3} alt='agent arrow 3' aria-label='agent arrow 3' />
            <AgentsText3 src={agentsText3} alt='Coach: Did metrices improve after our last coaching session?' />
            <UserImg>
              <Img fluid={images.desktopImage.childImageSharp.fluid} alt='Team Leader, Broker and Coach' aria-label='Team Leader, Broker and Coach' className='desktop-img' />
            </UserImg>
          </ImgContainer>
          <HomepageUserCarousel />
        </HeroContainer>
      </Container>
    </Section>
  )
}

HeroSection.propTypes = {
  data: PropTypes.shape({
    heroTitleMain: PropTypes.string.isRequired,
    heroCTAText: PropTypes.string.isRequired,
    heroCTALink: PropTypes.string.isRequired
  }),
  images: PropTypes.any
}

export default function HeroSectionWrapper (props) {
  return (
    <StaticQuery
      query={query}
      render={data => <HeroSection images={data} {...props} />}
    />
  )
}

const query = graphql`
    query Images {
        desktopImage: file(relativePath: { eq: "agents.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
        }
    }
`
