import React from "react"

import { /*GatsbyImage StaticImage*/ } from "gatsby-plugin-image"

import * as Styles from "../styles/blogHero.module.scss"

const BlogHero = ({url}) => {
	return (
		<header className={Styles.blogHero}>
			<img	
				src={url}
				alt="ブログタイトル"
			/>
		</header>
	)
}

export default BlogHero