import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/PricingPage/HeroSection'
import FaqSection from 'components/PricingPage/FaqSection'

export default function index ({ data }) {
  const { prismic: { allPricing_pages: { edges }, allSeos: { edges: edgesSeo } } } = data

  const seoData = {
    title: edgesSeo[0].node.seo_title[0].text,
    desc: edgesSeo[0].node.seo_description[0].text,
    pathname: edgesSeo[0].node.seo_pathname[0].text,
    image: edgesSeo[0].node.seo_image.url
  }

  const heroSectionData = {
    heroSectionTitle: edges[0].node.hero_section_title[0].text,
    pricingCardCtaText: edges[0].node.pricing_card_cta_text[0].text,
    pricingCardCtaId: edges[0].node.pricing_card_cta_id[0].text,
    pricingCardCtaLink: edges[0].node.pricing_card_cta_link.url,
    pricingCardTextLabel: edges[0].node.pricing_card_text_label[0].text,
    pricingCardFeatures: edges[0].node.pricing_card_fetures.map(feature => feature.pricing_feature[0].text)
  }

  const faqSectionData = {
    questionsData: edges[0].node.body.map(question => {
      return {
        questionTitle: question.primary.question_title[0].text,
        questions: question.fields.map(ques => ({ question: ques.question[0].text, answer: ques.answer[0].text }))
      }
    })
  }

  return (
    <Layout>
      <SEO {...seoData} />
      <HeroSection data={heroSectionData} />
      <FaqSection data={faqSectionData} />
    </Layout>
  )
}

export const query = graphql`
{
  prismic {
    allPricing_pages {
      edges {
        node {
          pricing_card_fetures {
            pricing_feature
          }
          body {
            ... on PRISMIC_Pricing_pageBodyQuestions {
              type
              label
              primary {
                question_title
              }
              fields {
                answer
                question
              }
            }
          }
          hero_section_title
          pricing_card_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          pricing_card_cta_text
          pricing_card_cta_id
          pricing_card_text_label
        }
      }
    }
    allSeos(uid: "pricing-page") {
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
