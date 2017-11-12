import React from "react"
import ComponentDisplay from '../components/componentDisplay'


export default ({ data }) => {
  const pageData = data.uiComponentsYaml
  console.log('data',pageData);
  let navigationItems = [
    {
      name: 'REACT'
    },
    {
      name: 'HTML'
    },
    {
      name: 'CSS'
    },
    {
      name: 'ANGULAR'
    },
  ];
  
  function handleClick(e) {
    console.log('value',e);
  };

  function renderLink() {
    return (
            <span className='test' onClick={handleClick()} value={name}>
              {name}
            </span>
    );
  }

  
  return (
    <div className='pageContainerGlobalClass'>
      <div className='pageMainContentGlobalClass'>
        <p className='pageTitleGlobalClass'>{pageData.title}</p>
        <p>{pageData.introductionText}</p>
        <ComponentDisplay
        reactCode={pageData.reactCode}
        />
      </div>
    </div>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    uiComponentsYaml(fields: { slug: { eq: $slug } }) {
      title
      introductionText
      reactCode
    }
  }
`
