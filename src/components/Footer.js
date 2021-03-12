import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Container from 'components/_ui/Container'
import dimensions from 'styles/dimensions'
import Logo from 'components/_ui/Logo'
import FBIcon from 'images/fb-icon.svg'
// import LinkedInIcon from 'images/linkedin-icon.svg'
import TwitterIcon from 'images/twitter-icon.svg'
import InstaIcon from 'images/insta-icon.svg'

export const ContainerMain = styled(Container)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-top: 6rem;
    padding-bottom: 6rem;

    @media(max-width: ${dimensions.mobile}px) {
        grid-template-columns: 2fr;
        padding-top: 2rem;
        padding-bottom: 0;
    }
`

const LinkContainer = styled('div')`
    display: flex;
    flex-direction: column;

    &.social {
        flex-direction: row;

        @media(max-width: ${dimensions.mobile}px) {
            grid-area: 1 / 3;
        }
    }

    &.page-links {
        @media(max-width: ${dimensions.mobile}px) {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            margin-top: 2rem;
        }
    }

    &.extra-links {
        @media(max-width: ${dimensions.mobile}px) {
            grid-column: 2 / 3;
            grid-row: 2 / 3;
            margin-top: 2rem;
        }
    }

    & a{
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: white;
        text-decoration: none;
        transition: all 150ms;
        align-self: flex-start;

        &:hover {
            color: #efefef;
        }

        @media(max-width: ${dimensions.mobile}px) {
          font-size: 1.2rem;
        }
    }
`

const LogoLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 10rem;

  @media(max-width: ${dimensions.mobile}px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`

const SocialContainer = styled.div`
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media(max-width: ${dimensions.mobile}px) {
        justify-self: start;
        align-items: flex-start;
        margin-top: 2rem;
    }

    & p {
        margin: 0;
        font-size: 2rem;
        font-weight: bold;
        color: white;
        margin-bottom: 2rem;
        line-height: 1.4;

        @media(max-width: ${dimensions.mobile}px) {
          font-size: 1.4rem;
        }
    }

    & a {
        margin-left: 4rem;
        transition: all 150ms;

        @media(max-width: ${dimensions.mobile}px) {
            margin-left: 0;
            margin-right: 3.5rem;
        }

        @media(max-width: 320px) {
          margin-left: 0;
          margin-right: 2.5rem;
      }

        &:hover {
            transform: scale(1.05);
        }
    }
`

const PostFooterContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    @media(max-width: ${dimensions.mobile}px) {
        flex-wrap: wrap;
        padding: 1rem;

        & .hello {
            margin-top: 0rem;
        }
    }

    & p {
        margin: 0;
        display: inline;
        color: grey;
        font-size: 1.4rem;

        @media(max-width: ${dimensions.mobile}px) {
          font-size: 1rem;
        }

        &.logo {
            margin-right: 3rem;
            font-weight: bold;

            @media(max-width: ${dimensions.mobile}px) {
                margin-right: 2rem;
            }
        }
    }

    & a {
        font-size: 1.4rem;
        text-decoration: none;
        transition: all 150ms;
        color: grey;

        &:hover {
            color: var(--text-light);
        }

        @media(max-width: ${dimensions.mobile}px) {
          font-size: 1rem;
        }
    }
`

const Footer = () => (
  <footer>
    <div className='bg--dark'>
      <ContainerMain>
        <LogoLink id='logo-bottom' to='/' title='Home' aria-label='Home'>
          <Logo white />
        </LogoLink>
        <LinkContainer className='page-links'>
          <Link id='home-bottom' to='/' component='link' variant='secondary'>Home</Link>
          <Link id='product-bottom' to='/product/' component='link' variant='secondary'>Product</Link>
          <Link id='pricing-bottom' to='/pricing/' component='link' variant='secondary'>Pricing</Link>
          <Link id='why-auctm-bottom' to='/why-auctm/' component='link' variant='secondary'>Why Auctm</Link>
        </LinkContainer>
        <LinkContainer className='extra-links'>
          <a id='careers' href='https://www.squadstack.com/culture/?utm_source=Auctm&utm_medium=Website&utm_campaign=rebranding_announcement' rel='noopener noreferrer' component='link' variant='secondary' target='_blank'>Careers</a>
          <a id='terms' href='/terms/' component='link' variant='secondary' target='_blank'>Terms of Use</a>
          <a id='privacy-policy' href='/privacy-policy/' component='link' variant='secondary' target='_blank'>Privacy Policy</a>
        </LinkContainer>
        <SocialContainer>
          <p>Follow us on</p>
          <LinkContainer className='social'>
            {/* <Link to='https://www.linkedin.com'>
              <img src={LinkedInIcon} alt='LinkedIn Icon' />
            </Link> */}
            <Link to='https://twitter.com/auctm_official' target='_blank' rel='noopener noreferrer'>
              <img src={TwitterIcon} alt='Twitter Icon' />
            </Link>
            <Link to='https://www.instagram.com/auctmofficial' target='_blank' rel='noopener noreferrer'>
              <img src={InstaIcon} alt='Instagram Icon' />
            </Link>
            <Link to='https://www.facebook.com/auctmofficial/' target='_blank' rel='noopener noreferrer'>
              <img src={FBIcon} alt='Facebook Icon' />
            </Link>
          </LinkContainer>
        </SocialContainer>
      </ContainerMain>
      <PostFooterContainer>
        <div>
          <p>&#169; Copyright {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className='hello'>
          <a href='mailto:hello@auctm.com'>hello@auctm.com</a>
        </div>
      </PostFooterContainer>
    </div>
  </footer>
)

export default Footer
