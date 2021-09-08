import React from "react"
import { graphql } from "gatsby"

import Seo from "../../components/seo"
import FixedHeader from "../../components/fixedHeader"
import BlogHero from "../../components/blogHero"

import * as Styles from "../../styles/blogPost.module.scss"

const BlogPage = ({ data, location }) => {
  return (
    <>
      <Seo
        pagetitle={data.microcmsBlog.title}
        pagepath={location.pathname}
      />

      <FixedHeader />

      <BlogHero
        url={data.microcmsBlog.image.url}
      />

      <main
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlog.body}`,
        }}
        className={Styles.blogPost}
      />

    </>
  )
}


export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
      image {
        url
      }
    }
  }
`