import React/*, { useState, useEffect }*/ from 'react'

import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import FixedHeader from "../components/fixedHeader"
import NewsList from "../components/newsList"
import BlogList from "../components/blogList"
import ItemList from "../components/itemList"
import Footer from "../components/footer"

import "../scss/style.scss"

const IndexPage: React.VFC = () => {
  return (
    <Layout>
      <FixedHeader />

      <div className="heroWrapper">
        <StaticImage
          src="../images/topimage.jpg"
          alt="珈琲の画像"
          placeholder="blurred"
          class="img"
        />
      </div>

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