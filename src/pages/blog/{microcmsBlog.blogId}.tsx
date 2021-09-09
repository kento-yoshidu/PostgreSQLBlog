import React from "react"
import { graphql } from "gatsby"

import Seo from "../../components/seo"
import FixedHeader from "../../components/fixedHeader"
import BlogHero from "../../components/blogHero"

const Styles = require("../../styles/blogPost.module.scss")

type Props = {
  data: GatsbyTypes.BlogPageQuery,
  location: {
    pathname: string
  }
}

const BlogPage: React.VFC<Props> = ({ data, location }) => {
  return (
    <>
      <Seo
        pageTitle={data.microcmsBlog?.title}
        pagepath={location.pathname}
      />

      <FixedHeader />

      <BlogHero
        url={data.microcmsBlog?.image?.url}
      />

      <main
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlog?.body}`,
        }}
        className={Styles.blogPost}
      />

    </>
  )
}


export default BlogPage

export const query = graphql`
  query BlogPage($id: String!) {
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