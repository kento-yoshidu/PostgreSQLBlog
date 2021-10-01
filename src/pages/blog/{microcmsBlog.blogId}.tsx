import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import BlogHero from "../../components/blogHero"
import Button from "../../components/button"
import Footer from "../../components/footer"

const Styles = require("../../styles/blogPost.module.scss")

type Props = {
  data: GatsbyTypes.BlogPageQuery,
  location: {
    pathname: string
  }
}

const BlogPage: React.VFC<Props> = ({ data, location }) => {
  return (
    <Layout
      pageTitle={data.microcmsBlog?.title}
      pagepath={location.pathname}
    >

      <BlogHero
        url={data.microcmsBlog?.image?.url}
      />

      <main
        dangerouslySetInnerHTML={{
          __html: `${data.microcmsBlog?.body}`,
        }}
        className={Styles.blogPost}
      />

      <Button
        link="/"
        text="HOMR"
      />

      <Footer />

    </Layout>
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