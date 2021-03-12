/* eslint-disable */
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}`, })

module.exports = {
  siteMetadata: {
    title: `Auctm`,
    description: `AI powered solution for real estate teams`,
    author: `SquadStack`,
    siteUrl: `https://www.auctm.com`,
    banner: `src/images/favicon.ico`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.15, // Percentage of an element's area that needs to be visible to launch animation
          once: true, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations
        
          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
    `gatsby-plugin-use-query-params`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-plugin-advanced-sitemap`,
      options: {
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/terms`,
          `/privacy-policy`,
        ],
        createLinkInHead: true, // optional: create a link in the `<head>` of your site
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: 'gatsby-source-prismic-graphql',
        options: {
            repositoryName: 'auctm',
            defaultLang: 'en-us',
            accessToken: process.env.GATSBY_PRISMIC_TOKEN
        }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `auctm-website`,
        short_name: `auctm`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: `GTM-NZKGRDL`,
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false
      },
    },
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
          trackingCode: `6562043`,
          respectDNT: false,
          productionOnly: true,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
