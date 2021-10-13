import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import FixedHeader from "../../components/fixedHeader"
import Button from "../../components/button"
import Footer from "../../components/footer"

import "../../scss/style.scss"
const Styles = require("../../styles/news.module.scss");

type Props = {
	data: GatsbyTypes.NewsListQuery
}

const News: React.VFC<Props> = ({data}) => (
	<Layout>
		<Seo
			pageTitle="最新のお知らせ一覧"
		/>

		<FixedHeader />

		<div className="heroWrapper">
			<StaticImage
				src="../../images/news.jpg"
				alt="珈琲の画像"
				placeholder="blurred"
				className="img"
				objectFit="cover"
			/>
		</div>

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

				<Button
					link="/news/old/"
					text="過去のお知らせを見る"
				/>

			</ul>
			<Footer />
		</main>
	</Layout>
)

export default News

export const CurrentNewsList = graphql`
		query CurrentNewsList {
			allMicrocmsNews(
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
						createdAt(formatString: "YYYY.MM.DD hh:mm")
						title
						body
						newsId
					}
				}
			}
		}
	`
