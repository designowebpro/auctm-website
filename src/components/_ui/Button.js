import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import dimensions from 'styles/dimensions'

const ButtonStyled = styled.button`
  background: var(--color-accent);
  border-radius: 7px;
  color: #fff;
  display: inline-block;
  padding: 1.2rem 4.2rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  // box-shadow: 0px 8px 20px -4px var(--color-accent);
  transition: all 200ms;
  font-size: 1.8rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    // box-shadow: 0px 12px 20px -4px var(--color-accent);
    transform: translateY(-2px);
  }

  @media(max-width: ${dimensions.mobile}px) {
    padding: 1.2rem 3rem;
    font-size: 1.6rem;
  }
`

const LinkStyled = styled(Link)`
    background: var(--color-accent);
    border-radius: 7px;
    color: #fff;
    display: inline-block;
    padding: 0.8rem 4.2rem;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    // box-shadow: 0px 8px 20px -4px var(--color-accent);
    transition: all 200ms;
    font-size: 1.8rem;

    &:hover {
        // box-shadow: 0px 12px 20px -4px var(--color-accent);
        transform: translateY(-2px);
    }
    
    @media(max-width: ${dimensions.mobile}px) {
        padding: 1.2rem 3rem;
        font-size: 1.6rem;
    }
`

export default function Button (props) {
  if (props.type === 'link') {
    return <LinkStyled {...props}>{props.children}</LinkStyled>
  }

  return (
    <ButtonStyled {...props}>
      {props.children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string
}
