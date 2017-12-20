const path = require(`path`)
const fs = require(`fs`)
const _ = require(`lodash`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const remark = require('remark')
const html = require('remark-html')

module.exports = ({ node, getNode, boundActionCreators }) => {
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
};
