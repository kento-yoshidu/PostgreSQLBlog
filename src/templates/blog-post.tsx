import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import BlogHero from "../components/blogHero"
import HomeButton from "../components/homeButton"
import Footer from "../components/footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons"

import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

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
        <Link
          to={`/blog/${prev.blogId}/`}
          className={Styles.prevLink}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          <p
            className={Styles.link}
          >
            {prev.title}
          </p>
        </Link>
      }

      {next &&
        <Link
          className={Styles.nextLink}
          to={`/blog/${next.blogId}/`}
        >
          <p
            className={Styles.link}
          >
            {next.title}
          </p>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
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
      blogId
      title
      body
      image {
        url
      }
    }
    previous: microcmsBlog(id: { eq: $previousPostId }) {
      blogId
      title
    }
    next: microcmsBlog(id: { eq: $nextPostId }) {
      blogId
      title
    }
  }
`