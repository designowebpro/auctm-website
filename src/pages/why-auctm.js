import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/WhyAuctmPage/HeroSection'
import CardSection from 'components/WhyAuctmPage/CardSection'
import QuoteSection from 'components/WhyAuctmPage/QuoteSection'
import CTASection from 'components/WhyAuctmPage/CTASection'
import FeaturesSection from 'components/WhyAuctmPage/FeaturesSection'
import BookDemo from '../components/Homepage/BookDemo'
import { WaveBGWhyAuctm } from 'components/_ui/WaveBG'

export default function index ({ data }) {
  const { prismic: { allHomepages: { edges: edgesHomepage }, allWhy_auctm_pages: { edges }, allSeos: { edges: edgesSeo } } } = data

  const seoData = {
    title: edgesSeo[0].node.seo_title[0].text,
    desc: edgesSeo[0].node.seo_description[0].text,
    pathname: edgesSeo[0].node.seo_pathname[0].text,
    image: edgesSeo[0].node.seo_image.url
  }

  const heroSectionData = {
    heroSectionTitle: edges[0].node.hero_section_title[0].text,
    heroSectionSubTitle: edges[0].node.hero_section_sub_title[0].text,
    heroSectionCtaText: edges[0].node.hero_section_cta_text[0].text,
    heroSectionCtaId: edges[0].node.hero_section_cta_id[0].text,
    heroSectionCtaLink: edges[0].node.hero_section_cta_link.url
  }

  const cardsSectionData = {
    factSectionTextOne: edges[0].node.facts[0].fact_section_text.map(fact => fact.text),
    factSectionFromOne: edges[0].node.facts[0].fact_section_from[0].text,
    factSectionTextTwo: edges[0].node.facts[1].fact_section_text.map(fact => fact.text),
    factSectionFromTwo: edges[0].node.facts[1].fact_section_from[0].text
  }

  const bannerSectionData = {
    bannerSectionText: edges[0].node.banner_section_text.map(banner => banner.text)
  }

  const featureCausesSectionData = {
    featureCauseOne: {
      featureCauseText: edges[0].node.body[0].fields.map(feature => feature.feature_text[0].text),
      featureCauseHighlight: edges[0].node.body[0].primary.feature_highlight ? edges[0].node.body[0].primary?.feature_highlight[0].text : null
    },
    featureCauseTwo: {
      featureCauseText: edges[0].node.body[1].fields.map(feature => feature.feature_text[0].text),
      featureCauseHighlight: edges[0].node.body[1].primary.feature_highlight ? edges[0].node.body[1].primary?.feature_highlight[0].text : null
    },
    featureCauseThree: {
      featureCauseText: edges[0].node.body[2].fields.map(feature => feature.feature_text[0].text),
      featureCauseHighlight: edges[0].node.body[2].primary.feature_highlight ? edges[0].node.body[2].primary?.feature_highlight[0].text : null
    }
  }

  const CtaSectionData = {
    ctaSectionText: edges[0].node.cta_section_title.map(banner => banner.text),
    ctaSectionCtaText: edges[0].node.cta_section_cta_text[0].text,
    ctaSectionCtaId: edges[0].node.cta_section_cta_id[0].text,
    ctaSectionCtaLink: edges[0].node.cta_section_cta_link.url
  }

  const bookDemoSectionData = {
    bookDemoSectionTitle: edgesHomepage[0].node.demo_section_heading[0].text,
    bookDemoSectionSubTitle: edgesHomepage[0].node.demo_section_sub_heading[0].text
  }

  return (
    <Layout>
      <SEO {...seoData} />
      <WaveBGWhyAuctm />
      <HeroSection data={heroSectionData} />
      <CardSection data={cardsSectionData} />
      <QuoteSection data={bannerSectionData} />
      <FeaturesSection data={featureCausesSectionData} />
      <CTASection data={CtaSectionData} />
      <BookDemo data={bookDemoSectionData} showBg={false} />
    </Layout>
  )
}

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          demo_section_sub_heading
          demo_section_heading
        }
      }
    }
    allWhy_auctm_pages {
      edges {
        node {
          banner_section_text
          body {
            ... on PRISMIC_Why_auctm_pageBodyFeature_cause {
              type
              label
              fields {
                feature_text
              }
              primary {
                feature_highlight
              }
            }
          }
          cta_section_cta_text
          cta_section_cta_id
          cta_section_title
          hero_section_sub_title
          hero_section_title
          cta_section_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          hero_section_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          hero_section_cta_text
          hero_section_cta_id
          facts {
            fact_section_from
            fact_section_text
          }
        }
      }
    }
    allSeos(uid: "why-auctm-page") {
      edges {
        node {
          seo_description
          seo_pathname
          seo_title
          seo_image {
            ... on PRISMIC__ImageLink {
              url
            }
          }
        }
      }
    }
  }
}
`
