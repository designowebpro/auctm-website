import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const SectionStyled = styled.section`
    display: flex;
    width: 100%;
    flex: 1 1 0%;
`

export default function Section (props) {
  const { children } = props
  return (
    <SectionStyled {...props}>
      {children}
    </SectionStyled>
  )
}

Section.propTypes = {
  children: PropTypes.any
}
