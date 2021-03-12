import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import SEO from 'components/SEO'
import HeroSection from 'components/ProductPage/HeroSection'
import FeaturesSection from 'components/ProductPage/FeaturesSection'
import StaticFeaturesSection from 'components/ProductPage/StaticFeaturesSection'

export default function index ({ data }) {
  const { prismic: { allProduct_pages: { edges }, allSeos: { edges: edgesSeo } } } = data

  const seoData = {
    title: edgesSeo[0].node.seo_title[0].text,
    desc: edgesSeo[0].node.seo_description[0].text,
    pathname: edgesSeo[0].node.seo_pathname[0].text,
    image: edgesSeo[0].node.seo_image.url
  }

  const heroSectionData = {
    heroSectionTitle: edges[0].node.hero_section_title[0].text,
    heroSectionSubTitle: edges[0].node.hero_section_sub_title[0].text
  }

  const dynamicFeaturesData = {
    dynamicFeaturesTitle: edges[0].node.dynamic_features_title[0].text,
    dynamicFeaturesSubTitle: edges[0].node.dynamic_features_sub_title[0].text,
    dynamicFeaturesMobileCtaText: edges[0].node.dynamic_features_mobile_cta_text[0].text,
    dynamicFeaturesMobileCtaId: edges[0].node.dynamic_features_mobile_cta_id[0].text,
    dynamicFeaturesMobileCtaLink: edges[0].node.dynamic_features_mobile_cta_link.url,
    dynamicFeatures: edges[0].node.body.filter(item => item.type === 'dynamic_feature').map(item => {
      return {
        featureTitle: item.primary.feature_title[0].text,
        featuresQueryParamTitle: item.primary.feature_title[0].text.split(' ').join('-').toLowerCase(),
        featureDescription: item.primary.feature_description[0].text,
        featureCtaText: item.primary.feature_cta_text[0].text,
        featureCtaId: item.primary.feature_cta_id[0].text,
        featureImage: item.primary.feature_image.url,
        featureCtaLink: item.primary.feature_cta_link.url,
        featureHighlights: item.fields.map(highlight => {
          return {
            highlightTitle: highlight.feature_highlight_title[0].text,
            highlightDescription: highlight.feature_highlight_description[0].text,
            highlightIcon: highlight.feature_highlight_icon.url
          }
        })
      }
    })
  }

  const staticFeaturesData = {
    staticFeaturesTitle: edges[0].node.static_features_title[0].text,
    staticFeaturesSubTitle: edges[0].node.static_features_sub_title[0].text,
    staticFeatures: edges[0].node.static_feature.map(item => {
      return {
        featureIcon: item.feature_icon.url,
        featureTitle: item.feature_title[0].text,
        featureDescription: item.feature_description[0].text
      }
    })
  }

  return (
    <Layout>
      <SEO {...seoData} />
      <HeroSection data={heroSectionData} />
      <FeaturesSection data={dynamicFeaturesData} />
      <StaticFeaturesSection data={staticFeaturesData} />
    </Layout>
  )
}

export const query = graphql`
{
  prismic {
    allProduct_pages {
      edges {
        node {
          hero_section_sub_title
          hero_section_title
          body {
            ... on PRISMIC_Product_pageBodyDynamic_feature {
              type
              label
              primary {
                feature_cta_text
                feature_cta_id
                feature_description
                feature_title
                feature_image {
                  ... on PRISMIC__ImageLink {
                    _linkType
                    url
                  }
                }
                feature_cta_link {
                  ... on PRISMIC__ExternalLink {
                    url
                  }
                }
              }
              fields {
                feature_highlight_description
                feature_highlight_title
                feature_highlight_icon {
                  ... on PRISMIC__ImageLink {
                    _linkType
                    url
                  }
                }
              }
            }
          }
          dynamic_features_title
          dynamic_features_sub_title
          static_features_title
          static_features_sub_title
          static_feature {
            feature_description
            feature_icon {
              ... on PRISMIC__ImageLink {
                _linkType
                url
              }
            }
            feature_title
          }
          dynamic_features_mobile_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          dynamic_features_mobile_cta_text
          dynamic_features_mobile_cta_id
        }
      }
    }
    allSeos(uid: "product-page") {
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
