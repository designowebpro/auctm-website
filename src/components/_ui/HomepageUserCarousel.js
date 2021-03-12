import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import dimensions from 'styles/dimensions'
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoPlaySpeed: 6000,
  pauseOnHover: true,
  arrows: false,
  dotsClass: 'carousel_dots accent'
};

const CarouselContainer = styled.div`
    display: none;
    // justify-content: center;
    margin: 2rem auto 1rem auto;
    position: relative;
    width: 32rem;

    @media(max-width: ${dimensions.mobile}px) {
        display: block;
    }

    @media(max-width: 320px) {
      width: 28rem;
    }
`

const FeatureHighlightCard = styled.div`
    height: 38rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    transition: all 150ms;
    text-align: left;
    margin: 0 auto;

    & .mobile-img {
      margin-top: auto;
    }
 `

function HomepageUserCarousel ({ images }) {
  return (
    <CarouselContainer>
      <Slider {...settings}>
          <FeatureHighlightCard>
            <Img fluid={images.agent_image_two.childImageSharp.fluid} alt='Broker' aria-label='Broker' className='mobile-img' />
          </FeatureHighlightCard>
          <FeatureHighlightCard>
            <Img fluid={images.agent_image_one.childImageSharp.fluid} alt='Team Leader' aria-label='Team Leader' className='mobile-img' />
          </FeatureHighlightCard>
          <FeatureHighlightCard>
            <Img fluid={images.agent_image_three.childImageSharp.fluid} alt='Coach' aria-label='Coach' className='mobile-img' />
          </FeatureHighlightCard>
      </Slider>
    </CarouselContainer>
  )
}

HomepageUserCarousel.propTypes = {
  images: PropTypes.any
}

export default function HomepageCarouselWrapper (props) {
  return (
    <StaticQuery
      query={query}
      render={data => <HomepageUserCarousel images={data} {...props} />}
    />
  )
}

const query = graphql`
    query CarouselImages {
        agent_image_one: file(relativePath: { eq: "agents-one.png" }) {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_noBase64
              }
            }
        }
        agent_image_two: file(relativePath: { eq: "agents-two.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        agent_image_three: file(relativePath: { eq: "agents-three.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
    }
`
