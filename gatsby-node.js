const _ = require(`lodash`)
const path = require(`path`)
const fs = require(`fs`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { generatePathChunkName } = require(`gatsby-source-filesystem`)
const remark = require('remark')
const html = require('remark-html')

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  let slug;
  if (['MarkdownRemark', 'UiComponentsYaml', 'FoundationYaml', 'PatternsYaml'].indexOf(node.internal.type) != -1) {
    slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
  if (['UiComponentsYaml', 'FoundationYaml', 'PatternsYaml'].indexOf(node.internal.type) != -1) {
    createNodeField({
      node,
      name: `preHtml`,
      value: remark().use(html).processSync(node.preText).toString()
    })
    createNodeField({
      node,
      name: `postHtml`,
      value: remark().use(html).processSync(node.postText).toString()
    })
  }

  if (['UiComponentsYaml'].indexOf(node.internal.type) != -1) {
    // For UI Components, create a custom template in the .cache directory that
    // imports each of the react examples
    const reactExamplePaths = node.examples.map(({ react }, index) => {
      if (!react) return null;
      const path = `${__dirname}/.cache/${_.kebabCase(`${slug}-react-example${index}`)}.js`;
      fs.writeFileSync(path, react);
      return path;
    });

    const templateSource = fs.readFileSync(path.resolve(`./ui-component-template-base.js`), 'utf8')
      .replace(
        'REACT_EXAMPLE_IMPORT_PLACEHOLDER',
        reactExamplePaths.map(
          (path, index) => path ? `import reactExample${index} from '${path}'` : ''
        ).join('\n')
      )
      .replace(
        'REACT_EXAMPLE_ARRAY_PLACEHOLDER',
        reactExamplePaths.map((path, index) => path ? `reactExample${index}` : 'null').join(',')
      )
      .replace(
        'GRAPHQL_QUERY_NAME_PLACEHOLDER',
        _.camelCase(slug)
      );
    const templatePath = `${__dirname}/.cache/${_.kebabCase(`${slug}-template`)}.js`;
    fs.writeFileSync(templatePath, templateSource);

    createNodeField({
      node,
      name: `templatePath`,
      value: templatePath
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
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
