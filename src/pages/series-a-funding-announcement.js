import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/PressPage/HeroSection'
import PressCard from 'components/PressPage/PressCard'
import { WaveBGPricing } from 'components/_ui/WaveBG'

export default function index ({ data }) {
  const { prismic: { allPress_pages: { edges }, allSeos: { edges: edgesSeo } } } = data

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
    heroSectionCtaLink: edges[0].node.hero_section_cta_link.url
  }

  const pressSectionData = {
    sectionOneData: edges[0].node.press_text_section_1[0].text,
    sectionTwoData: edges[0].node.press_text_section_2[0].text,
    quoteSectionData: edges[0].node.press_text_quote[0].text,
    quoteSectionBy: edges[0].node.press_text_quote_by[0].text,
    quoteSectionCtaHeader: edges[0].node.press_cta_header_text[0].text,
    quoteSectionCtaText: edges[0].node.press_cta_text[0].text,
    quoteSectionCtaId: edges[0].node.press_cta_id[0].text,
    quoteSectionCtaLink: edges[0].node.press_cta_link.url
  }

  return (
    <Layout>
      <SEO {...seoData} />
      <WaveBGPricing />
      <HeroSection data={heroSectionData} />
      <PressCard data={pressSectionData} />
    </Layout>
  )
}

export const query = graphql`
{
  prismic {
    allPress_pages {
      edges {
        node {
          hero_section_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          hero_section_cta_text
          hero_section_sub_title
          hero_section_title
          press_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          press_cta_text
          press_cta_id
          press_text_quote
          press_text_quote_by
          press_text_section_1
          press_text_section_2
          press_cta_header_text
        }
      }
    }
    allSeos(uid: "press-page") {
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
