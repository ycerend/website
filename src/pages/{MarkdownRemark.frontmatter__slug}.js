import React from "react"
import { graphql } from "gatsby"
import { Page, Card } from "/src/components/Elements"
import { FloatingToc } from "/src/components/FloatingToc"
import { Link as IntlLink } from "gatsby-plugin-intl"
import { Toc } from "/src/components/Toc"

export default function Layout({data}) {
  const markdownRemark = data.markdownRemark
  const allMarkdownRemark = data.allMarkdownRemark.edges
  function fnRelated(node) {
    const frontmatter=node.frontmatter
    const pos = frontmatter.slug.lastIndexOf('/')
    const parent = frontmatter.slug.substring(0, pos)
    const isRelated = markdownRemark.frontmatter.slug.indexOf(parent) != -1
    const level = frontmatter.slug.split('/').length - 2
    return (
      isRelated ? <div><IntlLink to={frontmatter.slug} style={{textDecoration: "none", paddingLeft: level*20}}>{frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}</IntlLink></div> : ""
    )
  }
  function fnToc(node) {
    const frontmatter=node.frontmatter
    const isChild = ((frontmatter.slug.indexOf(markdownRemark.frontmatter.slug) != -1) &&
                     (markdownRemark.frontmatter.slug != frontmatter.slug))
    const level = frontmatter.slug.split('/').length - markdownRemark.frontmatter.slug.split('/').length
    return (
      isChild ?
        <div>
          <IntlLink to={frontmatter.slug} style={{textDecoration: "none", paddingLeft: level*20}}>
            &gt;&nbsp;&nbsp;{frontmatter.title}
          </IntlLink>
        </div> : ""
    )
  }
  function fnBreadcrumbs(node) {
    const frontmatter=node.frontmatter
    const isParent = ((markdownRemark.frontmatter.slug.indexOf(frontmatter.slug) != -1) &&
                      (markdownRemark.frontmatter.slug != frontmatter.slug))
    return (
      isParent ?
        <span>
          <IntlLink to={frontmatter.slug} style={{textDecoration: "none"}}>
            {frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}
          </IntlLink>&nbsp;&nbsp;&gt;&nbsp;&nbsp;
        </span> : ""
    )
  }
  function fnParents(node) {
    const frontmatter=node.frontmatter
    const isParent = ((markdownRemark.frontmatter.slug.indexOf(frontmatter.slug) != -1) &&
                      (markdownRemark.frontmatter.slug != frontmatter.slug))
    return (
      isParent ?
        <div>
          &uarr;&nbsp;
          <IntlLink to={frontmatter.slug} style={{textDecoration: "none"}}>
            {frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}
          </IntlLink>
        </div> : ""
    )
  }
  function fnSiblings(node) {
    const my_pos = markdownRemark.frontmatter.slug.lastIndexOf('/')
    const my_parent = markdownRemark.frontmatter.slug.substring(0, my_pos)
    const frontmatter=node.frontmatter
    const pos = frontmatter.slug.lastIndexOf('/')
    const parent = frontmatter.slug.substring(0, pos)
    const isSibling = ((parent == my_parent) && (markdownRemark.frontmatter.slug != frontmatter.slug))
    return (
      isSibling ?
        <div>
          &harr;&nbsp; 
          <IntlLink to={frontmatter.slug} style={{textDecoration: "none"}}>
            {frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}
          </IntlLink>
        </div> : ""
    )
  }
  function fnChildren(node) {
    const frontmatter=node.frontmatter
    const pos = frontmatter.slug.lastIndexOf('/')
    const parent = frontmatter.slug.substring(0, pos)
    const isChild = markdownRemark.frontmatter.slug == parent
    const level = frontmatter.slug.split('/').length - markdownRemark.frontmatter.slug.split('/').length
    return (
      isChild ?
        <div>
          &darr;&nbsp; 
          <IntlLink to={frontmatter.slug} style={{textDecoration: "none"}}>
            {frontmatter.navtitle ? frontmatter.navtitle : frontmatter.title}
          </IntlLink>
        </div> : ""
    )
  }
  return (
    <Page breadcrumbs={
      <div>
        {allMarkdownRemark.map( ({ node }) => fnBreadcrumbs(node) )}
      </div>
      } text={markdownRemark.frontmatter.title}>

      <FloatingToc>
        <h3 style={{marginTop: 0}}>navigation</h3>
        <h4 style={{marginBottom: 0}}>parents</h4>
        {allMarkdownRemark.map( ({ node }) => fnParents(node) )}
        <h4 style={{marginBottom: 0}}>siblings</h4>
        {allMarkdownRemark.map( ({ node }) => fnSiblings(node) )}
        <h4 style={{marginBottom: 0}}>children</h4>
        {allMarkdownRemark.map( ({ node }) => fnChildren(node) )}
      </FloatingToc>

      {markdownRemark.frontmatter.toc ?
        <div>
          <h3>table of contents</h3>
          {allMarkdownRemark.map( ({ node }) => fnToc(node) )}
        </div>
      : ""}

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
        toc
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