import * as React from "react"
import { Tab } from '@headlessui/react'

const Styles = require("../styles/itemList.module.scss")

//const styles = require()

const ItemList: React.VFC = () => (
  <>
    <section className={Styles.section}>
      <div className={Styles.wrapper}>
        <h2 className={Styles.sectionTitle}>商品一覧</h2>

        <Tab.Group>
          <Tab.List>
            <Tab>
              {({ selected }) => (
                <button
                  className={`
                    ${Styles.tab}
                    ${selected && `${Styles.selected}`}
                  `}
                >
                  珈琲・紅茶
                </button>
              )}
            </Tab>

            <Tab>
              {({ selected }) => (
                <button
                  className={`
                    ${Styles.tab}
                    ${selected && `${Styles.selected}`}
                  `}
                >
                  スイーツ
                </button>
              )}
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

export default ItemList