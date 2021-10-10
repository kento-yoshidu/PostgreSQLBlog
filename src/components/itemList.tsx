import React, { useState } from "react"
import { Tab } from '@headlessui/react'

const Styles = require("../styles/itemList.module.scss")

const ItemList: React.VFC = () => {
  //const [checked, setChecked] = useState(false)

  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.wrapper}>
          <h2 className={Styles.sectionTitle}>商品一覧</h2>

          <Tab.Group>
            <Tab.List className={Styles.tabList}>
              <Tab
                className={({selected}) => 
                  selected ? `${Styles.tab} ${Styles.selected}` : `${Styles.tab}`}
                >
                ge
              </Tab>

              <Tab className={Styles.tab}>
                スイーツ
              </Tab>
            </Tab.List>

            <Tab.Panels>
              <Tab.Panel>Content 1</Tab.Panel>
              <Tab.Panel>Content 2</Tab.Panel>
              <Tab.Panel>Content 3</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default ItemList