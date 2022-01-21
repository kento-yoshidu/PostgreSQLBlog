import React from "react"

import * as Styles from "../styles/blogHero.module.scss"

type Props = {
  url: any
}

const BlogHero: React.VFC<Props> = ({url}) => {
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