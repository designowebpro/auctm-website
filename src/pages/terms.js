import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/TermsPage/HeroSection'
import TermsPageText from 'components/TermsPage/TermsPageText'

const Terms = () => {
  return (
    <Layout>
      <SEO title='Terms of Use' />
      <HeroSection />
      <TermsPageText />
    </Layout>
  )
}

export default Terms
