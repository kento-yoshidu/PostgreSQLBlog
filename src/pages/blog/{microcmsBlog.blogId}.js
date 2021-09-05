import React from "react"
import { graphql } from "gatsby"

import * as Styles from "../../styles/blogPost.module.scss"

const BlogPage = ({ data }) => (
	<>
    <main
      dangerouslySetInnerHTML={{
        __html: `${data.microcmsBlog.body}`,
      }}
      className={Styles.blogPost}
    />
  </>
)


export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      body
    }
  }
`