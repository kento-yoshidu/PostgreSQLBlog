import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import FixedHeader from "../components/fixedHeader"
import BlogList from "../components/blogList"

import "../scss/style.scss"

const IndexPage = () => {
  return (
    <>
      <Seo />

      <FixedHeader />

      <StaticImage
        src="../images/topimage.jpg"
        alt="珈琲の画像"
        placeholder="blurred"
        className="img"
      />

      <BlogList />
    </>
  )
}

export default IndexPage

//https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/