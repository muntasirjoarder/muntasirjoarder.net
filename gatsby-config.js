/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Full Stack Data Specialist`,
    description: `Muntasir Joarder, Microsoft Certified: Azure Data Engineer Associate, is a passionate Full Stack Data Developer from Australia with more than 15 years of industry experience.`,
    keywords: `Azure Data Engineer, Power BI, Microsoft Fabric, Data Modelling, Data Visualization, Data Integration, Data Architect, data build tool (dbt), DAX`,
    url: `https://muntasirjoarder.net`,
    site_name: `Muntasir Joarder`,
    screenshot: `https://drik.co/wp-content/uploads/screenshot.png`,
    twitterhandle: `@muntasirJoarder`,
    author: `@gatsbyjs`
    },
  plugins: [
   'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Saira Extra Condensed\:500,700`,
          `Muli\:400,400i,800,800i` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-KTK7TQT",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
  ],
}
