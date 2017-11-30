import React from "react"

import Template from './template.js'


export default ({ data }) => {

  
  return (
      <Template data={data} />
  )
}

export const query = graphql`
  query FoundationPageQuery($slug: String!) {
    foundationYaml(fields: { slug: { eq: $slug } }) {
      title
      componentName
      introductionText
      codeContainer {
        title
        type
        text
        componentName
        HTML
        CSS
      }
    }
  }
`
