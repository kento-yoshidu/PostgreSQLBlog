import React/*, { useState, useEffect }*/ from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import FixedHeader from "../components/fixedHeader"
import HeroComponent from "../components/heroComponent"
import NewsList from "../components/newsList"
import BlogList from "../components/blogList"
import ItemList from "../components/itemList"
import Footer from "../components/footer"

import "../scss/style.scss"

interface Props {
  data: GatsbyTypes.HeroImageQuery
}

const IndexPage: React.VFC<Props> = ({data}) => {
  const { file } = data

  return (
    <Layout>

      <HeroComponent
        image={file?.childImageSharp?.gatsbyImageData}
        alt="珈琲の画像"
      />

      <main>
        <NewsList />

        <BlogList />

        <ItemList />

        <Footer />
      </main>

    </Layout>
  )
}

export default IndexPage

//https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/

export const Hero = graphql`
  query HeroImage {
    file(relativePath: {eq: "topimage.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`