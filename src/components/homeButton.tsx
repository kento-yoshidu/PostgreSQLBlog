import * as React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/homeButton.module.scss");

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