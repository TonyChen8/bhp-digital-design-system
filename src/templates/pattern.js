import template from './example-page-template';

export default ({ data }) => {
  const contents = data.patternsYaml;
  return template({
    contents,
    hideCodeTypePicker: true
  });
};

export const query = graphql`
  query PatternsQuery($slug: String!) {
    patternsYaml(fields: { slug: { eq: $slug } }) {
      title
      category
      examples {
        title
        introduction
        subTitle
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
