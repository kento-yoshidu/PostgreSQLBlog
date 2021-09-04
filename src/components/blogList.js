import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogList = () =>{ 

	const { allMicrocmsBlog } = useStaticQuery(
		graphql`
			query {
				allMicrocmsBlog {
					edges {
						node {
							title
							blogId
							body
						}
					}
				}
			}
		`
	)

	return (
		<ul>
			{allMicrocmsBlog.edges.map(({node}) => (
				<li key={node.blogId}>
					<Link
						to={`/blog/${node.blogId}`}
					>
						{node.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

export default BlogList
