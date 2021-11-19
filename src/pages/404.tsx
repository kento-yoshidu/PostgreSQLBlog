import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroComponent from "../components/heroComponent"

interface Props {
  location: {
    pathname: string
  }
}

const NotFoundPage: React.VFC<Props> = ({ location }) => {
  const heroImage = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "news.jpg"}) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo
        pageTitle="ページが見つかりません"
        pagepath={location.pathname}
      />

      <HeroComponent
        image={heroImage.file.childImageSharp.gatsbyImageData}
        alt="カプチーノの画像"
        h1Title="ページが見つかりません"
        vh={80}
      />

      <main>
        <h1>404: Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </main>
    </Layout>
  )
}

export default NotFoundPage
