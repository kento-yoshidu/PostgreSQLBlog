import React, { ReactNode } from "react"

import Seo from "../components/seo"
import FixedHeader from "../components/fixedHeader"

type Props = {
	children: ReactNode,
	pageTitle?: string,
	pagepath?: string,
}

const Layout: React.VFC<Props> = ({ children, pageTitle, pagepath }) => (
	<div className="allWrapper">

		<Seo
			pageTitle={pageTitle}
			pagepath={pagepath}
		/>

		<FixedHeader />

		{ children }

	</div>
)

export default Layout