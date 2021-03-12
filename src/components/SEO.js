import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEOWrapper = (props) => {
  const { title, desc, pathname, article, node, data, image } = props

  const { site } = data

  const {
    buildTime,
    siteMetadata: {
      siteUrl,
      defaultTitle,
      defaultDescription,
      defaultBanner,
      headline,
      siteLanguage,
      author
    }
  } = site

  const seo = {
    title: (title || defaultTitle) + ' | Auctm',
    description: desc || defaultDescription,
    image: `${image}`,
    url: `${siteUrl}${pathname || ''}`
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author
    },
    copyrightYear: '2020',
    creator: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    datePublished: '2020-07-08T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`
    }
  }

  // Initial breadcrumb list

  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage'
      },
      position: 1
    }
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      '@context': 'http://schema.org',
      '@type': 'Article',
      author: {
        '@type': 'Person',
        name: author
      },
      copyrightHolder: {
        '@type': 'Person',
        name: author
      },
      copyrightYear: '2019',
      creator: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}${defaultBanner}`
        }
      },
      datePublished: node.first_publication_date,
      dateModified: node.last_publication_date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.url,
      name: seo.title,
      image: {
        '@type': 'ImageObject',
        url: seo.image
      },
      mainEntityOfPage: seo.url
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title
      },
      position: 2
    })
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />
        <meta name='description' content={seo.description} />
        <meta name='image' content={seo.image} />
        <meta name='auctm-website' content='Auctm Wesbite' />

        {/* Facebook */}
        <meta property='og:title' content={title} />
        <meta property='og:url' content={`${siteUrl}${pathname}`} />
        <meta property='og:description' content={desc} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='website' />
        <meta property='og:image:alt' content={desc} />
        <meta property='og:site_name' content='Auctm' />
        {/* Twitter */}
        <meta name='twitter:title' content={title} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={desc} />
        <meta name='twitter:image:src' content={image} />
        <meta name='twitter:image:alt' content={desc} />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {!article && <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>}
        {article && <script type='application/ld+json'>{JSON.stringify(schemaArticle)}</script>}
        <script type='application/ld+json'>{JSON.stringify(breadcrumb)}</script>
      </Helmet>
    </>
  )
}
SEOWrapper.propTypes = {
  data: PropTypes.any,
  title: PropTypes.string,
  desc: PropTypes.string,
  banner: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
  node: PropTypes.object,
  image: PropTypes.string
}
SEOWrapper.defaultProps = {
  data: PropTypes.any,
  title: null,
  desc: null,
  banner: null,
  pathname: null,
  article: false,
  node: null
}

export default function SEO (props) {
  return (
    <StaticQuery
      query={graphql`
        query SEO {
          site {
            buildTime(formatString: "YYYY-MM-DD")
            siteMetadata {
              siteUrl
              defaultTitle: title
              defaultDescription: description
              author
            }
          }
        }
      `}
      render={data => <SEOWrapper data={data} {...props} />}
    />
  )
}
