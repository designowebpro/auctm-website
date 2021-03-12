import React from 'react'
import LogoImg from '../../images/logo-inverse.svg'
import LogoWhite from '../../images/logo.svg'
import styled from '@emotion/styled'
import dimensions from 'styles/dimensions'
import PropTypes from 'prop-types'

const LogoContainer = styled.div`
    // @media(max-width: ${dimensions.tablet}px) {
    //     text-align: center;
    // }

    & img {
      width: 12rem;
    }
`

export default function Logo ({ white = false }) {
  return (
    <LogoContainer>
      <img src={white ? LogoWhite : LogoImg} alt='Auctm Logo' aria-label='Auctm Logo' />
    </LogoContainer>
  )
}

Logo.propTypes = {
  white: PropTypes.bool
}
