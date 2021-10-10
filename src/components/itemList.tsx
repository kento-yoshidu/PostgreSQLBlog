import React from "react"
import { Tab } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("../styles/itemList.module.scss")

const ItemList: React.VFC = () => {

  interface Categories {
    id: number,
    name: string
  }
  const categories: Categories = [
    { id: 1, name: "珈琲・紅茶"},
    { id: 2, name: "デザート"},
  ]
  
  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.wrapper}>
          <h2 className={Styles.sectionTitle}>商品一覧</h2>

          <Tab.Group>
            <Tab.List className={Styles.tabList}>
              {categories.map((category) => (
                <Tab
                  className={({selected}) => 
                    selected ? `${Styles.tab} ${Styles.selected}` : `${Styles.tab}`}
                  key={category.id}
                  >
                  {category.name}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className={Styles.body}>
              <Tab.Panel className={Styles.itemList}>
                <div className={Styles.item}>
                  <StaticImage
                    src="../images/news.jpg"
                    alt="hogehoge"
                    className={Styles.itemImage}
                  />
                </div>
                <p className={Styles.item}>gaijpgaj@</p>
                <p className={Styles.item}>gaijpgaj@</p>
                <p className={Styles.item}>gaijpgaj@</p>
                <p className={Styles.item}>gaijpgaj@</p>
              </Tab.Panel>
              <Tab.Panel className={Styles.itemList}>
                <p className={Styles.item}>ほｇｗｊｇぱ</p>
                <p className={Styles.item}>ほｇｗｊｇぱ</p>
                <p className={Styles.item}>ほｇｗｊｇぱ</p>
                <p className={Styles.item}>ほｇｗｊｇぱ</p>
                </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default ItemList