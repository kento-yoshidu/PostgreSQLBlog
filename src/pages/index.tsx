import React, { useState, useEffect } from 'react'
import { Switch } from '@headlessui/react'

import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import FixedHeader from "../components/fixedHeader"
import NewsList from "../components/newsList"
import BlogList from "../components/blogList"
import Footer from "../components/footer"


import "../scss/style.scss"

const IndexPage: React.VFC = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    window.alert('hoge')
  })

  return (
    <>
      <Seo />

      <FixedHeader />

      <StaticImage
        src="../images/topimage.jpg"
        alt="珈琲の画像"
        placeholder="blurred"
        className="img"
        objectPosition={0}
      />

      <main>

        <NewsList />

        <BlogList />

    <Switch.Group>
      <div className="flex items-center">
        <Switch.Label className="mr-4">Enable notifications</Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          <span
            className={`${
              enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
          />
        </Switch>
      </div>
    </Switch.Group>
        <Footer />
      </main>

    </>
  )
}

export default IndexPage

//https://www.inkoop.io/blog/gatsby-3-image-a-deep-dive-into-the-new-image-api-features/