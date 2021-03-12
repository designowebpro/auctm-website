import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import dimensions from 'styles/dimensions'

const Button = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  display: none;
  border: none;
  position: absolute;
  border-radius: 3px;
  top: 0.5rem;
  right: 0;
  outline: none;
  @media(max-width: ${dimensions.tablet}px) {
    display: inline-block;
  }
  &.active {
    span {
      background: transparent;
      &:before,
      &:after {
        top: 0;
        left: 0;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
  span {
    background: black;
    border-radius: 10px;
    display: inline-block;
    height: 3px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    &:before,
    &:after {
      content: '';
      background: black;
      border-radius: 10px;
      display: inline-block;
      height: 3px;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.3s;
    }
    &:before {
      top: -10px;
    }
    &:after {
      bottom: -10px;
    }
  }
`

export default function ButtonHamburger (props) {
  return (
    <Button
      onClick={props.handleClick}
      className={props.isActive ? 'active' : ''}
      aria-label='Mobile Navigation Button'
    >
      <span />
    </Button>
  )
}

ButtonHamburger.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
}
