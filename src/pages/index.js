import React from "react"
import { Link, graphql } from "gatsby"

const IndexPage = ({data}) => {
  /*
  return (
    <ul>
      {data.allMicrocmsBlog.edges.map(({ node }) => (
        <li key={node.blogId}>
          <Link to={`/blog/${node.blogId}`}>{node.title}</Link>
        </li>
      ))}
    </ul>
  )
  */
  return (
    <p>
      {data.allMicrocmsBlog.edges.map(({ node }) => {
        return (
          <p>{node.title}</p>
        )
      })}
    </p>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blogId
          title
        }
      }
    }
  }
`