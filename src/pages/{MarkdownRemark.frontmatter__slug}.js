import React from "react"
import { graphql } from "gatsby"
import { Page } from "/src/components/Elements"

export default function Layout({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Page text={frontmatter.title}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
    }
  }
`