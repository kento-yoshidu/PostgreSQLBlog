import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import BlogHero from "../components/blogHero"
import HomeButton from "../components/homeButton"
import Footer from "../components/footer"

const Styles = require("../styles/blogPost.module.scss")
interface Props {
  data: GatsbyTypes.BlogPostBySlugQuery
}

const BlogPostTemplate: React.VFC<Props> = ({ data }) => {
  const post = data.microcmsBlog
  const prev = data.previous
  const next = data.next

  return (
    <Layout>

      <BlogHero
        url={post.image.url}
      />
      <main
        dangerouslySetInnerHTML={{
          __html: `${post.body}`,
        }}
        className={Styles.blogPost}
      />

      {prev &&
        <Link to={`/${prev.id}`}>
          {prev.title}
        </Link>
      }

      {next &&
        <Link to={`/${next.id}`}>
          {next.title}
        </Link>
      }

      <HomeButton />

      <Footer />
    </Layout>
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
      image {
        url
      }
    }
    previous: microcmsBlog(id: { eq: $previousPostId }) {
      id
      title
    }
    next: microcmsBlog(id: { eq: $nextPostId }) {
      id
      title
    }
  }
`