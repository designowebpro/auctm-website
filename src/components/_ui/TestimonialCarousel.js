import React from 'react'
import Slider from "react-slick";
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

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
  dotsClass: 'carousel_dots'
};

const CarouselContainer = styled.div`
    // display: flex;
    // justify-content: center;
    margin: 4rem auto 8rem auto;
    height: 34rem;
    position: relative;
    width: 87rem;

    @media(max-width: ${dimensions.tablet}px) {
      width: 60rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 34rem;
        height: 18rem;
    }

    @media(max-width: 320px) {
        width: 28rem;
    }
`

const BGElm = styled.div`
    width: 87rem;
    position: absolute; 
    top: 10%;

    @media(max-width: ${dimensions.tablet}px) {
        width: 30rem;
        top: 20%;
        left: -50%;
    }

    @media(max-width: ${dimensions.mobile}px) {
        width: 10rem;
        top: 30%;
        left: -10%;
    }

    @media(max-width: 320px) {
        display: none;
    }

    &:before {
        z-index: 0;
        content: "";
        position: absolute;
        top: 5%;
        left: -7%;
        height: 36rem;
        width: 30rem;
        background-color: var(--faded-blue);

        @media(max-width: ${dimensions.tablet}px) {
            width: 18rem;
            height: 30rem;
            top: 20%;
            left: -7%;
        }

        @media(max-width: ${dimensions.mobile}px) {
            height: 15rem;
            width: 10rem;
            top: 30%;
            left: 2%;
        }
    }
`

const TestimonialCard = styled.div`
    width: 100%;
    height: 34rem;
    background-color: #F7F8FC;
    display: flex;
    border-bottom-right-radius: 3rem;
    border-top-right-radius: 3rem;
    overflow: hidden;
    margin-bottom: 10rem;
    outline: none;

    @media(max-width: ${dimensions.mobile}px) {
        height: 18rem;
        margin-bottom: 4rem;
    }
`

const TestimonialImg = styled.div`
    width: 30%;
    height: 100%;
    background: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const TestimonialTextContainer = styled.div`
    width: 70%;
    padding: 3rem 8rem;
    text-align: left;
    display: flex;
    flex-direction: column;
    
    @media(max-width: ${dimensions.tablet}px) {
      padding: 3rem 5rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding: 2rem 3rem;
    }

    & > p {
        width: 39rem;
        text-align: left;
        position: relative;

        @media(max-width: ${dimensions.tablet}px) {
          width: 35rem;
        }

        @media(max-width: ${dimensions.mobile}px) {
            width: auto;
            font-size: 1.2rem;
        }

        &:before {
            content: "“";
            position: absolute;
            top: 10%;
            left: -5%;
            color: var(--color-accent);
            font-size: 5rem;
            line-height: 0;

            @media(max-width: ${dimensions.mobile}px) {
                left: -10%;
            }
        }

        &:after {
            content: "”";
            position: absolute;
            bottom: -10%;
            right: 5%;
            color: var(--color-accent);
            font-size: 5rem;
            line-height: 0;
        }
    }
`

const TestimonialUser = styled.div`
    margin-top: auto;

    @media(max-width: ${dimensions.mobile}px) {
        display: none;
    }

    & h3 {
        color: var(--color-primary);
        font-weight: bolder;
        font-size: 2rem;
        margin: 0;
    }

    & p {
        margin: 0;
        font-size: 1.6rem;
        color: var(--color-accent);
    }
`

const TestimonialUserMobile = styled(TestimonialUser)`
    margin: 0 auto;
    display: none;
    margin-bottom: 4rem;

    & h3 {
        font-size: 1.2rem;
        margin: 0;
    }

    & p {
        font-size: 1.1rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        display: block;
    }
`

export default function TestimonialCarousel ({ data }) {

  return (
    <CarouselContainer>
      <BGElm />
      <Slider {...settings}>
          {
            data.map((item, idx) => {
              return <div key={idx}>
              <TestimonialCard>
                <TestimonialImg src={data[idx].customerImage} />
                <TestimonialTextContainer>
                  <p>
                    {item.customerTestimonial}
                  </p>
                  <TestimonialUser>
                    <h3>{item.customerName}</h3>
                    <p>{item.customerDesignation}</p>
                  </TestimonialUser>
                </TestimonialTextContainer>
                     </TestimonialCard>
                <TestimonialUserMobile>
                  <h3>{item.customerName}</h3>
                  <p>{item.customerDesignation}</p>
                </TestimonialUserMobile>
              </div>
            })
          }
      </Slider>
    </CarouselContainer>
  )
}

TestimonialCarousel.propTypes = {
  data: PropTypes.array
}
