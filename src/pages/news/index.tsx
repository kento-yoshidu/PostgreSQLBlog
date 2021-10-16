import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroComponent from "../../components/heroComponent"
import Button from "../../components/button"
import HomeButton from "../../components/homeButton"
import Footer from "../../components/footer"

import "../../scss/style.scss"
const Styles = require("../../styles/news.module.scss");

type Props = {
	data: GatsbyTypes.CurrentNewsListQuery
}

const News: React.VFC<Props> = ({data}) => (
	<Layout>
		<Seo
			pageTitle="最新のお知らせ一覧"
		/>

		<HeroComponent
			image={data.file?.childImageSharp?.gatsbyImageData}
			alt="カプチーノの画像"
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

			<Button
				link="/news/old/"
				text="過去のお知らせを見る"
			/>

			<HomeButton />

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
		file
			(relativePath: {eq: "news.jpg"}) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
			}
	}
`
