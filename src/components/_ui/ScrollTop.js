import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Down from 'images/up-arrow.svg'
import PropTypes from 'prop-types'

const Arrow = styled.div`
    z-index: 2;
    position: fixed;
    right: 2rem;
    bottom: 10rem;
    background: white;
    box-shadow: 0px 0px 40px 20px var(--color-primary-10);
    height: 4.5rem;
    width: 4.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 200ms;
    position: fixed;
    opacity: ${props => props.show ? 1 : 0};
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    :hover {
      transition: 0.3s;
      background: #fefefe;
    }
    // right: calc(1.1vw - ${props => props.size} / 1);

    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 

    &:hover {
      & img {
        transform: translateY(-2px);
      }
    }

    & img {
        transition: all 200ms;
        transform: translateY(2px);
        width: 1.6rem;
    }
`

const Scroll = ({
  direction = 'up',
  by,
  to,
  showBelow,
  className,
  size = '1.7em'
}) => {
  if (!['up', 'down'].includes(direction)) {
    throw TypeError(
      'Scroll component\'s direction prop must be either \'up\' or \'down\''
    )
  }
  if (to && (typeof to !== 'number' || to <= 0)) { throw TypeError('Scroll component\'s to prop must be a positive number') }
  if (by && typeof by !== 'number') { throw TypeError('Scroll component\'s by prop must be a number') }

  const [show, setShow] = useState(!showBelow)

  const scroll = ({ mode, to }) =>
    window['scroll' + mode]({ top: to, behavior: 'smooth' })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    if (to) scroll({ mode: 'To', to: to * window.innerHeight })
    else if (by) scroll({ mode: 'By', to: by * window.innerHeight })
    else if (direction === 'up') scroll({ mode: 'To', to: 0 })
    else scroll({ mode: 'To', to: document.body.scrollHeight })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  })

  const arrowProps = { show, direction, className, size }
  return <Arrow onClick={handleClick} {...arrowProps} id='scroll-top'>
    <img src={Down} alt='Scroll Up Arrow' aria-label='Scroll Up Arrow' />
         </Arrow>
}

Scroll.propTypes = {
  direction: PropTypes.string,
  by: PropTypes.any,
  to: PropTypes.any,
  showBelow: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.string
}

export default Scroll
