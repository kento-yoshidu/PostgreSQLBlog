import React from "react"
import { Link, graphql } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  console.log(data)
  return (
    <p>
      <StaticImage
        src="../images/topimage.jpg"
        alt="珈琲の画像"
        placeholder="blurred"
      />

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

//https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/