import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import FixedHeader from "../../components/fixedHeader"
import Footer from "../../components/footer"

type Props = {
	data: GatsbyTypes.NewsListQuery
}

const News: React.VFC<Props> = ({data}) => {
	return (
		<>
			<Seo
				pageTitle="最新のお知らせ一覧"
			/>

			<FixedHeader />

			<StaticImage
				src="../images/topimage.jpg"
				alt="珈琲の画像"
				placeholder="blurred"
				className="img"
				objectPosition={0}
			/>


			<main>
				<ul className="newsList">
					{data.allMicrocmsNews.edges.map(({node}) => (
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

				<Footer />
			</main>
		</>
	)
}

export default News

export const CurrentNewsList = graphql`
		query CurrentNewsList {
			allMicrocmsNews(
				filter: {
					flag: {eq: true}
				}
			) {
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
