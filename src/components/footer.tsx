import * as React from "react"
import { Link } from "gatsby"

const Styles = require("../styles/footer.module.scss")

const Footer: React.VFC = () => (
  <footer className={Styles.footer}>
    <div className={Styles.wrapper}>
      <h1 className={Styles.footerTitle}>
        Gatsby & microCMS Site
      </h1>
      <p>他のJamstackサイトを見る</p>

      <ul>
        <li>
          <Link to="https://ps.toriwatari.work/">
            PortfolioSite
          </Link>
        </li>
        <li>
          <Link to="https://cssanimation.toriwatari.work/">
            CSS Animation & Tips
          </Link>
        </li>
        <li>
          <Link to="https://blog.toriwatari.work/page/1/">
            鳥に生まれることができなかった人へ
          </Link>
        </li>
      </ul>
    </div>

  </footer>
)

export default Footer