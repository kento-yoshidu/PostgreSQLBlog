import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroComponent from "../../components/heroComponent"
import LinkButton from "../../components/linkButton"
import HomeButton from "../../components/homeButton"
import Footer from "../../components/footer"

const Styles = require("../../styles/news.module.scss")

type Props = {
	data: GatsbyTypes.OldNewsListQuery
}

const OldNews: React.VFC<Props> = ({data}) => (
	<Layout>
		<Seo
			pageTitle="過去のお知らせ一覧"
		/>

		<HeroComponent
			image={data?.file?.childImageSharp?.gatsbyImageData}
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

			<LinkButton
				link="/news/"
				text="最新のお知らせを見る"
			/>

			<HomeButton />

			<Footer />
		</main>
	</Layout>
)

export default OldNews

export const CurrentNewsList = graphql`
		query OldNewsList {
			allMicrocmsNews (
				filter: {
					flag: {eq: false}
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
			file(relativePath: {eq: "news.jpg"}) {
				childImageSharp {
					gatsbyImageData(layout: FULL_WIDTH)
				}
			}
		}
	`
