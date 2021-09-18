import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../../components/seo"
import FixedHeader from "../../components/fixedHeader"
import Footer from "../../components/footer"

import * as Styles from "../../styles/news.module.scss"

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
				src="../../images/news.jpg"
				alt="珈琲の画像"
				placeholder="blurred"
				className="img"
				objectPosition={0}
			/>

			<main className={Styles.main}>
				<ul className={Styles.newsList}>
					{data.allMicrocmsNews.edges.map(({node}) => (
						<li
							className={Styles.newsListItem}
							key={node.id}
							id={node.id}
						>
							<h2>
								{node.title}
							</h2>
							<time>
								{node.createdAt}
							</time>
							<div
								dangerouslySetInnerHTML={{
									__html: `${node.body}`
								}}
							/>
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
