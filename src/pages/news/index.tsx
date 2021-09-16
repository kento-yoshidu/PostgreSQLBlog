import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { node } from "prop-types"

const News = () => {
	const { allMicrocmsNews } = useStaticQuery<GatsbyTypes.CurrentNewsListQuery>(
		graphql`
			query CurrentNewsList {
				allMicrocmsNews(filter: {flag: {eq: true}}) {
					edges {
						node {
							id
							createdAt(formatString: "YYYY.MM.DD hh:mm")
							title
							body
							newsId
						}
					}
				}
			}
		`
	)

	return (
		<ul className="newsList">
			{allMicrocmsNews.edges.map(({node}) => (
				<li
					className="newListItem"
					key={node.id}
					id={node.id}
					style={{height: "100vh"}}
				>
					<h2>
						{node.title}
					</h2>
					<time>
						{node.createdAt}
					</time>
					<p>
						{node.body}
					</p>
				</li>
			))}
		</ul>
	)
}

export default News