import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Tab } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("../styles/itemList.module.scss")

const ItemList: React.VFC = () => {

  const categories = [
    {
      id: 1,
      name: "test"
    },
    {
      id: 2,
      name: "test2"
    }
  ]

  const { allMicrocmsItem } = useStaticQuery<GatsbyTypes.ItemListQuery>(
    graphql`
      query ItemList {
        allMicrocmsItem {
          group(field: category) {
            edges {
              node {
                id
                category
                name
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <section className={Styles.section}>
        <div className={Styles.wrapper}>
          <h2 className={Styles.sectionTitle}>商品一覧</h2>

          <Tab.Group>
            <Tab.List className={Styles.tabList}>
              {allMicrocmsItem.group.map(({edges}) => (
                edges.map(({node}) => (
                  <Tab
                    className={({selected}) => 
                      selected ? `${Styles.tab} ${Styles.selected}` : `${Styles.tab}`}
                    key={node.id}
                    >
                    {node.category}
                  </Tab>
                ))
              ))}
            </Tab.List>

            <Tab.Panels className={Styles.body}>
              {allMicrocmsItem.group.map(({edges}) => (
                edges.map(({node}) => (
                  node?.category?.map((test) => (
                    <Tab.Panel className={Styles.itemList}>
                      gjaprjew
                    </Tab.Panel>
                  )
                  )
                )))
              )}
            </Tab.Panels>
            {/*
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
            */}
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default ItemList