import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/button.module.scss"

type Props = {
  link: string
  text: string
}

const LinkButton: React.VFC<Props> = ({link, text}) => (
  <div className={Styles.wrapper}>
    <Link
      to={link}
      className={Styles.button}
    >
      <span>{text}</span>
    </Link>
  </div>
)

export default LinkButton