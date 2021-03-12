import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import dimensions from 'styles/dimensions'

const ContainerStyled = styled.section`
    width: 100%;

    max-width: ${dimensions.desktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}rem;
    padding-right: ${dimensions.paddingHorizontalDesktop}rem;
    margin: 0 auto;

    @media(max-width: ${dimensions.tablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}rem;
        padding-right: ${dimensions.paddingHorizontalTablet}rem;
    }

    @media(max-width: ${dimensions.mobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}rem;
        padding-right: ${dimensions.paddingHorizontalMobile}rem;
    }
`

export default function Container (props) {
  const { children } = props
  return (
    <ContainerStyled {...props}>
      {children}
    </ContainerStyled>
  )
}

Container.propTypes = {
  children: PropTypes.any
}
