import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const InfoList = () => {

	const { edges } = useStaticQuery<GatsbyTypes.MyQueryQuery>(
		graphql`
			query MyQuery {
				allMicrocmsNews {
					edges {
						node {
							flag
							newsId
							title
							body
						}
					}
				}
			}
		`
	)

	console.log(edges)

	return (
		<p>hoge</p>
	)
}

export default InfoList