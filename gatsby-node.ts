import type { GatsbyNode } from "gatsby"
import path from "path"

const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogData = await graphql(
    `
      query BlogData {
        allMicrocmsBlog(
          sort: {
            fields: createdAt,
            order: DESC
          }
        ) {
          edges {
            node {
              id
              blogId
              body
            }
            next {
              id
              title
            }
            previous {
              id
              title
            }
          }
        }
      }
    `
  )

  BlogData.data.allMicrocmsBlog.edges.map((edge, index) => {

    const previousPostId = index === 0 ? null : BlogData.data.allMicrocmsBlog.edges[index - 1].node.id
    const nextPostId = index === BlogData.data.allMicrocmsBlog.edges.length - 1 ? null : BlogData.data.allMicrocmsBlog.edges[index + 1].node.id

    createPage({
      path: `/blog/${edge.node.blogId}/`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        id: edge.node.id,
        previousPostId,
        nextPostId
      },
    })
  })

}

export { createPages }