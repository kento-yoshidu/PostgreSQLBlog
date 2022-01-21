import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser"
import { Tab } from '@headlessui/react'

import * as Styles from "../styles/itemList.module.scss"

const ItemList: React.VFC = () => {

  const { allMicrocmsItem } = useStaticQuery<GatsbyTypes.ItemListQuery>(
    graphql`
      query ItemList {
        allMicrocmsItem (
          sort: {fields: No}
        ) {
          group(field: category) {
            fieldValue
            edges {
              node {
                id
                category
                name
                price
                body
                image {
                  height
                  url
                  width
                }
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
              {allMicrocmsItem.group.map(({fieldValue}) => (
                <Tab
                  className={({selected}) => 
                    selected ? `${Styles.tab} ${Styles.selected}` : `${Styles.tab}`}
                  key={fieldValue}
                >
                  {fieldValue}
                </Tab>
              ))}
            </Tab.List>

            <Tab.Panels className={Styles.body}>
              {allMicrocmsItem.group.map(({edges}) => (
                <Tab.Panel className={Styles.itemList}>
                  {edges.map(({node}) => (
                    <div
                      className={Styles.item}
                      key={node.id}
                    >
                      <div className={Styles.imgWrapper}>
                        <img
                          src={node?.image?.url}
                          width={node?.image?.width}
                          height={node?.image?.height}
                        />
                      </div>
                      <p className={Styles.itemName}>{node.name}</p>
                      <p className={Styles.itemPrice}>{node.price}円</p>
                      <p className={Styles.itemBody}>{node.body}</p>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </>
  )
}

export default ItemList