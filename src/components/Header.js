import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import Logo from 'components/_ui/Logo'
import MainContainer from 'components/_ui/Container'
import Navigation from './_ui/Navigation'
import ButtonHamburger from './_ui/ButtonHamburger'

const HeaderWrapper = styled.div`
    margin-bottom: var(--space);
    @media(max-width: ${dimensions.tablet}px) {
        background-color: var(--bg-light);
    }
    transition: all 200ms;

    position: sticky;
    top: 0;
    z-index: 10000;

    &.sticky {
      background-color: white;
      box-shadow: -5px -5px 6px 6px var(--color-primary-20);
    }
`

const MainWrapper = styled(MainContainer)`
    position: sticky;
    top: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: var(--width-container);
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: calc(var(--space)*0.4) 0;
  transition: all 200ms;
`

export const LogoLink = styled(Link)`
  display: inline-block;
  margin-right: 0.5rem;
  width: 10rem;
`

export const ButtonMenu = styled.div`
  &.is-active {}
`

export const NavMenu = styled.div`
  width: auto;
  display: block;
  margin-left: auto;
  min-width: 600px;
  @media(max-width: ${dimensions.tablet}px) {
    width: 100%;
    display: none;
    min-width: 100%;
  }
  &.is-active {
    display: block;
  }
`

export const NavLanguages = styled.div`
  margin-left: var(--space);
`

const Header = () => {
  const [openedMenu, setOpenedMenu] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)

  const handleScroll = () => {
    if (ref.current) {
      setSticky(() => window.pageYOffset >= 20)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setOpenedMenu(!openedMenu)
  }

  return <HeaderWrapper className={`${isSticky ? ' sticky' : null}`} ref={ref}>
    <MainWrapper>
      <Container>
        <LogoLink id='logo-top' to='/' title='Home' aria-label='Home'>
          <Logo />
        </LogoLink>

        <ButtonMenu className={openedMenu ? 'is-active' : ''}>
          <ButtonHamburger handleClick={toggleMenu} isActive={openedMenu} />
        </ButtonMenu>

        <NavMenu className={openedMenu ? 'is-active' : ''}>
          <Navigation />
        </NavMenu>
      </Container>

    </MainWrapper>
         </HeaderWrapper>
}

export default Header
