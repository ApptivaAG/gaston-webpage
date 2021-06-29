module.exports = {
  siteMetadata: {
    title: `Gaston`,
    description: `The delightful service solution for restaurant hospitality.`,
    author: `@ApptivaTeam`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 400,
              linkImagesToOriginal: false,
              withAvif: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gaston`,
        short_name: `gaston`,
        start_url: `/`,
        background_color: `#EEEEEE`,
        theme_color: `#E11387`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `de`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: {
        prefixes: [`/de/offers/*`, `/en/offers/*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-66015649-9', // Google Analytics / GA
          'AW-869564557', // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
        },
      },
    },
    'gatsby-plugin-netlify-cache',
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          style: {
            overlay: {
              position: `fixed`,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: `rgba(103, 99, 99, 0.75)`,
              display: `flex`,
              justifyContent: `center`,
            },
            content: {
              position: `absolute`,
              border: `solid 1px #E11387`,
              background: `#EEEEEE`,
              overflow: `auto`,
              WebkitOverflowScrolling: `touch`,
              zIndex: 1000,
              maxWidth: `600px`,
              margin: `2em auto`,
            },
          },
          contentLabel: `Modal`,
        },
      },
    },
  ],
}
