import React from 'react';
import { Buttons, DarkThemeButtons, VariationThemeButtons } from '../components/button1'
import Button from '../components/button'
import classnames from 'classnames'
import Alert from '../components/alert'
import Link from 'gatsby-link';
import _ from 'lodash'
import Highlight from 'react-highlight';


import s from './style.module.css'

class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: 'HTML'
    };
    this.handleNavigationClick = this.handleNavigationClick.bind(this);
    this.renderNavigationTab = this.renderNavigationTab.bind(this);
    this.renderApiContainer = this.renderApiContainer.bind(this);
    this.renderTableRow = this.renderTableRow.bind(this);
    this.renderCodeContainer = this.renderCodeContainer.bind(this);
  }
  
  handleNavigationClick(name,e) {
    this.setState({code: name});
  }
  
  renderNavigationTab({name}) {
    const pageData = this.props.data.uiComponentsYaml? this.props.data.uiComponentsYaml : this.props.data.foundationYaml
    const codeContainer = pageData.codeContainer[0]
    return (
      <div onClick={(e) => this.handleNavigationClick(name, e)}  value={name} key ={name} className={classnames(s.navItem, _.isEmpty(codeContainer[name])? s.inactiveNav: '',  this.state.code==name? s.active: '')}>
        {name}
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
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {_.map(api,this.renderTableRow)}
        </tbody>
      </table>
    )
  }

  renderCodeContainer({title, text, type, props, componentName, REACT, HTML, CSS, ANGULAR }, index) {
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
    var HtmlCssCode = `<style> ${CSS} </style> ${HTML}`;

    function renderComponent(props) {
      if (_.isEmpty(props)) return
      return (
        <div className={s.componentClass}>
          <Component {...props}/>
        </div>
      )
    }
    return(
      <div
        key={index}
        className={s.codeContainer}
      >
        {title &&
          <h4>{title}</h4>
        }
        {text &&
          <p className='normalTextGlobalClass' dangerouslySetInnerHTML={{__html: text}}></p>
        }
        <div className={classnames('componentAndCodeContainerGlobalClass',title=='Dark theme'? 'darkThemeGlobalClass': '')}>
          {type &&
            <p>{type}</p>
          }
          <div className='componentsClassGlobalClass'>
            {_.map(props, renderComponent)}
            <div className={s.codeContainerInstance} dangerouslySetInnerHTML={{__html: HtmlCssCode}}></div>
          </div>
        </div>

        <pre className='codeHighlight'>
          {Code}
        </pre>
      </div>
    );
  }
  
  
  render() {
    const pageData = this.props.data.uiComponentsYaml? this.props.data.uiComponentsYaml : this.props.data.foundationYaml
    const codeContainer = pageData.codeContainer
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

    function renderParagraph(text, index) {
      return (
        <p key={index} className='normalTextGlobalClass' dangerouslySetInnerHTML={{__html: text}}></p>
      );
    }

    return (
      <div className='pageContainerGlobalClass'>
        <div className='pageMainContentGlobalClass'>
          <h3 className='pageHeader'>{pageData.title}</h3>
          {_.map(pageData.introductionText, renderParagraph)}
          <div className={s.navigationTab}>
            {_.map(navigationItems, this.renderNavigationTab)}
          </div>
          {_.map(pageData.codeContainer, this.renderCodeContainer)}
          <br />
          <span className={classnames(_.isEmpty(pageData.api)? s.disable: '')}>
          <h3>API</h3>
          {this.renderApiContainer(pageData.api)}
          </span>
        </div>
      </div>
    )
    
  }
  

}

export default Template;
