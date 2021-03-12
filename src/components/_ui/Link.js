import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'
import ArrowWhite from '../../images/arrow_white.svg'

const LinkStyled = styled(Link)`
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

export default function LinkCustom (props) {
  return (
    <LinkStyled {...props}>
      {props.children}
      {
        props.showArrow
          ? <img style={{ fill: 'red' }} src={ArrowWhite} className='btn_arrow' alt='Icon Arrow' />
          : null
      }
    </LinkStyled>
  )
}

LinkCustom.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  showArrow: PropTypes.bool
}
