import * as React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  console.log(data) 

  return (
    <main
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    microcmsBlog(id: { eq: $id }) {
      id
      title
      body
    }
    previous: microcmsBlog(id: { eq: $previousPostId }) {
      id
      title
    }
    next: microcmsBlog(id: { eq: $nextPostId }) {
      title
    }
  }
`