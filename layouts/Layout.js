import '../stylesheets/style.scss'

import React, { Component } from 'react'

import Head from 'next/head'
import PropTypes from 'prop-types'
import metadata from '../metadata'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>{this.props.pageTitle}</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require('../static/apple-touch-icon.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('../static/favicon-32x32.png')}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('../static/favicon-16x16.png')}
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/safari-pinned-tab.svg"
            color={this.props.colorHex}
          />
          <meta
            name="apple-mobile-web-app-title"
            content={this.props.pageTitle}
          />
          <meta name="application-name" content={this.props.pageTitle} />
          <meta name="description" content={metadata.pageTitle} />
          <meta name="msapplication-TileColor" content={this.props.colorHex} />
          <meta
            name="msapplication-config"
            content="/static/browserconfig.xml"
          />
          <meta name="theme-color" content={this.props.colorHex} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@rodrigowaldow" />
          <meta name="twitter:creator" content="@rodrigowaldow" />

          <meta property="og:url" content="https://www.rodrigowaldow.com.br" />
          <meta property="og:title" content="Rodrigo Waldow" />
          <meta
            property="og:description"
            content="Software developer from Surabaya, ID"
          />
          <meta
            property="og:image"
            content={require('../static/g-opengraph.jpg')}
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="670" />
        </Head>
        {this.props.children}
        <style global jsx>{`
          html,
          body,
          ::selection {
            background-color: ${this.props.colorHex};
          }
        `}</style>
      </div>
    )
  }
}

Layout.propTypes = {
  colorHex: PropTypes.string,
  pageTitle: PropTypes.string,
}

Layout.defaultProps = {
  colorHex: metadata.colorHex,
  pageTitle: metadata.pageTitle,
}
