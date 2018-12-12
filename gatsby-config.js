module.exports = {
  siteMetadata: {
    title: 'Full Stack Web/App Developer',
    description: 'Muntasir Joarder, a passionate Full Stack Developer from Australia with more than 15 years of experience on building beautiful and unique Websites and Apps using advanced front-end and back-end technologies.',
    keywords: 'Hyperledger Fabric Blockchain Developer Australia, Web Application Development Company, Web Application Development Company Brisbane, Front End Development, Blockchain Development Brisbane, Blockchain Development, Gatsbyjs static website developer, ReactJS developer,web development services, headless CMS developer',
    facebook: {
      title: 'Full Stack Web/App Developer',
      description:'Muntasir Joarder, a passionate Full Stack Developer from Australia with more than 15 years of experience on building beautiful and unique Websites and Apps using advanced front-end and back-end technologies.',
      url: 'https://muntasirjoarder.net',
      site_name: 'Muntasir Joarder',
      image: 'src/images/screenshot.png'
    }
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
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
