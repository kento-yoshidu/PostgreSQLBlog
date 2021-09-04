import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import * as Styles from "../styles/blogList.module.scss"

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
							update(formatString: "YYYY年MM月DD日")
							date(formatString: "YYYY年MM月DD日")
						}
					}
				}
			}
		`
	)

	return (
		<section class={Styles.section}>
			<h2 class="sectionTItle">ブログ</h2>
			<ul className={Styles.blogList}>
				{allMicrocmsBlog.edges.map(({node}) => (
					<li
						key={node.blogId}
						className={Styles.listItem}
					>
						<p><time>投稿日時 {node.date}</time></p>
						<p><time>更新日時 {node.update}</time></p>
						<Link
							to={`/blog/${node.blogId}/`}
						>
							{node.title}
						</Link>
					</li>
				))}
			</ul>
		</section>
	)
}

export default BlogList
