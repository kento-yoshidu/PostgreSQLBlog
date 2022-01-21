import React/*, { useState, useEffect }*/ from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"
import HeroComponent from "../components/heroComponent"
import NewsList from "../components/newsList"
import BlogList from "../components/blogList"
import ItemList from "../components/itemList"
import Footer from "../components/footer"

import * as Styles from "../scss/style.module.scss"

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
        h1Title="Gatsby & microCMS site"
        text="GatsbyとmicroCMSでJamstackなサイトを構築しました。"
      />

      <main className={Styles.main}>
        <NewsList />

        <BlogList />

        <ItemList />

        <Footer />
      </main>

    </Layout>
  )
}

export default IndexPage

export const Hero = graphql`
  query HeroImage {
    file(relativePath: {eq: "topimage.jpg"}) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`