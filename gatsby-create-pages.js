const path = require(`path`)

module.exports = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allFoundationYaml {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        allUiComponentsYaml {
          edges {
            node {
              fields {
                slug
                templatePath
              }
            }
          }
        }
        allPatternsYaml {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      createWithTemplate = (edges, templatePath) => {
        edges.map(({ node }) => {
          // Skip schema files, as these are only there to establish the
          // structure
          if (node.fields.slug.match(/schema\/$/)) return;
          createPage({
            path: node.fields.slug,
            component: node.fields.templatePath || templatePath,
            context: {
              // Data passed to context is available in page queries as GraphQL variables.
              slug: node.fields.slug,
            },
          })
        })
      }

      createWithTemplate(
        result.data.allMarkdownRemark.edges,
        path.resolve(`./src/templates/page.js`)
      )
      createWithTemplate(
        result.data.allFoundationYaml.edges,
        path.resolve(`./src/templates/foundation.js`)
      )
      createWithTemplate(
        result.data.allUiComponentsYaml.edges,
        path.resolve(`./src/templates/ui-component.js`)
      )
      createWithTemplate(
        result.data.allPatternsYaml.edges,
        path.resolve(`./src/templates/pattern.js`)
      )
      resolve()
    })
  })
}
