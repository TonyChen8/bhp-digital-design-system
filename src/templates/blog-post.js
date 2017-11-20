import React from "react"

import Template from './template.js'


export default ({ data }) => {

  
  return (
      <Template data={data} />
  )
}

export const query = graphql`
query BlogPostQuery($slug: String!) {
uiComponentsYaml(fields: {slug: {eq: $slug}}) {
  title
  componentName
  introductionText
  codeContainer {
    title
    type
    text
    componentName
    REACT
    HTML
    CSS
    ANGULAR
    props {
      type
      text
    }
  }
  api {
    name
    type
    defaultText
    description
  }
}
}
`
