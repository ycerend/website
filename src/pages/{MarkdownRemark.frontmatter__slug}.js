import React from "react"
import { graphql } from "gatsby"
import { Page } from "/src/components/Elements"
import { FloatingToc } from "/src/components/FloatingToc"
import { Link as IntlLink } from "gatsby-plugin-intl"

export default function Layout({data}) {
  const markdownRemark = data.markdownRemark
  const allMarkdownRemark = data.allMarkdownRemark.edges
  function fn(node) {
    const frontmatter=node.frontmatter
    const pos = frontmatter.slug.lastIndexOf('/')
    const parent = frontmatter.slug.substring(0, pos)
    const isRelated = markdownRemark.frontmatter.slug.indexOf(parent) != -1
    const level = frontmatter.slug.split('/').length - 2
    return (
      isRelated ? <div><IntlLink to={frontmatter.slug} style={{textDecoration: "none", paddingLeft: level*20}}>{frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}</IntlLink></div> : ""
    )
  }
  return (
    <Page>
      <FloatingToc>
        {allMarkdownRemark.map( ({ node }) => fn(node) )}
      </FloatingToc>
      <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
    </Page>
  )
}
export const pageQuery = graphql` 
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        title
      }
    },
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___slug]
        order: ASC
      }
    ) {
      edges {
        node {
          html
          frontmatter {
            slug
            title
            navtitle
          }
        }
      }
    }
  }
`