import React from 'react';
import Breadcrumbs from '../components/breadcrumbs';
import s from './page.module.scss';

export default ({ data }) => {
  const page = data.markdownRemark;
  return (
    <div>
      <Breadcrumbs
        category={page.frontmatter.category}
        slug={page.fields.slug}
        title={page.frontmatter.title}
      />

      <div
        className={s.markdown}
        dangerouslySetInnerHTML={{ __html: page.html }}
      />
    </div>
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        category
      }
    }
  }
`;
