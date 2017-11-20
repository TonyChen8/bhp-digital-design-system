import React from 'react';
import { Buttons, DarkThemeButtons, VariationThemeButtons } from '../components/button1'
import Button from '../components/button'
import classnames from 'classnames'
import Alert from '../components/alert'
import Link from 'gatsby-link';
import _ from 'lodash'


import s from './style.module.css'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'HTML'
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.rendernavigationTab = this.rendernavigationTab.bind(this);
    this.renderApiContainer = this.renderApiContainer.bind(this);
    this.renderTableRow = this.renderTableRow.bind(this);
    this.renderCodeContainer = this.renderCodeContainer.bind(this);
  }
  
  handleNavigationClick(name,e) {
    this.setState({code: name});
  }
  
  rendernavigationTab({name}) {
    return (
      <div onClick={(e) => this.handleNavigationClick(name, e)}  value={name} key ={name} className={s.navItem}>
        <label value={name}>{name}</label>
      </div>
    )
  }
  
  renderTableRow({name,type,defaultText,description}) {
    return(
      <tr>
        <td className={s.nameCoulmnData}>{name}</td>
        <td>{type}</td>
        <td>{defaultText}</td>
        <td width="60%">{description}</td>
      </tr>
    )
  }
  
  renderApiContainer(api) {
    return(
      <table className={s.apiTable}>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
        {_.map(api,this.renderTableRow)}
      </table>
      
    )
  }
  
  renderCodeContainer({title, text, type, props, componentName, REACT, HTML, CSS, ANGULAR }) {
    console.log('react');
    const components = {
      button: Buttons,
      alert: Alert,
      darkThemeButtons: DarkThemeButtons,
      variationThemeButtons: VariationThemeButtons,
    };

    var Component = components[componentName];
    
    const code = {
      REACT: REACT,
      HTML: HTML,
      CSS: CSS,
      ANGULAR: ANGULAR
    };

    var Code = code[this.state.code];
    
    function renderComponent(props) {
      if (_.isEmpty(props)) return
      return (
        <div className={s.componentClass}>
          <Component {...props}/>
        </div>
      )
    }
    return(
      <div>
        <p className='subTitleGlobalClass'>{title}</p>
        <p className='normalTextGlobalClass' dangerouslySetInnerHTML={{__html: text}}></p>
        <div className='componentAndCodeContainerGlobalClass'>
          <p>{type}</p>
          <div className='componentsClassGlobalClass'>
            {_.map(props, renderComponent)}
          </div>
          <pre className='codeContainerGlobalClass'>{Code}</pre>
        </div>
        
      </div>
    );
  }
  
  
  render() {
    const pageData = this.props.data.uiComponentsYaml? this.props.data.uiComponentsYaml : this.props.data.foundationsYaml
    const codeContainer = pageData.codeContainer
    console.log('codeContainer',codeContainer);
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

    function renderParagraph(text) {
      return (
        <p className='normalTextGlobalClass' dangerouslySetInnerHTML={{__html: text}}></p>
      );
    }
    
    return (
      <div className='pageContainerGlobalClass'>
        <div className='pageMainContentGlobalClass'>
          <p className='pageTitleGlobalClass'>{pageData.title}</p>
          {_.map(pageData.introductionText, renderParagraph)}
          <div className={s.navigationTab}>
            {_.map(navigationItems, this.rendernavigationTab)}
          </div>
          {_.map(pageData.codeContainer, this.renderCodeContainer)}
          <br />
          <h3>API</h3>
          {this.renderApiContainer(pageData.api)}
        </div>
      </div>
    )
    
  }
  

}

export default Template;
