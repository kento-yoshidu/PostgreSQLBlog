import React from "react"
import { Link } from "gatsby"

import * as Styles from "../styles/homeButton.module.scss"

const HomeButton = () => (
  <div className={Styles.wrapper}>
    <Link
      to="/"
      className={Styles.button}
    >
      HOME
    </Link>
  </div>
)

export default HomeButton