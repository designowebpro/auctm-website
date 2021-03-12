import React from 'react'
import Section from 'components/_ui/Section'
import Container from 'components/_ui/Container'
import { HeadingsContainerPolicyPages } from 'components/_ui/HeadingsContainer'

export default function HeroSection () {
  return (
    <Section className='bg--dark'>
      <Container>
        <HeadingsContainerPolicyPages>
          <h1>Privacy Policy for Auctm</h1>
        </HeadingsContainerPolicyPages>
      </Container>
    </Section>
  )
}
