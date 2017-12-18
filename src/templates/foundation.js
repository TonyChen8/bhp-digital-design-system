import template from './example-page-template';

export default ({ data }) => {
  const contents = data.foundationYaml;
  return template({
    contents,
    hideCodeTypePicker: true
  });
};

export const query = graphql`
  query FoundationQuery($slug: String!) {
    foundationYaml(fields: { slug: { eq: $slug } }) {
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
