import React, { useState, useEffect } from "react"
import { Switch } from "@headlessui/react"

const Styles = require("./UIButton.module.scss")

const UIButton = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`
          ${Styles.toggleButton}
          ${enabled ? `${Styles.on}` : `${Styles.off}`}
        `}
      >
        <span
          className={`
            ${Styles.toggleBall} 
            ${enabled ? `${Styles.on}` : `${Styles.off}`}
          `}
        />
      </Switch>
    </>
  )
}

export default UIButton