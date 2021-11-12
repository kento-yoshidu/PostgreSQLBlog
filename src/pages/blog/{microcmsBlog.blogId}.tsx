import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import BlogHero from "../../components/blogHero"
import HomeButton from "../../components/homeButton"
import Footer from "../../components/footer"

const Styles = require("../../styles/blogPost.module.scss")

type Props = {
  data: GatsbyTypes.BlogPageQuery,
  location: {
    pathname: string
  }
}

const BlogPage: React.VFC<Props> = ({ data, location }) => {
  console.log(data)
  return (
    <Layout
      pageTitle={data.allMicrocmsBlog?.edges[0].node.title}
      pagepath={location.pathname}
    >

      <BlogHero
        url={data.allMicrocmsBlog?.edges[0].node.image?.url}
      />

      <main
        dangerouslySetInnerHTML={{
          __html: `${data.allMicrocmsBlog?.edges[0].node.body}`,
        }}
        className={Styles.blogPost}
      />

      <p>{data?.allMicrocmsBlog?.edges?.next?.title}</p>
      <p>{data?.allMicrocmsBlog?.edges?.previous?.title}</p>

      <HomeButton />

      <Footer />

    </Layout>
  )
}

export default BlogPage

export const query = graphql`
query BlogPage($id: String!) {
  allMicrocmsBlog(filter: {id: {eq: $id}}) {
    edges {
      node {
        blogId
        title
        body
        image {
          url
        }
        id
      }
      previous {
        id
        title
      }
      next {
        id
        title
      }
    }
  }
}
`


/*
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
*/