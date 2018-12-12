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
            facebook{
                title
                description
                url
                site_name
                image
              }
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
            { name: 'og:title', content: data.site.siteMetadata.facebook.title},
            { name: 'og:description', content: data.site.siteMetadata.facebook.description},
            { name: 'og:url', content: data.site.siteMetadata.facebook.url},
            { name: 'og:site_name', content: data.site.siteMetadata.facebook.site_name},
            { name: 'og:image', content: data.site.siteMetadata.facebook.image},
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
