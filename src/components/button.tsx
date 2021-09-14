import * as React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/button.module.scss")

type Props = {
	link: string
}

const Button = ({link}) => (
	<Link
		to={link}
		className={Styles.button}
	>
		<span>more</span>
	</Link>
)

export default Button