import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Button from "../components/button"

const Styles = require("../styles/newsList.module.scss")

const NewsList: React.VFC = () => {

	const { allMicrocmsNews } = useStaticQuery<GatsbyTypes.NewsListQuery>(
		graphql`
			query NewsList {
				allMicrocmsNews(
					limit: 5,
					filter: {
						flag: {eq: true}
					}
					sort: {
						fields: createdAt,
						order: DESC
					}
				) {
					edges {
						node {
							id
							createdAt(formatString: "YYYY.MM.DD HH:mm")
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
		<section className={Styles.section}>
			<ul className="newsList">
				{allMicrocmsNews.edges.map(({node}) => (
					<li key={node.id}>
						<time>{node.createdAt}</time>
						<Link to={`/news#${node.id}`}>{node.title}</Link>
					</li>
				))}
			</ul>

			<Button
				link="/news/"
				text="more"
			/>
		</section>
	)
}

export default NewsList