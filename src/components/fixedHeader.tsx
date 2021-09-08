import * as React from "react"

import { Link } from "gatsby"

const Styles = require("../styles/fixedHeader.module.scss")

const FixedHeader: React.VFC = () => {
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