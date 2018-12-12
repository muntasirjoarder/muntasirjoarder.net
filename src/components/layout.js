import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            url
            site_name
            screenshot
            twitterhandle
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
            { name: 'og:locale', content: 'en_US'},
            { name: 'og:type', content: 'website'},
            { name: 'og:title', content: data.site.siteMetadata.title},
            { name: 'og:description', content: data.site.siteMetadata.description},
            { name: 'og:url', content: data.site.siteMetadata.url},
            { name: 'og:site_name', content: data.site.siteMetadata.site_name},
            { name: 'og:image', content: data.site.siteMetadata.screenshot},
            { name: 'twitter:card', content: 'summary'},
            { name: 'twitter:description', content: data.site.siteMetadata.description},
            { name: 'twitter:title', content: data.site.siteMetadata.title},
            { name: 'twitter:site', content: data.site.siteMetadata.twitterhandle},
            { name: 'twitter:image', content: data.site.siteMetadata.screenshot},
            { name: 'twitter:creator', content: data.site.siteMetadata.twitterhandle},
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
          {children}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
