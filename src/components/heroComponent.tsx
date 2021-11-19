import * as React from "react"

import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"

const Styles = require("../styles/heroComponent.module.scss")

interface Props {
  image: IGatsbyImageData
  alt: string
  h1Title: string
  text?: string
  vh?: number
}

const HeroComponent: React.VFC<Props> = ({ image, alt, h1Title, text, vh}) => (
  <div className={Styles.heroWrapper}>
    <GatsbyImage
      image={image}
      alt={alt}
      className={Styles.img}
      style={{height: `${vh}vh`}}
    />

    <div className={Styles.textWrapper}>
      <h1>{h1Title}</h1>

      {text && 
        <p>{text}</p>
      }
    </div>
  </div>
)

export default HeroComponent