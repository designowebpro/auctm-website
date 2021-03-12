import React from 'react'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/PrivacyPolicyPage/HeroSection'
import PrivacyPolicyText from 'components/PrivacyPolicyPage/PrivacyPolicyText'

export default function PrivacyPolicy () {
  return (
    <Layout>
      <SEO title='Privacy Policy' />
      <HeroSection />
      <PrivacyPolicyText />
    </Layout>
  )
}
