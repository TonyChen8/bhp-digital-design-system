import template from '../src/templates/example-page-template';

REACT_EXAMPLE_IMPORT_PLACEHOLDER

const reactExamples = [
  REACT_EXAMPLE_ARRAY_PLACEHOLDER
];

export default ({ data }) => {
  const contents = Object.assign({}, data.uiComponentsYaml);
  contents.examples = contents.examples.map((example, index) => {
    if (example.react) {
      example = Object.assign({}, example);
      example.react = {
        source: example.react,
        fn: reactExamples[index],
      };
    }
    return example;
  });
  return template({
    contents,
    hideCodeTypePicker: false
  });
};

export const query = graphql`
  query GRAPHQL_QUERY_NAME_PLACEHOLDER($slug: String!) {
    uiComponentsYaml(fields: { slug: { eq: $slug } }) {
      title
      category
      examples {
        title
        introduction
        subTitle
        react
        css
        html
        actualHtml
      }
      fields {
        slug
        preHtml
        postHtml
      }
    }
  }
`;
