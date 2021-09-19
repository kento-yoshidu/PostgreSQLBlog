import * as React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/button.module.scss")

type Props = {
	link: string
	text: string
}

const Button: React.VFC<Props> = ({link, text}) => (
	<Link
		to={link}
		className={Styles.button}
	>
		<span>{text}</span>
	</Link>
)

export default Button