import * as React from "react"

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const Styles = require("../styles/heroComponent.module.scss")

interface Props {
  image: IGatsbyImageData
  alt: string
}

const HeroComponent: React.VFC<Props> = ({ image, alt }) => (
  <div className={Styles.heroWrapper}>
    <GatsbyImage
      image={image}
      alt={alt}
      //placeholder="blurred"
      className={Styles.img}
    />
  </div>
)

export default HeroComponent