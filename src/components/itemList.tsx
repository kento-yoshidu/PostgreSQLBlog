import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Tab } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"

const Styles = require("../styles/itemList.module.scss")

const ItemList: React.VFC = () => {

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
                image {
                  url
                }
              }
            }
            fieldValue
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
                        <img src={node.image.url} />
                      </div>
                      <p>{node.name}</p>
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