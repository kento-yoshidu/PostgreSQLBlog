import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const InfoList: React.VFC = () => {

	const { allMicrocmsNews } = useStaticQuery<GatsbyTypes.InfoListQuery>(
		graphql`
			query InfoList{
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

	console.log(allMicrocmsNews)

	return (
		<p>hoge</p>
	)
}

export default InfoList