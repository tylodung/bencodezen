import React from 'react'

export default ({ data }) => {
	console.log(data)
	return (
		<div>
			<h1>Amazing Pandas Eating Things</h1>
			<h4>{data.allMarkdownRemark.totalCount} Posts</h4>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<div key={node.id}>
					<h3>
						{node.frontmatter.title}{' '}
						<span>— {node.frontmatter.date}</span>
					</h3>
					<p>{node.excerpt}</p>
				</div>
			))}
		</div>
	)
}

export const query = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY")
					}
					excerpt
				}
			}
		}
	}
`
