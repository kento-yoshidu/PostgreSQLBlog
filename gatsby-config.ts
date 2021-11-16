import type { GatsbyConfig } from "gatsby"

const plugins: GatsbyConfig['plugins'] = [
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`,
    },
  },
  `gatsby-plugin-gatsby-cloud`,
  // `gatsby-plugin-offline`,
  {
    resolve: "gatsby-source-microcms",
    options: {
      apiKey: process.env.API_KEY,
      serviceId: 'jamsample',
      apis: [
        {
          endpoint: "blog",
        },
        {
          endpoint: "news"
        },
        {
          endpoint: "item"
        },
      ],
    },
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-typegen`
]

const siteMetadata: GatsbyConfig['siteMetadata'] = {
    title: `Gatsby & microCMS Site`,
    description: `GatsbyとmicroCMSで作成したサンプルサイトです`,
    lang: `ja`,
    siteUrl: `https://toriwatari.worksample`,
    locale: `ja_JP`
}

const config: GatsbyConfig = {
  siteMetadata,
  plugins
}

export default config