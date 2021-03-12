import React from 'react'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import { Link } from 'gatsby'

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
  left: 0;
  width: auto;
  border-bottom: none;
  @media(max-width: ${dimensions.tablet}px) {
    flex-direction: column;
    position: fixed;
    top: 5rem;
    right: 0;
    width: 100%;
    z-index: 40;
    background-color: white;
    padding-bottom: 2rem;
    box-shadow: 0px 8px 20px -4px rgba(0, 0, 0, 0.1);
  }
`

const NavigationLink = styled(Link)`
  color: var(--text-accent);
  text-decoration: none;
  position: relative;
  text-align: center;
  margin-bottom: 0;
  transition: 150ms;
  display: block;
  font-size: 1.6rem;

  
  @media(max-width: ${dimensions.tablet}px) {
    margin-left: 0;
    margin-bottom: var(--space);
    font-size: 1.6rem;
  }

  &::before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  &:after {
    content: '';
    display: inline-block;
    width: 0;
    height: 2px;
    background: var(--color-accent);
    position: absolute;
    left: 0;
    bottom: -10px;
    opacity: 0;
    transition: .3s ease-in-out;
  }
  &:hover,
  &.active {
    color: var(--color-accent);
    &:after {
      opacity: 1;
      bottom: -10px;
      width: 34px;

      @media(max-width: ${dimensions.mobile}px) {
        width: 100%;
      }
    }
  }
  &.active {
    font-weight: bold;
  }
`

const NavigationButton = styled(Link)`
  background: var(--color-accent);
  border-radius: 7px;
  color: #fff;
  display: inline-block;
  padding: 5px var(--space);
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  // box-shadow: 0px 8px 20px -4px var(--color-accent);
  transition: all 200ms;
  font-size: 1.6rem;

  &:hover {
    // box-shadow: 0px 12px 20px -4px var(--color-accent);
    transform: translateY(-2px);
  }
`

const menuItems = [
  {
    id: 'home',
    name: 'Home',
    path: '/'
  },
  {
    id: 'product',
    name: 'Product',
    path: '/product/'
  },
  {
    id: 'why-auctm',
    name: 'Why Auctm',
    path: '/why-auctm/'
  },
  {
    id: 'pricing',
    name: 'Pricing',
    path: '/pricing/'
  }
]

export default function Navigation () {
  return (
    <>
      <NavigationContainer>
        {menuItems.map((menu, index) => (
          <NavigationLink
            id={menu.id}
            to={menu.path}
            aria-label={menu.name}
            activeClassName='active'
            key={`${menu.link}${index}`}
          >
            {menu.name}
          </NavigationLink>
        ))}
        <NavigationLink to='https://blog.auctm.com' target='_blank' rel='noopener noreferrer'>Blog</NavigationLink>

        <NavigationButton id='app-login' to='https://www.app.auctm.com' target='_blank' rel='noreferrer noopener' aria-label='Login'>
                    Login
        </NavigationButton>
      </NavigationContainer>
    </>
  )
}
