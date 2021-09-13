import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

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
						<time>{node.createdAt}</time><a href="#">{node.title}</a>
					</li>
				))}
			</ul>
		</section>
	)
}

export default NewsList