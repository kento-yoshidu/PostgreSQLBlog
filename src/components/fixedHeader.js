import React from "react"

import { Link } from "gatsby"

import * as Styles from "../styles/fixedHeader.module.scss"

const FixedHeader = () => {
	return (
		<header className={Styles.fixedHeader}>
			<h1>
				<Link to="/">
					Gatsby Sample WebSite
				</Link>
			</h1>
		</header>
	)
}

export default FixedHeader