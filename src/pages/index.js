import React from 'react'
import Layout from 'components/Layout'
import { graphql } from 'gatsby'
import SEO from 'components/SEO'
import HeroSection from 'components/Homepage/HeroSection'
import NumberSection from 'components/Homepage/NumberSection'
import PropTypes from 'prop-types'
import ForBrokers from 'components/Homepage/ForBrokers'
import AuctmWorking from '../components/Homepage/AuctmWorking'
import Tesimonials from '../components/Homepage/Tesimonials'
import BookDemo from '../components/Homepage/BookDemo'
import VideoSection from '../components/Homepage/VideoSection'

const IndexPage = ({ data }) => {
  const { prismic: { allHomepages: { edges }, allSeos: { edges: edgesSeo } } } = data

  const seoData = {
    title: edgesSeo[0].node.seo_title[0].text,
    desc: edgesSeo[0].node.seo_description[0].text,
    pathname: edgesSeo[0].node.seo_pathname[0].text,
    image: edgesSeo[0].node.seo_image.url
  }

  const heroSectionData = {
    heroTitleMain: edges[0].node.hero_title_main[0].text,
    heroCTAText: edges[0].node.hero_title_cta_text[0].text,
    heroCTALink: edges[0].node.hero_title_cta_link.url
  }

  const numberSectionData = {
    numberSectionTitle: edges[0].node.number_section_title[0].text,
    numberSectionNumbers: edges[0].node.number_field.map(item => ({ text: item.number_field_title[0].text, value: item.number_field_number }))
  }

  const forBrokersSectionData = {
    forBrokersSectionTitle: edges[0].node.for_brokers_heading[0].text,
    forBrokersSectionSubTitle: edges[0].node.for_brokers_sub_heading[0].text,
    forBrokersCtaText: edges[0].node.for_brokers_cta_text[0].text,
    forBrokersCtaId: edges[0].node.for_brokers_cta_id[0].text,
    forBrokersCtaLink: edges[0].node.for_brokers_cta_link.url,
    forBrokersFeatures: edges[0].node.for_brokers_features.map(item => {
      return {
        title: item.feature_title[0].text,
        description: item.feature_description[0].text,
        posterUrl: item.feature_poster_url.url,
        videoUrl: item.feature_video_url.url,
        videoDuration: item.feature_video_duration,
        link: item.feature_link[0].text,
        highlights: item.feature_highlights.map(highlight => highlight.text)
      }
    })
  }

  const videoSectionData = {
    videoSectionTitle: edges[0].node.video_section_heading[0].text,
    videoSectionSubTitle: edges[0].node.video_section_sub_heading[0].text
  }

  const auctmWorkingSectionData = {
    auctmWorkingSectionTitle: edges[0].node.auctm_working_section_heading[0].text,
    auctmWorkingSectionSubTitle: edges[0].node.auctm_working_section_sub_heading[0].text,
    auctmWorkingDesktopPoster: edges[0].node.auctm_working_desktop_poster.url,
    auctmWorkingDesktopVideo: edges[0].node.auctm_working_desktop_video.url,
    auctmWorkingMobilePoster: edges[0].node.auctm_working_mobile_poster.url,
    auctmWorkingMobileVideo: edges[0].node.auctm_working_mobile_video.url
  }

  const testimonialsSectionData = {
    testimonialsSectionTitle: edges[0].node.testimonials_heading[0].text,
    testimonialsSectionSubTitle: edges[0].node.testimonials_sub_heading[0].text,
    testimonials: edges[0].node.testimonials.map(testimonial => {
      return {
        customerName: testimonial.customer_name[0].text,
        customerDesignation: testimonial.customer_designation[0].text,
        customerTestimonial: testimonial.customer_testimonial[0].text,
        customerImage: testimonial.customer_image.url
      }
    })
  }

  const bookDemoSectionData = {
    bookDemoSectionTitle: edges[0].node.demo_section_heading[0].text,
    bookDemoSectionSubTitle: edges[0].node.demo_section_sub_heading[0].text
  }

  return (
    <Layout>
      <SEO {...seoData} />
      <HeroSection data={heroSectionData} />
      <NumberSection data={numberSectionData} />
      <VideoSection data={videoSectionData} />
      <ForBrokers data={forBrokersSectionData} />
      <AuctmWorking data={auctmWorkingSectionData} />
      <Tesimonials data={testimonialsSectionData} />
      <BookDemo data={bookDemoSectionData} showBg={false} />
    </Layout>
  )
}

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.any
}

export const query = graphql`
{
  prismic {
    allHomepages {
      edges {
        node {
          hero_title_cta_text
          hero_title_main
          number_section_title
          for_brokers_heading
          for_brokers_sub_heading
          number_field {
            number_field_number
            number_field_title
          }
          for_brokers_features {
            feature_description
            feature_highlights
            feature_poster_url {
              ... on PRISMIC__ImageLink {
                url
                name
              }
            }
            feature_title
            feature_video_duration
            feature_video_url {
              ... on PRISMIC__FileLink {
                url
                name
              }
            }
            feature_link
          }
          auctm_working_section_heading
          auctm_working_section_sub_heading
          demo_section_heading
          demo_section_sub_heading
          testimonials_heading
          testimonials_sub_heading
          video_section_heading
          video_section_sub_heading
          testimonials {
            customer_designation
            customer_image {
              ... on PRISMIC__ImageLink {
                url
                name
              }
            }
            customer_name
            customer_testimonial
          }
          hero_title_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          for_brokers_cta_link {
            ... on PRISMIC__ExternalLink {
              url
            }
          }
          for_brokers_cta_text
          for_brokers_cta_id
          auctm_working_desktop_poster {
            ... on PRISMIC__ImageLink {
              url
            }
          }
          auctm_working_desktop_video {
            ... on PRISMIC__FileLink {
              url
            }
          }
          auctm_working_mobile_poster {
            ... on PRISMIC__ImageLink {
              _linkType
              url
            }
          }
          auctm_working_mobile_video {
            ... on PRISMIC__FileLink {
              url
            }
          }
        }
      }
    }
    allSeos(uid: "homepage") {
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
